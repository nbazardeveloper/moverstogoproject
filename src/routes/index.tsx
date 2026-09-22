import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Smartphone, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { faqs, site, testimonials } from "@/data/site";

function GoogleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function GoogleWordmark({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 272 92" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#EA4335"
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      />
      <path
        fill="#4285F4"
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      />
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
      <path
        fill="#EA4335"
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      />
      <path
        fill="#4285F4"
        d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"
      />
    </svg>
  );
}

const title = "Movers To Go | Local Movers in Philadelphia, PA";
const description =
  "Licensed Philadelphia movers with 10+ years' experience and a 4.9-star rating. Local, long-distance, commercial & packing services. Free quote in 15 minutes.";
const canonicalUrl = site.url;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/")({
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
      { "script:ld+json": faqJsonLd },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: Index,
});

const ratingPlatforms: {
  name: string;
  rating: string;
  reviews?: string;
  icon?: React.ReactNode;
  logoSrc?: string;
  logoClassName?: string;
}[] = [
  {
    name: "Google",
    rating: "4.9",
    reviews: "100+ Reviews",
    icon: <GoogleWordmark className="h-10" />,
  },
  {
    name: "Yelp",
    rating: "5.0",
    logoSrc: "/images/logo/yelp_logo.png",
    logoClassName: "h-[43px]",
  },
  {
    name: "HomeAdvisor",
    rating: "5.0",
    logoSrc: "/images/logo/homeadvisor.webp",
    logoClassName: "h-9",
  },
];

const services = [
  {
    iconSrc: "/images/icons/local-moving-icon.png",
    title: "Local Moving",
    body: "Reliable local moving services throughout Philadelphia and surrounding areas. Our team handles your move with care, efficiency, and attention to detail from pickup to delivery.",
  },
  {
    iconSrc: "/images/icons/residential-moving-icon.png",
    title: "Residential Moving",
    body: "Moving to a new home? We help with house, condo, and residential moves throughout the Philadelphia area, with careful handling of your furniture and belongings every step of the way.",
  },
  {
    iconSrc: "/images/icons/residential-moving-icon.png",
    title: "Apartment Moving",
    body: "From walk-ups to high-rise apartments, our Philadelphia movers are prepared for stairs, elevators, tight spaces, and the challenges that come with city moving.",
  },
  {
    iconSrc: "/images/icons/commercial-office-moving-icon.png",
    title: "Commercial & Office Moving",
    body: "Dependable moving services for offices and businesses throughout Philadelphia and surrounding areas, with efficient planning to help keep your move organized and minimize disruption.",
  },
  {
    iconSrc: "/images/icons/packing-unpacking-icon.png",
    title: "Packing Services",
    body: "Need help getting ready for moving day? Our team can help pack and protect your belongings, furniture, and household items for a safer, more organized move.",
  },
  {
    iconSrc: "/images/icons/long-distance-moving-icon.png",
    title: "Long-Distance Moving",
    body: "Planning a move beyond the Philadelphia area? Contact Movers To Go to discuss your long-distance move and get a moving estimate based on your specific needs.",
  },
];

