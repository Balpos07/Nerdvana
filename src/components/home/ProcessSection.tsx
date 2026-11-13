"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { processSteps } from "@/lib/cms/data";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const selectStep = (index: number) => setActiveStep(index);

  const step = processSteps[activeStep];

  return (
    <section
      id="process"
      className="relative border-b border-[var(--line)] bg-[#0A0A0A]"
    >
      <div className="flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-8 md:py-12">
          <div className="border-b border-[var(--line)] pb-5 md:pb-6 mb-4 md:mb-6">
            <span className="section-label block mb-3 text-[var(--accent)]">
              07 // METHODOLOGY
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                  Our Process
                </h2>
                <p className="text-base md:text-xl text-[var(--muted)] max-w-xl mt-3">
                  Great work starts with understanding the problem.
                  <strong className="text-[var(--fg)]"> Follow the 6-step lifecycle.</strong>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
                  STEP {step.number} OF 06
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

          <div
            role="tablist"
            aria-label="Process phases"
            className="grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mb-5 md:mb-8"
          >
            {processSteps.map((processStep, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={processStep.number}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="process-active-panel"
                  onClick={() => selectStep(index)}
                  className={`curious-phase min-h-14 md:min-h-16 rounded-xs border p-3 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                    isActive
                      ? "curious-phase-active shadow-lg"
                      : "hover:-translate-y-0.5"
                  }`}
                >
                  <span className="curious-phase-label block font-mono text-[10px] md:text-xs font-black uppercase tracking-wider mb-1">
                    Phase {processStep.number}
                  </span>
                  <span className="block text-[11px] md:text-sm font-extrabold uppercase leading-tight line-clamp-2">
                    {processStep.title}
                  </span>
                </button>
              );
            })}
          </div>

<motion.article
            id="process-active-panel"
            role="tabpanel"
            key={step.number}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="process-card grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] rounded-xs border p-5 md:p-8 lg:p-10"
          >
            <div className="flex flex-col justify-between lg:pr-10">
              <div>
                <span className="block text-6xl md:text-8xl font-black text-[#F5F5F2]/15 font-mono select-none">
                  {step.number}
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F5F5F2]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-[#F5F5F2]/72 leading-relaxed">
                  {step.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={() => selectStep((activeStep + 1) % processSteps.length)}
                className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] hover:underline"
              >
                <span>
                  {activeStep === 5 ? "Revisit Phase 01" : `Proceed to Phase 0${activeStep + 2}`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="curious-resolution mt-6 lg:mt-0 rounded-xs border p-5 md:p-6">
              <p className="text-base md:text-lg text-[#F5F5F2] leading-relaxed mb-6">
                {step.description}
              </p>
              <span className="section-label block mb-4 text-[var(--accent)]">
                PHASE DELIVERABLES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {step.deliverables.map((deliverable) => (
                  <div
                    key={deliverable}
                    className="flex items-center gap-2.5 text-xs md:text-sm text-[#F5F5F2]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
