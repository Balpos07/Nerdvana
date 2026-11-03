"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const premiumEase = [0.16, 1, 0.3, 1] as const;

export const MOTION_TOKENS = {
  micro: 180,
  standard: 400,
  reveal: 700,
  page: 600,
  entranceEase: premiumEase,
} as const;

export function TextRoll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-roll ${className}`}>
      <span className="text-roll__track" aria-hidden="true">
        <span className="text-roll__item">{children}</span>
        <span className="text-roll__item">{children}</span>
      </span>
      <span className="sr-only">{children}</span>
    </span>
  );
}

export function LineReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden align-bottom mr-[0.25em] inline-block">
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.04, ease: premiumEase }}
            className="inline-block"
            aria-hidden="true"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function CountUp({
  value,
  suffix = "",
  duration = 1200,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const started = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, inView, reduceMotion, value]);

  return <span ref={ref} className={className}>{display}{suffix}</span>;
}

export function Marquee({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`motion-marquee overflow-hidden ${className}`} aria-label="Nerdvana ticker">
      <div className="motion-marquee__track">
        <div className="motion-marquee__group">{children}</div>
        <div className="motion-marquee__group" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[70] h-[3px] origin-left bg-[var(--accent)] will-change-transform"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}

export function MaskReveal({
  children,
  className = "",
  delay = 0,
  y = 48,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(0 0 12% 0)", y, opacity: 1 }}
        whileInView={{ clipPath: "inset(0 0 0 0)", y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.95, delay, ease: premiumEase }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function CardReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(8% 0 0 0)", y: 36, opacity: 1 }}
      whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1.05, delay, ease: premiumEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Magnetic({
  children,
  className = "",
  strength = 20,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.45 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.45 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(offsetX, offsetY);
    if (distance > 100) return;

    const scale = Math.min(1, 20 / Math.max(distance, 1));
    x.set(Math.max(-strength, Math.min(strength, offsetX * scale * 0.18)));
    y.set(Math.max(-strength, Math.min(strength, offsetY * scale * 0.18)));
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxMedia({
  children,
  className = "",
  foreground,
  backgroundSpeed = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  foreground?: React.ReactNode;
  backgroundSpeed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-48 * backgroundSpeed, 48 * backgroundSpeed]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [48 * 0.7, -48 * 0.7]);
  const smoothForeground = useSpring(foregroundY, { stiffness: 80, damping: 22, mass: 0.5 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: backgroundY }} className="absolute -inset-y-12 inset-x-0">
        {children}
      </motion.div>
      {foreground && (
        <motion.div style={{ y: smoothForeground }} className="relative z-10 h-full">
          {foreground}
        </motion.div>
      )}
    </div>
  );
}
