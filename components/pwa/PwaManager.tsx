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
  const [isIOS, setIsIOS] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Immediately register Service Worker
    if ("serviceWorker" in navigator) {
      const registerServiceWorker = () => {
        navigator.serviceWorker
          .register("/sw.js", { scope: "/" })
          .then((registration) => {
            console.log("[PWA] Service Worker registered successfully, scope:", registration.scope);
          })
          .catch((error) => {
            console.error("[PWA] Service Worker registration error:", error);
          });
      };

      if (document.readyState === "complete" || document.readyState === "interactive") {
        registerServiceWorker();
      } else {
        window.addEventListener("load", registerServiceWorker);
      }
    }

    // 2. Check if already running standalone (installed PWA)
    const isRunningStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
      document.referrer.includes("android-app://");

    setIsStandalone(isRunningStandalone);

    // 3. Detect iOS Safari
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !(window as unknown as { MSStream?: unknown }).MSStream;

    setIsIOS(isIOSDevice);

    // 4. Capture BeforeInstallPromptEvent for Android / Chrome / Edge
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      // Show banner if not dismissed in session
      if (!sessionStorage.getItem("pwa_prompt_dismissed")) {
        setShowInstallBanner(true);
      }
      console.log("[PWA] beforeinstallprompt captured, app is installable!");
    };

    // 5. Handle AppInstalled event
    const handleAppInstalled = () => {
      setShowInstallBanner(false);
      setShowInstructionsModal(false);
      setDeferredPrompt(null);
      localStorage.setItem("pwa_installed", "true");
      console.log("[PWA] Application successfully installed.");
    };

    // 6. External trigger listener (from Footer, Header, etc.)
    const handleTriggerInstall = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt().then(() => {
          deferredPrompt.userChoice.then((choice) => {
            if (choice.outcome === "accepted") {
              setShowInstallBanner(false);
            }
          });
        });
      } else {
        setShowInstructionsModal(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    window.addEventListener("trigger-pwa-install", handleTriggerInstall);

    // Show banner after short delay if not dismissed and not in standalone
    const timer = setTimeout(() => {
      if (!isRunningStandalone && !sessionStorage.getItem("pwa_prompt_dismissed")) {
        setShowInstallBanner(true);
      }
    }, 1500);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("trigger-pwa-install", handleTriggerInstall);
      clearTimeout(timer);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        console.log("[PWA] User choice outcome:", choice.outcome);
        if (choice.outcome === "accepted") {
          setShowInstallBanner(false);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error("[PWA] Error launching prompt:", err);
        setShowInstructionsModal(true);
      }
    } else {
      setShowInstructionsModal(true);
    }
  };

  const handleDismissBanner = () => {
    setShowInstallBanner(false);
    sessionStorage.setItem("pwa_prompt_dismissed", "true");
  };

  // Do not show anything if running in standalone mode (app already installed)
  if (isStandalone) {
    return null;
  }

  return (
    <>
      {/* 1. FLOATING INSTALL BANNER */}
      {showInstallBanner && (
        <aside
          role="dialog"
          aria-label="Install Nikeeta Rawat Studio App"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fade-in"
        >
          <div className="bg-[#141416]/95 backdrop-blur-xl border border-gold/40 p-4 shadow-2xl ring-1 ring-white/10 flex items-center gap-3.5 rounded-sm">
            <div className="relative h-11 w-11 shrink-0 rounded-full overflow-hidden border border-gold/50 bg-black/60 p-0.5 shadow-inner">
              <Image
                src="/images/logo.png"
                alt="Nikeeta Rawat Resin Studio"
                width={44}
                height={44}
                className="object-cover w-full h-full rounded-full"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                <h4 className="text-xs font-serif uppercase tracking-widest text-white truncate font-medium">
                  Studio App
                </h4>
              </div>
              <p className="text-[11px] text-zinc-400 font-light truncate mt-0.5">
                Install for offline access & seamless inquiries
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleInstallClick}
                className="bg-gold text-black text-[10px] uppercase font-semibold tracking-widest px-3.5 py-2 hover:bg-gold/90 transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-md active:scale-95"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Install
              </button>
              <button
                onClick={handleDismissBanner}
                className="text-zinc-500 hover:text-white p-1 text-sm leading-none transition-colors cursor-pointer"
                aria-label="Dismiss app install banner"
              >
                ✕
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. INSTRUCTIONS MODAL (When native prompt cannot be directly invoked) */}
      {showInstructionsModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="How to install Nikeeta Rawat Studio App"
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            className="absolute inset-0"
            onClick={() => setShowInstructionsModal(false)}
          />
          <div className="relative bg-[#161619] border border-gold/40 p-6 sm:p-8 max-w-md w-full shadow-2xl text-white z-10 rounded-sm">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 rounded-full overflow-hidden border border-gold/50 bg-black/60 p-0.5">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={36}
                    height={36}
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-serif uppercase tracking-widest text-gold text-xs font-semibold">
                    Install Studio App
                  </h3>
                  <p className="text-[10px] text-zinc-400 font-light tracking-wide">
                    Progressive Web Application (PWA)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowInstructionsModal(false)}
                className="text-zinc-400 hover:text-white text-lg p-1 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {isIOS ? (
              <div className="space-y-4 text-xs font-light text-zinc-300">
                <p className="leading-relaxed">
                  Install this atelier app directly onto your iPhone or iPad home screen for high-performance offline viewing:
                </p>
                <div className="space-y-2.5 bg-black/40 p-4 border border-white/5 rounded-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[10px] font-medium text-gold">
                      1
                    </span>
                    <p className="leading-relaxed">
                      Tap the <strong className="text-white">Share</strong> button (box with an upward arrow) in the Safari bottom bar.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[10px] font-medium text-gold">
                      2
                    </span>
                    <p className="leading-relaxed">
                      Scroll down the options menu and select <strong className="text-gold">&ldquo;Add to Home Screen&rdquo;</strong> (+).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[10px] font-medium text-gold">
                      3
                    </span>
                    <p className="leading-relaxed">
                      Tap <strong className="text-white">&ldquo;Add&rdquo;</strong> in the top-right corner to finish.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs font-light text-zinc-300">
                <p className="leading-relaxed">
                  You can install Nikeeta Rawat Resin Studio to your desktop or mobile home screen directly through your browser:
                </p>
                <div className="space-y-2.5 bg-black/40 p-4 border border-white/5 rounded-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[10px] font-medium text-gold">
                      A
                    </span>
                    <p className="leading-relaxed">
                      <strong className="text-white">In Chrome / Edge (Desktop):</strong> Look at the right side of the address bar at the top of your browser window and click the <strong className="text-gold">Install icon (⊕ or ⤓)</strong>.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-[10px] font-medium text-gold">
                      B
                    </span>
                    <p className="leading-relaxed">
                      <strong className="text-white">Via Browser Menu:</strong> Click the browser menu button (<strong className="text-white">⋮</strong> or <strong className="text-white">⋯</strong>) and select <strong className="text-gold">&ldquo;Install Nikeeta Resin&rdquo;</strong> or <strong className="text-gold">&ldquo;Add to Home Screen&rdquo;</strong>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowInstructionsModal(false)}
                className="bg-gold text-black text-[10px] uppercase font-semibold tracking-widest px-5 py-2.5 hover:bg-gold/90 transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
