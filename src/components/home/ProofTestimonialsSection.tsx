"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";
import { CountUp, Magnetic, MaskReveal } from "@/components/ui/MotionEffects";

export default function ProofTestimonialsSection() {
  const proofResults = [
    {
      index: "01",
      label: "YEARS OF EXPERIENCE",
      value: siteSettings.stats.experienceYears,
      suffix: "+",
      note: "Across technology and creative delivery",
    },
    {
      index: "02",
      label: "PROJECTS DELIVERED",
      value: siteSettings.stats.projectsDelivered,
      suffix: "+",
      note: "Brands, platforms and growth systems",
    },
    {
      index: "03",
      label: "CLIENT SATISFACTION",
      value: 99,
      suffix: ".4%",
      note: "Published agency performance target",
    },
    {
      index: "04",
      label: "UPTIME SLA",
      value: 99,
      suffix: ".99%",
      note: "Infrastructure reliability standard",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="section-label block mb-3 text-[var(--accent)]">
              08 // PROOF & REPUTATION
            </span>
            <MaskReveal>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                Proof &amp; Results
              </h2>
            </MaskReveal>
            <p className="text-sm md:text-base text-[var(--muted)] mt-2">
              Operating depth, delivery scale and service standards in one view.
            </p>
          </div>
          <span className="font-mono text-xs text-[var(--muted)]">NERDVANA OPERATING SNAPSHOT</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-[var(--line)] bg-[var(--line)] overflow-hidden rounded-sm">
          {proofResults.map((result, idx) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-[280px] bg-[var(--surface)] p-6 md:p-8 flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-[var(--accent)]">PROOF // {result.index}</span>
                <Magnetic strength={12}>
                  <div className="w-9 h-9 rounded-full border border-[var(--line)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[var(--fg)]" />
                  </div>
                </Magnetic>
              </div>

              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[var(--fg)] tabular-nums">
                  <CountUp value={result.value} suffix={result.suffix} duration={1200} />
                </div>
                <h3 className="mt-4 text-xs font-mono font-bold uppercase tracking-wider text-[var(--fg)]">
                  {result.label}
                </h3>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  {result.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
