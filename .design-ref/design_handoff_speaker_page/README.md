# Handoff: /speaker page (Dalia Katan)

## Overview

The `/speaker` page is the long-form home for Dalia Katan's talks, lectures, and publications. It opens with a hero, introduces the body of work in a short "About the work" band, then lists everything grouped into three POV themes (entrepreneurship, product & business, culture-building). It closes with a contact form ("Drop a line") and a footer.

This handoff covers **both the desktop and the mobile layout**. They are the same component — the page uses CSS container queries (not viewport `@media`) to switch into the mobile layout when its container is ≤720px wide. There is no separate mobile component.

## About the design files

The files in this bundle are **design references created in HTML/React** — prototypes showing the intended look and behavior, not production code to copy directly. The HTML uses `<script type="text/babel">` and unpkg-loaded React for fast iteration in the browser; that is a prototyping convenience, not a production pattern.

The task is to **recreate this design in the target codebase's existing environment** (React + CSS, React + Tailwind, Next.js + a design system, etc.) using its established patterns and libraries. The HTML is your source of truth for layout, copy, color, type, spacing, and interaction — the implementation framework is yours to choose.

## Fidelity

**High-fidelity.** Pixel-perfect mockup with final colors, typography, spacing, hierarchy, and interaction states. Recreate UI to match.

## How to view the design

Open **`preview.html`** in a browser. The page renders the live `/speaker` design. **Resize the browser window** to see the mobile layout — the page transitions to its mobile form at viewport width ≤720px.

The page is implemented as a single React component (`MeshSpeakerN`) that renders responsively. Both desktop and mobile are the same DOM tree; CSS container queries adjust typography, padding, and the row layout for the mobile breakpoint.

## Page structure

The page is composed of five sections, in order:

1. **Hero** — section background uses a mesh-gradient (radial blobs over peach base), large display heading, page nav at the top
2. **01 · About the work** — section breadcrumb chip, lead paragraph, italic venues summary, italic short-form link to /field-notes
3. **02 · Themes** — section breadcrumb chip, three theme blocks stacked vertically
4. **Contact** — "03 · Invite me" section header, "Drop a line" title, italic subtitle, contact form
5. **Footer** — dark slab with brand mark, social/contact, copyright

### Section 0 — Page navigation

Sticky top nav (component: `MeshPageNav`, defined in `mesh-pages/shared.jsx`).

- Left: "DK" brand mark
- Right: link list — currently the speaker page is the "current" tab (`current="speaker"`)
- Mobile: link row hides, replaced with a hamburger that opens a sheet

### Section 1 — Hero

- Background: `meshBg({ base: '#ffd9c2' /* peach */, blobs: [[lavender, 12, 22, 55], [butter, 82, 8, 45], [sky, 88, 70, 50], [mint, 18, 88, 50]] })` — see "Mesh gradient recipe" below.
- Padding: `88px 64px 80px` (top/right-bottom/left). Mobile: `56px 22px`.
- Max content width: 1080px.
- **H1**: `"Talks & Publications."` — "Publications" wrapped in `gradientText()` (see Typography). Fraunces 400, 112px / line-height 0.95 / letter-spacing -0.04em. Mobile: 48px.
- **Lead paragraph** (under H1, marginTop 28): Space Grotesk 22px / line 1.5 / max-width 760px / `textWrap: pretty`. Copy:
  > I've guest lectured at Princeton, spoken on conference stages and podcasts, published with MIT Press and Deloitte Insights, and built the conferences and speaker series. A selection is below.

### Section 2 — 01 · About the work

- Background: `#fbf7ee` (paper).
- Padding: `72px 64px 24px`. Mobile: `56px 22px`.
- Max width: 1180px.

**Section breadcrumb chip** (top):
- Inline-flex pill, white bg, 6×6 plum dot, label `"01 · About the work"`.
- Space Grotesk 12px / 700 / uppercase / letter-spacing 0.12em / color `#9a7be6` (plum).
- Padding: `6px 14px`. Border-radius: 999. Box-shadow: `0 8px 18px -12px #221a3a33`.
- Margin-bottom: 28px.

**Lead paragraph**:
- Newsreader (serif) 26px / line 1.4 / max-width 920px / color `#221a3a` (ink).
- Copy:
  > I speak and write about what it actually takes to build products and companies with care — how ideas become *revenue-generating businesses*, how the startup journey feels from the inside, and why the best products are designed more like good architecture than good software.
- "revenue-generating businesses" is wrapped in `<em>` (italic).

