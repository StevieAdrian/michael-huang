"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  align?: "left" | "center";
}

export function PageHero({
  title,
  subtitle,
  imageSrc,
  align = "center",
}: PageHeroProps) {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[50vh] flex items-center">
      {/* Background Image & Overlay */}
      {imageSrc && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 z-10 bg-background/80 md:bg-gradient-to-r md:from-background/95 md:to-background/40 backdrop-blur-[2px]" />
        </>
      )}

      {/* Default abstract background if no image */}
      {!imageSrc && (
        <div className="absolute inset-0 z-0 bg-background overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl text-left"}
        >
          <div
            className={
              align === "center"
                ? "inline-flex mx-auto items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 mb-6 text-sm font-medium text-gold"
                : "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 mb-6 text-sm font-medium text-gold"
            }
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            MICHAELHUANG.ID ECOSYSTEM
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            {title.split(" ").map((word, i) => (
              <span
                key={i}
                className={
                  i === title.split(" ").length - 2
                    ? "text-gradient-gold"
                    : "text-foreground"
                }
              >
                {word}{" "}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-20" />
    </div>
  );
}