const reviewsByPlatform: {
  google: { name: string; meta: string; text: string }[];
  yelp: { name: string; meta: string; text: string }[];
  homeadvisor: { name: string; meta: string; text: string }[];
} = {
  google: [
    {
      name: "Nini Parkosadze",
      meta: "1 review · a month ago",
      text: "I had a really good experience with Movers To Go. The guys were on time, worked quickly, and were careful with everything. They were also very polite and easy to communicate with. The move went smoothly and nothing was damaged. I would definitely use them again.",
    },
    {
      name: "Lb Lb",
      meta: "5 reviews · 7 months ago",
      text: "Wonderful service, efficient and punctual. Most importantly, they handled my belongings with great care. The gentlemen made sure to ask and confirm placement of each item and assembly. They were extremely thorough, ensuring I had all my pieces and clearly explaining what parts were needed, missing, or could potentially get damaged. I highly recommend this service as this was my second move with them and I wouldn't choose anyone else!",
    },
    {
      name: "Mary",
      meta: "12 reviews · 6 months ago",
      text: "I had a very positive experience with this company! My two movers were respectful, efficient, and helped me wrap up some loose ends with my packing. I was quoted for 4 hours and they finished in 3 hours and 59 minutes! I'd highly recommend this company for your move.",
    },
    {
      name: "Nicole Sacchetti",
      meta: "6 reviews · 6 months ago",
      text: "Got two of the hardest working guys I could have asked for and they were very responsive email wise. I am very grateful for Georgie and David for going above and beyond for my move. I will be recommending them to my friends and family.",
    },
    {
      name: "Fym_ mariam",
      meta: "6 reviews · a month ago",
      text: "Thank you for making my move so easy. The movers were courteous, careful, and everything arrived in great condition. I appreciate the hard work.",
    },
    {
      name: "Tree of Life",
      meta: "7 reviews · 3 years ago",
      text: "The best movers!! Movers to go were absolutely amazing!!! From the first phone call and follow up communication to make sure we were ready for our move day was great! They packed up our Uboxes from uhaul and got everything in! They are super nice, fast, on time and know what they are doing! We can't recommend them enough for your move! We are so glad we found them!!! Hire them!!!",
    },
  ],
  yelp: testimonials.map((review) => ({
    name: review.name,
    meta: review.location,
    text: review.text,
  })),
  homeadvisor: [
    {
      name: "Stephanie A.",
      meta: "HomeAdvisor customer",
      text: "Called Movers to Go inquiring about some help for a same-day move. Although it was a long shot, Movers to Go was able to provide me a quote and get me scheduled for the same day, just a couple of hours later. Three gentlemen showed up ready to go — they were quick and efficient, and got me from my place in PA to my apartment in NJ (with a stop at the storage unit on the way) in under 5 hours, exactly the estimate I was provided! I will be using Movers to Go again, thanks for your help!",
    },
  ],
};

const reviewTabs: {
  key: keyof typeof reviewsByPlatform;
  name: string;
  icon?: React.ReactNode;
  logoSrc?: string;
  logoClassName?: string;
}[] = [
  { key: "google", name: "Google", icon: <GoogleIcon /> },
  {
    key: "yelp",
    name: "Yelp",
    logoSrc: "/images/logo/yelp_logo.png",
    logoClassName: "h-5",
  },
  {
    key: "homeadvisor",
    name: "HomeAdvisor",
    logoSrc: "/images/logo/homeadvisor.webp",
    logoClassName: "h-4",
  },
];

const whyUsStats = [
  { value: "10+", label: "Years of Experience" },
  { value: "4.9★", label: "Average Rating" },
  { value: "15 Min", label: "Free Quote Turnaround" },
];

const serviceAreaCards = [
  { name: "Philadelphia", subtitle: "Local Moving Services" },
  { name: "Huntingdon Valley", subtitle: "Local Moving Services" },
  { name: "Montgomery County", subtitle: "Local Moving Services" },
  { name: "Bucks County", subtitle: "Local Moving Services" },
];

// Varied heights create a masonry look instead of uniform tiles.
const galleryPhotoHeights = ["h-72", "h-44", "h-56", "h-80", "h-40", "h-64"];

const galleryPhotos = [
  {
    src: "/images/gallary/philadelphia-movers-team-moving-trucks.webp",
    alt: "Movers To Go coordinator reviewing a moving quote with a customer",
  },
  {
    src: "/images/gallary/mover-carrying-furniture-philadelphia-move.webp",
    alt: "Movers To Go mover carrying furniture into a customer's home",
  },
  {
    src: "/images/gallary/moving-crew-carrying-boxes-into-home.webp",
    alt: "Philadelphia moving crew carrying boxes and luggage into a home",
  },
  {
    src: "/images/gallary/furniture-wrapping-protection-philadelphia-movers.webp",
    alt: "Movers To Go team carefully moving furniture during a Philadelphia move",
  },
  {
    src: "/images/gallary/family-unpacking-boxes-after-move.webp",
    alt: "Mover wrapping furniture for protection during a move",
  },
  {
    src: "/images/gallary/moving-consultation-quote-philadelphia.webp",
    alt: "Family unpacking a Movers To Go branded box after their move",
  },
];

