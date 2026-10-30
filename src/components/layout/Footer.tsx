"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteSettings } from "@/lib/cms/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
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
        setMessage("Thank you. You are on the priority dispatch list.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again later.");
    }
  };

  return (
    <footer className="w-full bg-[var(--bg)] text-[var(--fg)] border-t border-[var(--line)] pt-20 md:pt-32 pb-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Grid: Newsletter + Quick Links + Offices */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[var(--line)]">
          {/* Newsletter Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="section-label mb-3 block">STUDIO DISPATCH // 01</span>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
                Receive curated essays on brand architecture, WebGL, and high-conversion craft.
              </h3>
              <p className="text-sm text-[var(--muted)] max-w-md mb-8">
                Strictly no spam. Sent twice monthly directly from our studio principals in New York and Lagos.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="relative max-w-md">
                <div className="flex items-center border-b border-[var(--fg)] pb-2 transition-all focus-within:border-[var(--accent)]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR WORK EMAIL"
                    disabled={status === "loading" || status === "success"}
                    className="w-full bg-transparent text-sm uppercase tracking-wider placeholder-[var(--muted)] focus:outline-none disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="ml-3 p-1.5 rounded-full hover:bg-[var(--accent)] hover:text-white transition-colors"
                    aria-label="Subscribe to newsletter"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {status === "success" && (
                  <p className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {message}
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-1.5 text-xs text-[var(--accent)] mt-2 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col justify-start">
            <span className="section-label mb-4 block">NAVIGATION</span>
            <ul className="flex flex-col gap-3 text-sm font-semibold tracking-wide uppercase">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Index
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-[var(--accent)] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-[var(--accent)] transition-colors">
                  Studio & Careers
                </Link>
              </li>
              <li>
                <Link href="/feed" className="hover:text-[var(--accent)] transition-colors">
                  Studio Notes (Feed)
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:text-[var(--accent)] transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Locations & Contact */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <span className="section-label mb-4 block">GLOBAL LOCATIONS</span>
            <div className="flex flex-col gap-6 text-sm">
              {siteSettings.offices.map((office) => (
                <div key={office.name}>
                  <div className="font-bold uppercase tracking-wider text-[var(--fg)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    {office.label}
                  </div>
                  <p className="text-[var(--muted)] text-xs mt-1 leading-relaxed">
                    {office.address}
                  </p>
                  <p className="text-xs font-mono text-[var(--muted)] mt-0.5">
                    {office.phone}
                  </p>
                </div>
              ))}
              <div className="pt-2">
                <span className="text-xs text-[var(--muted)] uppercase font-mono block">DIRECT INQUIRIES</span>
                <a
                  href="mailto:inquiries@kontrast-agency.com"
                  className="font-mono text-xs hover:text-[var(--accent)] transition-colors underline underline-offset-4"
                >
                  inquiries@kontrast-agency.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Bar: Social & Legal */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-b border-[var(--line)] text-xs text-[var(--muted)]">
          <div className="flex flex-wrap gap-6 font-mono uppercase tracking-wider">
            {siteSettings.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--fg)] transition-colors flex items-center gap-1"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 font-mono text-[11px]">
            <Link href="/terms-of-service" className="hover:text-[var(--fg)] transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="/privacy-policy" className="hover:text-[var(--fg)] transition-colors">
              PRIVACY POLICY
            </Link>
            <span>© 2024–2026 {siteSettings.agencyName}</span>
          </div>
        </div>

        {/* Bottom Giant Responsive Wordmark */}
        <div className="pt-10 select-none text-center">
          <h2
            className="wordmark-footer font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[var(--fg)] to-[var(--muted)]/40 hover:text-[var(--accent)] transition-colors duration-700 cursor-default"
            aria-label={siteSettings.agencyName}
          >
            {siteSettings.agencyName}
          </h2>
        </div>
      </div>
    </footer>
  );
}

