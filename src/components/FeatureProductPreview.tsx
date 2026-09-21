import {
  AlertTriangle,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileCheck2,
  FileText,
  GraduationCap,
  Inbox,
  LayoutDashboard,
  MessageSquare,
  PenLine,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export type FeaturePreviewId =
  | "workflow"
  | "documents"
  | "signing"
  | "committee"
  | "nc"
  | "ai"
  | "client"
  | "auditor"
  | "training"
  | "compliance"
  | "crm"
  | "applications";

const ROLE_NAV: Record<"cb" | "client" | "auditor" | "training", { label: string; icon: typeof LayoutDashboard }[]> = {
  cb: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Applications", icon: Inbox },
    { label: "Clients", icon: Users },
    { label: "NC Management", icon: AlertTriangle },
    { label: "Certiv.AI", icon: Sparkles },
  ],
  client: [
    { label: "Overview", icon: LayoutDashboard },
    { label: "Documents", icon: FileText },
    { label: "Assessments", icon: ClipboardCheck },
    { label: "Nonconformities", icon: AlertTriangle },
    { label: "Messages", icon: MessageSquare },
  ],
  auditor: [
    { label: "Assignments", icon: ClipboardCheck },
    { label: "Committee Reviews", icon: ShieldCheck },
    { label: "Trainings", icon: GraduationCap },
  ],
  training: [
    { label: "Training Dashboard", icon: LayoutDashboard },
    { label: "Campaigns", icon: ClipboardCheck },
    { label: "People", icon: Users },
    { label: "Create Training", icon: GraduationCap },
  ],
};

function AppFrame({
  role = "cb",
  active,
  children,
}: {
  role?: keyof typeof ROLE_NAV;
  active: string;
  children: React.ReactNode;
}) {
  const identity = role === "client" ? "Karen Whitaker" : role === "auditor" ? "Anna Kowalski" : role === "training" ? "Training Officer" : "Certification Body";
  return (
    <div className="overflow-hidden rounded-[1.2rem] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(15,35,23,0.13)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-gray-100 bg-[#fbfcfb] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff766d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f6c64e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#57c46b]" />
        <div className="mx-auto rounded border border-gray-100 bg-white px-8 py-0.5 text-[8px] text-gray-400">try.getcertiva.com</div>
      </div>
      <div className="flex items-center justify-between border-b border-amber-100 bg-amber-50 px-4 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-amber-800">
        <span>Try Certiva Demo</span><span>Demo data only</span>
      </div>
      <div className="flex min-h-[430px]">
        <aside className="hidden w-36 shrink-0 border-r border-gray-100 bg-white p-3 sm:block">
          <div className="mb-1 flex items-center gap-2 text-[11px] font-bold text-[var(--certiva-green)]">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--certiva-green)] text-white"><FileCheck2 size={12} /></span>
            Certiva
          </div>
          <p className="mb-5 ml-8 text-[8px] text-gray-400">{identity}</p>
          <div className="space-y-1">
            {ROLE_NAV[role].map(({ label, icon: Icon }) => (
              <div key={label} className={`flex items-center gap-2 rounded-md px-2 py-2 text-[9px] font-medium ${label === active ? "bg-emerald-50 text-emerald-800" : "text-gray-500"}`}>
                <Icon size={11} /> {label}
              </div>
            ))}
          </div>
        </aside>
        <div className="min-w-0 flex-1 bg-[#f7f8f7] p-4 sm:p-5">{children}</div>
      </div>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-emerald-700">{children}</p>;
}

function Pill({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "amber" | "red" | "blue" | "gray" }) {
  const tones = {
    green: "bg-emerald-100 text-emerald-800",
    amber: "bg-amber-100 text-amber-800",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    gray: "bg-gray-100 text-gray-600",
  };
  return <span className={`inline-flex rounded-full px-2 py-1 text-[8px] font-bold ${tones[tone]}`}>{children}</span>;
}

