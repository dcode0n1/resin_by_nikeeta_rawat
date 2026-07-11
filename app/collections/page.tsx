import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Custom Occasions & Resin Collections | Nikeeta Rawat Resin Studio",
  description: "Browse our collections including Wedding Garland Preservation, Jewellery, Pressed Floral Frames, Memorials, and Custom River Furniture.",
};

export default function CollectionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Custom Occasions & Resin Collections | Nikeeta Rawat Resin Studio",
    "description": "Browse our collections including Wedding Garland Preservation, Jewellery, Pressed Floral Frames, Memorials, and Custom River Furniture.",
    "url": "https://nikeetarawatstudio.com/collections",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": collections.map((col, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "Service",
          "name": col.name,
          "description": col.story,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": col.startingPrice.replace(/[^0-9]/g, "")
          }
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
        {/* HERO HEADER */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                Occasions & Mediums
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                Our Collections
              </h1>
              <p className="max-w-2xl text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                Collections are not standard products. They represent occasions of celebration, transition, and legacy. Discover the catalog of custom possibilities.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* COLLECTIONS LISTING */}
        <section className="py-12 bg-studio-surface/20 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {collections.map((collection, index) => (
                <FadeUp key={collection.id} delay={index * 100}>
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="group block relative h-[320px] sm:h-[400px] overflow-hidden border border-white/10"
                  >
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80" />
                    
                    <Image
                      src={collection.heroImage}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">
                      <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold mb-2">Collection</span>
                      <h2 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide mb-3">
                        {collection.name}
                      </h2>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2 max-w-lg mb-6 transition-all duration-300 opacity-80 group-hover:opacity-100">
                        {collection.story}
                      </p>
                      <span className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-gold group-hover:translate-x-2 transition-transform duration-300">
                        Explore Landing Page &rarr;
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
