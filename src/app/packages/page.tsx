import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages — Nerdvana",
  description: "Nerdvana packages are being prepared.",
};

export default function PackagesPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
          Packages
        </h1>
        <p className="mt-4 text-sm md:text-base text-[var(--muted)]">
          Updated packages are coming soon.
        </p>
        {/* Package content and pricing remain commented until approved scopes and prices are available. */}
      </div>
    </div>
  );
}
