/**
 * Open Graph card generator — satori + resvg.
 *
 * Renders a 1200×630 PNG per page, mesh-tinted by the post's accent color
 * (or by a generic palette for non-Field-Note pages). Called from the static
 * endpoint at `src/pages/og/[...slug].png.ts`, which runs at build time on
 * Vercel, so each preview card is baked into `dist/og/...` as a real PNG.
 *
 * Fonts ship as .woff via @fontsource/* in node_modules; satori accepts
 * WOFF directly (no TTF conversion required). The files are copied into
 * src/assets/fonts/ so the build doesn't reach into node_modules.
 */
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs/promises';
import path from 'node:path';
import { C } from './mesh';

// Anchor to project root via process.cwd() — Vite rewrites `import.meta.url`
// after bundling, so a relative path from this file doesn't survive into
// the build output. `npm run build` and `astro dev` both run from the
// project root, so this is stable.
const FONTS_DIR = path.resolve(process.cwd(), 'src/assets/fonts');

// ─── JSX factory ───────────────────────────────────────────────────────────
// Satori walks a plain `{ type, props }` tree — no React needed. We declare
// our own factory so this file can use JSX without importing React, while
// the rest of the codebase keeps its React-via-Astro setup untouched.
function h(type: any, props: any, ...children: any[]): any {
  const flat = children.flat().filter((c) => c != null && c !== false);
  return { type, props: { ...(props ?? {}), children: flat.length === 1 ? flat[0] : flat } };
}

// ─── Font loading (cached across calls) ────────────────────────────────────
let fontCache: Awaited<ReturnType<typeof loadFonts>> | null = null;
async function loadFonts() {
  const [regular, italic, ui] = await Promise.all([
    fs.readFile(path.join(FONTS_DIR, 'Fraunces-Regular.woff')),
    fs.readFile(path.join(FONTS_DIR, 'Fraunces-Italic.woff')),
    fs.readFile(path.join(FONTS_DIR, 'SpaceGrotesk-Bold.woff')),
  ]);
  return [
    { name: 'Fraunces',     data: regular, weight: 400 as const, style: 'normal' as const },
    { name: 'Fraunces',     data: italic,  weight: 400 as const, style: 'italic' as const },
    { name: 'Space Grotesk', data: ui,     weight: 700 as const, style: 'normal' as const },
  ];
}

// ─── Card spec ─────────────────────────────────────────────────────────────
const W = 1200;
const H = 630;

export interface OGCardSpec {
  /** Big Fraunces headline (1–3 words ideal, but auto-scales). */
  title: string;
  /** Optional kicker above the title (e.g. "Essay · Field Notes"). */
  kicker?: string;
  /** Optional one-line blurb under the title. */
  subtitle?: string;
  /** Accent color (the title's italic flourish picks it up). */
  tint?: string;
  /** Background base color. Defaults to `paper`. */
  base?: string;
  /** Display word lifted from the title to gradient-italicize. If omitted,
   *  the whole title renders in solid `ink`. Mirrors the home/recipe hero. */
  displayWord?: string;
}

/**
 * Auto-shrink the title font size so long headlines still fit in the card.
 * Rough heuristic — works well for 1–10 word titles up to ~100 chars. The
 * title container is `flex-wrap: wrap`, so anything past one line wraps
 * gracefully; this sizing keeps a 2-line headline visually balanced.
 */
function titleSize(title: string): number {
  const len = title.length;
  if (len <= 14) return 124;
  if (len <= 22) return 104;
  if (len <= 36) return 84;
  if (len <= 54) return 68;
  if (len <= 72) return 56;
  return 48;
}

/**
 * Build the satori element tree for one card. Background is a solid base
 * color with three overlapping colored discs giving the "mesh blob" feel
 * (satori's radial-gradient support is finicky enough that fat low-opacity
 * circles render more reliably across the cards we care about).
 */
