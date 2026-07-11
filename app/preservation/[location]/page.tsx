import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import { locations } from "@/data/locations";
import { collections } from "@/data/collections";

interface PageProps {
  params: Promise<{ location: string }>;
}

// Dynamic Metadata Generation for Programmatic SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const loc = locations.find((l) => l.slug === resolvedParams.location);
  if (!loc) return {};

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    openGraph: {
      title: `${loc.name} Flower Preservation | Nikeeta Rawat Resin Studio`,
      description: loc.metaDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: loc.metaTitle,
      description: loc.metaDescription,
    },
  };
}

// Generate static routes at build time for ultimate loading speed and SEO ranking
export async function generateStaticParams() {
  return locations.map((l) => ({
    location: l.slug,
  }));
}

export default async function LocationPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { location } = resolvedParams;

  const loc = locations.find((l) => l.slug === location);
  if (!loc) {
    notFound();
  }

  // Schema Markup (JSON-LD) for Local Service Programmatic SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Nikeeta Rawat Resin Studio - ${loc.name} Flower Preservation`,
    "description": loc.metaDescription,
    "image": "https://placehold.co/600x400/0e0e0f/d6a84b?text=Nikeeta+Resin+Studio",
    "priceRange": "$$",
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
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": loc.name
    },
    "hasMap": "https://www.google.com/maps/place/Neha+rawat+house/@29.7340378,78.5008013,17z/data=!3m1!4b1!4m6!3m5!1s0x39097d357d819629:0x673c61f43ae3f89a!8m2!3d29.7340378!4d78.5008013!16s%2Fg%2F11k3jfb7tc"
  };

  return (
    <div className="flex min-h-screen flex-col bg-studio-bg text-white font-sans selection:bg-gold selection:text-black">
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow pt-12 pb-24">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-28 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(214,168,75,0.08),transparent_50%)]" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center md:text-left">
            <div className="max-w-3xl space-y-6">
              <FadeUp>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-2">
                  Uttarakhand Location Directory &bull; {loc.region} Region
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white leading-tight">
                  Flower Preservation in <span className="text-gold font-normal">{loc.name}</span>
                </h1>
                <p className="text-zinc-400 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl pt-2">
                  Transforming fleeting wedding garlands, jaimalas, and special keepsakes from {loc.name} into luxury, crystal-clear resin art sculptures.
                </p>
                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    href="/commission"
                    className="bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10 text-center"
                  >
                    Reserve Your Slot
                  </Link>
                  <Link
                    href="/collections"
                    className="border border-white/10 text-white text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300 rounded-none text-center"
                  >
                    View Our Collections
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* INTRO DETAILS */}
        <section className="py-16 md:py-24 border-b border-white/5 bg-studio-surface/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Side: Detail */}
              <div className="lg:col-span-7 space-y-6">
                <FadeUp>
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-white tracking-wide">
                    {loc.introTitle}
                  </h2>
                  <p className="text-zinc-300 font-light text-sm sm:text-base leading-relaxed">
                    {loc.introDescription}
                  </p>
                  <div className="border-l-2 border-gold/30 pl-4 py-1 mt-6">
                    <p className="text-zinc-400 italic text-sm">
                      Each floral artifact is personally designed and hand-cured by artist Nikeeta Rawat in our local Uttarakhand studio. We ensure the emotional story of your flowers shines through the heavy, crystal-clear layers.
                    </p>
                  </div>
                </FadeUp>
              </div>

              {/* Right Side: Heritage */}
              <div className="lg:col-span-5 bg-studio-surface border border-white/5 p-8 space-y-6">
                <FadeUp delay={100}>
                  <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold border-b border-white/5 pb-2">
                    Floral Preservation Specialty
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-white">Local Floral Heritage</h4>
                      <p className="text-xs font-light text-zinc-400 leading-relaxed">
                        {loc.floralHeritage}
                      </p>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <h4 className="text-sm font-medium text-white">Moisture Extraction Process</h4>
                      <p className="text-xs font-light text-zinc-400 leading-relaxed">
                        We use advanced, low-temperature silica dehydration chambers to extract moisture over 2-3 weeks, preserving 3D structural detail and color integrity before casting in resin.
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS & DELIVERY */}
        <section className="py-16 md:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl font-light text-white tracking-wide">How It Works for {loc.name} Clients</h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                We make it seamless to transport your wedding flowers from {loc.name} to our Kotdwar preservation studio.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <FadeUp delay={50} className="border border-white/5 bg-studio-surface/30 p-8 space-y-4 relative">
                <span className="text-gold font-serif text-4xl font-light block mb-2 opacity-40">01</span>
                <h3 className="text-base font-medium text-white">Reserve Slot</h3>
                <p className="text-xs font-light text-zinc-400 leading-relaxed">
                  Book your date at least 2 weeks in advance. We limit weekly slots to give every commission dedicated design attention.
                </p>
              </FadeUp>

              {/* Step 2 */}
              <FadeUp delay={100} className="border border-white/5 bg-studio-surface/30 p-8 space-y-4 relative">
                <span className="text-gold font-serif text-4xl font-light block mb-2 opacity-40">02</span>
                <h3 className="text-base font-medium text-white">Flower Shipping</h3>
                <p className="text-xs font-light text-zinc-400 leading-relaxed">
                  {loc.processStep}
                </p>
              </FadeUp>

              {/* Step 3 */}
              <FadeUp delay={150} className="border border-white/5 bg-studio-surface/30 p-8 space-y-4 relative">
                <span className="text-gold font-serif text-4xl font-light block mb-2 opacity-40">03</span>
                <h3 className="text-base font-medium text-white">Transit & Delivery</h3>
                <p className="text-xs font-light text-zinc-400 leading-relaxed">
                  {loc.deliveryOption} Fresh transport ensures the highest quality preservation result without bruising.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* POPULAR SERVICES */}
        <section className="py-16 md:py-24 border-b border-white/5 bg-studio-surface/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
              <div className="lg:col-span-6 space-y-4">
                <FadeUp>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold block">Bespoke Design Offerings</span>
                  <h2 className="font-serif text-3xl font-light text-white tracking-wide">Popular Commissions in {loc.name}</h2>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    Explore the custom preservation configurations most frequently requested by our clients in the {loc.name} area.
                  </p>
                </FadeUp>
              </div>
              <div className="lg:col-span-6 lg:text-right">
                <Link
                  href="/collections"
                  className="inline-flex border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-medium px-8 py-3 hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  Explore All Collections &rarr;
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {loc.popularServices.map((service, index) => (
                <FadeUp key={service} delay={index * 50} className="border border-white/5 bg-studio-surface p-6 space-y-4">
                  <span className="text-gold text-lg">✦</span>
                  <h3 className="text-sm font-medium text-white">{service}</h3>
                  <p className="text-xs font-light text-zinc-500 leading-relaxed">
                    Custom-cast with multi-layer clarity, UV blockers, and custom design layouts.
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* BRIDGES TO COLLECTIONS */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <FadeUp className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold block mb-2">Our Signature Mediums</span>
              <h2 className="font-serif text-3xl font-light text-white tracking-wide">Select a Collection to Get Started</h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.slice(0, 3).map((col, index) => (
                <FadeUp key={col.id} delay={index * 100} className="group border border-white/5 bg-studio-surface/50 overflow-hidden flex flex-col h-full hover:border-gold/30 transition-all duration-300">
                  <div className="p-8 flex-grow space-y-4">
                    <h3 className="font-serif text-xl font-light text-white group-hover:text-gold transition-colors">
                      {col.name}
                    </h3>
                    <p className="text-xs font-light text-zinc-400 leading-relaxed line-clamp-3">
                      {col.story}
                    </p>
                    <div className="pt-2 text-xs text-zinc-500 font-light">
                      Starts from <span className="text-gold font-normal">{col.startingPrice}</span>
                    </div>
                  </div>
                  <div className="border-t border-white/5 p-4 bg-studio-surface text-center">
                    <Link
                      href={`/collections/${col.slug}`}
                      className="text-[10px] uppercase tracking-[0.2em] font-medium text-white group-hover:text-gold transition-colors"
                    >
                      View Details &rarr;
                    </Link>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BOX */}
        <section className="py-8">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <FadeUp>
              <div className="border border-gold/20 bg-[radial-gradient(ellipse_at_center,rgba(214,168,75,0.06),transparent)] p-8 md:p-16 text-center space-y-6">
                <span className="text-3xl block">🌹</span>
                <h2 className="font-serif text-2xl md:text-4xl text-white font-light tracking-wide">
                  Preserve Your Memories from {loc.name}
                </h2>
                <p className="text-zinc-400 font-light text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
                  We accept wedding garlands and bouquet commissions from all areas across {loc.name}. Book early to secure your design slot in our studio.
                </p>
                <div className="pt-4">
                  <Link
                    href="/commission"
                    className="inline-flex bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10"
                  >
                    Start a Commission Request
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
