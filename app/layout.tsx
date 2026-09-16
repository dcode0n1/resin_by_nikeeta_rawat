import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import PwaManager from "@/components/pwa/PwaManager";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0e0e0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nikeetarawatstudio.com"),
  manifest: "/manifest.webmanifest",
  title: "Nikeeta Rawat Resin Studio | Preserving Memories in Luxury Art",
  description: "Bespoke preservation of wedding garlands, florals, and memories into luxury handcrafted resin artwork.",
  applicationName: "Nikeeta Rawat Resin Studio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Nikeeta Resin",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikeetarawatstudio.com",
    siteName: "Nikeeta Rawat Resin Studio",
    title: "Nikeeta Rawat Resin Studio | Preserving Memories in Luxury Art",
    description: "Bespoke preservation of wedding garlands, florals, and memories into luxury handcrafted resin artwork.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nikeeta Rawat Resin Studio Luxury Monogram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikeeta Rawat Resin Studio | Preserving Memories in Luxury Art",
    description: "Bespoke preservation of wedding garlands, florals, and memories into luxury handcrafted resin artwork.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-studio-bg text-white">
        {children}
        <PwaManager />
      </body>
    </html>
  );
}