const howItWorks = [
  {
    title: "Get Your Free Quote",
    image: "/images/gallary/philadelphia-movers-team-moving-trucks.webp",
    alt: "Movers To Go coordinator preparing a moving quote",
    points: [
      "Reach out online or call us directly",
      "Share your move details — home size, move date, and both addresses",
      "Get a transparent, no-obligation estimate in about 15 minutes",
      "Confirm your date and a crew sized for your job, with no hidden fees added later",
    ],
  },
  {
    title: "Moving Day",
    image: "/images/gallary/moving-crew-carrying-boxes-into-home.webp",
    alt: "Movers To Go crew carrying boxes into a customer's home",
    points: [
      "Our crew arrives on time and ready to work",
      "Every item is blanket-wrapped and protected before it's loaded",
      "We carefully load, transport, and unload with care",
      "Furniture is reassembled and placed exactly where you want it",
    ],
  },
  {
    title: "Settle In",
    image: "/images/gallary/moving-consultation-quote-philadelphia.webp",
    alt: "Family unpacking a Movers To Go branded box after their move",
    points: [
      "We remove all packing materials and debris before we leave",
      "Your move coordinator follows up to make sure everything went smoothly",
      "Any questions or touch-ups are handled quickly",
      "Enjoy your new home!",
    ],
  },
];

