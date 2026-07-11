import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import CommissionClient from "@/components/commission/CommissionClient";

export const metadata: Metadata = {
  title: "Commission Bespoke Resin Artwork | Nikeeta Rawat Resin Studio",
  description: "Request a custom reservation to preserve your wedding flowers, garlands, and keepsakes. Fill out our detailed design questionnaire.",
};

export default function CommissionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Commission Bespoke Resin Artwork | Nikeeta Rawat Resin Studio",
    "description": "Request a custom reservation to preserve your wedding flowers, garlands, and keepsakes. Fill out our detailed design questionnaire.",
    "url": "https://nikeetarawatstudio.com/commission",
    "mainEntity": {
      "@type": "Action",
      "name": "Commission Request",
      "description": "Submit a form to request custom resin flower preservation and art curation.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nikeeta Rawat Resin Studio"
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
                  Bespoke Request
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                  Commission Artwork
                </h1>
                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  We do not offer instant checkouts. Every commission begins with a shared conversation. Fill out your details below to request a bespoke reservation.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* FORM / SUCCESS BODY */}
        <section className="py-8 bg-studio-surface/10 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <CommissionClient />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
