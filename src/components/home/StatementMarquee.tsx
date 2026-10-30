"use client";

import React from "react";

export default function StatementMarquee() {
  const phrase1 = "BIG THINKING • UNAPOLOGETIC CRAFT • SHAPING DIGITAL CULTURE • KNOCK CLIENTS DEAD • ";
  const phrase2 = "RADICAL CLARITY • HIGH-CONVERSION FLAGSHIPS • SURGICAL ENGINEERING • BESPOKE MOTION • ";

  return (
    <section className="py-12 md:py-20 border-y border-[var(--line)] bg-[var(--surface)] overflow-hidden select-none">
      <div className="flex flex-col gap-4">
        {/* Track 1: Leftward */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-left flex items-center">
            <span className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-[var(--fg)]">
              {phrase1.repeat(4)}
            </span>
          </div>
        </div>

        {/* Track 2: Rightward with accent punch */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-right flex items-center">
            <span className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--muted)] via-[var(--accent)] to-[var(--fg)]">
              {phrase2.repeat(4)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

