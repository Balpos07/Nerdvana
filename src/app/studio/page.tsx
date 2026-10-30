import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Shield, Zap, Sparkles } from "lucide-react";
import OfficeClock from "@/components/ui/OfficeClock";
import { siteSettings } from "@/lib/cms/data";
import CareerApplicationForm from "@/components/studio/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Studio & Careers — Our Philosophy & Fellowship",
  description:
    "Learn about Kontrast's design philosophy, leadership, global twin studios in New York and Lagos, and browse current open career opportunities.",
};

export default function StudioPage() {
  const values = [
    {
      icon: Zap,
      title: "Ruthless Craft",
      description:
        "We reject superficial decoration and generic components. Every layout, bezier curve, and typographic choice is executed with extreme intentionality.",
    },
    {
      icon: Compass,
      title: "Commercial Velocity",
      description:
        "Design is not art; it is commercial leverage. We engineer digital assets that accelerate fundraises, reduce customer churn, and amplify conversion.",
    },
    {
      icon: Shield,
      title: "Direct Founder Access",
      description:
        "No account managers or bureaucratic middlemen. You work directly with agency principals, tech leads, and creative directors from day zero.",
    },
    {
      icon: Sparkles,
      title: "Global Perspective",
      description:
        "With dual headquarters in New York and Lagos, we operate across timezones, drawing from the world's most vibrant cultural and engineering epicenters.",
    },
  ];

  const leadership = [
    {
      name: "Darius Sterling",
      role: "Co-Founder & Creative Director",
      location: "New York Studio",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85",
      bio: "Formerly leading design teams at Apple and Pentagram. Darius directs global brand systems and creative narratives.",
    },
    {
      name: "Tariq Adele",
      role: "Co-Founder & Head of Engineering",
      location: "Lagos Studio",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
      bio: "Creative technologist and WebGL specialist. Tariq pioneers high-performance browser rendering and Next.js platforms.",
    },
    {
      name: "Sophie Chen",
      role: "Director of Brand Strategy",
      location: "New York Studio",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85",
      bio: "Specializing in commercial positioning, market diagnosis, and narrative architecture for Series A through IPO founders.",
    },
    {
      name: "Kaelen Voss",
      role: "Lead 3D & Kinetic Designer",
      location: "Lagos Studio",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
      bio: "Sculpting tactile physics, spatial sound design, and procedural WebGL simulations for next-generation interfaces.",
    },
  ];

  const openRoles = [
    {
      title: "Senior Full-Stack Creative Technologist",
      team: "Engineering",
      location: "New York, Lagos or Remote",
      type: "Full-Time",
      description:
        "Lead the implementation of high-performance Next.js 16 web flagships, WebGL shaders, and bespoke micro-interactions.",
    },
    {
      title: "Principal Brand Systems Designer",
      team: "Brand Identity",
      location: "New York or Lagos",
      type: "Full-Time",
      description:
        "Architect comprehensive visual identities, variable type systems, and living design token libraries for venture-backed innovators.",
    },
    {
      title: "Interactive 3D / Motion Artist",
      team: "Motion & 3D",
      location: "Remote (Global)",
      type: "Contract / Full-Time",
      description:
        "Craft cinematic product renders, real-time Spline/Three.js assets, and kinetic typography for digital flagships.",
    },
  ];

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <div className="border-b border-[var(--line)] pb-16 mb-20">
          <span className="section-label block mb-3 text-[var(--accent)]">
            ABOUT US // MANIFESTO
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)] mb-8">
            The Studio
          </h1>
          <p className="text-xl md:text-2xl text-[var(--fg)] max-w-4xl font-normal leading-relaxed">
            We are an independent creative agency and digital engineering consultancy. We exist to rid the web of homogeny, crafting identities and software that demand attention and outlast quarterly trends.
          </p>
        </div>

        {/* Global Twin Studios Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24 border-b border-[var(--line)] mb-24">
          {siteSettings.offices.map((office) => (
            <div
              key={office.name}
              className="p-8 md:p-12 border border-[var(--line)] bg-[var(--surface)] rounded-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="section-label text-[var(--accent)]">STUDIO HEADQUARTERS</span>
                  <OfficeClock label={office.label} timezone={office.timezone} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[var(--fg)] mb-4">
                  {office.name}
                </h2>
                <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed mb-6">
                  {office.address}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
                <span>TEL: {office.phone}</span>
                <span className="text-emerald-400">● LIVE OPERATION</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy & Values Grid */}
        <div className="pb-24 border-b border-[var(--line)] mb-24">
          <span className="section-label block mb-3">CORE CODES // PRINCIPLES</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)] mb-12">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="p-6 md:p-8 border border-[var(--line)] bg-[var(--surface)] rounded-xs flex flex-col justify-between"
                >
                  <Icon className="w-8 h-8 text-[var(--accent)] mb-6" />
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--fg)] mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="pb-24 border-b border-[var(--line)] mb-24">
          <span className="section-label block mb-3">FELLOWSHIP // LEADERSHIP</span>
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
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[var(--accent)] mb-1">
                  <span>{member.role}</span>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[var(--fg)]">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--muted)] font-mono mt-1 mb-2">
                  {member.location}
                </p>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Opportunities Anchor Section (#career) */}
        <div id="career" className="pt-8">
          <div className="pb-12 border-b border-[var(--line)]">
            <span className="section-label block mb-3 text-[var(--accent)]">
              JOIN THE LABS // OPEN ROLES
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--fg)]">
                Open Positions
              </h2>
              <p className="text-sm md:text-base text-[var(--muted)] max-w-md">
                We believe in autonomous, high-agency teams. We offer competitive equity, global travel stipends, and work on world-defining products.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
            {/* Roles List */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-[var(--line)] border-b lg:border-b-0 border-[var(--line)]">
              {openRoles.map((role, idx) => (
                <div key={idx} className="py-8 group">
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
                    <span className="text-[var(--accent)] font-bold">{role.team}</span>
                    <span>{role.location} • {role.type}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {role.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-[var(--fg)]">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Competitive compensation + Equity + Gear Stipend</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Application Box */}
            <div className="lg:col-span-5">
              <div className="p-8 border border-[var(--line)] bg-[var(--surface)] rounded-xs sticky top-32">
                <span className="section-label block mb-2 text-[var(--accent)]">APPLY DIRECTLY</span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--fg)] mb-2">
                  Introduce Yourself
                </h3>
                <p className="text-xs text-[var(--muted)] mb-6">
                  Don&apos;t see the exact title? If your craft is exceptional, we create roles for extraordinary people.
                </p>
                <CareerApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

