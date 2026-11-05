import React from "react";
import type { Metadata } from "next";
// TODO: Re-enable after verified portfolio projects and images are available.
// import OurWorkSection from "@/components/home/OurWorkSection";

export const metadata: Metadata = {
  title: "Our Work — Portfolio & Case Studies",
  description:
    "Explore case studies from Nerdvana Technologies and Figures by Nerdvana spanning AI, cloud infrastructure, visual identities, and digital flagships.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
          Portfolio
        </h1>
        <p className="mt-4 text-sm md:text-base text-[var(--muted)]">
          Updated case studies are coming soon.
        </p>
        {/* Portfolio content commented until verified projects and approved images exist. */}
      </div>
    </div>
  );
}
