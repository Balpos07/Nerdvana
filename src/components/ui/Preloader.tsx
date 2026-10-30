"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check session storage to only show once per session, or brief entrance
    const hasLoaded = sessionStorage.getItem("kontrast_preloaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("kontrast_preloaded", "true");
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const letters = "KONTRAST".split("");

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
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0B0B0B] text-[#F4F2EE]"
        >
          <div className="overflow-hidden flex items-center justify-center">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="text-4xl md:text-6xl font-extrabold tracking-tighter"
              >
                {char}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
            className="w-24 h-[2px] bg-[#FF3E00] mt-4 origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

