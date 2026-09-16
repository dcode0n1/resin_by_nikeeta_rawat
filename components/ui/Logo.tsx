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
      imageSize: 38,
      containerClass: "h-9 w-9 xl:h-10 xl:w-10",
      titleClass: "text-[15px] xl:text-[17px] tracking-[0.15em] xl:tracking-[0.2em] whitespace-nowrap leading-tight",
      subtitleClass: "text-[7.5px] xl:text-[8.5px] tracking-[0.32em] xl:tracking-[0.4em] whitespace-nowrap leading-none mt-0.5",
    },
    footer: {
      imageSize: 46,
      containerClass: "h-11 w-11 xl:h-12 xl:w-12",
      titleClass: "text-lg tracking-[0.2em] whitespace-nowrap",
      subtitleClass: "text-[8.5px] tracking-[0.38em] -mt-0.5 pl-0.5 whitespace-nowrap",
    },
    badge: {
      imageSize: 64,
      containerClass: "h-16 w-16",
      titleClass: "text-xl tracking-[0.22em] whitespace-nowrap",
      subtitleClass: "text-[9px] tracking-[0.42em] mt-0.5 whitespace-nowrap",
    },
    mark: {
      imageSize: 48,
      containerClass: "h-11 w-11",
      titleClass: "",
      subtitleClass: "",
    },
  }[variant];

  const content = (
    <div className={`flex items-center gap-2.5 xl:gap-3.5 group select-none shrink-0 ${className}`}>
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
        <div className="flex flex-col justify-center shrink-0">
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
      className="inline-flex items-center shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
      aria-label="Nikeeta Rawat Resin Studio - Home"
    >
      {content}
    </Link>
  );
}
