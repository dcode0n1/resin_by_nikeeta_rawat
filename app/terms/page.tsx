import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Terms of Commission | Nikeeta Rawat Resin Studio",
  description: "Read our conditions of commission, botanical curing timelines, color shifts, and courier liability policies.",
};

export default function TermsPage() {
  const sections = [
    {
      title: "1. Bespoke Curation & Artistic Nature",
      content: "All artworks produced by Nikeeta Rawat Resin Studio are bespoke, handmade commissions. Due to the organic nature of flowers and the chemical properties of clear-casting resin, minor variations such as microscopic air bubbles, texture ripples, or slight shifting of petals during pouring are normal, organic characteristics and are not considered defects."
    },
    {
      title: "2. Botanical Color Shifts",
      content: " de-moisturizing and casting flowers in resin alters their cellular chemistry. Some color shifts are natural and expected: red roses typically turn a deep burgundy/black-cherry hue, white flowers can take on a warm cream or golden-yellow tone, and certain pinks may fade slightly. These changes represent the vintage, natural character of organic preservation."
    },
    {
      title: "3. Shipping & Transit Responsibility",
      content: "For fresh preservation, flowers must be packaged according to our guidelines and sent within 2-4 days of your event. We are not liable for shipments delayed, damaged, or lost by overnight courier companies or shipping providers during transit to our Kotdwar studio."
    },
    {
      title: "4. Curing Lifecycle & Timeline",
      content: "Our standard curation cycle is 8 to 12 weeks from the day we receive your flowers. Dehydration takes 2 weeks, and resin pouring is executed in micro-thin layers over several days to avoid heat damage. We prioritize museum-grade clarity over haste; timelines are estimates and can extend during peak wedding seasons."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Commission | Nikeeta Rawat Resin Studio",
    "description": "Read our conditions of commission, botanical curing timelines, color shifts, and courier liability policies.",
    "url": "https://nikeetarawatstudio.com/terms"
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
        <section className="py-16 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
            <div className="max-w-3xl">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                  Studio Agreement
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                  Terms of Commission
                </h1>
                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  Last Updated: July 12, 2026. These terms govern all design consultations, flower shipments, and custom resin curations booked with our studio.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* TERMS CONTENT */}
        <section className="py-16 bg-studio-surface/10">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <FadeUp className="space-y-12">
              {sections.map((sec) => (
                <div key={sec.title} className="space-y-4">
                  <h2 className="font-serif text-xl md:text-2xl text-gold font-light tracking-wide border-b border-white/5 pb-2">
                    {sec.title}
                  </h2>
                  <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}

              <div className="border border-gold/20 bg-studio-surface p-8 text-center space-y-4 mt-12">
                <h3 className="font-serif text-lg text-white font-light tracking-wide">Ready to Secure Your Slot?</h3>
                <p className="text-xs text-zinc-400 font-light max-w-lg mx-auto">
                  By submitting your commission questionnaire, you acknowledge and agree to our studio's curing timelines and botanical preservation characteristics.
                </p>
                <div className="pt-2">
                  <Link
                    href="/commission"
                    className="inline-flex bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10"
                  >
                    Start Custom Commission
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
