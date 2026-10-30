"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Sparkles, RefreshCcw } from "lucide-react";
import confetti from "canvas-confetti";
import { siteSettings } from "@/lib/cms/data";

interface FormData {
  name: string;
  company: string;
  intent: string;
  budget: string;
  timeframe: string;
  email: string;
  phone: string;
  consent: boolean;
  honeypot: string;
}

export default function MadLibContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    intent: "",
    budget: "$10,000 to $20,000",
    timeframe: "As soon as possible",
    email: "",
    phone: "",
    consent: true,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const budgetOptions = [
    "$5,000 to $10,000",
    "$10,000 to $20,000",
    "$20,000+",
  ];

  const timeframeOptions = [
    "As soon as possible",
    "Next month",
    "Whenever you're available",
  ];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.company.trim()) newErrors.company = "Required";
    if (!formData.intent.trim()) newErrors.intent = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.consent) newErrors.consent = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        // Trigger celebratory confetti burst
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#FF3E00", "#F4F2EE", "#FFFFFF"],
          });
        } catch {}
      } else {
        setStatus("error");
        setServerMessage(data.error || "Submission error. Please verify your entries.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Unable to reach server. Please check your connection.");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setFormData({
      name: "",
      company: "",
      intent: "",
      budget: "$10,000 to $20,000",
      timeframe: "As soon as possible",
      email: "",
      phone: "",
      consent: true,
      honeypot: "",
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="pb-12 border-b border-[var(--line)]">
          <span className="section-label block mb-3">10 // INITIATE</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
            Let&apos;s Talk
          </h2>
          <p className="text-sm md:text-base text-[var(--muted)] max-w-lg mt-3">
            Have a project in mind? Complete our sentence-style inquiry brief. We review every submission within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div className="pt-12">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 md:p-16 border border-[var(--accent)] bg-[var(--surface)] rounded-sm text-center max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)] mb-4">
                  Transmission Received
                </h3>
                <p className="text-base text-[var(--muted)] leading-relaxed mb-8">
                  Thank you, <strong className="text-[var(--fg)]">{formData.name}</strong>. Our principals in New York and Lagos have received your project details for <strong className="text-[var(--fg)]">{formData.company}</strong> and will follow up at <strong className="text-[var(--fg)]">{formData.email}</strong> shortly.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--line)] text-xs font-mono uppercase tracking-wider text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>Send Another Inquiry</span>
                  </button>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--fg)] text-[var(--bg)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-colors"
                  >
                    <span>Browse Case Studies</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                {/* Honeypot field (hidden) */}
                <input
                  type="text"
                  name="_hp_trap"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Mad-Libs Sentence Block */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[var(--fg)] leading-relaxed md:leading-[1.8]">
                  <span>Hey {siteSettings.agencyName}, my name is </span>
                  <span className="relative inline-block mx-1">
                    <input
                      type="text"
                      placeholder="YOUR FULL NAME"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`border-b-2 bg-transparent text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[var(--accent)] placeholder-[var(--muted)]/50 focus:outline-none min-w-[200px] md:min-w-[280px] pb-1 ${
                        errors.name ? "border-rose-500" : "border-[var(--fg)]/40 focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.name && (
                      <span className="absolute -bottom-6 left-0 text-[11px] font-mono text-rose-500 uppercase">
                        {errors.name}
                      </span>
                    )}
                  </span>
                  <span> and I&apos;m writing from </span>
                  <span className="relative inline-block mx-1">
                    <input
                      type="text"
                      placeholder="COMPANY OR CITY"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) setErrors({ ...errors, company: undefined });
                      }}
                      className={`border-b-2 bg-transparent text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[var(--accent)] placeholder-[var(--muted)]/50 focus:outline-none min-w-[200px] md:min-w-[280px] pb-1 ${
                        errors.company ? "border-rose-500" : "border-[var(--fg)]/40 focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.company && (
                      <span className="absolute -bottom-6 left-0 text-[11px] font-mono text-rose-500 uppercase">
                        {errors.company}
                      </span>
                    )}
                  </span>
                  <span>. I&apos;m getting in touch because I&apos;d like to </span>
                  <span className="relative inline-block mx-1">
                    <input
                      type="text"
                      placeholder="BUILD A DIGITAL FLAGSHIP / REBRAND"
                      value={formData.intent}
                      onChange={(e) => {
                        setFormData({ ...formData, intent: e.target.value });
                        if (errors.intent) setErrors({ ...errors, intent: undefined });
                      }}
                      className={`border-b-2 bg-transparent text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[var(--accent)] placeholder-[var(--muted)]/50 focus:outline-none min-w-[260px] md:min-w-[420px] pb-1 ${
                        errors.intent ? "border-rose-500" : "border-[var(--fg)]/40 focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.intent && (
                      <span className="absolute -bottom-6 left-0 text-[11px] font-mono text-rose-500 uppercase">
                        {errors.intent}
                      </span>
                    )}
                  </span>
                  <span>. My budget is roughly </span>
                  <span className="relative inline-block mx-1">
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="border-b-2 border-[var(--fg)]/40 focus:border-[var(--accent)] bg-[var(--surface)] text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent)] uppercase focus:outline-none cursor-pointer py-1 px-2 rounded-xs"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--bg)] text-[var(--fg)]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </span>
                  <span> and I&apos;d like to start </span>
                  <span className="relative inline-block mx-1">
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="border-b-2 border-[var(--fg)]/40 focus:border-[var(--accent)] bg-[var(--surface)] text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent)] uppercase focus:outline-none cursor-pointer py-1 px-2 rounded-xs"
                    >
                      {timeframeOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--bg)] text-[var(--fg)]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </span>
                  <span>. You can contact me at </span>
                  <span className="relative inline-block mx-1">
                    <input
                      type="email"
                      placeholder="NAME@DOMAIN.COM"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`border-b-2 bg-transparent text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[var(--accent)] placeholder-[var(--muted)]/50 focus:outline-none min-w-[220px] md:min-w-[320px] pb-1 ${
                        errors.email ? "border-rose-500" : "border-[var(--fg)]/40 focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.email && (
                      <span className="absolute -bottom-6 left-0 text-[11px] font-mono text-rose-500 uppercase">
                        {errors.email}
                      </span>
                    )}
                  </span>
                  <span>. Here&apos;s my phone: </span>
                  <span className="relative inline-block mx-1">
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000 (OPTIONAL)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-b-2 border-[var(--fg)]/40 focus:border-[var(--accent)] bg-transparent text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[var(--accent)] placeholder-[var(--muted)]/50 focus:outline-none min-w-[220px] md:min-w-[300px] pb-1"
                    />
                  </span>
                  <span>. Looking forward to your reply!</span>
                </div>

                {/* Consent & Submit Row */}
                <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  {/* Consent Checkbox */}
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => {
                        setFormData({ ...formData, consent: e.target.checked });
                        if (errors.consent) setErrors({ ...errors, consent: undefined });
                      }}
                      className="w-4 h-4 accent-[var(--accent)] cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-xs text-[var(--muted)] cursor-pointer select-none">
                      I agree to the{" "}
                      <Link href="/terms-of-service" className="underline hover:text-[var(--fg)]">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy" className="underline hover:text-[var(--fg)]">
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--accent)] text-white font-bold uppercase tracking-wider text-xs hover:bg-[var(--accent-hover)] transition-all shadow-lg disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Get in Touch</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Server Error Message */}
                {status === "error" && (
                  <div className="mt-4 p-3 rounded-xs bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2 font-mono">
                    <AlertCircle className="w-4 h-4" />
                    <span>{serverMessage}</span>
                  </div>
                )}
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

