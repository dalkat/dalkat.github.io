/**
 * Side quests — things I built outside of the day job. Featured on
 * /quests.
 *
 * Each tile renders in the same mesh-card style used elsewhere on the site
 * (PostTile-shaped but bigger). Quests with `status: 'coming-soon'` skip
 * the outbound link and render a pill instead — used today for Trail Mix
 * Method, which exists as a write-up at /notes/trailmix but hasn't
 * shipped as an interactive tool yet.
 *
 * The optional `award` field surfaces a small kicker pill in the
 * top-right of the card (used for the ProductHunt #3 Product of the Day
 * badge on giftpicker.io).
 *
 * Copy here is intentionally voicey-placeholder; Dalia will tighten.
 */
import { C } from '@/lib/mesh';

export type QuestStatus = 'live' | 'coming-soon';

export interface QuestAward {
  /** Short text shown after the icon, e.g. "#3 Product of the Day on ProductHunt". */
  text: string;
  /** Single-character icon shown left of the text (emoji works). */
  icon?: string;
  /** Optional outbound link (e.g. the ProductHunt launch page). When set,
   *  the badge becomes a clickable anchor — distinct from the card's
   *  primary href. */
  href?: string;
}

export interface Quest {
  /** Display name — Fraunces, big. */
  title: string;
  /** Short pill anchored to the thumb corner (e.g. "Web app", "Tool", "Practice"). */
  kind: string;
  /** Year it shipped (omitted for coming-soon entries). */
  year?: number;
  /** 2–3 sentences of plain English. */
  blurb: string;
  /** Where to send the visitor. Omit when status === 'coming-soon'. */
  href?: string;
  /** Defaults to 'live'. */
  status?: QuestStatus;
  /** Mesh-thumb accent color (also used for the year tag + CTA color). */
  tint: string;
  /** Optional product screenshot. When set, replaces the mesh thumb with
   *  an object-cover <img>. Path must be served from /public. */
  image?: string;
  /** Optional honor — renders a coral-mesh pill in the top-right corner. */
  award?: QuestAward;
}

export const QUESTS: Quest[] = [
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
      href: 'https://www.producthunt.com/posts/giftpicker-by-presently',
    },
  },
  {
    title: 'Do Now',
    kind: 'Tool',
    year: 2019,
    tint: C.plum,
    href: '/quests/do-now',
    blurb:
      "Pull a card when you can't decide what to do next. Each one is a small, doable thing: a phone call, a walk, a sketch. Sized to fit in the gap between checking your inbox and meaning to start something real.",
  },
  {
    title: 'Trail Mix Method',
    kind: 'Practice',
    tint: C.teal,
    status: 'coming-soon',
    blurb:
      "A planning practice for people whose brains don't run on calendars. Sort your week into energy-shaped mixes (focus, social, admin, restore) and build days that fit how you actually work. Interactive version coming soon; read the method in Field Notes.",
  },
];
