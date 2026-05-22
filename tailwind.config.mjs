// @ts-check
/**
 * Tailwind config — tokens drawn from the Mesh v7 design handoff (`C` object
 * in `.design/.../mesh-pages/shared.jsx`). Keep these exact hex values.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lavender: '#dcd0ff',
        lilac: '#cbb8ff',
        mint: '#cdf2d8',
        sky: '#cde4ff',
        peach: '#ffd9c2',
        butter: '#fff2b3',
        coral: '#ff8a7a',
        plum: '#9a7be6',
        teal: '#5ec5c0',
        rose: '#f4a3b8',
        ink: '#221a3a',
        'ink-soft': '#4a3f6e',
        paper: '#fbf7ee',
        paper2: '#f3edf9',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        ui: ['"Space Grotesk"', 'sans-serif'],
        reader: ['Newsreader', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        hand: ['Caveat', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Desktop scale from handoff
        'hero': ['124px', { lineHeight: '0.94', letterSpacing: '-0.045em' }],
        'h2': ['60px', { letterSpacing: '-0.03em' }],
        'h3': ['28px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'eyebrow': ['12px', { lineHeight: '1', letterSpacing: '0.12em' }],
        'caption': ['11px', { lineHeight: '1', letterSpacing: '0.06em' }],
      },
      borderRadius: {
        'pill': '999px',
        'tile': '22px',
        'photo': '24px',
        'testimonial': '28px',
      },
      boxShadow: {
        // "Inkdrop" shadows — high negative spread, ink-colored
        'tile': '0 14px 28px -20px #221a3a44',
        'float': '0 14px 28px -14px #221a3a88',
        'card': '0 24px 50px -30px #221a3a44',
        'photo': '0 30px 60px -34px #221a3a66',
        'brand': '0 4px 10px -4px #ff8a7a66',
      },
      maxWidth: {
        'content': '1080px',
        'footer': '1180px',
      },
    },
  },
  plugins: [],
};
