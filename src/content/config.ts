import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/**
 * Field Notes — type/theme/source controlled vocabularies match the design
 * handoff (mesh-pages/foryou.jsx) and the existing _data/for-you.yml schema
 * we migrated to in the redesign-prep branch.
 */
const fieldNoteType = z.enum([
  'essay',
  'field-guide',
  'framework',
  'report',
  'tool',
  'recipe',
  'letter',
  'notes',
  'travelogue',
  'video',
]);

const fieldNoteTheme = z.enum([
  'entrepreneurship-product',
  'workplace-teambuilding',
  'productivity',
  'personal-essays',
  'food',
]);

const baseFieldNote = z.object({
  title: z.string(),
  type: fieldNoteType,
  theme: fieldNoteTheme,
  source: z.string(), // e.g. "daliakatan.com", "Substack", "Medium", "Deloitte"
  year: z.number().int(),
  read_time: z.number().int().nullable().optional(), // null/omitted for tools ("Toy")
  blurb: z.string(),
});

/** Hosted Field Notes — markdown files, generate their own pages. */
const forYou = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/for-you' }),
  schema: baseFieldNote.extend({
    redirect_from: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    /**
     * Optional photo gallery rendered after the article body in
     * ArticleLayout, matching the design's ImageCarousel styling.
     * Used on the two sabbatical updates (feb19 + oct19 highlight reels).
     */
    highlight_reel: z.array(z.object({
      src: z.string(),
      caption: z.string(),
    })).optional(),
    /**
     * Optional outbound URL for hosted Field Notes that are also published
     * elsewhere (e.g. Slideshare-hosted reports). When set, the report hero
     * renders a "Read the report ↗" CTA pointing to this URL.
     */
    external_url: z.string().url().optional(),
    /**
     * Optional plain-text byline shown under the H1 in ReportLayout —
     * format like "Co-author · January 2018 · Via Deloitte Center for
     * the Edge". Free-form so each report can use its own phrasing.
     */
    byline: z.string().optional(),
  }),
});

/** External Field Notes — data-only entries pointing off-site. */
const forYouExternal = defineCollection({
  loader: file('./src/content/field-notes-external.yaml'),
  schema: baseFieldNote.extend({
    url: z.string().url(),
  }),
});

export const collections = {
  'for-you': forYou,
  'for-you-external': forYouExternal,
};
