"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("nerdvana_preloaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("nerdvana_preloaded", "true");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const letters = "NERDVANA".split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0A0A] text-[#F5F5F2]"
        >
          <div className="overflow-hidden flex items-center justify-center">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-4xl md:text-6xl font-extrabold tracking-tighter"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B8FF00]">
              Technology • Creativity • Growth
            </span>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
            className="w-24 h-[2px] bg-[#B8FF00] mt-3 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
