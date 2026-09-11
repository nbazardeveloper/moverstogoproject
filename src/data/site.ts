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
  areas: ["Philadelphia", "Huntingdon Valley", "Montgomery County", "Bucks County"],
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
    q: "Do you provide local moving services in Philadelphia?",
    a: "Yes. Movers To Go provides local moving services throughout Philadelphia, Huntingdon Valley, and surrounding areas in Montgomery and Bucks Counties.",
  },
  {
    q: "How much do movers cost in Philadelphia?",
    a: "Moving costs depend on the size of your move, the number of movers needed, and other details of the job. Use our Check Your Rate option to enter your move details and view the available rates.",
  },
  {
    q: "Do you move apartments and houses?",
    a: "Yes. We handle apartment, house, condo, and other residential moves throughout the Philadelphia area.",
  },
  {
    q: "Do you offer packing services?",
    a: "Yes. Our team can help pack and protect furniture, household items, and other belongings for your move.",
  },
  {
    q: "How do I get a moving rate?",
    a: "Click Check Your Rate, enter the details of your move, and continue to view the available pricing options.",
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
