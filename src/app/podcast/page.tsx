import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import { PageHero } from "@/features/home/components/page-hero";
import { YOUTUBE_CHANNEL_URL } from "@/app/constants/links";
import { podcastEpisodes, podcastPlatforms } from "@/app/constants/podcast";

export const metadata: Metadata = {
  title: "Podcast | Michael Huang",
  description:
    "Obrolan mendalam tentang iman, bisnis, hukum, dan kehidupan bersama narasumber terpilih.",
};

export default function PodcastPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="Michael Huang Podcast"
        subtitle="Obrolan mendalam tentang iman, bisnis, hukum, dan kehidupan. Episode baru hadir setiap minggu."
        align="left"
      />

      <section className="py-8 bg-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <span className="text-sm font-semibold text-muted-foreground mr-2">
              Dengarkan di:
            </span>
            {podcastPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 ${platform.color} text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-opacity`}
              >
                <span>{platform.icon}</span> {platform.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-2">
                Episode Terbaru
              </h2>
              <p className="text-muted-foreground text-sm">
                Rilis setiap Senin dan Kamis
              </p>
            </div>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline underline-offset-4 shrink-0"
            >
              Lihat semua episode <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {podcastEpisodes.map((episode) => (
              <a
                key={episode.number}
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="group bg-card border border-border rounded-2xl p-5 md:p-6 flex gap-4 items-start hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-shadow">
                  <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground pl-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-gold">
                      {episode.number}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      · {episode.duration}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm md:text-base leading-snug mb-1 group-hover:text-gold transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Bersama {episode.guest}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {episode.desc}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1 group-hover:text-gold transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-card border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Jangan Lewatkan Episode Baru
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe dan aktifkan notifikasi supaya kamu selalu jadi yang
            pertama dengar episode terbaru.
          </p>
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors text-base"
          >
            Subscribe di YouTube
          </a>
          <div className="mt-5">
            <Link
              href="/"
              className="text-sm text-gold hover:underline underline-offset-4"
            >
              Kembali ke Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
