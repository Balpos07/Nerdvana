"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function CareerApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Engineering",
    portfolio: "",
    note: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.portfolio) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  if (status === "success") {
    return (
      <div className="p-6 text-center border border-[var(--accent)] bg-[var(--bg)] rounded-xs">
        <CheckCircle2 className="w-10 h-10 text-[var(--accent)] mx-auto mb-3" />
        <h4 className="text-lg font-bold uppercase text-[var(--fg)] mb-2">
          Profile Received
        </h4>
        <p className="text-xs text-[var(--muted)] leading-relaxed">
          Thank you, {formData.name}. Our talent partner reviews portfolios every Friday and will contact you directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs font-mono">
      <div>
        <label className="block text-[var(--muted)] uppercase mb-1">Full Name *</label>
        <input
          type="text"
          required
          placeholder="ALEX RIVERA"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-[var(--bg)] border border-[var(--line)] px-3 py-2 text-[var(--fg)] uppercase focus:outline-none focus:border-[var(--accent)]"
        />
      </div>

      <div>
        <label className="block text-[var(--muted)] uppercase mb-1">Email Address *</label>
        <input
          type="email"
          required
          placeholder="ALEX@DOMAIN.COM"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-[var(--bg)] border border-[var(--line)] px-3 py-2 text-[var(--fg)] uppercase focus:outline-none focus:border-[var(--accent)]"
        />
      </div>

      <div>
        <label className="block text-[var(--muted)] uppercase mb-1">Discipline</label>
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full bg-[var(--bg)] border border-[var(--line)] px-3 py-2 text-[var(--fg)] uppercase focus:outline-none focus:border-[var(--accent)]"
        >
          <option value="Engineering">Engineering / WebGL</option>
          <option value="Brand Design">Brand & Visual Systems</option>
          <option value="Motion & 3D">Motion & 3D Visuals</option>
          <option value="Strategy">Strategy & Architecture</option>
        </select>
      </div>

      <div>
        <label className="block text-[var(--muted)] uppercase mb-1">Portfolio or GitHub URL *</label>
        <input
          type="url"
          required
          placeholder="HTTPS://..."
          value={formData.portfolio}
          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
          className="w-full bg-[var(--bg)] border border-[var(--line)] px-3 py-2 text-[var(--fg)] focus:outline-none focus:border-[var(--accent)]"
        />
      </div>

      <div>
        <label className="block text-[var(--muted)] uppercase mb-1">A brief note</label>
        <textarea
          rows={3}
          placeholder="What kind of problems excite you most?"
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          className="w-full bg-[var(--bg)] border border-[var(--line)] px-3 py-2 text-[var(--fg)] focus:outline-none focus:border-[var(--accent)] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full mt-2 py-3 rounded-full bg-[var(--accent)] text-white font-bold uppercase tracking-wider text-xs hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {/* <Sparkles className="w-3.5 h-3.5" /> */}
            <span>Submit Application</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
}

