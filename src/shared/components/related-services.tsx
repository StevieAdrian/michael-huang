"use client";

import Link from "next/link";

const allServices = [
  { label: "Law Firm", href: "/law-firm-michael" },
  { label: "Notaris", href: "/notaris-michael" },
  { label: "PPAT", href: "/ppat-michael" },
  { label: "Konsultasi Hukum", href: "/law-consulting-michael" },
  { label: "FAQ Hukum", href: "/indonesia-legal-faq" },
  { label: "Kost Premium", href: "/kost-gemini-koolkost" },
  { label: "Warteg Gemini", href: "/warteg-gemini" },
  { label: "Franchise", href: "/franchise-michael" },
  { label: "Gereja", href: "/glory-ministry-church" },
  { label: "Music Production", href: "/musik-production-michael" },
  { label: "Podcast", href: "/podcast-michael" },
  { label: "MH Clinic", href: "/mh-clinic" },
];

export function RelatedServices({ currentPath }: { currentPath: string }) {
  const links = allServices.filter((s) => s.href !== currentPath);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="font-display text-xl sm:text-2xl text-foreground mb-4">
        Layanan Lainnya
      </h2>
      <div className="flex flex-wrap gap-2">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-1.5 text-sm rounded-lg border border-border bg-card text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
