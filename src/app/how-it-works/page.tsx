"use client";
import { motion } from "framer-motion";
import GradientOrbs from "@/components/GradientOrbs";
import SectionBadge from "@/components/SectionBadge";
import { FOURTEEN_PHASES } from "@/lib/constants";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const DOT_COLORS: Record<string, string> = {
  green: "bg-[var(--certiva-green)]",
  teal: "bg-teal-600",
  gold: "bg-amber-500",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pt-32 pb-16">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <SectionBadge dark>Workflow</SectionBadge>
          <h1 className="mt-6 text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] text-white">
            Every step enforced. Every gate checked. Nothing left for your accreditation body to find.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            The full certification lifecycle runs as a state machine with real gates. Phase transitions are role-checked and logged. Nobody can skip a step — and every phase has a complete, ordered paper trail.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {FOURTEEN_PHASES.map((phase, i) => (
              <motion.div key={phase.phase} variants={fadeUp} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${DOT_COLORS[phase.color]}`}>
                    {i + 1}
                  </div>
                  {i < FOURTEEN_PHASES.length - 1 && <div className="mt-1 h-full min-h-[40px] w-px bg-gray-200" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-base font-bold text-gray-900">{phase.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{phase.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {phase.docs !== "—" && (
                      <span className="rounded-full bg-[var(--certiva-pale)] px-2.5 py-0.5 text-[0.7rem] font-semibold text-[var(--certiva-green)]">
                        {phase.docs}
                      </span>
                    )}
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[0.7rem] font-medium text-gray-500">
                      {phase.roles}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-8 text-center text-sm text-gray-600">
            Surveillance and recertification follow adapted flows with their own gates. Every cycle adds to the same continuous audit trail — so when your accreditation body asks for proof of any decision, it's already there.
          </p>
          <div className="mt-8 text-center">
            <Link href="/contact" className="rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
              Book a Demo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
