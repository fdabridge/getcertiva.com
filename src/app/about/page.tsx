"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import GradientOrbs from "@/components/GradientOrbs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const VALUES = [
  { title: "Your process, enforced — not just documented", desc: "Other platforms document your process. Certiva enforces it. Stage 2 can't start with open Stage 1 NCs. The certificate can't issue until the committee has signed. These aren't guidelines — they're gates." },
  { title: "One system, not five", desc: "Certification management, document generation, digital signing, training academy, CRM — one platform instead of five separate tools with five separate invoices and five separate logins." },
  { title: "The audit trail is the product", desc: "Every signature, decision, status change, and communication is timestamped and stored. Your accreditation body will find everything, in the right order. That's not a feature — it's the point." },
  { title: "AI as infrastructure, not theater", desc: "Our AI drafts reports, reviews them against accreditation-body rules, calculates audit days, and suggests clause exclusions. Every output is reviewable and overridable. The AI does the heavy lifting — you keep the judgment." },
];

const WHO_FOR = [
  { title: "Small CBs (1–3 standards)", desc: "You need structure without overhead. One system handles your entire lifecycle — applications, documents, signing, training, and the audit trail your accreditation body expects — without a team of administrators." },
  { title: "Multi-standard CBs (4–8 standards)", desc: "Integrated audits across ISO 9001, 14001, 45001, 27001, and more. Each standard with its correct scope system, and audit time calculations that handle MD 11 integration reductions automatically." },
  { title: "CBs seeking accreditation", desc: "Building the paper trail from day one. When the accreditation body comes for assessment, every process step, every document version, every signing chain is already recorded and in order." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pt-32 pb-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] text-white">
            Built inside a certification body.{" "}<span className="gradient-text">For every certification body.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Certiva wasn&apos;t built by a software company looking at certification from the outside. It was built by people who were tired of losing hours to manual reports, chasing signatures by email, and hoping nothing was missing when the accreditation body showed up.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="prose prose-lg max-w-none">
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed">
              Running an accredited certification body means managing dozens of simultaneous audit lifecycles — each with its own standards, scope systems, document sets, and signing chains. The tools available were either generic project management with &quot;audit&quot; bolted on, or legacy systems that predate digital signatures, IAF MD 5 calculators, and AI report generation. The result: spreadsheets for tracking, email for signatures, manual PDF assembly for documents, a separate LMS for training, and a prayer that nothing was missing when the accreditation body asked for proof.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-gray-600 leading-relaxed">
              Certiva was built to end that. Every document template is the CB&apos;s actual FR form. Every workflow gate reflects the actual IAF requirement. Every signing chain matches what accreditation bodies expect. And when the AB asks for proof of process or communication, it&apos;s already recorded — in order, with timestamps.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--certiva-mist)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">Our values</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-[var(--certiva-green)]">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-extrabold text-gray-900">Who it&apos;s for</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-3">
            {WHO_FOR.map((w) => (
              <motion.div key={w.title} variants={fadeUp} className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">{w.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
              Book a Demo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
