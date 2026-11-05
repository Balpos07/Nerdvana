import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/lib/cms/sanityClient";
import { siteSettings } from "@/lib/cms/data";
import { SharedCaseImage, SharedCaseTitle } from "@/components/ui/SharedCaseElement";

interface CaseStudyProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // TODO: Replace with verified project slugs before enabling case-study routes.
  return [{ slug: "coming-soon" }];
}

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${project.title} â€” Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteSettings.agencyName}`,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyProps) {
  return (
    <Suspense
      fallback={
        <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 animate-pulse">
            <div className="h-4 w-32 rounded bg-[var(--surface)] mb-8" />
            <div className="h-20 max-w-2xl rounded bg-[var(--surface)] mb-12" />
            <div className="aspect-[16/9] w-full rounded bg-[var(--surface)] mb-16" />
          </div>
        </div>
      }
    >
      <CaseStudyContent params={params} />
    </Suspense>
  );
}

async function CaseStudyContent({ params }: CaseStudyProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <article className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>
        </div>

        {/* Title Bar */}
        <div className="border-b border-[var(--line)] pb-12 mb-12">
<div className="mb-8 border-2 border-dashed border-[var(--line)] px-4 py-3 text-xs font-mono uppercase tracking-wider text-[var(--muted)]">
            VERIFIED PROJECT DATA // {project.client.toUpperCase()} // {project.year}
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="section-label text-[var(--accent)]">CASE STUDY //</span>
            <span className="px-3 py-1 rounded-full bg-[var(--surface)] text-[10px] font-mono text-[var(--accent)] uppercase border border-[var(--line)]">
              {project.division}
            </span>
          </div>

          <SharedCaseTitle slug={project.slug} className="mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)]">
              {project.title}
            </h1>
          </SharedCaseTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[var(--line)] text-xs font-mono uppercase">
            <div>
              <span className="text-[var(--muted)] block mb-1">CLIENT</span>
              <span className="font-bold text-[var(--fg)]">{project.client}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] block mb-1">INDUSTRY</span>
              <span className="font-bold text-[var(--fg)]">{project.industry}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] block mb-1">CATEGORY</span>
              <span className="font-bold text-[var(--fg)]">{project.category}</span>
            </div>
            <div>
              <span className="text-[var(--muted)] block mb-1">SERVICES</span>
              <span className="font-bold text-[var(--fg)]">{project.services.join(", ")}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs border border-[var(--line)] mb-16 md:mb-24 bg-[var(--surface)]">
          <SharedCaseImage slug={project.slug} className="absolute inset-0">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </SharedCaseImage>
        </div>

        {/* Summary & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[var(--line)] mb-20">
          <div className="lg:col-span-5">
            <span className="section-label block mb-3 text-[var(--accent)]">OVERVIEW</span>
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)]">
              {project.summary}
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="p-5 md:p-6 rounded-xs border border-[var(--line)] bg-[var(--surface)] flex flex-col justify-between"
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

        {/* Challenge, Approach & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[var(--line)] mb-20">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <span className="section-label block mb-2 text-[var(--accent)]">01 // THE CHALLENGE</span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mb-3">
                The Bottleneck
              </h3>
              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <span className="section-label block mb-2 text-[var(--accent)]">02 // THE APPROACH</span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mb-3">
                Nerdvana Architecture
              </h3>
              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div>
              <span className="section-label block mb-2 text-[var(--accent)]">03 // THE RESULTS</span>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mb-3">
                Commercial Impact
              </h3>
              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                {project.results}
              </p>
            </div>

            {project.technologyStack && (
              <div className="p-6 rounded-xs border border-[var(--line)] bg-[var(--surface)]">
                <span className="section-label block mb-3 text-[var(--accent)]">TECH STACK DEPLOYED</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologyStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-[var(--card-bg)] text-xs font-mono text-[var(--fg)] border border-[var(--line)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className="section-label block text-[var(--muted)]">VISUAL DOCUMENTATION</span>
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-[var(--line)] bg-[var(--surface)]"
              >
                <Image
                  src={img}
                  alt={`${project.title} Gallery ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quote */}
        {project.testimonial ? (
          <div className="p-8 md:p-14 rounded-xs border border-[var(--line)] bg-[var(--surface)] mb-20">
            <Quote className="w-10 h-10 text-[var(--accent)]/40 mb-6" />
            <p className="text-2xl md:text-3xl font-bold text-[var(--fg)] tracking-tight mb-3">
{project.testimonial?.quote ?? "Client testimonial copy to be added after approval to publish."}
            </p>
            <p className="text-sm text-[var(--muted)]">
              {project.testimonial
                ? `${project.testimonial.author} â€” ${project.testimonial.role}`
                : "CLIENT NAME â€” TITLE, COMPANY"}
            </p>
          </div>
        ) : null}

        {/* Next Case Study */}
        <div className="border-t border-[var(--line)] pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="section-label block mb-1 text-[var(--accent)]">NEXT CASE STUDY</span>
            <h4 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--fg)]">
              {nextProject.title}
            </h4>
          </div>

          <Link
            href={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] font-black uppercase tracking-wider text-xs hover:bg-[var(--accent-hover)] transition-all shadow-md group"
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
