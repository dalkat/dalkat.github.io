/**
 * /strategy page content data — extracted from the design handoff
 * (mesh-pages/strategy.jsx, variations/subpage-data.jsx, and the
 * STRATEGY_CLIENTS list in mesh-pages/shared.jsx).
 */
import { C, fontDisplay, fontUI } from '@/lib/mesh';
import type { CompanyWordmark } from '@/data/home';

/* ──────────────────────────────────────────────
 * Offerings — three engagement umbrellas
 * ────────────────────────────────────────────── */
export interface Offering {
  /** Group title. */
  group: string;
  /** Accent color hex. */
  tint: string;
  /** [baseColor, blobColor] for the mesh blob in the card corner. */
  blob: [string, string];
  /** Services this umbrella covers — bulleted on the card. */
  services: string[];
}

export const OFFERINGS: Offering[] = [
  {
    group: 'UX & Product Experience',
    tint: C.plum,
    blob: [C.lavender, C.sky],
    services: [
      'UX Audit & Product Experience',
      'Mobile Product Strategy',
      'Product Strategy & Direction',
      'Product Operating System',
      'Fractional Product Leadership',
    ],
  },
  {
    group: 'Innovation, venture studio & AI',
    tint: C.teal,
    blob: [C.mint, C.sky],
    services: [
      'Venture Studio / Concept-to-Prototype',
      'AI Product Strategy',
    ],
  },
  {
    group: 'Brand & Digital Strategy',
    tint: C.coral,
    blob: [C.peach, C.butter],
    services: [
      'Brand & Digital Strategy',
      'Brand Narrative & Storytelling',
      'Fundraising Pitch',
    ],
  },
];

/* ──────────────────────────────────────────────
 * Case studies — six representative engagements
 * ────────────────────────────────────────────── */
export interface CaseStudy {
  n: string;
  kicker: string;
  title: string;
  client: string;
  tags: string[];
  year: string;
  summary: string;
  outcome: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    n: '01',
    kicker: 'Innovation strategy · Fortune-10',
    title: 'A long-term growth vision',
    client: 'Fortune-10 Company',
    tags: ['innovation strategy', 'growth vision', 'mobility'],
    year: '2018',
    summary:
      "A Fortune-10 company saw customer behavior shifting around mobility — how people move, travel, and pay — and needed a long-term vision for where to place its growth bets. My team and I helped craft it: grounding the vision in ethnographic research and consumer trends, then working side-by-side with client leadership to define a vision for long-term planning and the core design principles that would help them execute.",
    outcome: 'A prioritized set of 20 growth opportunities mapped along the customer journey.',
  },
  {
    n: '02',
    kicker: 'Brand narrative · Crusoe',
    title: 'A Series A deck — for a company now worth billions',
    client: 'Crusoe Energy',
    tags: ['brand narrative', 'fundraising', 'investor deck'],
    year: '2019',
    summary:
      "Crusoe is pioneering sustainable AI infrastructure — Fast Company's 100 Most Innovative in 2026, $1B Series E that same year. But in its early days, they brought me in to design their Series A deck on a tight timeline — explaining a complex energy-plus-computing business to VCs and making the investment case land.",
    outcome: "Fundraising deck supported Crusoe's $30M Series A raise.",
  },
  {
    n: '03',
    kicker: 'Market expansion · Zone7 AI (Acquired)',
    title: 'From sports science to a new industry',
    client: 'Zone7',
    tags: ['go-to-market', 'market expansion', 'pilot sourcing'],
    year: '2019–2020',
    summary:
      "Zone7's AI predicts injury and fatigue risk in pro sports and military. They brought me in to help identify what industries might become their next growth edge. I led the full go-to-market strategy design — market research and selection, pricing, and sourcing pilot customers — to strengthen the company's position ahead of an ambitious fundraise.",
    outcome: "Secured healthcare pilot in NY Hospital network to validate Zone7's next market.",
  },
  {
    n: '04',
    kicker: 'Market entry · Fortune-10',
    title: 'Reaching new markets with a mobility app',
    client: 'Fortune-10 Automaker',
    tags: ['market entry', 'business model', 'monetization'],
    year: '2016',
    summary:
      "A global automaker was expanding beyond cars into mobility and payments — and preparing to launch its first such app in Europe and China. My team and I designed three intertwined strategies: market entry (which markets and payments partners to prioritize, and the considerations unique to each region); business model (the short-, medium-, and long-term shape of the offering and how closely it should mirror the US); and monetization (the core, adjacent, and transformational paths through the digital marketplace).",
    outcome: 'Strategy greenlit by client leadership; app went to market that year.',
  },
  {
    n: '05',
    kicker: 'Brand & growth · Fortune 500 beauty',
    title: 'The next three years of beauty',
    client: 'Fortune 500 Beauty Manufacturer',
    tags: ['brand strategy', 'consumer growth', 'innovation'],
    year: '2016',
    summary:
      "A large beauty manufacturer engaged Deloitte to develop its multi-year brand, marketing, and consumer-growth strategy for the C-Suite. I worked directly with senior leadership across every department to define brand ambition; build data-driven consumer recruitment, engagement, and retention strategies by region; rework marketing and creative across social, digital, and retail with local relevancy; and redesign internal work practices.",
    outcome: 'Multi-year strategy adopted by C-Suite; regional growth targets set across channels and consumer segments.',
  },
  {
    n: '06',
    kicker: 'Innovation · Global toymaker',
    title: 'Toward a future of toys and packaging',
    client: 'Global Toymaker',
    tags: ['innovation', 'ideation workshops', 'human-centered design'],
    year: '2017',
    summary:
      'Led the innovation workstream for a global toymaker across 10+ brands. Gathered consumer insights on purchasing behavior and ran ideation workshops with each brand to surface strategic and tactical design initiatives.',
    outcome: 'A prioritized initiative roadmap, scored by impact and speed-to-market.',
  },
];

