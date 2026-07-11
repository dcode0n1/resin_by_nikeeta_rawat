"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Collections", href: "/collections" },
    { name: "Gallery", href: "/gallery" },
    { name: "The Journal", href: "/journal" },
    { name: "Investment", href: "/investment" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`z-50 transition-all duration-300 ${
        isOpen
          ? "fixed inset-0 h-screen w-full bg-[#0E0E0F]/95 backdrop-blur-xl flex flex-col"
          : "sticky top-0 w-full border-b border-white/5 bg-[#0E0E0F]/90 backdrop-blur-md"
      }`}
    >
      <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${isOpen ? "border-b border-white/5" : ""}`}>
        <div className="flex h-20 items-center justify-between">
          {/* Left Side: Logo & Navigation */}
          <div className="flex items-center gap-8 xl:gap-16">
            {/* Logo */}
            <div className="flex">
              <Link href="/" className="group flex flex-col justify-center" onClick={() => setIsOpen(false)}>
                <span className="font-serif text-xl tracking-[0.2em] text-white transition-colors group-hover:text-gold uppercase">
                  Nikeeta Rawat
                </span>
                <span className="text-[9px] tracking-[0.4em] text-gold uppercase -mt-0.5 pl-0.5">
                  Resin Studio
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center lg:space-x-5 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[11px] xl:text-xs tracking-[0.1em] xl:tracking-[0.15em] uppercase font-light transition-colors hover:text-gold ${
                    isActive(item.href) ? "text-gold font-medium" : "text-zinc-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side: Call to Action */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/commission"
              className="inline-flex items-center justify-center border border-gold px-3 py-3 text-[11px] uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-none font-medium whitespace-nowrap"
            >
              Commission Artwork
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden flex-1 overflow-y-auto w-full animate-fade-in">
          <div className="space-y-1 px-6 py-8 flex flex-col h-full justify-between pb-12 min-h-[calc(100vh-80px)]">
            <div className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg tracking-[0.2em] uppercase font-light ${
                    isActive(item.href) ? "text-gold" : "text-zinc-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-8">
              <Link
                href="/commission"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center border border-gold py-4 text-sm uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-none font-medium"
              >
                Commission Artwork
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
