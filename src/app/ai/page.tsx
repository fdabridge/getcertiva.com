"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import GradientOrbs from "@/components/GradientOrbs";
import SectionBadge from "@/components/SectionBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const AI_FEATURES = [
  {
    title: "Clause exclusions in seconds, not hours",
    desc: "When a client submits an application for ISO 27001 with a defined scope — say, a cloud services company with 30 employees — Certiva's AI analyzes the scope description and automatically identifies which standard clauses are not applicable to that client's operation. The auditor sees a pre-populated list on the audit plan. They review, adjust, and confirm. What used to take 30–60 minutes takes under a minute.",
    supported: "ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000, ISO 13485",
    dark: true,
  },
  {
    title: "Audit time that satisfies your accreditation body",
    desc: "IAF Mandatory Document 5 defines audit time calculation rules based on employee count, scope size, risk level, number of standards, multi-site factors, and EA code complexity. Certiva's AI applies the MD 5 calculation matrix to each audit set automatically — accounting for K-factors, multi-standard reductions, and risk adjustments — and surfaces a recommended audit day allocation broken down by stage. Planners can override the recommendation with a mandatory justification note.",
    dark: false,
  },
  {
    title: "No coverage gaps before you schedule",
    desc: "Before a stage can be scheduled, Certiva validates that the assigned audit team covers every EA code and standard combination in the audit scope. The system checks lead auditor qualifications, technical expert coverage, and flags any gap with a specific explanation: \"EA code 28 (Chemicals) not covered by any team member — add a qualified TE before scheduling Stage 2.\" This runs automatically. No manual checklist required.",
    dark: true,
  },
  {
    title: "Risk-aware audit planning",
    desc: "Not all ISO 9001 audits are the same risk level. A pharmaceutical manufacturer carries more risk than a marketing agency. Certiva classifies audit complexity using scope keywords, industry EA code, organization size, and accreditation body-specific risk tables. The risk level informs audit time (K-factor), committee composition requirements, and report review escalation. Planners see the AI assessment and can override it with documented justification.",
    dark: false,
  },
];

export default function AIPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pt-32 pb-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <SectionBadge dark>Artificial Intelligence</SectionBadge>
          <h1 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] text-white">
            AI that understands{" "}<span className="gradient-text">ISO certification standards</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Certiva doesn&apos;t use AI as a buzzword. Every AI feature solves a real, specific problem that costs certification bodies time and money.
          </p>
        </div>
      </section>

      {AI_FEATURES.map((f, i) => (
        <section key={i} className={`py-20 ${f.dark ? "relative overflow-hidden bg-[var(--bg-dark)]" : "bg-white"}`}>
          {f.dark && <GradientOrbs />}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="relative z-10 mx-auto max-w-4xl px-6"
          >
            <motion.h2 variants={fadeUp} className={`text-2xl font-extrabold ${f.dark ? "text-white" : "text-gray-900"}`}>
              {f.title}
            </motion.h2>
            <motion.p variants={fadeUp} className={`mt-4 leading-relaxed ${f.dark ? "text-gray-300" : "text-gray-600"}`}>
              {f.desc}
            </motion.p>
            {"supported" in f && (
              <motion.p variants={fadeUp} className="mt-4 text-sm text-[var(--certiva-glow)]">
                Supported standards: {f.supported}
              </motion.p>
            )}
          </motion.div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-white">
            AI built for auditors, <span className="gradient-text">not for demos</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Every AI feature in Certiva works on real certification data — not synthetic examples — and every output can be reviewed and overridden.
          </p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
            Book a Demo to See the AI in Action
          </Link>
        </div>
      </section>
    </>
  );
}
