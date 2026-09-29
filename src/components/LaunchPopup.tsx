"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Volume2, VolumeX, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LAUNCH_ARTICLE = "/blog/certiva-is-live-certification-body-operations-connected";
const REEL_URL = "https://www.instagram.com/reel/Dd1Ym5iuUaJ/";
const CERTIVA_INSTAGRAM = "https://www.instagram.com/getcertiva/";
const FOUNDER_INSTAGRAM = "https://www.instagram.com/batuhankutayeryilmaz/";
const STORAGE_KEY = "certiva-live-popup-dismissed-v1";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (pathname !== "/" || wasDismissed()) return;

    const timer = window.setTimeout(() => setOpen(true), 1000);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function close() {
    rememberDismissal();
    setOpen(false);
  }

  function toggleSound() {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (videoRef.current) videoRef.current.muted = nextMuted;
  }

  if (!open) return null;

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby="launch-popup-title"
      aria-describedby="launch-popup-description"
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#030705]/80 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="relative grid max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl overflow-y-auto rounded-2xl border border-white/10 bg-[var(--bg-dark)] shadow-[0_32px_100px_rgba(0,0,0,0.6)] lg:grid-cols-[1.7fr_1fr]">
        <button
          type="button"
          onClick={close}
          aria-label="Close launch film"
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--certiva-glow)]"
        >
          <X size={18} />
        </button>

        <div className="relative flex min-h-0 items-center bg-black">
          <video
            ref={videoRef}
            src="/certiva-launch-film.mp4"
            autoPlay
            muted={muted}
            playsInline
            controls
            preload="metadata"
            className="aspect-video w-full bg-black object-contain"
            aria-label="Certiva launch film"
          />
          <button
            type="button"
            onClick={toggleSound}
            className="absolute bottom-12 right-3 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-black/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--certiva-glow)] sm:bottom-14 sm:right-4"
            aria-label={muted ? "Turn video sound on" : "Mute video"}
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            {muted ? "Sound on" : "Sound off"}
          </button>
        </div>

        <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/logo-wordmark-white.svg"
                alt="Certiva"
                width={122}
                height={32}
                className="w-[7.2rem]"
                style={{ height: "auto" }}
              />
              <span className="h-4 w-px bg-white/15" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--certiva-glow)]">
                Now live
              </p>
            </div>
            <h2
              id="launch-popup-title"
              className="mt-5 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white"
            >
              Certification operations, connected.
            </h2>
            <p id="launch-popup-description" className="mt-4 text-sm leading-6 text-slate-300">
              Certiva is live. See the platform built with certification bodies, for certification bodies.
            </p>

            <div className="mt-5 grid gap-2.5">
              <a
                href="https://try.getcertiva.com/login"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl bg-[var(--certiva-glow)] px-4 py-3 text-sm font-bold text-[#06120a] transition hover:bg-[#69d58d] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explore the live demo
                <ArrowUpRight size={17} />
              </a>
              <Link
                href={LAUNCH_ARTICLE}
                onClick={close}
                className="flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--certiva-glow)]"
              >
                Read the launch story
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4">
            <a
              href={REEL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[var(--certiva-glow)]"
            >
              <Camera size={16} />
              Watch the Reel on Instagram
              <ArrowUpRight size={14} />
            </a>
            <p className="mt-3 text-[11px] uppercase tracking-[0.13em] text-slate-500">Follow the launch</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-slate-300">
              <a
                href={CERTIVA_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--certiva-glow)]"
              >
                @getcertiva
              </a>
              <a
                href={FOUNDER_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--certiva-glow)]"
              >
                @batuhankutayeryilmaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
