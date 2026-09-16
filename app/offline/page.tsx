import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "Offline | Nikeeta Rawat Resin Studio",
  description: "You are currently offline. Nikeeta Rawat Resin Studio cached access.",
};

export default function OfflinePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-studio-bg text-white px-6 py-16 text-center">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Atelier Crest */}
        <div className="mb-8">
          <Logo variant="badge" showText={false} />
        </div>

        <span className="text-[11px] uppercase tracking-[0.35em] text-gold font-medium mb-3">
          Resin Studio Offline Mode
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide mb-4">
          Connection Paused
        </h1>

        <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
          You are currently browsing offline. Our studio gallery and cached inquiries remain preserved. Once your connection returns, full real-time updates and consultations will resume.
        </p>

        {/* Offline Quick Inquiries */}
        <div className="w-full bg-studio-surface/80 border border-white/10 p-6 mb-8 text-left space-y-3">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Direct Studio Line</h2>
          <p className="text-xs text-zinc-300 font-light">
            Need urgent flower preservation guidance? You can reach artist Nikeeta Rawat directly by phone or WhatsApp:
          </p>
          <div className="pt-2 flex flex-col gap-1 text-xs">
            <a
              href="tel:+916399173280"
              className="text-white hover:text-gold transition-colors font-mono"
            >
              📞 +91 63991 73280
            </a>
            <span className="text-zinc-500 text-[11px]">
              Studio Location: BEL Road, Kotdwar, Uttarakhand
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/"
            className="border border-gold text-gold hover:bg-gold hover:text-black px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
