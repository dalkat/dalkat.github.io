/**
 * /speaker page content data — three POV themes that organize every
 * talk, lecture, podcast, panel, and publication onto one timeline.
 * Each entry renders as a row inside a tinted theme block.
 *
 * Adapted from the design handoff (.design-ref/design_handoff_speaker_page/
 * mesh-pages/speaker-themes-shared.jsx) with content reconciled against
 * the previous Jekyll _data/speaker.yml so nothing from the live site is
 * dropped — including the role context (Speaker, Guest Lecturer,
 * Moderator, etc.) which the design ref omitted but is important for
 * each entry's framing.
 */
import { C } from '@/lib/mesh';

export interface SpeakerItem {
  /** Small uppercase chip label, e.g. "Podcast", "University Lecture",
   *  "Organizer & Moderator". CSS uppercases at render time. */
  kind: string;
  title: string;
  /** Venue or publication. Rendered after the optional role on the
   *  italic sub-line, e.g. "Guest · The Prodcast". */
  where: string;
  /** Optional role label (e.g. "Speaker", "Guest Lecturer",
   *  "Interview Guest", "Moderator"). When set, surfaces ahead of
   *  the venue: "Role · Venue". Omit for author/written entries
   *  where the role is implicit, and for entries where the kind chip
   *  already names the role (e.g. "Organizer & Moderator"). */
  role?: string;
  /** Number or range string like "2025–6". */
  year: number | string;
}

export interface SpeakerTheme {
  id: string;
  title: string;
  /** Accent color — dot, rule under H3, chip tint. */
  tint: string;
  items: SpeakerItem[];
}

export const SPEAKER_THEMES: SpeakerTheme[] = [
  {
    id: 'entrepreneurship',
    title: 'The startup journey',
    tint: C.teal,
    items: [
      { kind: 'Essay',          title: 'Why First-Gen Founders Need to Learn to Spend',                where: "Entrepreneur's Handbook",                                              year: 2023 },
      { kind: 'Podcast',        title: 'Building Early-stage Startups & Adjusting to Market Signals', where: 'The Prodcast',                          role: 'Guest',                year: 2021 },
      { kind: 'Podcast',        title: 'Startup Journey — 0 to 1, Retention, Virality',               where: 'BRAVE',                                 role: 'Guest',                year: 2021 },
      { kind: 'AMA',            title: 'Entrepreneurship AMA',                                         where: 'Journal',                               role: 'Guest',                year: 2021 },
      { kind: 'Twitter Spaces', title: 'Building Presently',                                           where: 'Journal',                               role: 'Live Audio Guest',     year: 2021 },
      { kind: 'Q&A',            title: 'Creative Sabbaticals',                                         where: 'Princeton Center for Entrepreneurship', role: 'Interview Guest',      year: 2019 },
    ],
  },
  {
    id: 'product',
    title: 'Product & business',
    tint: C.coral,
    items: [
      { kind: 'Newsletter',            title: 'Interspace: Architectural Thinking for Product Design', where: 'Substack',                                                                          year: '2025–6' },
      { kind: 'Workshop',              title: 'Mobile: Meet Your Users Where They Are',                where: 'Stripe',                                role: 'Speaker',                          year: 2024 },
      { kind: 'Organizer & Moderator', title: 'Presently Speaker Series',                              where: 'Organized and moderated a 10-part founder speaker series',                          year: 2021 },
      { kind: 'University Lecture',    title: 'Digital Networks and Growth',                            where: 'Princeton University',                 role: 'Guest Lecturer',                   year: 2020 },
      { kind: 'Podcast',               title: 'Changemakers',                                           where: 'Changemakers',                         role: 'Guest',                            year: 2020 },
      { kind: 'University Lecture',    title: 'Human-Centered Design & Storytelling',                   where: 'Princeton University',                 role: 'Guest Lecturer',                   year: 2019 },
      { kind: 'Workshop',              title: 'Introduction to Human-Centered Design',                  where: 'NameCoach Fellowship',                 role: 'Speaker & Workshop Leader',        year: 2019 },
      { kind: 'Panel',                 title: 'Women in Marketing',                                     where: 'Princeton University',                 role: 'Moderator',                        year: 2015 },
      { kind: 'Organizer & Moderator', title: 'Princeton Marketing Conference',                         where: 'Organized and led the conference',                                                  year: 2015 },
      { kind: 'Workshop',              title: 'An Algorithm for Growth',                                where: 'Princeton Social Entrepreneurship Conference', role: 'Speaker',                   year: 2015 },
      { kind: 'Textbook',              title: "Entrepreneurial Finance: Uber's Path to Success",       where: 'MIT Press',                                                                          year: 2014 },
    ],
  },
  {
    id: 'culture',
    title: 'Culture-building',
    tint: C.plum,
    items: [
      { kind: 'Whitepaper', title: 'A New Home at Work: Fostering Inclusion for Refugee Employees',                   where: 'Deloitte',                                                year: 2019 },
      { kind: 'Conference', title: 'Bridging Cultural Divides at Work',                                                where: 'Women Design Talks',     role: 'Speaker',                year: 2019 },
      { kind: 'Podcast',    title: 'Creating More Inclusive Workplaces',                                               where: 'Way We Lead',            role: 'Guest',                  year: 2019 },
      { kind: 'Event',      title: 'Fostering Understanding & Inclusion in Israel-Palestine',                          where: 'IPF Atid',               role: 'Speaker',                year: 2019 },
      { kind: 'Whitepaper', title: 'Business Practice Redesign & The Future of Work',                                  where: 'Deloitte Center for the Edge',                            year: 2018 },
      { kind: 'Event',      title: 'Using Workplace Diversity to Bridge Divides',                                      where: 'Deloitte D-Talks',       role: 'Speaker',                year: 2018 },
      { kind: 'Event',      title: 'Retaining Top Talent Through a Culture of Intrapreneurship',                       where: 'Deloitte',               role: 'Speaker',                year: 2018 },
      { kind: 'Book',       title: 'Improving Arab-Jewish Relations in Israel Through Workforce Integration',          where: 'Princeton University',                                  year: 2015 },
    ],
  },
];

/**
 * Pale palette tints wash out as chip text. Map those tints to darker
 * companions so every kind chip has the same legibility floor. Darker
 * tints (coral, plum, teal) are themselves dark enough — pass through.
 *
 * Mirrors `speakerChipInk` in the design handoff.
 */
const CHIP_INK_BY_TINT: Record<string, string> = {
  [C.sky]:    '#3a5b8c',
  [C.butter]: '#8a6a1f',
  [C.mint]:   '#3d7a5a',
  [C.peach]:  '#a8552a',
  [C.rose]:   '#a64158',
};
export function chipInkFor(tint: string): string {
  return CHIP_INK_BY_TINT[tint] ?? tint;
}