/* ──────────────────────────────────────────────
 * Strategy clients — typographic wordmarks
 * Used in the "Past clients" logos band.
 * (No copyrighted glyphs — these are styled text.)
 * ────────────────────────────────────────────── */
export const STRATEGY_CLIENTS: CompanyWordmark[] = [
  { name: 'Adobe',          style: { fontFamily: fontUI, fontWeight: 700, fontSize: '24px', letterSpacing: '-0.01em' } },
  { name: 'Panasonic',      style: { fontFamily: fontUI, fontWeight: 800, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'Estée Lauder',   style: { fontFamily: fontDisplay, fontWeight: 400, fontSize: '20px', letterSpacing: '0.06em', textTransform: 'uppercase' } },
  { name: 'Mattel',         style: { fontFamily: fontUI, fontWeight: 800, fontSize: '22px', letterSpacing: '0.02em' } },
  { name: 'Tory Burch',     style: { fontFamily: fontDisplay, fontWeight: 400, fontSize: '20px', letterSpacing: '0.18em', textTransform: 'uppercase' } },
  { name: 'Ford',           style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 500, fontSize: '26px', letterSpacing: '-0.01em' } },
  { name: 'Sysco',          style: { fontFamily: fontUI, fontWeight: 800, fontSize: '24px', letterSpacing: '-0.01em' } },
  { name: 'Deloitte.',      style: { fontFamily: fontUI, fontWeight: 700, fontSize: '22px', letterSpacing: '-0.02em' } },
  { name: 'TD Bank',        style: { fontFamily: fontUI, fontWeight: 700, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'Erie Insurance', style: { fontFamily: fontDisplay, fontWeight: 500, fontSize: '20px', letterSpacing: '-0.01em' } },
  { name: 'Genentech',      style: { fontFamily: fontUI, fontWeight: 600, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'qedit',          style: { fontFamily: fontUI, fontWeight: 700, fontSize: '24px', letterSpacing: '-0.02em' } },
  { name: 'Crusoe',         style: { fontFamily: fontDisplay, fontWeight: 500, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'Molson Coors',   style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'TENT',           style: { fontFamily: fontUI, fontWeight: 500, fontSize: '20px', letterSpacing: '0.18em' } },
  { name: 'Zone7',          style: { fontFamily: fontUI, fontWeight: 800, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: '+ more',         style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: '22px', letterSpacing: '-0.01em', opacity: 0.6 } },
];
