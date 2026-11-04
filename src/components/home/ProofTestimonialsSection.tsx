"use client";

import React, { KeyboardEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { projects } from "@/lib/cms/data";
import { MaskReveal } from "@/components/ui/MotionEffects";

export default function ProofTestimonialsSection() {
  const proofProjects = projects
    .filter((project) => project.featured && project.testimonial)
    .sort((a, b) => a.order - b.order);
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? proofProjects.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === proofProjects.length - 1 ? 0 : current + 1,
    );
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  const project = proofProjects[activeIndex];

  if (!project?.testimonial) {
    return null;
  }

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
<div className="flex items-center gap-3">
            <span className="mr-2 font-mono text-xs text-[var(--muted)]">
              {String(activeIndex + 1).padStart(2, "0")} / {String(proofProjects.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous client proof"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next client proof"
              className="flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <article
          key={project.id}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-live="polite"
          className="mx-auto max-w-5xl rounded-xs border border-[var(--line)] bg-[var(--surface)] p-7 md:p-10 lg:p-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          <div className="flex items-center justify-between gap-4 pb-5 border-b border-[var(--line)]">
            <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[var(--muted)]">
              {project.division}
            </span>
            <span className="text-[10px] font-mono text-[var(--muted)]">{project.year}</span>
          </div>

          <div className="pt-8">
            <Quote className="mb-5 size-10 text-[var(--accent)]/40" />
            <blockquote className="max-w-4xl text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>

            <p className="mt-6 text-xs md:text-sm font-mono uppercase tracking-wider text-[var(--muted)]">
              {project.testimonial.author} â€” {project.testimonial.role}
            </p>

            {/* <div className="mt-10 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)] sm:max-w-2xl">
              {project.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label} className="bg-[#0A0A0A] p-4 md:p-5">
                  <span className="block text-2xl md:text-3xl font-black font-mono text-[var(--accent)]">
                    {metric.value}
                  </span>
                  <span className="mt-1 block text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-[var(--muted)]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div> */}
          </div>
        </article>
      </div>
    </section>
  );
}
