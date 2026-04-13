"use client";

import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { legalFaqs } from "../constants/faqs";
import { PageHero } from "@/features/home/components/page-hero";
import { WHATSAPP_CONSULTATION_URL } from "@/app/constants/links";

export function FaqClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pb-24">
      <PageHero
        title="Indonesia Legal FAQ"
        subtitle="Jawaban ringkas dari pertanyaan umum terkait hukum, pendirian usaha, dan legalitas di Indonesia."
        imageSrc="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
        align="center"
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Temukan informasi yang Anda butuhkan seputar layanan Notaris, PPAT, pendirian PT/CV, HAKI, penyewaan properti, dan bisnis F&B.
            </p>
          </div>

          <div className="space-y-4">
            {legalFaqs.map((faq, i) => (
              <details
                key={i}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:border-gold/30 transition-colors group"
                name="faq-accordion"
              >
                <summary className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 cursor-pointer marker:hidden list-none">
                  <span className="font-semibold text-lg md:text-xl text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown className="w-6 h-6 text-gold shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-5 md:px-6 pb-6 text-muted-foreground text-sm md:text-base leading-relaxed border-t border-border/10 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-card border-t border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Masih Punya Pertanyaan Lain?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Tim konsultan hukum kami siap membantu Anda memberikan panduan yang jelas untuk kebutuhan Anda.
          </p>
          <a
            href={WHATSAPP_CONSULTATION_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary-foreground font-bold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
          >
            Konsultasi Sekarang Lewat WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
