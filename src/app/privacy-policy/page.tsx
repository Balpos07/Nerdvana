import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Data privacy and protection commitments of ${siteSettings.fullName}.`,
};

export default function PrivacyPolicyPage() {
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
          <span className="section-label block mb-2 text-[var(--accent)]">PRIVACY & DATA</span>
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
              When you submit a project brief or newsletter subscription through our site, we collect your name, email address, company name, phone number, and project parameters. We do not sell, rent, or trade your personal data to any third party for commercial marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              2. How We Use Collected Data
            </h2>
            <p>
              Your contact information is strictly utilized to evaluate your project inquiry, prepare strategic diagnostic proposals, correspond regarding ongoing project deliverables, and transmit requested studio dispatches.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              3. Analytics & Telemetry
            </h2>
            <p>
              We employ privacy-first analytics to evaluate general page performance, scroll depth, and interaction telemetry. No invasive cross-site tracking cookies are stored without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-[var(--fg)] mb-3">
              4. Contact the Data Protection Desk
            </h2>
            <p>
              If you wish to review, update, or purge your records from our systems, contact our studio privacy desk directly at{" "}
              <a
                href="mailto:privacy@kontrast-agency.com"
                className="text-[var(--accent)] underline"
              >
                privacy@kontrast-agency.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

