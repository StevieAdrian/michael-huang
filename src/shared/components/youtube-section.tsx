"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube, ExternalLink } from "lucide-react";
import {
  defaultYoutubeVideos,
  type YoutubeVideoItem,
} from "@/app/constants/youtube";
import { YOUTUBE_CHANNEL_URL } from "@/app/constants/links";

interface YoutubeSectionProps {
  title?: string;
  subtitle?: string;
  videos?: YoutubeVideoItem[];
  channelUrl?: string;
}

export function YoutubeSection({
  title = "Tonton di YouTube",
  subtitle = "Ikuti channel YouTube kami untuk konten terbaru",
  videos = defaultYoutubeVideos,
  channelUrl = YOUTUBE_CHANNEL_URL,
}: YoutubeSectionProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };
  return (
    <section className="py-12 md:py-20 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                YouTube
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold">{title}</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">{subtitle}</p>
          </div>
          <a
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors text-sm shrink-0"
          >
            <Youtube className="w-4 h-4" /> Subscribe Channel
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {videos.map((video, i) => {
            const videoId = video.url ? getYoutubeId(video.url) : null;
            const isPlaying = playingIndex === i && videoId;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group block"
              >
                <div className="bg-background border border-border rounded-2xl overflow-hidden hover:border-red-500/40 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="relative aspect-video bg-muted flex items-center justify-center overflow-hidden">
                    {isPlaying ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (videoId) {
                            setPlayingIndex(i);
                          } else {
                            window.open(video.url || channelUrl, "_blank");
                          }
                        }}
                        className="w-full h-full relative block cursor-pointer group/btn"
                      >
                        {video.thumbnail ? (
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover/btn:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                                <Youtube className="w-6 h-6 text-red-400" />
                              </div>
                            </div>
                            <div
                              className="absolute inset-0 opacity-10"
                              style={{
                                backgroundImage:
                                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
                              }}
                            />
                          </div>
                        )}

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-black/30">
                          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl pl-1">
                            <Play className="w-6 h-6 text-white fill-white" />
                          </div>
                        </div>

                        <div className="absolute bottom-3 right-3">
                          <div className="w-8 h-8 bg-red-600/80 backdrop-blur rounded-full flex items-center justify-center pl-0.5">
                            <Play className="w-3.5 h-3.5 text-white fill-white" />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                  
                  <a 
                    href={video.url || channelUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-4 block flex-1 group-hover:bg-muted/30 transition-colors"
                  >
                    <h3 className="font-bold text-foreground text-sm md:text-base leading-snug mb-1 group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex items-center gap-1 mt-3 text-xs text-red-400 font-semibold">
                      <ExternalLink className="w-3 h-3" /> Buka di YouTube
                    </div>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
