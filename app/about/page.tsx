import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Our Story & Craftsmanship | Nikeeta Rawat Resin Studio",
  description: "Learn about artist Nikeeta Rawat and our dedication to organic preservation, slow curing cycles, and luxury bespoke resin artwork.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Our Story & Craftsmanship | Nikeeta Rawat Resin Studio",
    "description": "Learn about artist Nikeeta Rawat and our dedication to organic preservation, slow curing cycles, and luxury bespoke resin artwork.",
    "url": "https://nikeetarawatstudio.com/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Nikeeta Rawat",
      "jobTitle": "Lead Artist & Founder",
      "description": "Founder and principal artist at Nikeeta Rawat Resin Studio, specializing in premium UV-stable resin flower preservation.",
      "worksFor": {
        "@type": "LocalBusiness",
        "name": "Nikeeta Rawat Resin Studio"
      }
    }
  };

  const values = [
    {
      title: "Precision Craftsmanship",
      description: "Resin is unforgiving. A single speck of dust, an incorrect mixing ratio, or a rushed pour can ruin weeks of work. We sand our pieces using 10 sequential grits and finish them with diamond polishing compound to achieve optical-grade clarity."
    },
    {
      title: "Patience and Respect",
      description: "Casting botanicals takes time. Flowers must be completely dried in specialized silica crystal arrays over weeks to extract all moisture without losing structure. Pouring resin is done in thin, slow layers over several days to avoid heat damage."
    },
    {
      title: "Emotional Curation",
      description: "We are not mass-producing decor. Every garland, ring, photo, or handwritten note is treated as a sacred relic. We listen to your stories, understand the context of your celebrations or farewells, and reflect that in the artwork design."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-studio-bg text-white font-sans selection:bg-gold selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-grow pt-12 pb-24">
        {/* HERO SECTION */}
        <section className="relative py-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                  Behind the Curation
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-8">
                  The Artist & The Studio
                </h1>
                <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed tracking-wide">
                  Preserving your most intimate milestones is a labor of love, patience, and meticulous craftsmanship.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ARTIST STORY & STUDIO SECTION */}
        <section className="py-12 bg-studio-surface/30 border-y border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Photo Panel */}
              <div className="lg:col-span-6">
                <FadeUp>
                  <div className="relative h-[320px] sm:h-[450px] lg:h-[550px] w-full border border-white/10 overflow-hidden">
                    <Image
                      src="/images/raw-staging/artwork-50.jpg"
                      alt="Artist Nikeeta Rawat in her resin studio"
                      fill
                      className="object-cover"
                    />
                  </div>
                </FadeUp>
              </div>

              {/* Story Content */}
              <div className="lg:col-span-6 space-y-6 font-light text-zinc-300 leading-relaxed text-sm md:text-base">
                <FadeUp delay={200}>
                  <h2 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide mb-6">
                    A Passion for Crystalline Memories
                  </h2>
                  <p>
                    Nikeeta Rawat Resin Studio began with a simple realization: the most beautiful moments in our lives are represented by materials that decay. Wedding flowers wither within days, graduation garlands dry out in desk drawers, and farewell tokens are easily misplaced.
                  </p>
                  <p className="mt-4">
                    Founded by artist Nikeeta Rawat, our studio combines the chemical science of clear-casting resin with high-end design sensibilities. Located in our private workshop, we spent years refining techniques to suspend organic materials inside solid resin without discoloration, bubbles, or decay.
                  </p>
                  <p className="mt-4">
                    Today, the studio works with clients across the country to create museum-grade commissions. Every piece is handled personally by Nikeeta and a small team of dedicated artisans, ensuring the highest standards of structural integrity and aesthetic elegance.
                  </p>
                  <div className="pt-6">
                    <Link
                      href="/commission"
                      className="inline-flex items-center justify-center bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10"
                    >
                      Commission Your Piece
                    </Link>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-24 bg-studio-bg">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-20">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block mb-2">Our Pillars</span>
              <h2 className="font-serif text-3xl text-white font-light tracking-wide">Studio Philosophy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, idx) => (
                <FadeUp key={idx} delay={idx * 150} className="bg-studio-surface border border-white/5 p-8 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-serif text-xl text-white font-light tracking-wide mb-4">{val.title}</h3>
                    <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-8 text-gold/30 font-serif text-lg text-right">0{idx + 1}</div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* THE PROCESS CALL OUT */}
        <section className="py-16 bg-studio-surface border-y border-white/5">
          <div className="mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
            <FadeUp>
              <h2 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide mb-6">
                Curious About the Technical Curation?
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl mb-8">
                From the moment we receive your fresh flowers to the final sanding and diamond-paste buffing, our process is fully documented and transparent.
              </p>
              <Link
                href="/#process"
                className="text-xs uppercase tracking-[0.2em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
              >
                Learn More About Our Process &rarr;
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
