"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import OfficeClock from "../ui/OfficeClock";
import { siteSettings } from "@/lib/cms/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setVisible(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Studio", href: "/studio" },
    { label: "Feed", href: "/feed" },
    { label: "Contacts", href: "/contacts" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--line)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Wordmark */}
          <Link
            href="/"
            className="group flex items-baseline gap-1"
            data-cursor-text="HOME"
          >
            <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
              {siteSettings.agencyName}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          </Link>

          {/* Center: Live Office Clocks (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 px-4 py-1.5 rounded-full border border-[var(--line)] bg-[var(--card-bg)]">
            {siteSettings.offices.map((office) => (
              <OfficeClock
                key={office.name}
                label={office.label}
                timezone={office.timezone}
              />
            ))}
          </div>

          {/* Right: Desktop Links & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-sm font-medium tracking-wide uppercase transition-colors hover:text-[var(--accent)] overflow-hidden group py-1"
                  >
                    <span
                      className={`inline-block transition-transform duration-300 group-hover:-translate-y-[120%] ${
                        isActive ? "text-[var(--accent)]" : "text-[var(--fg)]"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="absolute left-0 top-0 inline-block translate-y-[120%] text-[var(--accent)] transition-transform duration-300 group-hover:translate-y-0">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Let's Talk Pill Button */}
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-sm"
              data-cursor-text="CHAT"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/contacts"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[var(--fg)] text-[var(--bg)]"
            >
              Talk
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
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[var(--bg)] text-[var(--fg)] flex flex-col justify-between px-6 pt-28 pb-12 overflow-y-auto"
          >
            {/* Top office info inside mobile menu */}
            <div className="border-b border-[var(--line)] pb-6 flex flex-col gap-3">
              <span className="section-label">Global Operations</span>
              <div className="flex flex-wrap gap-4">
                {siteSettings.offices.map((office) => (
                  <OfficeClock
                    key={office.name}
                    label={office.label}
                    timezone={office.timezone}
                  />
                ))}
              </div>
            </div>

            {/* Staggered Navigation Links */}
            <nav className="flex flex-col gap-6 my-auto py-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between text-4xl sm:text-5xl font-extrabold uppercase tracking-tight py-2 hover:text-[var(--accent)] transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-[var(--accent)]" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="pt-4"
              >
                <Link
                  href="/contacts"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-[var(--accent)] text-white font-bold uppercase tracking-wider text-sm shadow-lg"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Footer Meta */}
            <div className="border-t border-[var(--line)] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[var(--muted)]">
              <div>© 2026 {siteSettings.fullName}</div>
              <div className="flex gap-4">
                {siteSettings.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--fg)] transition-colors"
                  >
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

