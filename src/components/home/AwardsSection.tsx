"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { awards } from "@/lib/cms/data";

export default function AwardsSection() {
  return (
    <section id="awards" className="py-24 md:py-36 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading + Featured Image + Link */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="section-label block mb-3">04 // RECOGNITION</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--fg)] mb-6">
                Our Awards
              </h2>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
                Peer validation from the highest design juries on earth. We measure success by real client growth first, but global trophies keep our craft razor-sharp.
              </p>

              {/* Supporting Editorial Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-[var(--line)] mb-8 bg-[var(--surface)]">
                <Image
                  src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=85"
                  alt="Craft and Accolades"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--fg)] hover:text-[var(--accent)] transition-colors group"
            >
              <Trophy className="w-4 h-4 text-[var(--accent)]" />
              <span>Explore Award-Winning Case Studies</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Table-style list */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {awards.map((award) => (
                <div
                  key={award.id}
                  className="py-6 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[var(--card-bg)] transition-all cursor-default"
                >
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                        {award.name}
                      </h3>
                      <span className="font-mono text-xs font-extrabold text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full">
                        {award.count}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-[var(--muted)] mt-1">
                      {award.category}
                    </p>
                  </div>

                  <div className="font-mono text-xs text-[var(--muted)] sm:text-right shrink-0">
                    {award.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

