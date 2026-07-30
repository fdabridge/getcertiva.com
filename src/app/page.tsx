"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitBranch, Sparkles, FileText, PenLine, Users, ShieldCheck, AlertTriangle, CalendarCheck, MessageSquare, Eye, BookOpen, Cpu } from "lucide-react";
import GradientOrbs from "@/components/GradientOrbs";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionBadge from "@/components/SectionBadge";
import { FEATURES, COMPARISON, WORKFLOW_STEPS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const ICONS: Record<string, React.ElementType> = {
  GitBranch, Sparkles, FileText, PenLine, Users, ShieldCheck,
};

const PIPELINE = ["Application", "Quotation", "Agreement", "Document Review", "Stage 1", "Stage 2", "Committee", "Certificate", "Surveillance"];

const STANDARDS_DISPLAY = [
  { code: "ISO 9001", name: "Quality Management", desc: "The world's most widely used management system standard." },
  { code: "ISO 14001", name: "Environmental Management", desc: "Environmental impact reduction and compliance." },
  { code: "ISO 45001", name: "Occupational Health & Safety", desc: "Workplace safety and risk prevention." },
  { code: "ISO 27001", name: "Information Security", desc: "Data protection and cybersecurity management." },
  { code: "ISO 22000", name: "Food Safety Management", desc: "Food chain safety from farm to fork." },
  { code: "ISO 13485", name: "Medical Devices", desc: "Quality systems for medical device manufacturers." },
  { code: "ISO 37001", name: "Anti-Bribery", desc: "Anti-corruption and bribery prevention." },
  { code: "ISO 50001", name: "Energy Management", desc: "Energy efficiency and consumption optimization." },
];

const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Skipped steps surface at witness audits",
    desc: "A planner forgets to get impartiality declarations signed before Stage 1. A document goes missing between stages. You don\u2019t find out until the accreditation body does \u2014 at your witness audit.",
  },
  {
    icon: FileText,
    title: "Manual reports drift in quality",
    desc: "Each auditor writes reports differently. Some miss mandatory clauses, others misclassify NCs. Without automated review, these problems reach the accreditation body as findings against your CB.",
  },
  {
    icon: PenLine,
    title: "Weeks chasing signatures",
    desc: "The lead auditor signed, but the reviewer is travelling. The committee member hasn\u2019t seen the document. Nobody knows who signed what, or when. Print, scan, email, repeat.",
  },
  {
    icon: CalendarCheck,
    title: "Missed surveillance = suspended certificate",
    desc: "Surveillance dates anchored to the Stage 2 audit, tracked yearly across dozens of clients. One missed window, and the certificate is suspended. Was it in someone\u2019s calendar? A spreadsheet row?",
  },
  {
    icon: BookOpen,
    title: "Separate training software, per-seat fees",
    desc: "You\u2019re already paying for certification management tools, a CRM, and document storage. Now add a standalone LMS with per-seat pricing for auditor training. Five systems, five logins, five invoices.",
  },
  {
    icon: MessageSquare,
    title: "No proof when the accreditation body asks",
    desc: "The AB asks: \u2018Show me the communication trail for this client\u2019s Stage 1 delay.\u2019 You search email threads, shared drives, and chat histories. The proof exists \u2014 somewhere. Maybe.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-[var(--bg-dark)] pt-32 pb-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <SectionBadge dark>Built Inside a Certification Body</SectionBadge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-8 text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white"
            >
              Pass every witness audit. Never miss a renewal.{" "}
              <span className="gradient-text">Stop chasing signatures.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Certification bodies lose accreditation findings to skipped steps, missing signatures, and undocumented decisions. Certiva enforces the correct process structurally &mdash; every gate checked, every document assembled from live data, every signature in the right order with a complete record. One system replaces the spreadsheets, email chains, separate training software, and manual PDF assembly.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
                Book a Demo →
              </Link>
              <Link href="/how-it-works" className="rounded-full border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-[var(--certiva-glow)] hover:text-white">
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
              { end: 15, suffix: "+", label: "FR Forms Auto-Generated" },
              { end: 8, suffix: "", label: "ISO Standards Supported" },
              { end: 100, suffix: "%", label: "Digital Signing" },
              { end: 1, suffix: "", label: "System Replaces 5 Tools" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <p className="text-3xl font-black text-white" style={{ textShadow: "0 0 20px rgba(82,194,122,0.4)" }}>
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-400">{s.label}</p>
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
                <span className="whitespace-nowrap rounded-full border border-gray-700 bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--certiva-glow)]">
                  {step}
                </span>
                {i < PIPELINE.length - 1 && <span className="h-px w-4 bg-gray-700" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Social proof ──────────────────────────────────────────────── */}
      <section className="bg-[var(--certiva-mist)] py-8">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm font-medium text-gray-600">
            Built for certification bodies operating under ISO/IEC 17021-1:2015 — Conformity assessment — Requirements for bodies providing audit and certification of management systems
          </p>
        </div>
      </section>

      {/* ── Core Features ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--bg-dark)] py-24">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp}><SectionBadge dark>Platform</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-white">
              What changes when you{" "}<span className="gradient-text">stop doing it manually.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-gray-300">
              Every outcome below is something certification bodies currently handle with spreadsheets, email, and manual effort &mdash; and something that can go wrong at your next witness audit.
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
                      <span className="rounded-full bg-[rgba(82,194,122,0.2)] px-2 py-0.5 text-[0.65rem] font-bold text-[var(--certiva-glow)]">
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{f.desc}</p>
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
            <motion.div variants={fadeUp}><SectionBadge dark>Outcomes</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-white">
              Hours of manual work,{" "}<span className="gradient-text">done in minutes.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-gray-300 leading-relaxed">
              Complete audit reports drafted in your template and ready for review. Documents pre-checked against your accreditation body&apos;s rules before submission. Correct audit days calculated and defensible. AI is how &mdash; faster cycles, fewer findings, and less rework is the result.
            </motion.p>
            <motion.ul variants={stagger} className="mt-6 space-y-3">
              {[
                "Complete audit reports drafted from audit data \u2014 in your template, ready for review",
                "Reports pre-checked against your accreditation body\u2019s rules before submission",
                "Correct clause exclusions in seconds instead of 30\u201360 minutes",
                "IAF MD 5 audit days calculated and defensible, every time",
                "Scope coverage gaps flagged before you schedule \u2014 not at the witness audit",
                "Auditor qualifications extracted from CVs automatically",
              ].map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 text-sm text-gray-300">
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
            className="rounded-2xl border border-gray-700 bg-[var(--bg-surface)] p-6 font-mono text-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-gray-500">AI Output</span>
            </div>
            <pre className="whitespace-pre-wrap text-gray-400 leading-6">
{`> Generating Stage 2 report...
  Client: Apex Manufacturing Ltd
  Standards: ISO 9001 + ISO 14001 (integrated)
  Audit days: 4.0 (Stage 2)

`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Evidence extracted from 23 documents
`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Findings placed into template cells
`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Conclusion checkboxes set
`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Safety check: no leaked names, no placeholders

> Report review (TÜRKAK profile)...
`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` All mandatory clauses covered
`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` NC classification correct
`}<span className="text-yellow-400">&#x26A0;</span>{` Finding depth: Clause 8.1 needs detail

Report ready for lead auditor review.`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-gray-900">
              Seven steps from application to certificate
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-gray-600">
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
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── The Cost of Doing It the Old Way ──────────────────────────── */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp}><SectionBadge>Without Certiva</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-gray-900">
              The cost of doing it the old way.{" "}
              <span className="text-[var(--certiva-green)]">Every one is a real risk.</span>
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PROBLEMS.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-[var(--certiva-pale)] hover:shadow-[0_4px_24px_rgba(26,71,49,0.08)]"
              >
                <p.icon className="h-6 w-6 text-[var(--certiva-green)]" />
                <h3 className="mt-3 text-base font-bold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Standards ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.h2 variants={fadeUp} className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-gray-900">
              Eight standards. One system. <span className="text-[var(--certiva-green)]">Your documents.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-gray-600">
              Each standard has its own scope system, audit time rules, and document requirements. Certiva handles each one correctly — and adapts to your CB&apos;s specific document templates.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {STANDARDS_DISPLAY.map((s) => (
              <motion.div
                key={s.code}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-[var(--certiva-pale)] hover:shadow-[0_4px_24px_rgba(26,71,49,0.08)]"
              >
                <p className="text-sm font-bold text-[var(--certiva-green)]">{s.code}</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">{s.name}</p>
                <p className="mt-2 text-xs text-gray-500">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Need a standard not listed? We add new standards and adapt your existing document templates.
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
                  <span className="text-sm font-medium text-gray-900">{row.with}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Not Just a CRM? ────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp}><SectionBadge>vs. Generic CRMs</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-gray-900">
              Other platforms are just a CRM.<br />
              <span className="text-[var(--certiva-green)]">Their entire product is our smallest feature.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-gray-600">
              Most &ldquo;certification management&rdquo; software is a client database with a calendar bolted on. They don&apos;t generate your documents. They don&apos;t enforce signing chains. They don&apos;t calculate audit times. They don&apos;t validate committee coverage. Certiva does all of that &mdash; and yes, it has a CRM too.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: "Online Application", desc: "Clients apply through a branded form \u2014 no login needed. On submit, the audit set creates itself, stages are provisioned, and the client gets a portal account." },
              { title: "Document Generation", desc: "15+ FR forms filled from live data into your own Word templates. Company details, scope, dates, team, EA codes \u2014 all populated automatically." },
              { title: "Digital Signing", desc: "Visual signatures placed in-browser with enforced order. Signed PDFs flattened with name, timestamp, and IP. Meeting attendees sign via email token \u2014 no account needed." },
              { title: "NC Management", desc: "Nonconformities raised, tracked, and closed with full evidence trail. Auto-computed due dates. A stage can\u2019t advance with open NCs." },
              { title: "Training Academy", desc: "Built-in courses with PDF/video material, timed exams, automatic scoring. Unlimited users, no per-seat fees. No separate tool needed." },
              { title: "AI Intelligence", desc: "Reports drafted and reviewed by AI. Audit days calculated. Clause exclusions suggested. All reviewable and overridable." },
              { title: "Auditor Management", desc: "Qualifications, EA codes, witness records. Scope coverage validated before every audit. Double-booking prevented." },
              { title: "Built-in CRM", desc: "Pipeline by phase, consultant referrals, finance overview \u2014 the feature other platforms call their whole product." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-[var(--certiva-pale)] hover:shadow-[0_4px_24px_rgba(26,71,49,0.08)]"
              >
                <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
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
            <motion.p variants={fadeUp} className="mt-4 text-gray-300">
              One system. Every standard. Every document. Every signature. Every proof your accreditation body will ask for &mdash; already recorded, in order.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link href="/contact" className="rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
                Book a Live Demo
              </Link>
              <p className="mt-4 text-xs text-gray-400">
                We&apos;ll walk through your standards and show how your documents integrate.
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
