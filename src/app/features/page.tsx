"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import GradientOrbs from "@/components/GradientOrbs";
import SectionBadge from "@/components/SectionBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const TABS = [
  {
    id: "workflow",
    label: "Audit Workflow",
    title: "14-phase lifecycle with enforced gates",
    bullets: [
      "Application → Quotation → Agreement → FR.218 Review → Stage 1 → Stage 2 → Committee → Certificate",
      "Each phase transition is gated — no skipping steps, no missing documents",
      "Planners see what needs scheduling, auditors see pending fieldwork, CMs see pending decisions",
      "Full status history with timestamps for every transition",
      "Surveillance and re-certification follow adapted flows with stage skipping where accreditation allows",
    ],
  },
  {
    id: "documents",
    label: "Documents",
    title: "Every audit form, auto-generated",
    bullets: [
      "FR.218 Initial Assessment, FR.222 Audit Programme, FR.223/224 Audit Plans",
      "FR.225 Opening/Closing Meeting Forms with employee roster integration",
      "FR.231 Stage 1 Report, FR.232 Stage 2 Report — pre-filled with auditor data",
      "FR.233 Review & Decision Form — committee names, EA codes, and signature slots",
      "Export as DOCX for editing or download signed PDFs with embedded signatures",
    ],
  },
  {
    id: "signing",
    label: "Signing",
    title: "Role-gated digital signatures",
    bullets: [
      "Every document has defined signing slots: Lead Auditor → Appointed Reviewer → Committee → CM",
      "Visual signature placement in an in-browser PDF viewer",
      "Signatures include name, IP address, and timestamp",
      "Download flattened PDFs with burned-in signature images",
      "No external signing tools — everything happens inside Certiva",
    ],
  },
  {
    id: "committee",
    label: "Committee",
    title: "Certification committee management",
    bullets: [
      "Appoint committee members from your qualified auditor pool",
      "System validates EA code and standard coverage for the audit scope",
      "Dynamic signature keys: each member gets their own signing slot",
      "Certification manager is blocked until all committee members have signed",
      "FR.233 Review & Decision Form tracks all signatures and shows real-time status",
    ],
  },
  {
    id: "ai",
    label: "AI",
    title: "AI that understands ISO certification",
    bullets: [
      "Non-applicable clause generation from client scope and standard combination",
      "IAF MD 5-compliant audit time calculation with K-factor support",
      "EA code and scope coverage validation before scheduling",
      "Risk level classification using scope keywords, EA code, and organization size",
      "Every AI output is reviewable and overridable by the planner",
    ],
  },
  {
    id: "client",
    label: "Client Portal",
    title: "Self-service client experience",
    bullets: [
      "Clients submit applications with scope, standards, and company details",
      "Digital agreement signing through the in-browser viewer",
      "Document status tracking — clients see which documents await their signature",
      "NC response workflow — upload corrective actions, track closure",
      "Employee roster management for FR.225 meeting form signatures",
    ],
  },
  {
    id: "auditor",
    label: "Auditor Portal",
    title: "Focused auditor workspace",
    bullets: [
      "Dashboard shows only assigned audit sets and pending signatures",
      "Upload stage reports (FR.231/FR.232), NC forms, and audit evidence",
      "NC decision submission per stage (no NC / NC items with categories)",
      "Sign documents through the visual signature viewer",
      "View audit plan details, team composition, and scheduled dates",
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    title: "Accreditation-ready infrastructure",
    bullets: [
      "IAF MD 5 audit time calculations with K-factor for risk adjustment",
      "TÜRKAK and UAF rule set support",
      "Standard-specific scope systems: EA codes (QMS/EMS/OHSMS), ISMS categories (27001), food chain (22000), medical device (13485)",
      "Full audit trail — every signature, status change, and document version logged",
      "Auditor qualification tracking: per-standard EA codes, scope categories, technical depth",
    ],
  },
];

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("workflow");
  const active = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pt-32 pb-16">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <SectionBadge dark>Platform</SectionBadge>
          <h1 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] text-white">
            Every feature your CB needs
          </h1>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            Deep-dive into each capability. Click a tab to explore.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-[var(--certiva-green)] text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-12 lg:grid-cols-2"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-[var(--text-dark)]">{active.title}</h2>
              <ul className="mt-6 space-y-4">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-mid)]">
                    <span className="mt-0.5 text-[var(--certiva-green)]">&#x2713;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Screenshot placeholder */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
                <span className="ml-2 text-xs text-gray-400">certiva.app/{active.id}</span>
              </div>
              <div className="mt-4 space-y-3">
                {[1,2,3,4].map((n) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className="h-3 rounded bg-gray-200" style={{ width: `${60 + n * 8}%` }} />
                  </div>
                ))}
                <div className="mt-4 h-24 rounded-xl bg-[var(--certiva-pale)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
