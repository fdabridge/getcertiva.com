"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LAUNCH_ARTICLE = "/blog/certiva-live-28-september-2026-waitlist";
const STORAGE_KEY = "certiva-launch-popup-dismissed";

function wasDismissed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function rememberDismissal() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "true");
  } catch {
    // Storage can be unavailable in privacy-restricted browsers.
  }
}

export default function LaunchPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (pathname === LAUNCH_ARTICLE || wasDismissed()) {
      return;
    }

    const timer = window.setTimeout(() => setOpen(true), 800);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  function close() {
    rememberDismissal();
    setOpen(false);
  }

  if (!open) return null;

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="launch-popup-title"
      className="fixed bottom-4 left-4 right-4 z-[70] ml-auto max-w-[23rem] overflow-hidden rounded-2xl border border-emerald-900/15 bg-white shadow-[0_22px_70px_rgba(6,13,8,0.28)] sm:bottom-6 sm:left-auto sm:right-6"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close launch announcement"
        className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-black/25 text-white backdrop-blur transition hover:bg-black/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X size={16} />
      </button>

      <Link href={LAUNCH_ARTICLE} onClick={close} className="group block">
        <div className="relative aspect-[5/3] overflow-hidden bg-[var(--bg-dark)]">
          <Image
            src="/certiva-launch-28-september.svg"
            alt="Certiva goes live on 28 September 2026"
            fill
            loading="eager"
            sizes="(max-width: 640px) calc(100vw - 2rem), 368px"
            className="object-cover transition duration-500 group-hover:scale-[1.015]"
          />
        </div>

        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--certiva-light)]">
              First cohort access
            </p>
            <h2 id="launch-popup-title" className="mt-1 text-base font-bold tracking-[-0.01em] text-gray-950">
              Join the Certiva waitlist
            </h2>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--certiva-green)] text-white transition group-hover:bg-[var(--certiva-mid)]">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </Link>
    </aside>
  );
}
