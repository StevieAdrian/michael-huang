import Link from "next/link";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { footerNavItems as navItems } from "@/shared/constants/nav";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto relative overflow-hidden">
      {/* Subtle gold glow at top of footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-sm bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
                M
              </div>
              <span className="font-display font-bold text-xl tracking-widest">
                MICHAEL<span className="text-gold">.COM</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              One Name, Every Solution. The gold standard unified digital
              ecosystem for all your business and lifestyle needs.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6 text-foreground">
              Our Services
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-6 text-foreground">
              Contact
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gold">
                  <Phone className="w-4 h-4" />
                </div>
                +62 812 2179 370
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gold">
                  <MessageCircle className="w-4 h-4" />
                </div>
                info@michael.com
              </li>
              <li className="flex items-start gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">
                  Michael, S.H., S.T., M.Kn., Komplek Mall, Perum Ruko Mutiara Taman Palem Blok C8. 23 Jalan Outer Ring Road, Sebarisan Hotel Aston Cengkareng, Taman Palem Jakarta Barat DKI Jakarta 11730 ID, Jl. Kamal Raya Belakang, Cengkareng Tim.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Michael.com. All rights reserved.</p>
          <p className="text-gold/70 font-display tracking-wider text-xs">
            THE GOLD STANDARD
          </p>
        </div>
      </div>
    </footer>
  );
}
