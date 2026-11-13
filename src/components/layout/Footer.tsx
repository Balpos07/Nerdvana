"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { siteSettings } from "@/lib/cms/data";
import { Marquee } from "@/components/ui/MotionEffects";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid work email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("Subscribed to Nerdvana Insights.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Subscription failed.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  };

  return (
    <footer className="footer-shell w-full border-t border-[var(--line)] pt-20 md:pt-32 pb-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Header Statement */}
        <div className="pb-16 border-b border-[var(--line)] mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="section-label block mb-3 text-[var(--accent)]">
                <span className="brand-lowercase">{siteSettings.agencyName}</span>
                {" // "}{siteSettings.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] max-w-2xl">
                {siteSettings.heroHeadline}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-black text-xs uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all shadow-lg"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              {siteSettings.offices[0].whatsapp && (
                <a
                  href={`https://wa.me/${siteSettings.offices[0].whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-[var(--line)] text-xs font-mono font-bold uppercase text-[var(--fg)] hover:border-[var(--accent)] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[var(--accent)]" />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 4 Columns: Explore, Our Services, Contact & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-[var(--line)] text-sm">
          {/* Col 1: Explore Navigation */}
          <div className="md:col-span-3">
            <span className="section-label mb-4 block text-[var(--accent)]">EXPLORE</span>
            <ul className="space-y-2.5 font-medium uppercase text-xs tracking-wider">
              <li><Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-[var(--accent)] transition-colors">Our Services</Link></li>
              <li><Link href="/work" className="hover:text-[var(--accent)] transition-colors">Our Work</Link></li>
              <li><Link href="/#packages" className="hover:text-[var(--accent)] transition-colors">Our Packages</Link></li>
              <li><Link href="/#curious" className="hover:text-[var(--accent)] transition-colors">Curious?</Link></li>
              <li><Link href="/#process" className="hover:text-[var(--accent)] transition-colors">Our Process</Link></li>
              <li><Link href="/about" className="hover:text-[var(--accent)] transition-colors">About Nerdvana</Link></li>
              <li><Link href="/#faq" className="hover:text-[var(--accent)] transition-colors">Questions Answered</Link></li>
              <li><Link href="/contacts" className="hover:text-[var(--accent)] transition-colors">Let&apos;s Talk</Link></li>
            </ul>
          </div>

          {/* Col 2: Our Services Divisions */}
          <div className="md:col-span-4">
            <span className="section-label mb-4 block text-[var(--accent)]">OUR SERVICE DIVISIONS</span>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--fg)] mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  Nerdvana Technologies
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  Cloud & Infrastructure • DevOps • Software Engineering • AI & Automation • SRE Security.
                </p>
                <Link href="/services#technologies" className="text-[11px] font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1">
                  <span>Explore Technology</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[var(--fg)] mb-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5F5F2]" />
                  Figures by Nerdvana
                </h4>
                <p className="text-xs text-[var(--muted)] leading-relaxed mb-2">
                  Branding • UI/UX • Web Design & Dev • Creative Production • Marketing & Growth.
                </p>
                <Link href="/services#figures" className="text-[11px] font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1">
                  <span>Explore Creative</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="md:col-span-2">
            <span className="section-label mb-4 block text-[var(--accent)]">CONTACT</span>
            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-[var(--muted)] block">EMAIL</span>
                <a href="mailto:hello@nerdvana.global" className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors">
                  hello@nerdvana.global
                </a>
              </div>
              <div>
                <span className="text-[var(--muted)] block">LAGOS DESK</span>
                <a href="tel:+23418809214" className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors">
                  +234 (1) 880-9214
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Newsletter */}
          <div className="md:col-span-3">
            <span className="section-label mb-4 block text-[var(--accent)]">INSIGHTS // DISPATCH</span>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
              Curated perspectives on cloud architecture, AI workflows, and digital brand conversion.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <div className="flex items-center border-b border-[var(--fg)] pb-2 transition-all focus-within:border-[var(--accent)]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="WORK EMAIL"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-transparent text-xs uppercase tracking-wider placeholder-[var(--muted)] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="ml-2 p-1.5 rounded-full hover:bg-[var(--accent)] hover:text-[#0A0A0A] transition-colors"
                  aria-label="Subscribe"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {status === "success" && (
                <p className="flex items-center gap-1 text-[11px] text-[var(--accent)] mt-2 font-mono">
                  <CheckCircle2 className="w-3 h-3" />
                  {message}
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-1 text-[11px] text-rose-400 mt-2 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Socials & Legal Bar */}
        <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-[var(--line)] text-xs font-mono text-[var(--muted)]">
          <div className="flex flex-wrap gap-5 uppercase tracking-wider">
            {siteSettings.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-[var(--fg)] transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms-of-service" className="hover:text-[var(--fg)] transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="/cookie-policy" className="hover:text-[var(--fg)] transition-colors">
              COOKIE POLICY
            </Link>
            <span>© 2026 nerdvana. ALL RIGHTS RESERVED.</span>
          </div>
        </div>

        {/* Giant Scaled Wordmark */}
        <Marquee className="mb-6 border-y border-[var(--line)] py-3 text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--muted)]">
          <span className="whitespace-nowrap px-8">Technology + Creativity + Growth</span>
          <span className="whitespace-nowrap px-8 text-[var(--accent)]">Build better</span>
          <span className="brand-lowercase whitespace-nowrap px-8">nerdvana</span>
        </Marquee>
        <div className="pt-10 select-none text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.055 } },
            }}
            className="wordmark-footer wordmark-brand-inline wordmark-footer--animated flex justify-between items-center cursor-default"
            aria-label={siteSettings.agencyName}
          >
            {siteSettings.agencyName.split("").map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                variants={{
                  hidden: { y: "110%", rotate: 5, opacity: 0 },
                  visible: {
                    y: "0%",
                    rotate: 0,
                    opacity: 1,
                    transition: { duration: 0.85, ease: [0.33, 1, 0.68, 1] },
                  },
                }}
                whileHover={{ y: "-0.04em", color: "var(--accent)" }}
                className="inline-block origin-bottom"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </div>
      </div>
    </footer>
  );
}
