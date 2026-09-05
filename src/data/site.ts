export const site = {
  name: "Movers To Go",
  url: "https://moverstogo.com",
  ogImage: "/images/og-image.jpg",
  phone: "+1 445-444-8100",
  phoneDisplay: "+1 (445) 444-8100",
  phoneHref: "tel:+14454448100",
  email: "info@moverstogo.com",
  emailHref: "mailto:info@moverstogo.com",
  address: {
    street: "67 Buck Road, Suite 117",
    city: "Huntingdon Valley",
    state: "PA",
    zip: "19006",
    lat: 40.1482701,
    lng: -75.0267894,
  },
  hours: {
    weekday: "Mon – Fri: 8AM – 8PM",
    weekend: "Sat – Sun: 8AM – 8PM",
    opens: "08:00",
    closes: "20:00",
  },
  areas: [
    "Philadelphia",
    "Greater Philadelphia",
    "Bucks County",
    "Montgomery County",
    "Allentown",
    "Lehigh Valley",
  ],
};

export const moveTypes = [
  "Local Residential",
  "Long-Distance",
  "Commercial/Office",
  "Packing Only",
];

export const moveSizes = [
  "Studio",
  "1 Bedroom",
  "2 Bedroom",
  "3 Bedroom",
  "4+ Bedroom / House",
  "Office / Commercial",
];

export const crewOptions = [
  { movers: 2, rate: 175 },
  { movers: 3, rate: 205 },
] as const;

export const packingRates = [
  { movers: 1, cash: 110, card: 130 },
  { movers: 2, cash: 170, card: 200 },
  { movers: 3, cash: 200, card: 240 },
  { movers: 4, cash: 230, card: 275 },
];

export const faqs = [
  {
    q: "Do you provide local moving services in Philadelphia and surrounding areas?",
    a: "Yes. Movers To Go handles local moves throughout Philadelphia, Greater Philadelphia, Bucks County, Montgomery County, Allentown, the Lehigh Valley, and nearby Pennsylvania communities.",
  },
  {
    q: "What types of moves do you handle?",
    a: "We handle local residential moves, long-distance and interstate relocations, apartment and condo moves, commercial and office relocations, packing-only jobs, and specialty items such as pianos and antiques.",
  },
  {
    q: "Do you offer packing and unpacking services?",
    a: "Yes. We offer full-service packing, partial packing, unpacking, and furniture disassembly and reassembly using professional-grade materials and protective wrapping.",
  },
  {
    q: "How can I get an accurate moving quote?",
    a: "Submit the free quote form or call +1 (445) 444-8100. Share your move date, home size, and both addresses, and a move coordinator responds within about 15 minutes with a transparent estimate.",
  },
  {
    q: "Do you move apartments, houses, and condos?",
    a: "Yes. Our crews are experienced with walk-up apartments, high-rise condos with elevator reservations and COI requirements, townhomes, and single-family houses of every size.",
  },
  {
    q: "Do you provide commercial and office moving services?",
    a: "Yes. We relocate offices, retail spaces, and small warehouses with after-hours and weekend scheduling, labeled inventory, and IT and workstation setup to limit downtime.",
  },
  {
    q: "Do you offer piano and specialty moving?",
    a: "Yes. We move upright and baby grand pianos, safes, gym equipment, fine art, and antiques using dedicated equipment, custom crating, and trained specialty crews.",
  },
  {
    q: "What areas does Movers To Go serve?",
    a: "We serve Philadelphia, Greater Philadelphia, Bucks County, Montgomery County, Allentown, the Lehigh Valley, and surrounding Pennsylvania areas, plus long-distance moves nationwide.",
  },
  {
    q: "How far in advance should I book my move?",
    a: "Two to four weeks ahead is ideal, and four to six weeks for summer weekends and month-end dates. We also accommodate short-notice and same-week moves when crews are available.",
  },
  {
    q: "Why choose Movers To Go?",
    a: "More than 10 years of experience, a 4.9-star Google rating from 100+ reviews, licensed and insured crews, transparent upfront pricing, and careful handling on every single move.",
  },
];

export const testimonials = [
  {
    name: "Aolani M.",
    location: "Perkiomenville, PA",
    source: "Yelp",
    text: "Igor and crew were amazing. Very nice and made everything super easy for us. Super tidy and didn't mind our little guy wanting to help! Their pricing was also unmatched! Thanks so much Movers to go!",
  },
  {
    name: "Sarah M.",
    location: "Manhattan, NY",
    source: "Yelp",
    text: "They were amazing!! Best moving experience I've ever had! Movers were quick, hardworking and professional.",
  },
  {
    name: "Morrison F.",
    location: "Willingboro, NJ",
    source: "Yelp",
    text: "It was great to work with Movers to Go. They were responsive, kind, and resilient in the heat and with solutions for when the space was a little smaller than expected. The value was excellent as well!",
  },
  {
    name: "Jacintha D.",
    location: "Newark, DE",
    source: "Yelp",
    text: "George's team did a wonderful job! We needed a heavy dresser moved up one floor. They came in within 12 hours of reaching out on Yelp. Clearly communicated and job neatly done. I highly recommend.",
  },
  {
    name: "Maria M.",
    location: "PA",
    source: "Yelp",
    text: "Very professional, took extreme care of the piece I needed moved - a marble top delicate vintage vitrine. Highly recommend these folks.",
  },
  {
    name: "Ashley M.",
    location: "Jersey City, NJ",
    source: "Yelp",
    text: "Incredibly easy to work with. Gio and his crew were fantastic and the price was exactly the estimate I was given. Nothing was damaged and everything went really smoothly!",
  },
];
