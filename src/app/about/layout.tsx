import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Certiva | Built Inside a Certification Body",
  description: "Learn why Certiva was built as a controlled operating system for certification bodies—not another generic CRM or document tracker.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
