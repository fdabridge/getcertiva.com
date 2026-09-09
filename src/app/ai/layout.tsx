import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/ai" },
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return children;
}
