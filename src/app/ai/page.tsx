"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  Check,
  ClipboardCheck,
  FileSearch,
  FileText,
  Scale,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";
import GradientOrbs from "@/components/GradientOrbs";
import SectionBadge from "@/components/SectionBadge";
import { CertivAIProductPreview } from "@/components/FeatureProductPreview";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const CAPABILITIES = [
  {
    icon: FileText,
    label: "Report generation",
    title: "A complete draft in your own template.",
    copy: "CertivAI reads the evidence package, drafts Stage 1 and Stage 2 reports, and places the output into the correct document structure for expert review.",
    result: "Hours of writing become a focused review.",
  },
  {
    icon: FileSearch,
    label: "Report review",
    title: "Find gaps before the accreditation body does.",
    copy: "Completed reports are checked for missing clause coverage, weak finding depth, inconsistent classifications, and accreditation-profile requirements.",
    result: "Review comments appear where the team can act on them.",
  },
  {
    icon: Calculator,
    label: "Planning intelligence",
    title: "Defensible audit time and exclusions.",
    copy: "Structured application data feeds deterministic IAF MD 5, MD 11, and standard-specific calculations. Clause exclusions are suggested from approved candidates.",
    result: "Fast answers with visible inputs and override justification.",
  },
  {
    icon: UserCheck,
    label: "Competence and coverage",
    title: "Know the assigned team covers the scope.",
    copy: "Qualifications are extracted from CVs, then checked against standards, EA codes, scope categories, witness history, and assignment dates.",
    result: "Coverage gaps are visible before the audit is scheduled.",
  },
] as const;

const PIPELINE = [
  { step: "01", title: "Read", copy: "Evidence and application data are extracted into a structured working set." },
  { step: "02", title: "Reason", copy: "The relevant standard, rules, scope, and certification context are applied." },
  { step: "03", title: "Prepare", copy: "A draft, calculation, or review is created in the required format." },
  { step: "04", title: "Approve", copy: "Your team reviews, edits, overrides where needed, and remains accountable." },
] as const;

const TRUST_MODEL = [
  {
    icon: Scale,
    title: "Rules stay deterministic",
    copy: "Where the answer is governed by tables or hard constraints, Certiva uses auditable calculations—not model improvisation.",
  },
  {
    icon: ClipboardCheck,
    title: "Every output is reviewable",
    copy: "AI results are presented as drafts, suggestions, or findings. The responsible professional confirms the final decision.",
  },
  {
    icon: ShieldCheck,
    title: "The record stays visible",
    copy: "Inputs, outputs, edits, justifications, and approvals remain part of the certification evidence trail.",
  },
] as const;

export default function AIPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pb-20 pt-32 sm:pb-24">
        <GradientOrbs />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
            <motion.div variants={fadeUp}><SectionBadge dark>CertivAI</SectionBadge></motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-7 text-[clamp(2.7rem,5.2vw,4.7rem)] font-black leading-[0.98] tracking-[-0.045em] text-white"
            >
              Expert work, <span className="gradient-text">accelerated.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-300 lg:mx-0 lg:text-lg">
              Draft reports, review evidence, calculate audit time, and validate scope coverage—while your team keeps the judgment and final approval.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--certiva-green)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
                See CertivAI Live <ArrowRight size={15} />
              </Link>
              <span className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-400">
                <Check size={14} className="text-[var(--certiva-glow)]" /> Reviewable and overridable
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <CertivAIProductPreview />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp}><SectionBadge>What It Does</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-gray-950">
              AI for the work that consumes your experts&apos; time.
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
              Each capability starts with a real certification task and ends with an output your team can inspect.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            {CAPABILITIES.map((capability) => (
              <motion.article key={capability.title} variants={fadeUp} className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-emerald-200 hover:shadow-[0_12px_40px_rgba(26,71,49,0.06)] sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-[var(--certiva-green)]">
                    <capability.icon size={19} />
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--certiva-green)]">{capability.label}</p>
                </div>
                <h3 className="mt-5 text-xl font-bold leading-7 text-gray-950">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{capability.copy}</p>
                <p className="mt-5 border-t border-gray-100 pt-4 text-xs font-semibold text-emerald-800">{capability.result}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-20 sm:py-24">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}><SectionBadge dark>How It Works</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-white">
              A controlled pipeline, not a <span className="gradient-text">black box.</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-12 grid gap-4 md:grid-cols-4"
          >
            {PIPELINE.map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-[12px]">
                <span className="text-xs font-black text-[var(--certiva-glow)]">{item.step}</span>
                <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{item.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--certiva-mist)] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp} className="mx-auto grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-[var(--certiva-green)]">
              <Sparkles size={20} />
            </motion.div>
            <motion.h2 variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-gray-950">
              Automation with a clear boundary around professional judgment.
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-12 grid gap-5 lg:grid-cols-3"
          >
            {TRUST_MODEL.map((item) => (
              <motion.article key={item.title} variants={fadeUp} className="rounded-2xl border border-emerald-100 bg-white p-6">
                <item.icon className="h-6 w-6 text-[var(--certiva-green)]" />
                <h3 className="mt-5 text-lg font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-white">
            Bring one real workflow. <span className="gradient-text">See the time it gives back.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-300">
            We&apos;ll demonstrate CertivAI with the standards, templates, and review steps your team actually uses.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
            Book a CertivAI Demo <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
