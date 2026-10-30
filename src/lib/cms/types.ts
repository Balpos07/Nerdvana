export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  year: string;
  category: "Branding" | "Digital Design" | "Motion & 3D" | "Strategy";
  services: string[];
  coverImage: string;
  heroImage: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured: boolean;
  order: number;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  readTime: string;
  cover: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  countryFlag: string;
  order: number;
}

export interface Award {
  id: string;
  name: string;
  category: string;
  count: string;
  year: string;
}

export interface ServiceItem {
  letter: string;
  title: string;
  shortDescription: string;
  description: string;
  items: string[];
  deliverables: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  originalMonthlyPrice: number;
  yearlyDiscountPercent: number;
  setupFee: number;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface SiteSettings {
  agencyName: string;
  fullName: string;
  descriptor: string;
  offices: {
    name: string;
    label: string;
    timezone: string;
    address: string;
    phone: string;
  }[];
  socials: {
    name: string;
    url: string;
    handle: string;
  }[];
  stats: {
    awards: number;
    clients: number;
    projects: number;
  };
}

