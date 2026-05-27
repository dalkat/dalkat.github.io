# Hidden / deferred items

Things that are in the repo but currently not rendering, or design
decisions we've intentionally pushed off. Most exist in the git
history; the markers in the source point back here.

Search for `see TODO.md` in the codebase to find each hidden spot.

## Hero kicker pills (hidden 2026-05-26)

The path-style kicker (e.g. `● /STRATEGY · CONSULTING PORTFOLIO`)
above each root page's H1. Felt visually heavy under the big
Fraunces headlines once everything else got polished — pulled for
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

## Template styling polish (deferred 2026-05-27)

Three article-template surfaces still on Phase-3-level styling and
due for a design pass:

  1. `/quests/do-now` — the interactive Do Now generator. Card pull
     UX works, but the button + card chrome haven't been tuned to
     match the rest of the mesh design language.
  2. **Recipes** — `RecipeLayout.astro`. Used by /notes/challah-recipe
     and /notes/baguette-recipe. The hero stat-tiles row, ingredients
     aside, and numbered steps work but could use a refinement pass
     for type hierarchy and spacing consistency with the new hero
     pattern.
  3. **Reports** — `ReportLayout.astro`. Used by the two reports
     under /notes (report-teams, report-refugee). Currently a hero
     + external-link CTA + markdown body. Worth tightening up the
     hero treatment and the "Read the report ↗" CTA shape to match
     the strategy/speaker cards.

## ContactForm — "engagement per quarter" line (hidden 2026-05-27)

The italic Fraunces line in the contact form's action row:
*"↳ I take on one new engagement per quarter, and answer every note
within a week."* — hidden for now. Replaced with an empty `<span />`
spacer so the submit button stays right-aligned. Lives in
`src/components/ContactForm.tsx` near line 160.

To restore: swap the `<span />` back to the original `<div>` block
(comment in the source points to this entry).

## Home page portraits (hidden 2026-05-27)

Two portrait treatments hidden on the home page for now:

  1. **Hero portrait circle + "— hi." Caveat caption** — sat above
     the H1, redundant with the H1's own "Hi, I'm Dalia." greeting.
     Lives in `src/pages/index.astro` directly above the hero `<h1>`.
     Restore: copy the `<div class="mesh-photo-card">…</div>` block
     back from git history (commit subject: "Home: hide hero
     portrait and contact-section portrait").
  2. **Contact section PhotoSlab** — left-column portrait next to the
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

