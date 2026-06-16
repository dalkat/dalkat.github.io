/**
 * Home-page content data – extracted from the design handoff
 * (variations/shared.jsx + mesh-pages/home.jsx).
 */
import { C, fontDisplay, fontUI } from '@/lib/mesh';

/** Long bio – two paragraphs in the About section. */
export const BIO_LONG: string[] = [
  "I'm a product leader who's spent the last 15 years between strategy consulting (independent practice, Deloitte/Doblin) and tech – most recently leading mobile product at Stripe, and before that founding Presently, a startup making group payments easier.",
  "Now I work as a fractional CPO and advisor for early-stage teams, angel-invest in founders I believe in, and write about the intersection of product, the startup journey, and what it means to build a life around what you're actually curious about.",
];

/** Hero subhead under the "Hi, I'm Dalia." headline. */
export const HERO_SUBHEAD =
  "Product leader, fractional CPO, angel investor – I help early-stage teams turn products into companies that can actually scale.";

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
    role: 'VP of Finance, Crusoe AI',
  },
  {
    quote: "Dalia is one of the best all-around people that I know. Her tremendous background (Ivy League, Big 4 Consulting, startups) is rooted in the foundation of subject expertise/knowledge, integrity, professionalism, heart, pride in her work, and how she treats people at all levels – leaving a lasting impression to those lucky to have worked with her.",
    author: 'John Z.',
    role: 'Director of Marketing, Thuzio (acquired)',
  },
  {
    quote: "Dalia has incredible strategic thinking, leadership skills – Envisioning, Engaging and Execution skills. She demonstrates great presence, EQ, IQ and drive and took full ownership of our project along with her colleagues. Teamwork between Dalia and various members was outstanding making it seamless for the entire team. She is a great talent to seek out to solve big and complex challenges.",
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

/** Companies row – typographic wordmarks (no copyrighted glyphs). */
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

/** Field Notes teaser tiles – four picks on the Home page that link out to
 *  the actual pieces (Substack/Medium). Mirrors a slice of the archive at
 *  /notes; the CTA underneath sends visitors to the full library. */
export interface FieldNoteTeaser {
  kind: string;
  title: string;
  blurb: string;
  where: string;
  year: number;
  read: string;
  tint: string;
  href?: string;
  /** Optional cover image (path under /public). Pulled from each
   *  article's own og:image so the tile thumbnail mirrors what shows
   *  up when the post is shared. */
  image?: string;
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
    image: '/img/teasers/introducing-arch.jpg',
  },
  {
    kind: 'Framework',
    tint: C.teal,
    title: '03 Atmosphere: Getting the vibes right',
    blurb: 'The emotional baseline of product experience – and how it quietly shapes whether users return.',
    where: 'Substack',
    year: 2026,
    read: '10 min',
    href: 'https://daliakatan.substack.com/p/arch-atmosphere',
    image: '/img/teasers/arch-atmosphere.jpg',
  },
  {
    kind: 'Essay',
    tint: C.plum,
    title: 'Why First-Gen Founders Need to Learn to Spend',
    blurb: '“Be scrappy” is the wrong advice for first-gen and minority founders – and one of the hardest things I had to unlearn.',
    where: 'Medium',
    year: 2022,
    read: '8 min',
    href: 'https://ehandbook.com/the-paradox-of-being-scrappy-why-first-gen-founders-need-to-learn-to-spend-6d989abdc9c6',
    image: '/img/teasers/first-gen-founders.jpg',
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
    image: '/img/teasers/hopper-atmosphere.jpg',
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
  { id: 'consulting', label: 'Consulting',  href: '/consulting' },
  { id: 'talks',      label: 'Talks',       href: '/talks' },
  { id: 'notes',    label: 'Field Notes', href: '/notes' },
  { id: 'quests',   label: 'Side Quests', href: '/quests' },
];
