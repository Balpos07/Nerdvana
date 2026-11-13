import React from "react";
import type { Metadata } from "next";
import { Phone, MapPin, MessageSquare } from "lucide-react";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import OfficeClock from "@/components/ui/OfficeClock";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Let's Talk — Contact Nerdvana",
  description:
    "Have a project, challenge or idea? Contact Nerdvana Technologies or Figures by Nerdvana. We review every brief within 24 hours.",
};

export default function ContactsPage() {
  return (
    <div className="pt-20 md:pt-28 pb-12 md:pb-20 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="border-b border-[var(--line)] pb-6 mb-8 md:pb-8 md:mb-10">
          <span className="section-label block mb-3 text-[var(--accent)]">
            CONNECT // OFFICE
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)]">
              Let&apos;s Talk
            </h1>
            <p className="text-sm md:text-base text-[var(--muted)] max-w-md">
              Whether you need to scale cloud infrastructure, launch an AI agent system, or engineer an iconic brand, we are ready to build.
            </p>
          </div>
        </div>

        {/* Lagos Office */}
        <div className="grid grid-cols-1 gap-5 md:gap-8 pb-8 md:pb-10 border-b border-[var(--line)] mb-8 md:mb-10">
          {siteSettings.offices.map((office) => (
            <div
              key={office.name}
              className="surface-panel p-5 md:p-8 border border-[var(--line)] bg-[var(--surface)] rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="section-label text-[var(--accent)]">
                    {office.label}
                  </span>
                  <OfficeClock label={office.label} timezone={office.timezone} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--accent)]" />
                  <span>{office.name} OFFICE</span>
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {office.address}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <a
                  href={`tel:${office.phone}`}
                  className="flex items-center gap-1.5 text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{office.phone}</span>
                </a>
                {office.whatsapp && (
                  <a
                    href={`https://wa.me/${office.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-[var(--muted)] hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <LetsTalkSection />
      </div>
    </div>
  );
}
