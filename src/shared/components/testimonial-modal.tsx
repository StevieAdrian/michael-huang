"use client";

import { motion } from "framer-motion";
import { Star, X } from "lucide-react";
import type { Testimonial } from "@/shared/types/testimonial";

interface TestimonialModalProps {
  item: Testimonial;
  onClose: () => void;
}

export function TestimonialModal({ item, onClose }: TestimonialModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-card border border-gold/30 rounded-3xl p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 bg-gradient-gold text-primary-foreground">
            {item.avatarInitials}
          </div>

          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < item.rating
                    ? "fill-gold text-gold"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            &ldquo;{item.comment}&rdquo;
          </p>

          <div className="w-12 h-1 rounded-full mb-4 bg-gold/40" />

          <p className="font-bold text-lg text-foreground">{item.name}</p>
          <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
        </div>
      </motion.div>
    </div>
  );
}
