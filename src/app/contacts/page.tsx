import React from "react";
import type { Metadata } from "next";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import MadLibContactForm from "@/components/home/MadLibContactForm";
import OfficeClock from "@/components/ui/OfficeClock";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "Contacts & Project Brief — Let's Talk",
  description:
    "Initiate an engagement with Kontrast. Fill out our sentence-style inquiry brief or contact our offices directly in New York and Lagos.",
};

export default function ContactsPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-16">
          <span className="section-label block mb-3 text-[var(--accent)]">
            INITIATION // PROJECT DISCOVERY
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)]">
              Let&apos;s Build
            </h1>
            <p className="text-sm md:text-base text-[var(--muted)] max-w-md">
              Whether you are an early-stage founder seeking category dominance or an enterprise modernizing a flagship, we want to hear from you.
            </p>
          </div>
        </div>

        {/* Studio Direct Contacts Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 border-b border-[var(--line)] mb-16">
          {siteSettings.offices.map((office) => (
            <div
              key={office.name}
              className="p-8 border border-[var(--line)] bg-[var(--surface)] rounded-xs flex flex-col justify-between"
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
                  <span>{office.name} STUDIO</span>
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
                <a
                  href="mailto:inquiries@kontrast-agency.com"
                  className="flex items-center gap-1.5 text-[var(--accent)] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Desk Email</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Mad-Libs Form */}
        <div className="bg-[var(--surface)] p-6 md:p-12 rounded-xs border border-[var(--line)]">
          <MadLibContactForm />
        </div>
      </div>
    </div>
  );
}

