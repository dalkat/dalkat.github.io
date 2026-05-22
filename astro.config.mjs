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
    webAnalytics: { enabled: false },
  }),
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }), // we'll provide our own base styles
    sitemap(),
  ],
  redirects: {
    // Legacy → canonical (Astro auto-normalizes trailing slashes)
    '/for-you': '/field-notes',
    '/trailmix': '/field-notes/trail-mix-method/',
    '/do-now': '/field-notes/do-now-generator/',
    '/update-1': '/field-notes/sabbatical-update/',
    '/update-2': '/field-notes/sabbatical-update-2/',
    '/challah-recipe': '/field-notes/challah-recipe/',
    '/baguette-recipe': '/field-notes/baguette-recipe/',
    '/inclusion': '/field-notes',
    '/for-you/report-teams.html': '/field-notes/report-teams/',
    '/for-you/report-refugee.html': '/field-notes/report-refugee/',
    '/for-you/report-teams': '/field-notes/report-teams/',
    '/for-you/report-refugee': '/field-notes/report-refugee/',
  },
});
