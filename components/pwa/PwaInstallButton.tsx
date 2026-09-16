"use client";

import { useEffect, useState } from "react";

export default function PwaInstallButton() {
  const [mounted, setMounted] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
      document.referrer.includes("android-app://");
    setIsStandalone(standalone);
  }, []);

  // Guarantee exact match between SSR and initial client hydration
  if (!mounted || isStandalone) {
    return null;
  }

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("trigger-pwa-install"));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hover:text-gold transition-colors duration-200 flex items-center gap-1.5 text-zinc-400 cursor-pointer group text-sm font-light text-left"
      aria-label="Install Nikeeta Rawat Studio Progressive Web App"
    >
      <svg
        className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      <span>Install Studio App</span>
    </button>
  );
}
