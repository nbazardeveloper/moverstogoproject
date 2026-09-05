import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";

const title = "Terms of Use | Movers To Go";
const description = "The terms and conditions for using the Movers To Go website.";
const canonicalUrl = `${site.url}/terms-of-use`;

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: TermsOfUse,
});

function TermsOfUse() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
            <h1 className="font-display text-5xl leading-[1.05] font-extrabold sm:text-6xl">
              Terms of Use
            </h1>
            <p className="mt-4 text-base text-foreground">Last updated: August 2026</p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl space-y-8 px-4 py-16 text-base leading-relaxed text-foreground sm:px-6 lg:py-24">
            <p>
              These Terms of Use govern your use of the {site.name} website. By using this website,
              you agree to these terms. If you do not agree, please do not use this site.
            </p>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Use of This Website
              </h2>
              <p className="mt-2">
                This website is provided for informational purposes and to allow you to request a
                moving quote from {site.name}. You agree to use this website only for lawful
                purposes and to provide accurate information when submitting a quote request.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Quotes &amp; Services
              </h2>
              <p className="mt-2">
                Estimates requested through this website are preliminary and subject to confirmation
                based on an assessment of your specific move. Final pricing, dates, and terms of
                service are governed by the moving agreement you sign with {site.name}, not by this
                website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Intellectual Property
              </h2>
              <p className="mt-2">
                All content on this website, including text, graphics, logos, and images, is the
                property of {site.name} or its licensors and may not be reproduced or used without
                permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Limitation of Liability
              </h2>
              <p className="mt-2">
                This website and its content are provided "as is" without warranties of any kind.
                {site.name} is not liable for any damages arising from your use of this website, to
                the fullest extent permitted by law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Changes to These Terms
              </h2>
              <p className="mt-2">
                We may update these Terms of Use from time to time. Continued use of this website
                after changes are posted constitutes your acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="mt-2">
                Questions about these Terms of Use can be sent to{" "}
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
