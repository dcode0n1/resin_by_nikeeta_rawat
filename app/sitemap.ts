import { MetadataRoute } from "next";
import { collections } from "@/data/collections";
import { journalPosts } from "@/data/journal";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nikeetarawatstudio.com";

  // Base static routes
  const staticRoutes = [
    "",
    "/about",
    "/collections",
    "/gallery",
    "/journal",
    "/investment",
    "/commission",
    "/contact",
    "/preservation",
    "/privacy",
    "/terms",
    "/refund",
    "/guides",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Collection Programmatic SEO routes
  const collectionRoutes = collections.map((c) => ({
    url: `${baseUrl}/collections/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic Journal Post Programmatic SEO routes
  const journalRoutes = journalPosts.map((p) => ({
    url: `${baseUrl}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Location Programmatic SEO routes
  const locationRoutes = locations.map((l) => ({
    url: `${baseUrl}/preservation/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...collectionRoutes, ...journalRoutes, ...locationRoutes];
}

