import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CertivAI | AI for ISO Certification Operations",
  description: "Draft audit reports, review evidence, calculate audit time, and validate scope coverage with reviewable AI built for certification bodies.",
  alternates: { canonical: "/ai" },
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return children;
}
