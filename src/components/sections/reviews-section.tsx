"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { googleReviews } from "@/app/constants/reviews";

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
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
            href="https://maps.google.com/?q=Michael,+S.H.,+S.T.,+M.Kn.,+Komplek+Mall,+Perum+Ruko+Mutiara+Taman+Palem+Blok+C8.+23+Jalan+Outer+Ring+Road,+Sebarisan+Hotel+Aston+Cengkareng,+Taman+Palem+Jakarta+Barat+DKI+Jakarta+11730+ID,+Jl.+Kamal+Raya+Belakang,+Cengkareng+Tim."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline underline-offset-4 shrink-0"
          >
            Lihat semua ulasan <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {googleReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-col gap-4 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Top: avatar + name + Google icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm leading-tight">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.time}
                    </p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
                  <span
                    className="text-xs font-bold"
                    style={{ color: "#4285F4" }}
                  >
                    G
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

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
