"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((current) => Math.min(current + 4, 100));
    }, 200);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(timer);
    };
  }, []);

  const letters = "NERDVANA".split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          style={{ backgroundColor: "#0A0A0A" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden text-[#F5F5F2]"
          role="status"
          aria-label={`Loading Nerdvana, ${progress} percent`}
        >
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-6 right-6 top-6 flex items-center justify-between border-t border-[#F5F5F2]/20 pt-3 origin-left sm:left-10 sm:right-10 sm:top-10"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#F5F5F2]/55">
              NERDVANA
            </span>
            <motion.span
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B8FF00]"
            >
              Initializing
            </motion.span>
          </motion.div>

          <div className="relative flex w-full items-center justify-center px-4 sm:px-10">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[7%] right-[7%] top-1/2 h-px origin-left bg-[#B8FF00]"
            >
              <motion.div
                animate={{ x: ["-10%", "110%"] }}
                transition={{ duration: 1.1, delay: 0.35, ease: "easeInOut" }}
                className="absolute -left-px top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#B8FF00] shadow-[0_0_18px_rgba(184,255,0,0.85)]"
              />
            </motion.div>

            <div className="relative flex items-center justify-center overflow-hidden">
              {letters.map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  initial={{
                    y: index % 2 === 0 ? "115%" : "-115%",
                    rotate: index % 2 === 0 ? 9 : -9,
                    opacity: 0,
                  }}
                  animate={{ y: "0%", rotate: 0, opacity: 1 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.12 + index * 0.055,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-[clamp(3rem,14vw,10rem)] font-black leading-none tracking-[-0.085em] text-[#F5F5F2]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.08, ease: "linear" }}
            className="absolute bottom-0 left-0 h-[3px] max-w-full bg-[#B8FF00]"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="absolute bottom-6 left-6 flex items-end gap-3 sm:bottom-10 sm:left-10"
          >
            <span className="font-mono text-4xl font-light leading-none tracking-[-0.08em] text-[#F5F5F2] sm:text-5xl">
              {progress.toString().padStart(3, "0")}
            </span>
            <span className="mb-1 font-mono text-[9px] uppercase tracking-[0.24em] text-[#F5F5F2]/45">
              %
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="absolute bottom-8 right-6 hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#F5F5F2]/45 sm:right-10 sm:flex"
          >
            Technology
            <span className="size-1 bg-[#B8FF00]" />
            Creativity
            <span className="size-1 bg-[#B8FF00]" />
            Growth
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
