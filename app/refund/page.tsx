import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Nikeeta Rawat Resin Studio",
  description: "Read our custom commission deposit, cancellation tiers, flower dehydration fees, and shipment damage policies.",
};

export default function RefundPolicyPage() {
  const sections = [
    {
      title: "1. Cancellations Prior to Flower Processing",
      content: "If you cancel your booked reservation or commission slot before shipping your flowers to our Kotdwar workshop, we offer a full 100% refund of your booking deposit. Request must be received at least 48 hours prior to your scheduled event date."
    },
    {
      title: "2. Cancellations After Flower Dehydration Commences",
      content: "Once we receive your fresh flowers and place them into our specialized silica drying arrays, the preservation process has begun. If you choose to cancel at this stage, we charge a 50% flat fee to cover dedicated labor, professional silica materials, and studio resources. The dried flowers can be returned to you on request, with shipping fees covered by the client."
    },
    {
      title: "3. Cancellations Post Resin Casting",
      content: "Once the first layer of clear-casting UV-stable resin is poured, the commission represents a permanent, irreversible chemical encapsulation of your flowers. Cancellations, revisions, or refunds are strictly not available after resin casting has started."
    },
    {
      title: "4. Return Transit Damage Policy",
      content: "We package completed resin blocks, frames, and furniture in robust, padded plywood crates to guarantee safe transport. In the extremely rare event that your artwork arrives damaged, please document the damage via video within 24 hours of delivery. We will work with you to file insurance claims and arrange restoration services where possible."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Refund & Cancellation Policy | Nikeeta Rawat Resin Studio",
    "description": "Read our custom commission deposit, cancellation tiers, flower dehydration fees, and shipment damage policies.",
    "url": "https://nikeetarawatstudio.com/refund"
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
                  Studio Policies
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                  Refund & Cancellation
                </h1>
                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  Last Updated: July 12, 2026. This policy outlines customer cancelation options, deposit retention tiers, and damage coverage policies for custom commission requests.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* POLICY CONTENT */}
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
                <h3 className="font-serif text-lg text-white font-light tracking-wide">Have Questions About Damaged Shipments?</h3>
                <p className="text-xs text-zinc-400 font-light max-w-lg mx-auto">
                  For details on how we secure wooden crates, coordinate with national express carriers, or request transit insurance claims, get in touch with our team.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10"
                  >
                    Contact support
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
