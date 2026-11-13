import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie and tracking policies of ${siteSettings.parentBrand}.`,
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-20 md:pt-28 pb-12 md:pb-20 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[860px] mx-auto px-6 md:px-12">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="border-b border-[var(--line)] pb-6 mb-8 md:pb-8 md:mb-12">
          <span className="section-label block mb-2 text-[var(--accent)]">LEGAL & PRIVACY</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--fg)]">
            Cookie Policy
          </h1>
          <p className="text-xs font-mono text-[var(--muted)] mt-2">
            LAST REVISED: OCTOBER 2026
          </p>
        </div>

        <div className="prose prose-invert text-sm md:text-base text-[var(--muted)] leading-relaxed space-y-6 md:space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              1. How We Use Cookies
            </h2>
            <p>
              {siteSettings.parentBrand} employs privacy-first cookies and local storage tokens strictly to maintain session preferences, remember user preloader dismissals, analyze aggregate site performance metrics, and ensure secure form transmission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              2. Cookie Categories
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-[var(--fg)]">Essential Cookies:</strong> Required to preserve session security, CSRF protection, and route navigation.</li>
              <li><strong className="text-[var(--fg)]">Functional Cookies:</strong> Stores user interface preferences (such as light/dark mode and reduced motion choices).</li>
              <li><strong className="text-[var(--fg)]">Telemetry Cookies:</strong> Privacy-friendly aggregate visit and scroll metrics without invasive cross-site profiling.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              3. Managing Your Preferences
            </h2>
            <p>
              You can disable cookies through your standard browser settings at any time. Essential functions of the site will remain operable.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
