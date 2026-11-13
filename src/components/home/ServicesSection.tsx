"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Plus, Minus } from "lucide-react";
import { serviceDivisions } from "@/lib/cms/data";

export default function ServicesSection() {
  const [activeDivisionIdx, setActiveDivisionIdx] = useState(0);
  const [expandedServiceIdx, setExpandedServiceIdx] = useState<number | null>(0);

  const activeDivision = serviceDivisions[activeDivisionIdx];

  return (
    <section id="services" className="py-12 md:py-20 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-6 md:pb-8 md:mb-8">
          <span className="section-label block mb-3 text-[var(--accent)]">
            02 // BUSINESS ARCHITECTURE
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                Our Services
              </h2>
              <p className="text-sm md:text-base text-[var(--muted)] max-w-xl mt-3">
                Two dedicated divisions united under one roof. Technology gives us the structure; creativity gives us the personality.
              </p>
            </div>

            {/* Division Switcher Buttons */}
            <div className="grid w-full grid-cols-2 items-center gap-1 p-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] sm:w-auto">
              {serviceDivisions.map((div, idx) => {
                const isActive = activeDivisionIdx === idx;
                return (
                  <button
                    key={div.name}
                    onClick={() => {
                      setActiveDivisionIdx(idx);
                      setExpandedServiceIdx(0);
                    }}
                    className={`flex min-w-0 items-center justify-center gap-2 px-2 py-2.5 rounded-full text-[9px] sm:px-5 sm:text-xs font-mono font-bold uppercase leading-tight text-center transition-all duration-300 ${
                      isActive
                        ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-md"
                        : "text-[var(--muted)] hover:text-[var(--fg)]"
                    }`}
                  >
                    {/* {isTech ? <Cpu className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />} */}
                    <span>{div.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Division Meta Banner */}
        <div className="p-5 md:p-8 rounded-xs border border-[var(--line)] bg-[var(--surface)] mb-8 md:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
          <div>
            <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-mono font-bold uppercase mb-2">
              <span>ACTIVE DIVISION</span>
              <span>•</span>
              <span>{activeDivision.name}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)]">
              {activeDivision.tagline}
            </h3>
            <p className="text-xs md:text-sm text-[var(--muted)] max-w-2xl mt-2 leading-relaxed">
              {activeDivision.description}
            </p>
          </div>

          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[#0A0A0A] font-bold text-xs uppercase tracking-wider transition-all shrink-0"
          >
            <span>Consult This Division</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Stacked Services Accordion */}
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {activeDivision.services.map((service, index) => {
            const isOpen = expandedServiceIdx === index;
            return (
              <div
                key={service.title}
                className={`py-6 md:py-8 px-4 md:px-8 transition-colors duration-300 ${
                  isOpen ? "bg-[var(--card-bg)] rounded-xs" : "hover:bg-[var(--card-bg)]/40"
                }`}
              >
                <button
                  onClick={() => setExpandedServiceIdx(isOpen ? null : index)}
                  className="w-full flex items-start justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 md:gap-8">
                    <span className="font-mono text-sm font-bold text-[var(--accent)] pt-1">
                      {`0${index + 1} //`}
                    </span>
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--muted)] mt-1.5 max-w-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--fg)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-all">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 md:pt-8 pb-4 pl-8 md:pl-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[var(--line)]">
                          {/* Capabilities */}
                          <div>
                            <span className="section-label block mb-3 text-[var(--accent)]">
                              CAPABILITIES & SCOPE
                            </span>
                            <ul className="space-y-2.5">
                              {service.capabilities.map((cap, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2.5 text-xs md:text-sm text-[var(--fg)]"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                                  <span>{cap}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Deliverables */}
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
                                  <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-[var(--line)] flex justify-end">
                          <Link
                            href={`/contacts?service=${encodeURIComponent(service.title)}`}
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:underline"
                          >
                            <span>Request brief for {service.title}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
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
    </section>
  );
}
