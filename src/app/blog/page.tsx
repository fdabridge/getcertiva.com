import type { Metadata } from "next";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Certiva ISO Certification Insights",
  description: "Guides and analysis for ISO certification body professionals. IAF rules, accreditation compliance, audit management.",
};

const UPCOMING = [
  "IAF MD 5 Explained: How Audit Time is Calculated for ISO Certification",
  "What Accreditation Bodies Look for in a CB's Document Management System",
  "ISO 27001 vs ISO 9001: Why the EA Code Systems Are Completely Different",
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[var(--bg-dark)] pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] text-white">
            Certiva Insights
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Guides, updates, and analysis for certification body professionals.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {UPCOMING.map((title) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-[var(--certiva-mist)] p-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Lock size={14} />
                  <span className="text-xs font-semibold uppercase tracking-widest">Coming soon</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-[var(--text-dark)]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
