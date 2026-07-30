export const STANDARDS = [
  { code: "ISO 9001", name: "Quality Management Systems", scope: "EA Codes: 01–39", kfactor: "Per IAF MD 5" },
  { code: "ISO 14001", name: "Environmental Management Systems", scope: "EA Codes: 01–39", kfactor: "Per IAF MD 5" },
  { code: "ISO 45001", name: "Occupational Health & Safety", scope: "EA Codes: 01–39", kfactor: "Per IAF MD 5" },
  { code: "ISO 27001", name: "Information Security Management (ISMS)", scope: "ISMS Categories A–D", kfactor: "Per IAF MD 5" },
  { code: "ISO 22000", name: "Food Safety Management (FSMS)", scope: "Food Chain Categories", kfactor: "Per IAF MD 5" },
  { code: "ISO 13485", name: "Medical Devices Quality Systems", scope: "Medical Device Categories", kfactor: "Per IAF MD 5" },
  { code: "ISO 37001", name: "Anti-Bribery Management Systems (2025 edition)", scope: "Organization Type", kfactor: "Per IAF MD 5" },
  { code: "ISO 50001", name: "Energy Management Systems", scope: "EA Codes: 01–39", kfactor: "Per IAF MD 5" },
] as const;

export const WORKFLOW_STEPS = [
  { num: "01", title: "Client Application", desc: "Client submits scope, standards, and company details through a self-service portal. The job record is created automatically — no re-keying, no lost emails." },
  { num: "02", title: "Quotation & Agreement", desc: "System generates a pre-filled quotation with IAF MD 5 audit-day calculations. Client reviews and digitally signs. Gate: agreement must be signed before any planning begins." },
  { num: "03", title: "Audit Planning", desc: "Lead auditors, technical experts, and committee members are assigned with EA-code qualification checks enforced. Gate: team cannot be confirmed until every required competence is covered." },
  { num: "04", title: "Stage 1 & Stage 2 Audit", desc: "Auditors complete fieldwork through the auditor portal. NCs are tracked in a closed loop — none can be lost or silently dropped. Gate: all major NCs must be resolved before Stage 2 proceeds." },
  { num: "05", title: "Review & Multi-Party Signing", desc: "Appointed reviewer and certification manager sign stage reports in the correct order. Gate: each signer is blocked until the previous signer completes. No signature can be skipped or reordered." },
  { num: "06", title: "Committee Decision", desc: "Committee reviews the complete audit record and signs the decision form. Gate: system enforces that committee members are impartial and hold the required qualifications for the scope." },
  { num: "07", title: "Certificate Issued", desc: "Certificate is issued with full document archive already assembled. Surveillance countdown begins automatically. Your next witness audit finds a complete, timestamped record from day one." },
] as const;

export const FOURTEEN_PHASES = [
  { phase: "pending_review", name: "Application Review", desc: "Application submitted by client online. Planner reviews scope and standards — no re-keying from email.", docs: "—", roles: "Planner", color: "green" },
  { phase: "in_planning", name: "Planning", desc: "Planner creates quotation with auto-calculated audit days. Audit team identified with qualification checks enforced.", docs: "—", roles: "Planner", color: "green" },
  { phase: "quotation_sent", name: "Quotation Sent", desc: "System generates pre-filled quotation from live data. Client reviews. No manual find-replace.", docs: "FR.220 Quotation", roles: "Planner, Client", color: "green" },
  { phase: "agreement_signed", name: "Agreement Signed", desc: "Client digitally signs the service agreement. Gate: nothing proceeds until this is complete.", docs: "FR.221 Agreement", roles: "Client", color: "green" },
  { phase: "fr218_in_progress", name: "Document Review", desc: "Initial document review. Reviewer assigned and signs. Gate: review must be signed before audit scheduling.", docs: "Document Review", roles: "Reviewer, CM", color: "teal" },
  { phase: "stage1_scheduled", name: "Stage 1 Scheduled", desc: "Stage 1 planned. Audit plan and team form generated from live data. Auditor qualifications validated against scope.", docs: "Audit Plan, Team Form", roles: "Planner", color: "teal" },
  { phase: "stage1_in_progress", name: "Stage 1 In Progress", desc: "Auditors in the field. NC tracking active — every finding is recorded, none can be silently dropped.", docs: "—", roles: "Auditors", color: "teal" },
  { phase: "stage1_complete", name: "Stage 1 Complete", desc: "Stage 1 Report generated. Signing chain enforced in order: Lead Auditor → Reviewer → CM. No signature can be skipped.", docs: "Stage 1 Report", roles: "Lead Auditor, Reviewer, CM", color: "teal" },
  { phase: "stage2_scheduled", name: "Stage 2 Scheduled", desc: "Stage 2 planned. Updated audit plan generated. Gate: Stage 1 signing chain must be fully complete.", docs: "Audit Plan", roles: "Planner", color: "teal" },
  { phase: "stage2_in_progress", name: "Stage 2 In Progress", desc: "Auditors in the field. NC tracking continues with closed-loop resolution required for every finding.", docs: "—", roles: "Auditors", color: "teal" },
  { phase: "stage2_complete", name: "Stage 2 Complete", desc: "Stage 2 Report generated. Same enforced signing chain. All signatures timestamped and recorded.", docs: "Stage 2 Report", roles: "Lead Auditor, Reviewer, CM", color: "teal" },
  { phase: "committee_review", name: "Committee Review", desc: "Decision form presented to committee. System enforces impartiality and qualification coverage. CM signs last — blocked until every committee member completes.", docs: "Decision Form", roles: "Committee, CM", color: "gold" },
  { phase: "certified", name: "Certificate Issued", desc: "Certificate issued. Full document archive assembled automatically. Surveillance countdown begins — renewal dates are never forgotten.", docs: "Certificate", roles: "CM", color: "gold" },
  { phase: "surveillance", name: "Surveillance Cycle", desc: "Surveillance and re-certification flows triggered automatically. No renewal date lives in someone's memory — the system tracks every deadline.", docs: "Adapted set", roles: "All", color: "green" },
] as const;

