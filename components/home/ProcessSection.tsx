"use client";

import { useState } from "react";
import Link from "next/link";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: Step[];
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5 flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-4 snap-x snap-mandatory scrollbar-none">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`flex-none w-[260px] lg:w-full text-left p-6 transition-all duration-300 border flex items-center gap-6 snap-start cursor-pointer ${
              activeStep === idx
                ? "border-gold/30 bg-studio-surface/50 lg:translate-x-2"
                : "border-white/5 hover:border-white/20 bg-transparent"
            }`}
          >
            <span className={`font-serif text-2xl ${activeStep === idx ? "text-gold" : "text-zinc-600"}`}>
              {step.number}
            </span>
            <div>
              <h3 className={`text-sm uppercase tracking-wider font-medium ${activeStep === idx ? "text-white" : "text-zinc-400"}`}>
                {step.title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      <div className="lg:col-span-7 bg-studio-surface border border-white/5 p-8 md:p-12 relative min-h-[300px] flex flex-col justify-center">
        <div className="absolute top-0 right-0 p-8 text-7xl font-serif font-light text-zinc-800 opacity-20 select-none">
          {steps[activeStep].number}
        </div>
        <div className="relative z-10">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-2 block">Step Curation</span>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide mb-6">
            {steps[activeStep].title}
          </h3>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-loose max-w-xl">
            {steps[activeStep].description}
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/commission"
              className="text-xs uppercase tracking-[0.2em] text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
            >
              Commission Artwork &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
