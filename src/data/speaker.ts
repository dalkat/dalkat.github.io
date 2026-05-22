/**
 * /speaker page content data — extracted from the design handoff
 * (mesh-pages/speaker.jsx).
 */
import { C } from '@/lib/mesh';

/* ──────────────────────────────────────────────
 * Topics — filter chip taxonomy.
 * Display order = order here.
 * ────────────────────────────────────────────── */
export interface SpeakerTopic {
  id: string;
  label: string;
  tint: string;
}

export const TOPICS: SpeakerTopic[] = [
  { id: 'all',     label: 'All',                    tint: C.ink },
  { id: 'product', label: 'Product & Growth',       tint: C.coral },
  { id: 'culture', label: 'Culture & International', tint: C.plum },
  { id: 'uni',     label: 'University',             tint: C.teal },
  { id: 'pod',     label: 'Podcasts & Live',        tint: C.sky },
];

/* ──────────────────────────────────────────────
 * Talks — every speaking engagement on one timeline.
 * A talk can have multiple topics (so e.g. a Princeton
 * lecture on product growth lights up under both filters).
 * ────────────────────────────────────────────── */
export interface Talk {
  title: string;
  kind: string;
  where: string;
  role: string;
  year: number;
  topics: string[];
}

export const TALKS: Talk[] = [
  { title: 'Mobile: Meet Your Users Where They Are', kind: 'Workshop', where: 'Stripe', role: 'Speaker', year: 2024, topics: ['product'] },
  { title: 'Building Early-stage Startups & Adjusting to Market Signals', kind: 'Podcast', where: 'The Prodcast', role: 'Guest', year: 2021, topics: ['product', 'pod'] },
  { title: 'Startup Journey — 0 to 1, Retention, Virality', kind: 'Podcast', where: 'BRAVE', role: 'Guest', year: 2021, topics: ['product', 'pod'] },
  { title: 'Entrepreneurship "AMA"', kind: 'AMA', where: 'Journal', role: 'Guest', year: 2021, topics: ['product'] },
  { title: 'Building Presently', kind: 'Twitter Spaces', where: 'Journal', role: 'Live Audio Guest', year: 2021, topics: ['product', 'pod'] },
  { title: 'Digital Networks and Growth', kind: 'University Lecture', where: 'Princeton University', role: 'Guest Lecturer', year: 2020, topics: ['product', 'uni'] },
  { title: 'Changemakers', kind: 'Podcast', where: 'Changemakers', role: 'Guest', year: 2020, topics: ['culture', 'pod'] },
  { title: 'Human-Centered Design & Storytelling', kind: 'University Lecture', where: 'Princeton University', role: 'Guest Lecturer', year: 2019, topics: ['product', 'uni'] },
  { title: 'Introduction to Human-Centered Design', kind: 'Workshop', where: 'NameCoach Fellowship', role: 'Speaker & Workshop Leader', year: 2019, topics: ['product'] },
  { title: 'Fostering Understanding & Inclusion in Israel-Palestine', kind: 'Event', where: 'IPF Atid', role: 'Speaker', year: 2019, topics: ['culture'] },
  { title: 'Bridging Cultural Divides at Work', kind: 'Conference', where: 'Women Design Talks', role: 'Speaker', year: 2019, topics: ['culture'] },
  { title: 'Creating More Inclusive Workplaces', kind: 'Podcast', where: 'Way We Lead', role: 'Guest', year: 2019, topics: ['culture', 'pod'] },
  { title: 'Creative Sabbaticals', kind: 'Q&A', where: 'Princeton Center for Entrepreneurship', role: 'Interview Guest', year: 2019, topics: ['uni'] },
  { title: 'Using Workplace Diversity to Bridge Divides', kind: 'Event', where: 'Deloitte D-Talks', role: 'Speaker', year: 2018, topics: ['culture'] },
  { title: 'Retaining Top Talent Through a Culture of Intrapreneurship', kind: 'Event', where: 'Deloitte', role: 'Speaker', year: 2018, topics: ['culture'] },
  { title: 'An Algorithm for Growth', kind: 'Workshop', where: 'Princeton Social Entrepreneurship Conference', role: 'Speaker', year: 2015, topics: ['product', 'uni'] },
  { title: 'Women in Marketing', kind: 'Panel', where: 'Princeton University', role: 'Moderator', year: 2015, topics: ['culture', 'uni'] },
];

/* ──────────────────────────────────────────────
 * Publications — book pinned first (featured), rest
 * in reverse-chronological. Each carries its own tint.
 * year is string | number to allow ranges like "2025–6".
 * ────────────────────────────────────────────── */
export interface Publication {
  title: string;
  where: string;
  kind: string;
  year: string | number;
  tint: string;
  featured?: boolean;
}

export const PUBLICATIONS: Publication[] = [
  { title: 'Improving Arab-Jewish Relations in Israel Through Workforce Integration', where: 'Princeton University', kind: 'Book',       year: 2015,      tint: C.plum,  featured: true },
  { title: 'Interspace: Bringing Architectural Thinking to Product Design',           where: 'Substack',              kind: 'Newsletter', year: '2025–6',  tint: C.coral },
  { title: 'The Paradox of Being Scrappy: Why First-Gen Founders Need to Learn to Spend', where: "Entrepreneur's Handbook", kind: 'Article', year: 2023, tint: C.coral },
  { title: "9 Steps You Can Take to Unlock Your Company's Competitive Edge",          where: 'The Startup · LinkedIn',  kind: 'Article', year: 2019, tint: C.coral },
  { title: 'A New Home at Work: A Guidebook to Fostering Inclusion for Refugee Employees', where: 'Deloitte',           kind: 'Whitepaper', year: 2019, tint: C.plum },
  { title: 'Business Practice Redesign & The Future of Work: Moving From Best to Better and Better', where: 'Deloitte Center for the Edge', kind: 'Whitepaper', year: 2018, tint: C.teal },
  { title: "Entrepreneurial Finance: Uber's Path to Success (Case Study)",            where: 'MIT Press',             kind: 'Textbook',   year: 2014,     tint: C.teal },
];
