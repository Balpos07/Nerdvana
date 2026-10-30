import React from "react";
import type { Metadata } from "next";
import WorkGallery from "@/components/work/WorkGallery";
import { getAllProjects } from "@/lib/cms/sanityClient";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Selected Work — Portfolio & Case Studies",
  description:
    "An archive of digital flagships, identity transformations, and interactive software crafted by Kontrast for ambitious global brands.",
};

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Editorial Page Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-12">
          <span className="section-label block mb-3">INDEX // PORTFOLIO</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)]">
              Selected Work
            </h1>
            <p className="text-sm md:text-base text-[var(--muted)] max-w-md">
              A curated catalog of recent digital flagships, brand identities, and WebGL applications engineered from {siteSettings.offices[0].name} and {siteSettings.offices[1].name}.
            </p>
          </div>
        </div>

        {/* Interactive Gallery with Filters and Editorial Rhythm */}
        <WorkGallery initialProjects={projects} />
      </div>
    </div>
  );
}

