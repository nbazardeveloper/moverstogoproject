import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { site } from "@/data/site";

export function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] sm:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={site.phoneHref}
        aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-brand px-4 py-3 text-sm font-bold tracking-wide text-brand uppercase transition-colors active:bg-brand/10"
      >
        <Phone aria-hidden className="h-4 w-4" />
        Call Now
      </a>
      <Link
        to="/contact"
        aria-label="Get your free moving quote"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand px-4 py-3 text-sm font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-opacity active:opacity-90"
      >
        Get Quote
      </Link>
    </div>
  );
}
