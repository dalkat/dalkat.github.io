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
    title: 'Choosing where to grow next',
    client: 'Fortune-10 Company',
    tags: ['innovation strategy', 'growth vision', 'mobility'],
    year: '2018',
    summary:
      "A Fortune-10 company saw customer behavior shifting around how people move, travel, and pay — and needed a long-term vision for where to place its growth bets. My team and I helped craft it: grounding the vision in ethnographic research and consumer trends, then working with client leadership to define the principles that would guide execution.",
    outcome: '20 growth opportunities prioritized for near- and long-term.',
  },
  {
    n: '02',
    kicker: 'Narrative & fundraising · Crusoe AI',
    title: 'A Series A deck — for a company now worth billions',
    client: 'Crusoe AI',
    tags: ['brand narrative', 'fundraising', 'investor deck'],
    year: '2019',
    summary:
      "Crusoe AI is pioneering sustainable AI infrastructure — Fast Company's 100 Most Innovative in 2026, $1B Series E that same year. But in its early days, they brought me in to design their Series A deck on a tight timeline — explaining a complex energy-plus-computing business to VCs and making the investment case land.",
    outcome: "Fundraising deck supported Crusoe AI's $30M Series A raise.",
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
    outcome: 'Secured pilot at top NYC hospital to validate next market.',
  },
  {
    n: '04',
    kicker: 'Market entry · Fortune-10',
    title: 'Reaching new markets with a mobility app',
    client: 'Fortune-10 Company',
    tags: ['market entry', 'business model', 'monetization'],
    year: '2016',
    summary:
      "A Fortune-10 company was expanding into mobility and payments, preparing to launch a new app in Europe and China — two markets with little in common. My team and I designed the launch strategy across three questions: which markets and partners to prioritize, what shape the offering should take in each region, and how it would actually make money.",
    outcome: 'Strategy greenlit by client leadership; the app went to market that year.',
  },
  {
    n: '05',
    kicker: 'Brand & growth strategy · Fortune 500',
    title: 'A growth strategy for seven global CPG brands',
    client: 'Fortune 500 CPG Manufacturer',
    tags: ['brand strategy', 'consumer growth', 'regional playbooks'],
    year: '2016',
    summary:
      "A global CPG manufacturer needed a multi-year brand and consumer-growth strategy — one that would hold across seven brands and every region they sold in. Working directly with senior leadership, I helped define the brand ambition and the regional playbooks supporting it: how each market would recruit, engage, and keep its consumers, and how marketing and creative would flex to stay locally relevant.",
    outcome: 'A three-year strategy adopted by the C-suite, with regional growth targets set across channels and consumer segments.',
  },
  {
    n: '06',
    kicker: 'Innovation · Global consumer products',
    title: 'Toward a future of packaging',
    client: 'Global Consumer Products Brand',
    tags: ['innovation', 'ideation workshops', 'human-centered design'],
    year: '2017',
    summary:
      "A billion-dollar manufacturer engaged us to rethink packaging across its portfolio of 10+ brands — each with its own consumers and constraints. I led the innovation workstream: running ideation workshops with every brand team, grounded in consumer research on how people actually shop the category, to surface packaging ideas that were more sustainable and more creative — without eroding the trust customers already had.",
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
  { name: 'ExxonMobil',     style: { fontFamily: fontUI, fontWeight: 700, fontSize: '22px', letterSpacing: '-0.01em' } },
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
