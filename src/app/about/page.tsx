import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu, Sparkles, Layers, ShieldCheck, Zap, Globe, Users } from "lucide-react";
import OfficeClock from "@/components/ui/OfficeClock";
import { siteSettings, serviceDivisions } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: "About Nerdvana — Technology. Creativity. Growth.",
  description:
    "Learn about Nerdvana's global vision, technology + creative philosophy, our twin divisions (Nerdvana Technologies & Figures by Nerdvana), and leadership.",
};

export default function AboutPage() {
  const leadership = [
    {
      name: "Tariq Adele",
      role: "Head of Technology & SRE",
      division: "Nerdvana Technologies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
      bio: "Over 12 years architecting high-throughput cloud infrastructure, Kubernetes platforms, and resilient software backends.",
    },
    {
      name: "Darius Sterling",
      role: "Creative Director",
      division: "Figures by Nerdvana",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85",
      bio: "Pioneering visual identity systems, motion typography, and award-winning digital flagships for venture-backed founders.",
    },
    {
      name: "Sophie Chen",
      role: "Director of Brand Strategy",
      division: "Figures by Nerdvana",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85",
      bio: "Specializing in commercial market diagnosis, messaging frameworks, and full-funnel growth engines.",
    },
    {
      name: "Kaelen Voss",
      role: "Principal Platform Architect",
      division: "Nerdvana Technologies",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
      bio: "Engineering custom AI agent pipelines, Terraform IaC, and microsecond edge telemetry pipelines.",
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

        {/* Global Twin Studios */}
        <div className="pb-20 border-b border-[var(--line)] mb-20">
          <span className="section-label block mb-3 text-[var(--accent)]">
            GLOBAL REACH // DUAL OPERATIONAL HUBS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] mb-8">
            New York & Lagos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    {office.name} STUDIO
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
            The Principals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border border-[var(--line)] mb-4 bg-[var(--surface)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-[#B8FF00]/80 text-[10px] font-mono text-[var(--fg)]">
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

