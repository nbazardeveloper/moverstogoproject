import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Smartphone, Star } from "lucide-react";
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

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
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

const trustPoints = [
  { title: "Philadelphia Local Experts" },
  { title: "Licensed & Insured" },
  { title: "Careful Handling" },
  { title: "On-Time & Reliable" },
  { title: "Straightforward Pricing" },
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

const reviewPlatforms: {
  name: string;
  href: string;
  subtitle?: string;
  showStars?: boolean;
  icon?: React.ReactNode;
  logoSrc?: string;
  logoClassName?: string;
}[] = [
  {
    name: "Google",
    href: "https://maps.app.goo.gl/sgnmWFQ6zaYtbdRo6",
    subtitle: "4.9 · 100+ Reviews",
    icon: <GoogleIcon />,
  },
  {
    name: "Yelp",
    href: "https://www.yelp.com/biz/movers-to-go-huntingdon-valley-2",
    logoSrc: "/images/logo/yelp_logo.png",
    logoClassName: "h-5",
    showStars: true,
  },
  {
    name: "HomeAdvisor",
    href: "https://www.homeadvisor.com/rated.MoversToGo.110529564.html",
    logoSrc: "/images/logo/homeadvisor.webp",
    logoClassName: "h-4",
    showStars: true,
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

const serviceAreaCards = [
  { name: "Philadelphia", subtitle: "Local Moving Services" },
  { name: "Huntingdon Valley", subtitle: "Local Moving Services" },
  { name: "Montgomery County", subtitle: "Local Moving Services" },
  { name: "Bucks County", subtitle: "Local Moving Services" },
];

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
        <section className="bg-[linear-gradient(to_right,rgba(255,255,255,0.8),rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.45)_100%),url('/images/heromovers.webp')] bg-cover bg-center sm:bg-[linear-gradient(to_right,rgba(255,255,255,0.97),rgba(255,255,255,0.85)_32%,rgba(255,255,255,0)_50%),url('/images/heromovers.webp')] sm:min-h-[529px] lg:min-h-[635px]">
          <div className="mx-auto flex max-w-7xl items-center px-4 pt-24 pb-14 sm:min-h-[529px] sm:px-6 sm:pt-28 lg:min-h-[635px] lg:pt-32 lg:pb-20">
            <div className="max-w-2xl">
              <h1 className="font-display text-6xl leading-[1.05] font-extrabold text-foreground sm:text-6xl lg:text-7xl">
                Philadelphia
                <br />
                <span className="text-brand">Local Movers</span>
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

                <a
                  href={site.phoneHref}
                  aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
                  className="mt-6 hidden w-fit items-center justify-center gap-2 text-base font-bold text-foreground transition-opacity hover:opacity-80 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none sm:flex"
                >
                  <Smartphone aria-hidden="true" className="h-4 w-4 text-brand" />
                  <span className="tracking-wide text-brand uppercase">
                    Or give us a call:
                  </span>{" "}
                  {site.phoneDisplay}
                </a>
              </div>

              <div className="mt-10 mb-16 flex flex-wrap items-center gap-3 sm:mb-20">
                {reviewPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Read Movers To Go reviews on ${platform.name}`}
                    className="flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-2 shadow-sm transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                  >
                    {platform.logoSrc ? (
                      <img
                        src={platform.logoSrc}
                        alt={platform.name}
                        className={`w-auto shrink-0 ${platform.logoClassName}`}
                      />
                    ) : (
                      <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center">
                        {platform.icon}
                      </span>
                    )}
                    {platform.showStars ? (
                      <span
                        aria-label="Rated 5 out of 5 stars"
                        role="img"
                        className="flex text-brand"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </span>
                    ) : (
                      <span className="text-sm font-bold text-foreground">{platform.subtitle}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-surface pb-10 sm:pb-14 lg:pb-16">
          <div className="px-4 sm:px-6">
            <div className="mx-auto max-w-7xl border border-border bg-background px-6 py-10 sm:px-10 lg:py-12">
              <div className="grid grid-cols-1 gap-8 divide-y divide-border sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:divide-y-0 lg:grid-cols-5">
                {trustPoints.map((point, index) => (
                  <div
                    key={point.title}
                    className={`flex flex-col items-center pt-8 text-center first:pt-0 sm:pt-0 ${index === 0 ? "" : "lg:border-l lg:border-border lg:pl-6"}`}
                  >
                    <span aria-hidden="true" className="h-1 w-12 bg-brand" />
                    <p className="mt-4 font-display text-xl font-extrabold tracking-wide uppercase sm:text-2xl">
                      {point.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Movers To Go */}
        <section id="why-movers-to-go" className="scroll-mt-24 border-b border-border bg-surface">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <h2 className="section-heading">
                Why Choose <span className="text-brand">Movers To Go</span>?
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
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/whyus.webp"
                alt="The Movers To Go crew in front of their moving truck"
                className="h-80 w-full object-cover lg:h-[28rem]"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <div>
              <h2 className="section-heading">
                Moving Services in <span className="text-brand">Philadelphia</span>
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
                  className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-brand bg-brand/10">
                      <img
                        src={service.iconSrc}
                        alt=""
                        aria-hidden="true"
                        className="h-12 w-12 object-contain"
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="section-heading max-w-2xl">
              Moving made easy with our <span className="text-brand">3-step process</span>
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
                    className={`flex flex-col overflow-hidden border border-border shadow-sm lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className="relative lg:flex lg:w-2/5 lg:shrink-0 lg:items-center">
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="h-64 w-full object-cover sm:h-80 lg:h-96"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute top-0 left-0 grid h-14 w-14 place-items-center bg-brand font-display text-3xl font-extrabold text-white"
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                      <h3 className="section-heading">{step.title}</h3>
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
        <section id="reviews" className="scroll-mt-24 border-b border-border bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="section-heading">
              Trusted by <span className="text-brand">Philadelphia Customers</span>
            </h2>
            <p className="mt-4 max-w-2xl text-foreground">
              See what our customers say about moving with Movers To Go.
            </p>

            <a
              href="https://maps.app.goo.gl/sgnmWFQ6zaYtbdRo6"
              target="_blank"
              rel="noreferrer"
              aria-label="Read Movers To Go reviews on Google"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-bold tracking-wide text-white uppercase shadow-md shadow-brand/30 transition-all hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white"
              >
                <GoogleIcon />
              </span>
              Read Our Google Reviews
            </a>

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
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 shadow-sm">
                      <div
                        aria-label="Rated 5 out of 5 stars"
                        role="img"
                        className="flex text-brand"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} aria-hidden="true" className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-foreground">
                        “{review.text}”
                      </blockquote>
                      <p className="mt-6 text-base font-bold">{review.name}</p>
                      <p className="text-base text-foreground">{review.meta}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex justify-center gap-3">
                <CarouselPrevious className="static h-10 w-10 translate-y-0 border-border" />
                <CarouselNext className="static h-10 w-10 translate-y-0 border-border" />
              </div>
            </Carousel>

            <h3 className="section-heading mt-14">
              A look at our <span className="text-brand">crews</span> on the job
            </h3>
            <p className="mt-2 max-w-2xl text-foreground">Real moves, real crews.</p>
            <Carousel opts={{ align: "start" }} className="mt-6">
              <CarouselContent>
                {galleryPhotos.map((photo) => (
                  <CarouselItem key={photo.src} className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
                    <div className="aspect-square overflow-hidden">
                      <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex justify-center gap-3">
                <CarouselPrevious className="static h-10 w-10 translate-y-0 border-border" />
                <CarouselNext className="static h-10 w-10 translate-y-0 border-border" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Service Area */}
        <section id="service-area" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
            <h2 className="section-heading">
              Local Movers Serving <span className="text-brand">Philadelphia</span> &amp;
              Surrounding Areas
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

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

            <div className="mt-10 h-80 overflow-hidden rounded-2xl border border-border sm:h-96">
              <iframe
                title="Movers To Go service area map"
                src={`https://www.google.com/maps?q=${site.address.lat},${site.address.lng}&z=11&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 bg-surface">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div className="overflow-hidden rounded-2xl shadow-lg lg:sticky lg:top-28">
              <img
                src="/images/gallary/philadelphia-movers-team-moving-trucks.webp"
                alt="Movers To Go team member answering a customer's questions"
                className="h-64 w-full object-cover sm:h-80 lg:h-[32rem]"
              />
            </div>

            <div>
              <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
                Frequently Asked <span className="text-brand">Questions</span>
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
        <section className="bg-neutral-800 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
              Ready to <span className="text-brand">Make Your Move</span>?
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
