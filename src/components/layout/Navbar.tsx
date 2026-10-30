"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, Cpu, Sparkles, Layers } from "lucide-react";
import OfficeClock from "../ui/OfficeClock";
import { siteSettings, serviceDivisions } from "@/lib/cms/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setVisible(false);
          setServicesMenuOpen(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Packages", href: "/#packages" },
    { label: "Curious?", href: "/#curious" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[var(--line)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-baseline gap-1.5"
            data-cursor-text="HOME"
          >
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
              {siteSettings.agencyName}
            </span>
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          </Link>

          {/* Center: Live Office Clocks (Desktop) */}
          <div className="hidden xl:flex items-center gap-6 px-4 py-1.5 rounded-full border border-[var(--line)] bg-[var(--card-bg)]">
            {siteSettings.offices.map((office) => (
              <OfficeClock
                key={office.name}
                label={office.label}
                timezone={office.timezone}
              />
            ))}
          </div>

          {/* Right: Desktop Navigation Links & Mega Menu */}
          <div className="hidden md:flex items-center gap-7">
            <nav className="flex items-center gap-6">
              {/* Interactive Services Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setServicesMenuOpen(true)}
                onMouseLeave={() => setServicesMenuOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[var(--fg)] hover:text-[var(--accent)] transition-colors py-2 focus:outline-none"
                  aria-expanded={servicesMenuOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesMenuOpen ? "rotate-180 text-[var(--accent)]" : ""
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {servicesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full -left-20 w-[640px] p-6 rounded-sm bg-[#121212] border border-[var(--line)] shadow-2xl z-50 text-[var(--fg)]"
                    >
                      <div className="grid grid-cols-2 gap-6 divide-x divide-[var(--line)]">
                        {/* Division 1: Nerdvana Technologies */}
                        <div className="pr-4">
                          <div className="flex items-center gap-2 mb-2 text-[var(--accent)]">
                            <Cpu className="w-4 h-4" />
                            <h4 className="text-xs font-bold font-mono uppercase tracking-wider">
                              Nerdvana Technologies
                            </h4>
                          </div>
                          <p className="text-[11px] text-[var(--muted)] mb-3">
                            Technology that moves businesses forward.
                          </p>
                          <ul className="space-y-2">
                            {serviceDivisions[0].services.map((s) => (
                              <li key={s.title}>
                                <Link
                                  href={`/services#${s.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                                  className="text-xs font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors flex items-center justify-between group"
                                >
                                  <span>{s.title}</span>
                                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Division 2: Figures by Nerdvana */}
                        <div className="pl-6">
                          <div className="flex items-center gap-2 mb-2 text-[#F5F5F2]">
                            {/* <Sparkles className="w-4 h-4 text-[var(--accent)]" /> */}
                            <h4 className="text-xs font-bold font-mono uppercase tracking-wider">
                              Figures by Nerdvana
                            </h4>
                          </div>
                          <p className="text-[11px] text-[var(--muted)] mb-3">
                            Brands, experiences & marketing that move people.
                          </p>
                          <ul className="space-y-2">
                            {serviceDivisions[1].services.map((s) => (
                              <li key={s.title}>
                                <Link
                                  href={`/services#${s.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                                  className="text-xs font-medium text-[var(--fg)] hover:text-[var(--accent)] transition-colors flex items-center justify-between group"
                                >
                                  <span>{s.title}</span>
                                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[var(--line)] flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[var(--muted)]">
                          ONE CONNECTED PARTNER // ZERO FRAGMENTATION
                        </span>
                        <Link
                          href="/services"
                          className="text-[var(--accent)] font-bold hover:underline flex items-center gap-1"
                        >
                          <span>Explore All Capabilities</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Primary CTA: Let's Talk (Signature Lime Pill) */}
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent-hover)] transition-all duration-300 shadow-md group"
              data-cursor-text="TALK"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/contacts"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[var(--accent)] text-[var(--accent-fg)]"
            >
              Let&apos;s Talk
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--fg)] hover:text-[var(--accent)] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            exit={{
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] text-[#F5F5F2] flex flex-col justify-between px-6 pt-24 pb-10 overflow-y-auto"
          >
            <div className="border-b border-[var(--line)] pb-5">
              <span className="section-label mb-2 block text-[var(--accent)]">
                GLOBAL AGENCY DIVISIONS
              </span>
              <div className="flex flex-col gap-2 font-mono text-xs text-[var(--muted)]">
                <div>• NERDVANA TECHNOLOGIES (IT & Software)</div>
                <div>• FIGURES BY NERDVANA (Branding & Creative)</div>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-5 my-auto py-6">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors flex items-center justify-between"
              >
                <span>Our Services</span>
                <ArrowUpRight className="w-6 h-6 text-[var(--accent)]" />
              </Link>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-6 h-6 text-[var(--accent)]" />
                </Link>
              ))}

              <div className="pt-4">
                <Link
                  href="/contacts"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-black uppercase tracking-wider text-sm shadow-xl"
                >
                  <span>Get Started — Let&apos;s Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>

            <div className="border-t border-[var(--line)] pt-5 flex items-center justify-between text-xs text-[var(--muted)] font-mono">
              <span>© 2026 {siteSettings.agencyName}</span>
              <div className="flex gap-3">
                {siteSettings.socials.slice(0, 3).map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noreferrer">
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
