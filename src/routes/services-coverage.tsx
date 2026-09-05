import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Building2, Home, MapPin, Music, Route as RouteIcon } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";

const title = "Moving Services & Service Areas in PA | Movers To Go";
const description =
  "Local, long-distance, commercial, packing and specialty moving across Philadelphia, Bucks County, Montgomery County, Allentown and the Lehigh Valley.";
const canonicalUrl = `${site.url}/services-coverage`;

export const Route = createFileRoute("/services-coverage")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: ServicesCoverage,
});

const sections = [
  {
    icon: Home,
    title: "Local Residential Moving",
    lead: "Apartments, condos, and townhomes across Philadelphia and the suburbs.",
    points: [
      "Walk-up and high-rise crews with elevator reservations and COI paperwork",
      "Blanket-wrapped furniture, floor runners, and doorway protection",
      "Hourly or flat-rate pricing confirmed before move day",
    ],
  },
  {
    icon: RouteIcon,
    title: "Interstate & Long-Distance Moving",
    lead: "Direct-route relocations from Pennsylvania to anywhere in the country.",
    points: [
      "One dedicated crew loads and delivers — no warehouse transfers",
      "Guaranteed delivery windows with proactive status updates",
      "Full inventory tagging and valuation coverage options",
    ],
  },
  {
    icon: Building2,
    title: "Commercial & Office Moving Solutions",
    lead: "Offices, retail spaces, and small warehouses moved without downtime.",
    points: [
      "After-hours, overnight, and weekend scheduling",
      "Color-coded labeling with floor-plan placement",
      "Workstation, IT, and furniture reassembly on arrival",
    ],
  },
  {
    icon: Boxes,
    title: "Full Packing, Unpacking & Furniture Assembly",
    lead: "Professional-grade materials and methodical, room-by-room packing.",
    points: [
      "Full-service or partial packing plus fragile-only options",
      "Dish barrels, wardrobe boxes, custom crates, and mattress covers",
      "Unpacking, debris removal, and furniture disassembly and reassembly",
    ],
  },
  {
    icon: Music,
    title: "Specialty & Heavy Item Moving",
    lead: "Pianos, antiques, fine art, safes, and gym equipment.",
    points: [
      "Upright and baby grand piano boards, skids, and straps",
      "Custom crating and climate-conscious handling for art and antiques",
      "Stair, narrow-doorway, and hoisting solutions for oversized items",
    ],
  },
];

function ServicesCoverage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <span className="inline-flex items-center gap-2 border border-border bg-background px-3 py-1 text-xs font-bold tracking-wide uppercase">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              Services & Coverage
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] font-extrabold sm:text-6xl">
              Professional Moving Services & Service Areas in Pennsylvania
            </h1>
            <p className="mt-5 max-w-2xl text-base text-foreground sm:text-lg">
              Dedicated local and long-distance relocation support across Greater Philadelphia.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl space-y-4 px-4 py-16 sm:px-6 lg:py-24">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="grid gap-6 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-brand sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]"
              >
                <div className="flex min-w-0 gap-4">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground"
                  >
                    <section.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-bold text-foreground">0{index + 1}</p>
                    <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-base text-foreground">{section.lead}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand"
                      />
                      <span className="min-w-0">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="max-w-3xl font-display text-4xl font-extrabold sm:text-5xl">
              Serving Greater Philadelphia & Surrounding PA Counties
            </h2>
            <p className="mt-4 max-w-2xl text-foreground">
              Movers To Go serves these Pennsylvania areas for local moves, and the entire country
              for long-distance relocations.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {site.areas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand/12 text-brand"
                  >
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display font-bold">{area}</p>
                    <p className="text-base text-foreground">Local & long-distance moving</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <div className="grid gap-6 rounded-2xl border border-border bg-surface p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="min-w-0">
                <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
                  Plan your move with a team you can trust
                </h2>
                <p className="mt-3 max-w-2xl text-foreground">
                  Transparent estimates, licensed and insured crews, and a response within 15
                  minutes.
                </p>
              </div>
              <Link
                to="/contact"
                aria-label="Plan your move today and get a free quote"
                className="inline-flex shrink-0 items-center justify-center rounded-lg bg-brand px-6 py-4 text-base font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-all hover:opacity-90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Plan Your Move Today – Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section id="accessibility" className="scroll-mt-24 bg-surface">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <h2 className="font-display text-3xl font-extrabold">Accessibility Statement</h2>
            <p className="mt-4 text-base text-foreground">
              Movers To Go is committed to WCAG 2.1 Level AA accessibility. This site is built for
              full keyboard navigation with visible focus indicators, high-contrast text,
              descriptive labels on every interactive element, and semantic structure for screen
              readers. If you experience any barrier using this site, call{" "}
              <a
                href={site.phoneHref}
                aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
                className="font-semibold underline hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                {site.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a
                href={site.emailHref}
                aria-label={`Email Movers To Go at ${site.email}`}
                className="font-semibold underline hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                {site.email}
              </a>
              , and we will assist you directly.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
