import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Resin Curation Guides & Resources | Nikeeta Rawat Resin Studio",
  description: "Access our detailed flower packaging instructions, shipping guidelines, resin care guides, and pricing worksheets.",
};

export default function GuidesHubPage() {
  const guides = [
    {
      title: "Flower Packaging & Shipping Guide",
      category: "Logistics",
      description: "Step-by-step instructions on how to wrap, insulate, pack, and ship your fresh wedding flowers or event garlands from across India to our Kotdwar studio to ensure zero bruising.",
      linkText: "Read Shipping Instructions",
      linkHref: "#shipping-guide"
    },
    {
      title: "Resin Keepsake Care Instructions",
      category: "Maintenance",
      description: "Guidelines to maintain the museum-grade clarity of your preserved resin blocks. Learn how to clean your piece, avoid chemical exposure, and control UV yellowing.",
      linkText: "Read Care Guidelines",
      linkHref: "#care-guide"
    },
    {
      title: "Investment & Pricing Guide",
      category: "Pricing",
      description: "Detailed description of starting prices, deposit terms, custom layout pricing tiers, and what is covered in your curation package.",
      linkText: "View Pricing Guide",
      linkHref: "/investment"
    },
    {
      title: "Uttarakhand Service Areas Directory",
      category: "Locations",
      description: "Review our local logistics and delivery schedules for Dehradun, Haridwar, Rishikesh, Mussoorie, Nainital, and other Uttarakhand cities.",
      linkText: "Browse Service Areas",
      linkHref: "/preservation"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Resin Curation Guides & Resources | Nikeeta Rawat Resin Studio",
    "description": "Access our detailed flower packaging instructions, shipping guidelines, resin care guides, and pricing worksheets.",
    "url": "https://nikeetarawatstudio.com/guides",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Studio Guides & Curation Resources",
      "itemListElement": guides.map((guide, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "HowTo",
          "name": guide.title,
          "description": guide.description
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
        <section className="py-16 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center md:text-left">
            <div className="max-w-3xl">
              <FadeUp>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                  Detailing Hub
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                  Guides & Curation Resources
                </h1>
                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  Explore our technical instructions and packing resources. We provide complete guidelines to ensure your flowers arrive in perfect condition and remain crystal-clear for decades.
                </p>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* GUIDES DIRECTORY GRID */}
        <section className="py-16 bg-studio-surface/10 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {guides.map((guide, idx) => (
                <FadeUp key={guide.title} delay={idx * 100} className="border border-white/5 bg-studio-surface p-8 space-y-6 flex flex-col justify-between hover:border-gold/20 transition-all duration-300">
                  <div className="space-y-4">
                    <span className="text-xs uppercase tracking-wider text-gold font-medium bg-white/5 px-3 py-1 inline-block">
                      {guide.category}
                    </span>
                    <h2 className="font-serif text-2xl text-white font-light tracking-wide">
                      {guide.title}
                    </h2>
                    <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href={guide.linkHref}
                      className="text-xs uppercase tracking-wider text-gold hover:text-white transition-colors border-b border-gold/30 pb-0.5"
                    >
                      {guide.linkText} &rarr;
                    </Link>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* SHIPPING GUIDE SECTION */}
        <section id="shipping-guide" className="py-20 border-b border-white/5 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8">
            <FadeUp className="space-y-4 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">How-To Instructions</span>
              <h2 className="font-serif text-3xl font-light text-white tracking-wide">Flower Packaging & Shipping</h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                If you are shipping flowers from outside Kotdwar (e.g. Dehradun, Haridwar, Rishikesh, or other major Indian states), follow this checklist to secure them during overnight transit.
              </p>
            </FadeUp>

            <div className="space-y-6 border border-white/5 bg-studio-surface/50 p-6 sm:p-10 font-light text-zinc-300 text-sm leading-relaxed">
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong className="text-white font-medium">Keep Stems Hydrated:</strong> Immediately after your event, trim the stems at a 45-degree angle and place them in cool water until packing.
                </li>
                <li>
                  <strong className="text-white font-medium">Wrap the Base:</strong> Wrap the bottom of the flower stems in damp paper towels or cotton pads. Wrap plastic cling wrap tightly over the damp towel to seal moisture without wetting the petals.
                </li>
                <li>
                  <strong className="text-white font-medium">Support the Blooms:</strong> Place the flowers upright in a dry cardboard box. Use dry, crumpled newspaper or bubble wrap around the stems to prevent the flowers from sliding or hitting the box walls.
                </li>
                <li>
                  <strong className="text-white font-medium">Do NOT Use Sealed Plastic Bags:</strong> Never wrap the flower heads in plastic bags. Plastic traps moisture and heat, which causes immediate bruising, petal rotting, and mold growth during shipping.
                </li>
                <li>
                  <strong className="text-white font-medium">Express Courier Shipping:</strong> Label the box as <span className="text-gold font-medium">"FRAGILE - DO NOT FLIP"</span> and ship via priority overnight express (such as Blue Dart, DHL, or local courier services) to our address: <span className="text-white">Neha rawat house, BEL road, Kotdwar, Uttarakhand - 246149</span>.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CARE GUIDE SECTION */}
        <section id="care-guide" className="py-20 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8">
            <FadeUp className="space-y-4 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">Maintenance Instructions</span>
              <h2 className="font-serif text-3xl font-light text-white tracking-wide">Resin Keepsake Care Instructions</h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Completed resin sculptures require minimal care to maintain their high-gloss, crystal-clear surface.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm font-light leading-relaxed text-zinc-400">
              <div className="border border-white/5 bg-studio-surface/30 p-6 space-y-3">
                <h3 className="font-serif text-base text-white font-light">Sunlight and UV Exposure</h3>
                <p>
                  We utilize premium, museum-grade casting resin equipped with specialized UV stabilizers and optical brighteners to prevent yellowing. However, to keep colors vibrant, avoid placing your custom keepsakes in areas of constant, direct daily sunlight.
                </p>
              </div>

              <div className="border border-white/5 bg-studio-surface/30 p-6 space-y-3">
                <h3 className="font-serif text-base text-white font-light">Cleaning & Dusting</h3>
                <p>
                  To clean smudges or fingerprints, wipe the surface gently with a soft microfiber cloth and a drop of warm water. Avoid paper towels, abrasive sponges, or glass-cleaning chemicals (like Windex), which can create micro-scratching.
                </p>
              </div>

              <div className="border border-white/5 bg-studio-surface/30 p-6 space-y-3">
                <h3 className="font-serif text-base text-white font-light">Chemical & Heat Shielding</h3>
                <p>
                  Keep resin products away from perfume sprays, alcohol, hand sanitizers, and nail polish removers. Additionally, avoid exposing resin blocks to high temperature surfaces (above 60°C / 140°F), which can temporarily soften the structure.
                </p>
              </div>

              <div className="border border-white/5 bg-studio-surface/30 p-6 space-y-3">
                <h3 className="font-serif text-base text-white font-light">Scratch Protection</h3>
                <p>
                  Art resin blocks are highly durable but can scratch if dragged across rough stone or metal surfaces. Stand them on soft cloth surfaces, felt pads, or wooden display bases to protect their polished finish.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
