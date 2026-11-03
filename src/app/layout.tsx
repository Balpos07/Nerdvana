import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import CookieConsent from "@/components/ui/CookieConsent";
import OfficeClock from "@/components/ui/OfficeClock";
import { siteSettings } from "@/lib/cms/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nerdvana.global"),
  icons: {
    icon: [
      {
        url: "/assest/nerdvana-logo.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: "/assest/nerdvana-logo.jpeg",
  },
  title: {
    default: `${siteSettings.agencyName} — ${siteSettings.tagline}`,
    template: `%s | ${siteSettings.agencyName}`,
  },
  description: siteSettings.coreBrandStatement,
  keywords: [
    "Nerdvana",
    "Nerdvana Technologies",
    "Figures by Nerdvana",
    "technology and creative agency",
    "cloud infrastructure",
    "DevOps engineering",
    "software engineering",
    "AI automation",
    "branding agency",
    "UI UX design",
    "web development",
    "digital growth",
  ],
  authors: [{ name: siteSettings.parentBrand }],
  creator: siteSettings.agencyName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nerdvana.global",
    siteName: siteSettings.agencyName,
    title: `${siteSettings.agencyName} — ${siteSettings.heroHeadline}`,
    description: siteSettings.coreBrandStatement,
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: `${siteSettings.agencyName} Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.agencyName} — ${siteSettings.heroHeadline}`,
    description: siteSettings.coreBrandStatement,
    creator: "@nerdvana_hq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSettings.parentBrand,
    alternateName: siteSettings.agencyName,
    url: "https://nerdvana.global",
    description: siteSettings.coreBrandStatement,
    department: [
      {
        "@type": "Organization",
        name: "Nerdvana Technologies",
        description: "Cloud, DevOps, Software Engineering, AI & Automation, Reliability & Security",
      },
      {
        "@type": "Organization",
        name: "Figures by Nerdvana",
        description: "Branding, UI/UX, Web Design & Development, Creative Production, Marketing & Growth",
      },
    ],
    address: siteSettings.offices.map((office) => ({
      "@type": "PostalAddress",
      streetAddress: office.address,
      addressLocality: office.name,
      addressCountry: office.label.split(", ")[1],
    })),
    sameAs: siteSettings.socials.map((s) => s.url),
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F5F5F2] selection:bg-[var(--accent)] selection:text-[var(--accent-fg)]">
        <LenisProvider>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <div className="office-clock-dock fixed bottom-5 right-5 z-[60] hidden overflow-hidden sm:block rounded-sm border border-[var(--line)] bg-[var(--bg)]/95 px-4 py-3 shadow-lg backdrop-blur-md">
            <div className="office-clock-track">
              {[...siteSettings.offices, ...siteSettings.offices].map((office, index) => (
                <OfficeClock
                  key={`${office.name}-${index}`}
                  label={office.label}
                  timezone={office.timezone}
                />
              ))}
            </div>
          </div>
          <Footer />
          <CookieConsent />
        </LenisProvider>
      </body>
    </html>
  );
}
