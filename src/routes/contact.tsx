import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Smartphone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { QuoteForm } from "@/components/quote-form";
import { site } from "@/data/site";

const title = "Contact Us | Movers To Go";
const description =
  "Get a free moving quote from Movers To Go. Call, email, or fill out the form and a move coordinator will respond within about 15 minutes.";
const canonicalUrl = `${site.url}/contact`;

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="bg-surface">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:py-20">
            <h1 className="font-display text-5xl leading-[1.05] font-extrabold sm:text-6xl">
              Get Your <span className="text-brand">Free Moving Quote</span>
            </h1>
            <p className="mt-5 text-base text-foreground sm:text-lg">
              Tell us about your move and a coordinator will get back to you within about 15
              minutes, or call us directly.
            </p>

            <div className="mt-10">
              <QuoteForm />
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:py-24">
            <div>
              <h2 className="font-display text-3xl font-extrabold">Contact Information</h2>
              <ul className="mt-6 space-y-6">
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-bold tracking-wide text-foreground uppercase">
                      Main Office Location
                    </p>
                    <p className="mt-1 text-lg text-foreground">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-bold tracking-wide text-foreground uppercase">
                      24/7 Customer Support
                    </p>
                    <a
                      href={site.phoneHref}
                      aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
                      className="mt-1 inline-block rounded-md text-lg font-bold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-bold tracking-wide text-foreground uppercase">
                      Office Business Hours
                    </p>
                    <p className="mt-1 text-lg text-foreground">{site.hours.weekday}</p>
                    <p className="text-lg text-foreground">{site.hours.weekend}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="text-sm font-bold tracking-wide text-foreground uppercase">
                      Mail
                    </p>
                    <a
                      href={site.emailHref}
                      aria-label={`Email Movers To Go at ${site.email}`}
                      className="mt-1 inline-block rounded-md text-lg font-semibold text-foreground transition-colors hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-3xl font-extrabold">Service Areas</h2>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-base text-foreground">
                {site.areas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
