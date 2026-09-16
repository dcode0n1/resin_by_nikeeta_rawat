import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "header" | "footer" | "badge" | "mark";
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Logo({
  variant = "header",
  showText = true,
  className = "",
  onClick,
}: LogoProps) {
  const isHeader = variant === "header";
  const isMarkOnly = variant === "mark" || !showText;

  // Sizing configuration based on variant
  const sizeConfig = {
    header: {
      imageSize: 42,
      containerClass: "h-11 w-11",
      titleClass: "text-lg tracking-[0.2em]",
      subtitleClass: "text-[8.5px] tracking-[0.38em] -mt-0.5 pl-0.5",
    },
    footer: {
      imageSize: 46,
      containerClass: "h-12 w-12",
      titleClass: "text-lg tracking-[0.2em]",
      subtitleClass: "text-[8.5px] tracking-[0.38em] -mt-0.5 pl-0.5",
    },
    badge: {
      imageSize: 64,
      containerClass: "h-16 w-16",
      titleClass: "text-xl tracking-[0.22em]",
      subtitleClass: "text-[9px] tracking-[0.42em] mt-0.5",
    },
    mark: {
      imageSize: 48,
      containerClass: "h-12 w-12",
      titleClass: "",
      subtitleClass: "",
    },
  }[variant];

  const content = (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* Brand Emblem */}
      <div
        className={`relative ${sizeConfig.containerClass} shrink-0 rounded-full overflow-hidden border border-gold/30 bg-black/40 shadow-inner ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:border-gold/60`}
      >
        <Image
          src="/images/logo.png"
          alt="Nikeeta Rawat Resin Studio Logo"
          width={sizeConfig.imageSize}
          height={sizeConfig.imageSize}
          className="object-cover w-full h-full"
          priority={isHeader}
        />
      </div>

      {/* Brand Typography */}
      {!isMarkOnly && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-serif text-white uppercase transition-colors duration-200 group-hover:text-gold ${sizeConfig.titleClass}`}
          >
            Nikeeta Rawat
          </span>
          <span
            className={`text-gold uppercase font-light ${sizeConfig.subtitleClass}`}
          >
            Resin Studio
          </span>
        </div>
      )}
    </div>
  );

  return (
    <Link
      href="/"
      onClick={onClick}
      className="inline-flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
      aria-label="Nikeeta Rawat Resin Studio - Home"
    >
      {content}
    </Link>
  );
}
