"use client";
import { useState, FormEvent } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!res.ok || !result?.success) {
        throw new Error(result?.error || "We couldn't deliver your request. Please try again.");
      }

      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We couldn't deliver your request. Please try again or email innovation@getcertiva.com.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--certiva-pale)] bg-[var(--certiva-mist)] p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--certiva-green)]">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[var(--certiva-green)]">Thank you!</h3>
        <p className="mt-2 text-gray-600">We&apos;ll be in touch within 1 business day to schedule your demo.</p>
      </div>
    );
  }

  const inputClass = "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[var(--certiva-light)] focus:outline-none focus:ring-2 focus:ring-[var(--certiva-light)]/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="demo-website">Website</label>
        <input
          id="demo-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={inputClass} />
        <input name="organization" required placeholder="Organization / CB name" className={inputClass} />
      </div>
      <input name="email" type="email" required placeholder="Work email" className={inputClass} />
      <input name="standards" placeholder="Standards you operate (e.g. ISO 9001, 14001, 27001)" className={inputClass} />
      <select name="accreditation" className={inputClass} defaultValue="">
        <option value="" disabled>Accreditation body</option>
        <option>JAS-ANZ</option>
        <option>UKAS</option>
        <option>DAkkS</option>
        <option>ANAB</option>
        <option>SAS</option>
        <option>COFRAC</option>
        <option>Other</option>
        <option>Not yet accredited</option>
      </select>
      <input name="current_tools" placeholder="What tools are you using today?" className={inputClass} />
      <textarea name="message" rows={3} placeholder="Anything else you'd like us to know?" className={inputClass} />
      {error && (
        <p
          role="alert"
          aria-live="assertive"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}{" "}
          <a className="font-semibold underline" href="mailto:innovation@getcertiva.com">
            Email us directly
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="w-full rounded-xl bg-[var(--certiva-green)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)] disabled:opacity-50"
      >
        {loading ? "Sending..." : "Request a Demo"}
      </button>
    </form>
  );
}
