import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Standard terms of engagement and service conditions for ${siteSettings.parentBrand}.`,
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
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

        <div className="border-b border-[var(--line)] pb-8 mb-12">
          <span className="section-label block mb-2 text-[var(--accent)]">LEGAL TERMS</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--fg)]">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-[var(--muted)] mt-2">
            LAST REVISED: OCTOBER 2026
          </p>
        </div>

        <div className="prose prose-invert text-sm md:text-base text-[var(--muted)] leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              1. Engagement & Scope
            </h2>
            <p>
              These Terms of Service govern all technology, software engineering, cloud architecture, branding, UI/UX, and growth marketing services provided by {siteSettings.parentBrand} (including its operating divisions, Nerdvana Technologies and Figures by Nerdvana) to our clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              Upon receipt of full contractual remuneration, all bespoke software code, custom infrastructure scripts, brand marks, and digital assets engineered specifically for the Client shall transfer in full to the Client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              3. Service Divisions & Retainers
            </h2>
            <p>
              Services delivered under Nerdvana Technologies and Figures by Nerdvana are governed by unified contractual agreements. Sprints and packages are billed on clear milestone or monthly retainers with transparent deliverable criteria.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              4. Governing Law
            </h2>
            <p>
              These terms are governed in accordance with the laws of the State of New York and the Federal Republic of Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
