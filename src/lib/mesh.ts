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
 * v7 quirk (preserved deliberately): if a blob color is an 8-digit hex
 * (#rrggbbaa), naïvely appending '00' produces a 10-digit string Chrome
 * rejects — killing the whole gradient. We normalize 8-digit hex back to
 * 6-digit + alpha 00; pass other formats through.
 */
function fadeStop(c: string): string {
  if (typeof c !== 'string') return c;
  if (/^#[0-9a-f]{8}$/i.test(c)) return c.slice(0, 7) + '00';
  if (/^#[0-9a-f]{6}$/i.test(c)) return c + '00';
  if (/^#[0-9a-f]{3,4}$/i.test(c)) return c + '0';
  return c;
}

export function meshBg({ base, blobs }: { base: string; blobs: MeshBlob[] }): string {
  const stops = blobs
    .map(([color, x, y, size]) =>
      `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, ${fadeStop(color)} ${size}%)`
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
