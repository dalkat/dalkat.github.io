/**
 * Side projects featured on /projects.
 *
 * Each tile renders in the same mesh-card style used elsewhere on the site
 * (PostTile-shaped but bigger). Projects with `status: 'coming-soon'` skip
 * the outbound link and render a pill instead — used today for Trail Mix
 * Method, which exists as a write-up at /field-notes/trail-mix-method but
 * hasn't shipped as an interactive tool yet.
 *
 * Copy here is intentionally voicey-placeholder; Dalia will tighten.
 */
import { C } from '@/lib/mesh';

export type ProjectStatus = 'live' | 'coming-soon';

export interface Project {
  /** Display name — Fraunces, big. */
  title: string;
  /** Short pill above the title (e.g. "Web app", "Tool", "Practice"). */
  kind: string;
  /** 2–3 sentences of plain English. */
  blurb: string;
  /** Where to send the visitor. Omit when status === 'coming-soon'. */
  href?: string;
  /** Defaults to 'live'. */
  status?: ProjectStatus;
  /** Mesh-thumb accent color. */
  tint: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'giftpicker.io',
    kind: 'Web app',
    tint: C.coral,
    href: 'https://giftpicker.io',
    blurb:
      "Stuck on what to get someone? Answer a handful of questions about the person — vibe, budget, last thing that made them smile — and get a curated shortlist in under a minute. A weekend project that picked up a quiet following around the holidays.",
  },
  {
    title: 'Do Now',
    kind: 'Tool',
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
