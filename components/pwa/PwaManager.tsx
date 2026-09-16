"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function PwaManager() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            // Service worker successfully registered
            if (process.env.NODE_ENV === "development") {
              console.log("[PWA] Service Worker registered with scope:", registration.scope);
            }
          })
          .catch((error) => {
            console.error("[PWA] Service Worker registration failed:", error);
          });
      });
    }

    // 2. Check if already installed / running standalone
    const isRunningStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;

    setIsStandalone(isRunningStandalone);

    // 3. Listen for BeforeInstallPromptEvent
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);

      // Check if user previously dismissed recently
      const dismissed = localStorage.getItem("pwa_prompt_dismissed");
      if (!dismissed) {
        setShowInstallBanner(true);
      }
    };

    // 4. Listen for AppInstalled
    const handleAppInstalled = () => {
      setShowInstallBanner(false);
      setDeferredPrompt(null);
      localStorage.setItem("pwa_installed", "true");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowInstallBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    localStorage.setItem("pwa_prompt_dismissed", Date.now().toString());
  };

  if (isStandalone || !showInstallBanner || !deferredPrompt) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Install Studio App"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 animate-fade-in"
    >
      <div className="bg-[#141416]/95 backdrop-blur-xl border border-gold/30 p-4 shadow-2xl ring-1 ring-white/10 flex items-center gap-3.5">
        <div className="relative h-11 w-11 shrink-0 rounded-full overflow-hidden border border-gold/40 bg-black/50 p-0.5">
          <Image
            src="/images/logo.png"
            alt="Nikeeta Rawat Studio"
            width={44}
            height={44}
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-serif uppercase tracking-widest text-white truncate">
            Install Studio App
          </h4>
          <p className="text-[11px] text-zinc-400 font-light truncate">
            Fast, offline access to gallery & inquiries
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleInstallClick}
            className="bg-gold text-black text-[10px] uppercase font-semibold tracking-widest px-3 py-2 hover:bg-gold/90 transition-colors cursor-pointer"
          >
            Install
          </button>
          <button
            onClick={handleDismiss}
            className="text-zinc-500 hover:text-white p-1 text-sm leading-none transition-colors cursor-pointer"
            aria-label="Dismiss app install banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
