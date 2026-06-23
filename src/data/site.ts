/* =============================================================================
 * Elite Contracting — site content
 * -----------------------------------------------------------------------------
 * Edit ALL business content (copy, services, reviews, areas) from this one file.
 * ===========================================================================*/

/* -----------------------------------------------------------------------------
 *  ⬇️  PASTE YOUR WEB3FORMS ACCESS KEY HERE  ⬇️
 *
 *  1. Go to https://web3forms.com  →  enter your email  →  copy the access key.
 *  2. Replace the placeholder string below with that key.
 *  3. Redeploy. That's it — no backend, no server, form emails land in your inbox.
 * ---------------------------------------------------------------------------*/
export const WEB3FORMS_KEY = 'd5f316c6-8753-40ce-988c-b89f0ea87bb6'

/* -------------------------------------------------------------------------- */

export const site = {
  name: 'Elite Contracting',
  tagline: 'Premium Residential Construction & Remodeling',
  phoneDisplay: '(313) 244-2000',
  phoneHref: 'tel:+13132442000',
  email: 'Mawassi24@gmail.com',
  instagram: 'https://www.instagram.com/elitecontracting.mi/',
  instagramHandle: '@elitecontracting.mi',
  googleReviewsUrl: 'https://www.google.com/search?q=Elite+Contracting+Dearborn+Heights',
  hours: 'Open 24 Hours',
  rating: '5.0',
  reviewCount: 13,
  serviceArea: 'Dearborn Heights + Metro Detroit',
  year: 2026,
} as const

export const hero = {
  headline: 'Built to a Higher Standard.',
  subhead:
    'High-end remodeling and construction for Metro Detroit homeowners who refuse to compromise.',
  trustLine: '5.0 ★ on Google · 13 Reviews · Serving Metro Detroit',
} as const

export const stats = [
  { value: '5.0★', label: 'Google Rating' },
  { value: '13+', label: 'Five-Star Reviews' },
  { value: 'Licensed', label: '& Insured' },
  { value: '24/7', label: 'Open 24 Hours' },
] as const

/* Services — icon names map to lucide-react icons in Services.tsx */
export const services = [
  {
    icon: 'ChefHat',
    title: 'Kitchen Remodeling',
    description: 'Custom cabinetry, countertops and layouts that turn the kitchen into the heart of the home.',
  },
  {
    icon: 'Bath',
    title: 'Bathroom Remodeling',
    description: 'Spa-grade bathrooms with precise tile work, modern fixtures and clean, lasting finishes.',
  },
  {
    icon: 'Layers',
    title: 'Basement Renovation',
    description: 'Finished basements that add real living space — theaters, suites, gyms and more.',
  },
  {
    icon: 'Home',
    title: 'Home Additions',
    description: 'Seamless additions that expand your footprint without compromising your home’s character.',
  },
  {
    icon: 'Building2',
    title: 'New Home Construction',
    description: 'Ground-up custom homes built to your vision with uncompromising structural quality.',
  },
  {
    icon: 'Grid3x3',
    title: 'Flooring & Tile',
    description: 'Hardwood, luxury vinyl and tile installed level, tight and built to outlast the trends.',
  },
  {
    icon: 'Hammer',
    title: 'Drywall & Interior Repairs',
    description: 'Flawless drywall, taping and interior repairs that leave walls smooth and ready to finish.',
  },
  {
    icon: 'Wrench',
    title: 'Plumbing Fixtures',
    description: 'Expert installation of sinks, faucets, tubs and fixtures — done right the first time.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Repairs & Maintenance',
    description: 'Dependable repairs and upkeep that keep every part of your home performing like new.',
  },
  {
    icon: 'Sparkles',
    title: 'Full Home Renovations',
    description: 'Whole-home transformations managed end to end, on schedule and on budget.',
  },
] as const

/* NOTE: Portfolio images are auto-loaded from src/assets/portfolio/
 * (no renaming needed) — see src/data/portfolio.ts */

export const about = {
  blurb:
    'At Elite Contracting we treat every home as if it were our own. From the first measurement to the final walkthrough, we obsess over craftsmanship, communication and the details most contractors overlook.',
  values: [
    'Detail-oriented craftsmanship',
    'Fair, transparent pricing',
    'On time, on budget',
    'Clean, respectful crews',
  ],
} as const

export const reviews = [
  {
    name: 'douha j',
    text: 'Outstanding work from start to finish. Professional, reliable and the results speak for themselves.',
  },
  {
    name: 'Zain Joseph',
    text: 'Mo was very patient and walked us through every step. The quality and communication were excellent.',
  },
  {
    name: 'Zahraa Derham',
    text: 'On time and within budget. They delivered exactly what they promised — couldn’t be happier.',
  },
  {
    name: 'Mona N',
    text: 'Affordable, fair pricing and incredible attention to quality. Highly recommend Elite Contracting.',
  },
  {
    name: 'Mariam Hannaoui',
    text: 'Their attention to every detail is unmatched. The finished work exceeded our expectations.',
  },
  {
    name: 'aida farhat',
    text: 'They went above and beyond at every turn. Truly cared about getting everything just right.',
  },
  {
    name: 'Germano Schulz Bechara',
    text: 'One of the few companies I’d confidently recommend. Honest, skilled and a pleasure to work with.',
  },
] as const

export const areas = [
  'Dearborn Heights',
  'Dearborn',
  'Detroit',
  'Livonia',
  'Canton Township',
  'Farmington Hills',
  'Bloomfield Hills',
  'Franklin',
  'Northville',
] as const

/* Options shown in the contact form's "Service" dropdown */
export const serviceOptions = [
  'Kitchen Remodeling',
  'Bathroom Remodeling',
  'Basement Renovation',
  'Home Additions',
  'New Home Construction',
  'Flooring & Tile',
  'Drywall & Interior Repairs',
  'Plumbing Fixtures',
  'Repairs & Maintenance',
  'Full Home Renovations',
  'Other / Not Sure',
] as const

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
] as const
