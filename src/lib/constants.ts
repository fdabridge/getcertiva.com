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
  { num: "06", title: "Committee Decision", desc: "Committee reviews the complete audit record and signs the FR.233 decision form." },
  { num: "07", title: "Certificate Issued", desc: "Certification manager issues the certificate. Full document archive. Audit-ready." },
] as const;

export const FOURTEEN_PHASES = [
  { phase: "pending_review", name: "Application Review", desc: "Application submitted by client. Planner reviews scope and standards.", docs: "—", roles: "Planner", color: "green" },
  { phase: "in_planning", name: "Planning", desc: "Planner creates quotation. Audit team identified.", docs: "—", roles: "Planner", color: "green" },
  { phase: "quotation_sent", name: "Quotation Sent", desc: "System generates pre-filled quotation. Client reviews.", docs: "FR.220 Quotation", roles: "Planner, Client", color: "green" },
  { phase: "agreement_signed", name: "Agreement Signed", desc: "Client digitally signs the service agreement.", docs: "FR.221 Agreement", roles: "Client", color: "green" },
  { phase: "fr218_in_progress", name: "FR.218 Initial Review", desc: "FR.218 Initial Assessment generated. Reviewer assigned and signs.", docs: "FR.218 Review", roles: "Reviewer, CM", color: "teal" },
  { phase: "stage1_scheduled", name: "Stage 1 Scheduled", desc: "Stage 1 planned. Audit plan and team form generated. Auditors assigned.", docs: "FR.223 Plan, FR.225 Team", roles: "Planner", color: "teal" },
  { phase: "stage1_in_progress", name: "Stage 1 In Progress", desc: "Auditors in the field. NC tracking active.", docs: "—", roles: "Auditors", color: "teal" },
  { phase: "stage1_complete", name: "Stage 1 Complete", desc: "FR.231 Stage 1 Report generated. Signing chain: LA → Reviewer → CM.", docs: "FR.231 Report", roles: "Lead Auditor, Reviewer, CM", color: "teal" },
  { phase: "stage2_scheduled", name: "Stage 2 Scheduled", desc: "Stage 2 planned. Updated audit plan generated.", docs: "FR.224 Plan", roles: "Planner", color: "teal" },
  { phase: "stage2_in_progress", name: "Stage 2 In Progress", desc: "Auditors in the field. NC tracking continues.", docs: "—", roles: "Auditors", color: "teal" },
  { phase: "stage2_complete", name: "Stage 2 Complete", desc: "FR.232 Stage 2 Report generated. Same signing chain.", docs: "FR.232 Report", roles: "Lead Auditor, Reviewer, CM", color: "teal" },
  { phase: "committee_review", name: "Committee Review", desc: "FR.233 Review & Decision Form. Committee signs. CM signs last.", docs: "FR.233 Decision", roles: "Committee, CM", color: "gold" },
  { phase: "certified", name: "Certificate Issued", desc: "Certification manager issues the certificate. Full archive.", docs: "Certificate", roles: "CM", color: "gold" },
  { phase: "surveillance", name: "Surveillance Cycle", desc: "Surveillance and re-certification flows begin.", docs: "Adapted set", roles: "All", color: "green" },
] as const;

export const FEATURES = [
  {
    icon: "GitBranch",
    title: "Audit Lifecycle Management",
    desc: "14 structured phases with enforced progression gates. Planners, auditors, reviewers, committee members, and certification managers each see exactly what requires their action — nothing more.",
  },
  {
    icon: "Sparkles",
    title: "AI-Powered Intelligence",
    desc: "AI generates non-applicable clause lists from client scope and standards. AI calculates audit time recommendations using IAF MD 5 risk and complexity rules. AI validates EA code coverage and flags scope gaps before you schedule the audit.",
    badge: "AI",
  },
  {
    icon: "FileText",
    title: "Document Automation",
    desc: "FR.218 through FR.233 — every audit form is generated from live data. Auditor names, EA codes, planned dates, and scope descriptions populate automatically. Export as Word or signed PDF.",
  },
  {
    icon: "PenLine",
    title: "Role-Based Digital Signing",
    desc: "Every signing slot is gated to the correct role at the correct phase. Lead auditor → Appointed reviewer → Committee → Certification manager. Flattened signed PDFs with embedded signature images and timestamps — no external tools.",
  },
  {
    icon: "Users",
    title: "Committee Review & Decision",
    desc: "Appoint committee members from your qualified auditor pool. System validates qualification coverage across all standards and EA codes. Certification manager is blocked until every committee member has signed.",
  },
  {
    icon: "ShieldCheck",
    title: "Accreditation Compliance",
    desc: "IAF MD 5 audit time calculations with K-factor support. TÜRKAK and UAF rule sets. Standard-specific scope category systems. Your accreditation body's next witness audit will find nothing missing.",
  },
] as const;

export const COMPARISON = [
  { without: "Spreadsheet audit tracker", with: "14-phase pipeline, enforced" },
  { without: "Email for document distribution", with: "Role-based portal, instant" },
  { without: "Manual PDF assembly", with: "Auto-generated, pre-filled" },
  { without: '"Who signed this?" calls', with: "Full audit trail, timestamped" },
  { without: "Re-entering data across forms", with: "Enter once, populate everywhere" },
  { without: "Risk of accreditation gaps", with: "IAF MD 5 compliance built in" },
  { without: "No AI assistance", with: "AI clause lists + audit times" },
] as const;
