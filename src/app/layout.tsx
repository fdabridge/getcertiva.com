import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LaunchPopup from "@/components/LaunchPopup";
import "./globals.css";

const manrope = localFont({
  src: "../../brand-system/02-color-and-type/fonts/Manrope-wght.ttf",
  weight: "200 800",
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Certiva — Certification Body Operations, Connected",
  description: "Software for certification bodies to manage applications, audits, documents, reviews and decisions in one controlled workflow.",
  metadataBase: new URL("https://www.getcertiva.com"),
  icons: {
    icon: "/logo-icon.svg",
    shortcut: "/logo-icon.svg",
    apple: "/logo-icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <LaunchPopup />
      </body>
    </html>
  );
}