export const FEATURES = [
  {
    icon: "GitBranch",
    title: "Nobody Can Skip a Step",
    desc: "14 enforced phases from application to certificate. Every gate must be cleared in order — no phase can be bypassed, no signature skipped, no NC silently dropped. Without this, skipped steps surface as nonconformities at your next witness audit.",
  },
  {
    icon: "Sparkles",
    title: "AI That Writes and Reviews Your Reports",
    desc: "AI drafts stage reports in your template in minutes instead of hours. A second AI pass reviews reports for gaps and inconsistencies before the accreditation body ever sees them. Also generates non-applicable clause lists, calculates IAF MD 5 audit times, and validates EA-code coverage.",
    badge: "AI",
  },
  {
    icon: "FileText",
    title: "No Copy-Paste, No Version Drift",
    desc: "15+ FR forms — quotations, audit plans, team forms, stage reports, meeting forms, decision forms — all generated from live data. Auditor names, EA codes, dates, and scope descriptions populate automatically. Without this, you are doing manual PDF assembly with find-replace errors in every document.",
  },
  {
    icon: "PenLine",
    title: "Entire Signing Chain, Correct Order, Complete Record",
    desc: "Role-gated signing chains — Lead Auditor → Reviewer → Committee → CM — enforced in order. Visual signatures are placed in a browser-based PDF viewer and flattened into the final PDF with names and timestamps. Without this, you spend weeks chasing signatures by email with no proof of sequence.",
  },
  {
    icon: "Users",
    title: "Impartial, Qualified Committees — Enforced by the System",
    desc: "Appoint committee members from your qualified auditor pool. The system validates that the committee covers every required standard and EA code and flags impartiality conflicts. The certification manager is blocked until every committee member signs. No more hoping the right people reviewed the file.",
  },
  {
    icon: "ShieldCheck",
    title: "Your Next Witness Audit Finds Nothing Missing",
    desc: "IAF MD 5 audit-time calculations, multiple accreditation body rule sets, standard-specific scope systems (ISMS, food chain, medical device), timestamped audit trail for every action, and a certificate portfolio with surveillance countdowns. When the AB asks for proof, the record is already there.",
  },
] as const;

export const COMPARISON = [
  { without: "Applications arrive by email, staff re-keys data", with: "Online intake — client submits, the job starts itself" },
  { without: "Spreadsheet tracker, steps get skipped", with: "Enforced gates at every phase — nothing is skipped" },
  { without: "Manual PDF find-replace for every document", with: "15+ FR forms generated from live data, zero find-replace" },
  { without: "Weeks chasing signatures by email", with: "Role-gated signing chains, in order, with timestamped record" },
  { without: "NCs tracked in spreadsheets, no proof of closure", with: "Closed-loop NC lifecycle with evidence trail" },
  { without: "Paying for separate training software", with: "Built-in training academy, unlimited users" },
  { without: "Report writing from scratch, hours per report", with: "AI draft in minutes, already in your template" },
  { without: "Report problems found at witness audit", with: "AI review catches issues before the AB does" },
  { without: "Renewal dates in someone's memory", with: "Certificate portfolio with surveillance countdowns" },
  { without: "No proof when the AB asks", with: "Timestamped audit trail — already recorded, always available" },
] as const;
