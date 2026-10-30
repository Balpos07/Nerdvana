"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/cms/data";

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const length = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const item = testimonials[current];

  return (
    <section
      className="py-24 md:py-36 bg-[var(--surface)] border-b border-[var(--line)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[var(--line)]">
          <div>
            <span className="section-label block mb-3">07 // CLIENT REFLECTIONS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
              Client Reflections
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--muted)] tracking-wider">
              {String(current + 1).padStart(2, "0")} / {String(length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Stage */}
        <div className="py-16 md:py-20 min-h-[360px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col gap-10"
            >
              <Quote className="w-12 h-12 text-[var(--accent)]/40 shrink-0" />
              
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--fg)] leading-snug">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--line)]">
                <span className="text-2xl" role="img" aria-label="country flag">
                  {item.countryFlag}
                </span>
                <div>
                  <h3 className="font-extrabold uppercase text-base tracking-tight text-[var(--fg)]">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-[var(--line)] mt-6">
          <motion.div
            className="h-full bg-[var(--accent)]"
            animate={{ width: `${((current + 1) / length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}

