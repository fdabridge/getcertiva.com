"use client";

import { useState, type ElementType } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ClipboardCheck,
  FileCheck2,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenLine,
  ShieldCheck,
  Users,
} from "lucide-react";

type ViewKey = "progress" | "documents" | "auditor" | "training";

const VIEWS: { key: ViewKey; label: string; icon: ElementType; eyebrow: string; title: string; copy: string }[] = [
  {
    key: "progress",
    label: "Certification",
    icon: LayoutDashboard,
    eyebrow: "One live record",
    title: "Every stage visible. Every gate accounted for.",
    copy: "Follow a certification from application to certificate with the full evidence trail attached to the same record.",
  },
  {
    key: "documents",
    label: "Documents",
    icon: FileText,
    eyebrow: "Controlled documents",
    title: "The signed file is already where it belongs.",
    copy: "Quotations, agreements, audit plans, meeting forms, reports, and certificates stay connected to the certification lifecycle.",
  },
  {
    key: "auditor",
    label: "Auditor work",
    icon: ClipboardCheck,
    eyebrow: "Role-specific workspace",
    title: "Auditors see the assignment—not your entire operation.",
    copy: "Each auditor gets the scope, dates, documents, declarations, findings, and reports required for their assigned work.",
  },
  {
    key: "training",
    label: "Training",
    icon: GraduationCap,
    eyebrow: "Competence records",
    title: "Training history lives beside auditor qualifications.",
    copy: "Assign courses, retain attempts, track validity dates, and see exactly which competence records are current or due.",
  },
];

const PROGRESS_STEPS = [
  ["Application received", "9 Sep 2025"],
  ["Planning", "10 Sep 2025"],
  ["Quotation signed", "12 Sep 2025"],
  ["Agreement confirmed", "15 Sep 2025"],
  ["Document review", "15 Sep 2025"],
  ["Stage 1 audit", "14 Oct 2025"],
  ["Stage 2 audit", "25 Nov 2025"],
  ["Committee review", "2 Dec 2025"],
  ["Certificate issued", "15 Dec 2025"],
];

const DOCUMENTS = [
  ["Certification Quotation", "FR.220", "Signed 12 Sep 2025"],
  ["Certification Agreement", "FR.221", "Signed 15 Sep 2025"],
  ["Audit Plan — Stage 1", "FR.223", "Signed 25 Sep 2025"],
  ["Opening / Closing Meeting", "FR.225", "8 signatures"],
  ["Stage 1 Audit Report", "FR.231", "Approved"],
  ["Stage 2 Audit Report", "FR.232", "Approved"],
];

const TRAININGS = [
  ["ISO 9001:2015 Auditor Refresher", "Passed", "100%", "10 May 2028"],
  ["ISO 14001:2026 Transition Module", "Passed", "80%", "27 Aug 2028"],
  ["Personal Data Protection Awareness", "Passed", "75%", "30 Aug 2027"],
  ["ISO 45001:2018 Auditor Refresher", "Retake", "50%", "Action needed"],
];

function DemoNotice() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 bg-amber-50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-amber-800 sm:px-5">
      <span>Try Certiva demo</span>
      <span className="font-medium tracking-normal text-amber-700">Synthetic company data</span>
    </div>
  );
}

