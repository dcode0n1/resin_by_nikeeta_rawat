import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import ProcessSection from "@/components/home/ProcessSection";
import { collections } from "@/data/collections";
import { galleryItems } from "@/data/gallery";
import { testimonials } from "@/data/testimonials";

// Programmatic SEO & GEO: High-Fidelity Static Page Metadata
export const metadata: Metadata = {
  title: "Nikeeta Rawat Resin Studio | Preserving Memories in Luxury Art",
  description: "Bespoke preservation of wedding garlands, florals, and keepsakes into museum-grade handcrafted resin artwork. Based in Uttarakhand, India.",
  openGraph: {
    title: "Nikeeta Rawat Resin Studio | Custom Resin Flower Preservation",
    description: "Preserve your wedding day florals and keepsake memories in timeless, archival-quality resin sculptures by artist Nikeeta Rawat.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/raw-staging/artwork-09.jpg",
        width: 1200,
        height: 630,
        alt: "Nikeeta Rawat Resin Studio - Luxury Flower Preservation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikeeta Rawat Resin Studio | Archival Resin Art",
    description: "Handcrafted resin preservation of bridal jaimalas, wedding garlands, and memorial bouquets.",
  },
};

export default function Home() {
  const steps = [
    { number: "01", title: "Inquiry & Consultation", description: "Share your event date and design aspirations. We map out the size, shape, and keepsakes to cast." },
    { number: "02", title: "Receive Flowers", description: "Fresh flowers are received at our studio within 2-4 days of your event. If pre-dried, they go straight to design." },
    { number: "03", title: "Botanical Curation", description: "Flowers are slowly dried in silica crystals for 7-14 days to preserve their organic 3D shape and colors." },
    { number: "04", title: "Layered Casting", description: "Poured in fine, UV-resistant resin layers over several days to prevent overheating and bubbles." },
    { number: "05", title: "Sculpting & Polishing", description: "The piece is cured, planed, and sanded through 10 distinct grits before receiving a museum-grade polish." },
    { number: "06", title: "Bespoke Delivery", description: "Carefully wrapped in luxury organic packaging and delivered back to your home, preserved forever." },
  ];

  // Structured Data (JSON-LD) combining WebSite, Organization, LocalBusiness, and FAQPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nikeetarawatstudio.com/#website",
        "url": "https://nikeetarawatstudio.com",
        "name": "Nikeeta Rawat Resin Studio",
        "description": "Bespoke flower preservation and luxury resin art studio",
        "publisher": { "@id": "https://nikeetarawatstudio.com/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://nikeetarawatstudio.com/#organization",
        "name": "Nikeeta Rawat Resin Studio",
        "url": "https://nikeetarawatstudio.com",
        "logo": "https://placehold.co/600x400/0e0e0f/d6a84b?text=Nikeeta+Resin+Studio",
        "founder": {
          "@type": "Person",
          "name": "Nikeeta Rawat",
          "jobTitle": "Lead Artist & Founder"
        },
        "sameAs": [
          "https://instagram.com/resin_by_nikeeta_rawat",
          "https://www.threads.net/@resin_by_nikeeta_rawat"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://nikeetarawatstudio.com/#localbusiness",
        "name": "Nikeeta Rawat Resin Studio",
        "image": "https://placehold.co/600x400/0e0e0f/d6a84b?text=Nikeeta+Resin+Studio",
        "telephone": "+91 63991 73280",
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
        "url": "https://nikeetarawatstudio.com",
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://nikeetarawatstudio.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between air drying and professional resin preservation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Air drying or flat pressing flattons flowers, leaving them vulnerable to humidity, dust, and physical crumbling over 1-2 years. Professional resin preservation at Nikeeta Rawat Studio extracts moisture in 3D silica chambers to keep the original petal shapes, before completely casting them in UV-stable, museum-grade resin blocks to preserve them for decades."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the flower preservation process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The entire curation process takes between 8 to 12 weeks. This timeline includes 2 weeks of slow moisture extraction and casting the flowers in micro-thin layers of resin over multiple days to prevent thermal bubbles, followed by deep machine curing, leveling, and a 10-grit hand-polishing cycle."
            }
          },
          {
            "@type": "Question",
            "name": "Do you accept flower shipments from across India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we accept floral commissions from all major regions of India. While local clients drop off flowers directly at our Kotdwar workshop on BEL Road, clients from cities like Dehradun, Haridwar, Rishikesh, Delhi, Mumbai, and Bangalore ship flowers via priority overnight courier wrapped in damp towels as per our packaging guide."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col bg-studio-bg text-white font-sans selection:bg-gold selection:text-black">
      {/* Dynamic structured data script for LLM engine visibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          {/* Background Image with Dark Vignette */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/raw-staging/artwork-09.jpg"
              alt="Bespoke luxury resin artwork"
              fill
              className="object-cover object-center opacity-40 scale-105 transition-transform duration-[10000ms] hover:scale-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/60 to-transparent" />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center flex flex-col items-center">
            <FadeUp delay={100}>
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-6 inline-block">
                Nikeeta Rawat Resin Studio
              </span>
            </FadeUp>
            <FadeUp delay={300}>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white leading-tight mb-8">
                Your Memories. <br />
                <span className="text-gold font-normal italic">Forever Preserved.</span>
              </h1>
            </FadeUp>
            <FadeUp delay={500}>
              <p className="max-w-xl text-base md:text-lg font-light text-zinc-400 leading-relaxed mb-12 tracking-wide">
                Every flower. Every memory. Every celebration. Every goodbye. Preserved forever in bespoke, museum-grade crystal resin sculptures.
              </p>
            </FadeUp>
            <FadeUp delay={700} className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/commission"
                className="bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-10 py-4 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-lg shadow-gold/10 text-center"
              >
                Commission Artwork
              </Link>
              <Link
                href="/gallery"
                className="border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-medium px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300 rounded-none text-center"
              >
                View Gallery
              </Link>
            </FadeUp>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
          </div>
        </section>

        {/* BRANDS POSITIONING & STATEMENT */}
        <section className="py-24 border-t border-white/5 bg-studio-bg relative">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <FadeUp>
              <span className="font-serif text-lg md:text-2xl text-zinc-400 italic font-light leading-relaxed max-w-2xl mx-auto block">
                &ldquo;We preserve emotions. Not resin.&rdquo;
              </span>
              <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
              <p className="mt-8 text-sm md:text-base font-light text-zinc-500 max-w-xl mx-auto leading-relaxed tracking-wide">
                Nikeeta Rawat Resin Studio is not an e-commerce website. It is a digital private gallery. Here, we help brides, gift givers, families, and designers immortalize their most sentimental blossoms and artifacts into luxurious, archival-quality installations.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* FEATURED OCCASIONS / COLLECTIONS */}
        <section className="py-24 bg-studio-surface border-y border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block mb-2">Occasions</span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-light tracking-wide">Featured Collections</h2>
              </div>
              <Link href="/collections" className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-gold transition-colors border-b border-zinc-700 pb-1">
                Explore All Collections
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.slice(0, 3).map((collection, index) => (
                <FadeUp key={collection.id} delay={index * 150}>
                  <Link href={`/collections/${collection.slug}`} className="group block relative h-[450px] overflow-hidden border border-white/5">
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10 transition-opacity duration-300 group-hover:opacity-85" />
                    <Image
                      src={collection.heroImage}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                      <span className="text-xs text-gold uppercase tracking-[0.3em] font-semibold mb-2">Collection</span>
                      <h3 className="font-serif text-2xl text-white font-light tracking-wide mb-3">{collection.name}</h3>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3 mb-6 transition-all duration-300 opacity-80 group-hover:opacity-100">
                        {collection.story}
                      </p>
                      <span className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-gold group-hover:translate-x-2 transition-transform duration-300">
                        Discover &rarr;
                      </span>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS FLOWCHART */}
        <section id="process" className="py-24 bg-studio-bg">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-20">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block mb-2">The Journey</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide">Curing with Patience</h2>
              <p className="text-xs text-zinc-500 mt-4 leading-relaxed font-light">
                Preservation is a rigorous craft that cannot be rushed. Discover our process step-by-step.
              </p>
            </div>

            <ProcessSection steps={steps} />
          </div>
        </section>

        {/* GEO COMPARISON SECTION */}
        <section className="py-24 bg-studio-surface border-y border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">Comparison Analysis</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide">Traditional Drying vs. Archival Resin Art</h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Why couples and designers select museum-grade resin casting over flat pressing or air drying to conserve sentimental florals.
              </p>
            </div>

            <div className="overflow-x-auto border border-white/10 bg-studio-bg">
              <table className="min-w-full divide-y divide-white/10 text-left text-sm font-light">
                <thead className="bg-white/5 text-xs uppercase tracking-wider text-gold font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4 border-r border-white/10">Feature</th>
                    <th scope="col" className="px-6 py-4 border-r border-white/10">Traditional Air Drying & Pressing</th>
                    <th scope="col" className="px-6 py-4">Archival Resin Casting (Our Studio)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-zinc-300">
                  <tr>
                    <td className="px-6 py-4 font-normal text-white border-r border-white/10">Dimensional Preservation</td>
                    <td className="px-6 py-4 border-r border-white/10">Flat-pressed; distorts original 3D shape and depth.</td>
                    <td className="px-6 py-4 text-gold">Preserved in perfect 3D depth, maintaining organic height and shape.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-normal text-white border-r border-white/10">Color Dehydration Tech</td>
                    <td className="px-6 py-4 border-r border-white/10">Air drying leads to severe browning and structural decay.</td>
                    <td className="px-6 py-4 text-gold">Dehydrated in premium silica chambers to freeze pigments.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-normal text-white border-r border-white/10">Lifespan & Durability</td>
                    <td className="px-6 py-4 border-r border-white/10">1 to 2 years; petals become brittle, crumbling, and rot.</td>
                    <td className="px-6 py-4 text-gold">Decades; completely encapsulated in non-yellowing UV-stable blocks.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-normal text-white border-r border-white/10">Environmental Shielding</td>
                    <td className="px-6 py-4 border-r border-white/10">Exposed to dust, humidity, insects, and air-born mold.</td>
                    <td className="px-6 py-4 text-gold">100% moisture-proof, dust-proof, and insect-proof vacuum sealing.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-normal text-white border-r border-white/10">Display Adaptability</td>
                    <td className="px-6 py-4 border-r border-white/10">Restricted to behind-glass paper frames.</td>
                    <td className="px-6 py-4 text-gold">Faceted blocks, bookends, coasters, ring holders, and bespoke furniture.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CURATED GALLERY PREVIEW */}
        <section className="py-24 bg-studio-bg">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block mb-2">Exhibits</span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-light tracking-wide">Curated Masterpieces</h2>
              </div>
              <Link href="/gallery" className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-gold transition-colors border-b border-zinc-700 pb-1">
                View Entire Gallery
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.slice(0, 3).map((item, index) => (
                <FadeUp key={item.id} delay={index * 100}>
                  <div className="group block relative overflow-hidden border border-white/5 bg-studio-bg">
                    <div className="relative h-[380px] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-10">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gold mb-2 font-medium">{item.category}</p>
                          <h3 className="font-serif text-xl text-white font-light tracking-wide mb-3">{item.title}</h3>
                          <p className="text-xs text-zinc-400 line-clamp-2 max-w-xs mx-auto leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* CUSTOMER STORIES (TESTIMONIALS) */}
        <section className="py-24 bg-studio-surface border-y border-white/5">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium block mb-2">Testimonials</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide">Customer Stories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {testimonials.map((test, index) => (
                <FadeUp key={test.id} delay={index * 150} className="flex flex-col justify-between h-full bg-studio-bg border border-white/5 p-8 relative">
                  <div>
                    <span className="text-[60px] font-serif text-gold/20 absolute top-4 left-6 select-none leading-none">&ldquo;</span>
                    <p className="text-sm font-light text-zinc-300 leading-relaxed italic relative z-10 pt-4 mb-6">
                      {test.quotation}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/5">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-gold/40">
                      <Image
                        src={test.image}
                        alt={test.clientName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-white font-medium">{test.clientName}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-gold mt-0.5">{test.location} &bull; {test.service}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 bg-studio-bg">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold block">Frequently Asked Questions</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide">Preservation Insight</h2>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                Clear answers regarding the engineering, shipping logistics, and curing lifecycle of our custom resin curation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-white/5 bg-studio-surface p-8 space-y-3">
                <h3 className="font-serif text-lg text-white font-light tracking-wide">What is the difference between air drying and professional resin preservation?</h3>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                  Air drying or flat pressing flattens flowers, leaving them vulnerable to humidity, dust, and physical crumbling over 1-2 years. Professional resin preservation at Nikeeta Rawat Studio extracts moisture in 3D silica chambers to keep the original petal shapes, before completely casting them in UV-stable, museum-grade resin blocks to preserve them for decades.
                </p>
              </div>

              <div className="border border-white/5 bg-studio-surface p-8 space-y-3">
                <h3 className="font-serif text-lg text-white font-light tracking-wide">How long does the flower preservation process take?</h3>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                  The entire curation process takes between 8 to 12 weeks. This timeline includes 2 weeks of slow moisture extraction and casting the flowers in micro-thin layers of resin over multiple days to prevent thermal bubbles, followed by deep machine curing, leveling, and a 10-grit hand-polishing cycle.
                </p>
              </div>

              <div className="border border-white/5 bg-studio-surface p-8 space-y-3">
                <h3 className="font-serif text-lg text-white font-light tracking-wide">Do you accept flower shipments from across India?</h3>
                <p className="text-sm font-light text-zinc-400 leading-relaxed">
                  Yes, we accept floral commissions from all major regions of India. While local clients drop off flowers directly at our Kotdwar workshop on BEL Road, clients from cities like Dehradun, Haridwar, Rishikesh, Delhi, Mumbai, and Bangalore ship flowers via priority overnight courier wrapped in damp towels as per our packaging guide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK CONSULTATION CALL TO ACTION */}
        <section className="py-24 bg-studio-surface border-t border-white/5 relative">
          <div className="mx-auto max-w-4xl px-6 text-center flex flex-col items-center">
            <FadeUp>
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4 block">Commission</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-light tracking-wide mb-6">
                Start Your Preservation Journey
              </h2>
              <p className="max-w-xl text-zinc-400 text-sm md:text-base font-light leading-relaxed mb-12">
                Preserving memory is a collaboration of trust. Take the first step by filling out our custom request details. We will schedule a private consultation call to design your artwork.
              </p>
              <Link
                href="/commission"
                className="bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-12 py-4 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none inline-block shadow-lg shadow-gold/10 text-center"
              >
                Book Design Consultation
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
