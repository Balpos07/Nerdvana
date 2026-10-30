"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/lib/cms/data";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-36 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="pb-12 border-b border-[var(--line)]">
          <span className="section-label block mb-3 text-[var(--accent)]">
            07 // METHODOLOGY
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                Our Process
              </h2>
              <p className="text-sm md:text-base text-[var(--muted)] max-w-lg mt-2">
                Great work starts with understanding the problem. A battle-tested 6-step lifecycle from first diagnosis to continuous scale.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                STEP {processSteps[activeStep].number} OF 06
              </span>
              <div className="w-32 h-1.5 bg-[var(--line)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--accent)]"
                  animate={{ width: `${((activeStep + 1) / 6) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 6 Step Horizontal Button Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-8 border-b border-[var(--line)]">
          {processSteps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 text-left border rounded-xs transition-all duration-300 ${
                  isCurrent
                    ? "border-[var(--accent)] bg-[var(--surface-raised)] text-[var(--fg)] shadow-sm"
                    : "border-[var(--line)] hover:border-[var(--fg)]/40 text-[var(--muted)]"
                }`}
              >
                <span className="font-mono text-xs font-black text-[var(--accent)] block mb-1">
                  PHASE {step.number}
                </span>
                <span className="text-sm font-extrabold uppercase tracking-tight block">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Stage */}
        <div className="py-12 md:py-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
              <div className="lg:col-span-5">
                <span className="text-7xl md:text-9xl font-black text-[var(--muted)]/20 font-mono block select-none">
                  {processSteps[activeStep].number}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--fg)] mt-2 mb-3">
                  {processSteps[activeStep].title}
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {processSteps[activeStep].tagline}
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between bg-[var(--surface)] p-8 md:p-12 rounded-xs border border-[var(--line)]">
                <p className="text-base md:text-lg text-[var(--fg)] leading-relaxed mb-8">
                  {processSteps[activeStep].description}
                </p>

                <div>
                  <span className="section-label block mb-4 text-[var(--accent)]">
                    PHASE DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {processSteps[activeStep].deliverables.map((del, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-xs md:text-sm text-[var(--fg)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-[var(--line)] flex justify-end">
                  <button
                    onClick={() => setActiveStep((activeStep + 1) % processSteps.length)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] hover:underline"
                  >
                    <span>
                      {activeStep === 5 ? "Revisit Phase 01" : `Proceed to Phase 0${activeStep + 2}`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
