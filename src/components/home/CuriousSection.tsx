"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HelpCircle, ArrowRight } from "lucide-react";
import { curiousProblems } from "@/lib/cms/data";
import { CardReveal, Magnetic, MaskReveal } from "@/components/ui/MotionEffects";

export default function CuriousSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="curious" className="py-24 md:py-36 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-12">
          <span className="section-label block mb-3 text-[var(--accent)]">
            05 // PROBLEM-FIRST DIAGNOSIS
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <MaskReveal>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)] flex items-center gap-3">
                  <span>Curious?</span>
                  <motion.span
                    animate={{ rotate: [0, 8, 0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <HelpCircle className="w-8 h-8 text-[var(--accent)]" />
                  </motion.span>
                </h2>
              </MaskReveal>
              <p className="text-base md:text-xl text-[var(--muted)] max-w-xl mt-3">
                Maybe you&apos;re not sure what you need yet. <strong className="text-[var(--fg)]">Start with the problem.</strong>
              </p>
            </div>
            <div className="text-xs font-mono text-[var(--muted)]">
              SELECT A BOTTLENECK BELOW TO MAP THE SOLUTION →
            </div>
          </div>
        </div>

        {/* 6 Problem-Led Diagnostic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curiousProblems.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <CardReveal
                key={item.id}
                delay={idx * 0.06}
                className="h-full"
              >
              <motion.div
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative h-full p-8 rounded-xs border overflow-hidden flex flex-col justify-between ${
                  isHovered
                    ? "border-[var(--accent)] bg-[var(--surface-raised)] shadow-xl"
                    : "border-[var(--line)] bg-[var(--surface)]"
                }`}
              >
                <motion.div
                  className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-[var(--accent)]/10 blur-2xl pointer-events-none"
                  animate={isHovered ? { scale: 1.5, x: -12 } : { scale: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[var(--accent)]">
                      PROBLEM // 0{idx + 1}
                    </span>
                    <span className="relative text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[var(--card-bg)] text-[var(--muted)] border border-[var(--line)]">
                      {item.division}
                    </span>
                  </div>

                  {/* Problem statement */}
                  <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-[var(--fg)] mb-4">
                    &ldquo;{item.problem}&rdquo;
                  </h3>

                  {/* Solution resolution */}
                  <div className="p-4 rounded-xs bg-[#0A0A0A] border border-[var(--line)] mb-6">
                    <span className="text-[10px] font-mono uppercase text-[var(--accent)] block mb-1">
                      NERDVANA RESOLUTION
                    </span>
                    <p className="text-sm font-bold text-[var(--fg)] flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span>{item.solution}</span>
                    </p>
                    <span className="text-[11px] font-mono text-[var(--muted)] mt-2 block">
                      Powered by {item.capability}
                    </span>
                  </div>
                </div>

                <Magnetic strength={10}>
                <Link
                  href={item.targetHref}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[var(--line)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] hover:underline"
                >
                  <span>{item.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                </Magnetic>
              </motion.div>
              </CardReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
