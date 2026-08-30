import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Talking Script",
  robots: {
    index: false,
    follow: false,
  },
};

const paragraphs = [
  "We run a certification body. And for years, we tried every piece of software out there to run it — and not one of them fit. So we built our own.",
  "I'm Batuhan. I'm a decision-maker inside a certification body — and an engineer. What we built is called Certiva. Let me tell you why it exists.",
  "Running a certification body means juggling accreditations, standards, auditors, clients in a dozen countries — and for twenty years we held it together with spreadsheets and email.",
  "So we went looking for software.",
  "One was just a contact list with a nicer logo. Another cost a fortune, then capped how many of my own auditors I could add.",
  "And none of them understood accreditation — not the audit-day math, not EA codes, not why a committee member can't sit on the audit team.",
  "And the training? A separate tool. Thousands a year, on top.",
  "Five tools, each doing half a job.",
  "So at some point I stopped complaining and asked a simple question — why don't we just build it ourselves?",
  "Come on. I'll show you.",
  "First, though — I didn't just wake up one day and code this.",
  "I spent years inside a real, accredited certification body, watching exactly how the work actually happens — and I'm an engineer.",
  "So I could think like both at once.",
  "That's the whole secret.",
  "Then we built Certiva.",
  "This is Certiva.",
  "It runs the entire certification body — from the second a client applies, to the certificate on their wall.",
  "Watch.",
  "A company applies online — no phone calls, no re-typing.",
  "It lands straight in the planner's queue.",
  "Certiva builds the quote and the agreement automatically.",
  "It calculates the audit days for you — by IAF MD5, to the rule.",
  "It picks auditors who actually cover the scope — the right EA codes — and it won't let you double-book them.",
  "It builds the committee, and blocks anyone who was on the audit team from judging it — impartiality, enforced.",
  "Every form — the audit plan, the reports, the decision — generated into your own templates, not some generic sheet.",
  "The AI writes the audit report.",
  "Then a second AI reviews it against your accreditation body's rules and flags the problems before they ever see it.",
  "Nonconformities get raised, the client uploads corrective actions, and it's tracked until it's closed.",
  "Everyone signs online, in the right order — auditor, reviewer, committee, manager.",
  "Your auditors' training and exams are built right in — no separate system.",
  "And every certificate, every renewal, every surveillance date lives on one screen — so you never miss one again.",
  "Application to certificate.",
  "One place.",
  "And this isn't a demo.",
  "It runs a real, accredited certification body every single day — ours — and it's been through the audits.",
  "It works.",
  "So if you run a certification body, and you're tired of software that was never built for you — come and see what it's like when it finally is.",
  "Let's talk.",
];

export default function TalkingScriptPage() {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white text-gray-950">
      <article className="mx-auto max-w-5xl px-6 py-12 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="mb-10 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.42] font-semibold tracking-[-0.02em] last:mb-0 sm:mb-14"
          >
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  );
}
