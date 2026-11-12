import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages — Nerdvana",
  description: "Nerdvana packages are being prepared.",
};

export default function PackagesPage() {
  const packageRequirements = [
    "Package name and short positioning",
    "Ideal client and use case",
    "What is included in the engagement",
    "Starting price or pricing structure",
    "Optional add-ons and scalability options",
    "Clear CTA for custom scope or discovery call",
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <span className="section-label block mb-3 text-[var(--accent)]">
          PACKAGES // OFFERINGS
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
          Packages
        </h1>
        <p className="mt-4 max-w-3xl text-sm md:text-base text-[var(--muted)]">
          Package names, pricing, scope, and add-ons are still awaiting final client approval. Until then, the page is structured around the PRD requirement for transparent, conversion-friendly package cards.
        </p>

        <div className="mt-12 rounded-xs border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
            Required package structure
          </p>
          <ul className="space-y-3 text-sm md:text-base text-[var(--muted)]">
            {packageRequirements.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
