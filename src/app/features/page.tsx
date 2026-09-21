"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GradientOrbs from "@/components/GradientOrbs";
import SectionBadge from "@/components/SectionBadge";
import FeatureProductPreview, { type FeaturePreviewId } from "@/components/FeatureProductPreview";

const TABS: { id: FeaturePreviewId; label: string; title: string; bullets: string[] }[] = [
  {
    id: "workflow",
    label: "Audit Workflow",
    title: "The correct process, enforced — not just documented",
    bullets: [
      "State machine enforces the full path: application → planning → quotation → agreement → internal review (FR.218) → Stage 1 → Stage 2 → committee → certificate",
      "Stage 1 is gated: cannot start until the audit programme is signed, impartiality declarations are signed, and the client has signed the audit plan",
      "Stage 2 is gated: Stage 1 report must be approved and all Stage 1 NCs closed before proceeding",
      "Certificate is gated: decision record must be complete and every NC closed",
      "Every transition logged to an immutable, timestamped event log — full traceability at any point",
      "Without this: a planner skips a step, and it surfaces as a nonconformity at your next witness audit",
    ],
  },
  {
    id: "documents",
    label: "Documents",
    title: "15+ FR forms from live data — in your templates, not a generic form",
    bullets: [
      "Generates FR.218 (application review), FR.220 (quotation), FR.221 (agreement), FR.222 (audit programme), FR.223 (audit plan), FR.224 (impartiality declarations), FR.225 (meeting form), FR.230 (NC notice), FR.231/232/229 (reports), FR.233 (decision form), FR.211 (auditor assessment)",
      "Every form pre-filled from live audit-set data: company details, scope, dates, team, EA codes, man-days",
      "Fills your CB\u2019s own Word templates — your branding, your layout, not a generic form",
      "Export as DOCX for editing or as signed PDF with embedded signatures",
      "Without this: manual find-and-replace across a dozen forms per audit, every single time",
    ],
  },
  {
    id: "signing",
    label: "Signing",
    title: "Every signature in the right order, with a complete record",
    bullets: [
      "In-browser PDF viewer with visual signature placement — draw or upload your signature",
      "Enforced signing order: Lead Auditor → Appointed Reviewer → Committee → Certification Manager",
      "Out-of-turn signing is blocked — the system enforces the sequence",
      "Signed PDFs are flattened with signature image, signer name, timestamp, and IP address burned in",
      "Meeting attendees (FR.225) sign via emailed token with email OTP — no Certiva account needed",
      "Without this: weeks chasing signatures by email, and no reliable answer to \u201Cwho signed when?\u201D",
    ],
  },
  {
    id: "committee",
    label: "Committee",
    title: "Impartial, qualified committees — enforced, not assumed",
    bullets: [
      "System helps appoint committee members from your qualified auditor pool",
      "Enforces coverage: committee must collectively cover every standard and EA code in scope",
      "Enforces impartiality: no committee member may have been on the audit team",
      "Each member gets a dedicated signing slot on the decision form",
      "Certification manager is blocked until every committee member has signed",
      "Without this: manual tracking risks an impartiality breach at your highest-stakes decision point",
    ],
  },
  {
    id: "nc",
    label: "NC Management",
    title: "Every nonconformity tracked to closure — nothing slips",
    bullets: [
      "Lead auditor raises NCs per stage (minor / major / critical) with auto-computed due dates",
      "Client uploads root-cause analysis and corrective-action evidence directly in the portal",
      "Auditor reviews and closes or rejects; rejected NCs go another round with full per-round history preserved",
      "NC closure gates the workflow — a stage cannot advance while NCs remain open",
      "Without this: NCs live in spreadsheets and email threads, with no reliable proof of closure for your accreditation file",
    ],
  },
  {
    id: "ai",
    label: "AI",
    title: "Hours of manual work, done in minutes — AI handles the heavy lifting",
    bullets: [
      "AI report generation: a multi-stage pipeline writes complete Stage 1/2 reports in your template, including coordinate-based assembly into exact cells. Safety checks block leaked names or unfilled placeholders.",
      "AI report review: checks against your accreditation-body rule profile (e.g. UAF/T\u00DCRKAK) and returns typed findings as real inline comments in the Word document",
      "Audit time calculator: deterministic IAF MD 5 engine — not guesswork. Planners can override with justification logged.",
      "Non-applicable clause suggestions: AI suggests from a system-approved candidate list, planner confirms each one",
      "Auditor scope coverage: deterministic rule-checking of team EA codes against audit requirements before scheduling",
    ],
  },
  {
    id: "client",
    label: "Client Portal",
    title: "Clients self-serve — your CB stops being a call center",
    bullets: [
      "Branded portal where clients apply, sign documents, and track audit status on a visual timeline",
      "Document signing is order-gated — clients see \u201Cawaiting CB signature\u201D until the CB signs first",
      "NC response workflow: upload corrective actions and see review history per round",
      "Rate auditors on the assessment form (FR.211) after each audit",
      "Manage the employee roster for meeting-form signatures (FR.225)",
      "Without this: every status question becomes an email or phone call to your team",
    ],
  },
  {
    id: "auditor",
    label: "Auditor Portal",
    title: "Auditors see exactly what needs their action",
    bullets: [
      "Dashboard shows only assigned audits and documents pending signature — no clutter",
      "Upload audit plans, meeting forms, reports, and supporting evidence",
      "Submit NC decisions per stage: no NC, or NC items with category and details",
      "Sign impartiality declarations and reports through the in-browser signature viewer",
    ],
  },
  {
    id: "training",
    label: "Training Academy",
    title: "Auditor training inside Certiva — no separate tool, no per-seat fees",
    bullets: [
      "Create courses with PDF or video material and separate exams — all managed in one place",
      "Controlled document viewer tracks pages read and blocks completion until material is fully consumed",
      "Timed multiple-choice exams with a server-authoritative timer — auto-submits on expiry, cannot be beaten by refreshing",
      "Automatic scoring with configurable passing grade, and stored results for every attempt",
      "Assign courses to any number of users with no seat limit — training scales with your team",
      "Without this: paying thousands for standalone training software with per-seat caps and a separate login",
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    title: "When your accreditation body asks, it\u2019s already there",
    bullets: [
      "Every workflow transition, document release, signature, and status change is timestamped and stored as an in-app record",
      "Client and CB communicate in a logged, in-app message thread — conversations stay with the audit file",
      "IAF MD 5 audit time calculations built in, with K-factor risk adjustments",
      "Standard-specific scope systems: EA codes, ISMS categories (27001), food chain categories (22000), medical device areas (13485)",
      "Auditor qualification tracking per standard — EA codes, scope categories, and technical depth recorded",
    ],
  },
  {
    id: "crm",
    label: "CRM",
    title: "Your certificate portfolio on one screen — never lose a renewal",
    bullets: [
      "Pipeline view by phase with consultant referral tracking and fee/finance figures",
      "Certificate states tracked: active, expiring, expired, suspended, withdrawn",
      "Surveillance and renewal countdowns with overdue audits flagged automatically",
      "Payment status tracking and Excel export for finance reporting",
      "Client database with contact details, scope, standards, and full audit history",
    ],
  },
  {
    id: "applications",
    label: "Applications",
    title: "Clients apply online — the job starts itself",
    bullets: [
      "Public, branded self-service form — no login required to apply",
      "Clients select standards, enter company details, and fill standard-specific fields (IAF MD 5 personnel breakdown, ISO-specific inputs)",
      "Consultant referral code support — track which consultants bring which clients",
      "On submit: creates audit set, auto-creates stages, provisions client portal account, and drops the application into the planner\u2019s queue",
      "Without this: applications arrive by email, require manual re-entry, and introduce transcription errors",
    ],
  },
];

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("workflow");
  const active = TABS.find((t) => t.id === activeTab) || TABS[0];

  useEffect(() => {
    const syncFromHash = () => {
      const requested = window.location.hash.slice(1) as FeaturePreviewId;
      if (TABS.some((tab) => tab.id === requested)) setActiveTab(requested);
    };
    const frame = window.requestAnimationFrame(syncFromHash);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  function selectTab(id: FeaturePreviewId) {
    setActiveTab(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pt-32 pb-16">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <SectionBadge dark>Platform</SectionBadge>
          <h1 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] text-white">
            What changes when your CB runs on Certiva
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Explore each capability alongside a faithful view of the working product and its current demo workflows.
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
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => selectTab(tab.id)}
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
            id="feature-view"
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">{active.title}</h2>
              <ul className="mt-6 space-y-4">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="mt-0.5 text-[var(--certiva-green)]">&#x2713;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <FeatureProductPreview view={active.id} />
              <p className="mt-3 text-center text-[11px] text-gray-400">
                Rebuilt from the current Certiva demo interface using synthetic company data.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
