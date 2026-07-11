import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import FAQAccordion from "@/components/collections/FAQAccordion";
import { collections } from "@/data/collections";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Programmatic SEO (pSEO): Dynamic metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const collection = collections.find((c) => c.slug === resolvedParams.slug);
  if (!collection) return {};

  return {
    title: `${collection.name} | Nikeeta Rawat Resin Studio`,
    description: collection.story,
    openGraph: {
      title: `${collection.name} Preservation | Nikeeta Rawat Resin Studio`,
      description: collection.tagline,
      type: "website",
      images: [
        {
          url: collection.heroImage,
          width: 1200,
          height: 630,
          alt: collection.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${collection.name} | Nikeeta Rawat Resin Studio`,
      description: collection.tagline,
    },
  };
}

// Generate static params for compile-time pre-rendering (highly performant SEO)
export async function generateStaticParams() {
  return collections.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const collection = collections.find((c) => c.slug === slug);
  if (!collection) {
    notFound();
  }

  // Schema Markup (JSON-LD Structured Data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": collection.name,
    "description": collection.story,
    "image": collection.heroImage,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nikeeta Rawat Resin Studio",
      "image": "https://placehold.co/600x400/0e0e0f/d6a84b?text=Nikeeta+Studio",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Neha rawat house, BEL road, ratanpur sukhrow",
        "addressLocality": "Kotdwar",
        "addressRegion": "Uttarakhand",
        "postalCode": "246149",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 29.7340378,
        "longitude": 78.5008013
      },
      "hasMap": "https://www.google.com/maps/place/Neha+rawat+house/@29.7340378,78.5008013,17z/data=!3m1!4b1!4m6!3m5!1s0x39097d357d819629:0x673c61f43ae3f89a!8m2!3d29.7340378!4d78.5008013!16s%2Fg%2F11k3jfb7tc"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": collection.startingPrice.replace(/[^0-9]/g, ""),
      "priceValidUntil": "2027-12-31"
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-studio-bg text-white font-sans selection:bg-gold selection:text-black">
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={collection.heroImage}
              alt={collection.name}
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/60 to-transparent" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                Custom Collection
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-4">
                {collection.name}
              </h1>
              <p className="max-w-xl mx-auto text-sm md:text-base font-light text-zinc-300 leading-relaxed tracking-wide italic">
                &ldquo;{collection.tagline}&rdquo;
              </p>
            </FadeUp>
          </div>
        </section>

        {/* STORY & NARRATIVE */}
        <section className="py-20 border-t border-white/5 bg-studio-surface/20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Left Column: The Emotional Story */}
              <div className="lg:col-span-7 space-y-6">
                <FadeUp>
                  <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block mb-2">The Story</span>
                  <h2 className="font-serif text-3xl text-white font-light tracking-wide mb-6">Why We Create This</h2>
                  <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base">
                    {collection.story}
                  </p>
                  <p className="text-zinc-400 font-light leading-relaxed text-sm mt-4">
                    {collection.whyPreserve}
                  </p>
                </FadeUp>
              </div>

              {/* Right Column: Key Details Box */}
              <div className="lg:col-span-5 bg-studio-surface border border-white/5 p-8 flex flex-col justify-between">
                <FadeUp delay={150}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-1">Pricing Guide</h3>
                      <p className="font-serif text-2xl text-gold">{collection.startingPrice} <span className="text-xs text-zinc-500 font-sans tracking-wide">starts from</span></p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-1">Estimated Timeline</h3>
                      <p className="text-sm font-light text-zinc-300">{collection.timeline}</p>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <Link
                        href="/commission"
                        className="w-full flex items-center justify-center bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold py-4 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/15"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMIZATION OPTIONS & MATERIALS */}
        <section className="py-24 bg-studio-bg border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Materials Block */}
              <FadeUp className="bg-studio-surface border border-white/5 p-8 md:p-10">
                <h3 className="font-serif text-2xl text-white font-light tracking-wide mb-6 flex items-center gap-3">
                  <span className="text-gold font-normal italic">01.</span> Cast Materials
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                  We use elements provided by you alongside carefully selected studio-grade resins and precious foil accents to construct your piece.
                </p>
                <ul className="space-y-3">
                  {collection.materials.map((material, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-300 font-light">
                      <span className="h-1.5 w-1.5 bg-gold" />
                      {material}
                    </li>
                  ))}
                </ul>
              </FadeUp>

              {/* Layout Customization Block */}
              <FadeUp className="bg-studio-surface border border-white/5 p-8 md:p-10" delay={150}>
                <h3 className="font-serif text-2xl text-white font-light tracking-wide mb-6 flex items-center gap-3">
                  <span className="text-gold font-normal italic">02.</span> Design Options
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                  Choose the dimensional format or functional profile that fits your aesthetic preference.
                </p>
                <ul className="space-y-3">
                  {collection.options.map((option, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-zinc-300 font-light">
                      <span className="h-1.5 w-1.5 bg-rose-accent" />
                      {option}
                    </li>
                  ))}
                </ul>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-studio-surface/20 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block mb-2">Queries</span>
              <h2 className="font-serif text-3xl text-white font-light tracking-wide">Collection FAQs</h2>
            </div>

            <FAQAccordion faqs={collection.faqs} />
          </div>
        </section>

        {/* CONSULTATION BACKLINK */}
        <section className="py-20 bg-studio-bg border-t border-white/5 text-center">
          <div className="mx-auto max-w-3xl px-6 flex flex-col items-center">
            <h2 className="font-serif text-3xl text-white font-light mb-6">Interested in this collection?</h2>
            <p className="text-zinc-500 text-sm font-light leading-relaxed mb-8 max-w-lg">
              Let's create something together. All commissions are bespoke. No two pieces are ever alike.
            </p>
            <Link
              href="/commission"
              className="bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-12 py-4 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/15"
            >
              Start Commission Details
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
