"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, HelpCircle, ArrowRight } from "lucide-react";
import { curiousProblems } from "@/lib/cms/data";

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
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)] flex items-center gap-3">
                <span>Curious?</span>
                <HelpCircle className="w-8 h-8 text-[var(--accent)]" />
              </h2>
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
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`curious-card p-8 rounded-xs border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-[var(--accent)] bg-[#0A0A0A] -translate-y-1 shadow-xl"
                    : "border-[#F5F5F2]/16 bg-[#0A0A0A]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[var(--accent)]">
                      PROBLEM // 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#F5F5F2]/10 text-[#F5F5F2] border border-[#F5F5F2]/16">
                      {item.division}
                    </span>
                  </div>

                  {/* Problem statement */}
                  <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-[#F5F5F2] mb-4">
                    &ldquo;{item.problem}&rdquo;
                  </h3>

                  {/* Solution resolution */}
                  <div className="curious-resolution p-4 rounded-xs border mb-6">
                    <span className="text-[10px] font-mono uppercase text-[var(--accent)] block mb-1">
                      NERDVANA RESOLUTION
                    </span>
                    <p className="text-sm font-bold text-[#F5F5F2] flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-[var(--accent)] shrink-0" />
                      <span>{item.solution}</span>
                    </p>
                    <span className="text-[11px] font-mono text-[#F5F5F2]/72 mt-2 block">
                      Powered by {item.capability}
                    </span>
                  </div>
                </div>

                <Link
                  href={item.targetHref}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[var(--line)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] hover:underline"
                >
                  <span>{item.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

