import React from "react";
import type { Metadata } from "next";
import OurWorkSection from "@/components/home/OurWorkSection";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Our Work — Portfolio & Case Studies",
  description:
    "Explore case studies from Nerdvana Technologies and Figures by Nerdvana spanning AI, cloud infrastructure, visual identities, and digital flagships.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="border-b border-[var(--line)] pb-12 mb-12">
          <span className="section-label block mb-3 text-[var(--accent)]">
            PORTFOLIO // CASE STUDIES
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)]">
              Our Work
            </h1>
            <p className="text-sm md:text-base text-[var(--muted)] max-w-md">
              Work we&apos;re proud of. Real software engineering, resilient cloud architectures, and iconic digital flagships built from our New York and Lagos studios.
            </p>
          </div>
        </div>

        <OurWorkSection />
      </div>
    </div>
  );
}
