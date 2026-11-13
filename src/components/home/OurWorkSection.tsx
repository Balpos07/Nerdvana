"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/cms/data";
import { CardReveal, LineReveal, Magnetic, MaskReveal } from "@/components/ui/MotionEffects";
import { SharedCaseImage, SharedCaseTitle } from "@/components/ui/SharedCaseElement";

export default function OurWorkSection() {
  const [filter, setFilter] = useState<string>("All");

  const filterTabs = ["All", "Technology", "Branding", "Web", "Marketing", "Creative"];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter || p.division.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="work" className="py-12 md:py-20 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-6 md:pb-8 md:mb-8">
          <span className="section-label block mb-3 text-[var(--accent)]">
            03 // PORTFOLIO
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <MaskReveal>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                  <LineReveal text="Our Work" />
                </h2>
                <p className="text-sm md:text-base text-[var(--muted)] mt-2">
                  Selected technology, brand, web and growth engagements spanning connected digital experiences.
                </p>
              </MaskReveal>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
            >
              <span>View All Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-12">
          {filterTabs.map((tab) => (
            <Magnetic key={tab} strength={10}>
              <button
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 ${
                  filter === tab
                    ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-sm"
                    : "border border-[var(--line)] text-[var(--muted)] hover:border-[var(--fg)]/40 hover:text-[var(--fg)]"
                }`}
              >
                {tab}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence>
            {filtered.map((proj) => (
              <CardReveal key={proj.id} delay={0.08} className="h-full">
              <motion.article
                layout
                key={proj.id}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group h-full flex flex-col justify-between border border-[var(--line)] p-6 md:p-8 rounded-xs bg-[var(--surface)] hover:border-[var(--accent)]/50 transition-all"
              >
                <div>
                  {/* Visual */}
                  <Magnetic className="block w-full">
                  <Link
                    href={`/work/${proj.slug}`}
                    className="block relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-[var(--line)] mb-6 bg-[var(--bg)]"
                    data-cursor-text="VIEW"
                  >
                    <SharedCaseImage slug={proj.slug} className="absolute inset-0">
                      <Image
                        src={proj.coverImage}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover filter grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </SharedCaseImage>
                    <div className="absolute top-3 left-3 bg-[#0A0A0A]/85 backdrop-blur-xs px-3 py-1 rounded-full text-[10px] font-mono text-[var(--accent)] font-bold uppercase border border-[var(--line)]">
                      {proj.division}
                    </div>
                  </Link>
                  </Magnetic>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
                    <span className="text-[var(--fg)] font-bold">{proj.client}</span>
                    <span>{proj.industry} • {proj.year}</span>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-2">
                    <Link href={`/work/${proj.slug}`}>
                      <SharedCaseTitle slug={proj.slug}>{proj.title}</SharedCaseTitle>
                    </Link>
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-6">
                    {proj.summary}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-[var(--line)] mb-6">
                    {proj.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xl font-mono font-black text-[var(--accent)]">
                          {m.value}
                        </span>
                        <span className="text-[10px] font-mono uppercase text-[var(--muted)]">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.services.slice(0, 2).map((svc) => (
                      <span
                        key={svc}
                        className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[var(--card-bg)] text-[var(--muted)] border border-[var(--line)]"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${proj.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--accent)] hover:underline"
                  >
                    <span>Read Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
              </CardReveal>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
