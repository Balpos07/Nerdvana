"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { heroProjects, siteSettings } from "@/lib/cms/data";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax offsets for the 4 portrait columns
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yOffsets = [y1, y2, y3, y4];

  const letters = siteSettings.agencyName.split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 md:pt-36 pb-20 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12">
        {/* Giant Full-Width Uppercase Wordmark */}
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
                className="wordmark-hero inline-block font-black select-none text-[var(--fg)] hover:text-[var(--accent)] transition-colors duration-500"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Agency Descriptor & Meta Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 pb-12 items-baseline">
          <div className="md:col-span-3">
            <span className="section-label">CREATIVE ENGINEERING // 2026</span>
          </div>
          <div className="md:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-normal leading-relaxed text-[var(--fg)]"
            >
              {siteSettings.descriptor}
            </motion.p>
          </div>
          <div className="md:col-span-3 flex justify-start md:justify-end items-center gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
              data-cursor-text="VIEW"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Four Tall Portrait Project Images (3:4) in Staggered Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-4">
          {heroProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              style={{ y: yOffsets[idx] }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.3 + idx * 0.12,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group relative"
            >
              <Link
                href={`/work/${project.slug}`}
                className="block relative aspect-[3/4] w-full overflow-hidden rounded-xs bg-[var(--surface)] border border-[var(--line)]"
                data-cursor-text="VIEW"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0 brightness-95 group-hover:brightness-105"
                  priority={idx < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Overlay Project Details */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-70 mb-1">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-base font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
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