function card(spec: OGCardSpec) {
  const tint = spec.tint ?? C.coral;
  const base = spec.base ?? C.paper;

  // Three accent blobs — one matches the tint, two are palette neighbors.
  // Position varies slightly so back-to-back cards don't all look identical.
  const blob = (color: string, top: number, left: number, size: number, opacity: number) =>
    h('div', {
      style: {
        display: 'flex',
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '9999px',
        background: color,
        opacity,
      },
    });

  // Render the title. Each "piece" of the title becomes its own `<div>`
  // inside a `display: flex; flex-wrap: wrap` row. Wrapping every text run
  // in its own element avoids satori's "mixed text + element children"
  // restriction (it requires explicit display modes whenever a node has
  // more than one child node).
  //
  // If a display word is supplied, that piece renders in the tint color in
  // italic; the rest stays in `ink`. Otherwise the whole title renders flat.
  const titlePieces: Array<{ text: string; italic?: boolean; color?: string }> = [];
  if (spec.displayWord && spec.title.toLowerCase().includes(spec.displayWord.toLowerCase())) {
    const lower = spec.title.toLowerCase();
    const dwLower = spec.displayWord.toLowerCase();
    const i = lower.indexOf(dwLower);
    const before = spec.title.slice(0, i);
    const word = spec.title.slice(i, i + spec.displayWord.length);
    const after = spec.title.slice(i + spec.displayWord.length);
    if (before) titlePieces.push({ text: before });
    titlePieces.push({ text: word, italic: true, color: tint });
    if (after) titlePieces.push({ text: after });
    titlePieces.push({ text: '.', color: tint });
  } else {
    titlePieces.push({ text: spec.title });
  }

  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        backgroundColor: base,
        padding: '64px 72px',
        fontFamily: '"Fraunces", serif',
        color: C.ink,
        overflow: 'hidden',
      },
    },
    // Mesh-blob backdrop ----------------------------------------------------
    blob(tint,      -180, -160, 720, 0.45),
    blob(C.butter,  -140,  720, 620, 0.55),
    blob(C.lavender, 340,  860, 540, 0.40),
    blob(C.mint,     420, -120, 480, 0.40),

    // Top row — site name --------------------------------------------------
    h(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
          fontSize: '22px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: C.ink,
        },
      },
      h('div', {
        style: {
          width: '44px',
          height: '44px',
          borderRadius: '9999px',
          background: `linear-gradient(135deg, ${C.coral}, ${C.plum} 55%, ${C.teal})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: C.paper,
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          letterSpacing: '0.04em',
        },
      }, 'DK'),
      h('div', { style: { display: 'flex' } }, 'Dalia Katan'),
    ),

    // Middle — kicker + title + subtitle -----------------------------------
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          maxWidth: '1000px',
        },
      },
      spec.kicker
        ? h(
            'div',
            {
              style: {
                display: 'flex',
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: tint,
              },
            },
            spec.kicker,
          )
        : null,
      h(
        'div',
        {
          style: {
            fontFamily: '"Fraunces", serif',
            fontWeight: 400,
            fontSize: `${titleSize(spec.title)}px`,
            lineHeight: 1.02,
            letterSpacing: '-0.025em',
            color: C.ink,
            display: 'flex',
            flexWrap: 'wrap',
          },
        },
        ...titlePieces.map((p) =>
          h(
            'div',
            {
              style: {
                display: 'flex',
                fontStyle: p.italic ? 'italic' : 'normal',
                color: p.color ?? C.ink,
                // pre-wrap preserves the leading space we use to glue
                // pieces together (e.g. "Challah" + " Baking") while
                // still allowing the line to break at internal spaces.
                whiteSpace: 'pre-wrap',
              },
            },
            p.text,
          ),
        ),
      ),
      spec.subtitle
        ? h(
            'div',
            {
              style: {
                display: 'flex',
                fontFamily: '"Fraunces", serif',
                fontStyle: 'italic',
                fontSize: '28px',
                lineHeight: 1.4,
                color: C.inkSoft,
                maxWidth: '900px',
              },
            },
            spec.subtitle,
          )
        : null,
    ),

    // Bottom row — domain --------------------------------------------------
    h(
      'div',
      {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 700,
          fontSize: '20px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: C.inkSoft,
        },
      },
      h('div', { style: { display: 'flex' } }, 'daliakatan.com'),
      // Small accent dot in the bottom-right corner — a real div instead of
      // a glyph, so we don't depend on Space Grotesk covering ✺/✦ dingbats.
      h('div', {
        style: {
          display: 'flex',
          width: '14px',
          height: '14px',
          borderRadius: '9999px',
          background: tint,
          alignSelf: 'center',
        },
      }),
    ),
  );
}

/**
 * Render a card to PNG bytes. Use from a static endpoint.
 */
export async function renderOGPng(spec: OGCardSpec): Promise<Buffer> {
  if (!fontCache) fontCache = await loadFonts();
  const svg = await satori(card(spec), {
    width: W,
    height: H,
    fonts: fontCache,
  });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: W } });
  return resvg.render().asPng();
}
