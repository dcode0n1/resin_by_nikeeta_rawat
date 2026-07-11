import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import GalleryClient from "@/components/gallery/GalleryClient";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Artwork Gallery Exhibits | Nikeeta Rawat Resin Studio",
  description: "Explore our masonry-style portfolio exhibits of wedding garland blocks, pressed floral frames, custom river tables, and memorial keepsakes.",
};

export default function GalleryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Artwork Gallery Exhibits | Nikeeta Rawat Resin Studio",
    "description": "Explore our portfolio of completed resin commissions including wedding garland blocks, pressed floral frames, and custom river tables.",
    "url": "https://nikeetarawatstudio.com/gallery",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": galleryItems.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "CreativeWork",
          "name": item.title,
          "description": item.description,
          "image": item.image,
          "genre": item.category
        }
      }))
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-studio-bg text-white font-sans selection:bg-gold selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-12 pb-24">
        {/* HEADER SECTION */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                The Exhibits
              </span>
              <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                Artwork Gallery
              </h1>
              <p className="max-w-2xl mx-auto text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                Browse our portfolio of completed commissions. Every piece is handcrafted, capturing botanical details and precious keepsakes in crystal resin.
              </p>
            </FadeUp>
          </div>
        </section>

        <GalleryClient />
      </main>

      <Footer />
    </div>
  );
}
