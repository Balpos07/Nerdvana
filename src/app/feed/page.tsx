import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/cms/sanityClient";

export const metadata: Metadata = {
  title: "Studio Notes — Feed & Essays",
  description:
    "Essays on brand architecture, WebGL performance, typography as spatial structure, and contemporary creative engineering from Kontrast.",
};

export default async function FeedPage() {
  const posts = await getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Editorial Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-16">
          <span className="section-label block mb-3 text-[var(--accent)]">
            FEED // DISPATCHES
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[var(--fg)]">
              Studio Notes
            </h1>
            <p className="text-sm md:text-base text-[var(--muted)] max-w-md">
              Unfiltered thoughts on modern web craft, conversion psychology, and high-velocity engineering from our partners and designers.
            </p>
          </div>
        </div>

        {/* Featured Big Story Hero */}
        {featuredPost && (
          <div className="pb-20 border-b border-[var(--line)] mb-20">
            <span className="section-label block mb-4 text-[var(--accent)]">
              FEATURED DISPATCH
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7">
                <Link
                  href={`/feed/${featuredPost.slug}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-[var(--line)] bg-[var(--surface)] group"
                  data-cursor-text="READ"
                >
                  <Image
                    src={featuredPost.cover}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    priority
                  />
                </Link>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[var(--muted)] mb-3">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors mb-4">
                    <Link href={`/feed/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="text-base text-[var(--muted)] leading-relaxed mb-6">
                    {featuredPost.subtitle}
                  </p>
                </div>

                <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[var(--line)]">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-mono text-[var(--fg)]">
                      {featuredPost.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/feed/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[var(--accent)] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {remainingPosts.map((post) => (
            <article
              key={post.id}
              className="border border-[var(--line)] p-6 md:p-8 rounded-xs bg-[var(--surface)] flex flex-col justify-between group hover:border-[var(--accent)]/50 transition-colors"
            >
              <div>
                <Link
                  href={`/feed/${post.slug}`}
                  className="block relative aspect-[16/9] w-full overflow-hidden rounded-xs border border-[var(--line)] mb-6 bg-[var(--bg)]"
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

                <div className="flex items-center gap-3 text-xs font-mono text-[var(--muted)] mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-3">
                  <Link href={`/feed/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {post.subtitle}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--muted)]">
                  {post.author.name}
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
    </div>
  );
}

