"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FileCheck2, GitBranch, ShieldCheck, Sparkles } from "lucide-react";
import GradientOrbs from "@/components/GradientOrbs";
import SectionBadge from "@/components/SectionBadge";
import ProductShowcase, { HeroProductPreview } from "@/components/ProductShowcase";
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

const OUTCOMES = [
  {
    icon: GitBranch,
    label: "Controlled workflow",
    title: "Every gate happens in the right order.",
    copy: "Applications, planning, audits, reviews, decisions, certificates, and surveillance stay in one enforced lifecycle.",
  },
  {
    icon: FileCheck2,
    label: "Complete record",
    title: "The document is already where it belongs.",
    copy: "Your forms are generated from live data. Signatures, findings, evidence, and approvals remain attached to the same record.",
  },
  {
    icon: ShieldCheck,
    label: "Audit-ready evidence",
    title: "When the accreditation body asks, the proof is there.",
    copy: "Qualifications, impartiality, audit time, committee coverage, and every timestamp are retained and reviewable.",
  },
] as const;

const AI_OUTCOMES = [
  "Draft complete audit reports in your own template",
  "Calculate defensible audit days and clause exclusions",
  "Flag missing coverage and report gaps before submission",
] as const;

const STANDARDS = [
  "ISO 9001",
  "ISO 14001",
  "ISO 45001",
  "ISO 27001",
  "ISO 22000",
  "ISO 13485",
  "ISO 37001",
  "ISO 50001",
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pb-20 pt-28 lg:pb-24 lg:pt-32">
        <GradientOrbs />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
            <motion.div variants={fadeUp}>
              <SectionBadge dark>Built Inside a Certification Body</SectionBadge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-7 text-[clamp(2.7rem,5.2vw,4.8rem)] font-black leading-[0.97] tracking-[-0.045em] text-white"
            >
              Run the certification. <span className="gradient-text">Keep the proof.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-300 lg:mx-0 lg:text-lg"
            >
              One controlled system for the complete certification lifecycle—from application and audit to decision, certificate, and surveillance.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--certiva-green)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)] hover:shadow-[0_0_30px_rgba(82,194,122,0.18)]"
              >
                Book a Demo →
              </Link>
              <Link
                href="#product"
                className="flex items-center gap-2 rounded-full border border-gray-600 px-7 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-[var(--certiva-glow)] hover:text-white"
              >
                See the product <ArrowDown size={14} />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[["14", "enforced phases"], ["15+", "generated forms"], ["8", "ISO standards"]].map(([value, label]) => (
                <div key={label}>
                  <p className="text-xl font-black text-white sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-[0.1em] text-gray-500">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroProductPreview />
          </motion.div>
        </div>
      </section>

      <section className="border-b border-emerald-100 bg-[var(--certiva-mist)] py-5">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 text-center">
          <ShieldCheck size={17} className="shrink-0 text-[var(--certiva-green)]" />
          <p className="text-sm font-medium text-gray-700">
            Purpose-built for certification bodies operating under ISO/IEC 17021-1.
          </p>
        </div>
      </section>

      <section id="product" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center"
          >
            <motion.div variants={fadeUp}><SectionBadge>Working Product</SectionBadge></motion.div>
            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.75rem)] font-black leading-[1.05] tracking-[-0.035em] text-gray-950"
            >
              One live record for the entire certification.
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
              Explore product views rebuilt from Certiva&apos;s working demo environment using synthetic company data.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
            className="mt-10"
          >
            <ProductShowcase />
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-20 sm:py-24">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}><SectionBadge dark>Why Certiva</SectionBadge></motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-white"
            >
              Less administration. <span className="gradient-text">Stronger control.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="mt-12 grid gap-5 lg:grid-cols-3"
          >
            {OUTCOMES.map((outcome) => (
              <motion.article
                key={outcome.title}
                variants={fadeUp}
                className="rounded-2xl border border-[rgba(82,194,122,0.18)] bg-[rgba(13,23,16,0.72)] p-6 backdrop-blur-[16px]"
              >
                <outcome.icon className="h-6 w-6 text-[var(--certiva-glow)]" />
                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--certiva-glow)]">{outcome.label}</p>
                <h3 className="mt-2 text-xl font-bold leading-7 text-white">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{outcome.copy}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-9">
            <Link href="/features" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--certiva-glow)] hover:underline">
              Explore every capability <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="certivai" className="scroll-mt-20 bg-[#f5f8f6] py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionBadge>CertivAI</SectionBadge></motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-gray-950"
            >
              Expert work, accelerated—not hidden.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-base leading-7 text-gray-600">
              CertivAI prepares the work and shows its reasoning. Your team reviews, changes, and approves every result.
            </motion.p>
            <motion.ul variants={stagger} className="mt-7 space-y-3">
              {AI_OUTCOMES.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-[var(--certiva-green)]">
                    <Sparkles size={11} />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/ai" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--certiva-green)] hover:underline">
                See how CertivAI works <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="min-w-0"
          >
            <CertivAIProductPreview />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">
            <div className="text-center lg:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--certiva-green)]">Multi-standard by design</p>
              <h2 className="mt-2 text-xl font-bold text-gray-950">Eight standards. One operating system.</h2>
            </div>
            <div className="flex max-w-3xl flex-wrap justify-center gap-2 lg:justify-end">
              {STANDARDS.map((standard) => (
                <span key={standard} className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">
                  {standard}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.06] tracking-[-0.035em] text-white"
            >
              See your certification process <span className="gradient-text">inside Certiva.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-300">
              Bring your standards and document set. We&apos;ll show you how the complete workflow fits your certification body.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]"
              >
                Book a Live Demo <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Certiva",
            url: "https://www.getcertiva.com",
            applicationCategory: "BusinessApplication",
            description: "AI-powered ISO certification management platform for accredited certification bodies. ISO/IEC 17021-1 compliant.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Contact for pricing" },
            featureList: [
              "ISO audit lifecycle management",
              "AI-powered report generation and review",
              "Digital signature workflows",
              "Committee review management",
              "Multi-standard support",
              "Auditor witness tracking",
              "Built-in training academy",
              "Built-in CRM",
            ],
          }),
        }}
      />
    </>
  );
}
