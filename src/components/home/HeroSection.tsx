"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
<div className="grid grid-cols-12 gap-x-6 gap-y-8 pb-10 border-b border-[var(--line)]">
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-between">
            <div>
              <span className="section-label text-[var(--fg)]">Independent studio / 01</span>
              <p className="mt-4 max-w-[14rem] text-sm leading-6 text-[var(--muted)]">
                {siteSettings.tagline}
              </p>
            </div>
            <div className="hidden lg:block mt-16 text-xs font-mono uppercase tracking-[0.16em] text-[var(--muted)]">
              Lagos
            </div>
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

<div className="hidden md:grid col-span-7 lg:col-start-6 col-end-13 grid-cols-4 gap-3 lg:gap-4">
            {heroProjects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className={`group relative aspect-[4/5] overflow-hidden bg-[var(--surface-raised)] ${idx % 2 ? "mt-8" : ""}`}
                data-cursor-text="VIEW"
              >
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
        </div>
      </div>
    </section>
  );
}
