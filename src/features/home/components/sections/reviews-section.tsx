"use client";

import { Star, ExternalLink } from "lucide-react";
import { googleReviews } from "@/features/home/constants/reviews";
import { GENERAL_MAPS_URL } from "@/app/constants/links";
import { TestimonialCarousel } from "@/shared/components/testimonial-carousel";

export function ReviewsSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span
                  className="text-sm font-bold"
                  style={{ color: "#4285F4" }}
                >
                  G
                </span>
              </div>
              <span className="text-sm font-semibold text-muted-foreground">
                Google Reviews
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-2">
              Apa Kata Klien Kami
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">5.0</span>
              <span className="text-muted-foreground text-sm">
                · 691 ulasan di Google
              </span>
            </div>
          </div>
          <a
            href={GENERAL_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline underline-offset-4 shrink-0"
          >
            Lihat semua ulasan <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Carousel */}
        <TestimonialCarousel items={googleReviews} />

        {/* Overall rating bar summary */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 py-8 px-6 bg-card border border-border/50 rounded-2xl">
          <div className="text-center">
            <div className="text-5xl font-display font-bold text-gradient-gold">
              5.0
            </div>
            <div className="flex gap-1 justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground">691 ulasan</p>
          </div>
          <div className="w-px h-16 bg-border hidden sm:block" />
          <div className="space-y-2 flex-1 max-w-xs w-full">
            {[
              { label: "5 ★", pct: 100 },
              { label: "4 ★", pct: 0 },
              { label: "3 ★", pct: 0 },
              { label: "2 ★", pct: 0 },
              { label: "1 ★", pct: 0 },
            ].map(({ label, pct }) => (
              <div key={label} className="flex items-center gap-3 text-xs">
                <span className="text-muted-foreground w-7 shrink-0">
                  {label}
                </span>
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-muted-foreground w-6 text-right">
                  {pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
