import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://nikeetarawatstudio.com";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/portal"], // Future private segments
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
