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
    icon: MessageSquare,
    title: "Communication Proof for Accreditation",
    desc: "Every client communication — notifications, document releases, status updates — is logged with timestamps. When your accreditation body asks for proof of communication, it is already there.",
  },
  {
    icon: PenLine,
    title: "Real-Time Document Signing",
    desc: "No more printing, scanning, and emailing PDFs back and forth. Auditors, reviewers, committee members, and clients sign documents directly in the browser with visual signature placement.",
  },
  {
    icon: CalendarCheck,
    title: "Auditor Double-Booking Prevention",
    desc: "The system checks auditor availability across all active audit sets before scheduling. No room for human error — if an auditor is booked, the planner sees it immediately.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Team Scope Coverage",
    desc: "Before a stage can be scheduled, Certiva validates that the audit team covers every required scope code and standard. Gaps are flagged with specific explanations — no manual checklist needed.",
  },
  {
    icon: Eye,
    title: "Auditor Witness Tracking",
    desc: "The system tracks when each auditor was last witnessed and alerts planners when a witness audit is due. No more spreadsheet tracking or missed witness deadlines.",
  },
  {
    icon: AlertTriangle,
    title: "Zero NC Risk from Accreditation",
    desc: "Complete audit trail for every decision, signature, and document version. Enforced workflow gates mean nothing is skipped. Your accreditation body finds everything in place, every time.",
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
              <SectionBadge dark>Complete CB Operations · AI-Powered · ISO 17021-1 Compliant</SectionBadge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="mt-8 text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.05] tracking-[-0.03em] text-white"
            >
              The Platform That Runs Your Entire{" "}
              <span className="gradient-text">Certification Body</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Certiva replaces your spreadsheets, email chains, and manual document assembly with a complete operations platform — audit lifecycle, AI-powered document generation, real-time digital signing, CRM, client and auditor portals, and full accreditation compliance. Built inside a real accredited CB.
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
              { end: 14, suffix: "", label: "Workflow Phases" },
              { end: 8, suffix: "+", label: "ISO Standards" },
              { end: 100, suffix: "%", label: "Digital Signing" },
              { end: 0, suffix: "", label: "Built-in CRM", display: "CRM" },
            ].map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="text-center">
                <p className="text-3xl font-black text-white" style={{ textShadow: "0 0 20px rgba(82,194,122,0.4)" }}>
                  {s.display ?? <AnimatedCounter end={s.end} suffix={s.suffix} />}
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
              Every phase. Every document.{" "}<span className="gradient-text">Every signature.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-gray-300">
              From client intake to issued certificate — Certiva handles the entire certification lifecycle in a single system. Your document templates, your workflow, your rules.
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
            <motion.div variants={fadeUp}><SectionBadge dark>Artificial Intelligence</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-white">
              AI that knows certification —{" "}<span className="gradient-text">not just your calendar</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-gray-300 leading-relaxed">
              Generic tools don&apos;t understand scope codes, audit time rules, or why a multi-site information security audit needs different planning than a small quality management review. Certiva&apos;s AI does.
            </motion.p>
            <motion.ul variants={stagger} className="mt-6 space-y-3">
              {[
                "AI audit report generation — draft complete stage reports from audit data",
                "AI report review and control — cross-check reports against scope and findings",
                "AI audit plan generation — populate plans from client scope and team assignments",
                "Non-applicable clause identification from scope and standard combination",
                "Audit time calculation compliant with IAF MD 5 rules and K-factors",
                "Auditor qualification coverage validation before scheduling",
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
{`> Generating audit plan...
  Standard: ISO 27001:2022
  Company: 45 employees
  Scope: IT Services
  Risk level: High

`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Non-applicable clauses: 4 identified
  Clauses excluded with justification

`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Recommended audit time: 3.5 days
  Stage 1: 1.0 day · Stage 2: 2.5 days
  K-factor: 1.2 (high risk applied)

`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Team coverage: VALID
  Lead auditor: qualified
  Technical expert: qualified

`}<span className="text-[var(--certiva-glow)]">&#x2713;</span>{` Audit report draft: GENERATED
  12 pages · scope-aligned · ready for review`}
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

      {/* ── Problems We Solve ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center">
            <motion.div variants={fadeUp}><SectionBadge>Why CBs Switch</SectionBadge></motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-[-0.02em] text-gray-900">
              The problems that keep CB managers up at night.{" "}
              <span className="text-[var(--certiva-green)]">Solved.</span>
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
              Most &ldquo;certification management&rdquo; software is a client database with a calendar bolted on. They don&apos;t generate your documents. They don&apos;t enforce signing chains. They don&apos;t calculate audit times. They don&apos;t validate committee coverage. Certiva does all of that — and yes, it has a CRM too.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { title: "Online Application", desc: "Clients apply through a branded self-service portal with scope, standards, and company details." },
              { title: "Real-Time Signing", desc: "Visual signature placement in the browser. Role-gated chains. Flattened signed PDFs with timestamps." },
              { title: "Audit Package Builder", desc: "Complete audit packages assembled automatically — plans, team forms, reports, NC forms, meeting forms." },
              { title: "Consultant Portal", desc: "Read-only access for referred consultants to track their clients through the pipeline." },
              { title: "Built-in CRM", desc: "Client management, contact tracking, pipeline overview — the feature other platforms call their whole product." },
              { title: "Auditor Management", desc: "Qualifications, scope codes, experience tracking, witness schedules. Coverage validated before every audit." },
              { title: "NC Workflow", desc: "Stage-specific nonconformity tracking with evidence upload, auditor review, and closure gates." },
              { title: "Certificate Lifecycle", desc: "Issue, renew, suspend, withdraw. Full certificate history with expiry tracking and surveillance scheduling." },
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
              Certiva gives certification bodies the infrastructure to run correctly — every time, for every standard, for every client.
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
              "AI-powered report and plan generation",
              "Digital signature workflows",
              "Committee review management",
              "Multi-standard support",
              "Auditor witness tracking",
              "Built-in CRM",
            ],
          }),
        }}
      />
    </>
  );
}
