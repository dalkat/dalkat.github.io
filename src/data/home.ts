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
  "Product leader, fractional CPO, angel investor — I help early-stage teams turn products into companies that can actually scale.";

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

/** Field Notes teaser tiles — four picks on the Home page that link out to
 *  the actual pieces (Substack/Medium). Mirrors a slice of the archive at
 *  /field-notes; the CTA underneath sends visitors to the full library. */
export interface FieldNoteTeaser {
  kind: string;
  title: string;
  blurb: string;
  where: string;
  year: number;
  read: string;
  tint: string;
  href?: string;
}

export const FIELD_NOTE_TEASERS: FieldNoteTeaser[] = [
  {
    kind: 'Framework',
    tint: C.coral,
    title: 'Introducing ARCH: Building Products People Want to Live In',
    blurb: 'Every product is a space people inhabit. To build truly great products, we must think like architects.',
    where: 'Substack',
    year: 2023,
    read: '10 min',
    href: 'https://daliakatan.substack.com/p/introducing-arch-building-products-people-want-to-live-in',
  },
  {
    kind: 'Framework',
    tint: C.teal,
    title: '03 Atmosphere: Getting the vibes right',
    blurb: 'The emotional baseline of product experience — and how it quietly shapes whether users return.',
    where: 'Substack',
    year: 2026,
    read: '10 min',
    href: 'https://daliakatan.substack.com/p/arch-atmosphere',
  },
  {
    kind: 'Essay',
    tint: C.plum,
    title: 'Why First-Gen Founders Need to Learn to Spend',
    blurb: '“Be scrappy” is the wrong advice for first-gen and minority founders — and one of the hardest things I had to unlearn.',
    where: 'Medium',
    year: 2022,
    read: '8 min',
    href: 'https://ehandbook.com/the-paradox-of-being-scrappy-why-first-gen-founders-need-to-learn-to-spend-6d989abdc9c6',
  },
  {
    kind: 'Essay',
    tint: C.coral,
    title: '04 How Atmosphere makes or breaks user trust and retention',
    blurb: 'Atmosphere in action: Hopper and the Las Vegas effect.',
    where: 'Substack',
    year: 2026,
    read: '12 min',
    href: 'https://daliakatan.substack.com/p/04-atmosphere-case-study-hopper-how-atmosphere-makes-or-breaks-trust-and-retention',
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
