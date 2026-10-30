import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import IntroStatement from "@/components/home/IntroStatement";
import StatementMarquee from "@/components/home/StatementMarquee";
import ServicesSection from "@/components/home/ServicesSection";
import InNumbersSection from "@/components/home/InNumbersSection";
import AwardsSection from "@/components/home/AwardsSection";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import StudioNotesTeaser from "@/components/home/StudioNotesTeaser";
import PricingSection from "@/components/home/PricingSection";
import CareersCTA from "@/components/home/CareersCTA";
import MadLibContactForm from "@/components/home/MadLibContactForm";
import FAQSection from "@/components/home/FAQSection";
import { siteSettings } from "@/lib/cms/data";

export const metadata: Metadata = {
  title: `${siteSettings.agencyName} — Creative Engineering & Digital Flagships`,
  description: siteSettings.descriptor,
  openGraph: {
    title: `${siteSettings.agencyName} — Creative Engineering & Digital Flagships`,
    description: siteSettings.descriptor,
    url: "https://kontrast-agency.com",
    siteName: siteSettings.fullName,
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: `${siteSettings.agencyName} Creative Agency`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.agencyName} — Creative Engineering & Digital Flagships`,
    description: siteSettings.descriptor,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 6.1 Hero with giant wordmark and four parallax portrait images */}
      <HeroSection />

      {/* 6.2 Scroll-revealed intro statement */}
      <IntroStatement />

      {/* 6.3 Opposing-direction text marquee */}
      <StatementMarquee />

      {/* 6.4 Four lettered services (A to D) with sub-service lists */}
      <ServicesSection />

      {/* 6.5 Three animated odometer stats with images */}
      <InNumbersSection />

      {/* 6.6 Awards table */}
      <AwardsSection />

      {/* 6.7 Partner logo marquee */}
      <PartnersMarquee />

      {/* 6.8 Pinned scroll-driven process with four steps */}
      <ProcessSection />

      {/* 6.9 Testimonials slider */}
      <TestimonialsSlider />

      {/* 6.10 Two latest blog posts */}
      <StudioNotesTeaser />

      {/* 6.11 Pricing with monthly/yearly toggle and 3 tiers */}
      <PricingSection />

      {/* 6.12 Careers CTA */}
      <CareersCTA />

      {/* 6.13 Mad-libs sentence-style contact form */}
      <MadLibContactForm />

      {/* 6.14 FAQ accordion */}
      <FAQSection />
    </div>
  );
}
