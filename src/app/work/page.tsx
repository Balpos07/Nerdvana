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
  const caseStudyRequirements = [
    "Client and industry context",
    "Business challenge and opportunity",
    "Approach, service mix, and execution strategy",
    "Technology, brand, or campaign detail where relevant",
    "Measurable outcomes and final results",
    "Visuals, proof, and supporting assets",
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <span className="section-label block mb-3 text-[var(--accent)]">
          WORK // CASE STUDIES
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
          Portfolio
        </h1>
        <p className="mt-4 max-w-3xl text-sm md:text-base text-[var(--muted)]">
          Verified client work, case-study narratives, and results will be published once approved project details, metrics, and visuals are available.
        </p>

        <div className="mt-12 rounded-xs border border-[var(--line)] bg-[var(--surface)] p-6 md:p-8">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
            Case-study structure
          </p>
          <ul className="space-y-3 text-sm md:text-base text-[var(--muted)]">
            {caseStudyRequirements.map((item) => (
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
