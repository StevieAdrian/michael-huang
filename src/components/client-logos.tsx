const logos = [
  "PT Maju Bersama", "Bank Nusantara", "Garuda Capital", "Indo Realty",
  "Surya Group", "Nusa Tech", "Prima Investasi", "Mega Konsultan",
];

export function ClientLogos() {
  return (
    <section className="py-12 overflow-hidden border-y border-border/50 bg-card">
      <p className="text-center text-sm text-muted-foreground uppercase tracking-widest mb-8 font-medium">Trusted by leading organizations</p>
      <div className="relative">
        <div
          className="flex gap-12 items-center"
          style={{ animation: "scroll-x 20s linear infinite", width: "max-content" }}
        >
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className="px-6 py-3 border border-border/40 rounded-xl bg-background/50 text-muted-foreground font-semibold text-sm shrink-0 whitespace-nowrap hover:border-gold/30 hover:text-foreground transition-colors">
              {name}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
