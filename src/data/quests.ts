/**
 * Side quests – things I built outside of the day job. Featured on
 * /quests.
 *
 * Each tile renders in the same mesh-card style used elsewhere on the site
 * (PostTile-shaped but bigger). Quests with `status: 'coming-soon'` skip
 * the outbound link and render a pill instead – used today for Trail Mix
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
   *  the badge becomes a clickable anchor – distinct from the card's
   *  primary href. */
  href?: string;
}

export interface Quest {
  /** Display name – Fraunces, big. */
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
  /** Optional honor – renders a coral-mesh pill in the top-right corner. */
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
      "Stuck on what to get someone? Answer a few quick questions about them, like the occasion, their interests, and your budget, and get a shortlist of hand-picked gift ideas. We built it at Presently.",
    award: {
      icon: '🏆',
      text: '#3 Product of the Day on ProductHunt',
      href: 'https://www.producthunt.com/posts/giftpicker-by-presently',
    },
  },
  {
    title: 'Do Now',
    kind: 'Tool',
    year: 2018,
    tint: C.plum,
    href: '/quests/do-now',
    blurb:
      "Pull a card when you have free time and can't decide what to do with it. Each one suggests something to try, from a five-minute stretch or a walk to baking challah. I built it to help with decision paralysis.",
  },
  {
    title: 'Trail Mix Method',
    kind: 'Practice',
    tint: C.teal,
    status: 'coming-soon',
    blurb:
      "A way to plan unstructured time without a rigid schedule. Once a week, fill a bag with bite-sized activities across the parts of life you want to invest in, then reach into it whenever you have a free moment. Interactive version coming soon; read the method in Field Notes.",
  },
];
