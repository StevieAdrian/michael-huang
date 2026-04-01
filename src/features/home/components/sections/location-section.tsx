"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Info side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
              <MapPin className="w-3.5 h-3.5" /> Temukan Kami
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 md:mb-6">
              Kantor Pusat Michael.com
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Kami berlokasi di jantung bisnis Jakarta. Kunjungi kami untuk
              konsultasi tatap muka, atau hubungi kami melalui WhatsApp untuk
              jadwal pertemuan.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50">
                <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Alamat
                  </p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Michael, S.H., S.T., M.Kn., Komplek Mall, Perum Ruko Mutiara Taman Palem Blok C8. 23 Jalan Outer Ring Road, Sebarisan Hotel Aston Cengkareng, Taman Palem Jakarta Barat DKI Jakarta 11730 ID, Jl. Kamal Raya Belakang, Cengkareng Tim.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50">
                <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Telepon / WhatsApp
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                  >
                    +62 812 3456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50">
                <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Email
                  </p>
                  <a
                    href="mailto:info@michael.com"
                    className="text-muted-foreground text-sm mt-0.5 hover:text-gold transition-colors"
                  >
                    info@michael.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=Michael,+S.H.,+S.T.,+M.Kn.,+Komplek+Mall,+Perum+Ruko+Mutiara+Taman+Palem+Blok+C8.+23+Jalan+Outer+Ring+Road,+Sebarisan+Hotel+Aston+Cengkareng,+Taman+Palem+Jakarta+Barat+DKI+Jakarta+11730+ID,+Jl.+Kamal+Raya+Belakang,+Cengkareng+Tim."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-bold rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all text-sm"
              >
                <MapPin className="w-4 h-4" /> Buka di Google Maps
              </a>
              <a
                href="https://wa.me/6281234567890?text=Halo, saya ingin berkonsultasi dengan Michael.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-background border border-border hover:border-gold/50 text-foreground font-semibold rounded-xl transition-all text-sm"
              >
                💬 Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* Map side */}
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl h-[300px] md:h-[420px] relative group">
            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors pointer-events-none z-10" />
            <iframe
              src="https://www.google.com/maps?q=Michael,+S.H.,+S.T.,+M.Kn.,+Komplek+Mall,+Perum+Ruko+Mutiara+Taman+Palem+Blok+C8.+23+Jalan+Outer+Ring+Road,+Sebarisan+Hotel+Aston+Cengkareng,+Taman+Palem+Jakarta+Barat+DKI+Jakarta+11730+ID,+Jl.+Kamal+Raya+Belakang,+Cengkareng+Tim.&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.3) contrast(1.1)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
