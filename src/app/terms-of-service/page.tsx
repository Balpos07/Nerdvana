import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Standard terms of engagement and service conditions for ${siteSettings.fullName}.`,
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen">
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
              These Terms of Service govern all digital design, branding, software engineering, and strategic advisory services provided by {siteSettings.fullName} (&quot;Kontrast&quot;, &quot;we&quot;, &quot;us&quot;) to our clients. Specific deliverables, milestone schedules, and financial compensation are detailed in mutually executed Statements of Work (SOW) or sprint contracts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              Upon full receipt of contractual remuneration, all bespoke design artifacts, logos, illustrations, typography layouts, and proprietary application code created specifically for the Client shall transfer to the Client. Kontrast retains the right to display completed work in studio portfolios, awards competitions, and case study archives.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              3. Retainer Cadence & Payments
            </h2>
            <p>
              Monthly retainers and sprint fees are billed in advance. Revisions and priority turnarounds adhere strictly to the parameters defined in your selected package (Foundation, Accelerate, or Command). Unused hours or sprint points within a cycle do not roll over to subsequent months unless explicitly arranged.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State of New York and the Federal Republic of Nigeria, without giving effect to conflicts of laws principles.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

