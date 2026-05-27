// /speaker · variation N — Spinoff of J.
//
// Same theme + full-width-row layout, with targeted refinements:
//   1. Row column order is [year · title · kind] (not [kind · title · year]).
//   2. Page now mirrors /strategy's section-numbering chrome — a numbered
//      breadcrumb chip on "01 · About the work" and "02 · Themes". Per-theme
//      eyebrow chips are gone; each theme is just title + list under the
//      themes umbrella.
//   3. Hero no longer carries the "/speaker · by theme" pill.
//   4. "Where it's lived" is now a wordmark row (MeshCompanyLogos) so it
//      matches how venues/clients are treated elsewhere in the site.
//   5. Short-form hand-off card links to /field-notes — this page is the
//      long-form home, /field-notes is the short-form home.
//   6. Contact section copy is speaker-specific (stage / syllabus / founders).
//   7. "University Lecture" kind chip is nowrap + right-justified so it
//      stays tight on its single line.

(function () {
  const { MESH, MeshPageNav, MeshSection, MeshSectionHeader, MeshCompanyLogos, MeshContactForm } = window;
  const { C, meshBg, gradientText, fontDisplay, fontUI, fontReader } = MESH;
  const THEMES = window.SPEAKER_THEMES;
  const chipInk = window.speakerChipInk;

  // Speaker-side venues, stylized as wordmarks (same approach as the
  // /strategy clients band). Each venue gets its own typographic
  // treatment so the row reads as a wall of marks, not a comma-list.
  const VENUES = [
    { name: 'Princeton',              style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 28, letterSpacing: '-0.01em' } },
    { name: 'MIT Press',              style: { fontFamily: fontUI,      fontWeight: 700, fontSize: 22, letterSpacing: '0.08em', textTransform: 'uppercase' } },
    { name: 'Deloitte.',              style: { fontFamily: fontUI,      fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em' } },
    { name: 'Stripe',                 style: { fontFamily: fontUI,      fontWeight: 600, fontSize: 28, letterSpacing: '-0.02em' } },
    { name: 'Substack',               style: { fontFamily: fontUI,      fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em' } },
    { name: "Entrepreneur's Handbook", style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 24, letterSpacing: '-0.01em' } },
    { name: 'Women Design Talks',     style: { fontFamily: fontUI,      fontWeight: 500, fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase' } },
  ];

  // ───────── Hero ─────────
  // Pill removed — the page nav already declares this is /speaker, the
  // hero headline carries the page identity, and the lower band now uses
  // a proper numbered section breadcrumb ("01 · About the work"), so a
  // hero-only pill was extra chrome.
  function Hero() {
    return (
      <MeshSection id="speaker" style={{
        background: meshBg({
          base: C.peach,
          blobs: [
            [C.lavender, 12, 22, 55],
            [C.butter,   82,  8, 45],
            [C.sky,      88, 70, 50],
            [C.mint,     18, 88, 50],
          ],
        }),
        padding: '88px 64px 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1080, position: 'relative' }}>
          <h1 style={{
            fontFamily: fontDisplay, fontWeight: 400,
            fontSize: 112, lineHeight: 0.95, letterSpacing: '-0.04em',
            color: C.ink, margin: 0, textWrap: 'balance', maxWidth: 1000,
          }}>
            Talks &amp; <span style={gradientText()}>Publications</span>.
          </h1>
          <p style={{
            fontFamily: fontUI, fontSize: 22, lineHeight: 1.5,
            color: C.ink, marginTop: 28, maxWidth: 760, textWrap: 'pretty',
          }}>
            I've guest lectured at Princeton, spoken on conference stages
            and podcasts, published with MIT Press and Deloitte Insights,
            and built the conferences and speaker series. A selection is
            below.
          </p>
        </div>
      </MeshSection>
    );
  }

  // ───────── 01 · About the work ─────────
  // Numbered section header (mirrors /strategy), then a lead statement,
  // then a wordmark row of venues (matches /strategy's clients band), then
  // the short-form hand-off card.
  function Intro() {
    return (
      <MeshSection style={{ background: C.paper, padding: '72px 64px 24px' }}>
        <div style={{ maxWidth: 1180 }}>
          {/* Section chip only — no H2 title. An earlier draft used
              "Long-form, in print & online" as the H2, but that read as
              a category constraint (it isn't — the work also includes
              lectures, talks, podcasts). The chip + the body paragraph
              do the orienting on their own. */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '6px 14px', background: C.white, borderRadius: 999,
            fontFamily: fontUI, fontSize: 12, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: C.plum,
            boxShadow: `0 8px 18px -12px ${C.ink}33`,
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.plum }} />
            01 · About the work
          </div>
          <p style={{
            margin: '0 0 4px', fontFamily: fontReader, fontSize: 26,
            lineHeight: 1.4, color: C.ink, textWrap: 'pretty',
            letterSpacing: '-0.005em', maxWidth: 920,
          }}>
            I speak and write about what it actually takes to build
            products and companies with care — how ideas become{' '}
            <em>revenue-generating businesses</em>, how the startup journey
            feels from the inside, and why the best products are designed
            more like good architecture than good software.
          </p>

          {/* Venues summary paragraph. (Previously a MeshCompanyLogos
              wordmark band — felt heavy for this page; a sentence reads
              better as part of the lead-in.) */}
          <p style={{
            margin: '28px 0 0', fontFamily: fontReader, fontStyle: 'italic',
            fontSize: 18, lineHeight: 1.6, color: C.inkSoft,
            textWrap: 'pretty', maxWidth: 880,
          }}>
            My talks and lectures have lived at Princeton, Stripe, Women
            Design Talks, and on a handful of podcasts I'm fond of, and my
            long-form writing has been published by MIT Press, Deloitte
            Insights, Princeton University, and more.
          </p>

          {/* Short-form hand-off. Same ↳ italic line treatment as the
              "another two dozen engagements under NDA" note under
              /strategy's case studies — keeps the page light. */}
          <div style={{
            marginTop: 24, fontFamily: fontDisplay, fontStyle: 'italic',
            fontSize: 17, color: C.inkSoft, textWrap: 'pretty',
          }}>
            ↳ for my short-form writing and blogs, visit my{' '}
            <a href="#field-notes" style={{
              color: C.ink, textDecoration: 'none',
              borderBottom: `1px solid ${C.coral}`,
              paddingBottom: 1,
            }}>field notes →</a>
          </div>
        </div>
      </MeshSection>
    );
  }

  // ───────── Row ─────────
  // Columns are [year · title · kind]. Year leads (small monospace,
  // left-justified) so the eye sweeps down a clean timeline. Kind chip
  // is right-justified and nowrap so multi-word kinds like
  // "University Lecture" stay tight instead of stretching the column.
  // Mobile: the @container query at the page root collapses the row to
  // [year · title] and reflows the kind chip under the title.
  function Row({ item, divider, tint }) {
    return (
      <div className="mesh-speaker-row" style={{
        display: 'grid',
        gridTemplateColumns: '70px 1fr auto',
        gap: 24, alignItems: 'baseline',
        padding: '16px 24px',
        borderTop: divider ? `1px dashed ${C.ink}15` : 'none',
      }}>
        <div style={{
          fontFamily: 'DM Mono, monospace', fontSize: 12,
          color: C.inkSoft, fontWeight: 500,
          letterSpacing: '0.04em',
          textAlign: 'left',
        }}>{item.year}</div>
        <div>
          <div style={{
            fontFamily: fontDisplay, fontWeight: 400, fontSize: 19,
            color: C.ink, letterSpacing: '-0.01em', lineHeight: 1.3,
            textWrap: 'balance',
          }}>{item.title}</div>
          <div style={{
            fontFamily: fontReader, fontSize: 14, color: C.inkSoft,
            marginTop: 4, fontStyle: 'italic',
          }}>{item.where}</div>
        </div>
        <span className="mesh-speaker-row-chip" style={{
          justifySelf: 'end',
          padding: '4px 10px',
          background: tint + '2a', color: chipInk(tint),
          borderRadius: 6,
          fontFamily: fontUI, fontSize: 10, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          lineHeight: 1.25,
          whiteSpace: 'nowrap',
        }}>{item.kind}</span>
      </div>
    );
  }

  // ───────── Theme block ─────────
  // 44px H3 with a tinted dot, then a 2px rule in the theme's tint, then
  // the white-card list. The earlier draft had a "SELECTED WORK / NN
  // ENTRIES" eyebrow row above the rule — it was a carryover from the
  // CV-style I variation. The rule alone carries the visual weight and
  // anchors the tint without the redundant labels.
  function ThemeBlock({ theme, n }) {
    const sorted = [...theme.items].sort((a, b) => {
      const ay = parseInt(String(a.year).match(/\d{4}/)?.[0] || 0, 10);
      const by = parseInt(String(b.year).match(/\d{4}/)?.[0] || 0, 10);
      return by - ay;
    });
    return (
      <section>
        <h3 className="mesh-speaker-theme-h3" style={{
          fontFamily: fontDisplay, fontWeight: 400, fontSize: 44,
          margin: '0 0 14px', letterSpacing: '-0.03em', color: C.ink,
          lineHeight: 1.04, textWrap: 'balance', maxWidth: 880,
          display: 'flex', alignItems: 'baseline', gap: 18,
        }}>
          <span style={{
            width: 10, height: 10, borderRadius: '50%', background: theme.tint,
            display: 'inline-block', alignSelf: 'center',
            flexShrink: 0,
          }} />
          {theme.title}
        </h3>
        <div style={{ borderBottom: `2px solid ${theme.tint}` }} />
        <div style={{
          background: C.white, borderRadius: 18,
          border: `1px solid ${C.ink}10`,
          boxShadow: `0 14px 28px -22px ${C.ink}44`,
          marginTop: 14,
        }}>
          {sorted.map((it, i) => (
            <Row key={i} item={it} divider={i > 0} tint={theme.tint} />
          ))}
        </div>
      </section>
    );
  }

  // ───────── Contact (speaker-specific copy) ─────────
  // Now routed through MeshSectionHeader so the contact section follows
  // the same numbered-breadcrumb pattern as /strategy's contact.
  function Contact() {
    return (
      <MeshSection id="contact" style={{
        background: C.paper,
        padding: '72px 64px 96px',
      }}>
        <div style={{ maxWidth: 1080 }}>
          <MeshSectionHeader
            n={3}
            sub="Invite me"
            title="Drop a line"
            accent={C.coral}
          />
          <p style={{
            margin: '-18px 0 28px', fontFamily: fontReader, fontSize: 18,
            color: C.inkSoft, maxWidth: 720, textWrap: 'pretty',
            lineHeight: 1.55, fontStyle: 'italic',
          }}>If you're putting together a stage, a syllabus, or a session for your founders, I'm happy to shape a talk to the room.</p>
          <MeshContactForm accent={C.coral} />
        </div>
      </MeshSection>
    );
  }

  function MeshSpeakerN() {
    return (
      <div className="mesh-root" style={{ background: C.paper, color: C.ink, minHeight: '100%' }}>
        {/* Mobile refinements local to /speaker. The site-wide @container
            query in shared.jsx already handles section padding, headings,
            and grid collapse, but the speaker row has a 70px year column
            that isn't in the override list — without this it'd collapse
            to a single column and stack year/title/chip vertically. */}
        <style>{`
          @container meshpage (max-width: 720px) {
            .mesh-root .mesh-speaker-row {
              grid-template-columns: 52px 1fr !important;
              gap: 6px 14px !important;
              padding: 14px 18px !important;
            }
            .mesh-root .mesh-speaker-row-chip {
              grid-column: 2 !important;
              justify-self: start !important;
              margin-top: 4px !important;
            }
            /* Theme H3: shrink dot a bit and let the heading wrap if needed. */
            .mesh-root .mesh-speaker-theme-h3 {
              gap: 12px !important;
              align-items: center !important;
            }
          }
        `}</style>
        <MeshPageNav current="speaker" />
        <Hero />
        <Intro />
        <MeshSection style={{ background: C.paper, padding: '40px 64px 80px' }}>
          <div style={{ maxWidth: 1180 }}>
            {/* Section chip only — H2 title removed for the same reason
                01 lost its title: the chip + the lists below are
                self-evident, and a tagline H2 was empty calories. */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '6px 14px', background: C.white, borderRadius: 999,
              fontFamily: fontUI, fontSize: 12, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: C.coral,
              boxShadow: `0 8px 18px -12px ${C.ink}33`,
              marginBottom: 40,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.coral }} />
              02 · Themes
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
              {THEMES.map((t, i) => <ThemeBlock key={t.id} theme={t} n={i + 1} />)}
            </div>
          </div>
        </MeshSection>
        <Contact />
        <window.MeshFooter tint={C.plum} />
      </div>
    );
  }

  window.MeshSpeakerN = MeshSpeakerN;
})();
