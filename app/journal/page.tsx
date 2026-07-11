import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import { journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "The Journal - Studio Stories & Care Guides | Nikeeta Rawat Resin Studio",
  description: "Read about the art of slow flower drying, caring for your resin keepsakes, and stories behind recent commissions.",
};

export default function JournalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Journal - Studio Stories & Care Guides | Nikeeta Rawat Resin Studio",
    "description": "Read about the art of slow flower drying, caring for your resin keepsakes, and stories behind recent commissions.",
    "url": "https://nikeetarawatstudio.com/journal",
    "blogPost": journalPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.coverImage,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": "Nikeeta Rawat"
      }
    }))
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
                Studio Stories
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                The Journal
              </h1>
              <p className="max-w-2xl mx-auto text-zinc-400 font-light text-sm md:text-base leading-relaxed tracking-wide">
                Delve into stories behind recent collections, guidelines for caring for your heirlooms, and technical logs from the studio.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* POSTS LISTING */}
        <section className="py-8 sm:py-12 bg-studio-surface/10 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {journalPosts.map((post, idx) => (
                <FadeUp key={post.id} delay={idx * 100} className="bg-studio-surface border border-white/5 flex flex-col justify-between h-full">
                  <div>
                    {/* Cover image */}
                    <div className="relative h-[240px] w-full border-b border-white/5 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-102"
                      />
                    </div>
                    {/* Meta & Title */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-gold font-semibold">
                        <span>{post.category}</span>
                        <span className="text-zinc-500 font-normal">{post.readTime}</span>
                      </div>
                      <h2 className="font-serif text-xl text-white font-light tracking-wide hover:text-gold transition-colors duration-200">
                        <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-xs font-light text-zinc-400 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Date and Read Link */}
                  <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500">{post.date}</span>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="text-xs uppercase tracking-wider text-gold hover:text-white transition-colors"
                    >
                      Read Post &rarr;
                    </Link>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
