"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, MessageSquare } from "lucide-react";
import { faqCategories } from "@/lib/cms/data";

export default function QuestionsAnsweredSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = [
    "All",
    "About Nerdvana",
    "Services",
    "Projects",
    "Packages",
    "Working With Nerdvana",
  ];

  const filtered =
    selectedCategory === "All"
      ? faqCategories
      : faqCategories.filter((f) => f.category === selectedCategory);

  return (
    <section id="faq" className="py-12 md:py-20 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-6 md:pb-8 md:mb-8">
          <span className="section-label block mb-3 text-[var(--accent)]">
            09 // TRANSPARENCY
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                Questions Answered
              </h2>
              <p className="text-sm md:text-base text-[var(--muted)] max-w-lg mt-2">
                Clear answers regarding our technology stack, creative process, package scopes, and engagement model.
              </p>
            </div>

            {/* Ask Your Question CTA */}
            <Link
              href="/contacts?intent=faq-question"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--line)] hover:border-[var(--accent)] text-xs font-mono font-bold uppercase text-[var(--fg)] hover:text-[var(--accent)] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask Your Question</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pb-8 md:pb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIdx(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                selectedCategory === cat
                  ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-xs"
                  : "border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--fg)]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {filtered.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.question} className="py-5 md:py-8">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="pr-6">
                    <span className="text-[10px] font-mono uppercase text-[var(--accent)] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {item.question}
                    </h3>
                  </div>

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
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed pt-4 pr-12 max-w-3xl">
                        {item.answer}
                      </p>
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
