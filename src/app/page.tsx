import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import WhatNerdvanaDoes from "@/components/home/WhatNerdvanaDoes";
import ServicesSection from "@/components/home/ServicesSection";
// TODO: Re-enable when verified portfolio content is available.
// import OurWorkSection from "@/components/home/OurWorkSection";
// TODO: Re-enable when pricing has been approved.
// import OurPackagesSection from "@/components/home/OurPackagesSection";
import CuriousSection from "@/components/home/CuriousSection";
import WhyNerdvanaSection from "@/components/home/WhyNerdvanaSection";
import ProcessSection from "@/components/home/ProcessSection";
// TODO: Re-enable when approved client testimonials are available.
// import ProofTestimonialsSection from "@/components/home/ProofTestimonialsSection";
import QuestionsAnsweredSection from "@/components/home/QuestionsAnsweredSection";
import LetsTalkSection from "@/components/home/LetsTalkSection";
import { siteSettings } from "@/lib/cms/data";
import { ScrollProgressBar } from "@/components/ui/MotionEffects";

export const metadata: Metadata = {
  title: `${siteSettings.agencyName} — ${siteSettings.tagline}`,
  description: siteSettings.coreBrandStatement,
  openGraph: {
    title: `${siteSettings.agencyName} — ${siteSettings.heroHeadline}`,
    description: siteSettings.coreBrandStatement,
    url: "https://nerdvana.global",
    siteName: siteSettings.agencyName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.agencyName} — ${siteSettings.heroHeadline}`,
    description: siteSettings.coreBrandStatement,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#0A0A0A]">
      <ScrollProgressBar />
      {/* 1. Hero: Build better. Grow faster. Stand out. */}
      <HeroSection />

      {/* 2. What Nerdvana Does: Technology + Creativity + Growth */}
      <WhatNerdvanaDoes />

      {/* 3. Our Services: Nerdvana Technologies & Figures by Nerdvana */}
      <ServicesSection />

      {/* 4. Portfolio: commented until verified projects and assets are available.
          <OurWorkSection /> */}

      {/* 5. Packages: commented until pricing and scopes are approved.
          <OurPackagesSection /> */}

      {/* 6. Curious?: Problem-led diagnosis */}
      <CuriousSection />

      {/* 7. Why Nerdvana: The 5 strategic pillars */}
      <WhyNerdvanaSection />

      {/* 8. Our Process: 6-step lifecycle */}
      <ProcessSection />

      {/* 9. Proof & Testimonials: commented until approved client proof is available.
          <ProofTestimonialsSection /> */}

      {/* 10. Questions Answered: FAQ with categories */}
      <QuestionsAnsweredSection />

      {/* 11. Let's Talk: Full brief contact form */}
      <LetsTalkSection />
    </div>
  );
}
