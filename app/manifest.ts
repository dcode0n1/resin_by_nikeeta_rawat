import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nikeeta Rawat Resin Studio",
    short_name: "Nikeeta Resin",
    description: "Bespoke preservation of wedding garlands, florals, and memories into luxury handcrafted resin artwork.",
    start_url: "/",
    display: "standalone",
    background_color: "#0e0e0f",
    theme_color: "#d6a84b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
