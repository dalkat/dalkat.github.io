/**
 * Home-page content data — extracted from the design handoff
 * (variations/shared.jsx + mesh-pages/home.jsx).
 */
import { C, fontDisplay, fontUI } from '@/lib/mesh';

/** Long bio — two paragraphs in the About section. */
export const BIO_LONG: string[] = [
  "I'm a product leader who's spent the last 15 years between strategy consulting (Doblin, Deloitte, IBM) and tech (Stripe, Presently, +) — where I led work across creator economies, financial primitives, and the kind of internal tools that quietly make a $1T company run.",
  "Now I work as a fractional CPO for a handful of seed and Series A teams, advise founders I love, and write about the intersection of product, attention, and what it means to build a life around what you're actually curious about.",
];

/** Hero subhead under the "Hi, I'm Dalia." headline. */
export const HERO_SUBHEAD =
  "Product leader, fractional CPO, angel investor — helping early-stage teams find the line between the product they're shipping and the company they're actually trying to build.";

/** Testimonials carousel on the Praise section. */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Dalia is one of those rare product leaders who can hold the strategy in one hand and the pixel in the other. She makes everyone around her braver.",
    author: 'A founder she advised',
    role: 'Seed-stage CEO',
  },
  {
    quote: "She turned three months of meandering conversations into a roadmap the whole company could see itself in. We're still running on it.",
    author: 'Series B operator',
    role: 'Head of Product',
  },
  {
    quote: "Working with Dalia feels like being read aloud to. You leave each session with the thing you came in trying to say, only sharper.",
    author: 'A repeat collaborator',
    role: 'Designer & writer',
  },
  {
    quote: "I've never seen anyone hold so much complexity so lightly. She makes hard decisions feel obvious in retrospect.",
    author: 'Former Stripe peer',
    role: 'Product lead',
  },
];

/** Companies row — typographic wordmarks (no copyrighted glyphs). */
export interface CompanyWordmark {
  name: string;
  style: Record<string, string | number>;
}

export const COMPANIES: CompanyWordmark[] = [
  { name: 'Stripe',      style: { fontFamily: fontUI, fontWeight: 600, letterSpacing: '-0.02em', fontSize: '28px' } },
  { name: 'Doblin',      style: { fontFamily: fontDisplay, fontWeight: 500, letterSpacing: '-0.01em', fontSize: '26px' } },
  { name: 'Deloitte.',   style: { fontFamily: fontUI, fontWeight: 700, letterSpacing: '-0.02em', fontSize: '26px' } },
  { name: 'IBM',         style: { fontFamily: fontUI, fontWeight: 700, letterSpacing: '0.04em', fontSize: '30px' } },
  { name: 'UBS',         style: { fontFamily: fontDisplay, fontWeight: 500, fontSize: '28px', letterSpacing: '0.04em' } },
  { name: 'Princeton',   style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: '24px', letterSpacing: '-0.01em' } },
  { name: 'US Congress', style: { fontFamily: fontDisplay, fontWeight: 400, fontSize: '22px', letterSpacing: '0.04em', textTransform: 'uppercase' } },
  { name: 'Presently',   style: { fontFamily: fontDisplay, fontWeight: 400, fontSize: '24px', letterSpacing: '-0.01em' } },
  { name: 'Thuzio',      style: { fontFamily: fontUI, fontWeight: 700, fontSize: '24px', letterSpacing: '-0.02em' } },
  { name: 'Alexandria',  style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: '24px', letterSpacing: '-0.01em' } },
];

/** ARCH / Interspace writing tiles — featured pieces on Home. */
export interface ArchPost {
  kind: string;
  title: string;
  blurb: string;
  where: string;
  year: number;
  read: string;
  tint: string;
  href?: string;
}

export const ARCH_POSTS: ArchPost[] = [
  {
    kind: 'Framework',
    tint: C.coral,
    title: 'Introducing ARCH: Building Products People Want to Live In',
    blurb: 'A four-part framework — Architecture, Rooms, Connections, Hospitality — for designing products the way you would design a home.',
    where: 'Substack',
    year: 2024,
    read: '12 min',
    href: 'https://daliakatan.substack.com/p/introducing-arch-building-products-people-want-to-live-in',
  },
  {
    kind: 'Essay',
    tint: C.plum,
    title: 'Interspace, or why every app feels the same now',
    blurb: 'On the collapse of distinct product feelings into a single grey corridor — and what it would take to design buildings again.',
    where: 'Substack',
    year: 2025,
    read: '9 min',
    href: 'https://daliakatan.substack.com/',
  },
  {
    kind: 'Notes',
    tint: C.teal,
    title: 'Thresholds: the most underrated part of any product',
    blurb: 'Front doors, hallways, the moment between rooms. Notes on transitions, and why nobody designs them on purpose anymore.',
    where: 'Substack',
    year: 2025,
    read: '6 min',
    href: 'https://daliakatan.substack.com/',
  },
  {
    kind: 'Field guide',
    tint: C.coral,
    title: 'Designing an app like you would a home',
    blurb: 'A walk-through of the ARCH framework applied to a consumer mobile product — rooms, light, what gets pinned to the fridge.',
    where: 'Substack',
    year: 2024,
    read: '10 min',
    href: 'https://daliakatan.substack.com/p/designing-an-app-like-you-would-a-home',
  },
];

/** Primary nav, used by PageNav. */
export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const NAV: NavLink[] = [
  { id: 'home',     label: 'Home',        href: '/' },
  { id: 'strategy', label: 'Strategy',    href: '/strategy' },
  { id: 'speaker',  label: 'Speaker',     href: '/speaker' },
  { id: 'foryou',   label: 'Field Notes', href: '/field-notes' },
  { id: 'donow',    label: 'Do Now',      href: '/do-now' },
];
