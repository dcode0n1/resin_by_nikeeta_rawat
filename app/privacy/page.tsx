import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Privacy Policy | Nikeeta Rawat Resin Studio",
  description: "Learn how we handle your personal data, commission questionnaire details, and cookies at Nikeeta Rawat Resin Studio.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when filling out our commission request questionnaire or joining our newsletter circle. This includes your name, email address, phone/WhatsApp number, shipping address, occasion dates, and personal wedding stories or keepsake descriptions shared for design purposes."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use your personal and botanical coordinates to schedule private design consultations, coordinate the overnight transit of fresh florals, issue pricing estimations, process hand-delivery details, and send newsletters (only if subscribed). We never sell, lease, or share your private data with third-party advertisers."
    },
    {
      title: "3. Data Security & Retention",
      content: "Since preservation represents an intimate transaction of trust, we implement industry-standard encryption to protect your data. Your wedding stories and details are retained securely in our private archives for reference during future curation or warranty inquiries."
    },
    {
      title: "4. Your Rights & Contact Details",
      content: "You have the right to request access to, correction of, or deletion of the personal information we hold. For privacy requests or questions regarding our data practices, please email nikitarawatniki1234@gmail.com or contact our Kotdwar studio at +91 63991 73280."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | Nikeeta Rawat Resin Studio",
    "description": "Learn how we handle your personal data, commission questionnaire details, and cookies at Nikeeta Rawat Resin Studio.",
    "url": "https://nikeetarawatstudio.com/privacy"
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
                  Legal Policy
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                  Privacy Policy
                </h1>
                <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  Last Updated: July 12, 2026. This policy describes how Nikeeta Rawat Resin Studio collects, uses, and safeguards the personal details and stories entrusted to us.
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
                <h3 className="font-serif text-lg text-white font-light tracking-wide">Need Further Clarification?</h3>
                <p className="text-xs text-zinc-400 font-light max-w-lg mx-auto">
                  If you have questions about how we handle sensitive items like photographs, locks of hair, or personal relics during resin curation, please reach out.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none shadow-md shadow-gold/10"
                  >
                    Contact the Studio
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
