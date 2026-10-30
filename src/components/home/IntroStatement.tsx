"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"],
  });

  const statement =
    "We merge radical creative direction with surgical engineering to forge digital flagships that command cultural relevance and convert.";
  const words = statement.split(" ");

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-36 border-t border-[var(--line)] bg-[var(--bg)]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column Label */}
          <div className="md:col-span-3">
            <span className="section-label block mb-2">01 // PHILOSOPHY</span>
            <p className="text-xs font-mono text-[var(--muted)]">RADICAL CLARITY</p>
          </div>

          {/* Right Column Statement + Narrative */}
          <div className="md:col-span-9 flex flex-col gap-10">
            {/* Scroll-Revealed Big Statement */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight flex flex-wrap gap-x-3 gap-y-1">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
                return (
                  <motion.span
                    key={i}
                    style={{ opacity }}
                    className="inline-block transition-opacity duration-150"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h2>

            {/* Supporting Paragraph */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[var(--line)]">
              <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">
                Too much digital design today is interchangeable—subordinated to generic templates and superficial trends. We take the opposing path: ruthless reduction, bespoke typographic hierarchy, and engineering rigor that respects the intelligence of modern buyers.
              </p>
              <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">
                Operating directly from our twin studios in New York and Lagos, we embed deeply with founding teams. Strategy is never treated as a passive presentation deck, but as a live architectural compass guiding every token, shader, and sentence we commit to production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

