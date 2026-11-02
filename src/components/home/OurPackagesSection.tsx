"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowUpRight, Sparkles, Plus } from "lucide-react";
import { packages } from "@/lib/cms/data";

export default function OurPackagesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Branding",
    "Website / Digital Presence",
    "Technology",
    "Marketing & Growth",
    "Custom Solutions",
  ];

  const filteredPackages =
    selectedCategory === "All"
      ? packages
      : packages.filter((p) => p.category === selectedCategory);

  return (
    <section id="packages" className="py-24 md:py-36 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-12">
          <span className="section-label block mb-3 text-[var(--accent)]">
            04 // PACKAGED OFFERINGS
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
                Our Packages
              </h2>
              <p className="text-sm md:text-base text-[var(--muted)] max-w-lg mt-3">
                Transparent, high-velocity scopes designed to eliminate ambiguity. Understand what you can buy, what is included, and who it is built for.
              </p>
            </div>

            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] hover:underline"
            >
              <span>Build Custom Scope</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-4 p-4 rounded-xs border border-dashed border-[var(--line)] bg-[var(--surface)] text-xs font-mono text-[var(--muted)]">
          SAMPLE DATA — Package names, scope, inclusions, add-ons and prices are not final. Replace all sample commercial terms before launch.
        </div>
        <div className="flex flex-wrap items-center gap-2 pb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                selectedCategory === cat
                  ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-sm"
                  : "border border-[var(--line)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--fg)]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between p-8 md:p-10 rounded-xs border transition-all duration-300 ${
                pkg.featured
                  ? "border-[var(--accent)] bg-[var(--surface-raised)] shadow-2xl"
                  : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--fg)]/30"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] text-[10px] font-mono font-black uppercase tracking-wider">
                  {/* <Sparkles className="w-3 h-3" /> */}
                  <span>RECOMMENDED</span>
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block mb-2">
                  {pkg.category}
                </span>

                <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--fg)] mb-2">
                  {pkg.name}
                </h3>

                <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                  {pkg.shortDescription}
                </p>

                {/* Price Display */}
                <div className="pt-4 pb-6 border-y border-[var(--line)] mb-6">
                  <span className="text-[10px] font-mono uppercase text-[var(--muted)] block">
                    STARTING FROM
                  </span>
                  <div className="text-3xl md:text-4xl font-mono font-black text-[var(--fg)] mt-1">
                    SAMPLE {pkg.startingPrice}
                  </div>
                  <p className="text-[11px] font-mono text-[var(--muted)] mt-2">
                    <strong className="text-[var(--fg)]">Ideal for:</strong> {pkg.idealFor}
                  </p>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <span className="section-label block mb-3 text-[var(--accent)]">
                    WHAT&apos;S INCLUDED
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.whatsIncluded.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--fg)] leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Add-ons */}
                {pkg.optionalAddons.length > 0 && (
                  <div className="pt-4 border-t border-[var(--line)] mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--muted)] block mb-2">
                      OPTIONAL ADD-ONS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.optionalAddons.map((addon) => (
                        <span
                          key={addon}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[var(--card-bg)] text-[var(--muted)] border border-[var(--line)]"
                        >
                          + {addon}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card CTA */}
              <div className="pt-6 border-t border-[var(--line)]">
                <Link
                  href={`/contacts?package=${encodeURIComponent(pkg.name)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all ${
                    pkg.featured
                      ? "bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent-hover)] shadow-md"
                      : "bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-[#0A0A0A]"
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-16 p-8 border border-[var(--line)] bg-[var(--surface)] rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold uppercase tracking-tight text-[var(--fg)]">
              Need something more specific?
            </h4>
            <p className="text-xs md:text-sm text-[var(--muted)] mt-1">
              We can engineer a custom cross-disciplinary solution tailored to your exact stack, sprint cadence, and milestones.
            </p>
          </div>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--fg)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--fg)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0A0A0A] transition-all shrink-0"
          >
            <span>Request Custom Solution</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
