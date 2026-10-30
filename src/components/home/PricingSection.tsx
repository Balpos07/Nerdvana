"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { pricingPackages } from "@/lib/cms/data";
import { formatCurrency } from "@/lib/utils";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 md:py-36 bg-[var(--surface)] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header + Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[var(--line)]">
          <div>
            <span className="section-label block mb-3">09 // ENGAGEMENT TIERS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
              Pricing
            </h2>
            <p className="text-sm md:text-base text-[var(--muted)] max-w-lg mt-3">
              Transparent, sprint-based partnerships with no hidden markups. Select a dedicated engagement structure tailored to your commercial stage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Monthly / Yearly Toggle Switch */}
            <div className="inline-flex items-center p-1 rounded-full border border-[var(--line)] bg-[var(--bg)]">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  billingCycle === "monthly"
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-xs"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                }`}
              >
                Monthly Retainer
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`relative px-5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
                  billingCycle === "yearly"
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-xs"
                    : "text-[var(--muted)] hover:text-[var(--fg)]"
                }`}
              >
                <span>Annual Commit</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-[var(--accent)] text-white font-mono">
                  -20%
                </span>
              </button>
            </div>

            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-16">
          {pricingPackages.map((pkg) => {
            const effectiveMonthlyPrice =
              billingCycle === "yearly"
                ? Math.round(pkg.monthlyPrice * (1 - pkg.yearlyDiscountPercent / 100))
                : pkg.monthlyPrice;

            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between p-8 md:p-10 rounded-sm border transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-[var(--accent)] bg-[var(--bg)] shadow-2xl scale-[1.02] lg:-translate-y-2"
                    : "border-[var(--line)] bg-[var(--bg)]/60 hover:border-[var(--fg)]/30"
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--accent)] text-white text-[10px] font-mono font-bold tracking-wider uppercase">
                    <Sparkles className="w-3 h-3" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--fg)] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs italic text-[var(--muted)] min-h-[40px] mb-6">
                    &ldquo;{pkg.tagline}&rdquo;
                  </p>

                  {/* Pricing Display with Number Tween */}
                  <div className="pt-4 pb-6 border-y border-[var(--line)]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs uppercase font-mono text-[var(--muted)]">FROM</span>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={effectiveMonthlyPrice}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="text-4xl md:text-5xl font-black font-mono tracking-tight text-[var(--fg)]"
                        >
                          {formatCurrency(effectiveMonthlyPrice)}
                        </motion.span>
                      </AnimatePresence>
                      <span className="text-xs font-mono text-[var(--muted)]">/mo</span>
                    </div>

                    <div className="flex items-center gap-3 mt-2 text-xs font-mono text-[var(--muted)]">
                      <span className="line-through">
                        Orig. {formatCurrency(pkg.originalMonthlyPrice)}/mo
                      </span>
                      <span>•</span>
                      <span>Setup Fee: {formatCurrency(pkg.setupFee)}</span>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="py-8">
                    <span className="section-label block mb-4 text-[var(--accent)]">
                      WHAT&apos;S INCLUDED
                    </span>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs md:text-sm text-[var(--fg)] leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-[var(--line)]">
                  <Link
                    href={`/contacts?tier=${pkg.name.toLowerCase()}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs transition-all ${
                      pkg.highlighted
                        ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-md"
                        : "bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white"
                    }`}
                  >
                    <span>Choose {pkg.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

