import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import OfficeClock from "@/components/ui/OfficeClock";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "About Nerdvana — Technology. Creativity. Growth.",
  description:
    "Learn about Nerdvana's global vision, technology + creative philosophy, our twin divisions (Nerdvana Technologies & Figures by Nerdvana), and leadership.",
};

export default function AboutPage() {
  const leadership = [
    {
      name: "CEO",
      role: "Chief Executive Officer",
      division: "Nerdvana Technologies",
      bio: "Leadership details incoming.",
    },
    {
      name: "COO",
      role: "Chief Operating Officer",
      division: "Figures by Nerdvana",
      bio: "Leadership details incoming.",
    },
    {
      name: "CFO",
      role: "Chief Financial Officer",
      division: "Figures by Nerdvana",
      bio: "Leadership details incoming.",
    },
    {
      name: "Manager",
      role: "Manager",
      division: "Nerdvana Technologies",
      bio: "Leadership details incoming.",
    },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="border-b border-[var(--line)] pb-16 mb-20">
          <span className="section-label block mb-3 text-[var(--accent)]">
            ABOUT // THE PARENT BRAND
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)] mb-8">
            Nerdvana
          </h1>
          <p className="text-xl md:text-2xl text-[var(--fg)] max-w-4xl font-normal leading-relaxed">
            {siteSettings.coreBrandStatement}
          </p>
        </div>

        {/* The Two Service Divisions Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20 border-b border-[var(--line)] mb-20">
          <div className="p-8 md:p-12 rounded-xs border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono font-bold uppercase mb-4">
                {/* <Cpu className="w-4 h-4" /> */}
                <span>NERDVANA TECHNOLOGIES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--fg)] mb-4">
                Technology That Moves Businesses Forward
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                From scalable cloud architecture and automated CI/CD platform engineering to production AI deployments and 24/7 reliability security, we provide the technical depth modern scaleups demand.
              </p>
            </div>
            <Link
              href="/services#technologies"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[var(--muted)] hover:underline"
            >
              <span>Explore Technology Capabilities</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-8 md:p-12 rounded-xs border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[var(--muted)] text-xs font-mono font-bold uppercase mb-4">
                {/* <Sparkles className="w-4 h-4 text-[var(--accent)]" /> */}
                <span>FIGURES BY NERDVANA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--fg)] mb-4">
                Brands, Experiences & Growth
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                We craft unforgettable brand identities, high-converting digital flagships, 3D kinetic visuals, and full-funnel performance marketing that moves people and turns attention into durable revenue.
              </p>
            </div>
            <Link
              href="/services#figures"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-[var(--muted)] hover:underline"
            >
              <span>Explore Creative & Marketing</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Lagos Office */}
        <div className="pb-20 border-b border-[var(--line)] mb-20">
          <span className="section-label block mb-3 text-[var(--accent)]">
            NIGERIA // PRIMARY OFFICE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] mb-8">
            Lagos
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {siteSettings.offices.map((office) => (
              <div
                key={office.name}
                className="p-8 rounded-xs border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[var(--muted)] font-bold">
                      {office.label}
                    </span>
                    <OfficeClock label={office.label} timezone={office.timezone} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--fg)] mb-2">
                    {office.name} OFFICE
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {office.address}
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                  <span>TEL: {office.phone}</span>
                  <span className="text-[var(--muted)]">● ACTIVE OPERATION</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="pb-20">
          <span className="section-label block mb-3 text-[var(--accent)]">
            FELLOWSHIP // LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] mb-12">
            Leadership Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member) => (
              <div key={member.name} className="group">
                <div className="relative flex aspect-[3/4] w-full items-end overflow-hidden rounded-xs border border-[var(--line)] mb-4 bg-[var(--surface)] p-5">
                  <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    Portrait incoming
                  </span>
                  <span className="text-[clamp(3rem,8vw,5rem)] font-black leading-none tracking-[-0.08em] text-[var(--fg)]/15">
                    {member.name}
                  </span>
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full bg-[#B8FF00]/80 text-[10px] font-mono text-[var(--fg)]">
                    {member.division}
                  </div>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[var(--fg)]">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--accent)] font-mono mb-2">
                  {member.role}
                </p>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
