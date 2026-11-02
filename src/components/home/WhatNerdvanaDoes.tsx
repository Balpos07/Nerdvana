"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whatNerdvanaDoes } from "@/lib/cms/data";

export default function WhatNerdvanaDoes() {
  return (
    <section className="py-24 md:py-36 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-16">
          <span className="section-label block mb-3 text-[var(--fg)]">
            01 // PROPOSITION
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                {whatNerdvanaDoes.headline}
              </h2>
              <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mt-4 leading-relaxed">
                {whatNerdvanaDoes.descriptor}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--line)] bg-white text-xs font-mono text-[var(--fg)]">
              <span>END-TO-END DELIVERY CYCLE</span>
            </div>
          </div>
        </div>

        {/* 6-Stage Sequential Timeline: Imagine → Build → Launch → Automate → Market → Scale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {whatNerdvanaDoes.stages.map((stage, idx) => (
            <div
              key={stage.label}
              className="relative p-6 min-h-[260px] rounded-sm border border-black/20 bg-white flex flex-col justify-between group hover:border-black hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(10,10,10,0.08)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-sm font-black text-[var(--fg)] tracking-wider">
                    0{idx + 1}
                  </span>
                  {idx < 5 && (
                    <ArrowRight className="w-4 h-4 text-[var(--fg)] opacity-45 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[var(--fg)] mb-3">
                  {stage.label}
                </h3>
                <p className="text-sm text-black/65 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-black/15 flex items-center gap-2 text-[11px] font-mono font-bold text-[var(--fg)] uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-[var(--fg)]" />
                <span>PHASE READY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