function Index() {
  const [activePlatform, setActivePlatform] = useState<keyof typeof reviewsByPlatform>("google");

  return (
    <div className="min-h-screen pb-20 sm:pb-0">
      <SiteHeader />

      <MobileStickyCta />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white sm:min-h-[529px] lg:min-h-[635px]">
          <img
            src="/images/dot-blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-12 -left-12 z-0 h-[280px] w-[280px] select-none sm:-top-16 sm:-left-16 sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]"
          />
          <img
            src="/images/dot-blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -bottom-12 z-0 h-[280px] w-[280px] rotate-180 select-none sm:-right-16 sm:-bottom-16 sm:h-[380px] sm:w-[380px] lg:h-[460px] lg:w-[460px]"
          />
          <div className="absolute z-10 hidden shrink-0 sm:top-10 sm:right-8 sm:block sm:h-24 sm:w-44 lg:top-1/2 lg:right-12 lg:h-64 lg:w-[360px] lg:-translate-y-1/2 xl:hidden">
            <div aria-hidden="true" className="absolute top-2 -right-2 h-[85%] w-[85%] rounded-2xl bg-[#011936]" />
            <img
              src="/images/truck-transporent.webp"
              alt="Movers To Go moving truck"
              className="relative h-full w-full object-contain drop-shadow-xl"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-x-6 bottom-0 z-0 h-40 rounded-t-[2.5rem] bg-[#011936] sm:hidden" />
          <img
            src="/images/truck-transporent.webp"
            alt="Movers To Go moving truck"
            className="absolute inset-x-0 bottom-0 z-0 mx-auto h-44 w-auto max-w-none object-contain drop-shadow-2xl sm:hidden"
          />
          <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 pt-24 pb-56 sm:min-h-[529px] sm:px-6 sm:pt-28 sm:pb-14 lg:min-h-[635px] lg:pt-32 lg:pb-20">
            <div className="hidden xl:absolute xl:top-1/2 xl:right-12 xl:block xl:h-[550px] xl:w-[550px] xl:-translate-y-1/2">
              <div aria-hidden="true" className="absolute inset-0 rounded-full bg-[#011936]" />
              <img
                src="/images/truck-transporent.webp"
                alt="Movers To Go moving truck"
                className="absolute right-0 bottom-4 h-[443px] w-[634px] max-w-none object-contain drop-shadow-2xl"
              />
            </div>
            <div className="max-w-2xl">
              <h1 className="font-display text-6xl leading-[1.05] font-extrabold tracking-[0.01em] text-foreground sm:text-6xl lg:text-7xl">
                Philadelphia
                <br />
                Local Movers
              </h1>
              <p className="mt-4 text-2xl font-extrabold text-foreground sm:text-3xl">
                Trusted From Start to Finish.
              </p>
              <span aria-hidden="true" className="mt-2 block h-1 w-16 rounded-full bg-brand" />
              <p className="mt-4 max-w-xl text-lg font-bold text-foreground sm:text-xl sm:text-foreground/75">
                Professional Local Moving Services
                <br />
                in Philadelphia &amp; Surrounding Areas
              </p>

              <div className="mt-9">
                <div className="flex flex-wrap items-center gap-5">
                  <Link
                    to="/contact"
                    aria-label="Get your free moving quote"
                    className="group animate-cta-pulse inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-8 py-4 text-base font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-all hover:scale-[1.04] hover:animate-none hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Check Your Rate
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <div className="flex items-center gap-3 border-l-2 border-border pl-5">
                    <span className="font-display text-3xl leading-none font-extrabold text-brand">
                      10+
                    </span>
                    <span className="text-sm leading-tight font-bold text-foreground">
                      Years
                      <br />
                      in Business
                    </span>
                  </div>
                </div>

                <a
                  href={site.phoneHref}
                  aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
                  className="mt-6 hidden w-fit items-center justify-center gap-2 text-base font-bold text-foreground transition-opacity hover:opacity-80 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none sm:flex"
                >
                  <Smartphone aria-hidden="true" className="h-4 w-4 text-brand" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="relative overflow-hidden bg-white pt-[44px] pb-16 sm:pt-[60px] sm:pb-20 lg:pt-[76px] lg:pb-24">
          <img
            src="/images/dot-blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-8 right-0 z-0 h-64 w-64 translate-x-1/3 select-none sm:h-80 sm:w-80 lg:h-96 lg:w-96 lg:translate-x-1/4"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-[#011936]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div aria-hidden="true" className="h-px w-full bg-foreground/10" />
            <h2 className="section-heading mt-10 text-center">
              Rated 5 Stars by Our Customers
            </h2>
            <div className="mx-auto mt-[20px] grid max-w-md grid-cols-1 gap-6 sm:max-w-[67.2rem] sm:grid-cols-3">
              {ratingPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-border bg-background px-6 pt-8 pb-7 text-center shadow-lg"
                >
                  {platform.logoSrc ? (
                    <img
                      src={platform.logoSrc}
                      alt={platform.name}
                      className={`w-auto shrink-0 ${platform.logoClassName}`}
                    />
                  ) : (
                    <span aria-hidden="true" className="grid shrink-0 place-items-center">
                      {platform.icon}
                    </span>
                  )}
                  <p className="mt-5 flex items-baseline gap-2 font-display text-3xl font-extrabold text-brand sm:text-4xl">
                    {platform.rating}
                    {platform.reviews ? (
                      <span className="font-sans text-sm font-bold tracking-wide text-foreground/60 uppercase">
                        {platform.reviews}
                      </span>
                    ) : null}
                  </p>
                  <span aria-hidden="true" className="mt-4 flex text-brand">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} aria-hidden="true" className="h-5 w-5 fill-current" />
                    ))}
                  </span>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1.5 bg-brand" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Movers To Go */}
        <section
          id="why-movers-to-go"
          className="relative scroll-mt-24 overflow-hidden border-b border-border bg-surface"
        >
          <img
            src="/images/dot-blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-16 z-0 h-[260px] w-[260px] select-none sm:-top-20 sm:-left-20 sm:h-[340px] sm:w-[340px]"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <h2 className="section-heading">
                Why Choose Movers To Go?
              </h2>
              <p className="mt-4 text-lg text-foreground">
                Movers To Go is a trusted Philadelphia moving company providing reliable local
                moving services throughout Philadelphia and surrounding areas. Our experienced
                movers handle every move with care, efficiency, and attention to detail.
              </p>
              <p className="mt-4 text-lg text-foreground">
                From apartments and houses to offices and commercial spaces, we make moving simple
                with straightforward pricing, dependable service, and a team you can count on from
                start to finish.
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {whyUsStats.map((stat) => (
                  <li key={stat.label} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Check aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="text-lg text-foreground">
                      <span className="font-display font-extrabold text-brand">{stat.value}</span>{" "}
                      {stat.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 h-full w-full rounded-2xl bg-[#011936] sm:-top-6 sm:-right-6"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/whyus.webp"
                  alt="The Movers To Go crew in front of their moving truck"
                  className="h-80 w-full object-cover lg:h-[28rem]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative scroll-mt-24 overflow-hidden border-b border-border bg-surface">
          <img
            src="/images/herocontact.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-surface/60" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div>
              <h2 className="section-heading">
                Moving Services in Philadelphia
              </h2>
              <p className="mt-3 max-w-2xl text-foreground">
                Reliable moving services for homes, apartments, and businesses throughout
                Philadelphia and surrounding areas.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#011936] hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-[#011936] bg-white">
                      <span
                        aria-hidden="true"
                        className="h-12 w-12 bg-[#011936]"
                        style={{
                          maskImage: `url(${service.iconSrc})`,
                          maskSize: "contain",
                          maskRepeat: "no-repeat",
                          maskPosition: "center",
                          WebkitMaskImage: `url(${service.iconSrc})`,
                          WebkitMaskSize: "contain",
                          WebkitMaskRepeat: "no-repeat",
                          WebkitMaskPosition: "center",
                        }}
                      />
                    </span>
                    <h3 className="font-display text-3xl font-bold">{service.title}</h3>
                  </div>
                  <p className="mt-4 flex-1 text-base text-foreground">{service.body}</p>
                  <Link
                    to="/contact"
                    aria-label={`Get a quote for ${service.title}`}
                    className="mt-6 inline-flex items-center justify-center self-start rounded-lg bg-brand px-4 py-2 text-sm font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-all hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    Get Quote
                  </Link>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1.5 bg-[#011936]" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="relative scroll-mt-24 overflow-hidden border-b border-border">
          <img
            src="/images/dot-blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 z-0 h-[280px] w-[280px] select-none sm:-top-24 sm:-right-24 sm:h-[360px] sm:w-[360px]"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="section-heading max-w-2xl">
              Moving made easy with our 3-step process
            </h2>
            <p className="mt-4 max-w-2xl text-foreground">
              From your first call to the last box unpacked, here&rsquo;s exactly what to expect.
            </p>

            <div className="mt-12 space-y-10">
              {howItWorks.map((step, index) => {
                const reversed = index % 2 === 1;
                return (
                  <div
                    key={step.title}
                    className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${reversed ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="relative lg:w-2/5 lg:shrink-0">
                      <div
                        aria-hidden="true"
                        className="absolute -top-4 -right-4 h-full w-full rounded-2xl bg-[#011936] sm:-top-6 sm:-right-6"
                      />
                      <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                          src={step.image}
                          alt={step.alt}
                          className="h-64 w-full object-cover sm:h-80 lg:h-96"
                        />
                        <span
                          aria-hidden="true"
                          className="absolute top-0 left-0 grid h-14 w-14 place-items-center rounded-tl-2xl bg-brand font-display text-3xl font-extrabold text-white"
                        >
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-display text-xl font-extrabold sm:text-2xl">
                        {step.title}
                      </h3>
                      <ul className="mt-7 space-y-5">
                        {step.points.map((point) => (
                          <li key={point} className="flex gap-3 text-xl text-foreground">
                            <span
                              aria-hidden="true"
                              className="mt-3.5 h-2 w-2 shrink-0 rounded-full bg-brand"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="relative scroll-mt-24 overflow-hidden border-b border-border bg-surface">
          <img
            src="/images/pattern-background.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="section-heading">
              Trusted by Philadelphia Customers
            </h2>
            <p className="mt-4 max-w-2xl text-foreground">
              See what our customers say about moving with Movers To Go.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {reviewTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActivePlatform(tab.key)}
                  aria-pressed={activePlatform === tab.key}
                  className={`flex items-center gap-2 rounded-lg border-2 bg-background px-4 py-3 transition-all ${
                    activePlatform === tab.key
                      ? "border-brand shadow-md"
                      : "border-border opacity-50 hover:opacity-100"
                  }`}
                >
                  {tab.icon ? (
                    <span aria-hidden="true" className="grid h-6 w-6 place-items-center">
                      {tab.icon}
                    </span>
                  ) : (
                    <img
                      src={tab.logoSrc}
                      alt=""
                      aria-hidden="true"
                      className={`w-auto ${tab.logoClassName}`}
                    />
                  )}
                  <span className="text-sm font-bold text-foreground">{tab.name}</span>
                </button>
              ))}
            </div>

            <Carousel key={activePlatform} opts={{ align: "start" }} className="mt-10">
              <CarouselContent>
                {reviewsByPlatform[activePlatform].map((review) => (
                  <CarouselItem key={review.name} className="md:basis-1/2">
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm">
                      <div
                        aria-label="Rated 5 out of 5 stars"
                        role="img"
                        className="flex text-brand"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} aria-hidden="true" className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                        “{review.text}”
                      </blockquote>
                      <p className="mt-4 text-sm font-bold">{review.name}</p>
                      <p className="text-sm text-foreground">{review.meta}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 h-10 w-10 -translate-x-1/2 border-border bg-background" />
              <CarouselNext className="right-0 h-10 w-10 translate-x-1/2 border-border bg-background" />
            </Carousel>
          </div>
        </section>

        {/* Service Area */}
        <section id="service-area" className="relative scroll-mt-24 overflow-hidden border-b border-border">
          <img
            src="/images/dot-blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 z-0 h-[280px] w-[280px] select-none sm:-bottom-24 sm:-left-24 sm:h-[360px] sm:w-[360px]"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="section-heading">
              Local Movers Serving Philadelphia &amp; Surrounding Areas
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-foreground">
              Movers To Go provides reliable local moving services throughout Philadelphia,
              Huntingdon Valley, and nearby communities across Montgomery and Bucks Counties.
            </p>

            <a
              href={site.phoneHref}
              aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
              className="mt-6 inline-flex items-center gap-2 text-base font-bold text-brand transition-opacity hover:opacity-80"
            >
              <Smartphone aria-hidden="true" className="h-4 w-4" />
              Call Us: {site.phoneDisplay}
            </a>

            <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="grid grid-cols-2 gap-4">
                  {serviceAreaCards.map((area) => (
                    <div
                      key={area.name}
                      className="rounded-2xl border border-border bg-background p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                    >
                      <h3 className="font-display text-xl font-extrabold">{area.name}</h3>
                      <p className="mt-2 text-base text-foreground">{area.subtitle}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-80 overflow-hidden rounded-2xl border border-border sm:h-96">
                  <iframe
                    title="Movers To Go service area map"
                    src={`https://www.google.com/maps?q=${site.address.lat},${site.address.lng}&z=11&output=embed`}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="columns-2 gap-3">
                {galleryPhotos.map((photo, index) => (
                  <div
                    key={photo.src}
                    className="mb-3 break-inside-avoid overflow-hidden rounded-2xl"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={`w-full object-cover ${galleryPhotoHeights[index]}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="relative scroll-mt-24 overflow-hidden bg-surface">
          <img
            src="/images/dot-blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 z-0 h-[260px] w-[260px] select-none sm:-top-20 sm:-right-20 sm:h-[340px] sm:w-[340px]"
          />
          <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:py-24">
            <div className="relative lg:sticky lg:top-28">
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 h-full w-full rounded-2xl bg-[#011936] sm:-top-6 sm:-right-6"
              />
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/gallary/philadelphia-movers-team-moving-trucks.webp"
                  alt="Movers To Go team member answering a customer's questions"
                  className="h-64 w-full object-cover sm:h-80 lg:h-[32rem]"
                />
              </div>
            </div>

            <div>
              <h2 className="section-heading">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-foreground">
                Everything Philadelphia customers ask before booking a move.
              </p>
              <Accordion type="single" collapsible defaultValue="faq-0" className="mt-8 w-full">
                {faqs.map((item, index) => (
                  <AccordionItem
                    key={item.q}
                    value={`faq-${index}`}
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="text-left font-display text-2xl font-bold hover:no-underline focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-neutral-800 py-16 sm:py-20">
          <img
            src="/images/dot-blob.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 select-none opacity-60 sm:h-[520px] sm:w-[520px]"
          />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              Ready to Make Your Move?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Tell us about your move and check your rates in just a few simple steps.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                aria-label="Check your moving rate"
                className="inline-flex items-center justify-center rounded-lg bg-brand px-8 py-4 text-base font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-all hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800 focus-visible:outline-none"
              >
                Check Your Rate
              </Link>
              <a
                href={site.phoneHref}
                aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
                className="inline-flex items-center gap-2 text-base font-bold text-white transition-colors hover:text-brand"
              >
                <Smartphone aria-hidden="true" className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
