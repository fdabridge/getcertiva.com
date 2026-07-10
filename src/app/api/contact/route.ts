import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, organization } = data;
    if (!name || !email || !organization) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    // TODO: integrate Resend or Formspree for email delivery
    console.log("[DEMO REQUEST]", JSON.stringify(data, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
