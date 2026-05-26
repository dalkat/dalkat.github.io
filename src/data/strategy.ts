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
    year: '2019–2020',
    summary:
      "A Fortune-10 company saw customer behavior shifting around mobility — how people move, travel, and pay — and needed a long-term vision for where to place its growth bets. My team and I helped craft it: grounding the vision in ethnographic research and consumer trends, then working side-by-side with client leadership to define a vision for long-term planning and the core design principles that would help them execute.",
    outcome: 'A prioritized set of 20 growth opportunities mapped along the customer journey.',
  },
  {
    n: '02',
    kicker: 'Innovation · Global toymaker',
    title: 'Toward a future of toys and packaging',
    client: 'Global Toymaker',
    tags: ['innovation', 'ideation workshops', 'human-centered design'],
    year: '2018',
    summary:
      'Led the innovation workstream for a global toymaker across 10+ brands. Gathered consumer insights on purchasing behavior and ran ideation workshops with each brand to surface strategic and tactical design initiatives.',
    outcome: 'A prioritized initiative roadmap, scored by impact and speed-to-market.',
  },
  {
    n: '03',
    kicker: 'D&I · Tent Partnership',
    title: 'Refugee integration in the workplace',
    client: 'Tent Partnership for Refugees',
    tags: ['human-centered design', 'D&I', 'workplace practices'],
    year: '2017',
    summary:
      'Launched a project to help private-sector leaders improve the hiring and inclusion of refugees. Interviewed ~100 employers and refugee employees to surface challenges and success stories.',
    outcome: 'Published guidance now used by employers across 4 industries.',
  },
  {
    n: '04',
    kicker: 'Market entry · Fortune-10',
    title: 'Reaching new markets with a mobility app',
    client: 'Fortune-10 Automaker',
    tags: ['market entry', 'mobile strategy', 'payments'],
    year: '2016',
    summary:
      "A global automaker was expanding beyond cars into mobility and payments — and preparing to launch its first such app in Europe and China. My team and I designed the market-entry strategy: which markets to prioritize, where the monetization potential was, and which payments partners to launch with — grounded in consumer behavior and market insight.",
    outcome: 'Strategy greenlit by client leadership; app went to market that year.',
  },
  {
    n: '05',
    kicker: 'Brand · Fortune 500 beauty',
    title: 'Future of beauty with seven global brands',
    client: 'Global Beauty Brand (Fortune 500)',
    tags: ['brand strategy', 'innovation', 'customer analysis'],
    year: '2018–2019',
    summary:
      'Worked with senior executives across seven global beauty brands to develop a 3-year brand and consumer growth strategy. Coordinated 7 cross-functional teams across customer, product, and region.',
    outcome: '4–10% CAGR growth target by region — up from flat-line.',
  },
  {
    n: '06',
    kicker: 'Edge innovation · Fortune 500 insurance',
    title: 'Building an edge innovation team',
    client: 'Fortune 500 Insurance Company',
    tags: ['innovation strategy', 'agile', 'team design'],
    year: '2019',
    summary:
      'Supported leadership in designing an edge innovation team and shifting toward transformational bets outside the core. Identified ten new opportunity spaces, prioritized two, and built a research plan.',
    outcome: 'Two opportunity spaces moved to scoped pilots within a quarter.',
  },
];

/* ──────────────────────────────────────────────
 * Strategy clients — typographic wordmarks
 * Used in the "Past clients" logos band.
 * (No copyrighted glyphs — these are styled text.)
 * ────────────────────────────────────────────── */
export const STRATEGY_CLIENTS: CompanyWordmark[] = [
  { name: 'Adobe',          style: { fontFamily: fontUI, fontWeight: 700, fontSize: '24px', letterSpacing: '-0.01em' } },
  { name: 'slack',          style: { fontFamily: fontUI, fontWeight: 700, fontSize: '24px', letterSpacing: '-0.02em' } },
  { name: 'Panasonic',      style: { fontFamily: fontUI, fontWeight: 800, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'Estée Lauder',   style: { fontFamily: fontDisplay, fontWeight: 400, fontSize: '20px', letterSpacing: '0.06em', textTransform: 'uppercase' } },
  { name: 'Mattel',         style: { fontFamily: fontUI, fontWeight: 800, fontSize: '22px', letterSpacing: '0.02em' } },
  { name: 'Ford',           style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 500, fontSize: '26px', letterSpacing: '-0.01em' } },
  { name: 'Deloitte.',      style: { fontFamily: fontUI, fontWeight: 700, fontSize: '22px', letterSpacing: '-0.02em' } },
  { name: 'TD Bank',        style: { fontFamily: fontUI, fontWeight: 700, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'Erie Insurance', style: { fontFamily: fontDisplay, fontWeight: 500, fontSize: '20px', letterSpacing: '-0.01em' } },
  { name: 'Genentech',      style: { fontFamily: fontUI, fontWeight: 600, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'qedit',          style: { fontFamily: fontUI, fontWeight: 700, fontSize: '24px', letterSpacing: '-0.02em' } },
  { name: 'ZKProof',        style: { fontFamily: fontUI, fontWeight: 800, fontSize: '22px', letterSpacing: '0.02em', textTransform: 'uppercase' } },
  { name: 'Crusoe',         style: { fontFamily: fontDisplay, fontWeight: 500, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'Molson Coors',   style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: 'TENT',           style: { fontFamily: fontUI, fontWeight: 500, fontSize: '20px', letterSpacing: '0.18em' } },
  { name: 'Zone7',          style: { fontFamily: fontUI, fontWeight: 800, fontSize: '22px', letterSpacing: '-0.01em' } },
  { name: '+ more',         style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: '22px', letterSpacing: '-0.01em', opacity: 0.6 } },
];
