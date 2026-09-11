import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-brand bg-neutral-800">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src="/images/logo.webp" alt="Movers To Go" className="h-9 w-auto" />
          <p className="mt-3 max-w-xs text-base text-neutral-300">
            Philadelphia Local Moving Company
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-wide text-white uppercase">
            Navigation
          </h2>
          <ul className="mt-4 space-y-3 text-base">
            <li>
              <Link
                to="/"
                className="rounded-md text-neutral-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="services"
                className="rounded-md text-neutral-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/"
                hash="service-area"
                className="rounded-md text-neutral-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                Service Areas
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="rounded-md text-neutral-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                Check Your Rate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-wide text-white uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-base">
            <li>
              <a
                href={site.phoneHref}
                aria-label={`Call Movers To Go at ${site.phoneDisplay}`}
                className="inline-flex items-center gap-2 rounded-md font-semibold text-white hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                <Smartphone aria-hidden="true" className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                aria-label={`Email Movers To Go at ${site.email}`}
                className="inline-flex items-center gap-2 rounded-md text-neutral-300 hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-neutral-300">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-wide text-white uppercase">
            Service Areas
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-base text-neutral-300">
            {site.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-base text-neutral-300 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="rounded-md hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="rounded-md hover:text-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
