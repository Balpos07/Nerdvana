"use client";

import React from "react";
import { partners } from "@/lib/cms/data";

export default function PartnersMarquee() {
  return (
    <section id="clients" className="py-20 md:py-28 bg-[var(--surface)] border-b border-[var(--line)] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
        <span className="section-label block mb-2">05 // ECOSYSTEM</span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--fg)]">
            Our Partners
          </h2>
          <p className="text-xs md:text-sm text-[var(--muted)] max-w-md">
            Trusted by venture-backed startups and category leaders defining humanoid robotics, spatial computing, and next-gen commerce.
          </p>
        </div>
      </div>

      {/* Infinite Logo / Monogram Marquee */}
      <div className="relative w-full overflow-hidden border-y border-[var(--line)] py-8 bg-[var(--bg)] select-none">
        <div className="animate-marquee-left flex items-center gap-12 sm:gap-20">
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center gap-3 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 group cursor-default"
            >
              <div className="w-10 h-10 rounded-sm bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center font-mono font-bold text-xs text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors">
                {partner.symbol}
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-extrabold tracking-wider uppercase text-[var(--fg)]">
                  {partner.name}
                </span>
                <span className="text-[10px] font-mono text-[var(--muted)] tracking-wider uppercase">
                  {partner.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

