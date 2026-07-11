import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Uttarakhand Flower Preservation Directory | Nikeeta Rawat Resin Studio",
  description: "Browse our wedding flower, jaimala, and keepsake preservation service locations across Garhwal and Kumaon, Uttarakhand.",
};

export default function PreservationIndexPage() {
  const garhwalLocations = locations.filter((l) => l.region === "Garhwal");
  const kumaonLocations = locations.filter((l) => l.region === "Kumaon");

  return (
    <div className="flex min-h-screen flex-col bg-studio-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />

      <main className="flex-grow pt-12 pb-24">
        {/* HEADER */}
        <section className="py-16 md:py-24 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
            <div className="max-w-3xl">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                  Service Directory
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                  Preservation Services Across Uttarakhand
                </h1>
                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  Explore our dedicated local guides for flower preservation, wedding jaimala resin casting, and keepsake conservation. From the Queen of Hills in Mussoorie to our main workshop in Kotdwar, we serve couples across both Garhwal and Kumaon regions.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* LOCATION DIRECTORY LIST */}
        <section className="py-16 bg-studio-surface/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
            {/* Garhwal Region */}
            <div className="space-y-8">
              <FadeUp>
                <h2 className="font-serif text-2xl text-gold font-light tracking-wide border-b border-white/10 pb-2">
                  Garhwal Region
                </h2>
              </FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {garhwalLocations.map((loc, index) => (
                  <FadeUp key={loc.slug} delay={index * 50} className="group border border-white/5 bg-studio-surface p-6 hover:border-gold/30 transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors font-light">
                        {loc.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3">
                        {loc.metaDescription}
                      </p>
                    </div>
                    <div className="pt-6">
                      <Link
                        href={`/preservation/${loc.slug}`}
                        className="text-[10px] uppercase tracking-[0.2em] font-medium text-white group-hover:text-gold transition-colors inline-block"
                      >
                        View Service Area &rarr;
                      </Link>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>

            {/* Kumaon Region */}
            <div className="space-y-8">
              <FadeUp>
                <h2 className="font-serif text-2xl text-gold font-light tracking-wide border-b border-white/10 pb-2">
                  Kumaon Region
                </h2>
              </FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {kumaonLocations.map((loc, index) => (
                  <FadeUp key={loc.slug} delay={index * 50} className="group border border-white/5 bg-studio-surface p-6 hover:border-gold/30 transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors font-light">
                        {loc.name}
                      </h3>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3">
                        {loc.metaDescription}
                      </p>
                    </div>
                    <div className="pt-6">
                      <Link
                        href={`/preservation/${loc.slug}`}
                        className="text-[10px] uppercase tracking-[0.2em] font-medium text-white group-hover:text-gold transition-colors inline-block"
                      >
                        View Service Area &rarr;
                      </Link>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORKSHOP CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center space-y-6">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold block">Have questions?</span>
              <h2 className="font-serif text-3xl font-light text-white tracking-wide">Ready to Begin Your Curation?</h2>
              <p className="text-zinc-400 font-light text-sm max-w-xl mx-auto leading-relaxed">
                No matter where you are located in Uttarakhand, we offer reliable shipping guides and secure transit options to get your fresh wedding flowers to us.
              </p>
              <div className="pt-6">
                <Link
                  href="/commission"
                  className="bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10"
                >
                  Start a Commission Inquiry
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
