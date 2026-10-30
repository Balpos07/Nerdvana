"use client";

import React, { useState } from "react";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";

export default function ProofTestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      quote:
        "Nerdvana solved what two prior agencies couldn't. Their engineering team modernized our cloud infrastructure while Figures gave us an iconic brand identity. Our international revenue doubled within 90 days.",
      author: "Elena Rostova",
      role: "CEO & Co-Founder",
      company: "Aura Intelligence",
      country: "United States",
      stat: "+142% Conversion",
    },
    {
      quote:
        "Having technology and branding under one roof saved us at least four months of coordination overhead. The level of craft and architectural rigor they brought to Vesper was extraordinary.",
      author: "Julian Meier",
      role: "Head of Product",
      company: "Vesper Audio Zurich",
      country: "Switzerland",
      stat: "85K Active Users",
    },
    {
      quote:
        "Nerdvana Technologies built our core validation infrastructure with 99.99% uptime and zero security compromises. They are rare engineers who truly understand commercial scale.",
      author: "Dr. Kemi Adeleke",
      role: "Founding Researcher",
      company: "Nerve Protocol",
      country: "Nigeria",
      stat: "$1.8B Value Secured",
    },
  ];

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[current];

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

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--muted)]">
              0{current + 1} / 0{testimonials.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="Previous proof"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                aria-label="Next proof"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Quote Stage */}
        <div className="p-8 md:p-14 rounded-xs border border-[var(--line)] bg-[var(--surface)]">
          <Quote className="w-10 h-10 text-[var(--accent)]/40 mb-6" />

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-8">
            &ldquo;{item.quote}&rdquo;
          </blockquote>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[var(--line)]">
            <div>
              <h4 className="text-base font-extrabold uppercase text-[var(--fg)]">
                {item.author}
              </h4>
              <p className="text-xs font-mono text-[var(--muted)]">
                {item.role} • {item.company} ({item.country})
              </p>
            </div>

            <div className="px-4 py-2 rounded-xs border border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-xs font-black uppercase">
              VERIFIED IMPACT: {item.stat}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

