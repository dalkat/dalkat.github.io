/**
 * Static OG card endpoint.
 *
 * Generates one 1200×630 PNG per page at build time. The slug becomes the
 * URL path the card is *for* — e.g. `/og/field-notes/sabbatical-update.png`
 * is the preview card for `/field-notes/sabbatical-update/`. Top-level pages
 * use slugs like `home`, `about`, `strategy`, etc.
 *
 * Each page's `Base.astro` derives its `og:image` URL from its own path so
 * shared links automatically get the right card.
 */
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOGPng, type OGCardSpec } from '@/lib/og';
import { C, tintForType } from '@/lib/mesh';

const TYPE_LABELS: Record<string, string> = {
  essay: 'Essay',
  'field-guide': 'Field guide',
  framework: 'Framework',
  report: 'Report',
  tool: 'Tool',
  recipe: 'Recipe',
  letter: 'Letter',
  notes: 'Notes',
  travelogue: 'Travelogue',
  video: 'Video',
};

// Per-piece overrides for the gradient-italic display word, matching what
// the RecipeLayout hero does on the actual page. Falls back to no display
// word, which renders the whole title flat (still tinted).
const DISPLAY_WORDS: Record<string, string> = {
  'challah-recipe': 'Challah',
  'baguette-recipe': 'Baguette',
};

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await getCollection('for-you', ({ data }) => !data.draft);

  // Per-Field-Note cards ----------------------------------------------------
  const fieldNoteCards = entries
    .filter((e) => e.id !== 'do-now-generator')
    .map((entry) => {
      const tint = tintForType(entry.data.type);
      const typeLabel = TYPE_LABELS[entry.data.type] ?? entry.data.type;
      const spec: OGCardSpec = {
        title: entry.data.title,
        kicker: `${typeLabel} · Field Notes`,
        subtitle: entry.data.blurb,
        tint,
        base: tint === C.teal ? C.mint : tint === C.plum ? C.paper2 : C.peach,
        displayWord: DISPLAY_WORDS[entry.id],
      };
      return {
        params: { slug: `field-notes/${entry.id}` },
        props: { spec },
      };
    });

  // Top-level page cards ----------------------------------------------------
  const siteDescription = 'What might life look like if designed around curiosity?';
  const topLevelCards: { params: { slug: string }; props: { spec: OGCardSpec } }[] = [
    {
      params: { slug: 'home' },
      props: {
        spec: {
          title: 'Dalia Katan',
          subtitle: siteDescription,
          tint: C.coral,
          base: C.peach,
          displayWord: 'Dalia',
        },
      },
    },
    {
      params: { slug: 'about' },
      props: {
        spec: {
          title: 'About',
          kicker: 'Hello',
          subtitle: 'Strategist, builder, and writer. Currently advising on culture, product, and what to ship next.',
          tint: C.plum,
          base: C.paper2,
        },
      },
    },
    {
      params: { slug: 'strategy' },
      props: {
        spec: {
          title: 'Strategy work',
          kicker: 'For teams',
          subtitle: 'Helping leaders find the next move — and the courage to make it.',
          tint: C.teal,
          base: C.mint,
        },
      },
    },
    {
      params: { slug: 'speaker' },
      props: {
        spec: {
          title: 'Speaker',
          kicker: 'On stage',
          subtitle: 'Talks on curiosity, creative practice, and building teams that ship.',
          tint: C.coral,
          base: C.peach,
        },
      },
    },
    {
      params: { slug: 'field-notes' },
      props: {
        spec: {
          title: 'Field Notes',
          kicker: 'Library',
          subtitle: 'Essays, tools, and reports from a life-by-curiosity.',
          tint: C.plum,
          base: C.paper2,
          displayWord: 'Field',
        },
      },
    },
    {
      params: { slug: 'projects' },
      props: {
        spec: {
          title: 'Side projects',
          kicker: 'Things I made',
          subtitle: 'Weekend tools, half-built experiments, and things I made because I wanted them to exist.',
          tint: C.coral,
          base: C.peach,
          displayWord: 'projects',
        },
      },
    },
    {
      params: { slug: 'do-now' },
      props: {
        spec: {
          title: 'Do Now',
          kicker: 'A small tool',
          subtitle: 'Pull a card. Do the thing. Move on with your afternoon.',
          tint: C.coral,
          base: C.butter,
        },
      },
    },
  ];

  return [...fieldNoteCards, ...topLevelCards];
};

export const GET: APIRoute = async ({ props }) => {
  const { spec } = props as { spec: OGCardSpec };
  const png = await renderOGPng(spec);
  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
