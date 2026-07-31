import { BlogPost } from "./blog-data";

export const BATCH_1: BlogPost[] = [
  {
    slug: "stage-2-report-took-four-hours-now-takes-review",
    title: "The Stage 2 Report That Used to Take Four Hours Now Takes a Review",
    excerpt: "An integrated ISO 9001+14001+45001 Stage 2 audit generates a report that would take four hours to write manually. With Certiva's AI report generation, the auditor spends twenty minutes reviewing an intelligent draft instead.",
    date: "2026-03-12",
    readTime: "8 min",
    category: "AI",
    content: `## The Audit That Should Have Been the Easy Part

Picture this. Deniz, a lead auditor for a mid-sized Turkish certification body, has just wrapped up a four-day integrated Stage 2 audit at a metal fabrication company outside Bursa. The scope covers ISO 9001, ISO 14001, and ISO 45001. He interviewed twenty-six people across three shifts. He walked the shop floor, reviewed calibration records, observed welding procedures, checked waste disposal logs, and evaluated the management review minutes from the last twelve months.

The audit itself went well. Two minor nonconformities, a handful of observations, and solid evidence of conformity across all three standards. Deniz has notes, photos, checklists, and a clear picture of the organization in his head.

Now comes the part he dreads: the report.

### The Old Way

Deniz opens a Word template. It is forty-seven pages long across the three standards. Each standard has its own section, its own clause-by-clause findings table, its own summary. He needs to:

- Fill in the company information, scope details, and audit team composition
- Write narrative summaries for each standard
- Map his findings to specific clauses
- Ensure every mandatory clause has at least a conformity statement or a finding
- Classify each finding correctly (minor NC, major NC, observation, opportunity for improvement)
- Cross-reference findings that apply to more than one standard in the integrated audit
- Write the conclusion and recommendation

Four hours later, on a Friday evening after a full week of auditing, Deniz finishes the draft. He is tired. He missed that Clause 8.2.1 of ISO 14001 has no entry at all. He classified a finding as an observation when it clearly describes a failure to meet a requirement, which should be a minor NC. He wrote "the organization" in one place and "the company" in another, and the report feels inconsistent.

He emails the report to his certification body. The reviewer sends it back with seven comments. Another round of revisions. The report is not finalized until the following Wednesday.

### How Certiva's AI Report Generation Works

Now picture the same audit, but Deniz's certification body uses Certiva.

During the audit, Deniz logs his findings directly in the platform. Each finding is tagged to a clause, a standard, and a classification. His evidence notes, interview records, and checklist responses are all captured in the system as structured data.

When the audit is complete, Deniz clicks "Generate Report." Here is what happens behind the scenes:

**Evidence Extraction.** The AI pulls every finding, every checklist response, every evidence note, and every NC from the audit record. It maps them to the applicable clauses of each standard in scope. It identifies which clauses have findings and which have only conformity evidence.

**Drafting.** The AI generates narrative summaries for each section of the report. It writes clause-by-clause entries that reflect the actual evidence. For clauses where the auditor recorded conformity, it writes a conformity statement. For clauses with findings, it drafts the finding using the auditor's notes as source material. For integrated audits, it handles cross-references between standards.

**Validation.** Before the draft is presented, the AI runs safety checks. Are there any mandatory clauses with no entry at all? Are there findings that appear misclassified based on the language used? Does the conclusion align with the findings? These checks flag potential issues for the auditor to review.

**Assembly.** The report is assembled into the certification body's template. Content is placed into specific template cells using coordinate-based placement, so the output matches the exact format the CB uses. The result is not a generic document -- it is the CB's own report template, populated with intelligent content.

### Twenty Minutes Instead of Four Hours

Deniz opens the generated draft. He reads through the narrative summaries. They are accurate. He checks the clause-by-clause table. Every clause has an entry. The two minor NCs are correctly classified and clearly written. The observations are properly distinguished from nonconformities.

He makes three small adjustments: he adds a specific detail about the welding procedure observation that he wants to emphasize, he adjusts the wording of one conformity statement, and he adds a note about the organization's particularly strong emergency response program.

Twenty minutes later, the report is submitted for review.

### What This Means in Practice

The time savings are real, but the quality improvement matters more. When auditors write reports manually after long audit days, fatigue leads to errors. Clauses get skipped. Findings get misclassified. Language becomes inconsistent. These are not hypothetical problems -- they are findings that accreditation bodies raise during assessments.

AI report generation does not replace the auditor's judgment. Deniz still decides what is conforming and what is not. He still writes the findings. He still classifies the NCs. The AI takes his structured input and produces a consistent, complete, properly formatted report that he reviews rather than writes from scratch.

For a certification body running forty audits a month, this is the difference between auditors spending a full day on each report and spending a fraction of that time on review. It is the difference between reports going out on Friday and reports going out on Wednesday.

The four-hour report is a relic of a workflow that assumed humans had to do every repetitive formatting and drafting task. They do not.`
  },
  {
    slug: "missed-surveillance-suspended-certificate-how-to-prevent",
    title: "A Missed Surveillance Date Cost This CB a Suspended Certificate",
    excerpt: "When a planner goes on leave and nobody picks up the surveillance tracker, certificates slip past their windows. Here is how one fictional CB lost a certificate -- and how Certiva's automated surveillance countdowns prevent it.",
    date: "2026-04-08",
    readTime: "7 min",
    category: "Accreditation",
    content: `## The Spreadsheet That Nobody Checked

Meridian Certifications is a small certification body with about 180 active certificates. Their operations planner, Aysel, manages surveillance scheduling in a spreadsheet. Each row contains the client name, the standard, the Stage 2 completion date, and the next surveillance due date. Aysel updates it weekly, highlights upcoming audits in yellow, and flags overdue ones in red.

In March, Aysel goes on medical leave. She emails the spreadsheet to her colleague Emre before she goes. Emre downloads it, opens it once, and gets pulled into a rush of Stage 2 audits that landed in the same month. The spreadsheet sits in his downloads folder.

### The Certificate That Slipped

One of Meridian's clients, a packaging manufacturer called Yildiz Ambalaj, had their Stage 2 audit completed on April 15, 2025. Their first surveillance was due within twelve months -- by April 15, 2026. The surveillance window, accounting for the allowed flexibility, required the audit to be completed and the report finalized before that date.

Nobody scheduled it. Nobody noticed. On April 20, Meridian's quality manager realizes the surveillance window has passed. The certificate must be suspended. Yildiz Ambalaj calls, furious. They have a tender submission next week that requires a valid ISO 9001 certificate.

But it gets worse. During Meridian's next accreditation assessment, the assessor asks to see the surveillance tracking records. The suspended certificate is flagged. The assessor asks how it happened. The answer -- "our planner was on leave and the spreadsheet was not checked" -- generates a major nonconformity against Meridian's own management system.

### Why Spreadsheets Fail for Surveillance Tracking

Surveillance scheduling is deceptively simple on the surface. Every certificate has a cycle: Stage 2, then surveillance 1 at roughly twelve months, surveillance 2 at roughly twenty-four months, then recertification at thirty-six months. It seems like a calendar task.

But the complexity compounds quickly:

- **Dates are anchored to Stage 2 completion**, not to arbitrary calendar dates. If Stage 2 finishes on April 15, every subsequent surveillance is calculated from that anchor.
- **Multi-standard clients** may have different cycle dates for different scopes if certifications were not issued simultaneously.
- **Transfer clients** bring their own cycle dates from a previous CB, which may not align neatly.
- **Postponements and early audits** shift subsequent dates.
- **The sheer volume** of 180 certificates means there are surveillance events due almost every week.

A spreadsheet can list all of this. But it cannot alert anyone. It cannot enforce anything. It cannot stop a certificate from silently expiring. It relies entirely on a human being opening the file, scanning the rows, and taking action. When that human is unavailable, the system has no fallback.

### How Certiva Prevents This

In Certiva, surveillance dates are not tracked in a separate spreadsheet. They are built into the certificate record itself.

**Automatic Date Anchoring.** When a Stage 2 audit is completed and a certificate is issued, Certiva automatically calculates the surveillance schedule. Surveillance 1 is anchored to the Stage 2 completion date, tracked at twelve months. Surveillance 2 at twenty-four months. Recertification at thirty-six months. These dates are part of the certificate lifecycle, not a planner's personal tracking system.

**Countdown Visibility.** Every certificate in the portfolio displays a surveillance countdown. Planners can see at a glance which certificates are approaching their surveillance window, which are within the window, and which are overdue. This is not a static snapshot -- it updates in real time as days pass.

**Overdue Flagging.** When a surveillance date passes without a completed audit, the system flags it automatically. This is not a gentle reminder -- it is a visible status change on the certificate record that planners, quality managers, and administrators can all see. The certificate's status reflects reality.

**No Single Point of Failure.** Because surveillance tracking is embedded in the platform rather than in a personal file, it does not depend on any single person. When Aysel goes on leave, the system does not go on leave with her. Emre can open Certiva and see the same surveillance dashboard. The quality manager can see it. Anyone with the appropriate access can see exactly which audits are due and which are overdue.

### The Accreditation Consequence

Accreditation bodies expect certification bodies to have robust systems for maintaining certification. ISO/IEC 17021-1:2015 Clause 9.6 specifically addresses the obligation to monitor and maintain certifications through surveillance and recertification.

When an assessor finds a suspended certificate that resulted from a missed surveillance, they are not just looking at one mistake. They are evaluating whether the CB's system is adequate. A spreadsheet that one person maintains and nobody else checks is not an adequate system. It is a workaround.

Certiva provides the system that accreditation bodies expect to see: automated, visible, independent of any single person, and producing a clear audit trail of every surveillance cycle from initial scheduling through completion.

Meridian's problem was not that Aysel went on leave. It was that their surveillance tracking could not survive one person being unavailable for three weeks. That is not a personnel problem. That is a systems problem. And it has a systems solution.`
  },
  {
    slug: "why-your-accreditation-body-finds-problems-you-missed",
    title: "Why Your Accreditation Body Finds Problems You Missed",
    excerpt: "Unsigned impartiality declarations, coverage gaps in audit teams, unclosed NCs, misclassified findings -- these are the issues accreditation assessors find during witness audits. Each one would have been caught by an enforced gate.",
    date: "2026-05-22",
    readTime: "8 min",
    category: "Accreditation",
    content: `## The Witness Audit You Thought You Were Ready For

The accreditation body assessor arrives for a scheduled witness audit. Your lead auditor is conducting a Stage 2 at a food packaging company. The audit itself goes smoothly. Your auditor is competent, thorough, and professional. But the assessor is not just watching the audit -- they are reviewing your entire file.

And they find four problems that your internal processes did not catch.

### Problem 1: Unsigned Impartiality Declarations

The assessor opens the audit file and checks the impartiality declarations. Every auditor and technical expert assigned to an audit must sign an impartiality declaration confirming they have no conflict of interest with the client. It is a basic requirement of ISO/IEC 17021-1:2015.

Your lead auditor signed hers. But the technical expert who participated on day two never signed his. His declaration form is in the file, but the signature line is blank. Nobody noticed.

**How Certiva prevents this.** In Certiva, impartiality declarations are part of the audit workflow. Each team member is prompted to complete and sign their declaration within the platform. The audit cannot advance to the next phase until all assigned team members have signed. It is not a reminder or a checklist item -- it is a gate. If the technical expert has not signed, the system blocks progression. The unsigned declaration is impossible to miss because the workflow will not move past it.

### Problem 2: A Coverage Gap in the Audit Team

The audit scope includes ISO 22000. Your lead auditor is qualified for ISO 9001 and ISO 22000. Your second auditor is qualified for ISO 9001 only. The audit plan shows both auditors, but the qualification matrix reveals that the second auditor does not hold the EA code required for food safety-related clauses in the scope.

The assessor flags this as a nonconformity. The audit team did not have adequate competence coverage for the full scope.

**How Certiva prevents this.** When building an audit team in Certiva, the system validates each member's qualifications against the client's scope. It checks standards, EA codes, and scope categories. If the combined team does not cover every required area, the system flags the gap before the audit is scheduled. The planner sees exactly which EA codes are uncovered and can assign an additional team member or replace the unqualified one. The audit plan is not finalized until coverage is complete.

### Problem 3: A Nonconformity That Was Never Formally Closed

During the file review, the assessor looks at the previous surveillance audit from ten months ago. A minor NC was raised against Clause 7.1.5 (monitoring and measuring resources). The NC record shows it was issued, and there is a note in the file that says "client sent corrective action evidence by email." But there is no formal closure record. No auditor review. No acceptance or rejection. No date of closure. No evidence linked to the NC record.

The corrective action may have been adequate. But without a formal closure record, the assessor cannot verify it. This generates another finding.

**How Certiva prevents this.** In Certiva, nonconformity management follows a structured lifecycle. When an NC is raised, it is assigned a due date. The client uploads their root-cause analysis and corrective action evidence through the client portal. The auditor reviews the submission and either accepts it (closing the NC) or rejects it (sending it back for another round). Every action is timestamped and recorded. The NC cannot simply be noted as "done" in a comment -- it must be formally closed through the review process. And critically, if an NC remains open, it gates subsequent workflow steps. An unclosed NC from a previous audit cycle is visible to everyone who opens the client file.

### Problem 4: A Report With Misclassified Findings

The assessor reviews the Stage 2 report. In the findings section, there is an entry under Clause 8.5.1 (production and service provision) that reads: "The organization does not have a documented procedure for controlling nonconforming outputs, and three instances of nonconforming product were shipped to customers in the last quarter without detection."

This is classified as an "observation."

The assessor raises an eyebrow. A systematic failure to control nonconforming outputs, with evidence of repeated occurrence and customer impact, is not an observation. It is, at minimum, a minor nonconformity -- and a strong case could be made for a major. The misclassification affects the audit conclusion and potentially the certification decision.

**How Certiva prevents this.** Certiva's AI report review analyzes the language and substance of each finding against its classification. When a finding describes a failure to meet a requirement -- especially one with evidence of recurrence -- but is classified as an observation rather than a nonconformity, the AI flags it. The review returns typed findings (critical, major, minor, warning) as inline comments, giving the auditor a clear signal that the classification needs reconsideration before the report is submitted. This does not override the auditor's judgment, but it ensures that obvious misclassifications are caught before the report leaves the CB.

### The Pattern Behind the Problems

None of these four issues are rare. They are among the most common findings during accreditation assessments. They all share a root cause: the CB's processes rely on people remembering to do things rather than on systems that enforce them.

Certiva does not make these problems impossible. But it makes them visible, flagged, and blocked before they reach the point where an accreditation assessor discovers them. That is the difference between a system that relies on human vigilance and one that enforces compliance by design.`
  },
  {
    slug: "five-tools-five-logins-one-replacement",
    title: "Five Tools, Five Logins, Five Invoices — and Still No Audit Trail",
    excerpt: "Most certification bodies stitch together a CRM, a cloud drive, email-based signing, a standalone LMS, and spreadsheets. None of them talk to each other, and there is no unified audit trail. Certiva replaces all five.",
    date: "2026-02-18",
    readTime: "7 min",
    category: "Operations",
    content: `## The Stack That Every CB Recognizes

Walk into almost any small or mid-sized certification body and ask them what software they use. The answer is usually some combination of five tools:

1. **A CRM or contact database** -- Salesforce, HubSpot, or something simpler -- to track clients and contacts.
2. **A cloud drive** -- Google Drive, Dropbox, or SharePoint -- to store audit reports, certificates, procedures, and client documents.
3. **Email** -- for sending documents for signature, communicating with auditors, and tracking client correspondence.
4. **A standalone training platform or LMS** -- sometimes just a spreadsheet -- to track auditor qualifications, training records, and CPD hours.
5. **Spreadsheets** -- the universal fallback for everything else: audit schedules, surveillance tracking, NC logs, committee assignments, audit time calculations, and scope matrices.

Each of these tools does its specific job reasonably well in isolation. The CRM tracks contacts. The cloud drive stores files. Email delivers messages. The problem is not with any individual tool. The problem is that they do not connect.

### The Consequences of Disconnection

**No unified audit trail.** When an accreditation assessor asks to see the complete history of a certification decision, what do you show them? The client record is in the CRM. The application form is in Google Drive. The audit plan was emailed to the auditor. The signed report is in a different folder. The NC closure evidence came in by email and was saved to yet another folder. The committee decision is recorded in a spreadsheet. The certificate was generated in a Word template and stored somewhere else.

Piecing together this trail takes hours. And even then, you cannot prove the sequence of events with certainty because the timestamps come from five different systems with no shared timeline.

**Version control chaos.** The auditor downloads the report template from the cloud drive, fills it in locally, and emails it back. The reviewer makes changes and emails a new version. The lead auditor makes more changes. By the time the report is final, there are four versions in different people's email inboxes, two on the cloud drive, and nobody is entirely sure which one was signed.

**No enforcement of process.** A CRM does not know that a committee review must happen before a certificate is issued. Google Drive does not prevent someone from uploading an unsigned report. Email does not enforce signing order. Spreadsheets do not block an audit from being scheduled when the team lacks scope coverage. There are no gates, no validations, no automated checks. Everything depends on people following the procedure correctly every time.

**Training records in a silo.** Auditor qualifications live in the training platform or spreadsheet. The scheduling tool (also a spreadsheet) has no connection to it. When a planner assigns an auditor to a job, they have to manually cross-reference the auditor's qualifications. If the training records are out of date or incomplete, the planner may not even realize there is a coverage gap.

**Five invoices, five renewals, five support channels.** Each tool has its own subscription, its own billing cycle, its own support team. When something breaks or needs configuration, you are dealing with five different vendors, none of whom understand certification body operations.

### What a Unified Platform Changes

Certiva replaces all five tools with a single system purpose-built for certification body operations.

**Client management replaces the CRM.** Every client has a record in Certiva that includes their application, scope, contact information, audit history, certificates, and correspondence. This is not a generic contact card -- it is a certification-specific client profile that tracks the entire lifecycle from application to recertification.

**Document management replaces the cloud drive.** Every document -- audit plans, stage reports, NC evidence, signed certificates, impartiality declarations -- is stored within the client record in Certiva. Documents are versioned, timestamped, and linked to the workflow phase that produced them. There is no need for a separate file storage system because the documents live where the work happens.

**In-app signing replaces email-based signatures.** Certiva's visual signing system handles multi-party signing chains directly in the browser. Role-gated signing order, visual signatures with name and timestamp and IP address, flattened PDFs. No printing, scanning, emailing, or chasing people for signatures. The signing chain is part of the workflow, not a separate process.

**Auditor qualification tracking replaces the standalone LMS.** Certiva maintains a complete qualification matrix for every auditor: standards, EA codes, scope categories, training records, witness audit dates, and CPD hours. When a planner builds an audit team, the system validates coverage automatically. Qualification data is not in a silo -- it is integrated into scheduling, planning, and audit assignment.

**The audit trail replaces everything.** This is the most important difference. In Certiva, every action is logged with a timestamp and user identity. Every document version is preserved. Every status change is recorded. Every signature is captured. Every NC lifecycle is tracked from issuance through closure. When an accreditation assessor asks "show me the history of this certification decision," the answer is one client record with a complete, chronological, timestamped trail.

### The Cost of Stitching

Certification bodies that use five disconnected tools do not do so because they prefer it. They do it because each tool was adopted to solve an immediate problem, and over time, the collection grew. But the hidden cost is enormous: duplicated data entry, manual cross-referencing, version confusion, missed deadlines, and the constant risk that something falls through the gap between systems.

A unified platform is not about having fewer logins. It is about having one source of truth, one audit trail, and one system that enforces the process your accreditation body expects you to follow.`
  },
  {
    slug: "ai-report-review-catches-what-auditors-miss",
    title: "AI Report Review Catches What Your Best Auditors Miss",
    excerpt: "Certiva's AI report review checks completed reports against accreditation-body rule profiles and returns findings as inline comments in the Word document. It catches missing clause coverage, NC misclassifications, and shallow findings before the report leaves the CB.",
    date: "2026-06-14",
    readTime: "8 min",
    category: "AI",
    content: `## The Report That Looked Fine Until It Didn't

Consider a completed Stage 2 audit report for an ISO 27001 certification. The lead auditor is experienced, competent, and thorough. She conducted a solid audit of a software development company with 85 employees. The report is twenty-three pages long, covers all the controls in Annex A, and includes two minor nonconformities and five observations.

The report looks good. It reads well. The reviewer at the certification body scans it, checks the conclusion, and approves it. It goes to the committee. The certificate is issued.

Six months later, during an accreditation assessment, the assessor pulls this file. Within thirty minutes, they identify three problems that nobody caught.

### What the Assessor Found

**Missing mandatory clause coverage.** Clause A.12.4 (logging and monitoring) has no entry at all. The report jumps from A.12.3 to A.12.5. There is no conformity statement, no finding, no notation that the clause was reviewed and found not applicable. It is simply absent. The assessor cannot determine whether the auditor evaluated this control or forgot it entirely.

**A misclassified nonconformity.** One of the "observations" reads: "The organization has not defined roles and responsibilities for information security as required by A.5.2. During interviews, three department managers could not identify who is responsible for information security within their teams." This is not an observation. It describes a clear failure to meet a specific requirement of the standard. It should be classified as a minor nonconformity at minimum.

**Findings that lack depth.** Several conformity statements are superficial. Under A.8.1 (asset management), the report says: "The organization maintains an asset inventory. Conforming." There is no mention of what evidence was reviewed, how the asset inventory was verified, or what the auditor actually observed. The finding does not demonstrate that an adequate audit was conducted for this control.

### How AI Report Review Works

Certiva's AI report review is designed to catch exactly these kinds of issues before a report is submitted for internal review.

Here is the process:

**Step 1: Submit the completed report.** The auditor or reviewer uploads the finalized report into Certiva. The report can be in Word format, and the AI processes it against the applicable accreditation-body rule profile.

**Step 2: Rule profile matching.** Certiva maintains rule profiles for accreditation bodies including UAF and TURKAK. These profiles define what a compliant report looks like: which clauses must be covered, how findings should be classified, what level of detail is expected, and what structural elements are required. The AI checks the report against the relevant profile.

**Step 3: Analysis and finding generation.** The AI reads every section of the report. It checks for:

- **Clause coverage completeness.** Are there any mandatory clauses or controls with no entry at all? Are there clauses marked as not applicable without justification?
- **Finding classification accuracy.** Does the language of each finding match its classification? When a finding describes a failure to meet a requirement, is it classified as a nonconformity or incorrectly labeled as an observation?
- **Finding depth and evidence.** Do conformity statements include sufficient detail about what evidence was reviewed? Do nonconformity descriptions include the requirement, the evidence of nonconformity, and the specific nature of the failure?
- **Structural completeness.** Does the report include all required sections? Is the conclusion consistent with the findings? If there are major NCs, does the conclusion reflect that?

**Step 4: Inline comments returned.** The AI does not produce a separate summary document. It returns its findings as typed inline comments directly in the Word document. Each comment is classified:

- **Critical:** A fundamental problem that would likely result in an accreditation finding (e.g., a mandatory clause with no coverage at all).
- **Major:** A significant issue that affects the reliability of the audit conclusion (e.g., a clearly misclassified nonconformity).
- **Minor:** A quality issue that should be addressed (e.g., a conformity statement with insufficient detail).
- **Warning:** A potential issue that the reviewer should consider (e.g., language that could be interpreted as a finding but is classified as a conformity).

The auditor receives the annotated document, reviews each comment, and decides which ones to act on. The AI does not change the report. It provides a structured review that highlights issues for human judgment.

### A Concrete Example

Take the ISO 27001 report described above. If it had been submitted through Certiva's AI report review, the AI would have returned: a **critical** inline comment on A.12.4 noting the missing clause entry, a **major** comment on the A.5.2 observation flagging the misclassification ("This finding describes a failure to meet a requirement with evidence of systematic non-implementation -- consider reclassifying as a nonconformity"), and three **minor** comments on shallow conformity statements that lack evidence detail.

The reviewer would have seen these comments, addressed them, and the report that reached the committee and the accreditation assessor would have been clean.

### Why Human Review Alone Is Not Enough

Experienced reviewers catch many of these issues. But they are human. They review dozens of reports per month. They scan rather than read word by word. They focus on the findings and may not notice that a clause is missing from a twenty-three-page report. They may not cross-reference every finding's language against its classification.

AI report review is not a replacement for human reviewers. It is a second layer that is systematic, consistent, and tireless. It checks every clause, every finding, every classification, every time. The human reviewer can then focus on judgment calls -- the substance of the findings, the adequacy of the audit approach, the soundness of the conclusion -- rather than hunting for structural gaps.

For certification bodies that issue dozens of certificates per month, this is the difference between hoping your reports are clean and knowing they are.`
  },
  {
    slug: "the-signing-chain-that-took-three-weeks",
    title: "The Signing Chain That Took Three Weeks by Email",
    excerpt: "A Stage 2 report needs six signatures in order. By email and PDF, the chain stalls for weeks. With Certiva's role-gated visual signing, the same process takes days.",
    date: "2026-03-28",
    readTime: "7 min",
    category: "Operations",
    content: `## Six Signatures, One Document, Three Weeks

A certification body called Akdeniz Belgelendirme has just completed a Stage 2 audit for a construction materials company. The audit report is done. The nonconformities have been closed. Now the report needs to be signed before it can go to the committee for the certification decision.

The signing chain is:

1. Lead Auditor
2. Technical Reviewer
3. Committee Member 1
4. Committee Member 2
5. Committee Member 3
6. Certification Manager

This is not unusual. Accreditation requirements demand that audit reports and certification decisions be reviewed and approved by qualified, impartial parties. Multiple signatures are the norm, not the exception.

### Week One: The Chain Begins

The operations coordinator exports the report as a PDF and emails it to the lead auditor. The lead auditor prints it, signs it, scans it, and emails it back. This takes a day because the auditor is at another client site and does not have a scanner until he gets home.

The coordinator receives the signed PDF and emails it to the technical reviewer. The reviewer is on a three-day audit in Izmir. She reads the email on her phone, but she cannot review and sign a twenty-page technical document on a mobile screen. She will get to it when she is back in the office. Three days later, she reviews it, prints it, signs it, scans it, and emails it back.

End of week one: two signatures complete, four to go.

### Week Two: The Committee Bottleneck

The coordinator emails the report to the three committee members. One of them signs and returns it within a day. The second committee member is on vacation and has an out-of-office reply. The third committee member replies: "I signed, but my scanner is broken. I will send it when I get it fixed."

The coordinator waits. On Thursday, the third committee member sends a photo of the signed page taken with his phone camera. The image is crooked and partially cut off. The coordinator asks him to resend. He sends another photo on Friday, slightly better.

The second committee member returns from vacation on Monday of the third week. She signs and returns the document on Tuesday.

### Week Three: The Final Signature

The coordinator now has a PDF with five signatures scattered across different scans, photos, and email attachments. She assembles them into a single document, hoping the pages are in the right order, and emails it to the Certification Manager.

The Certification Manager reviews the assembled document, notices that one committee member's signature page is from a photo and does not look professional, and asks the coordinator to get it redone. This takes two more days.

On day nineteen, the signing chain is complete. The certificate could have been issued two weeks earlier.

### What Happens With Certiva

Now consider the same signing chain in Certiva.

**Role-gated signing order.** The system knows that the signing chain for this document type requires Lead Auditor, then Technical Reviewer, then Committee Members, then Certification Manager. Each role is assigned in advance. The system enforces the order: the reviewer cannot sign until the lead auditor has signed; the committee members cannot sign until the reviewer has signed.

**In-browser visual signatures.** Each signer receives a notification that a document is ready for their signature. They open the document in their browser -- on desktop or mobile. They review it on screen. They place their visual signature on the designated signature area. The signature captures their full name, the timestamp, and their IP address. No printing. No scanning. No emailing PDFs back and forth.

**Committee signing via email OTP token.** For committee members who may not log into the platform regularly, Certiva offers signing via email OTP. The committee member receives an email with a secure link. They click it, enter a one-time password sent to their email, review the document, and sign. This is particularly useful for meeting-based decisions where multiple committee members need to sign in a single session.

**Enforced completeness.** The certification decision workflow does not advance until all required signatures are in place. The coordinator does not need to track who has signed and who has not -- the system shows the signing status in real time. Each signature is recorded with the signer's name, timestamp, and IP address, creating a clear visual and timestamped record.

**Flattened PDF output.** Once all signatures are captured, the document is flattened into a PDF where the signatures are embedded in the page. The signed document is tamper-evident and stored in the client record. There is no assembly required, no photo attachments to reconcile, no version confusion.

### Days, Not Weeks

In practice, the same six-signature chain that took Akdeniz Belgelendirme nineteen days by email takes two to four days in Certiva. The lead auditor signs on the day the report is finalized. The reviewer signs between audits using her phone. The committee members sign via OTP link within a day or two of receiving the notification. The Certification Manager adds the final signature.

The difference is not that people sign faster. It is that the friction is removed. Nobody needs to print, scan, or email. Nobody's signature gets lost in an inbox. Nobody is waiting for a scanner. The signing chain moves at the speed of people reviewing and approving, not at the speed of paper logistics.

### What This Is Not

It is important to be clear: Certiva's signing is visual signatures flattened into PDFs with in-app records of who signed, when, and from where. These are not cryptographic digital signatures or PKI-based e-signatures. They are the visual, name-and-timestamp signatures that certification bodies use for audit reports and committee decisions, delivered through a digital workflow instead of a paper-and-email one.

For most certification body operations, this is exactly what is needed. The accreditation requirement is that documents be signed by the appropriate parties with a verifiable record. Certiva provides that record without the three-week email chain.`
  },
  {
    slug: "what-happens-when-committee-member-was-on-audit-team",
    title: "What Happens When a Committee Member Was on the Audit Team",
    excerpt: "A small CB with a limited auditor pool accidentally assigns an audit team member to the certification committee. The accreditation body catches it. Certiva's automatic impartiality enforcement would have blocked it before it happened.",
    date: "2026-07-01",
    readTime: "7 min",
    category: "Accreditation",
    content: `## The Impartiality Breach Nobody Saw Coming

Denizli Belgelendirme is a small certification body with eight auditors and four committee members. They operate in a specialized niche -- textile and garment manufacturing -- and their auditors and committee members often overlap in qualifications. Two of their committee members also serve as auditors on certain jobs.

In February, one of these dual-role individuals, Mehmet, serves as a technical expert on a Stage 2 audit for a textile dyeing company. The audit goes well. The report is written, the NCs are closed, and the file is sent for committee review.

The quality coordinator assigns the committee. She needs members who are qualified for ISO 9001 and EA code 4 (textiles). She checks her qualification spreadsheet. Three names come up as qualified: Mehmet, Sevgi, and Hakan. She assigns all three plus a fourth member, Fatma, who covers the management system expertise.

Nobody notices that Mehmet was on the audit team for this very client three weeks ago.

### What ISO/IEC 17021-1:2015 Requires

Clause 9.5.1 is explicit: the certification decision shall be made by persons who did not participate in the audit. This is a fundamental impartiality requirement. The person making the certification decision must be independent from the person who gathered the evidence. It is one of the core safeguards that gives ISO certification its credibility.

When the accreditation body conducts its assessment six months later, the assessor reviews the committee records for this certification decision. They cross-reference the committee member list with the audit team list. Mehmet's name appears on both.

The finding is immediate and unambiguous: a major nonconformity against the CB's impartiality process. The certification decision is compromised. Depending on the severity, the accreditation body may require the certification decision to be repeated with a properly constituted committee.

### Why Small CBs Are Especially Vulnerable

This scenario is not hypothetical in its dynamics. Small certification bodies face a structural challenge: they have a limited pool of qualified individuals, and those individuals often wear multiple hats. An auditor who is qualified for a specific EA code may also be one of the few committee members qualified for that same code.

In a large CB with fifty auditors and twenty committee members, the overlap is manageable. In a small CB with eight auditors and four committee members, the overlap is almost unavoidable. The same person might audit a client in January and be the only qualified committee member available in February.

Manual tracking makes this worse. The quality coordinator is typically checking qualification spreadsheets and recent audit assignments separately. She looks at who is qualified for the committee, but she may not cross-reference against who was on the audit team. She might remember if it was last week's audit, but what about last month's? What about six months ago?

### How Certiva Enforces Impartiality

In Certiva, committee composition is not just a list of names. It is a validated assignment that the system checks against multiple rules before allowing the committee review to proceed.

**Rule 1: No committee member may have been on the audit team.** When a quality coordinator assigns committee members to a certification decision, Certiva cross-references the proposed committee against the audit team for that specific client file. If any proposed committee member appears on the audit team -- whether as lead auditor, auditor, or technical expert -- the system blocks the assignment. The coordinator sees an immediate notification explaining why the assignment was rejected and which member has the conflict.

This check is not limited to the most recent audit. It covers the audit team for the current certification cycle, ensuring that anyone involved in any phase of the audit cannot participate in the certification decision.

**Rule 2: The committee must cover every standard and EA code in scope.** It is not enough for the committee to be impartial. The members must also be competent to review the certification scope. Certiva validates that the combined qualifications of the assigned committee members cover every standard and every EA code in the client's scope. If there is a coverage gap, the system flags it before the committee review begins.

This prevents a different kind of problem: a committee that is impartial but unqualified, rubber-stamping a decision without the technical competence to evaluate the audit findings.

### What This Looks Like in Practice

Back to Denizli Belgelendirme's scenario, but now with Certiva.

The quality coordinator opens the client file and navigates to the committee assignment phase. She selects Mehmet, Sevgi, Hakan, and Fatma.

The system immediately flags Mehmet. The notification reads: "Mehmet Yilmaz cannot be assigned to this committee. He was a member of the audit team for this client (Technical Expert, Stage 2, February 12-15, 2026)."

The coordinator removes Mehmet and looks for an alternative. The system also checks coverage: with Sevgi, Hakan, and Fatma, does the committee cover ISO 9001 and EA code 4? If Sevgi and Hakan cover the EA code and Fatma covers the management system standard, the committee is valid. If there is still a gap, the system identifies it.

The entire check takes seconds. There is no spreadsheet cross-referencing, no memory-dependent review, no possibility that an overlap is missed.

### The Broader Principle

Impartiality is not just a regulatory checkbox. It is the foundation of certification credibility. When a committee member who participated in the audit also makes the certification decision, the independence of the process is compromised -- even if that person acts in good faith.

Certification bodies cannot rely on people remembering every assignment and every conflict. The pool is too small, the overlap is too frequent, and the consequences of a breach are too serious. This is exactly the kind of rule that should be enforced by a system, not by human memory. Certiva makes the impartiality check automatic, reliable, and impossible to bypass.`
  },
  {
    slug: "iaf-md5-calculation-errors-accreditation-findings",
    title: "IAF MD 5 Calculation Errors Are One of the Most Common Accreditation Findings",
    excerpt: "The IAF MD 5 audit time tables involve employee-count bands, special methods for 27001 and EnMS, MD 11 integration reductions with floors, and complex rounding rules. Manual calculation is a frequent source of accreditation findings.",
    date: "2026-02-05",
    readTime: "9 min",
    category: "Accreditation",
    content: `## The Table That Looks Simple and Is Not

If you have ever opened IAF MD 5, you might think audit time calculation is straightforward. There is a table. It lists effective personnel ranges. For each range, there is a number of audit days. Look up the number of employees, find the audit days. Done.

Except it is not done. Not even close.

The base table is just the starting point. On top of it, certification bodies must apply:

- Category adjustments based on the complexity of the client's processes and sector
- Reductions for clients with low-risk activities or processes that are repetitive
- Increases for clients with high-risk processes, multiple locations, or multiple languages
- The square-root method for ISO/IEC 27001, where audit time is calculated differently based on the information security management system scope
- K-factors for energy management system (EnMS) audits under ISO 50001
- Site addition calculations for multi-site certifications
- IAF MD 11 integration reductions for combined audits of multiple management system standards, with a 50% floor on the reduction
- A 20% reporting deduction for off-site activities (report writing time is deducted from on-site time in certain scenarios)
- Rounding rules that differ by accreditation body and standard

Each of these factors interacts with the others. The order of operations matters. The rounding rules are specific. And the result must be defensible when an accreditation assessor reviews the audit plan.

### A Real-World Example

Consider a manufacturing company applying for integrated ISO 9001 + ISO 14001 + ISO 45001 certification. They have 320 employees in metalworking with significant environmental and OHS risks.

The planner must: look up base audit time for each standard from the MD 5 table (different bands for 320 employees depending on the standard), apply complexity adjustments (metalworking increases environmental and OHS time but may not affect QMS time), deduct the 20% reporting portion, calculate the MD 11 integration reduction for the combined audit, verify the result does not fall below the 50% floor, and apply final rounding rules.

The sequence matters. The 20% reporting deduction must be applied before the integration reduction, not after. The 50% floor applies to the total, not to each standard individually. The rounding increment varies by accreditation body. Getting any of these steps out of order changes the final number -- and an incorrect audit time is a finding waiting to happen.

### Where Manual Calculations Go Wrong

Accreditation assessors report that audit time calculation errors are among their most frequent findings. The common mistakes include:

- **Applying the integration reduction before deducting the reporting percentage.** This changes the base numbers and leads to an incorrect final result.
- **Forgetting the 50% floor.** The planner calculates a reduction that seems reasonable but goes below the minimum allowed by MD 11.
- **Using the wrong employee band.** The MD 5 tables have specific ranges. A company with 320 employees falls in a different band than one with 300. Misreading the table changes the base time.
- **Applying the square-root method incorrectly for ISO 27001.** The calculation for information security audits uses a different methodology, and planners who are accustomed to the standard table sometimes apply the wrong method.
- **Inconsistent K-factor application for EnMS.** Energy management audits under ISO 50001 use K-factors that modify the base time. These factors depend on the type of energy use and the complexity of the energy system.
- **Rounding at intermediate steps.** Rounding should typically be applied to the final result, not at each intermediate step. Rounding mid-calculation introduces cumulative errors.

### How Certiva's Deterministic Engine Handles This

Certiva includes a built-in audit time calculation engine that implements the IAF MD 5 and MD 11 rules deterministically. This means the calculation follows a fixed, validated algorithm -- not AI, not estimation, not approximation. The same inputs always produce the same outputs.

The planner enters the client's effective personnel count, selects the applicable standards, specifies the complexity category, and indicates whether it is an integrated audit. The engine:

1. Looks up the base audit time for each standard from the MD 5 tables
2. Applies category and complexity adjustments
3. Applies the 20% reporting deduction where applicable
4. Calculates the MD 11 integration reduction
5. Checks the result against the 50% floor
6. Applies the correct rounding rules for the applicable accreditation body
7. Outputs the final audit time for Stage 1 and Stage 2 separately

For ISO 27001, the engine automatically applies the square-root method. For ISO 50001, it applies the appropriate K-factors. For multi-site certifications, it calculates site additions according to the applicable IAF guidance.

**Planner overrides with justification.** The engine is deterministic, but certification body operations are not always textbook. Sometimes a planner has a legitimate reason to deviate from the calculated time -- a client with unusually simple processes, an audit team with deep prior knowledge of the client, or a scope that is narrower than the employee count might suggest. Certiva allows planners to override the calculated time, but requires a documented justification. This justification becomes part of the audit record and is available for accreditation review.

### Why This Matters for Accreditation

When an accreditation assessor reviews an audit plan, the audit time calculation is one of the first things they check. They want to see that the time is adequate, that the MD 5 tables were applied correctly, and that any deviations are justified. A calculation error does not just create an accreditation finding -- it raises questions about whether the audit was given enough time to be thorough.

Getting the calculation right every time is not a matter of training planners harder. The rules are complex enough that well-trained planners still make mistakes. A deterministic engine eliminates the arithmetic errors and lets planners focus on the judgment calls -- the complexity assessments, the justifications, the professional decisions that cannot be automated.`
  },
  {
    slug: "client-portal-stops-cb-being-call-center",
    title: "How the Client Portal Stops Your CB from Being a Call Center",
    excerpt: "With 200 clients and 3 admin staff, every day brings the same questions: Where is my certificate? When is my audit? Did you get my corrective action? A branded client portal gives clients answers without a phone call.",
    date: "2026-04-25",
    readTime: "7 min",
    category: "Platform",
    content: `## The Three Questions You Answer Every Day

If you run a certification body with more than a hundred active clients, your admin team knows these questions by heart:

1. "Where is my certificate?"
2. "When is my next audit scheduled?"
3. "Did you receive the corrective action evidence I sent?"

These questions arrive by phone, email, and WhatsApp. They arrive multiple times per day. Each one requires someone on your team to stop what they are doing, look up the client record, check the status, and respond. Each one takes five to ten minutes. Multiply that by fifteen or twenty inquiries per day, and your three-person admin team is spending a quarter of their time being a call center.

The clients are not being unreasonable. They genuinely do not know where their certification stands. They emailed corrective action evidence two weeks ago and have no way to confirm it was received, let alone reviewed. Their procurement department is asking about the certificate, and they have no answer to give.

The problem is not that clients ask questions. The problem is that they have no other way to get answers.

### What a Client Portal Changes

Certiva includes a branded client portal that gives each client visibility into their own certification status. The portal carries the certification body's branding -- logo, colors, domain -- so it feels like an extension of the CB's service, not a third-party tool.

Here is what clients can do in the portal:

**See their certification timeline.** The portal shows the client exactly where they are in the certification process. Application submitted. Stage 1 scheduled for March 15. Stage 1 completed. NCs issued. NCs under review. Stage 2 scheduled for May 8. The client does not need to call to ask "what is happening next" because the timeline shows them.

**Sign documents in order.** When documents require the client's signature -- applications, agreements, audit plans -- they appear in the portal with clear signing prompts. The signing is order-gated: the client cannot sign a document until the preceding steps are complete. This eliminates confusion about which documents need attention and in what sequence.

**Respond to nonconformities.** When an auditor raises an NC, the client sees it in their portal. They can read the finding, upload their root-cause analysis, and submit corrective action evidence directly through the portal. The submission is timestamped and linked to the NC record. The client can see whether the auditor has reviewed their response, and whether the NC has been accepted or rejected.

This is the single biggest source of "did you receive my..." phone calls. When corrective action evidence is sent by email, neither the client nor the CB has a reliable way to confirm receipt, let alone track review status. The portal makes this visible to both parties.

**Rate auditors.** After an audit is completed, clients can submit feedback on the audit experience through the portal using a structured form aligned with FR.211. This gives the CB valuable feedback data without requiring a separate survey process.

**Manage their employee roster.** Clients can maintain their own employee information in the portal, keeping contact details and organizational data current without requiring the CB to manually update records.

### The Impact on Admin Workload

Consider a certification body with 200 active clients and 3 admin staff. Before the portal, a typical day includes:

- 8 calls asking about certificate or audit status
- 5 emails asking "did you receive my corrective action evidence?"
- 3 emails asking when the next audit is scheduled
- 2 calls from clients whose procurement departments need certificate confirmation
- Various follow-up emails to chase clients for signatures on documents

After implementing the client portal:

- Status questions drop dramatically because clients can check the timeline themselves
- "Did you receive..." questions are eliminated because the portal shows submission and review status
- Scheduling questions decrease because upcoming audits are visible in the timeline
- Document signing is faster because clients sign in the portal rather than through an email chain

The admin team is not eliminated. They still handle complex inquiries, manage exceptions, and provide personal service where it matters. But they are no longer spending hours each day on questions that have simple, factual answers. Those answers are now available in the portal, twenty-four hours a day, without a phone call.

### What This Means for Client Relationships

There is a counterintuitive aspect to this. Some certification body managers worry that a portal will make the relationship feel impersonal. In practice, the opposite happens.

When clients can see their status, sign their documents, and track their NCs without calling, they feel more informed and more in control. They are not frustrated by waiting for a callback. They are not anxious about whether their evidence was received. They can show their own management team exactly where the certification stands.

The interactions that remain are the ones that actually benefit from human attention: technical questions about findings, discussions about scope changes, scheduling negotiations. The admin team has time for these conversations because they are not fielding fifteen status calls a day.

### The Branded Experience

The portal is not a generic Certiva interface that the client logs into. It carries the certification body's branding. This matters because the client's relationship is with the CB, not with the CB's software vendor. The portal is presented as the CB's client service platform, which is exactly what it is.

For certification bodies competing for clients, a professional branded portal is a differentiator. It signals operational maturity and client-centricity. It tells prospective clients that this CB has invested in service infrastructure, not just auditor competence.

The three questions will always exist. But the answer should not require a phone call.`
  },
  {
    slug: "nonconformity-tracked-spreadsheet-no-proof-closure",
    title: "When a Nonconformity Is Tracked in a Spreadsheet, You Have No Proof of Closure",
    excerpt: "The accreditation assessor asks to see the closure evidence for NC #7. Without a structured NC lifecycle, you are searching through email threads and hoping for the best. Certiva tracks every round from issuance through closure with timestamped proof.",
    date: "2026-05-05",
    readTime: "8 min",
    category: "Operations",
    content: `## The Question You Cannot Answer

It is an accreditation assessment. The assessor is reviewing a certification file from eight months ago. She opens the Stage 2 report and sees that three nonconformities were raised: two minor and one major. She turns to the quality manager and asks a simple question:

"Show me the closure evidence for NC number seven."

The quality manager opens the client folder on the shared drive. There are twelve subfolders with inconsistent naming. She searches for "NC" and finds a file called "NC_tracking_2025.xlsx." She opens it. Row 47 shows NC #7: "Major NC - Clause 8.5.1 - No documented procedure for nonconforming output." The status column says "Closed." The date column says "2025-09-14."

The assessor asks: "Where is the corrective action evidence the client submitted? Where is the auditor's review? Where is the record of acceptance?"

The quality manager searches the email archive. She finds a thread from September 2025 where the client sent a PDF of their new procedure. She finds a reply from the auditor that says "Looks good, NC can be closed." She does not find a formal review record, a documented evaluation of the root-cause analysis, or a timestamped closure decision.

The assessor writes a finding: inadequate records of NC closure. The spreadsheet says "closed," but there is no verifiable evidence of the process that led to closure.

### Why Spreadsheet NC Tracking Fails

Spreadsheets are excellent at listing things. They can track NC numbers, descriptions, due dates, and status. But they cannot manage a process. And nonconformity management is not a list -- it is a multi-step process with specific requirements.

**No structured lifecycle.** A spreadsheet has rows and columns. It does not enforce a sequence of steps. It cannot require that a root-cause analysis be submitted before corrective action is reviewed. It cannot prevent someone from changing the status to "closed" without supporting evidence.

**No evidence linkage.** When a client emails corrective action evidence, someone downloads the attachment and saves it somewhere. The spreadsheet has no link to this evidence. The connection between the NC record and the closure evidence exists only in someone's memory or email archive.

**No review trail.** When the auditor reviews the corrective action and decides to accept or reject it, that decision is typically communicated by email or verbally. There is no formal record of what was reviewed or when the decision was made. The spreadsheet just flips from "Open" to "Closed."

**No rejection and resubmission handling.** Sometimes the first corrective action attempt is inadequate. The auditor rejects it and asks the client to try again. In a spreadsheet, this might be tracked with a comment. But there is no structured second round, no record of which submission was rejected and why, and no history of how many rounds it took to close the NC.

### How Certiva Manages the NC Lifecycle

In Certiva, nonconformity management is a structured workflow with defined steps, enforced sequences, and complete records at every stage.

**Step 1: NC issuance.** The lead auditor raises the NC within the platform, specifying the classification (minor, major, or critical), the applicable clause, and the finding description. The system automatically computes the due date based on the classification. The NC is immediately visible in the client's portal and the CB's internal dashboard.

**Step 2: Client response.** The client accesses the NC through their portal. They upload their root-cause analysis and corrective action evidence. The submission is timestamped and linked directly to the NC record. The client can see the status change from "Awaiting Response" to "Under Review." They do not need to email the CB to ask if the evidence was received.

**Step 3: Auditor review.** The assigned auditor reviews the client's submission within the platform. They have two options: accept (closing the NC) or reject (sending it back for another round). If they accept, the NC status changes to "Closed" with a timestamp and the auditor's identity recorded. If they reject, they provide a reason, and the NC returns to the client for a new submission.

**Step 4: Rejection and resubmission.** When an NC is rejected, a new round begins. The client sees the rejection reason and can upload a revised corrective action. The auditor reviews again. Each round is recorded with its own history: submission date, evidence uploaded, review date, decision, and reason. The NC record shows the complete journey from issuance through every round to final closure.

**Step 5: Workflow gating.** This is the critical enforcement mechanism. An open NC gates the certification workflow. If a major NC from Stage 2 has not been formally closed, the file cannot advance to the committee review phase. The system does not allow the certification process to proceed until all NCs are resolved. This prevents the scenario where a certificate is issued while NCs are still technically open.

### What the Assessor Sees

Now replay the accreditation assessment scenario with Certiva. The assessor asks to see NC #7. The quality manager opens the client record and navigates to the NC section. The entire lifecycle is visible: the original finding with classification and clause reference, the auto-computed due date, Round 1 with the client's submission (timestamped), the auditor's rejection with a documented reason, Round 2 with the client's revised submission, and the auditor's acceptance closing the NC. Every piece of evidence is linked. Every decision has a timestamp and the identity of the person who made it. The assessor verifies the entire closure process in two minutes.

### The Difference Between a Status and a Record

A spreadsheet that says "Closed" is a status. It tells you where things stand but not how they got there. A structured NC lifecycle in Certiva is a record -- every step, every submission, every decision, every timestamp.

When the accreditation body asks "show me the closure evidence for NC #7," the answer should take seconds, not a search through email. That is the difference between tracking nonconformities and managing them.`
  }
];
