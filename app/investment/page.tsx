import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Bespoke Investment & Pricing Guide | Nikeeta Rawat Resin Studio",
  description: "View starting price points for our resin collections: Wedding Garland Preservation, Jewellery, pressed frames, clocks, and river furniture.",
};

export default function InvestmentPage() {
  const tiers = [
    { name: "Wearable Jewellery", price: "₹1,800", description: "Bespoke bracelets, pendants, hairpieces, and earrings embedding delicate flower petals." },
    { name: "Bespoke Home Decor", price: "₹3,500", description: "Functional art items including serving trays, clocks, vanity dishes, and flower coasters." },
    { name: "Bespoke Name Plates", price: "₹4,200", description: "Custom entrance name plates combining live-edge teakwood, florals, and brass lettering." },
    { name: "Memorial Curation", price: "₹4,500", description: "Reverent spheres, flame blocks, and keepsakes encapsulating farewell flowers or hair locks." },
    { name: "Pressed Floral Frames", price: "₹6,500", description: "2D botanical compositions pressed flat and sealed under double-glass layouts." },
    { name: "Wedding Garland Preservation", price: "₹8,500", description: "Our flagship 3D resin blocks (Hexagons, Squares, Hearts) holding full wedding garland blooms." },
    { name: "Bespoke River Furniture", price: "₹45,000", description: "Live-edge walnut and teak wood slabs aligned with deep pigment resin pours for dining and coffee tables." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bespoke Investment & Pricing Guide | Nikeeta Rawat Resin Studio",
    "description": "View starting price points for our resin collections: Wedding Garland Preservation, Jewellery, pressed frames, clocks, and river furniture.",
    "url": "https://nikeetarawatstudio.com/investment",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Resin Curation Pricing Tiers",
      "itemListElement": tiers.map((tier, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "Service",
          "name": tier.name,
          "description": tier.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": tier.price.replace(/[^0-9]/g, "")
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
        {/* HEADER */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                Value & Craft
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                Investment Guide
              </h1>
              <p className="max-w-2xl mx-auto text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                Because no two commissions share the same botanical elements, sizes, or configurations, we do not operate a generic shop. Every quote is custom.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* PRICING GRID */}
        <section className="py-12 bg-studio-surface/10 border-t border-white/5">
          <div className="mx-auto max-w-5xl px-6">
            <FadeUp>
              <div className="space-y-8">
                {tiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start md:items-center py-6 border-b border-white/5 hover:border-gold/30 transition-all duration-300 group"
                  >
                    {/* Tier Name */}
                    <div className="md:col-span-4 lg:col-span-5">
                      <h3 className="font-serif text-lg md:text-xl text-zinc-200 group-hover:text-white transition-colors">
                        {tier.name}
                      </h3>
                    </div>
                    {/* Pricing */}
                    <div className="md:col-span-3">
                      <p className="text-sm font-light text-zinc-400">
                        Starts from <span className="font-serif text-xl text-gold ml-1">{tier.price}</span>
                      </p>
                    </div>
                    {/* Description */}
                    <div className="md:col-span-5 lg:col-span-4">
                      <p className="text-xs text-zinc-500 font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                        {tier.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* EXPLANATORY CONTENT */}
        <section className="py-20 bg-studio-bg">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm font-light leading-relaxed text-zinc-400">
              <FadeUp className="space-y-4">
                <h3 className="font-serif text-xl text-white font-light tracking-wide mb-4">Personalized Valuations</h3>
                <p>
                  The cost of your commission depends entirely on the size of the final artwork, the types of flowers included (which dictate different drying times), the volume of premium UV-resistant clear resin poured, and any extra keepsakes or inserts.
                </p>
                <p>
                  During your private consultation call, we review your flowers and requirements and outline a transparent budget.
                </p>
              </FadeUp>
              <FadeUp className="space-y-4" delay={150}>
                <h3 className="font-serif text-xl text-white font-light tracking-wide mb-4">What the Investment Covers</h3>
                <p>
                  Every commission includes professional cleaning and inspection of your flowers, botanical curation (silica drying or pressing), a digital preview mock layout of the arrangement for your approval, multi-layered casting, planar edge routing, sanding through 10 grits, and luxury secure shipping back to your address.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-studio-surface border-y border-white/5 text-center">
          <div className="mx-auto max-w-3xl px-6 flex flex-col items-center">
            <FadeUp>
              <h2 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide mb-6">
                Ready to Request a Bespoke Quote?
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl mb-8">
                Submit details about your occasion, categories of interest, and your estimated completion date.
              </p>
              <Link
                href="/commission"
                className="bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-12 py-4 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none inline-block shadow-md shadow-gold/10"
              >
                Request Consultation Call
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
