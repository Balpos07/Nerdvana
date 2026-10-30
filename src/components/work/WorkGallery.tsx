"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/cms/types";

interface WorkGalleryProps {
  initialProjects: Project[];
}

export default function WorkGallery({ initialProjects }: WorkGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Technology", "Branding", "Web", "Creative"];

  const filteredProjects =
    selectedCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm"
                : "border border-[var(--line)] text-[var(--muted)] hover:border-[var(--fg)]/40 hover:text-[var(--fg)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Grid with Alternating Rhythm */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            // Editorial rhythm: Alternate between wide (7 cols) and narrow (5 cols)
            const isWide = index % 3 === 0;
            const colSpan = isWide ? "md:col-span-7" : "md:col-span-5";

            return (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`${colSpan} group flex flex-col justify-between`}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="block relative aspect-[4/3] sm:aspect-[3/4] w-full overflow-hidden rounded-xs bg-[var(--surface)] border border-[var(--line)] mb-4"
                  data-cursor-text="VIEW"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)] text-white flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>

                {/* Card Meta */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-2">
                    <span className="uppercase">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>

                  <p className="text-sm text-[var(--muted)] mt-2 line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[var(--line)]">
                    {project.services.map((svc) => (
                      <span
                        key={svc}
                        className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--card-bg)] border border-[var(--line)] text-[var(--muted)]"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

