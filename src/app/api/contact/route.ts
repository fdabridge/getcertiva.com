import { NextResponse } from "next/server";

const GOOGLE_FORM_ENDPOINT =
  "https://docs.google.com/forms/d/e/1FAIpQLSfKcOUmRN4_KqHBzbte9rnUSzBTDCJNQIREbMlNxQ8cWIqwlQ/formResponse";

const FORM_FIELDS = {
  name: "entry.472487105",
  organization: "entry.1200447731",
  email: "entry.1802916330",
  standards: "entry.1431447538",
  currentTools: "entry.729381257",
  message: "entry.548381380",
  accreditation: "entry.376520501",
} as const;

const ALLOWED_ACCREDITATION_BODIES = new Set([
  "",
  "JAS-ANZ",
  "UKAS",
  "DAkkS",
  "ANAB",
  "SAS",
  "COFRAC",
  "Other",
  "Not yet accredited",
]);

const REQUEST_LIMIT = 16_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: unknown;
  organization?: unknown;
  email?: unknown;
  standards?: unknown;
  accreditation?: unknown;
  current_tools?: unknown;
  message?: unknown;
  website?: unknown;
};

function text(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  return normalized.length <= maxLength ? normalized : null;
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const { hostname, protocol } = new URL(origin);
    return (
      (protocol === "https:" &&
        (hostname === "getcertiva.com" || hostname === "www.getcertiva.com")) ||
      (protocol === "http:" && (hostname === "localhost" || hostname === "127.0.0.1"))
    );
  } catch {
    return false;
  }
}

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientId = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const current = rateLimits.get(clientId);

  if (!current || current.resetAt <= now) {
    rateLimits.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function errorResponse(error: string, status: number) {
  return NextResponse.json({ success: false, error }, { status });
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return errorResponse("This request could not be verified.", 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return errorResponse("Invalid request format.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > REQUEST_LIMIT) {
    return errorResponse("The request is too large.", 413);
  }

  if (isRateLimited(request)) {
    return errorResponse("Too many requests. Please try again in a few minutes.", 429);
  }

  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return errorResponse("Invalid request.", 400);
  }

  // Bots commonly fill hidden fields. Return a neutral response without creating a lead.
  if (typeof data.website === "string" && data.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const name = text(data.name, 120);
  const organization = text(data.organization, 160);
  const email = text(data.email, 254);
  const standards = text(data.standards, 500);
  const accreditation = text(data.accreditation, 64);
  const currentTools = text(data.current_tools, 500);
  const message = text(data.message, 2_000);

  if (!name || !organization || !email) {
    return errorResponse("Please complete your name, organization, and work email.", 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorResponse("Please enter a valid work email.", 400);
  }

  if (
    standards === null ||
    accreditation === null ||
    currentTools === null ||
    message === null ||
    !ALLOWED_ACCREDITATION_BODIES.has(accreditation)
  ) {
    return errorResponse("One or more fields contain invalid information.", 400);
  }

  const formData = new URLSearchParams({
    [FORM_FIELDS.name]: name,
    [FORM_FIELDS.organization]: organization,
    [FORM_FIELDS.email]: email,
    [FORM_FIELDS.standards]: standards,
    [FORM_FIELDS.accreditation]: accreditation,
    [FORM_FIELDS.currentTools]: currentTools,
    [FORM_FIELDS.message]: message,
  });

  try {
    const response = await fetch(GOOGLE_FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: formData,
      cache: "no-store",
      redirect: "manual",
      signal: AbortSignal.timeout(10_000),
    });

    if (response.status < 200 || response.status >= 400) {
      console.error("Certiva contact delivery failed", { status: response.status });
      return errorResponse(
        "We couldn't deliver your request. Please try again or email innovation@getcertiva.com.",
        502,
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Certiva contact delivery failed", {
      reason: error instanceof Error ? error.name : "unknown",
    });
    return errorResponse(
      "We couldn't deliver your request. Please try again or email innovation@getcertiva.com.",
      502,
    );
  }
}
