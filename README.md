# Movers To Go Launch

Create a high-converting, modern 2-page website for "Movers To Go" — a premier moving company based in Philadelphia, PA, with 10+ years of experience and a 4.9-star Google rating (100+ reviews).

---
### BRAND & DESIGN SYSTEM
- **Design Aesthetic:** Intentional Minimalism / Neo-Bauhaus. Clean layout, generous whitespace, crisp card grid containers, smooth rounded corners, and zero visual clutter.
- **Color Palette:**
  - Background: Crisp Pure White (`#FFFFFF`).
  - Containers & Card Backgrounds: Cool Light Gray (`#F8F9FA` or `#F1F3F5`) with subtle dark borders.
  - Text: Dark Charcoal (`#1A1A1A`) for high contrast and readability.
  - Primary Accent Color: Vivid Magenta/Pink (`#FF1493`). Use this for primary CTA buttons, badge highlights, active tab states, and key accents.
- **ADA & WCAG 2.1 AA Accessibility Standards:**
  - Maintain strong color contrast (ensure text on `#FF1493` buttons uses high-contrast dark charcoal or bold white text with proper font weight).
  - Include explicit `aria-label` tags for all interactive elements, phone buttons, and form inputs.
  - Ensure clear focus-visible outlines (`focus-visible:ring-2 focus-visible:ring-[#FF1493]`) for full keyboard navigation.

---
### CORE CONTACT & BUSINESS DATA
- **Company Name:** Movers To Go
- **Phone:** +1 445-444-8100
- **Email:** info@moverstogo.com
- **Primary Service Areas:** Philadelphia, Greater Philadelphia, Bucks County, Montgomery County, Allentown, Lehigh Valley, and surrounding PA areas.

---
### PAGE 1: HOME PAGE (CONVERSION & LEAD GEN)

1. **Header (Sticky Navigation):**
   - Left: Logo text "Movers To Go".
   - Center Links: Services & Coverage, About Us, Reviews, FAQ.
   - Right: Clickable Phone "+1 (445) 444-8100" + Accent Button (`#FF1493`) "Get Free Quote".

2. **Hero Section (Above the Fold):**
   - **Left Column:**
     - H1 (SEO/GEO): "Top-Rated Local & Long-Distance Movers in Philadelphia, PA"
     - Subheadline: "10+ years of stress-free residential and commercial moving. Professional packing, transparent estimates, and careful handling guaranteed."
     - Trust Badges Bar: "4.9★ Google Rating (100+ Reviews)" | "10+ Years Experience" | "Licensed & Insured"
   - **Right Column (Lead Capture Form - Simple Quote Request):**
     - Form Header: "Get Your Free Moving Quote"
     - Subtext: "No hidden fees. Fast response within 15 minutes."
     - Form Fields:
       1. Full Name (Input)
       2. Phone Number (Input)
       3. Email Address (Input)
       4. Move Type (Dropdown: Local Residential, Long-Distance, Commercial/Office, Packing Only)
       5. Move Date (Date Picker)
     - Primary Submit Button (`#FF1493` accent): "Request Free Quote"
     - Micro-copy: "🔒 Your information is 100% secure and confidential."

3. **Trust & Proof Bar:**
   - Visual badges showcasing: 100+ 5-Star Reviews, USDOT & PA PUC License Compliant, 100% On-Time Guarantee.

4. **Why Choose Us (4-Card Neo-Bauhaus Grid):**
   - Card 1: "10+ Years Experience" – Decades of expertise in seamless PA moves.
   - Card 2: "Careful Handling" – Specialized protection for furniture, pianos, and delicate items.
   - Card 3: "Transparent Pricing" – Accurate upfront quotes with zero unexpected fees.
   - Card 4: "Reliable Timelines" – Punctual, professional crews equipped for every move size.

5. **Services Overview (6 Grid Cards with "Learn More" / "Get Quote" triggers):**
   - Local Philadelphia Moving
   - Long-Distance & Interstate Moving
   - Residential & Apartment Moving
   - Commercial & Office Relocation
   - Full-Service Packing & Unpacking
   - Specialty Moving (Pianos, Fine Art & Antiques)

6. **Customer Testimonials (Reviews Section):**
   - Google Review badge header + interactive testimonial cards featuring real client feedback and 5-star ratings.

7. **FAQ Accordion (Structured for Answer Engine Optimization - AEO):**
   - Build an interactive accordion featuring key questions:
     - Do you provide local moving services in Philadelphia and surrounding areas?
     - What types of moves do you handle?
     - Do you offer packing and unpacking services?
     - How can I get an accurate moving quote?
     - Do you move apartments, houses, and condos?
     - Do you provide commercial and office moving services?
     - Do you offer piano and specialty moving?
     - What areas does Movers To Go serve?
     - How far in advance should I book my move?
     - Why choose Movers To Go?

8. **Footer:**
   - Contact details (+1 445-444-8100, info@moverstogo.com), service area list, social media link (Facebook), copyright, and Accessibility Statement link.

---
### PAGE 2: SERVICES & COVERAGE AREA (SEO/GEO FOCUSED PAGE)

1. **Hero Banner:**
   - H1: "Professional Moving Services & Service Areas in Pennsylvania"
   - Subtitle: "Dedicated local and long-distance relocation support across Greater Philadelphia."

2. **Detailed Service Sections (5 Deep-Dive Cards):**
   - Section 1: Local Residential Moving (Apartments, Condos, Townhomes)
   - Section 2: Interstate & Long-Distance Moving
   - Section 3: Commercial & Office Moving Solutions
   - Section 4: Full Packing, Unpacking & Furniture Assembly
   - Section 5: Specialty & Heavy Item Moving (Pianos & Antiques)

3. **GEO Coverage & Location Breakdown (AEO Structured):**
   - Section Headline: "Serving Greater Philadelphia & Surrounding PA Counties"
   - Grid listing primary areas: Philadelphia, Greater Philadelphia, Bucks County, Montgomery County, Allentown, Lehigh Valley.

4. **Bottom Conversion CTA:**
   - Full-width gray card container with an accent `#FF1493` CTA button: "Plan Your Move Today – Get a Free Quote".

---
### TECHNICAL REQUIREMENTS
- Mobile-first, fully responsive design.
- Floating / Sticky "Call Now" and "Get Quote" bottom bar on mobile screens.
- Clean component architecture, optimized for fast speed and Supabase backend form integration.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3021c9ed-4fc6-4f93-8a8e-e36c57387219).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
