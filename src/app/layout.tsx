import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
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
  metadataBase: new URL("https://kontrast-agency.com"),
  title: {
    default: `${siteSettings.agencyName} — Global Digital & Creative Engineering Agency`,
    template: `%s | ${siteSettings.agencyName}`,
  },
  description: siteSettings.descriptor,
  keywords: [
    "creative agency",
    "digital flagship",
    "brand identity",
    "WebGL agency",
    "Next.js agency",
    "high-conversion design",
    "design engineering",
  ],
  authors: [{ name: siteSettings.fullName }],
  creator: siteSettings.agencyName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kontrast-agency.com",
    siteName: siteSettings.fullName,
    title: `${siteSettings.agencyName} — Creative Engineering & Digital Flagships`,
    description: siteSettings.descriptor,
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
        width: 1200,
        height: 630,
        alt: `${siteSettings.agencyName} Creative Agency`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.agencyName} — Creative Engineering & Digital Flagships`,
    description: siteSettings.descriptor,
    creator: "@kontrast_hq",
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
    name: siteSettings.fullName,
    alternateName: siteSettings.agencyName,
    url: "https://kontrast-agency.com",
    logo: "https://kontrast-agency.com/logo.png",
    description: siteSettings.descriptor,
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
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)] selection:bg-[var(--accent)] selection:text-white">
        <LenisProvider>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
