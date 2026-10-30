import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Share2 } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/cms/sanityClient";
import { siteSettings } from "@/lib/cms/data";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — Studio Notes`,
    description: post.subtitle,
    openGraph: {
      title: `${post.title} | ${siteSettings.agencyName}`,
      description: post.subtitle,
      images: [{ url: post.cover }],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="pt-28 md:pt-36 pb-24 md:pb-36 min-h-screen">
      <div className="max-w-[1040px] mx-auto px-6 md:px-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/feed"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Notes</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="border-b border-[var(--line)] pb-12 mb-12">
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--accent)] mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--fg)] leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-8">
            {post.subtitle}
          </p>

          {/* Author Card */}
          <div className="flex items-center justify-between pt-6 border-t border-[var(--line)]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[var(--line)]">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold uppercase text-xs text-[var(--fg)]">
                  {post.author.name}
                </p>
                <p className="text-[11px] font-mono text-[var(--muted)]">
                  {post.author.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">SHARE ESSAY</span>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xs border border-[var(--line)] mb-16 bg-[var(--surface)]">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none text-[var(--fg)] text-base md:text-lg leading-relaxed space-y-6 pb-20 border-b border-[var(--line)]">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/\n### (.*)/g, '<h3 class="text-2xl font-bold uppercase tracking-tight text-[var(--fg)] mt-10 mb-4">$1</h3>')
                .replace(/\n## (.*)/g, '<h2 class="text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)] mt-12 mb-6">$1</h2>')
                .replace(/\n\n/g, '<p class="text-[var(--muted)] leading-relaxed mb-6">')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--fg)] font-bold">$1</strong>'),
            }}
          />
        </div>

        {/* Related Posts */}
        <div className="pt-16">
          <span className="section-label block mb-6 text-[var(--accent)]">
            MORE STUDIO NOTES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <div
                key={related.id}
                className="p-6 border border-[var(--line)] bg-[var(--surface)] rounded-xs group"
              >
                <span className="text-[10px] font-mono text-[var(--muted)] block mb-2">
                  {related.date}
                </span>
                <h4 className="text-lg font-bold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-3">
                  <Link href={`/feed/${related.slug}`}>{related.title}</Link>
                </h4>
                <Link
                  href={`/feed/${related.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[var(--accent)] hover:underline"
                >
                  <span>Read Note</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

