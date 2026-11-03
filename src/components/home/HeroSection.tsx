"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import { motion, useScroll, useTransform } from "framer-motion";
=======
>>>>>>> 00433f0ce0e32820a32cd4e9c83b61e11fd3cf89
import { ArrowUpRight } from "lucide-react";
import { heroProjects, siteSettings } from "@/lib/cms/data";
import { Magnetic, ParallaxMedia } from "@/components/ui/MotionEffects";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-end overflow-hidden bg-[var(--bg)]"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12">
<<<<<<< HEAD
        {/* Giant Uppercase Brand Wordmark */}
        <div className="w-full border-b border-[var(--line)] pb-6 md:pb-10 overflow-hidden">
          <div className="wordmark-footer wordmark-footer--animated flex justify-between items-center text-center overflow-hidden">
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
                whileHover={{
                  y: "-0.035em",
                  rotate: index % 2 === 0 ? -2 : 2,
                  color: "var(--accent)",
                  transition: { duration: 0.25 },
                }}
                className="wordmark-brand-inline wordmark-hero--animated inline-block origin-bottom select-none"
              >
                {char}
              </motion.span>
            ))}
=======
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 pb-10 border-b border-[var(--line)]">
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="section-label text-[var(--fg)]">Independent studio / 01</span>
              <p className="mt-4 max-w-[14rem] text-sm leading-6 text-[var(--muted)]">
                {siteSettings.tagline}
              </p>
            </div>
            <div className="hidden lg:block mt-16 text-xs font-mono uppercase tracking-[0.16em] text-[var(--muted)]">
              New York / Lagos
            </div>
>>>>>>> 00433f0ce0e32820a32cd4e9c83b61e11fd3cf89
          </div>

          <div className="col-span-12 lg:col-span-9">
            <p className="mb-5 text-xs font-mono uppercase tracking-[0.18em] text-[var(--muted)]">
              Strategy / Technology / Creative
            </p>
            <h1 className="max-w-[1100px] text-[clamp(3.25rem,7.5vw,8.25rem)] leading-[0.86] font-semibold tracking-[-0.065em] text-[var(--fg)]">
              We build what moves business forward.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 pt-7 items-end">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <p className="max-w-md text-base md:text-lg leading-7 text-[var(--muted)]">
              {siteSettings.coreBrandStatement}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-3 border-b border-[var(--fg)] pb-1.5 text-sm font-bold text-[var(--fg)] hover:text-[var(--accent-hover)] hover:border-[var(--accent-hover)] transition-colors"
                data-cursor-text="START"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
              >
                Selected work
              </Link>
            </div>
          </div>

<<<<<<< HEAD
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 pt-2">
            {/* Primary CTA: Get Started */}
            <Magnetic>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-black text-xs uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all shadow-lg group"
              data-cursor-text="START"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            </Magnetic>

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
              <Magnetic className="w-full">
=======
          <div className="hidden md:grid col-span-7 lg:col-start-6 col-end-13 grid-cols-4 gap-3 lg:gap-4">
            {heroProjects.map((project, idx) => (
>>>>>>> 00433f0ce0e32820a32cd4e9c83b61e11fd3cf89
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className={`group relative aspect-[4/5] overflow-hidden bg-[var(--surface-raised)] ${idx % 2 ? "mt-8" : ""}`}
                data-cursor-text="VIEW"
              >
<<<<<<< HEAD
                <ParallaxMedia
                  className="absolute inset-0"
                  backgroundSpeed={0.3}
                  foreground={
                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex flex-col justify-end text-white">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent -z-10" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] mb-1">
                        {project.division}
                      </span>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm md:text-base font-bold tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-[11px] text-white/60">
                            {project.category}
                          </p>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[var(--accent)] text-[#0A0A0A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  }
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[25%] group-hover:grayscale-0"
                    priority={idx < 2}
                  />
                </ParallaxMedia>
              </Link>
              </Magnetic>
            </motion.div>
          ))}
=======
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 25vw, 18vw"
                  className="object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={idx < 2}
                />
                <div className="absolute inset-x-0 bottom-0 p-3 pt-12 bg-gradient-to-t from-black/75 to-transparent text-white">
                  <p className="text-[9px] font-mono uppercase tracking-[0.12em] text-white/65">
                    {project.division}
                  </p>
                  <h2 className="mt-1 text-xs font-semibold tracking-tight">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
>>>>>>> 00433f0ce0e32820a32cd4e9c83b61e11fd3cf89
        </div>
      </div>
    </section>
  );
}
