import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Cpu, Sparkles, Check, ArrowRight } from "lucide-react";
import { serviceDivisions, siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Our Services — Nerdvana Technologies & Figures by Nerdvana",
  description:
    "Explore our full suite of technology and creative services spanning Cloud & Infrastructure, DevOps, Software Engineering, AI & Automation, Branding, UI/UX, and Growth Marketing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-16">
          <span className="section-label block mb-3 text-[var(--accent)]">
            CAPABILITIES // BUSINESS DIVISIONS
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)]">
                Our Services
              </h1>
              <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mt-4 leading-relaxed">
                Nerdvana unites two high-performing divisions under one connected partner: <strong>Nerdvana Technologies</strong> (IT, Cloud & Engineering) and <strong>Figures by Nerdvana</strong> (Branding, Web & Growth).
              </p>
            </div>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-black text-xs uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-all shadow-md shrink-0"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Division 1: Nerdvana Technologies */}
        <div id="technologies" className="mb-24 pt-4">
          <div className="p-8 rounded-xs border border-[var(--line)] bg-[var(--surface)] mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[var(--accent)] text-xs font-mono font-bold uppercase mb-2">
                {/* <Cpu className="w-4 h-4" /> */}
                <span>DIVISION 01 // NERDVANA TECHNOLOGIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[var(--fg)]">
                {serviceDivisions[0].tagline}
              </h2>
              <p className="text-sm text-[var(--muted)] max-w-2xl mt-2 leading-relaxed">
                {serviceDivisions[0].description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDivisions[0].services.map((svc) => (
              <div
                key={svc.title}
                id={svc.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                className="p-8 rounded-xs border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between group hover:border-[var(--accent)] transition-all"
              >
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="mb-6">
                    <span className="section-label block mb-2 text-[var(--accent)]">
                      CAPABILITIES
                    </span>
                    <ul className="space-y-2">
                      {svc.capabilities.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[var(--fg)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-1" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="section-label block mb-2 text-[var(--muted)]">
                      DELIVERABLES
                    </span>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-[var(--muted)] font-mono">
                          <Check className="w-3 h-3 text-[var(--accent)] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--line)]">
                  <Link
                    href={`/contacts?service=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--accent)] hover:underline"
                  >
                    <span>Consult on {svc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Division 2: Figures by Nerdvana */}
        <div id="figures" className="mb-24 pt-8 border-t border-[var(--line)]">
          <div className="p-8 rounded-xs border border-[var(--line)] bg-[var(--surface)] mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#F5F5F2] text-xs font-mono font-bold uppercase mb-2">
                {/* <Sparkles className="w-4 h-4 text-[var(--accent)]" /> */}
                <span>DIVISION 02 // FIGURES BY NERDVANA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[var(--fg)]">
                {serviceDivisions[1].tagline}
              </h2>
              <p className="text-sm text-[var(--muted)] max-w-2xl mt-2 leading-relaxed">
                {serviceDivisions[1].description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDivisions[1].services.map((svc) => (
              <div
                key={svc.title}
                id={svc.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                className="p-8 rounded-xs border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between group hover:border-[var(--accent)] transition-all"
              >
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <div className="mb-6">
                    <span className="section-label block mb-2 text-[var(--accent)]">
                      CAPABILITIES
                    </span>
                    <ul className="space-y-2">
                      {svc.capabilities.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[var(--fg)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-1" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="section-label block mb-2 text-[var(--muted)]">
                      DELIVERABLES
                    </span>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((d, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] text-[var(--muted)] font-mono">
                          <Check className="w-3 h-3 text-[var(--accent)] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--line)]">
                  <Link
                    href={`/contacts?service=${encodeURIComponent(svc.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--accent)] hover:underline"
                  >
                    <span>Consult on {svc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

