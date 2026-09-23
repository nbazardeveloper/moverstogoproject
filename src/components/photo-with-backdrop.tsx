import type { ReactNode } from "react";

/**
 * Photo card with an offset brand-color panel peeking out from behind it
 * (top-right on desktop, hidden on nothing — used consistently across
 * Why Us / How It Works / FAQ so the treatment only needs to change once).
 */
export function PhotoWithBackdrop({
  src,
  alt,
  imgClassName,
  className,
  children,
}: {
  src: string;
  alt: string;
  imgClassName: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-4 h-full w-full rounded-2xl bg-[#3C0B68] sm:-top-6 sm:-right-6"
      />
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <img src={src} alt={alt} className={imgClassName} />
        {children}
      </div>
    </div>
  );
}
