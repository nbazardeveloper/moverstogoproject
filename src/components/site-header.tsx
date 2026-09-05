import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Smartphone } from "lucide-react";
import { site } from "@/data/site";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", to: "/services-coverage", hash: undefined },
  { label: "About Us", to: "/", hash: "why-movers-to-go" },
  { label: "Reviews", to: "/", hash: "reviews" },
  { label: "FAQ", to: "/", hash: "faq" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-7xl bg-neutral-800 px-4 shadow-lg sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 xl:grid-cols-[auto_1fr_auto]">
          <Link
            to="/"
            aria-label="Movers To Go home"
            className="flex min-w-0 items-center py-4 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none sm:py-5"
          >
            <img
              src="/images/logo.webp"
              alt="Movers To Go"
              className="h-11 w-auto shrink-0 sm:h-12 lg:h-14"
            />
          </Link>

          <nav aria-label="Primary" className="hidden justify-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className="rounded-md text-base font-bold tracking-wide text-white uppercase transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={site.phoneHref}
              aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
              className="hidden items-center gap-2 rounded-md px-2 py-2 text-base font-semibold text-white transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none sm:inline-flex"
            >
              <Smartphone aria-hidden="true" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <Link
              to="/contact"
              aria-label="Get a free moving quote"
              className="hidden items-center justify-center bg-brand px-5 py-2.5 text-base font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-all hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none sm:inline-flex"
            >
              Get Free Quote
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none xl:hidden"
              >
                <Menu aria-hidden="true" className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-3/4 sm:max-w-xs">
                <SheetHeader>
                  <SheetTitle>{site.name}</SheetTitle>
                </SheetHeader>
                <nav aria-label="Primary" className="mt-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        to={link.to}
                        hash={link.hash}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-3 text-base font-bold tracking-wide text-foreground uppercase transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <a
                    href={site.phoneHref}
                    aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
                    className="mt-2 inline-flex items-center gap-2 rounded-md px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-surface focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                  >
                    <Smartphone aria-hidden="true" className="h-4 w-4" />
                    {site.phoneDisplay}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
