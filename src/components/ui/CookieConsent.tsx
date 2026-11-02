"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("nerdvana-cookie-consent");
    setVisible(!consent);
  }, []);

  const choose = (value: "accepted" | "essential-only") => {
    window.localStorage.setItem("nerdvana-cookie-consent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Cookie consent"
      className="fixed z-[100] left-4 right-4 bottom-4 md:left-auto md:right-8 md:max-w-md p-5 rounded-xs border border-[var(--line)] bg-[#F5F5F2] text-[#0A0A0A] shadow-2xl"
    >
      <p className="text-sm font-bold uppercase tracking-tight mb-2">Cookies, clearly explained</p>
      <p className="text-xs leading-relaxed mb-4 text-black/65">
        We use essential storage for site functions and can use optional analytics to improve the experience.
        Read our <Link href="/cookie-policy" className="underline underline-offset-2">Cookie Policy</Link>.
      </p>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="px-4 py-2 rounded-full bg-[#B8FF00] text-[#0A0A0A] text-xs font-bold uppercase"
        >
          Accept optional
        </button>
        <button
          type="button"
          onClick={() => choose("essential-only")}
          className="px-4 py-2 rounded-full border border-black/20 text-xs font-bold uppercase"
        >
          Essential only
        </button>
      </div>
    </aside>
  );
}