function WorkflowPreview() {
  const steps = ["Application", "Planning", "Quotation", "Agreement", "Document review", "Stage 1", "Stage 2", "Committee", "Certified"];
  return (
    <AppFrame active="Clients">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><Eyebrow>Certification record</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">Cascade Metal Fabrication Inc.</h3><p className="mt-1 text-[9px] text-gray-500">Plan #2025001 · ISO 9001:2015 · Initial</p></div>
        <Pill>Certified</Pill>
      </div>
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex items-center justify-between"><p className="text-[9px] font-bold text-gray-700">Workflow progress</p><span className="text-[8px] font-semibold text-emerald-700">All gates cleared</span></div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {steps.map((step, index) => (
            <div key={step} className="flex min-w-0 items-center gap-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-700 text-white"><Check size={10} strokeWidth={3} /></span>
              <div><p className="truncate text-[9px] font-semibold text-gray-700">{step}</p><p className="text-[7px] text-gray-400">{index + 9} Sep–Dec 2025</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[['Audit team', 'Anna Kowalski'], ['Required documents', '15 complete'], ['Certificate expiry', '14 Dec 2028']].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-gray-200 bg-white p-3"><p className="text-[7px] uppercase tracking-wide text-gray-400">{label}</p><p className="mt-1 text-[9px] font-bold text-gray-800">{value}</p></div>
        ))}
      </div>
    </AppFrame>
  );
}

const LIVE_DOCUMENTS = [
  ["Certification Quotation", "FR.220", "Signed 12 Sep"],
  ["Certification Agreement", "FR.221", "Signed 15 Sep"],
  ["Audit Plan — Stage 1", "FR.223", "Signed 25 Sep"],
  ["Opening / Closing Meeting", "FR.225", "Signed 14 Oct"],
  ["ISO 9001 Certificate", "Certificate", "Awaiting signature"],
];

