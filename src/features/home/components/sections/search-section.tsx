"use client";

import { Search } from "lucide-react";

export function SearchSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8">
          Looking for something specific?
        </h2>
        <div className="relative group max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-gradient-gold rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative flex items-center bg-background border border-border/50 rounded-2xl p-2 shadow-xl focus-within:border-gold/50 transition-colors">
            <Search className="w-5 h-5 text-muted-foreground ml-3" />
            <input
              type="text"
              placeholder="Search lawyers, rooms, menu items..."
              className="w-full bg-transparent border-none text-foreground px-3 py-3 focus:outline-none focus:ring-0 text-base placeholder:text-muted-foreground/50"
            />
            <button className="px-5 md:px-8 py-3 bg-foreground text-background hover:bg-gold hover:text-primary-foreground font-semibold rounded-xl transition-colors duration-300 text-sm md:text-base whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
