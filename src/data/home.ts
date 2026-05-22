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

/**
 * Real testimonials carried over from the previous site's home.html
 * ("People saying nice things 🥰" section). Verbatim quotes and
 * attributions; don't editorialize.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "We engaged Dalia for a quick turnaround on our Series A investor presentation. She was responsive and diligent in quickly learning our business and our market and in creating a wonderful presentation for us. Perhaps most impressive was the fact that she provided valuable insight into the VC / entrepreneur thought process and recommendations that improved our storytelling. We look forward to working with Dalia again.",
    author: 'Turab B.',
    role: 'VP of Finance, Crusoe',
  },
  {
    quote: "Dalia is one of the best all-around people that I know. Her tremendous background (Ivy League, Big 4 Consulting, startups) is rooted in the foundation of subject expertise/knowledge, integrity, professionalism, heart, pride in her work, and how she treats people at all levels — leaving a lasting impression to those lucky to have worked with her.",
    author: 'John Z.',
    role: 'Director of Marketing, Thuzio (acquired)',
  },
  {
    quote: "Dalia has incredible strategic thinking, leadership skills — Envisioning, Engaging and Execution skills. She demonstrates great presence, EQ, IQ and drive and took full ownership of our project along with her colleagues. Teamwork between Dalia and various members was outstanding making it seamless for the entire team. She is a great talent to seek out to solve big and complex challenges.",
    author: 'Akhil S.',
    role: 'Global CFO, Estée Lauder',
  },
  {
    quote: "There are only a few people in the world who match her vision along with her determination and energy, and I have time and time again been left speechless.",
    author: 'Aoi S.',
    role: 'CEO/Founder, Colabra',
  },
  {
    quote: "I worked with Dalia to establish and manage a network of professionals to grow Doblin's presence on the west coast. Dalia was the driver of this effort, helping it grow from the two of us to a vibrant community of practitioners, partners, and account leaders. […] Dalia is smart, proactive, thoughtful and energetic. She delivers high quality work and is a pleasure to work with. I have been lucky to have her as a colleague!",
    author: 'Erik K.',
    role: 'Managing Director, Deloitte',
  },
  {
    quote: "Dalia is extremely professional and one of the most collaborative people I've met with genuine interests and passions for helping others. She is detail-oriented and well-organized… She really owned the room and helped our people think outside of the box. Dalia is truly a leader and an asset for any business.",
    author: 'Anna S.',
    role: 'Client, Mattel',
  },
  {
    quote: "Working with Dalia was an organic addition and accelerant to our business development. From our earliest conversations, she dove into the esoteric nuances of our company and market. She applied our differentiation and milestones to improve our market positioning and business model. She distilled these conclusions into an artfully designed fundraising presentation that spoke to industry experts and novices alike. I highly endorse her services.",
    author: 'Adam C.',
    role: 'COO, Blockchain Startup (acquired)',
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
