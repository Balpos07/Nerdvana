"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, HelpCircle, ArrowRight } from "lucide-react";
import { curiousProblems } from "@/lib/cms/data";

export default function CuriousSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const phaseLabels = [
    "Convert",
    "Rebrand",
    "Optimize",
    "Automate",
    "Build",
    "Grow",
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frameId = 0;
    const updateActivePhase = () => {
      frameId = 0;
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
      setActiveIndex(Math.min(
        curiousProblems.length - 1,
        Math.floor(progress * curiousProblems.length),
      ));
    };

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateActivePhase);
    };

    updateActivePhase();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const selectPhase = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    setActiveIndex(index);
    const rect = section.getBoundingClientRect();
    const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
    const progress = index / curiousProblems.length;
    const target = window.scrollY + rect.top + scrollDistance * progress;

    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const activeProblem = curiousProblems[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="curious"
      className="relative h-[600svh] border-b border-[var(--line)] bg-[#0A0A0A]"
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-10 md:py-16">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-6 md:pb-8 mb-5 md:mb-8">
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
              SCROLL OR SELECT A PHASE →
            </div>
          </div>
        </div>

        {/* Clickable six-phase selector */}
        <div
          role="tablist"
          aria-label="Problem diagnosis phases"
          className="grid grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mb-5 md:mb-8"
        >
          {curiousProblems.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="curious-active-panel"
                onClick={() => selectPhase(idx)}
                className={`curious-phase min-h-14 md:min-h-16 rounded-xs border p-3 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                  isActive
                    ? "curious-phase-active shadow-lg"
                    : "hover:-translate-y-0.5"
                }`}
              >
                <span className="curious-phase-label block font-mono text-[10px] md:text-xs font-black uppercase tracking-wider mb-1">
                  Phase 0{idx + 1}
                </span>
                <span className="block text-[11px] md:text-sm font-extrabold uppercase leading-tight line-clamp-2">
                  {phaseLabels[idx]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active phase stage */}
        <article
          id="curious-active-panel"
          role="tabpanel"
          key={activeProblem.id}
          className="curious-card grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] rounded-xs border p-5 md:p-8 lg:p-10"
        >
          <div className="flex flex-col justify-between lg:pr-10">
            <div>
              <span className="font-mono text-xs font-bold text-[var(--accent)]">
                PROBLEM // 0{activeIndex + 1}
              </span>
              <h3 className="mt-3 max-w-2xl text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#F5F5F2]">
                &ldquo;{activeProblem.problem}&rdquo;
              </h3>
            </div>
            <Link
              href={activeProblem.targetHref}
              className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] hover:underline"
            >
              <span>{activeProblem.ctaText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="curious-resolution mt-6 lg:mt-0 rounded-xs border p-5 md:p-6">
            <span className="text-[10px] font-mono uppercase text-[var(--accent)] block mb-2">
              NERDVANA RESOLUTION
            </span>
            <p className="text-base md:text-lg font-bold text-[#F5F5F2] flex items-start gap-2">
              <ArrowRight className="mt-0.5 w-4 h-4 text-[var(--accent)] shrink-0" />
              <span>{activeProblem.solution}</span>
            </p>
            <span className="text-[11px] font-mono text-[#F5F5F2]/72 mt-3 block">
              Powered by {activeProblem.capability}
            </span>
            <span className="mt-6 block text-[10px] font-mono uppercase tracking-wider text-[#F5F5F2]/50">
              {activeProblem.division}
            </span>
          </div>
        </article>
        </div>
      </div>
    </section>
  );
}
