import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";

const title = "Privacy Policy | Movers To Go";
const description = "How Movers To Go collects, uses, and protects your information.";
const canonicalUrl = `${site.url}/privacy-policy`;

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
            <h1 className="font-display text-5xl leading-[1.05] font-extrabold sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-foreground">Last updated: August 2026</p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl space-y-8 px-4 py-16 text-base leading-relaxed text-foreground sm:px-6 lg:py-24">
            <p>
              This Privacy Policy explains how {site.name} ("we," "us," or "our") collects, uses,
              and protects information you provide when you visit our website or request a moving
              quote.
            </p>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Information We Collect
              </h2>
              <p className="mt-2">
                When you submit a quote request or contact form, we collect information such as your
                name, phone number, email address, move date, and move details. We may also collect
                standard technical information (such as browser type and pages visited) through
                normal website operation.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                How We Use Your Information
              </h2>
              <p className="mt-2">
                We use the information you provide to respond to quote requests, schedule and
                coordinate moves, communicate with you about your service, and improve our website
                and services. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Third-Party Services
              </h2>
              <p className="mt-2">
                Our website may include embedded content or links to third-party services, such as
                Google Maps and review platforms (Google, Yelp, HomeAdvisor). These third parties
                have their own privacy policies governing the information they collect.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Data Security</h2>
              <p className="mt-2">
                We take reasonable measures to protect the information you share with us. However,
                no method of electronic transmission or storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Your Choices</h2>
              <p className="mt-2">
                You may contact us at any time to ask what information we hold about you, request a
                correction, or request that we delete your information, subject to any recordkeeping
                obligations we may have.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mt-2">
                If you have questions about this Privacy Policy, contact us at{" "}
                <a href={site.emailHref} className="font-semibold text-brand hover:underline">
                  {site.email}
                </a>{" "}
                or{" "}
                <a href={site.phoneHref} className="font-semibold text-brand hover:underline">
                  {site.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