function AppSidebar({ active = "Overview" }: { active?: string }) {
  const items = ["Overview", "Documents", "Assessments", "Nonconformities", "Messages"];
  return (
    <aside className="hidden w-44 shrink-0 border-r border-gray-100 bg-white p-4 lg:block">
      <div className="mb-6 flex items-center gap-2 text-sm font-bold text-[var(--certiva-green)]">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--certiva-green)] text-white">
          <FileCheck2 size={15} />
        </span>
        Certiva
      </div>
      <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.14em] text-gray-400">Client portal</p>
      <div className="space-y-1">
        {items.map((item) => (
          <div
            key={item}
            className={`rounded-lg px-3 py-2 text-[11px] font-medium ${
              active === item ? "bg-emerald-50 text-[var(--certiva-green)]" : "text-gray-500"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </aside>
  );
}

function WindowShell({ children, active }: { children: React.ReactNode; active?: string }) {
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-gray-200 bg-white shadow-[0_28px_80px_rgba(15,35,23,0.14)]">
      <div className="flex h-10 items-center gap-1.5 border-b border-gray-100 bg-[#fbfcfb] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff766d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f6c64e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#57c46b]" />
        <div className="mx-auto rounded-md border border-gray-100 bg-white px-8 py-1 text-[9px] text-gray-400">
          try.getcertiva.com
        </div>
      </div>
      <DemoNotice />
      <div className="flex min-h-[430px]">
        <AppSidebar active={active} />
        <div className="min-w-0 flex-1 bg-[#f7f8f7] p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
}

function ProgressView() {
  return (
    <WindowShell active="Overview">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Certification record</p>
          <h3 className="mt-1 text-xl font-bold text-gray-950">Cascade Metal Fabrication Inc.</h3>
          <p className="mt-1 text-xs text-gray-500">ISO 9001:2015 · UAF</p>
        </div>
        <div className="rounded-full bg-emerald-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
          Certificate active
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_190px]">
        <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">Certification progress</p>
            <span className="text-[10px] font-semibold text-emerald-700">9 of 9 complete</span>
          </div>
          <div className="mt-4 grid gap-x-4 gap-y-2 sm:grid-cols-2">
            {PROGRESS_STEPS.map(([label, date], index) => (
              <div key={label} className={`flex items-center gap-2.5 ${index === PROGRESS_STEPS.length - 1 ? "sm:col-span-2" : ""}`}>
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--certiva-green)] text-white">
                  <Check size={11} strokeWidth={3} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-semibold text-gray-800">{label}</p>
                  <p className="text-[9px] text-gray-400">{date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl bg-[var(--certiva-green)] p-4 text-white">
            <ShieldCheck size={18} className="text-emerald-200" />
            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-200">Certificate expires</p>
            <p className="mt-1 text-sm font-bold">14 Dec 2028</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400">Lead auditor</p>
            <p className="mt-1.5 text-sm font-bold text-gray-900">Anna Kowalski</p>
            <p className="mt-1 text-[10px] text-gray-500">Stage 1 &amp; Stage 2</p>
          </div>
        </div>
      </div>
    </WindowShell>
  );
}

function DocumentsView() {
  return (
    <WindowShell active="Documents">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Controlled record</p>
          <h3 className="mt-1 text-xl font-bold text-gray-950">Documents</h3>
          <p className="mt-1 text-xs text-gray-500">Cascade Metal Fabrication Inc.</p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-[10px] font-semibold text-gray-600">
          <PenLine size={13} /> 8 verified signatures
        </div>
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="grid grid-cols-[1fr_62px_90px] border-b border-gray-100 bg-gray-50 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-400 sm:grid-cols-[1fr_80px_130px]">
          <span>Document</span><span>Form</span><span>Status</span>
        </div>
        {DOCUMENTS.map(([name, form, status]) => (
          <div key={`${name}-${form}`} className="grid grid-cols-[1fr_62px_90px] items-center border-b border-gray-100 px-4 py-3 last:border-0 sm:grid-cols-[1fr_80px_130px]">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700"><FileText size={13} /></span>
              <span className="truncate text-[11px] font-semibold text-gray-800">{name}</span>
            </div>
            <span className="text-[10px] text-gray-400">{form}</span>
            <span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-700">
              <Check size={10} strokeWidth={3} /> {status}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-gray-500">
        <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-emerald-700" /> Flattened signed PDFs</span>
        <span className="flex items-center gap-1.5"><Users size={12} className="text-emerald-700" /> Role-gated sequence</span>
        <span className="flex items-center gap-1.5"><CalendarDays size={12} className="text-emerald-700" /> Names and timestamps retained</span>
      </div>
    </WindowShell>
  );
}

function AuditorView() {
  return (
    <WindowShell>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Auditor portal</p>
          <h3 className="mt-1 text-xl font-bold text-gray-950">My audit assignments</h3>
          <p className="mt-1 text-xs text-gray-500">Anna Kowalski · Lead Auditor</p>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1.5 text-[10px] font-bold text-amber-800">3 training actions</span>
      </div>
      <div className="mt-5 space-y-3">
        {[
          ["Aster Engineering — Launch Demo", "Recertification", "2 Nov 2026", "Manufacture of precision metal components."],
          ["Cascade Metal Fabrication Inc.", "Stage 1 · Lead", "14 Oct 2025", "Design, fabrication and welding of structural steel and sheet metal products."],
        ].map(([company, type, date, scope], index) => (
          <div key={company} className={`rounded-xl border bg-white p-4 sm:p-5 ${index === 1 ? "border-emerald-200 shadow-[0_8px_30px_rgba(26,71,49,0.06)]" : "border-gray-200"}`}>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-bold text-gray-900">{company}</p>
                  <span className="rounded bg-blue-50 px-2 py-0.5 text-[9px] font-semibold text-blue-700">ISO 9001</span>
                </div>
                <p className="mt-2 text-[11px] italic text-gray-500">“{scope}”</p>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <p className="text-xs font-bold text-gray-800">{date}</p>
                <p className="mt-1 text-[10px] text-gray-400">{type}</p>
              </div>
            </div>
            {index === 1 && (
              <div className="mt-4 flex flex-wrap gap-2 border-t border-gray-100 pt-3">
                {["Documents", "NC management", "Declarations", "Reports"].map((item) => (
                  <span key={item} className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-[9px] font-semibold text-gray-600">{item}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </WindowShell>
  );
}

function TrainingView() {
  return (
    <WindowShell>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700">Training academy</p>
          <h3 className="mt-1 text-xl font-bold text-gray-950">My trainings</h3>
          <p className="mt-1 text-xs text-gray-500">4 passed · 3 pending · 1 retake</p>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1.5 text-[10px] font-bold text-emerald-800">8 assignments</span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {TRAININGS.map(([title, result, score, valid]) => {
          const needsAction = result === "Retake";
          return (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <GraduationCap size={17} className="mt-0.5 shrink-0 text-[var(--certiva-green)]" />
                <span className={`rounded-full px-2 py-1 text-[9px] font-bold ${needsAction ? "bg-red-50 text-red-700" : "bg-emerald-50 text-emerald-700"}`}>{result}</span>
              </div>
              <p className="mt-3 min-h-10 text-[11px] font-bold leading-4 text-gray-800">{title}</p>
              <div className="mt-3 flex items-end justify-between border-t border-gray-100 pt-3">
                <div><p className="text-[9px] uppercase tracking-wide text-gray-400">Score</p><p className="mt-0.5 text-sm font-bold text-gray-900">{score}</p></div>
                <div className="text-right"><p className="text-[9px] uppercase tracking-wide text-gray-400">Valid until</p><p className="mt-0.5 text-[10px] font-semibold text-gray-700">{valid}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </WindowShell>
  );
}

function ActiveView({ view }: { view: ViewKey }) {
  if (view === "documents") return <DocumentsView />;
  if (view === "auditor") return <AuditorView />;
  if (view === "training") return <TrainingView />;
  return <ProgressView />;
}

export function HeroProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[660px]">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-emerald-400/10 blur-3xl" />
      <div className="relative rotate-[0.4deg]">
        <ProgressView />
      </div>
      <div className="absolute -bottom-5 left-4 flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[10px] font-bold text-emerald-900 shadow-lg sm:left-8">
        <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" /></span>
        Verified in the live product demo
      </div>
    </div>
  );
}

export default function ProductShowcase() {
  const [active, setActive] = useState<ViewKey>("progress");
  const selected = VIEWS.find((view) => view.key === active) ?? VIEWS[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Product views">
        {VIEWS.map((view) => {
          const Icon = view.icon;
          const isActive = view.key === active;
          return (
            <button
              key={view.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(view.key)}
              className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition ${
                isActive
                  ? "bg-[var(--certiva-green)] text-white shadow-[0_10px_30px_rgba(26,71,49,0.18)]"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-emerald-200 hover:text-emerald-800"
              }`}
            >
              <Icon size={14} /> {view.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_1.7fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{selected.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.02em] text-gray-950 sm:text-3xl">{selected.title}</h3>
          <p className="mt-4 text-sm leading-7 text-gray-600">{selected.copy}</p>
          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[var(--certiva-green)]">
            Built from the working demo <ArrowUpRight size={14} />
          </div>
        </div>
        <ActiveView view={active} />
      </div>
    </div>
  );
}
