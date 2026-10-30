"use client";

import React, { useEffect, useState } from "react";

interface OfficeClockProps {
  timezone: string;
  label: string;
}

export default function OfficeClock({ timezone, label }: OfficeClockProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setTime(formatted);
      } catch {
        setTime("--:--");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider text-[var(--muted)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
      <span className="font-semibold text-[var(--fg)]">{label}</span>
      <span className="opacity-70">{time || "--:--"}</span>
    </div>
  );
}

