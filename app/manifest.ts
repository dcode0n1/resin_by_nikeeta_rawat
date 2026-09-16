import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nikeeta Rawat Resin Studio",
    short_name: "Nikeeta Resin",
    description:
      "Bespoke preservation of wedding garlands, florals, and memories into luxury handcrafted resin artwork.",
    start_url: "/",
    id: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui", "browser"],
    orientation: "portrait",
    background_color: "#0e0e0f",
    theme_color: "#d6a84b",
    categories: ["lifestyle", "shopping", "art"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pwa-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Commission Artwork",
        short_name: "Commission",
        description: "Inquire for bespoke flower and garland preservation",
        url: "/commission",
        icons: [{ src: "/favicon-32x32.png", sizes: "32x32" }],
      },
      {
        name: "Featured Collections",
        short_name: "Collections",
        description: "Browse bespoke preservation collections",
        url: "/collections",
        icons: [{ src: "/favicon-32x32.png", sizes: "32x32" }],
      },
      {
        name: "Artwork Gallery",
        short_name: "Gallery",
        description: "Explore completed studio exhibits",
        url: "/gallery",
        icons: [{ src: "/favicon-32x32.png", sizes: "32x32" }],
      },
      {
        name: "Contact Studio",
        short_name: "Contact",
        description: "Speak directly with artist Nikeeta Rawat",
        url: "/contact",
        icons: [{ src: "/favicon-32x32.png", sizes: "32x32" }],
      },
    ],
  };
}
