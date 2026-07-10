"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitBranch, Sparkles, FileText, PenLine, Users, ShieldCheck } from "lucide-react";
import GradientOrbs from "@/components/GradientOrbs";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionBadge from "@/components/SectionBadge";
import { FEATURES, STANDARDS, COMPARISON, WORKFLOW_STEPS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const ICONS: Record<string, React.ElementType> = {
  GitBranch, Sparkles, FileText, PenLine, Users, ShieldCheck,
};

const PIPELINE = ["Application", "Quotation", "Agreement", "Planning", "Stage 1", "Stage 2", "Certificate"];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-[var(--bg-dark)] pt-32 pb-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionBadge dark>AI-Powered · Accreditation-Native · Multi-Standard</SectionBadge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-8 text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white"
            >
              The Certification Management{" "}
              <span className="gradient-text">Platform</span> That Actually Runs Your Audit Operation
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
              Certiva replaces your spreadsheets, email chains, and manual PDF assembly with an end-to-end platform that knows ISO certification the way you do — because it was built inside a real accreditation body.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
                Book a Demo →
              </Link>
              <Link href="/how-it-works" className="rounded-full border border-[var(--bg-border)] px-8 py-3.5 text-sm font-semibold text-[var(--text-muted)] transition hover:border-[var(--certiva-glow)] hover:text-white">
                See How It Works
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {[
              { end: 14, suffix: "", label: "Workflow Phases" },
              { end: 8, suffix: "+", label: "ISO Standards" },
              { end: 100, suffix: "%", label: "Digital Audit Trail" },
              { end: 0, suffix: "", label: "Spreadsheets", display: "0" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <p className="text-3xl font-black text-white" style={{ textShadow: "0 0 20px rgba(82,194,122,0.4)" }}>
                  {s.display ?? <AnimatedCounter end={s.end} suffix={s.suffix} />}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pipeline */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-16 flex flex-wrap items-center justify-center gap-2"
          >
            {PIPELINE.map((step, i) => (
              <motion.div key={step} variants={fadeUp} className="flex items-center gap-2">
                <span className="whitespace-nowrap rounded-full border border-[var(--bg-border)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--certiva-glow)]">
                  {step}
                </span>
                {i < PIPELINE.length - 1 && <span className="h-px w-4 bg-[var(--bg-border)]" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Social proof ──────────────────────────────────────────────── */}
      <section className="bg-[var(--certiva-mist)] py-8">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium text-[var(--text-mid)]">
            Trusted by accredited certification bodies operating under TÜRKAK, UAF, and international accreditation schemes
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {STANDARDS.map((s) => (
              <span key={s.code} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--certiva-green)] shadow-sm">
                {s.code}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Features ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-24">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp}><SectionBadge dark>Platform</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-white">
              Every phase. Every document.{" "}<span className="gradient-text">Every signature.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
              From client intake to issued certificate — Certiva handles the entire certification lifecycle in a single system. No gaps.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((f) => {
              const Icon = ICONS[f.icon];
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[rgba(26,71,49,0.5)] bg-[rgba(13,23,16,0.7)] p-6 backdrop-blur-[16px] transition-all hover:border-[rgba(82,194,122,0.3)] hover:shadow-[0_0_24px_rgba(82,194,122,0.1)]"
                >
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className="h-5 w-5 text-[var(--certiva-glow)]" />}
                    <h3 className="text-lg font-bold text-white">{f.title}</h3>
                    {"badge" in f && (
                      <span className="rounded-full bg-[var(--certiva-glow)]/20 px-2 py-0.5 text-[0.65rem] font-bold text-[var(--certiva-glow)]">
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── AI Spotlight ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-24">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}><SectionBadge dark>Artificial Intelligence</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-white">
              AI that knows ISO certification —{" "}<span className="gradient-text">not just your calendar</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[var(--text-muted)] leading-relaxed">
              Generic AI tools don&apos;t know the difference between EA code 28 and 34, or why a multi-site ISO 27001 audit with high-risk scope requires different audit time than a small QMS. Certiva&apos;s AI does.
            </motion.p>
            <motion.ul variants={stagger} className="mt-6 space-y-3">
              {[
                "Generates non-applicable clause lists from your client's scope and standard combination",
                "Calculates IAF MD 5-compliant audit days using scope size, risk level, and EA code complexity",
                "Validates auditor qualification coverage before you commit to a schedule",
              ].map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                  <span className="mt-0.5 text-[var(--certiva-glow)]">&#x2713;</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/ai" className="text-sm font-semibold text-[var(--certiva-glow)] hover:underline">
                Explore AI Features →
              </Link>
            </motion.div>
          </motion.div>

          {/* AI Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-[var(--bg-border)] bg-[var(--bg-surface)] p-6 font-mono text-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-[var(--text-muted)]">AI Output</span>
            </div>
            <pre className="whitespace-pre-wrap text-[var(--text-muted)] leading-6">
{`> Analyzing scope: ISO 27001:2022
  Company size: 45 employees
  EA Code: 35 (IT Services)
  Risk level: High

`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Non-applicable clauses identified: 4
  — A.8.1.3 (no physical assets)
  — A.11.2.1 (no dedicated server room)
  — A.14.2.6 (no outsourced dev)
  — A.15.2.1 (no supplier agreements)

`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Recommended audit time: 3.5 days
  Stage 1: 1.0 day · Stage 2: 2.5 days
  K-factor applied: 1.2 (high risk)

`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Auditor coverage: VALID
  Lead: Qualified EA 35, ISO 27001
  TE: Qualified EA 35, InfoSec`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-[var(--text-dark)]">
              Seven steps from application to certificate
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[var(--text-mid)]">
              Certiva enforces the right order. Every gate is checked. Every document is in place.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-16 space-y-0"
          >
            {WORKFLOW_STEPS.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--certiva-green)] text-sm font-bold text-white">
                    {step.num}
                  </div>
                  {i < WORKFLOW_STEPS.length - 1 && <div className="mt-1 h-12 w-px bg-[var(--certiva-pale)]" />}
                </div>
                <div className="pb-10">
                  <h3 className="text-lg font-bold text-[var(--text-dark)]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[var(--text-mid)]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Standards Matrix ──────────────────────────────────────────── */}
      <section className="bg-[var(--certiva-mist)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-[var(--text-dark)]">
              Eight standards. One system. <span className="text-[var(--certiva-green)]">Zero configuration.</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {STANDARDS.map((s) => (
              <motion.div
                key={s.code}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-[var(--certiva-pale)] hover:shadow-[0_4px_24px_rgba(26,71,49,0.08)]"
              >
                <p className="text-sm font-bold text-[var(--certiva-green)]">{s.code}</p>
                <p className="mt-1 text-sm font-semibold text-[var(--text-dark)]">{s.name}</p>
                <div className="mt-3 space-y-1 text-xs text-[var(--text-mid)]">
                  <p>{s.scope}</p>
                  <p>{s.kfactor}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-8 text-center text-sm text-[var(--text-mid)]">
            Need a standard not listed? We add new standards on request.
          </p>
        </div>
      </section>

      {/* ── Comparison ────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="grid grid-cols-2 gap-0 border-b border-gray-200 bg-gray-50 px-6 py-3">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Without Certiva</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--certiva-green)]">With Certiva</span>
              </div>
              {COMPARISON.map((row, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="grid grid-cols-2 gap-0 border-b border-gray-100 px-6 py-4 last:border-0"
                >
                  <span className="text-sm text-gray-500">{row.without}</span>
                  <span className="text-sm font-medium text-[var(--text-dark)]">{row.with}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-24">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-white">
              Your next accreditation witness audit should find{" "}
              <span className="gradient-text">nothing to flag.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-[var(--text-muted)]">
              Certiva gives certification bodies the infrastructure to run correctly — every time, for every standard, for every client.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/contact" className="rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
                Book a Live Demo
              </Link>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                We&apos;ll walk through your standards and accreditation body requirements.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Certiva",
            url: "https://getcertiva.com",
            applicationCategory: "BusinessApplication",
            description: "AI-powered ISO certification management platform for accredited certification bodies.",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Contact for pricing" },
            featureList: [
              "ISO audit lifecycle management",
              "AI-powered clause generation",
              "Digital signature workflows",
              "Committee review management",
              "Multi-standard support",
            ],
          }),
        }}
      />
    </>
  );
}
