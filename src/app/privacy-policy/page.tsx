import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Data privacy and protection commitments of ${siteSettings.parentBrand}.`,
};

export default function PrivacyPolicyPage() {
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
          <span className="section-label block mb-2 text-[var(--accent)]">PRIVACY & PROTECTION</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[var(--fg)]">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[var(--muted)] mt-2">
            LAST REVISED: OCTOBER 2026
          </p>
        </div>

        <div className="prose prose-invert text-sm md:text-base text-[var(--muted)] leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit a project brief or newsletter subscription through {siteSettings.parentBrand}, we collect your name, email, company name, country, and project requirements. We never sell, rent, or trade your contact data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              2. Use of Information
            </h2>
            <p>
              Your brief details are utilized solely by our engineering and creative leads to evaluate your inquiry, prepare tailored scopes, and communicate regarding project deliverables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              3. Privacy Desk Contact
            </h2>
            <p>
              To request data updates or deletion, email our privacy desk directly at{" "}
              <a href="mailto:privacy@nerdvana.global" className="text-[var(--accent)] underline">
                privacy@nerdvana.global
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
