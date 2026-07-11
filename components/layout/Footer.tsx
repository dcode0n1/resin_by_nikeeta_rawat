"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define the validation schema using Zod
const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterFormValues) => {
    setSubscribedEmail(data.email);
    setSubscribed(true);
    reset();
  };

  const collectionLinks = [
    { name: "Wedding Preservation", href: "/collections/wedding-preservation" },
    { name: "Jewellery Collection", href: "/collections/jewellery" },
    { name: "Floral Frames", href: "/collections/frames" },
    { name: "Memorial Tributes", href: "/collections/memorial" },
    { name: "Furniture & Decor", href: "/collections/furniture" },
  ];

  const studioLinks = [
    { name: "Our Story", href: "/about" },
    { name: "The Journal", href: "/journal" },
    { name: "Investment Guide", href: "/investment" },
    { name: "Bespoke Commissions", href: "/commission" },
    { name: "Local Preservation", href: "/preservation" },
    { name: "Detailing Hub & Guides", href: "/guides" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/resin_by_nikeeta_rawat" },
    { name: "WhatsApp", href: "https://wa.me/916399173280" },
    { name: "Threads", href: "https://www.threads.net/@resin_by_nikeeta_rawat" },
  ];

  return (
    <footer className="bg-studio-surface border-t border-white/5 pt-16 pb-8 text-zinc-400 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Summary */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] text-white uppercase">
                Nikeeta Rawat
              </span>
              <span className="text-[8px] tracking-[0.4em] text-gold uppercase -mt-0.5 pl-0.5">
                Resin Studio
              </span>
            </Link>
            <p className="text-sm font-light leading-relaxed max-w-xs text-zinc-400">
              An emotional journey of preservation, crafting memories into timeless, glass-like bespoke resin installations.
            </p>
          </div>

          {/* Collections Links */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-4">Collections</h3>
            <ul className="space-y-2 text-sm font-light">
              {collectionLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gold transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Links */}
          <div>
            <h3 className="text-white text-xs uppercase tracking-[0.2em] font-semibold mb-4">Studio</h3>
            <ul className="space-y-2 text-sm font-light">
              {studioLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gold transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-xs uppercase tracking-[0.2em] font-semibold">Join the Studio Circle</h3>
            <p className="text-sm font-light leading-relaxed text-zinc-400">
              Receive updates on seasonal bookings and stories from the kiln.
            </p>

            {subscribed ? (
              <div className="text-xs text-gold bg-white/5 border border-gold/20 p-3 font-light tracking-wide transition-all duration-300">
                ✨ Thank you! <strong>{subscribedEmail}</strong> has been added to our studio circle.
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col py-1">
                <div className="flex border-b border-zinc-700 pb-1">
                  <input
                    type="text"
                    placeholder="EMAIL ADDRESS"
                    {...register("email")}
                    className="bg-transparent border-none text-xs tracking-wider text-white focus:outline-none w-full uppercase placeholder-zinc-600 font-light"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-xs text-gold hover:text-white uppercase tracking-widest pl-2 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    Join
                  </button>
                </div>
                {errors.email && (
                  <p className="text-rose-400 text-[10px] mt-1 font-light tracking-wide">
                    {errors.email.message}
                  </p>
                )}
              </form>
            )}

            <div className="flex space-x-4 pt-2">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-zinc-500 hover:text-gold transition-colors"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-light text-zinc-600 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} NIKEETA RAWAT RESIN STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">TERMS OF COMMISSION</Link>
            <Link href="/refund" className="hover:text-zinc-400 transition-colors">REFUND POLICY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
