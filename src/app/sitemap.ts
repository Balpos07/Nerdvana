import { MetadataRoute } from "next";
import { getAllProjects, getAllPosts } from "@/lib/cms/sanityClient";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kontrast-agency.com";
  const projects = await getAllProjects();
  const posts = await getAllPosts();

  const staticPages = [
    "",
    "/work",
    "/studio",
    "/feed",
    "/contacts",
    "/terms-of-service",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const postPages = posts.map((post) => ({
    url: `${baseUrl}/feed/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...postPages];
}

