/**
 * Side quests — things I built outside of the day job. Featured on
 * /side-quests.
 *
 * Each tile renders in the same mesh-card style used elsewhere on the site
 * (PostTile-shaped but bigger). Quests with `status: 'coming-soon'` skip
 * the outbound link and render a pill instead — used today for Trail Mix
 * Method, which exists as a write-up at /field-notes/trail-mix-method but
 * hasn't shipped as an interactive tool yet.
 *
 * The optional `award` field surfaces a small kicker pill above the title
 * (used for the ProductHunt #3 Product of the Day badge on giftpicker.io).
 *
 * Copy here is intentionally voicey-placeholder; Dalia will tighten.
 */
import { C } from '@/lib/mesh';

export type SideQuestStatus = 'live' | 'coming-soon';

export interface SideQuestAward {
  /** Short text shown after the icon, e.g. "#3 Product of the Day on ProductHunt". */
  text: string;
  /** Single-character icon shown left of the text (emoji works). */
  icon?: string;
}

export interface SideQuest {
  /** Display name — Fraunces, big. */
  title: string;
  /** Short pill above the title (e.g. "Web app", "Tool", "Practice"). */
  kind: string;
  /** Year it shipped (omitted for coming-soon entries). */
  year?: number;
  /** 2–3 sentences of plain English. */
  blurb: string;
  /** Where to send the visitor. Omit when status === 'coming-soon'. */
  href?: string;
  /** Defaults to 'live'. */
  status?: SideQuestStatus;
  /** Mesh-thumb accent color (also used for the year tag + CTA color). */
  tint: string;
  /** Optional product screenshot. When set, replaces the mesh thumb with
   *  an object-cover <img>. Path must be served from /public. */
  image?: string;
  /** Optional honor — gets a small kicker pill above the title. */
  award?: SideQuestAward;
}

export const SIDE_QUESTS: SideQuest[] = [
  {
    title: 'giftpicker.io',
    kind: 'Web app',
    year: 2021,
    tint: C.coral,
    href: 'https://giftpicker.io',
    image: '/img/giftpicker-quiz.png',
    blurb:
      "Stuck on what to get someone? Answer a handful of questions about the person — vibe, budget, last thing that made them smile — and get a curated shortlist in under a minute. A weekend project that picked up a quiet following around the holidays.",
    award: {
      icon: '🏆',
      text: '#3 Product of the Day on ProductHunt',
    },
  },
  {
    title: 'Do Now',
    kind: 'Tool',
    year: 2019,
    tint: C.plum,
    href: '/do-now',
    blurb:
      "Pull a card when you can't decide what to do next. Each one is a small, doable thing — a phone call, a walk, a sketch — sized to fit in the gap between checking your inbox and meaning to start something real.",
  },
  {
    title: 'Trail Mix Method',
    kind: 'Practice',
    tint: C.teal,
    status: 'coming-soon',
    blurb:
      "A planning practice for people whose brains don't run on calendars. Sort your week into energy-shaped mixes — focus, social, admin, restore — and build days that fit how you actually work. Interactive version coming soon; read the method in Field Notes.",
  },
];
