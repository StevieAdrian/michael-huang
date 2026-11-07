"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Volume2, Mic, Sliders, Music2 } from "lucide-react";

interface MusicVideoSectionProps {
  videoSrc?: string;
  posterSrc?: string;
}

export function MusicVideoSection({
  videoSrc = "/images/music-production-documentation.mp4",
  posterSrc = "/images/music-studio-session.jpg",
}: MusicVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartPlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.warn("Autoplay blocked or video playback failed:", err);
        });
      }
    }, 50);
  };

  const handleResetToThumbnail = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);
  };

  return (
    <section className="py-14 md:py-24 bg-card border-y border-border/50 relative overflow-hidden">
      {/* Background ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
            <Volume2 className="w-3.5 h-3.5" />
            Dokumentasi Studio
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4">
            Intip Proses di Balik Layar Produksi Musik
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Saksikan langsung suasana di dalam studio saat sesi rekaman vokal,
            aransemen instrumen, dan proses mixing-monitoring bersama sound engineer kami.
          </p>
        </div>

        {/* Video Player Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-black aspect-video group"
        >
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full cursor-pointer"
                onClick={handleStartPlay}
              >
                {/* Poster / Thumbnail Image */}
                <Image
                  src={posterSrc}
                  alt="Dokumentasi Sesi Rekaman Musik di Studio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  priority
                />

                {/* Dark Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/40" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-medium">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Behind The Scenes
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gold font-medium">
                    HD Video • In-Studio
                  </span>
                </div>

                {/* Center Pulsing Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="relative">
                    {/* Glowing outer rings */}
                    <div className="absolute -inset-3 rounded-full bg-gold/20 animate-ping opacity-75" />
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-gold text-primary-foreground flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)] group-hover:scale-110 active:scale-95 transition-transform duration-300">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 ml-1 fill-current text-primary-foreground" />
                    </div>
                  </div>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-wide drop-shadow-md bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm group-hover:border-gold/40 transition-colors">
                    Klik untuk Putar Video Dokumentasi
                  </span>
                </div>

                {/* Bottom Title Bar */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <p className="text-white font-semibold text-sm sm:text-base md:text-lg drop-shadow">
                    Sesi Rekaman & Audio Monitoring MH Studio
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                    Proses penggarapan vokal dan live tracking di ruang akustik kedap suara
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="video-player"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full bg-black flex items-center justify-center"
              >
                <video
                  ref={videoRef}
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                >
                  Browser Anda tidak mendukung tag video HTML5.
                </video>

                {/* Return to thumbnail button */}
                <button
                  type="button"
                  onClick={handleResetToThumbnail}
                  className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-medium border border-white/20 backdrop-blur-md shadow-lg transition-colors z-20"
                  title="Kembali ke Thumbnail"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Thumbnail</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Feature Highlights beneath Video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 max-w-4xl mx-auto">
          <div className="bg-background/80 border border-border rounded-xl p-4 sm:p-5 flex items-start gap-3.5 hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
              <Mic className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">Vocal Booth Kedap Suara</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Akustik ruang berspesifikasi tinggi dengan mic condenser premium untuk hasil vokal yang jernih dan warm.
              </p>
            </div>
          </div>

          <div className="bg-background/80 border border-border rounded-xl p-4 sm:p-5 flex items-start gap-3.5 hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
              <Sliders className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">Digital Audio Workstation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Software DAW standar industri dengan multi-track monitoring untuk mixing & mastering presisi.
              </p>
            </div>
          </div>

          <div className="bg-background/80 border border-border rounded-xl p-4 sm:p-5 flex items-start gap-3.5 hover:border-gold/30 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
              <Music2 className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">Live Instrument Tracking</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Fasilitas tracking instrumen (gitar elektrik, akustik, bass, dan keyboard) dengan latensi ultra-rendah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

