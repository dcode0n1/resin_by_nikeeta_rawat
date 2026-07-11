"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import { galleryItems, GalleryItem } from "@/data/gallery";

export default function GalleryClient() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filters = [
    { name: "All Exhibits", value: "all" },
    { name: "Wedding", value: "wedding" },
    { name: "Jewellery", value: "jewellery" },
    { name: "Frames", value: "frames" },
    { name: "Furniture", value: "furniture" },
    { name: "Memorial", value: "memorial" },
    { name: "Decor", value: "decor" },
  ];

  const filteredItems = selectedFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedFilter);

  return (
    <>
      {/* FILTER NAVIGATION */}
      <section className="py-6 border-y border-white/5 bg-studio-surface/20 sticky top-20 z-30 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors focus:outline-none ${
                  selectedFilter === filter.value
                    ? "text-gold font-semibold border-b border-gold/60 pb-1"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-zinc-500 font-light text-sm">
              No artwork found in this category.
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 sm:gap-6 md:gap-8 space-y-4 sm:space-y-6 md:space-y-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="break-inside-avoid relative overflow-hidden border border-white/10 group cursor-pointer bg-studio-surface"
                >
                  <div className="relative w-full h-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                      <span className="text-[10px] uppercase tracking-widest text-gold font-semibold mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-lg text-white font-light tracking-wide mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-light line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX / DETAIL MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveItem(null)} />
          
          <div className="relative z-10 bg-studio-surface max-w-5xl w-full border border-white/10 grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-30 bg-black/60 backdrop-blur-md text-zinc-400 hover:text-gold p-3 rounded-full transition-all duration-300 shadow-md focus:outline-none"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Image */}
            <div className="relative h-[400px] md:h-[600px] w-full">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column: Metadata */}
            <div className="p-8 md:p-12 flex flex-col justify-between space-y-8 bg-studio-surface">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2 block">
                    {activeItem.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide">
                    {activeItem.title}
                  </h2>
                </div>

                <p className="text-zinc-300 font-light leading-relaxed text-sm">
                  {activeItem.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-1">
                      Materials Used
                    </h4>
                    <p className="text-xs font-light text-zinc-300">
                      {activeItem.materials.join(", ")}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-1">
                      Dimensions
                    </h4>
                    <p className="text-xs font-light text-zinc-300">{activeItem.dimensions}</p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-1">
                      Exhibited Year
                    </h4>
                    <p className="text-xs font-light text-zinc-300">{activeItem.year}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex gap-4">
                <Link
                  href="/commission"
                  onClick={() => setActiveItem(null)}
                  className="flex-1 flex items-center justify-center bg-gold border border-gold text-black text-xs uppercase tracking-[0.2em] font-semibold py-4 hover:bg-transparent hover:text-gold transition-all duration-300 rounded-none font-medium"
                >
                  Commission Similar Piece
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
