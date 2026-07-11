import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeUp from "@/components/ui/FadeUp";
import { journalPosts } from "@/data/journal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Programmatic SEO (pSEO): Dynamic metadata generation for blog posts
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = journalPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Nikeeta Rawat Resin Studio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// Statically pre-render blog paths at build time (highly performant SEO)
export async function generateStaticParams() {
  return journalPosts.map((p) => ({
    slug: p.slug,
  }));
}

export default async function JournalPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const post = journalPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Schema Markup (JSON-LD BlogPosting Structured Data)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.coverImage,
    "datePublished": new Date(post.date).toISOString().split('T')[0],
    "author": {
      "@type": "Person",
      "name": "Nikeeta Rawat"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nikeeta Rawat Resin Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://placehold.co/600x400/0e0e0f/d6a84b?text=Nikeeta+Studio"
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-studio-bg text-white font-sans selection:bg-gold selection:text-black">
      {/* Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-grow pt-12 pb-24">
        {/* BACK NAVIGATION */}
        <section className="mx-auto max-w-4xl px-6">
          <Link
            href="/journal"
            className="inline-flex items-center text-xs uppercase tracking-widest text-zinc-500 hover:text-gold transition-colors mb-8"
          >
            &larr; Back to Journal
          </Link>
        </section>

        {/* HERO TITLE */}
        <section className="mx-auto max-w-4xl px-6 text-center md:text-left">
          <FadeUp>
            <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-gold font-semibold mb-4 justify-center md:justify-start">
              <span>{post.category}</span>
              <span className="text-zinc-600 font-normal">&bull;</span>
              <span className="text-zinc-400 font-normal">{post.readTime}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light tracking-wide text-white leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-8">{post.date}</p>
          </FadeUp>
        </section>

        {/* HERO IMAGE */}
        <section className="mx-auto max-w-5xl px-6 my-12">
          <FadeUp delay={100}>
            <div className="relative h-[240px] sm:h-[400px] md:h-[500px] w-full border border-white/5 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeUp>
        </section>

        {/* POST CONTENT */}
        <section className="mx-auto max-w-3xl px-6 py-8">
          <FadeUp delay={150}>
            <div
              className="prose prose-invert max-w-none text-zinc-300 font-light leading-loose text-sm md:text-base space-y-6 
              prose-headings:font-serif prose-headings:font-light prose-headings:text-white prose-headings:tracking-wide
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:mb-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeUp>
        </section>

        {/* RELATED FOOTER FOOTNOTE */}
        <section className="mx-auto max-w-3xl px-6 mt-16 pt-12 border-t border-white/5 text-center">
          <FadeUp>
            <h3 className="font-serif text-xl text-white font-light mb-4">Want to start your own story?</h3>
            <p className="text-zinc-500 text-xs font-light leading-relaxed mb-6 max-w-md mx-auto">
              Preserve your memories and flowers from a wedding, celebration, or farewell in custom artwork.
            </p>
            <Link
              href="/commission"
              className="bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none inline-block shadow-md shadow-gold/10"
            >
              Start Commission Curation
            </Link>
          </FadeUp>
        </section>
      </main>

      <Footer />
    </div>
  );
}
