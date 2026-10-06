import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, Smartphone } from "lucide-react";
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
  { label: "Locations", to: "/", hash: "service-area" },
  { label: "Reviews", to: "/", hash: "reviews" },
  { label: "FAQ", to: "/", hash: "faq" },
  { label: "Contact", to: "/contact", hash: undefined },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 xl:grid-cols-[auto_1fr_auto]">
          <div className="flex min-w-0 items-center gap-3 py-2.5 sm:py-4">
            <Link
              to="/"
              aria-label="Movers To Go home"
              className="shrink-0 rounded-lg bg-white px-1.5 py-1 shadow-md shadow-black/15 sm:px-2"
            >
              <img
                src="/images/logo1.webp"
                alt="Movers To Go"
                className="h-8 w-auto sm:h-10 lg:h-11"
              />
            </Link>
            <Link
              to="/"
              className="truncate font-display text-lg font-bold tracking-wide text-white uppercase sm:hidden"
            >
              {site.name}
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden justify-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className="rounded-md font-display text-base font-bold tracking-wide text-white uppercase transition-colors hover:text-[#4C137F]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={site.phoneHref}
              aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
              className="hidden items-center gap-2 rounded-md px-2 py-2 text-base font-semibold text-white transition-colors hover:text-[#4C137F] sm:inline-flex"
            >
              <Smartphone aria-hidden="true" className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <Link
              to="/contact"
              aria-label="Get a free moving quote"
              className="hidden items-center justify-center rounded-lg bg-[#4C137F] px-5 py-2.5 text-base font-bold tracking-wide text-white uppercase shadow-md shadow-black/20 transition-all hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand focus-visible:outline-none sm:inline-flex"
            >
              Get Free Quote
            </Link>

            <a
              href={site.phoneHref}
              aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4C137F] text-white shadow-md transition-all hover:opacity-90 active:scale-95 sm:hidden"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4C137F] text-white shadow-md sm:h-11 sm:w-11 transition-all hover:opacity-90 active:scale-95 xl:hidden"
              >
                <Menu aria-hidden="true" className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-3/4 border-l-0 bg-[#4C137F] text-white sm:max-w-xs [&>button]:text-white [&>button]:opacity-90 [&>button]:data-[state=open]:bg-transparent"
              >
                <SheetHeader className="text-left">
                  <SheetTitle className="text-white">{site.name}</SheetTitle>
                  <div aria-hidden="true" className="h-1 w-12 rounded-full bg-brand" />
                </SheetHeader>
                <nav aria-label="Primary" className="mt-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <SheetClose key={link.label} asChild>
                      <Link
                        to={link.to}
                        hash={link.hash}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-3 font-display text-base font-bold tracking-wide text-white uppercase transition-colors hover:bg-white/10 hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <a
                    href={site.phoneHref}
                    aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-3 py-3 text-base font-bold text-white shadow-md shadow-black/20 transition-all hover:opacity-90 active:scale-95"
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
      <div aria-hidden="true" className="h-3 w-full bg-[#4C137F]" />
    </header>
  );
}
