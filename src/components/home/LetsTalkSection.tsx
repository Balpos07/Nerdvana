"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Sparkles, RefreshCcw } from "lucide-react";
import confetti from "canvas-confetti";
import { siteSettings } from "@/lib/cms/data";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  services: string[];
  description: string;
  budget: string;
  timeline: string;
  honeypot: string;
}

export default function LetsTalkSection() {
  const serviceOptions = [
    "Nerdvana Technologies",
    "Figures by Nerdvana",
    "Technology",
    "Branding",
    "UI/UX",
    "Web",
    "AI",
    "Marketing",
    "SEO",
    "Other",
    "Not sure",
  ];

  const budgetOptions = [
    "Under $10,000",
    "$10,000 to $25,000",
    "$25,000 to $50,000",
    "$50,000+",
  ];

  const timelineOptions = [
    "Immediately / ASAP",
    "Within 1 month",
    "1 to 3 months",
    "Flexible / Exploring",
  ];

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    country: "",
    services: ["Nerdvana Technologies"],
    description: "",
    budget: "$10,000 to $25,000",
    timeline: "Immediately / ASAP",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(srv);
      return {
        ...prev,
        services: exists ? prev.services.filter((s) => s !== srv) : [...prev.services, srv],
      };
    });
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!formData.company.trim()) errs.company = "Company is required";
    if (!formData.country.trim()) errs.country = "Country is required";
    if (!formData.description.trim()) errs.description = "Project description is required";
    if (formData.services.length === 0) errs.services = "Select at least one service option";

    setErrors(errs);
    return Object.keys(errs).length === 0;
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          intent: `${formData.services.join(", ")}: ${formData.description}`,
          budget: formData.budget,
          timeframe: formData.timeline,
          honeypot: formData.honeypot,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        try {
          confetti({
            particleCount: 90,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#B8FF00", "#F5F5F2", "#121212"],
          });
        } catch {}
      } else {
        setStatus("error");
        setServerMessage(data.error || "Submission failed. Please check your fields.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again or email hello@nerdvana.global directly.");
    }
  };

  const reset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      services: ["Nerdvana Technologies"],
      description: "",
      budget: "$10,000 to $25,000",
      timeline: "Immediately / ASAP",
      honeypot: "",
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-12">
          <span className="section-label block mb-3 text-[var(--accent)]">
            10 // INITIATE
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
            Let&apos;s Talk
          </h2>
          <p className="text-base md:text-lg text-[var(--muted)] max-w-xl mt-3">
            Have a project, challenge or idea? Tell us what you&apos;re working on and let&apos;s figure out how we can help.
          </p>
        </div>

        {/* Form Container */}
        <div>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-8 md:p-16 border border-[var(--accent)] bg-[var(--surface)] rounded-xs text-center max-w-2xl mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--accent)] text-[#0A0A0A] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)] mb-3">
                  Project Brief Received
                </h3>
                <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed mb-8">
                  Thank you, <strong className="text-[var(--fg)]">{formData.name}</strong>. Our technology and creative principals have received your brief for <strong className="text-[var(--fg)]">{formData.company}</strong> and will follow up at <strong className="text-[var(--fg)]">{formData.email}</strong> within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--line)] text-xs font-mono uppercase tracking-wider text-[var(--fg)] hover:border-[var(--accent)] transition-all"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>Send Another Inquiry</span>
                  </button>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all"
                  >
                    <span>Explore Our Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
                {/* Honeypot field (hidden from real users) */}
                <input
                  type="text"
                  name="_hp_trap"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Service Options Selector (Multi-Select Pills) */}
                <div>
                  <label className="section-label block mb-3 text-[var(--accent)]">
                    WHAT CAN WE HELP YOU WITH? (SELECT ALL THAT APPLY) *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                            isSelected
                              ? "bg-[var(--accent)] text-[var(--accent-fg)] shadow-xs"
                              : "border border-[var(--line)] text-[var(--muted)] hover:border-[var(--fg)]/40 hover:text-[var(--fg)]"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                  {errors.services && (
                    <p className="text-rose-400 text-xs font-mono mt-2">{errors.services}</p>
                  )}
                </div>

                {/* Grid Inputs: Name, Email, Company, Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div>
                    <label className="section-label block mb-2">FULL NAME *</label>
                    <input
                      type="text"
                      placeholder="ALEX RIVERA"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--surface)] border border-[var(--line)] focus:border-[var(--accent)] px-4 py-3 text-sm text-[var(--fg)] uppercase rounded-xs focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs font-mono mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="section-label block mb-2">WORK EMAIL *</label>
                    <input
                      type="email"
                      placeholder="ALEX@COMPANY.COM"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--surface)] border border-[var(--line)] focus:border-[var(--accent)] px-4 py-3 text-sm text-[var(--fg)] uppercase rounded-xs focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs font-mono mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="section-label block mb-2">COMPANY / ORGANIZATION *</label>
                    <input
                      type="text"
                      placeholder="COMPANY NAME"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[var(--surface)] border border-[var(--line)] focus:border-[var(--accent)] px-4 py-3 text-sm text-[var(--fg)] uppercase rounded-xs focus:outline-none"
                    />
                    {errors.company && (
                      <p className="text-rose-400 text-xs font-mono mt-1">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label className="section-label block mb-2">COUNTRY *</label>
                    <input
                      type="text"
                      placeholder="UNITED STATES, UK, NIGERIA, ETC."
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-[var(--surface)] border border-[var(--line)] focus:border-[var(--accent)] px-4 py-3 text-sm text-[var(--fg)] uppercase rounded-xs focus:outline-none"
                    />
                    {errors.country && (
                      <p className="text-rose-400 text-xs font-mono mt-1">{errors.country}</p>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="section-label block mb-2">PROJECT DESCRIPTION & OBJECTIVES *</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you are working on, your key technical constraints, and what success looks like..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[var(--surface)] border border-[var(--line)] focus:border-[var(--accent)] px-4 py-3 text-sm text-[var(--fg)] rounded-xs focus:outline-none resize-none"
                  />
                  {errors.description && (
                    <p className="text-rose-400 text-xs font-mono mt-1">{errors.description}</p>
                  )}
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="section-label block mb-2">BUDGET RANGE</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[var(--surface)] border border-[var(--line)] focus:border-[var(--accent)] px-4 py-3 text-sm text-[var(--fg)] rounded-xs focus:outline-none cursor-pointer"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0A0A0A] text-[#F5F5F2]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="section-label block mb-2">DESIRED TIMELINE</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-[var(--surface)] border border-[var(--line)] focus:border-[var(--accent)] px-4 py-3 text-sm text-[var(--fg)] rounded-xs focus:outline-none cursor-pointer"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0A0A0A] text-[#F5F5F2]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Row with Primary CTA: Get Started */}
                <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <p className="text-xs text-[var(--muted)] max-w-sm">
                    By submitting this brief, you agree to our{" "}
                    <Link href="/privacy-policy" className="underline hover:text-[var(--fg)]">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/terms-of-service" className="underline hover:text-[var(--fg)]">
                      Terms of Service
                    </Link>
                    .
                  </p>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-black uppercase tracking-wider text-xs hover:bg-[var(--accent-hover)] transition-all shadow-xl disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        {/* <Sparkles className="w-4 h-4" /> */}
                        <span>Get Started</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2 font-mono">
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

