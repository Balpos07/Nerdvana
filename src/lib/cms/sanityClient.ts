import {
  projects,
  serviceDivisions,
  packages,
  curiousProblems,
  processSteps,
  faqCategories,
  siteSettings,
  whatNerdvanaDoes,
  whyNerdvana,
  posts,
} from "./data";
import {
  Project,
  ServiceDivision,
  PackageItem,
  CuriousProblem,
  ProcessStep,
  FAQCategoryItem,
  SiteSettings,
  Post,
} from "./types";

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

export async function getServiceDivisions(): Promise<ServiceDivision[]> {
  return serviceDivisions;
}

export async function getPackages(): Promise<PackageItem[]> {
  return packages;
}

export async function getCuriousProblems(): Promise<CuriousProblem[]> {
  return curiousProblems;
}

export async function getProcessSteps(): Promise<ProcessStep[]> {
  return processSteps;
}

export async function getFAQs(): Promise<FAQCategoryItem[]> {
  return faqCategories;
}

export async function getWhatNerdvanaDoes() {
  return whatNerdvanaDoes;
}

export async function getWhyNerdvana() {
  return whyNerdvana;
}

export async function getAllPosts(): Promise<Post[]> {
  return [...posts];
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find((p) => p.slug === slug);
}
