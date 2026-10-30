"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function RollingCounter({ value, suffix = "", duration = 1.6 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Exponential out easing
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * value);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono font-black tabular-nums tracking-tight">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function InNumbersSection() {
  const stats = [
    {
      number: siteSettings.stats.awards,
      suffix: "+",
      title: "Global Design Accolades",
      description:
        "Recognized by Awwwards, FWA, Red Dot, and Type Directors Club for pushing the outer boundaries of browser craft and typographic authority.",
      image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85",
      linkText: "View Our Awards",
      href: "#awards",
    },
    {
      number: siteSettings.stats.clients,
      suffix: "+",
      title: "Founders & Brands Worldwide",
      description:
        "Partnering with venture-backed scaleups and visionary global enterprises spanning New York, London, Zurich, Lagos, and Singapore.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85",
      linkText: "Meet Our Partners",
      href: "#clients",
    },
    {
      number: siteSettings.stats.projects,
      suffix: "+",
      title: "Completed Projects Shipped",
      description:
        "Flawlessly engineered digital flagships, dynamic brand identities, and high-conversion software platforms deployed to production.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=85",
      linkText: "Explore Project Index",
      href: "/work",
    },
  ];

  return (
    <section id="numbers" className="py-24 md:py-36 bg-[var(--surface)] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[var(--line)]">
          <div>
            <span className="section-label block mb-3">03 // TRACK RECORD</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
              In Numbers
            </h2>
            <p className="text-sm md:text-base text-[var(--muted)] max-w-lg mt-3">
              A decade of ruthless execution measured by commercial impact, international trophies, and loyal founder relationships.
            </p>
          </div>

          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full border border-[var(--fg)] text-[var(--fg)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all shadow-sm"
          >
            <span>Let&apos;s work together</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-16">
          {stats.map((stat, i) => (
            <div
              key={stat.title}
              className="flex flex-col justify-between group border border-[var(--line)] p-6 md:p-8 rounded-sm bg-[var(--bg)]/50 hover:border-[var(--accent)]/50 transition-colors"
            >
              <div>
                {/* Animated Stat Value */}
                <div className="text-5xl lg:text-6xl text-[var(--accent)] mb-4">
                  <RollingCounter value={stat.number} suffix={stat.suffix} />
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--fg)] mb-3">
                  {stat.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {stat.description}
                </p>
              </div>

              <div>
                {/* Supporting Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs mb-6 border border-[var(--line)] bg-[var(--surface)]">
                  <Image
                    src={stat.image}
                    alt={stat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <Link
                  href={stat.href}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors"
                >
                  <span>{stat.linkText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

