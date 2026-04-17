"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HomePageHeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  align?: "left" | "center";
}

export function HomePageHero({
  title,
  subtitle,
  imageSrc,
  align = "center",
}: HomePageHeroProps) {
  void subtitle;
  void imageSrc;

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[50vh] flex items-center">
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={align === "center" ? "max-w-3xl mx-auto text-center" : "max-w-3xl text-left"}
        >
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/images/mich-logo-transparent.png"
              alt="Michael Huang Logo"
              width={320}
              height={320}
              className="h-85 w-auto"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-20" />
    </div>
  );
}