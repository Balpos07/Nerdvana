import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import WhatNerdvanaDoes from "@/components/home/WhatNerdvanaDoes";
import ServicesSection from "@/components/home/ServicesSection";
import OurWorkSection from "@/components/home/OurWorkSection";
import OurPackagesSection from "@/components/home/OurPackagesSection";
import CuriousSection from "@/components/home/CuriousSection";
import WhyNerdvanaSection from "@/components/home/WhyNerdvanaSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProofTestimonialsSection from "@/components/home/ProofTestimonialsSection";
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
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: `${siteSettings.agencyName} — ${siteSettings.tagline}`,
      },
    ],
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

      {/* 4. Our Work: Work we're proud of */}
      <OurWorkSection />

      {/* 5. Our Packages: Packaged offerings */}
      <OurPackagesSection />

      {/* 6. Curious?: Problem-led diagnosis */}
      <CuriousSection />

      {/* 7. Why Nerdvana: The 5 strategic pillars */}
      <WhyNerdvanaSection />

      {/* 8. Our Process: 6-step lifecycle */}
      <ProcessSection />

      {/* 9. Proof & Testimonials */}
      <ProofTestimonialsSection />

      {/* 10. Questions Answered: FAQ with categories */}
      <QuestionsAnsweredSection />

      {/* 11. Let's Talk: Full brief contact form */}
      <LetsTalkSection />
    </div>
  );
}
