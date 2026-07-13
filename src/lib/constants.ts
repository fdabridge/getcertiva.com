export const STANDARDS = [
  { code: "ISO 9001", name: "Quality Management Systems", scope: "EA Codes: 01–39", kfactor: "Per IAF MD 5" },
  { code: "ISO 14001", name: "Environmental Management Systems", scope: "EA Codes: 01–39", kfactor: "Per IAF MD 5" },
  { code: "ISO 45001", name: "Occupational Health & Safety", scope: "EA Codes: 01–39", kfactor: "Per IAF MD 5" },
  { code: "ISO 27001", name: "Information Security Management (ISMS)", scope: "ISMS Categories A–D", kfactor: "Per IAF MD 5" },
  { code: "ISO 22000", name: "Food Safety Management (FSMS)", scope: "Food Chain Categories", kfactor: "Per IAF MD 5" },
  { code: "ISO 13485", name: "Medical Devices Quality Systems", scope: "Medical Device Categories", kfactor: "Per IAF MD 5" },
  { code: "ISO 37001", name: "Anti-Bribery Management Systems", scope: "Organization Type", kfactor: "Per IAF MD 5" },
  { code: "ISO 50001", name: "Energy Management Systems", scope: "EA Codes: 01–39", kfactor: "Per IAF MD 5" },
] as const;

export const WORKFLOW_STEPS = [
  { num: "01", title: "Client Application", desc: "Client submits scope, standards, and company details through their self-service portal." },
  { num: "02", title: "Quotation & Agreement", desc: "Planner generates a pre-filled quotation. Client receives and digitally signs the agreement." },
  { num: "03", title: "Audit Planning", desc: "Lead auditors, technical experts, and committee members assigned. Stages scheduled." },
  { num: "04", title: "Stage 1 & Stage 2 Audit", desc: "Auditors complete fieldwork, raise NCs, and upload reports through the auditor portal." },
  { num: "05", title: "Review & Multi-Party Signing", desc: "Appointed reviewer and certification manager sign the stage reports digitally." },
  { num: "06", title: "Committee Decision", desc: "Committee reviews the complete audit record and signs the decision form." },
  { num: "07", title: "Certificate Issued", desc: "Certification manager issues the certificate. Full document archive. Audit-ready." },
] as const;

export const FOURTEEN_PHASES = [
  { phase: "pending_review", name: "Application Review", desc: "Application submitted by client. Planner reviews scope and standards.", docs: "—", roles: "Planner", color: "green" },
  { phase: "in_planning", name: "Planning", desc: "Planner creates quotation. Audit team identified.", docs: "—", roles: "Planner", color: "green" },
  { phase: "quotation_sent", name: "Quotation Sent", desc: "System generates pre-filled quotation. Client reviews.", docs: "FR.220 Quotation", roles: "Planner, Client", color: "green" },
  { phase: "agreement_signed", name: "Agreement Signed", desc: "Client digitally signs the service agreement.", docs: "FR.221 Agreement", roles: "Client", color: "green" },
  { phase: "fr218_in_progress", name: "Document Review", desc: "Initial document review. Reviewer assigned and signs.", docs: "Document Review", roles: "Reviewer, CM", color: "teal" },
  { phase: "stage1_scheduled", name: "Stage 1 Scheduled", desc: "Stage 1 planned. Audit plan and team form generated. Auditors assigned.", docs: "Audit Plan, Team Form", roles: "Planner", color: "teal" },
  { phase: "stage1_in_progress", name: "Stage 1 In Progress", desc: "Auditors in the field. NC tracking active.", docs: "—", roles: "Auditors", color: "teal" },
  { phase: "stage1_complete", name: "Stage 1 Complete", desc: "Stage 1 Report generated. Signing chain: Lead → Reviewer → CM.", docs: "Stage 1 Report", roles: "Lead Auditor, Reviewer, CM", color: "teal" },
  { phase: "stage2_scheduled", name: "Stage 2 Scheduled", desc: "Stage 2 planned. Updated audit plan generated.", docs: "Audit Plan", roles: "Planner", color: "teal" },
  { phase: "stage2_in_progress", name: "Stage 2 In Progress", desc: "Auditors in the field. NC tracking continues.", docs: "—", roles: "Auditors", color: "teal" },
  { phase: "stage2_complete", name: "Stage 2 Complete", desc: "Stage 2 Report generated. Same signing chain.", docs: "Stage 2 Report", roles: "Lead Auditor, Reviewer, CM", color: "teal" },
  { phase: "committee_review", name: "Committee Review", desc: "Review & Decision Form. Committee signs. CM signs last.", docs: "Decision Form", roles: "Committee, CM", color: "gold" },
  { phase: "certified", name: "Certificate Issued", desc: "Certification manager issues the certificate. Full archive.", docs: "Certificate", roles: "CM", color: "gold" },
  { phase: "surveillance", name: "Surveillance Cycle", desc: "Surveillance and re-certification flows begin.", docs: "Adapted set", roles: "All", color: "green" },
] as const;

export const FEATURES = [
  {
    icon: "GitBranch",
    title: "Complete Audit Lifecycle",
    desc: "14 structured phases from application to certificate with enforced progression gates. Every role — planner, auditor, reviewer, committee member, certification manager — sees exactly what requires their action.",
  },
  {
    icon: "Sparkles",
    title: "AI-Powered Intelligence",
    desc: "AI generates non-applicable clause lists, calculates IAF MD 5-compliant audit times with K-factor support, validates EA code coverage across the team, and classifies risk levels automatically.",
    badge: "AI",
  },
  {
    icon: "FileText",
    title: "Document Automation",
    desc: "Every audit form — initial reviews, audit plans, team forms, stage reports, meeting forms, decision forms — all auto-generated from live data. Auditor names, EA codes, dates, scope descriptions populate automatically. Export as DOCX or download signed PDFs.",
  },
  {
    icon: "PenLine",
    title: "Digital Signing & Viewer",
    desc: "Visual signature placement in a browser-based PDF viewer. Role-gated signing chains: Lead Auditor → Reviewer → Committee → CM. Flattened PDFs with embedded signatures, names, and timestamps.",
  },
  {
    icon: "Users",
    title: "Committee & Decision Management",
    desc: "Appoint committee members from your qualified auditor pool. System validates qualification coverage across all standards and EA codes. CM blocked until every committee member signs.",
  },
  {
    icon: "ShieldCheck",
    title: "Accreditation Compliance",
    desc: "IAF MD 5 audit time calculations. Multiple accreditation body rule sets. Standard-specific scope systems (ISMS, food chain, medical device). Your accreditation body's next witness audit will find nothing missing.",
  },
] as const;

export const COMPARISON = [
  { without: "Spreadsheet audit tracker", with: "14-phase pipeline with enforced gates" },
  { without: "Email for document distribution", with: "Role-based portals — client, auditor, planner" },
  { without: "Manual PDF assembly", with: "Auto-generated, pre-filled FR forms" },
  { without: '"Who signed this?" calls', with: "Visual signing with full audit trail" },
  { without: "Separate CRM system", with: "Built-in CRM as one of many features" },
  { without: "Risk of accreditation NCs", with: "IAF MD 5 + accreditation rules enforced" },
  { without: "No online client access", with: "Branded client portal with self-service application" },
  { without: "No AI assistance", with: "AI clause lists, audit time calc, scope validation" },
] as const;
