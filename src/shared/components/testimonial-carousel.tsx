"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialModal } from "./testimonial-modal";
import type { Testimonial } from "@/shared/types/testimonial";

interface TestimonialCarouselProps {
  items: Testimonial[];
  autoPlay?: boolean;
  intervalMs?: number;
}

export function TestimonialCarousel({
  items,
  autoPlay = true,
  intervalMs = 4000,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalItem, setModalItem] = useState<Testimonial | null>(null);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [autoPlay, intervalMs, next]);

  if (!items.length) return null;

  const getCardIndex = (offset: number) =>
    (activeIndex + offset + items.length) % items.length;

  const cardConfigs = [
    { offset: -1, x: "-55%", scale: 0.7, z: 5, opacity: 0.5, rotate: -3, side: true },
    { offset: 0, x: "0%", scale: 1, z: 20, opacity: 1, rotate: 0, side: false },
    { offset: 1, x: "55%", scale: 0.7, z: 5, opacity: 0.5, rotate: 3, side: true },
  ];

  return (
    <div className="relative w-full">
      <div className="relative h-[420px] md:h-[440px] flex items-center justify-center px-2">
        {cardConfigs.map(({ offset, x, scale, z, opacity, rotate }) => {
            const idx = getCardIndex(offset);
            const item = items[idx];
            const isActive = offset === 0;

            return (
              <motion.div
                key={offset}
                className={`absolute ${isActive ? "w-[90vw] max-w-[260px] md:w-[300px]" : "w-[70vw] max-w-[220px] md:w-[240px]"} cursor-pointer`}
                style={{ zIndex: z }}
                animate={{
                  x,
                  scale,
                  opacity,
                  rotateY: rotate,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                }}
                onClick={() => {
                  if (offset < 0) prev();
                  else if (offset > 0) next();
                  else setModalItem(item);
                }}
              >
                <div
                  className={`rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 ${
                    isActive
                      ? "bg-card border-2 border-gold/50 text-foreground"
                      : "bg-card border border-gold/30 text-foreground"
                  }`}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 bg-gradient-gold text-primary-foreground"
                  >
                    {item.avatarInitials}
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className={`w-4 h-4 ${
                          starIdx < item.rating
                            ? "fill-gold text-gold"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p
                    className="text-sm leading-relaxed mb-5 line-clamp-4 text-muted-foreground"
                  >
                    &ldquo;{item.comment}&rdquo;
                  </p>
                  <div className="w-12 h-1 rounded-full mb-4 bg-gold/40" />
                  <p className="font-bold text-base text-foreground">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.time}
                  </p>
                </div>
              </motion.div>
            );
          })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-gold/50 hover:text-gold transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {(() => {
            const maxIndicators = 7;
            const total = items.length;
            const current = activeIndex;
            if (total <= maxIndicators) {
              return items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-gold"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ));
            }
            let start = Math.max(0, Math.min(current - 3, total - maxIndicators));
            let end = Math.min(total, start + maxIndicators);
            const indicators = [];
            for (let i = start; i < end; i++) {
              indicators.push(
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-gold" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              );
            }
            return indicators;
          })()}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center hover:border-gold/50 hover:text-gold transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {modalItem && (
        <TestimonialModal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </div>
  );
}
