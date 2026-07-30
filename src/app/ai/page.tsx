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
    title: "A multi-hour report becomes a reviewed draft in minutes",
    desc: "A multi-stage AI pipeline — evidence extraction, drafting, validation, assembly — ingests the audit's documents and writes a complete Stage 1 or Stage 2 report, filled into your CB's own report template. A coordinate-based assembly step places findings into the exact template cells and ticks conclusion checkboxes, across all eight standards including integrated audits. Safety checks block delivery on leaked names or unfilled placeholders. Runs in the background; every output is reviewable and editable.",
    scenario: "Your lead auditor just finished a Stage 2 for an integrated ISO 9001 + 14001 + 45001 audit. Instead of spending four hours writing the report from scratch, they review an AI-generated draft that's already in your template, with findings placed in the correct cells.",
    without: "Auditors spend hours per report, quality drifts between people.",
    supported: "All 8 standards including integrated audits",
    dark: true,
  },
  {
    title: "Catch the problems your accreditation body would catch — before they do",
    desc: "Submit a completed report and the AI checks it against a structured accreditation-body rule profile (e.g. UAF / TÜRKAK) — nonconformity classification, mandatory clause coverage, finding-depth minimums — plus the standard's required clauses. Returns typed findings (critical / major / minor / warning) as real inline comments in the Word document. The report is reviewed before it ever reaches the accreditation body.",
    scenario: "A new auditor submits their first Stage 2 report. Before you send it to the reviewer, the AI flags that two mandatory clauses have no findings, one NC is classified incorrectly, and three findings lack sufficient depth. Those are exactly the problems your AB would raise at a witness audit.",
    without: "Report weaknesses are found at the witness audit, as nonconformities against the CB.",
    dark: false,
  },
  {
    title: "Correct clause exclusions in seconds, not 30–60 minutes",
    desc: "When a client submits an application — say, a cloud services company with 30 employees — the AI analyzes the scope description and identifies which standard clauses are not applicable. The auditor sees a pre-populated exclusion list on the audit plan: review, adjust, confirm. AI suggestions are constrained to a system-approved candidate list and re-filtered in code, so it can only propose legitimately-excludable clauses. Suggestions only; the planner confirms.",
    scenario: "A cloud services company applies for ISO 27001. The AI identifies that physical manufacturing clauses don't apply, pre-populates the exclusion list, and the planner confirms in under a minute.",
    without: "Planners spend 30–60 minutes per application cross-referencing clause applicability manually.",
    supported: "ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 22000, ISO 13485",
    dark: true,
  },
  {
    title: "Audit days your accreditation body will accept, calculated in seconds",
    desc: "A deterministic engine implementing IAF MD 5 / ISO 22003-1 / IAF MD 11 tables — employee-count bands, ISO 27001 √-method, EnMS K-factor, site additions, multi-standard integration reductions (with MD 11 50% floor), 20% reporting deduction, IAF rounding. AI reads the application form into structured numbers; the math itself is deterministic and auditable. Planners can override with mandatory justification.",
    without: "Hand-calculating from MD 5 tables — slow, inconsistent, frequent source of accreditation findings.",
    dark: false,
  },
  {
    title: "No coverage gaps — the system catches what you'd miss",
    desc: "Each auditor has a competence profile per standard (EA codes, scope categories, accreditation bodies, technical depth, witness records). When planning a stage, the system checks availability with a real date-overlap query and computes scope coverage — matching team EA codes against everything the audit requires, flagging exactly what's uncovered. This is deterministic rule-checking, not guesswork. AI is used only to read auditor CVs and extract qualifications.",
    scenario: "You assign a two-person team to a Stage 2 covering EA codes 17 and 28. The system flags: \"EA code 28 (Chemicals) not covered by any team member — add a qualified TE before scheduling Stage 2.\" You catch the gap before the accreditation body does.",
    without: "A coverage gap or double-booking is caught by the accreditation body, not by you.",
    dark: true,
  },
  {
    title: "Auditor qualifications extracted from CVs — no manual data entry",
    desc: "Upload an auditor's CV and the AI extracts their qualifications — EA codes, scope categories, standards experience, witness records, language proficiencies. The competence profile populates automatically, ready for the planner to review and confirm. No one types EA codes into a spreadsheet row by row.",
    scenario: "A new technical expert joins your roster. Instead of manually entering 14 EA codes, 3 standards, and 8 years of witness history, you upload their CV. The AI extracts everything into a structured profile in seconds. The planner reviews and confirms.",
    without: "Manual data entry for every auditor — slow, error-prone, and nobody enjoys it.",
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
            Hours of manual work,{" "}<span className="gradient-text">finished in minutes</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Drafted reports, pre-reviewed documents, correct audit days, validated scope coverage — that&apos;s what Certiva delivers. AI is how it&apos;s done, not why it exists. Every feature solves a real operational problem. No theater.
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
            {"scenario" in f && (
              <motion.div variants={fadeUp} className={`mt-6 rounded-lg border p-4 ${f.dark ? "border-white/10 bg-white/5" : "border-gray-200 bg-gray-50"}`}>
                <p className={`text-sm font-semibold ${f.dark ? "text-[var(--certiva-glow)]" : "text-[var(--certiva-green)]"}`}>Scenario</p>
                <p className={`mt-1 text-sm leading-relaxed ${f.dark ? "text-gray-400" : "text-gray-500"}`}>{f.scenario}</p>
              </motion.div>
            )}
            {"without" in f && (
              <motion.p variants={fadeUp} className={`mt-4 text-sm italic ${f.dark ? "text-gray-500" : "text-gray-400"}`}>
                Without it: {f.without}
              </motion.p>
            )}
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
            Every AI feature works on real certification data, and every output is reviewable and editable by your team. The AI does the heavy lifting — you keep the judgment.
          </p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
            Book a Demo to See the AI in Action
          </Link>
        </div>
      </section>
    </>
  );
}
