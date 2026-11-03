"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Layers, Scale, Compass } from "lucide-react";
import { whyNerdvana } from "@/lib/cms/data";
import { CardReveal, MaskReveal, Magnetic } from "@/components/ui/MotionEffects";

export default function WhyNerdvanaSection() {
  const icons = [Layers, Zap, Compass, ShieldCheck, Scale];
  const [activePillar, setActivePillar] = useState(0);

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
              <MaskReveal>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                  Why Nerdvana
                </h2>
              </MaskReveal>
              <p className="text-sm md:text-base text-[var(--muted)] max-w-xl mt-3">
                Businesses lose months coordinating fragmented agencies. We bring engineering discipline, creative storytelling, and growth infrastructure under one roof.
              </p>
            </div>

          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyNerdvana.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            const isActive = activePillar === idx;
            return (
              <CardReveal
                key={pillar.title}
                delay={idx * 0.07}
                className="h-full"
              >
              <motion.div
                onMouseEnter={() => setActivePillar(idx)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-full overflow-hidden p-8 rounded-xs border flex flex-col justify-between group transition-colors duration-300 ${
                  isActive
                    ? "border-[var(--accent)] bg-[var(--surface-raised)] shadow-[0_18px_50px_rgba(184,255,0,0.08)]"
                    : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)]"
                }`}
              >
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-[var(--accent)] origin-left"
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Magnetic strength={10}>
                      <motion.div
                        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <Icon className="w-8 h-8 text-[var(--accent)]" />
                      </motion.div>
                    </Magnetic>
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
              </motion.div>
              </CardReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
