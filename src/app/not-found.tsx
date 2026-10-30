import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-[var(--bg)] text-[var(--fg)]">
      <span className="section-label mb-4 text-[var(--accent)] font-mono">
        STATUS // 404
      </span>
      <h1 className="text-7xl sm:text-9xl font-black uppercase tracking-tighter text-[var(--fg)] mb-4">
        Void
      </h1>
      <p className="text-base md:text-xl text-[var(--muted)] max-w-md mb-8">
        The coordinate or dispatch you are looking for has been relocated, superseded, or dissolved.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--fg)] text-[var(--bg)] font-bold text-xs uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--line)] text-xs font-mono uppercase tracking-wider text-[var(--fg)] hover:border-[var(--accent)] transition-all"
        >
          <span>Explore Work</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

