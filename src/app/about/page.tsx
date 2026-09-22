"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileCheck2, GitBranch, ShieldCheck, Sparkles, Users } from "lucide-react";
import GradientOrbs from "@/components/GradientOrbs";
import SectionBadge from "@/components/SectionBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const PRINCIPLES = [
  {
    icon: GitBranch,
    label: "Process before features",
    title: "The workflow must protect the certification.",
    copy: "Certiva does more than record what happened. It enforces the gates, roles, and sequence that make the record defensible.",
  },
  {
    icon: FileCheck2,
    label: "Evidence by default",
    title: "The audit trail is not an afterthought.",
    copy: "Documents, signatures, decisions, findings, and communications stay connected to the same certification lifecycle.",
  },
  {
    icon: Sparkles,
    label: "Human authority",
    title: "AI prepares the work. Experts decide.",
    copy: "Automation removes repetitive effort while every material output remains visible, reviewable, and overridable by your team.",
  },
] as const;

const AUDIENCES = [
  {
    title: "Growing certification bodies",
    copy: "Replace spreadsheet coordination and disconnected tools before administration becomes the limit on growth.",
  },
  {
    title: "Multi-standard operations",
    copy: "Run integrated audits across different scope systems, competence rules, templates, and accreditation requirements.",
  },
  {
    title: "Teams preparing for accreditation",
    copy: "Build the evidence trail from the first application so the process is already visible when the assessor arrives.",
  },
] as const;

const REPLACES = [
  "Spreadsheet trackers",
  "Shared-drive document sets",
  "Email signature chasing",
  "Separate training software",
  "Generic CRM workflows",
  "Manual audit-time calculations",
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pb-20 pt-32 sm:pb-24">
        <GradientOrbs />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        >
          <motion.div variants={fadeUp}><SectionBadge dark>About Certiva</SectionBadge></motion.div>
          <motion.h1
            variants={fadeUp}
            className="mx-auto mt-7 max-w-4xl text-[clamp(2.6rem,5.5vw,4.8rem)] font-black leading-[0.98] tracking-[-0.045em] text-white"
          >
            Certification software, built from <span className="gradient-text">inside the work.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Certiva began with a simple conviction: a certification body should not need five disconnected tools to produce one controlled record.
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionBadge>Why We Built It</SectionBadge></motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-gray-950"
            >
              The problem was not a lack of software.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-5 text-base leading-8 text-gray-600">
            <motion.p variants={fadeUp}>
              The available tools treated certification like generic project management. They stored client records, but they did not understand stage gates, scope coverage, impartiality, signing order, accreditation rules, or the document trail behind a defensible decision.
            </motion.p>
            <motion.p variants={fadeUp}>
              Certiva was built around those realities. Your templates remain your templates. The lifecycle follows certification logic. Each action contributes to a complete, timestamped record that your team can operate—and your accreditation body can examine.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 px-6 p-px md:grid-cols-4"
        >
          {[["14", "controlled phases"], ["15+", "generated forms"], ["8", "ISO standards"], ["1", "complete audit trail"]].map(([value, label]) => (
            <motion.div key={label} variants={fadeUp} className="bg-white px-4 py-7 text-center">
              <p className="text-3xl font-black text-[var(--certiva-green)]">{value}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.13em] text-gray-500">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[var(--certiva-mist)] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}><SectionBadge>Operating Principles</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-gray-950">
              Built for control without creating more administration.
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-12 grid gap-5 lg:grid-cols-3"
          >
            {PRINCIPLES.map((principle) => (
              <motion.article key={principle.title} variants={fadeUp} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-[0_12px_40px_rgba(26,71,49,0.05)]">
                <principle.icon className="h-6 w-6 text-[var(--certiva-green)]" />
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--certiva-green)]">{principle.label}</p>
                <h3 className="mt-2 text-xl font-bold leading-7 text-gray-950">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{principle.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 text-[var(--certiva-green)]">
                <Users size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Who It Is For</span>
              </motion.div>
              <motion.div variants={stagger} className="mt-7 space-y-7">
                {AUDIENCES.map((audience) => (
                  <motion.div key={audience.title} variants={fadeUp} className="border-l-2 border-emerald-200 pl-5">
                    <h3 className="text-lg font-bold text-gray-950">{audience.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{audience.copy}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-[var(--bg-dark)] p-7 sm:p-8"
            >
              <ShieldCheck className="h-7 w-7 text-[var(--certiva-glow)]" />
              <h2 className="mt-5 text-2xl font-bold text-white">One operating system replaces the patchwork.</h2>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {REPLACES.map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-medium text-gray-300">{item}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-white">
            See how Certiva fits <span className="gradient-text">your certification body.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-300">
            Bring your standards, workflow, and document set. We&apos;ll map the complete record with you.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
            Book a Live Demo <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
