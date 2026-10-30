export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  year: string;
  division: "Nerdvana Technologies" | "Figures by Nerdvana" | "Connected Synergy";
  category: "Technology" | "Branding" | "Web" | "Marketing" | "Creative";
  services: string[];
  coverImage: string;
  heroImage: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string;
  metrics: { label: string; value: string }[];
  technologyStack?: string[];
  creativeStrategy?: string;
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured: boolean;
  order: number;
}

export interface ServiceDivision {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  services: {
    title: string;
    description: string;
    capabilities: string[];
    deliverables: string[];
  }[];
}

export interface PackageItem {
  id: string;
  name: string;
  category: "Branding" | "Website / Digital Presence" | "Marketing & Growth" | "Technology" | "Custom Solutions";
  shortDescription: string;
  idealFor: string;
  whatsIncluded: string[];
  startingPrice: string;
  optionalAddons: string[];
  featured?: boolean;
}

export interface CuriousProblem {
  id: string;
  problem: string;
  solution: string;
  division: "Nerdvana Technologies" | "Figures by Nerdvana";
  capability: string;
  ctaText: string;
  targetHref: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface FAQCategoryItem {
  category: "About Nerdvana" | "Services" | "Projects" | "Packages" | "Working With Nerdvana";
  question: string;
  answer: string;
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

export interface SiteSettings {
  agencyName: string;
  parentBrand: string;
  tagline: string;
  heroHeadline: string;
  coreBrandStatement: string;
  offices: {
    name: string;
    label: string;
    timezone: string;
    address: string;
    phone: string;
    whatsapp?: string;
  }[];
  socials: {
    name: string;
    url: string;
  }[];
  stats: {
    experienceYears: number;
    projectsDelivered: number;
    clientSatisfaction: string;
    uptimeSLA: string;
  };
}
