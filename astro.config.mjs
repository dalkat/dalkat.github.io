// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://daliakatan.com',
  output: 'static',
  adapter: vercel({
    // Privacy-friendly page-view + Core Web Vitals tracking via Vercel
    // Web Analytics. Free tier covers up to 2.5k events/mo. The adapter
    // injects the script and ingestion endpoint automatically.
    webAnalytics: { enabled: true },
  }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }), // we'll provide our own base styles
    sitemap(),
  ],
  redirects: {
    // Legacy → canonical (Astro auto-normalizes trailing slashes)
    '/strategy': '/consulting',
    '/speaker': '/talks',
    '/for-you': '/notes',
    '/field-notes': '/notes',
    '/side-quests': '/quests',
    '/do-now': '/quests/do-now',
    '/trailmix': '/notes/trailmix/',
    '/update-1': '/notes/sabbatical-update/',
    '/update-2': '/notes/sabbatical-update-2/',
    '/challah-recipe': '/notes/challah-recipe/',
    '/baguette-recipe': '/notes/baguette-recipe/',
    '/inclusion': '/notes',
    '/for-you/report-teams.html': '/notes/report-teams/',
    '/for-you/report-refugee.html': '/notes/report-refugee/',
    '/for-you/report-teams': '/notes/report-teams/',
    '/for-you/report-refugee': '/notes/report-refugee/',
    // /field-notes/<slug>/ → /notes/<slug>/ (migration for the brief window
    // when these URLs were live on the redesign-prep preview deploys)
    '/field-notes/sabbatical-update': '/notes/sabbatical-update/',
    '/field-notes/sabbatical-update-2': '/notes/sabbatical-update-2/',
    '/field-notes/challah-recipe': '/notes/challah-recipe/',
    '/field-notes/baguette-recipe': '/notes/baguette-recipe/',
    '/field-notes/report-refugee': '/notes/report-refugee/',
    '/field-notes/report-teams': '/notes/report-teams/',
    '/field-notes/trail-mix-method': '/notes/trailmix/',
  },
});