function DocumentsPreview() {
  return (
    <AppFrame role="client" active="Documents">
      <div><Eyebrow>Client portal</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">Documents</h3><p className="mt-1 text-[9px] text-gray-500">Documents shared with you by Certiva</p></div>
      <div className="mt-4 space-y-2">
        {LIVE_DOCUMENTS.map(([name, form, status], index) => (
          <div key={name} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700"><FileText size={14} /></span>
            <div className="min-w-0 flex-1"><p className="truncate text-[10px] font-bold text-gray-800">{name} <span className="font-medium text-gray-400">({form})</span></p><p className="mt-0.5 text-[8px] text-gray-400">Received {11 + index * 4} September 2025</p></div>
            <Pill tone={index === LIVE_DOCUMENTS.length - 1 ? "amber" : "green"}>{status}</Pill>
            <span className="hidden rounded border border-emerald-800 px-2 py-1 text-[8px] font-bold text-emerald-800 md:block">{index === LIVE_DOCUMENTS.length - 1 ? "Open to Sign" : "Open"}</span>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}

function SigningPreview() {
  return (
    <AppFrame role="client" active="Documents">
      <div className="flex items-start justify-between gap-3"><div><Eyebrow>Document viewer</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">ISO 9001 Certificate</h3><p className="mt-1 text-[9px] text-gray-500">Cascade Metal Fabrication Inc.</p></div><Pill tone="amber">Your signature required</Pill></div>
      <div className="mt-4 grid gap-3 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-lg border border-gray-200 bg-gray-200 p-3">
          <div className="mx-auto min-h-[260px] max-w-[300px] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3"><span className="text-[10px] font-black text-emerald-900">CERTIVA</span><ShieldCheck size={19} className="text-emerald-800" /></div>
            <p className="mt-8 text-center text-[8px] font-bold uppercase tracking-[0.18em] text-emerald-800">Certificate of Registration</p>
            <p className="mt-4 text-center text-sm font-bold text-gray-900">Cascade Metal Fabrication Inc.</p>
            <p className="mt-2 text-center text-[8px] leading-4 text-gray-500">has been assessed and registered as meeting the requirements of</p>
            <p className="mt-3 text-center text-base font-black text-emerald-900">ISO 9001:2015</p>
            <div className="mt-7 border-t border-gray-200 pt-3 text-[7px] text-gray-500"><p>Certificate no. UAF-2025-001</p><p className="mt-1">Valid until 14 December 2028</p></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border border-gray-200 bg-white p-3"><p className="text-[8px] font-bold uppercase tracking-wide text-gray-400">Signing sequence</p>{[["1", "Certification Manager", true], ["2", "Client representative", false]].map(([n, label, done]) => <div key={String(n)} className="mt-3 flex items-center gap-2"><span className={`grid h-5 w-5 place-items-center rounded-full text-[8px] font-bold ${done ? "bg-emerald-700 text-white" : "bg-amber-100 text-amber-800"}`}>{done ? <Check size={10} /> : n}</span><div><p className="text-[8px] font-semibold text-gray-700">{label}</p><p className="text-[7px] text-gray-400">{done ? "Signed with timestamp" : "Ready for signature"}</p></div></div>)}</div>
          <div className="rounded-lg bg-emerald-800 p-3 text-white"><PenLine size={14} /><p className="mt-2 text-[9px] font-bold">Place signature</p><p className="mt-1 text-[7px] leading-3 text-emerald-100">Draw or use your saved signature. The final PDF is flattened with name and timestamp.</p><div className="mt-3 rounded bg-white px-3 py-2 text-center text-[8px] font-bold text-emerald-900">Review and sign</div></div>
        </div>
      </div>
    </AppFrame>
  );
}

function CommitteePreview() {
  return (
    <AppFrame role="auditor" active="Committee Reviews">
      <div><Eyebrow>Auditor portal</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">Committee Reviews</h3><p className="mt-1 text-[9px] text-gray-500">Decision work assigned to you</p></div>
      <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
        <div className="flex items-start justify-between gap-3"><div><div className="flex flex-wrap items-center gap-2"><p className="text-[11px] font-bold text-gray-900">Summit Infrastructure Group Inc.</p><Pill tone="gray">Chairperson</Pill></div><p className="mt-1 text-[8px] text-gray-400">FR.233 Review &amp; Decision · #2025003</p><div className="mt-2 flex gap-1"><Pill tone="blue">ISO 9001</Pill><Pill tone="blue">ISO 45001</Pill></div></div><Pill tone="amber">Signature required</Pill></div>
        <div className="mt-4 divide-y border-t border-gray-100">
          {[["FR.231", "Stage 1 Audit Report", "Approved By signed"], ["FR.232", "Stage 2 Audit Report", "Ready to approve"], ["FR.233", "Certification Decision", "Your signature required"]].map(([form, label, status], index) => (
            <div key={form} className="flex items-center justify-between py-3"><div className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded bg-emerald-50 text-emerald-700"><FileCheck2 size={13} /></span><div><p className="text-[9px] font-bold text-gray-800">{form} · {label}</p><p className="mt-0.5 text-[7px] text-gray-400">{index < 2 ? "Audit report" : "Committee decision record"}</p></div></div><span className={`text-[8px] font-bold ${index === 0 ? "text-emerald-700" : "text-amber-700"}`}>{status}</span></div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-[8px] text-emerald-800"><ShieldCheck size={13} /><strong>Coverage complete:</strong> committee covers every required standard and EA code.</div>
    </AppFrame>
  );
}

function NCPreview() {
  const rows = [["Meridian Medical Devices", "2 open / 1 closed", "Overdue", "under review"], ["Prairie Valley Dairy", "1 open / 2 closed", "In progress", "stage 1"], ["Cascade Metal Fabrication", "No NC", "Complete", "certified"]];
  return (
    <AppFrame active="NC Management">
      <div><Eyebrow>Cross-company control</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">NC Management</h3><p className="mt-1 text-[9px] text-gray-500">Nonconformity tracking across every audit file</p></div>
      <div className="mt-4 grid grid-cols-3 gap-2">{[["Audits with open NCs", "2", "gray"], ["Overdue NCs", "1", "red"], ["No NC declared", "4", "green"]].map(([label, value, tone]) => <div key={label} className="rounded-lg border border-gray-200 bg-white p-3"><p className="text-[7px] text-gray-500">{label}</p><p className={`mt-1 text-xl font-black ${tone === "red" ? "text-red-600" : tone === "green" ? "text-emerald-700" : "text-gray-900"}`}>{value}</p></div>)}</div>
      <div className="mt-3 overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="grid grid-cols-[1.45fr_1fr_.7fr_.7fr] bg-gray-50 px-3 py-2 text-[7px] font-bold uppercase tracking-wide text-gray-400"><span>Company</span><span>NCs</span><span>Status</span><span>Workflow</span></div>
        {rows.map(([company, count, status, workflow], index) => <div key={company} className="grid grid-cols-[1.45fr_1fr_.7fr_.7fr] items-center border-t border-gray-100 px-3 py-3"><span className="truncate text-[8px] font-bold text-gray-800">{company}</span><span className={index === 0 ? "text-[8px] font-semibold text-red-600" : "text-[8px] text-gray-600"}>{count}</span><span><Pill tone={index === 0 ? "red" : index === 2 ? "green" : "amber"}>{status}</Pill></span><span className="text-[7px] text-gray-400">{workflow}</span></div>)}
      </div>
    </AppFrame>
  );
}

export function CertivAIProductPreview() {
  const pipeline = ["Preprocessing", "Step 0", "Step A", "Step B", "Step C", "Assembly", "Done"];
  return (
    <div className="overflow-hidden rounded-[1.2rem] border border-white/15 bg-[#07130e] text-white shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
      <div className="flex h-9 items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-4"><span className="h-2.5 w-2.5 rounded-full bg-red-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" /><div className="mx-auto rounded border border-white/10 bg-black/10 px-8 py-0.5 text-[8px] text-slate-500">try.getcertiva.com/reports</div></div>
      <div className="grid min-h-[430px] sm:grid-cols-[125px_1fr]">
        <aside className="hidden border-r border-white/10 bg-black/10 p-3 sm:block"><div className="mb-6 flex items-center gap-2 text-[10px] font-bold text-emerald-200"><span className="grid h-6 w-6 place-items-center rounded bg-emerald-400/15"><Sparkles size={12} /></span>Certiv.AI</div>{["Operating layer", "Audit plans", "Reports", "Report review"].map((item) => <div key={item} className={`mb-1 rounded px-2 py-2 text-[8px] ${item === "Reports" ? "bg-cyan-300/10 text-cyan-200" : "text-slate-400"}`}>{item}</div>)}</aside>
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3"><div><p className="text-[8px] font-bold uppercase tracking-[0.14em] text-cyan-200">AI report</p><h3 className="mt-1 text-base font-semibold">Stage 2 report</h3><p className="mt-1 font-mono text-[7px] text-slate-500">JOB-CASCADE-2025-002</p></div><span className="rounded bg-emerald-400/15 px-2 py-1 text-[8px] font-bold text-emerald-200">Report ready</span></div>
          <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.045] p-4">
            <div className="flex items-start justify-between">
              {pipeline.map((step, index) => <div key={step} className="flex flex-1 flex-col items-center"><div className="flex w-full items-center"><div className={`h-px flex-1 ${index === 0 ? "bg-transparent" : "bg-emerald-500/50"}`} /><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white"><Check size={11} strokeWidth={3} /></span><div className={`h-px flex-1 ${index === pipeline.length - 1 ? "bg-transparent" : "bg-emerald-500/50"}`} /></div><span className="mt-2 hidden text-center text-[6px] text-slate-400 md:block">{step}</span></div>)}
            </div>
            <p className="mt-4 text-center text-[9px] font-semibold text-emerald-200">Report ready</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">{[["Standards", "ISO 9001"], ["Report context", "Stage 2"], ["Accreditation body", "UAF"], ["Company", "Cascade Metal Fabrication"], ["Evidence package", "23 documents"], ["Duration", "8m 42s"]].map(([label, value]) => <div key={label} className="rounded-lg border border-white/10 bg-white/[0.035] p-3"><p className="text-[6px] font-bold uppercase tracking-wide text-slate-500">{label}</p><p className="mt-1 truncate text-[8px] font-semibold text-slate-200">{value}</p></div>)}</div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-emerald-300/20 bg-emerald-400/[0.06] p-3"><div className="flex items-center gap-3"><CheckCircle2 size={20} className="text-emerald-300" /><div><p className="text-[9px] font-bold">Report ready</p><p className="mt-0.5 text-[7px] text-slate-400">Generated in your DOCX template and ready for auditor review.</p></div></div><span className="flex items-center gap-1 rounded bg-emerald-300 px-3 py-2 text-[8px] font-black text-emerald-950"><Download size={11} /> Download report</span></div>
        </div>
      </div>
    </div>
  );
}

function ClientPreview() {
  return (
    <AppFrame role="client" active="Overview">
      <div><Eyebrow>Client portal</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">Cascade Metal Fabrication Inc.</h3><p className="mt-1 text-[9px] text-gray-500">ISO 9001:2015 · UAF</p></div>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3"><div className="flex items-start gap-2"><AlertTriangle size={14} className="mt-0.5 text-amber-700" /><div><p className="text-[8px] font-bold uppercase text-amber-700">Action required</p><p className="mt-1 text-[10px] font-bold text-amber-900">You have 1 document to sign</p><p className="mt-1 text-[8px] text-amber-700">Open Documents to review and sign the certificate.</p></div></div></div>
      <p className="mt-4 text-[8px] font-bold uppercase tracking-wide text-gray-400">Setup checklist</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">{[["Organisation employees", "4 added, all signatures on file", true], ["Documents", "1 document needs your signature", false]].map(([label, value, done]) => <div key={String(label)} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3"><span className={`grid h-6 w-6 place-items-center rounded-full text-[9px] font-black ${done ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{done ? <Check size={12} /> : "!"}</span><div><p className="text-[9px] font-bold text-gray-800">{label}</p><p className="mt-0.5 text-[7px] text-gray-400">{value}</p></div></div>)}</div>
      <div className="mt-3 rounded-lg border border-gray-200 bg-white p-3"><div className="flex items-center justify-between"><p className="text-[9px] font-bold text-gray-700">Certification Progress</p><Pill>Certified</Pill></div><div className="mt-3 flex justify-between">{["Application", "Quotation", "Stage 1", "Stage 2", "Committee", "Certificate"].map((step) => <div key={step} className="flex flex-col items-center"><span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-700 text-white"><Check size={10} /></span><span className="mt-1 hidden text-[6px] text-gray-400 md:block">{step}</span></div>)}</div></div>
    </AppFrame>
  );
}

function AuditorPreview() {
  return (
    <AppFrame role="auditor" active="Assignments">
      <div><Eyebrow>Auditor portal</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">My Audit Assignments</h3><p className="mt-1 text-[9px] text-gray-500">2 audits assigned</p></div>
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><PenLine size={13} className="text-amber-700" /><p className="text-[9px] font-bold text-amber-900">2 documents need your signature</p></div><span className="rounded bg-amber-700 px-2 py-1 text-[7px] font-bold text-white">Review</span></div></div>
      <div className="mt-3 space-y-2">{[["Cascade Metal Fabrication Inc.", "Stage 2 · Lead", "25 Nov 2025", "ISO 9001"], ["Aster Engineering — Launch Demo", "Recertification", "2 Nov 2026", "ISO 9001"]].map(([company, type, date, standard], index) => <div key={company} className={`rounded-lg border bg-white p-4 ${index === 0 ? "border-emerald-200" : "border-gray-200"}`}><div className="flex items-start justify-between gap-3"><div><div className="flex flex-wrap items-center gap-2"><p className="text-[10px] font-bold text-gray-900">{company}</p><Pill tone="blue">{standard}</Pill></div><p className="mt-2 text-[8px] italic text-gray-400">Design, fabrication and welding of structural steel products.</p></div><div className="shrink-0 text-right"><p className="text-[9px] font-bold text-gray-800">{date}</p><p className="mt-1 text-[7px] text-gray-400">{type}</p></div></div>{index === 0 && <div className="mt-3 flex flex-wrap gap-1.5 border-t border-gray-100 pt-3">{["Documents", "NC management", "Declarations", "Reports"].map((item) => <span key={item} className="rounded border border-gray-200 px-2 py-1 text-[7px] font-semibold text-gray-500">{item}</span>)}</div>}</div>)}</div>
    </AppFrame>
  );
}

function TrainingPreview() {
  const trainings = [["ISO 9001:2015 Auditor Refresher", "Passed", "100%", "green"], ["ISO 14001:2026 Transition Module", "Passed", "80%", "green"], ["Personal Data Protection Awareness", "Passed", "75%", "green"], ["ISO 45001:2018 Auditor Refresher", "Retake", "50%", "red"]];
  return (
    <AppFrame role="training" active="Training Dashboard">
      <div className="flex items-start justify-between gap-3"><div><Eyebrow>Training Academy</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">Training Dashboard</h3><p className="mt-1 text-[9px] text-gray-500">260 questions · 239 assignments · 13 campaigns</p></div><span className="rounded bg-emerald-800 px-3 py-2 text-[8px] font-bold text-white">+ Create New Training</span></div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">{trainings.map(([title, result, score, tone]) => <div key={title} className="rounded-lg border border-gray-200 bg-white p-3"><div className="flex items-start justify-between gap-2"><span className="grid h-7 w-7 place-items-center rounded bg-emerald-50 text-emerald-700"><GraduationCap size={13} /></span><Pill tone={tone === "red" ? "red" : "green"}>{result}</Pill></div><p className="mt-3 min-h-8 text-[9px] font-bold leading-4 text-gray-800">{title}</p><div className="mt-3 flex justify-between border-t border-gray-100 pt-2"><div><p className="text-[6px] uppercase text-gray-400">Score</p><p className="mt-0.5 text-[10px] font-bold">{score}</p></div><div className="text-right"><p className="text-[6px] uppercase text-gray-400">Attempts</p><p className="mt-0.5 text-[9px] font-bold">{tone === "red" ? "2 of 3" : "1 of 3"}</p></div></div></div>)}</div>
    </AppFrame>
  );
}

function CompliancePreview() {
  const events = [["Certificate issued", "Certification Manager", "15 Dec 2025 · 10:42"], ["FR.233 signed", "Committee Chairperson", "3 Dec 2025 · 11:08"], ["Committee review opened", "Planner", "2 Dec 2025 · 09:15"], ["Stage 2 report approved", "Appointed Reviewer", "1 Dec 2025 · 15:34"], ["Stage 2 completed", "Anna Kowalski", "25 Nov 2025 · 17:20"]];
  return (
    <AppFrame active="Clients">
      <div className="flex items-start justify-between gap-3"><div><Eyebrow>Immutable record</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">Audit trail</h3><p className="mt-1 text-[9px] text-gray-500">Cascade Metal Fabrication Inc. · Plan #2025001</p></div><span className="flex items-center gap-1 rounded border border-gray-200 bg-white px-2 py-1 text-[8px] font-bold text-gray-600"><Download size={10} /> Export</span></div>
      <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {events.map(([event, actor, time], index) => <div key={event} className="flex gap-3 border-b border-gray-100 p-3 last:border-0"><div className="flex flex-col items-center"><span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700"><Check size={11} /></span>{index < events.length - 1 && <span className="mt-1 h-full w-px bg-emerald-100" />}</div><div className="flex min-w-0 flex-1 items-start justify-between gap-3"><div><p className="text-[9px] font-bold text-gray-800">{event}</p><p className="mt-1 text-[7px] text-gray-400">by {actor}</p></div><p className="shrink-0 text-[7px] text-gray-400">{time}</p></div></div>)}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-[8px] text-emerald-800"><ShieldCheck size={13} /> Every transition, release, signature, and decision is timestamped against the certification record.</div>
    </AppFrame>
  );
}

function CRMPreview() {
  const rows = [["Cascade Metal Fabrication", "ISO 9001", "Active", "450 days"], ["Marmara Steelworks", "ISO 45001", "Active", "82 days"], ["Helios Energy Partners", "ISO 50001", "Expiring soon", "29 days"]];
  return (
    <AppFrame active="Dashboard">
      <div className="flex items-start justify-between gap-3"><div><Eyebrow>CRM / Finance</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">Certification Cockpit</h3><p className="mt-1 text-[9px] text-gray-500">Portfolio status, surveillance radar, and commercial follow-up.</p></div><span className="flex items-center gap-1 rounded bg-emerald-800 px-2 py-1.5 text-[8px] font-bold text-white"><Download size={10} /> Export Excel</span></div>
      <div className="mt-4 grid grid-cols-4 gap-2">{[["Active", "4"], ["Expiring 90d", "2"], ["Surveillance 30d", "1"], ["Outstanding", "$18K"]].map(([label, value], i) => <div key={label} className="rounded-lg border border-gray-200 bg-white p-2.5"><p className="text-[6px] text-gray-400">{label}</p><p className={`mt-1 text-sm font-black ${i === 2 ? "text-orange-600" : "text-emerald-800"}`}>{value}</p></div>)}</div>
      <div className="mt-3 flex gap-1.5 overflow-hidden">{["All", "Surveillance due 30d", "Overdue", "Recertification"].map((item, i) => <span key={item} className={`whitespace-nowrap rounded border px-2 py-1 text-[7px] font-semibold ${i === 0 ? "border-emerald-800 bg-emerald-800 text-white" : "border-gray-200 bg-white text-gray-500"}`}>{item}</span>)}</div>
      <div className="mt-3 overflow-hidden rounded-lg border border-gray-200 bg-white"><div className="grid grid-cols-[1.5fr_.7fr_.7fr_.7fr] bg-gray-50 px-3 py-2 text-[7px] font-bold uppercase text-gray-400"><span>Client</span><span>Standard</span><span>Status</span><span>Next surveillance</span></div>{rows.map(([client, standard, status, due], i) => <div key={client} className="grid grid-cols-[1.5fr_.7fr_.7fr_.7fr] items-center border-t border-gray-100 px-3 py-3"><span className="truncate text-[8px] font-bold text-gray-800">{client}</span><span className="text-[8px] text-gray-500">{standard}</span><span><Pill tone={i === 2 ? "amber" : "green"}>{status}</Pill></span><span className={`text-[8px] font-semibold ${i === 2 ? "text-orange-600" : "text-gray-500"}`}>{due}</span></div>)}</div>
    </AppFrame>
  );
}

function ApplicationsPreview() {
  const rows = [["Continental Catering Services Ltd.", "ISO 22000", "Pending Review", "1 document"], ["Beacon Compliance Advisors LLC", "ISO 37001", "Quotation Sent", "3 documents"], ["Vertex Software Solutions Inc.", "ISO 27001", "Audit Scheduled", "5 documents"]];
  return (
    <AppFrame active="Applications">
      <div className="flex items-start justify-between gap-3"><div><Eyebrow>Intake queue</Eyebrow><h3 className="mt-1 text-base font-bold text-gray-950">Client Applications</h3><p className="mt-1 text-[9px] text-gray-500">Applications submitted via the client portal awaiting review</p></div><Pill tone="amber">3 pending</Pill></div>
      <div className="mt-4 space-y-2">{rows.map(([company, standard, status, docs], index) => <div key={company} className="rounded-lg border border-gray-200 bg-white p-4"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><p className="truncate text-[10px] font-bold text-gray-900">{company}</p><Pill tone={index === 0 ? "amber" : index === 1 ? "blue" : "green"}>{status}</Pill></div><p className="mt-1.5 text-[8px] text-gray-400">{standard} · Initial certification · {docs}</p><p className="mt-1 truncate text-[7px] italic text-gray-400">Application includes organisation details, scope, personnel breakdown, and standard-specific inputs.</p></div><span className="shrink-0 rounded bg-emerald-800 px-2 py-1.5 text-[7px] font-bold text-white">Open &amp; Review</span></div></div>)}</div>
    </AppFrame>
  );
}

export default function FeatureProductPreview({ view }: { view: FeaturePreviewId }) {
  if (view === "workflow") return <WorkflowPreview />;
  if (view === "documents") return <DocumentsPreview />;
  if (view === "signing") return <SigningPreview />;
  if (view === "committee") return <CommitteePreview />;
  if (view === "nc") return <NCPreview />;
  if (view === "ai") return <CertivAIProductPreview />;
  if (view === "client") return <ClientPreview />;
  if (view === "auditor") return <AuditorPreview />;
  if (view === "training") return <TrainingPreview />;
  if (view === "compliance") return <CompliancePreview />;
  if (view === "crm") return <CRMPreview />;
  return <ApplicationsPreview />;
}
