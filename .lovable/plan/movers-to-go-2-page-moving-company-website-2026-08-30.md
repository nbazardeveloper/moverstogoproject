# Movers To Go — 2-Page Moving Company Website

A conversion-focused site in Intentional Minimalism / Neo-Bauhaus style: white background, cool light-gray cards with subtle borders, dark charcoal text, and vivid magenta (#FF1493) accents for CTAs and highlights.

## Pages

### Home (`/`)
- Sticky header: "Movers To Go" logo, center links (Services & Coverage, About Us, Reviews, FAQ), clickable phone +1 (445) 444-8100, magenta "Get Free Quote" button.
- Hero: H1 "Top-Rated Local & Long-Distance Movers in Philadelphia, PA", subheadline, trust badge bar (4.9★ Google / 100+ reviews, 10+ years, licensed & insured) on the left; lead capture form on the right (Full Name, Phone, Email, Move Type dropdown, Move Date picker, magenta "Request Free Quote" submit, security micro-copy).
- Trust & proof bar: 100+ 5-star reviews, USDOT & PA PUC compliant, 100% on-time guarantee.
- Why Choose Us: 4-card grid (Experience, Careful Handling, Transparent Pricing, Reliable Timelines).
- Services overview: 6 cards, each with "Learn More" (to Services page) and "Get Quote" (scrolls to form).
- Testimonials: Google review badge header plus 5-star client cards.
- FAQ accordion: all 10 listed questions with concise, answer-engine-friendly answers.
- Footer: phone, email, service-area list, Facebook link, copyright, accessibility statement link.

### Services & Coverage (`/services-coverage`)
- Hero banner with H1 and subtitle.
- Five deep-dive service sections (Local Residential, Interstate/Long-Distance, Commercial/Office, Packing & Assembly, Specialty & Heavy Items).
- GEO coverage grid: Philadelphia, Greater Philadelphia, Bucks County, Montgomery County, Allentown, Lehigh Valley.
- Full-width gray CTA card with magenta "Plan Your Move Today – Get a Free Quote" button.

## Lead capture backend
Enable Lovable Cloud and create a `leads` table (name, phone, email, move type, move date, created_at). The public form inserts via a server function; only the site owner role can read submissions. Success and error states shown with toasts, plus inline validation.

## Accessibility
WCAG 2.1 AA: white bold text on magenta verified for contrast, aria-labels on all links/buttons/inputs, associated form labels, visible focus rings (`focus-visible:ring-2` in magenta), semantic landmarks, single H1 per page, keyboard-operable accordion.

## Technical notes
- Tokens (`--brand-accent`, gray surface, charcoal foreground) defined in `src/styles.css` in oklch; no hardcoded color classes in components.
- Sections built as reusable components under `src/components/`; shadcn accordion, select, input, button, sonner toaster.
- Mobile-first; sticky bottom bar on mobile with "Call Now" and "Get Quote".
- Per-route `head()` metadata (title, description, og/twitter) plus LocalBusiness + FAQPage JSON-LD for SEO/AEO.
