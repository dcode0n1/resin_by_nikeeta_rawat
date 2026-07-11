import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Contact the Studio | Nikeeta Rawat Resin Studio",
  description: "Connect with our Kotdwar, Uttarakhand resin studio. Contact details for WhatsApp, Instagram, email support, and workshop appointments.",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Nikeeta Rawat Resin Studio",
    "description": "Get in touch with Nikeeta Rawat Resin Studio in Kotdwar, Uttarakhand for bespoke flower and garland preservation.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Nikeeta Rawat Resin Studio",
      "image": "https://placehold.co/600x400/0e0e0f/d6a84b?text=Nikeeta+Resin+Studio",
      "telephone": "+91 63991 73280",
      "email": "nikitarawatniki1234@gmail.com",
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
      }
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
        {/* HEADER */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
            <div className="max-w-3xl">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                  Connect With Us
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                  Contact the Studio
                </h1>
                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  Whether you are dropping off wedding garments, scheduling a visit to our workshop, or discussing a corporate design, we would love to connect.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="py-12 bg-studio-surface/10 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Left Column: Coordinates */}
              <div className="lg:col-span-5 space-y-10 font-light text-zinc-400 leading-relaxed">
                <FadeUp className="space-y-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Direct Inquiries</h3>
                    <p className="text-white text-base">nikitarawatniki1234@gmail.com</p>
                    <p className="mt-1">+91 63991 73280 (WhatsApp Available)</p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Studio Address</h3>
                    <p className="text-white text-base">Neha rawat house</p>
                    <p>BEL road, ratanpur sukhrow</p>
                    <p>Kotdwar, Uttarakhand - 246149, India</p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Workshop Hours</h3>
                    <p className="text-white">Monday &ndash; Friday: 10:00 AM &ndash; 6:00 PM</p>
                    <p>Saturday: By prior appointment only</p>
                    <p>Sunday: Closed</p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-3">Social Portfolios</h3>
                    <div className="flex gap-6 mt-2">
                      <a href="https://instagram.com/resin_by_nikeeta_rawat" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white uppercase tracking-wider transition-colors">
                        Instagram
                      </a>
                      <a href="https://wa.me/916399173280" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white uppercase tracking-wider transition-colors">
                        WhatsApp
                      </a>
                       <a href="https://www.threads.net/@resin_by_nikeeta_rawat" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white uppercase tracking-wider transition-colors">
                        Threads
                      </a>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right Column: Map Placeholder & Visit Form */}
              <div className="lg:col-span-7 space-y-8">
                <FadeUp delay={150}>
                  {/* Map Box */}
                  <div className="relative h-[240px] sm:h-[300px] w-full border border-white/10 bg-studio-surface flex flex-col items-center justify-center text-center p-6">
                    <span className="text-gold text-2xl mb-4">📍</span>
                    <h4 className="font-serif text-lg text-white font-light mb-2">Kotdwar Studio Map</h4>
                    <p className="text-xs text-zinc-500 max-w-xs leading-relaxed mb-4">
                      Click the link below to view our physical coordinates and get directions on Google Maps.
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Neha+rawat+house/@29.7340378,78.5008013,17z/data=!3m1!4b1!4m6!3m5!1s0x39097d357d819629:0x673c61f43ae3f89a!8m2!3d29.7340378!4d78.5008013!16s%2Fg%2F11k3jfb7tc!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.2em] text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors"
                    >
                      Open Google Maps &rarr;
                    </a>
                  </div>

                  {/* Book Visit Callout */}
                  <div className="border border-white/5 bg-studio-surface/50 p-8 md:p-10 space-y-6 mt-8">
                    <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">Visit the Artist</span>
                    <h3 className="font-serif text-2xl text-white font-light tracking-wide">Request a Studio Visit</h3>
                    <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                      We love welcoming visitors to show examples of casting sizes, frame styles, and wood slabs in person. Visits must be booked at least 48 hours in advance.
                    </p>
                    <Link
                      href="/commission"
                      className="inline-flex bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10"
                    >
                      Request Visit Curation &rarr;
                    </Link>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
