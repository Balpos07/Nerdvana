"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whatNerdvanaDoes } from "@/lib/cms/data";
import { LineReveal, MaskReveal } from "@/components/ui/MotionEffects";

export default function WhatNerdvanaDoes() {
  const reduceMotion = useReducedMotion();
  const [deck, setDeck] = useState(whatNerdvanaDoes.stages);
  const [isShuffling, setIsShuffling] = useState(false);
  const [recycledStage, setRecycledStage] = useState<string | null>(null);

  useEffect(() => {
    if (reduceMotion || isShuffling) return;

    const timeout = window.setTimeout(() => setIsShuffling(true), 2400);
    return () => window.clearTimeout(timeout);
  }, [isShuffling, reduceMotion]);

  const completeShuffle = (stageLabel: string) => {
    setDeck((currentDeck) => [...currentDeck.slice(1), currentDeck[0]]);
    setRecycledStage(stageLabel);
    setIsShuffling(false);
  };

  return (
    <section className="py-8 md:py-20 bg-[#0A0A0A] border-b border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="border-b border-[var(--line)] pb-4 mb-5 md:pb-8 md:mb-10">
          <span className="section-label block mb-2 md:mb-3 text-[var(--fg)]">
            01 // PROPOSITION
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 md:gap-6">
            <MaskReveal>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight text-[var(--fg)]">
                <LineReveal text={whatNerdvanaDoes.headline} />
              </h2>
              <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mt-2 md:mt-4 leading-relaxed">
                {whatNerdvanaDoes.descriptor}
              </p>
            </MaskReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--line)] bg-white text-xs font-mono text-[var(--fg)]">
              <span>END-TO-END DELIVERY CYCLE</span>
            </div>
          </div>
        </div>

        <div
          className="relative h-[390px] w-full overflow-x-clip md:h-[460px]"
          style={{ perspective: "1600px" }}
          role="list"
          aria-label="Nerdvana delivery phases"
        >
          {deck.map((stage, depth) => {
            const stageIndex = whatNerdvanaDoes.stages.findIndex(
              (item) => item.label === stage.label,
            );
            const isLeaving = isShuffling && depth === 0;
            const targetDepth = isShuffling ? Math.max(depth - 1, 0) : depth;
            const isRecycling = recycledStage === stage.label && !isShuffling;

            return (
              <motion.article
                key={stage.label}
                className="absolute inset-x-0 top-0 grid h-[370px] grid-cols-1 grid-rows-[1fr_auto] gap-6 overflow-hidden rounded-sm border border-black/15 bg-white p-6 shadow-[0_12px_40px_#B8FF0033] sm:p-8 md:h-[390px] md:grid-cols-[1.05fr_.95fr] md:grid-rows-1 md:gap-10 md:p-12"
                role="listitem"
                style={{
                  zIndex: deck.length - depth,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  x: isLeaving ? "110%" : 0,
                  y: isLeaving ? -36 : targetDepth * 14,
                  z: isLeaving ? 100 : targetDepth * -36,
                  scale: isLeaving ? 0.94 : 1 - targetDepth * 0.025,
                  rotate: isLeaving ? 8 : targetDepth * -0.55,
                  opacity: isLeaving ? 0 : 1 - targetDepth * 0.08,
                }}
                transition={{
                  duration: reduceMotion || isRecycling ? 0 : 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onAnimationComplete={() => {
                  if (isLeaving) completeShuffle(stage.label);
                }}
                aria-label={`Phase ${stageIndex + 1}: ${stage.label}`}
              >
                <div className="flex min-h-0 flex-col justify-between">
                  <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/50 md:text-xs">
                    <span className="inline-flex h-7 items-center rounded-full border border-black/15 px-3">
                      DELIVERY PHASE
                    </span>
                    <span>0{stageIndex + 1} / 06</span>
                  </div>

                  <div className="mt-5 flex items-end gap-4 md:mt-0 md:gap-6">
                    <span
                      aria-hidden="true"
                      className="font-mono text-6xl font-black leading-[0.8] tracking-tighter text-black/10 sm:text-7xl md:text-8xl lg:text-9xl"
                    >
                      0{stageIndex + 1}
                    </span>
                    <h3 className="pb-0.5 text-3xl font-black uppercase leading-[0.9] tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl lg:text-6xl">
                      {stage.label}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-between border-t border-black/15 pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <p className="max-w-lg text-base leading-relaxed text-black/65 sm:text-lg md:text-xl">
                    {stage.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[var(--fg)] sm:text-xs">
                      <CheckCircle2 className="h-4 w-4 text-[var(--fg)]" />
                      <span>PHASE READY</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[var(--fg)] opacity-50" />
                  </div>
                </div>
              </motion.article>
            );
          })}
          <div
            aria-hidden="true"
            className="absolute -bottom-5 left-0 flex gap-2"
          >
            {whatNerdvanaDoes.stages.map((stage) => (
              <span
                key={stage.label}
                className={`h-1 w-6 rounded-full transition-colors duration-300 ${
                  deck[0].label === stage.label
                    ? "bg-[var(--fg)]"
                    : "bg-[var(--line)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
