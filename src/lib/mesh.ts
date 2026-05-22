/**
 * Mesh — gradient + palette helpers, ported from the design handoff's
 * `mesh-pages/shared.jsx`. Use these primitives across every page.
 */

/** Palette tokens. Mirrors the `C` object in the handoff. */
export const C = {
  lavender: '#dcd0ff',
  lilac:    '#cbb8ff',
  mint:     '#cdf2d8',
  sky:      '#cde4ff',
  peach:    '#ffd9c2',
  butter:   '#fff2b3',
  coral:    '#ff8a7a',
  plum:     '#9a7be6',
  teal:     '#5ec5c0',
  rose:     '#f4a3b8',
  ink:      '#221a3a',
  inkSoft:  '#4a3f6e',
  paper:    '#fbf7ee',
  paper2:   '#f3edf9',
  white:    '#ffffff',
} as const;

export type ColorToken = keyof typeof C;

/** A mesh "blob": [color, x%, y%, size%]. */
export type MeshBlob = [color: string, x: number, y: number, size: number];

/**
 * Build a stacked radial-gradient backdrop on a base color.
 *
 * VERBATIM v7 meshBg (from mesh-pages/shared-v7-override.jsx).
 *
 * The v7 implementation naively appends "00" to the blob color string.
 * For 6-digit hex like "#ffd9c2" → "#ffd9c200" (valid: opaque → transparent).
 * For 8-digit alpha hex like "#ff8a7aaa" → "#ff8a7aaa00" (10 digits, INVALID
 * hex — Chrome rejects the whole gradient stop, so that blob silently fails
 * to render).
 *
 * This is a *deliberate* preservation of the v7 quirk: alpha-suffixed blobs
 * are skipped, which gives the v7 mesh its quieter density. mesh3.html
 * mounts this exact behavior. Do NOT "fix" by normalizing 8-digit hex back
 * — the design depends on those blobs vanishing.
 */
export function meshBg({ base, blobs }: { base: string; blobs: MeshBlob[] }): string {
  const stops = blobs
    .map(([color, x, y, size]) =>
      `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, ${color}00 ${size}%)`
    )
    .join(', ');
  return `${stops}, ${base}`;
}

/** Tri-color gradient text used for italic display flourishes like "Dalia". */
export function gradientText(): Record<string, string | number> {
  return {
    background: `linear-gradient(110deg, ${C.coral}, ${C.plum} 60%, ${C.teal})`,
    'background-clip': 'text',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    color: 'transparent',
    'font-style': 'italic',
    'font-weight': '400',
  };
}

/** Type-family shorthands. */
export const fontDisplay = 'Fraunces, serif';
export const fontUI = '"Space Grotesk", sans-serif';
export const fontReader = 'Newsreader, serif';

/**
 * Tint mapping by Field Note `type`. Mirrors the design source
 * (content-pages.jsx + recipe-donow.jsx), where each template hard-codes
 * a tint based on the *mood* of the content:
 *   plum  — introspective / narrative (letter, essay, notes)
 *   teal  — structured / analytical (report, field-guide)
 *   coral — energetic / actionable (tool, recipe, framework, travelogue)
 */
export function tintForType(type: string): string {
  switch (type) {
    case 'letter':
    case 'essay':
    case 'notes':
      return C.plum;
    case 'report':
    case 'field-guide':
      return C.teal;
    case 'tool':
    case 'recipe':
    case 'framework':
    case 'travelogue':
      return C.coral;
    default:
      return C.coral;
  }
}
