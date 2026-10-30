import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/lib/cms/sanityClient";
import { siteSettings } from "@/lib/cms/data";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allProjects = await getAllProjects();
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteSettings.agencyName}`,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <article className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Hero Title & Client Bar */}
        <div className="border-b border-[var(--line)] pb-12 mb-12">
          <span className="section-label block mb-3 text-[var(--accent)]">
            CASE STUDY // {project.category}
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)] mb-8">
            {project.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[var(--line)] text-xs font-mono uppercase">
            <div>
              <span className="text-[var(--muted)] block mb-1">CLIENT</span>
              <span className="font-bold text-[var(--fg)]">{project.client}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] block mb-1">YEAR</span>
              <span className="font-bold text-[var(--fg)]">{project.year}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] block mb-1">DISCIPLINE</span>
              <span className="font-bold text-[var(--fg)]">{project.category}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] block mb-1">SERVICES</span>
              <span className="font-bold text-[var(--fg)]">{project.services.join(", ")}</span>
            </div>
          </div>
        </div>

        {/* Full-Bleed Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs border border-[var(--line)] mb-16 md:mb-24 bg-[var(--surface)]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Executive Summary & Key Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[var(--line)] mb-20">
          <div className="lg:col-span-5">
            <span className="section-label block mb-3">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)]">
              {project.summary}
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="p-4 md:p-6 rounded-xs border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between"
              >
                <span className="text-2xl md:text-3xl font-black font-mono text-[var(--accent)] mb-2">
                  {m.value}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--muted)]">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge, Approach & Outcome Narrative Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[var(--line)] mb-20">
          <div className="lg:col-span-4 flex flex-col gap-12">
            <div>
              <span className="section-label block mb-2 text-[var(--accent)]">01 // THE CHALLENGE</span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mb-4">
                The Tension
              </h3>
              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <span className="section-label block mb-2 text-[var(--accent)]">02 // THE APPROACH</span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mb-4">
                The Solution
              </h3>
              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div>
              <span className="section-label block mb-2 text-[var(--accent)]">03 // THE IMPACT</span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mb-4">
                The Commercial Outcome
              </h3>
              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <span className="section-label block text-[var(--muted)]">GALLERY // VISUAL SYSTEM</span>
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-[var(--line)] bg-[var(--surface)]"
              >
                <Image
                  src={img}
                  alt={`${project.title} Visual ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial (if available) */}
        {project.testimonial && (
          <div className="p-8 md:p-14 rounded-xs border border-[var(--line)] bg-[var(--surface)] mb-24">
            <Quote className="w-10 h-10 text-[var(--accent)]/40 mb-6" />
            <blockquote className="text-2xl md:text-3xl font-bold text-[var(--fg)] tracking-tight mb-8">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 border-t border-[var(--line)] pt-4">
              <div>
                <p className="font-extrabold uppercase text-sm text-[var(--fg)]">
                  {project.testimonial.author}
                </p>
                <p className="text-xs font-mono text-[var(--muted)]">
                  {project.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next Project Footer Link */}
        <div className="border-t border-[var(--line)] pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="section-label block mb-1">NEXT CASE STUDY</span>
            <h4 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--fg)]">
              {nextProject.title}
            </h4>
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--fg)] text-[var(--bg)] font-bold uppercase tracking-wider text-xs hover:bg-[var(--accent)] hover:text-white transition-all shadow-md group"
            data-cursor-text="NEXT"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}

