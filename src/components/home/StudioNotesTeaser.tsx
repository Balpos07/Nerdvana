"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/cms/data";

export default function StudioNotesTeaser() {
  const latestPosts = posts.slice(0, 2);

  return (
    <section className="py-24 md:py-36 bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-16 border-b border-[var(--line)]">
          <div>
            <span className="section-label block mb-3">08 // INTELLECT</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[var(--fg)]">
              Studio Notes
            </h2>
          </div>

          <Link
            href="/feed"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--fg)] hover:text-[var(--accent)] transition-colors group"
          >
            <span>Read All Notes</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 2 Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-16">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between border border-[var(--line)] p-6 md:p-8 rounded-sm bg-[var(--surface)] hover:border-[var(--accent)]/50 transition-all"
            >
              <div>
                {/* Cover Image */}
                <Link
                  href={`/feed/${post.slug}`}
                  className="block relative aspect-[16/9] w-full overflow-hidden rounded-xs mb-6 border border-[var(--line)] bg-[var(--bg)]"
                  data-cursor-text="READ"
                >
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </Link>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted)] mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-3">
                  <Link href={`/feed/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {post.subtitle}
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--muted)]">
                  BY {post.author.name}
                </span>
                <Link
                  href={`/feed/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

