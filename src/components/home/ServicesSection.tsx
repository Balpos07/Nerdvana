"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus, Minus, Check } from "lucide-react";
import { services } from "@/lib/cms/data";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <section className="py-24 md:py-36 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky Left Column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 flex flex-col justify-between">
              <div>
                <span className="section-label block mb-3">02 // CAPABILITIES</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--fg)] mb-6">
                  Our Services
                </h2>
                <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
                  We don&apos;t offer fragmented services. We operate as your dedicated design and engineering strike team, executing comprehensive brand and digital transformations.
                </p>
              </div>

              <div>
                <Link
                  href="/contacts"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[var(--fg)] text-[var(--bg)] font-bold text-xs uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-md group"
                  data-cursor-text="START"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Service Rows (A /, B /, C /, D /) */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-[var(--line)]">
            {services.map((service, index) => {
              const isOpen = activeService === index;
              return (
                <div
                  key={service.title}
                  className={`py-8 md:py-10 transition-colors duration-300 ${
                    isOpen ? "bg-[var(--card-bg)] px-4 md:px-6 rounded-lg" : "hover:px-2"
                  }`}
                >
                  <button
                    onClick={() => toggleService(index)}
                    className="w-full flex items-start justify-between text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4 md:gap-8">
                      <span className="font-mono text-sm md:text-base font-bold text-[var(--accent)] pt-1">
                        {service.letter}
                      </span>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-[var(--muted)] mt-2 max-w-xl">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--fg)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Content with sub-services and deliverables */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 pb-4 pl-8 md:pl-16">
                          <p className="text-sm md:text-base text-[var(--fg)] leading-relaxed max-w-2xl mb-8">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[var(--line)]">
                            {/* Sub-services list */}
                            <div>
                              <span className="section-label block mb-3 text-[var(--accent)]">
                                CORE DISCIPLINES
                              </span>
                              <ul className="space-y-2.5">
                                {service.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2.5 text-xs md:text-sm text-[var(--fg)]"
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Tangible deliverables */}
                            <div>
                              <span className="section-label block mb-3 text-[var(--accent)]">
                                PRODUCTION DELIVERABLES
                              </span>
                              <ul className="space-y-2.5">
                                {service.deliverables.map((del, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2 text-xs md:text-sm text-[var(--muted)]"
                                  >
                                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                    <span>{del}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

