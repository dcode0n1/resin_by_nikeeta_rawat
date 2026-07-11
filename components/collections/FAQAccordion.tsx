"use client";

import { useState } from "react";
import { CollectionFAQ } from "@/data/collections";
import FadeUp from "@/components/ui/FadeUp";

interface FAQAccordionProps {
  faqs: CollectionFAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <FadeUp key={idx} delay={idx * 100} className="border-b border-white/5 pb-4">
          <button
            onClick={() => toggleFaq(idx)}
            className="w-full flex justify-between items-center py-4 text-left font-serif text-base md:text-lg text-white hover:text-gold transition-colors focus:outline-none"
          >
            <span>{faq.question}</span>
            <span className="text-gold font-sans font-light pl-4">
              {openIndex === idx ? "—" : "+"}
            </span>
          </button>
          {openIndex === idx && (
            <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed pb-4 pr-8 animate-fade-in">
              {faq.answer}
            </p>
          )}
        </FadeUp>
      ))}
    </div>
  );
}
