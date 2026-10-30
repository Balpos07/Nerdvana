"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { heroProjects, siteSettings } from "@/lib/cms/data";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yOffsets = [y1, y2, y3, y4];

  const letters = siteSettings.agencyName.split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 md:pt-36 pb-20 flex flex-col justify-between overflow-hidden bg-[#0A0A0A]"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12">
        {/* Giant Uppercase Brand Wordmark */}
        <div className="w-full border-b border-[var(--line)] pb-6 md:pb-10 overflow-hidden">
          <div className="flex justify-between items-center text-center">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.04,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="wordmark-hero inline-block font-black select-none text-[#F5F5F2] hover:text-[var(--accent)] transition-colors duration-500"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Hero Copy & Core Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 pb-14 items-start border-b border-[var(--line)]">
          <div className="lg:col-span-3">
            <span className="section-label block mb-2 text-[var(--accent)]">
              GLOBAL AGENCY // V2.0
            </span>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              {siteSettings.tagline}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight">
              {siteSettings.heroHeadline}
            </h1>
            <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">
              {siteSettings.coreBrandStatement}
            </p>
          </div>

          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 pt-2">
            {/* Primary CTA: Get Started */}
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-black text-xs uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all shadow-lg group"
              data-cursor-text="START"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Secondary CTA: Explore Our Work */}
            <Link
              href="#work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Portrait Showcase Cards (3:4 Ratio) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10">
          {heroProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              style={{ y: yOffsets[idx] }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2 + idx * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group relative"
            >
              <Link
                href={`/work/${project.slug}`}
                className="block relative aspect-[3/4] w-full overflow-hidden rounded-xs bg-[#121212] border border-[var(--line)]"
                data-cursor-text="VIEW"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[25%] group-hover:grayscale-0"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] mb-1">
                    {project.division}
                  </span>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm md:text-base font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-[11px] text-[var(--muted)]">
                        {project.category}
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[var(--accent)] text-[#0A0A0A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
