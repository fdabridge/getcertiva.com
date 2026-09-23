import type { Metadata } from "next";
import GradientOrbs from "@/components/GradientOrbs";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Book a Demo — Certiva ISO Certification Management",
  description: "Request a live demo of Certiva tailored to your standards and accreditation requirements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pt-32 pb-16">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] text-white">
            Book a live demo
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            We&apos;ll configure the demo around your exact standards and accreditation requirements.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <DemoForm />
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-[var(--certiva-mist)] p-6">
              <h3 className="text-lg font-bold text-gray-900">What the demo covers</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-[var(--certiva-green)]">✓</span> Full 14-phase workflow walkthrough</li>
                <li className="flex items-start gap-2"><span className="text-[var(--certiva-green)]">✓</span> Document generation and digital signing</li>
                <li className="flex items-start gap-2"><span className="text-[var(--certiva-green)]">✓</span> AI clause generation and audit time calculation</li>
                <li className="flex items-start gap-2"><span className="text-[var(--certiva-green)]">✓</span> Committee review and certification decision</li>
                <li className="flex items-start gap-2"><span className="text-[var(--certiva-green)]">✓</span> Client and auditor portal experience</li>
              </ul>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-sm font-semibold text-gray-900">Direct contact</p>
                <p className="mt-2 text-sm text-gray-600">innovation@getcertiva.com</p>
                <p className="mt-1 text-xs text-gray-400">Response time: 1 business day</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
