import Link from "next/link";

const PLATFORM_LINKS = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "AI", href: "/ai" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const STANDARDS = [
  "ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001",
  "ISO 22000", "ISO 13485", "ISO 37001", "ISO 50001",
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--bg-border)] bg-[var(--bg-dark)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo-wordmark-white.svg" alt="Certiva" className="h-8" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              AI-powered ISO certification management. Built for accredited certification bodies.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400">Platform</h4>
            <ul className="mt-4 space-y-2.5">
              {PLATFORM_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-300 transition hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400">Standards</h4>
            <ul className="mt-4 space-y-2.5">
              {STANDARDS.map((s) => (
                <li key={s} className="text-sm text-gray-300">{s}</li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-gray-400">Legal</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="#" className="text-sm text-gray-300 transition hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 transition hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glow-line mt-12" />
        <p className="mt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Certiva · Built for ISO Certification Bodies · getcertiva.com
        </p>
      </div>
    </footer>
  );
}
