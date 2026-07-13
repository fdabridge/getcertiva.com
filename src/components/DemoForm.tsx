"use client";
import { useState, FormEvent } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // fallback
      setSubmitted(true);
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
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[var(--certiva-green)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)] disabled:opacity-50"
      >
        {loading ? "Sending..." : "Request a Demo"}
      </button>
    </form>
  );
}
