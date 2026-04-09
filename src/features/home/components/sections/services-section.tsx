"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/features/home/constants/services";

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-3">
            Ekosistem Kami
          </h2>
          <p className="text-muted-foreground">
            Pilih unit bisnis di bawah ini untuk mengeksplorasi layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <a href={service.href}>
                <div
                  className={`group h-full bg-card rounded-2xl p-5 md:p-6 border border-border hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${service.border} cursor-pointer`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-muted/50 border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                        <service.icon className="w-5 h-5 text-foreground group-hover:text-gold transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest border border-border/50 px-2 py-0.5 rounded-full">{service.tag}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground flex-1 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="flex items-center text-xs font-semibold text-gold mt-auto pt-3 border-t border-border/50">
                      Jelajahi <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
