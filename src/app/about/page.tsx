"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import GradientOrbs from "@/components/GradientOrbs";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const VALUES = [
  { title: "Precision over convenience", desc: "Certification decisions have real consequences for the organizations they cover. Certiva enforces correct processes." },
  { title: "Standards are not interchangeable", desc: "ISO 27001 and ISO 9001 have different EA codes, different scope systems, different audit time rules. We handle each correctly." },
  { title: "The audit trail is the product", desc: "Every signature, decision, and document version is logged. Your accreditation body will find everything, in the right order." },
  { title: "AI as infrastructure, not theater", desc: "Our AI features solve problems auditors and planners actually have — not impressive demos." },
];

const WHO_FOR = [
  { title: "Small CBs", desc: "1–3 standards, boutique operation. Need structure without overhead." },
  { title: "Multi-standard CBs", desc: "4–8 standards, multiple accreditation bodies. Need a system that handles scope complexity." },
  { title: "CBs seeking accreditation", desc: "Building the paper trail from scratch. Need to get it right from day one." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--bg-dark)] pt-32 pb-20">
        <GradientOrbs />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] text-white">
            Built inside a certification body.{" "}<span className="gradient-text">For every certification body.</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--text-muted)]">
            Certiva wasn&apos;t designed in a startup studio looking at the certification market from the outside. It was built by people who were frustrated with running one.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="prose prose-lg max-w-none">
            <motion.p variants={fadeUp} className="text-[var(--text-mid)] leading-relaxed">
              Running an accredited certification body means managing dozens of simultaneous audit lifecycles. Most available software was either generic project management adapted for auditing, or legacy systems that predate digital signatures and IAF MD 5. The result was spreadsheets, email threads, and manual PDF assembly — every one of which is a potential gap in the audit trail when an accreditation body comes for a witness audit.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-[var(--text-mid)] leading-relaxed">
              Certiva was built to solve this from the inside. Every document template is the actual FR form. Every workflow step reflects the actual IAF requirement. Every signing chain matches what accreditation bodies expect to see.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--certiva-mist)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-extrabold text-[var(--text-dark)]">Our values</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-2">
            {VALUES.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-bold text-[var(--certiva-green)]">{v.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-mid)]">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-2xl font-extrabold text-[var(--text-dark)]">Who it&apos;s for</h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-3">
            {WHO_FOR.map((w) => (
              <motion.div key={w.title} variants={fadeUp} className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <h3 className="text-lg font-bold text-[var(--text-dark)]">{w.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-mid)]">{w.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="rounded-full bg-[var(--certiva-green)] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--certiva-mid)]">
              Book a Demo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
