"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function ProofTestimonialsSection() {
  return (
    <section className="py-24 md:py-36 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="section-label block mb-3 text-[var(--accent)]">
              08 // PROOF & REPUTATION
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
              Proof & Results
            </h2>
            <p className="text-sm md:text-base text-[var(--muted)] mt-2">
              Don&apos;t just take our word for it. Real commercial outcomes from venture-backed leaders.
            </p>
          </div>

          <span className="font-mono text-xs text-[var(--muted)]">AWAITING VERIFIED CLIENT PROOF</span>
        </div>

        {/* Testimonial Quote Stage */}
        <div className="p-8 md:p-14 rounded-xs border-2 border-dashed border-[var(--line)] bg-[var(--surface)]">
          <Quote className="w-10 h-10 text-[var(--accent)]/40 mb-6" />
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-5">
            [Placeholder: replace with real client proof]
          </p>
          <p className="text-sm md:text-base text-[var(--muted)] max-w-2xl">
            Add a verified client quote, attribution, and outcome here only after approval to publish is confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}
