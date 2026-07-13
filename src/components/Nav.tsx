"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "AI", href: "/ai" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(6,13,8,0.85)] backdrop-blur-[20px] border-b border-[rgba(26,46,30,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <img src="/logo-icon.svg" alt="" className="h-8 w-8" />
          <img src="/logo-wordmark-white.svg" alt="Certiva" className="h-6" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full border border-[var(--certiva-glow)] px-5 py-2 text-sm font-semibold text-[var(--certiva-glow)] transition hover:bg-[var(--certiva-glow)]/10 hover:shadow-[0_0_20px_rgba(82,194,122,0.15)] md:block"
        >
          Book a Demo
        </Link>

        {/* Mobile hamburger */}
        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[var(--bg-dark)] px-6 pt-8 md:hidden">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-[var(--certiva-green)] px-6 py-3.5 text-center text-sm font-semibold text-white"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
