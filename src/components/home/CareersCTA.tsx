"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CareersCTA() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 md:p-14 border border-[var(--line)] rounded-sm bg-[var(--surface)]">
          <div className="max-w-2xl">
            <span className="section-label block mb-2 text-[var(--accent)]">
              JOIN OUR FELLOWSHIP // CAREERS
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--fg)]">
              Do you feel ready to become part of our growing team?
            </h3>
            <p className="text-sm text-[var(--muted)] mt-2">
              We are perpetually scouting for world-class design systems architects, WebGL developers, and brand directors.
            </p>
          </div>

          <Link
            href="/studio#career"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--fg)] text-[var(--bg)] font-bold uppercase tracking-wider text-xs hover:bg-[var(--accent)] hover:text-white transition-all shadow-md group shrink-0"
            data-cursor-text="JOIN"
          >
            <span>Join Us</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

