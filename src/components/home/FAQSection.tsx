"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { faqItems } from "@/lib/cms/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-36 bg-[var(--surface)] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="section-label block mb-3">11 // CLARITY</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--fg)] mb-6">
                Questions, answered.
              </h2>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
                Everything you need to know about our engagement structure, sprint cadences, and design engineering principles.
              </p>
            </div>

            <div>
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--fg)] hover:text-[var(--accent)] transition-colors group"
              >
                <span>Learn more about our studio philosophy</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.id} className="py-6 md:py-8">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors pr-6">
                      {item.question}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[var(--line)] flex items-center justify-center shrink-0 text-[var(--fg)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed pt-4 pr-12">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Closing Line with CTA */}
            <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-sm text-[var(--muted)]">
                Have a unique challenge not covered here?
              </span>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--fg)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--fg)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all"
              >
                <span>Ask a question</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

