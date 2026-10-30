import { projects, posts, testimonials, awards, services, pricingPackages, faqItems, siteSettings } from "./data";
import { Project, Post, Testimonial, Award, ServiceItem, PricingPackage, FAQItem, SiteSettings } from "./types";

/**
 * Sanity CMS Client & Fallback Data Layer
 * If SANITY_PROJECT_ID is provided in the environment, you can seamlessly connect
 * live Sanity client queries. Otherwise, it serves from the high-fidelity typed CMS store.
 */

export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
);

export async function getSiteSettings(): Promise<SiteSettings> {
  return siteSettings;
}

export async function getAllProjects(): Promise<Project[]> {
  return [...projects].sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return projects.find((p) => p.slug === slug);
}

export async function getAllPosts(): Promise<Post[]> {
  return [...posts];
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find((p) => p.slug === slug);
}

export async function getLatestPosts(limit = 2): Promise<Post[]> {
  return posts.slice(0, limit);
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  return [...testimonials].sort((a, b) => a.order - b.order);
}

export async function getAllAwards(): Promise<Award[]> {
  return awards;
}

export async function getAllServices(): Promise<ServiceItem[]> {
  return services;
}

export async function getAllPricingPackages(): Promise<PricingPackage[]> {
  return pricingPackages;
}

export async function getAllFAQs(): Promise<FAQItem[]> {
  return [...faqItems].sort((a, b) => a.order - b.order);
}