**Venues summary** (28px margin-top):
- Newsreader italic 18px / line 1.6 / color `#4a3f6e` (inkSoft).
- Copy:
  > My talks and lectures have lived at Princeton, Stripe, Women Design Talks, and on a handful of podcasts I'm fond of, and my long-form writing has been published by MIT Press, Deloitte Insights, Princeton University, and more.

**Short-form link** (24px margin-top, after venues paragraph):
- Fraunces italic 17px / color inkSoft.
- Starts with the `↳` glyph.
- Copy:
  > ↳ for my short-form writing and blogs, visit my [field notes →](#field-notes)
- The link target wraps in an anchor styled: color ink, no underline, border-bottom `1px solid #ff8a7a` (coral), padding-bottom 1px.

### Section 3 — 02 · Themes

- Background: paper.
- Padding: `40px 64px 80px`.
- Max width: 1180px.

**Section breadcrumb chip**: same pattern as 01, but `accent: coral (#ff8a7a)`, label `"02 · Themes"`. Margin-bottom: 40px.

**Theme blocks** (3 total, stacked with `gap: 64px`):

Each theme has:
- `tint` color (theme accent)
- `title` (e.g. "The startup journey")
- `items[]` — each item: `{kind, title, where, year}`

Theme list (defined in `mesh-pages/speaker-themes-shared.jsx`):
1. **The startup journey** — tint: `#5ec5c0` (teal) — 6 items
2. **Product & business** — tint: `#ff8a7a` (coral) — 8 items
3. **Culture-building** — tint: `#9a7be6` (plum) — 8 items

**Each theme block renders:**

*Heading row*: H3 with a colored dot.
- Layout: `display: flex; align-items: baseline; gap: 18px`.
- Dot: 10×10px circle in the theme's tint, flex-shrink: 0, vertically centered.
- H3 text: Fraunces 400 / 44px / line 1.04 / letter-spacing -0.03em / ink. `textWrap: balance`, max-width 880.
- Margin: `0 0 14px`.
- Mobile: H3 shrinks to 22px, dot/heading gap 12px.

*Rule*: a 2px solid line in the theme's tint, full-width within the section.
- `borderBottom: 2px solid <theme.tint>`.

*List card*: white container with the rows.
- Background: white, border-radius 18, border `1px solid #221a3a10`, shadow `0 14px 28px -22px #221a3a44`.
- Margin-top: 14.

**Each row inside the card** (component: `Row`):

*Desktop layout* (CSS grid):
- `grid-template-columns: 70px 1fr auto`. `gap: 24`. `align-items: baseline`. `padding: 16px 24px`.
- Rows after the first get a top border: `1px dashed #221a3a15`.
- **Column 1 — year**: DM Mono 12px / 500 / inkSoft / letter-spacing 0.04em / left-aligned.
- **Column 2 — title + where**:
  - Title: Fraunces 400 / 19px / line 1.3 / ink / letter-spacing -0.01em / `textWrap: balance`.
  - Where (sub-line, marginTop 4): Newsreader italic 14px / inkSoft.
- **Column 3 — kind chip**: small uppercase pill.
  - Background: `<theme.tint>2a` (tint at ~16% alpha). Text color: `chipInk(<theme.tint>)` — see "Chip ink rule" below.
  - Padding `4px 10px`. Border-radius 6. Space Grotesk 10px / 700 / uppercase / letter-spacing 0.14em.
  - `white-space: nowrap`, `justify-self: end`.

*Mobile layout* (≤720px container width):
- Grid collapses to `52px 1fr` (2 columns: year + title).
- The kind chip moves to a new row in column 2 (under the title block).
- Padding: `14px 18px`. Row-gap: 6.
- Kind chip becomes left-justified (`justify-self: start`), margin-top: 4.

**Chip ink rule** (`speakerChipInk` in `speaker-themes-shared.jsx`):

Pale palette tints (sky, butter, mint, peach, rose) wash out as chip text. The helper maps those tints to darker companions:
- `#cde4ff` (sky)   → `#3a5b8c`
- `#fff2b3` (butter)→ `#8a6a1f`
- `#cdf2d8` (mint)  → `#3d7a5a`
- `#ffd9c2` (peach) → `#a8552a`
- `#f4a3b8` (rose)  → `#a64158`

Other tints (coral, plum, teal) are dark enough — chip text uses the tint itself.

### Section 4 — 03 · Invite me · Drop a line (contact)

- Background: paper.
- Padding: `72px 64px 96px`.
- Max width: 1080px.

**Section header** (via `MeshSectionHeader` in shared.jsx):
- Chip `"03 · Invite me"`, accent coral.
- H2 `"Drop a line"`, Fraunces 400 / 60px / letter-spacing -0.03em. Mobile: 32px.

**Italic subtitle** (immediately under H2, margin-top pulled `-18px` to sit close):
- Newsreader italic 18px / line 1.55 / inkSoft / max-width 720px / `textWrap: pretty`.
- Copy:
  > If you're putting together a stage, a syllabus, or a session for your founders, I'm happy to shape a talk to the room.

**Contact form** (via `MeshContactForm`, accent coral). Fields: name, email, message, submit. Already implemented in shared.jsx.

### Section 5 — Footer

`<MeshFooter tint={plum} />` from shared.jsx. Dark slab, brand mark, social links, copyright.

## Mesh gradient recipe

Hero backgrounds use `meshBg({base, blobs})` from `shared.jsx`. Each blob is `[color, x%, y%, sizeMin]` — the helper renders four-five overlapping `radial-gradient(circle at X% Y%, color, transparent <sizeMin>%)` layers over the base color, producing a soft pastel mesh.

For the hero specifically:
```
base: #ffd9c2 (peach)
blobs:
  [#dcd0ff /* lavender */, 12, 22, 55]
  [#fff2b3 /* butter   */, 82,  8, 45]
  [#cde4ff /* sky      */, 88, 70, 50]
  [#cdf2d8 /* mint     */, 18, 88, 50]
```

## Typography

Three font families, all loaded from Google Fonts:

| Role          | Family          | CSS variable name | Notes                                  |
|---------------|-----------------|-------------------|----------------------------------------|
| Display       | Fraunces        | `fontDisplay`     | 400 wt; gradient text accent for hero  |
| UI / body sans| Space Grotesk   | `fontUI`          | 400–700; nav, chips, hero body, labels |
| Reader / serif| Newsreader      | `fontReader`      | 400 + italic; about-section body copy  |
| Mono accents  | DM Mono         | (inline)          | Year columns, eyebrow labels, counts   |

Font sizes — production scale (desktop / mobile via container query):

| Element         | Desktop | Mobile (≤720px) |
|-----------------|---------|-----------------|
| H1 (hero)       | 112px   | 48px            |
| H2 (contact)    | 60px    | 32px            |
| H3 (theme)      | 44px    | 22px            |
| Lead paragraph  | 26px    | 16px            |
| Body paragraph  | 22px    | 16px            |
| Row title       | 19px    | 19px            |
| Row "where"     | 14px    | 14px            |
| Section chip    | 12px    | 12px            |
| Year (mono)     | 12px    | 12px            |
| Kind chip       | 10px    | 10px            |

**Gradient text** (`gradientText()` in shared.jsx) — the rainbow span used for "Publications" in the H1. It applies `background: linear-gradient(...)` with `background-clip: text` over the configured rainbow stops. Use as a span style — never as a wrapper element's background.

## Design tokens

### Color palette (from `shared.jsx`)

| Token       | Hex        | Use                                       |
|-------------|------------|-------------------------------------------|
| `lavender`  | `#dcd0ff`  | Mesh blob                                 |
| `lilac`     | `#cbb8ff`  | Mesh blob                                 |
| `mint`      | `#cdf2d8`  | Mesh blob, light tint                     |
| `sky`       | `#cde4ff`  | Mesh blob                                 |
| `peach`     | `#ffd9c2`  | Hero base                                 |
| `butter`    | `#fff2b3`  | Mesh blob                                 |
| `coral`     | `#ff8a7a`  | Section 02 accent, hover, contact accent  |
| `plum`      | `#9a7be6`  | Section 01 accent, footer tint, theme 3   |
| `teal`      | `#5ec5c0`  | Theme 1 tint                              |
| `rose`      | `#f4a3b8`  | Reserved                                  |
| `ink`       | `#221a3a`  | Primary text                              |
| `inkSoft`   | `#4a3f6e`  | Secondary text, captions, italic body     |
| `paper`     | `#fbf7ee`  | Page background                           |
| `paper2`    | `#f3edf9`  | Alt section background (not used here)    |
| `white`     | `#ffffff`  | Cards, chips                              |

### Spacing & radii

- Section padding (desktop): `72px–96px` vertical, `64px` horizontal
- Section padding (mobile): `56px` vertical, `22px` horizontal — via @container query
- Card border-radius: `18px` (theme list cards), `999` (pills/chips), `6` (kind chips)
- Card shadow: `0 14px 28px -22px #221a3a44`
- Chip shadow: `0 8px 18px -12px #221a3a33`

### Borders

- Card border: `1px solid #221a3a10` (ink at ~6% alpha)
- Row divider: `1px dashed #221a3a15`
- Theme rule: `2px solid <theme.tint>`
- Link underline accent: `1px solid #ff8a7a` (coral)

## Interactions & behavior

- **Page nav**: sticky top. Mobile (≤720px container width): links collapse into a hamburger toggle that opens a full-width sheet. Wired in `MeshPageNav` in `shared.jsx`.
- **Inline text links** (e.g. /field-notes link): default color ink with coral underline. Hover: color shifts to coral (`#ff8a7a`). Arrow glyph translates right 3px on hover.
- **Contact form** (`MeshContactForm`): standard form controls. The submit button is gradient-filled. Validation is implementation-level; the prototype does not have backend wiring.
- **Theme list rows**: no interactive state in the prototype — they read as a typographic ledger, not a clickable list. If you want each entry to link to its source (book page, podcast episode, paper URL), wrap the title in an `<a>` and add a subtle hover (e.g. underline offset 4 or color shift to theme tint).
- **No animations or scroll-linked effects** on this page. The mesh-gradient hero is static.

## State management

- **No client state** is required for the static rendering of this page.
- **Contact form** needs implementation-level state: form fields, submit handler, success/error feedback.
- **Theme data** can be static at build time. The data shape (`SPEAKER_THEMES` array in `speaker-themes-shared.jsx`) is straightforward to translate into your CMS / data layer.

## Responsive behavior

- The page uses **CSS container queries**, not viewport `@media` queries, anchored on `.mesh-root` (declared `container-type: inline-size`).
- Single breakpoint: `@container meshpage (max-width: 720px)`.
- Below 720px (container width, not viewport): section padding tightens, headings shrink, multi-column grids collapse to single column, row layout reflows so the kind chip wraps under the title.
- This means the page also adapts gracefully when embedded in a narrow column (e.g. within a sidebar layout), not just on mobile viewports.

## Assets

- **Fonts**: Fraunces, Space Grotesk, Newsreader, DM Mono — loaded from Google Fonts. No font files in this bundle. Replace with your project's font-loading strategy.
- **No raster images** are used on this page. Hero is a pure CSS mesh gradient.
- **No icons** are used. The "↳" and "→" are Unicode glyphs.
- **No logos** — venues are inline text inside the italic summary paragraph.

## Files in this bundle

```
design_handoff_speaker_page/
├── README.md                                    ← this file
├── preview.html                                 ← open this in a browser
└── mesh-pages/
    ├── shared.jsx                               ← palette, primitives, container query CSS, nav, footer, contact form
    ├── shared-v7-override.jsx                   ← mesh density override (loaded after shared.jsx)
    ├── speaker-themes-shared.jsx                ← SPEAKER_THEMES data + chipInk helper
    └── speaker-n.jsx                            ← the /speaker page component (MeshSpeakerN)
```

### What lives where

- **The page itself** is in `mesh-pages/speaker-n.jsx`. Open this file first — it's a single IIFE that defines `Hero`, `Intro`, `Row`, `ThemeBlock`, `Contact`, and the top-level `MeshSpeakerN` component.
- **Reusable primitives** are in `mesh-pages/shared.jsx`: `MeshPageNav`, `MeshSection`, `MeshSectionHeader`, `MeshContactForm`, `MeshFooter`, `MeshCompanyLogos`, the `C` palette, `meshBg()`, `gradientText()`, and the global `<style>` block that holds the container query and link / nav CSS.
- **Theme data** is in `mesh-pages/speaker-themes-shared.jsx` — the three POV themes with their items and tint colors.
- **`shared-v7-override.jsx`** patches `meshBg` to a quieter density (matches the chosen v7 visual direction). Load it after `shared.jsx`.

## Implementation notes

- The `mesh-root` wrapper class is required at the page root — it carries the container-query name `meshpage` plus a baked-in stylesheet for nav, link, and breakpoint rules. Replicate this contract in your implementation: a single page root with `container-type: inline-size; container-name: meshpage;` and a stylesheet co-located with it.
- Component composition mirrors a typical React app — convert each function into a real component. The IIFE pattern + `window.*` registration is a prototyping convenience, not a deliberate architecture choice.
- `meshBg()` returns a CSS string (multiple `radial-gradient(...)` layers stacked) — easy to reproduce as a CSS-in-JS helper or a Sass mixin in any framework.
- Container queries are well-supported in modern browsers (Chrome/Edge 105+, Safari 16+, Firefox 110+) — if the target supports an older Safari, swap to a viewport media query at `max-width: 768px` as a fallback.
