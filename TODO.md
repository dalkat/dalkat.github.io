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

