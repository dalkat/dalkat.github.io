# Hidden / deferred items

Things that are in the repo but currently not rendering, or design
decisions we've intentionally pushed off. Most exist in the git
history; the markers in the source point back here.

Search for `see TODO.md` in the codebase to find each hidden spot.

## Hero kicker pills (hidden 2026-05-26)

The path-style kicker (e.g. `● /STRATEGY · CONSULTING PORTFOLIO`)
above each root page's H1. Felt visually heavy under the big
Fraunces headlines once everything else got polished – pulled for
now, kept the slot in the source as a comment so they're easy to
restore.

Affected pages:

| File                                | Pill text                              |
|------------------------------------ |---------------------------------------- |
| `src/pages/strategy.astro`          | `/strategy · consulting portfolio`     |
| `src/pages/notes.astro`             | `/notes · the archive`                  |
| `src/pages/quests.astro`            | `/quests · things I've made`           |
| `src/pages/about.astro`             | `/about · the longer version`           |
| `src/pages/speaker.astro`           | `/speaker · talks, lectures, publications` |
| `src/pages/quests/do-now.astro`     | `/quests/do-now · a small oracle`       |

To restore: each file has a `{/* Kicker pill hidden for now ... */}`
comment right where the pill used to live. Copy the original markup
back from git history (commit message: "Hide hero kicker pills on
root pages").

## About page bio (deferred 2026-05-28)

The longer-form bio in `src/pages/about.astro` (the three prose
paragraphs about Stripe, Presently, Monitor Deloitte/Doblin, early
startups, Princeton) is the older version of the same story the
home page tells in tighter form. Worth a pass to:

  - sync the framing with the new home BIO_LONG ("independent
    practice, Deloitte/Doblin," "founding Presently…group payments
    easier," etc.) so the two pages don't drift
  - decide what extra detail the About version should carry that the
    home version intentionally drops

## Do Now prompts (deferred 2026-05-28)

The activity prompts pulled by /quests/do-now are still the verbatim
list carried over from the 2019 Jekyll generator
(`src/data/do-now-prompts.ts`). Some feel dated or off-voice for the
current brand. Worth a pass to:

  - cut prompts that no longer resonate
  - rewrite the ones Dalia keeps in the current voice
  - maybe add a few new ones that match her present interests

## Mobile polish (deferred 2026-05-27)

Two visual issues to revisit:

  1. **Article hero ↔ foreword gap** – on mobile, the space between
     a Field Notes article title and the first foreword aside is too
     generous. Probably tighten the section padding or the foreword
     `margin-top` for `@media (max-width: 720px)` in `ArticleLayout.astro`.
  2. **Field Notes archive section titles on mobile** – they "render a
     bit weird" per Dalia. Need a closer look. Likely related to
     `FieldNotesArchive.tsx` group headings vs the filter chip row at
     a narrow width.

## Template styling polish (deferred 2026-05-27)

Three article-template surfaces still on Phase-3-level styling and
due for a design pass:

  1. `/quests/do-now` – the interactive Do Now generator. Card pull
     UX works, but the button + card chrome haven't been tuned to
     match the rest of the mesh design language.
  2. **Recipes** – `RecipeLayout.astro`. Used by /notes/challah-recipe
     and /notes/baguette-recipe. The hero stat-tiles row, ingredients
     aside, and numbered steps work but could use a refinement pass
     for type hierarchy and spacing consistency with the new hero
     pattern.
  3. **Reports** – `ReportLayout.astro`. Used by the two reports
     under /notes (report-teams, report-refugee). Currently a hero
     + external-link CTA + markdown body. Worth tightening up the
     hero treatment and the "Read the report ↗" CTA shape to match
     the strategy/speaker cards.

## Speaker contact photo – needs a better treatment (deferred 2026-06-10)

The /speaker contact section uses `/img/speaking5.jpg` (recovered
from the old Jekyll site, b099df4^) – Dalia at the front of a room
with the audience raising hands. It's a *landscape* shot, which
sits awkwardly next to the contact form: scaling to the column
width makes it short, and aspect-ratio cropping to a portrait
crops the speaker out of frame (we tried 4:5 and lost her).

Options to revisit later:
  - Stack two photos vertically in the left column (a portrait
    + a landscape teaser of the audience), so the column has the
    height of the form without distorting either image.
  - Find/source a better single photo – ideally a portrait-orient
    speaker shot with Dalia + screen in frame.
  - Use a photo card with a caption / venue note underneath, so
    the column reads as a richer block rather than a thin image.

Touchpoint: `src/pages/speaker.astro` (mesh-speaker-contact-grid).
The 380px left column + figure markup is already in place.

## Field Notes – floating filter bar gap (deferred 2026-06-04)

The filter bar (FILTER ↓ · All · Entrepreneurship & Product · …)
sits sticky at the top of the archive – that part's good. But
the strip of content that scrolls behind it (the theme group
headers like "Entrepreneurship & Product · 5") slips into the
visible gap above the bar and looks half-clipped / awkward in
motion. Need a better treatment – options to consider:
  - Solid background on the sticky bar that fades from the page
    bg (mask-image or a small drop-shadow) so the content
    underneath reads as "hidden" rather than "peeking".
  - Tighten the offset so the section header lands fully on
    either side, not bisected.
  - Frosted/blur backdrop on the bar.

Touchpoint: `src/pages/notes.astro` + `FieldNotesArchive.tsx`
(the sticky filter row + the group-header markup).

## Eyebrow – possible "REPORT / ESSAY · min read" (deferred 2026-06-04)

The `<Kicker>` pill on essays and reports currently reads
"ESSAY · 2019 · 14 MIN READ" (category · year · read time). Worth
considering dropping the middle year token so it reads just
"ESSAY · 14 MIN READ" – the year still lives elsewhere on the
page (byline on reports, source line on essays where applicable).

Touchpoint: `src/components/Kicker.astro`. Optional `date` prop
already exists; the conditional render would be where to hide it.

## HighlightReel – pause on hover (deferred 2026-06-04)

The image carousel that appears at the end of essay pages (e.g.
the sabbatical-update photo galleries) auto-advances every 5.2s.
Hovering doesn't pause it, so a reader studying the caption can
get the image flipped out from under them. Add
onMouseEnter / onMouseLeave to set `paused: true / false` (the
state and useEffect dep already exist; just no hover wiring).

Touchpoint: `src/components/HighlightReel.tsx` near the outer
`<div>` (currently has no hover handlers). The PraiseCarousel
component already has this pattern as a copy-paste reference.

## Articles – breadcrumbs row (hidden 2026-05-31)

The `notes / personal-essays / sabbatical-update-2` style
breadcrumb that used to sit above the kicker on every essay,
letter, tool, and notes piece (anything routed through
ArticleLayout) is hidden. The H1 + kicker carry the page identity
on their own.

Restore: in `src/layouts/ArticleLayout.astro` (above the Kicker),
re-add `<Breadcrumbs theme={themeLabel} slug={slug} />`. The
themeLabel + slug props are still threaded through ArticleLayout
so the restore is one line.

## Articles – "Originally published on …" line (hidden 2026-05-31)

The small uppercase line below the blurb on essay/letter/tool
pages that read "↳ ORIGINALLY PUBLISHED ON DALIAKATAN.COM" is
hidden – most pieces are now hosted here so the attribution felt
redundant. The `source` prop stays threaded through ArticleLayout
so restoring is one block from git history.

## Reports – breadcrumbs row (hidden 2026-05-30)

The `notes / teambuilding / report-teams` style breadcrumb that
used to sit above the kicker on /notes/report-teams and
/notes/report-refugee is hidden. The H1 + byline + kicker carry
the orientation on their own.

Restore: in `src/layouts/ReportLayout.astro` (above the Kicker),
re-add `<Breadcrumbs theme={themeLabel} slug={slug} />`. The
themeLabel + slug props are still threaded through ReportLayout
so the restore is one line.

## Reports – "Read the report ↗" CTA (hidden 2026-05-30)

The dark pill button + "via Source" caption that previously sat
between the blurb and the embedded Slideshare iframe is hidden.
The iframe right below the hero is the report itself, so the
button felt redundant.

Restore: re-instate the `{externalUrl && ( <div … > <a … >Read the
report ↗</a> <span>via {source}</span> </div> )}` block from git
history. `externalUrl` + `source` props are still passed into
ReportLayout, so no data plumbing needed.

## Nav – "Work with me" CTA pill (hidden 2026-05-27)

The dark "Work with me" pill on the right of the desktop nav (and
its mobile-drawer counterpart) is hidden. Visitors still reach the
home Contact section via the bottom of pages and (after launch)
direct nav.

Restore: in `src/components/PageNav.astro`, bring back both
`<a href="/#contact">Work with me</a>` blocks from git history
(commented in place where they used to live).

## Nav – DK gradient mark (hidden 2026-05-27)

The 26px circular DK gradient brand mark in `src/components/PageNav.astro`
is hidden – the nav brand is now just the wordmark "Dalia Katan."
Restore by reinstating the `<span style={{ width: 26px, height: 26px,
borderRadius: '50%', background: linear-gradient(...) }}>DK</span>`
block from git history. (Favicon, apple-touch-icon, and the OG-card
DK badge still use the gradient mark – only the nav instance is
hidden.)

## ContactForm – "engagement per quarter" line (hidden 2026-05-27)

The italic Fraunces line in the contact form's action row:
*"↳ I take on one new engagement per quarter, and answer every note
within a week."* – hidden for now. Replaced with an empty `<span />`
spacer so the submit button stays right-aligned. Lives in
`src/components/ContactForm.tsx` near line 160.

To restore: swap the `<span />` back to the original `<div>` block
(comment in the source points to this entry).

## Home page portraits (hidden 2026-05-27)

Two portrait treatments hidden on the home page for now:

  1. **Hero portrait circle + "– hi." Caveat caption** – sat above
     the H1, redundant with the H1's own "Hi, I'm Dalia." greeting.
     Lives in `src/pages/index.astro` directly above the hero `<h1>`.
     Restore: copy the `<div class="mesh-photo-card">…</div>` block
     back from git history (commit subject: "Home: hide hero
     portrait and contact-section portrait").
  2. **Contact section PhotoSlab** – left-column portrait next to the
     ContactForm. Replaced with the form spanning full-width.
     Restore: bring back the 2-column grid wrapper + `<PhotoSlab>`.
     `PhotoSlab` import at the top of `index.astro` is still present
     so the restore is one paste.

## Strategy practice cards (since 2026-05-25)

The italic kicker line under each card title is gone. Per-card
`kicker` field on the `Offering` type was retired (`src/data/strategy.ts`).
Restore would need both the data field and the `<p>` block in
`src/components/OfferingCard.astro`.

## Strategy case-study tag chips (since 2026-05-25)

Each case-study card used to render a tag-chip row at the bottom
(`['market entry', 'mobile strategy', ...]`). The `tags` field
stays in the `CaseStudy` type for potential future filtering or
search; the render block is commented out in
`src/components/CaseCard.astro`.

