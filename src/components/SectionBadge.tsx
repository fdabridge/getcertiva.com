export default function SectionBadge({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] ${
        dark
          ? "bg-[var(--bg-surface)] text-[var(--certiva-glow)] border border-[var(--bg-border)]"
          : "bg-[var(--certiva-pale)] text-[var(--certiva-green)]"
      }`}
    >
      {children}
    </span>
  );
}
