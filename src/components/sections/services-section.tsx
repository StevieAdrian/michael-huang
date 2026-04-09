"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/app/constants/services";

export function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
            Ekosistem Kami
          </h2>
          <p className="text-muted-foreground">
            Pilih unit bisnis di bawah ini untuk mengeksplorasi layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <a href={service.href}>
                <div
                  className={`group h-full bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${service.border}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                      <service.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground group-hover:text-gold transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground flex-1 leading-relaxed mb-6 text-sm md:text-base">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-gold mt-auto pt-4 border-t border-border/50">
                      Jelajahi{" "}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
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
