export default function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full opacity-15 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(82,194,122,0.4), rgba(26,71,49,0.2), transparent 70%)",
          animation: "orb-float 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -right-20 top-20 h-[400px] w-[400px] rounded-full opacity-10 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(26,71,49,0.5), rgba(82,194,122,0.15), transparent 70%)",
          animation: "orb-float-alt 10s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full opacity-10 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(82,194,122,0.3), transparent 70%)",
          animation: "orb-float 14s ease-in-out infinite",
          animationDelay: "4s",
        }}
      />
    </div>
  );
}
