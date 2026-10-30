"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, Layers, Scale, Compass } from "lucide-react";
import { whyNerdvana, siteSettings } from "@/lib/cms/data";

export default function WhyNerdvanaSection() {
  const icons = [Layers, Zap, Compass, ShieldCheck, Scale];

  return (
    <section className="py-24 md:py-36 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-16">
          <span className="section-label block mb-3 text-[var(--accent)]">
            06 // THE UNFAIR ADVANTAGE
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                Why Nerdvana
              </h2>
              <p className="text-sm md:text-base text-[var(--muted)] max-w-xl mt-3">
                Businesses lose months coordinating fragmented agencies. We bring engineering discipline, creative storytelling, and growth infrastructure under one roof.
              </p>
            </div>

            <div className="flex items-center gap-6 font-mono text-xs text-[var(--muted)]">
              <div>
                <strong className="text-[var(--accent)] text-lg block">{siteSettings.stats.clientSatisfaction}</strong>
                <span>CLIENT RETENTION</span>
              </div>
              <div>
                <strong className="text-[var(--accent)] text-lg block">{siteSettings.stats.uptimeSLA}</strong>
                <span>INFRASTRUCTURE SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyNerdvana.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-xs border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between group hover:border-[var(--accent)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-8 h-8 text-[var(--accent)]" />
                    <span className="font-mono text-xs text-[var(--muted)]">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[var(--fg)] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--fg)]">
                  <span>VERIFIED CAPABILITY</span>
                  <span className="text-[var(--accent)]">● ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

