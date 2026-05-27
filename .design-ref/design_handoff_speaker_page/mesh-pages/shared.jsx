// Mesh — shared palette + primitives for the full-site spinoff.
// Mirrors v7's mesh-gradient direction (pastel blobs, Fraunces + Space Grotesk)
// but with a richer set of building blocks: ContactForm, CompanyLogos,
// SectionHeader, PageNav, BlogTile, OfferingCard.
//
// All pages in /mesh-pages share this file so the language stays cohesive
// across the home, /strategy, /for-you, blog posts, reports, recipes, and
// the do-now generator.

(function () {
  const { PhotoPlaceholder } = window;

  // ───────── Responsive shim ─────────
  // The pages use inline styles (big hero sizes, multi-col grids, generous
  // 64px section padding). Inline style wins specificity, so the only way to
  // adapt to a narrow viewport is !important rules in a real stylesheet.
  //
  // Strategy: every page root gets className="mesh-root" + container-type:
  // inline-size. A single @container query collapses common patterns when
  // the page is rendered inside an artboard <600px wide:
  //   - any grid (2-col bios, 3-col offerings, hero+photo, contact form,
  //     blog breakaway) flattens to 1fr
  //   - massive headings shrink to readable mobile sizes
  //   - section padding tightens
  //   - the top nav drops its link row + CTA so brand stays visible
  //
  // The desktop styles are unchanged — these only activate when the page is
  // rendered in a narrow artboard.
  // ───────── Interaction states ─────────
  // Hover / focus / active states for every interactive element in the system.
  // Inline styles can't express :hover, so this stylesheet is the spec — keep
  // it next to the components it styles. Classes used:
  //   .mesh-nav-link      top-nav anchor (underline grows on hover)
  //   .mesh-cta           dark pill (primary action) — lift + shadow on hover
  //   .mesh-cta-soft      white pill (secondary action) — lift + tint on hover
  //   .mesh-cta-warm      mesh-warm pill (form submit) — lift + saturate
  //   .mesh-tile          tile/card — lift + warm ring on hover
  //   .mesh-chip          filter chip (inactive) — outline darkens on hover
  //   .mesh-link          inline text link — color shifts to coral on hover
  //   .mesh-brand         brand mark wrapper — disc tilts on hover
  //   .mesh-icon-btn      small icon/glyph button — lift + tint
  //   .mesh-field         form field — colored ring + border on focus
  if (typeof document !== 'undefined' && !document.getElementById('mesh-interaction-styles')) {
    const s = document.createElement('style');
    s.id = 'mesh-interaction-styles';
    s.textContent = `
      .mesh-root a, .mesh-root button {
        transition: transform .18s cubic-bezier(.2,.7,.3,1.2),
                    box-shadow .22s ease,
                    background .22s ease,
                    color .18s ease,
                    border-color .18s ease,
                    opacity .15s ease;
      }
      /* Nav links — growing underline + opacity bump */
      .mesh-nav-link { position: relative; }
      .mesh-nav-link::after {
        content: ""; position: absolute; left: 0; right: 100%;
        bottom: -6px; height: 1.5px; background: currentColor;
        transition: right .25s cubic-bezier(.2,.7,.3,1);
        opacity: 0.7;
      }
      .mesh-nav-link:hover::after { right: 0; }
      .mesh-nav-link:hover { opacity: 1 !important; }
      .mesh-nav-link[data-current="true"]::after { right: 0; opacity: 1; }

      /* Brand mark — disc tilts and lifts as a single unit */
      .mesh-brand { transition: transform .25s cubic-bezier(.2,.7,.3,1.2); }
      .mesh-brand:hover { transform: translateY(-1px); }
      .mesh-brand:hover .mesh-brand-dot { transform: rotate(8deg) scale(1.06); }
      .mesh-brand-dot { transition: transform .3s cubic-bezier(.5,1.6,.4,1); }

      /* Primary CTA (dark ink pill) */
      .mesh-cta { will-change: transform; }
      .mesh-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 22px 38px -16px #221a3aaa !important;
      }
      .mesh-cta:active { transform: translateY(0); box-shadow: 0 8px 18px -10px #221a3aaa !important; }

      /* Secondary CTA (white pill) — kept minimal so it doesn't blend
         into the warm page background. Just a 1px lift; no tint change. */
      .mesh-cta-soft:hover {
        transform: translateY(-1px);
        box-shadow: 0 14px 22px -14px #221a3a66 !important;
      }
      .mesh-cta-soft:active { transform: translateY(0); }

      /* Warm mesh CTA (form submits, generators) */
      .mesh-cta-warm:hover {
        transform: translateY(-2px);
        filter: saturate(1.12) brightness(1.05);
        box-shadow: 0 22px 38px -14px #ff8a7a99 !important;
      }
      .mesh-cta-warm:active { transform: translateY(0); filter: none; }

      /* Tile / card */
      .mesh-tile { will-change: transform; }
      .mesh-tile:hover {
        transform: translateY(-3px);
        box-shadow: 0 30px 52px -24px #221a3a66 !important;
        border-color: #ff8a7a55 !important;
      }
      .mesh-tile:hover .mesh-tile-cta { color: #ff8a7a !important; }
      .mesh-tile-cta { transition: color .18s ease; }

      /* Filter chip (inactive) — hover only applies to non-active chips,
         otherwise an ink-bg active chip would flash to white-on-white. */
      .mesh-chip:not([data-active="true"]):hover {
        transform: translateY(-1px);
        background: #fff !important;
        border-color: #221a3a44 !important;
        box-shadow: 0 10px 18px -12px #221a3a55 !important;
      }
      .mesh-chip[data-active="true"] { cursor: default; }
      .mesh-chip[data-active="true"]:hover { transform: none; }

      /* Inline text link */
      .mesh-link:hover { color: #ff8a7a !important; }
      .mesh-link:hover .mesh-link-arrow { transform: translateX(3px); }
      .mesh-link-arrow { display: inline-block; transition: transform .2s cubic-bezier(.2,.7,.3,1.2); }

      /* Small icon / glyph button */
      .mesh-icon-btn:hover {
        transform: translateY(-1px) rotate(-4deg);
        background: #ff8a7a22 !important;
        color: #ff8a7a !important;
      }

      /* Form fields — focus ring */
      .mesh-field { transition: border-color .15s, box-shadow .15s; }
    `;
    document.head.appendChild(s);
  }

  if (typeof document !== 'undefined' && !document.getElementById('mesh-responsive-styles')) {
    const s = document.createElement('style');
    s.id = 'mesh-responsive-styles';
    s.textContent = `
      .mesh-root { container-type: inline-size; container-name: meshpage; }

      @container meshpage (max-width: 720px) {
        /* Tighten section padding */
        .mesh-root section {
          padding-left: 22px !important;
          padding-right: 22px !important;
          padding-top: 56px !important;
          padding-bottom: 56px !important;
        }
        /* Headings */
        .mesh-root h1 {
          font-size: 48px !important;
          line-height: 1.02 !important;
          letter-spacing: -0.035em !important;
        }
        .mesh-root h2 {
          font-size: 32px !important;
          line-height: 1.08 !important;
        }
        .mesh-root h3 { font-size: 22px !important; }
        .mesh-root p { font-size: 16px !important; }
        .mesh-root blockquote { font-size: 22px !important; }

        /* Collapse every multi-column grid to one column */
        .mesh-root [style*="grid-template-columns"] {
          grid-template-columns: 1fr !important;
          gap: 18px !important;
        }
        /* But preserve tight icon/bullet rows where the first column is a
           small fixed width — collapsing those puts the bullet on its own
           line and orphans the text. These rules come AFTER the broad
           one and have the same specificity, so they win. */
        .mesh-root [style*="grid-template-columns: 14px"] { grid-template-columns: 14px 1fr !important; gap: 8px !important; }
        .mesh-root [style*="grid-template-columns: 22px"] { grid-template-columns: 22px 1fr !important; gap: 10px !important; }
        .mesh-root [style*="grid-template-columns: 24px"] { grid-template-columns: 24px 1fr !important; gap: 10px !important; }
        .mesh-root [style*="grid-template-columns: 32px"] { grid-template-columns: 32px 1fr !important; gap: 10px !important; }
        .mesh-root [style*="grid-template-columns: 36px"] { grid-template-columns: 36px 1fr !important; gap: 12px !important; }
        .mesh-root [style*="grid-template-columns: 44px"] { grid-template-columns: 44px 1fr !important; gap: 12px !important; }
        .mesh-root [style*="grid-template-columns: 88px"] { grid-template-columns: 88px 1fr !important; gap: 14px !important; }
        .mesh-root [style*="grid-template-columns: 92px"] { grid-template-columns: 92px 1fr !important; gap: 12px !important; }
        /* Allow some force-2 grids to stay 2-up if explicitly marked */
        .mesh-root .mesh-keep-2col {
          grid-template-columns: 1fr 1fr !important;
        }

        /* Nav: hide link row + CTA, keep brand */
        .mesh-root .mesh-nav-links { display: none !important; }
        .mesh-root nav { padding: 12px 22px !important; }
        /* Show the mobile menu trigger + sheet when in the mobile container */
        .mesh-root .mesh-nav-toggle { display: inline-block !important; }
        .mesh-root .mesh-nav-sheet  { display: flex !important; }

        /* Photo card on home hero — let it size to its column */
        .mesh-root .mesh-photo-card {
          transform: rotate(2deg) !important;
          justify-self: start !important;
          margin-top: 24px;
        }

        /* PDF page preview shrinks to viewer width */
        .mesh-root .mesh-pdf-page {
          width: 100% !important;
          padding: 32px 24px 24px !important;
        }
        .mesh-root .mesh-pdf-chrome {
          padding: 10px 14px !important;
          font-size: 11px !important;
          gap: 8px !important;
        }
        .mesh-root .mesh-pdf-chrome .mesh-pdf-chrome-right {
          gap: 4px !important;
        }

        /* Carousel — force landscape frame to be wider than tall on mobile,
           portrait to be reasonable */
        .mesh-root .mesh-carousel-frame {
          width: 100% !important;
          max-width: 100% !important;
        }

        /* Section header pill + stat tiles wrap nicely */
        .mesh-root .mesh-stack-mobile {
          display: flex !important;
          flex-direction: column !important;
          gap: 16px !important;
          align-items: flex-start !important;
        }

        /* Big serif italic display in challah hero */
        .mesh-root .mesh-display-xl {
          font-size: 84px !important;
          line-height: 0.92 !important;
        }

        /* Contact form action row */
        .mesh-root .mesh-form-actions {
          flex-direction: column !important;
          align-items: flex-start !important;
        }

        /* Strategy "Trusted by" two-col band stacks */
        .mesh-root .mesh-logos-band {
          gap: 18px 20px !important;
        }
        .mesh-root .mesh-logos-band span {
          font-size: 18px !important;
        }

        /* Hide the tilted "— hi." mark; the photo carries enough warmth */
        .mesh-root .mesh-photo-caption { display: none !important; }

        /* Footer simplified: keep DK left, copyright right; stack on very
           narrow widths but otherwise sit in one line. */
        .mesh-root .mesh-footer { padding: 32px 22px 28px !important; }
        .mesh-root .mesh-footer-row {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 12px !important;
        }

        /* Hide the small mesh "thumb" on post tiles when the tile collapses
           to one column — otherwise it becomes a full-width block above the
           copy that reads as an image placeholder. */
        .mesh-post-tile-thumb { display: none !important; }
        .mesh-root [style*="grid-template-columns: 88px"]:has(.mesh-post-tile-thumb) {
          grid-template-columns: 1fr !important;
        }

        /* Report kicker: never let the pill grow taller than one line of
           multi-clause text. Wrap onto multiple lines instead of stuffing. */
        .mesh-root .mesh-kicker {
          flex-wrap: wrap !important;
          padding: 8px 14px !important;
          font-size: 10px !important;
          letter-spacing: 0.1em !important;
          gap: 8px !important;
        }
        .mesh-root .mesh-kicker .mesh-kicker-sep { display: none !important; }

        /* Do-now generator card needs more breathing room on mobile —
           collapse its outer 64px padding to the same 22px as sections. */
        .mesh-root .mesh-donow-shell { padding: 0 16px !important; }
      }
    `;
    document.head.appendChild(s);
  }

  // ───────── Palette ─────────
  const C = {
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
  };

  // ───────── Mesh background ─────────
  // Stacked radial gradients on a base color. Each blob is [color, x%, y%, size%].
  //
  // The fade-stop must be a parseable color. If the blob already has an
  // 8-digit alpha hex (e.g. `${C.coral}aa`), naïvely appending '00' makes
  // a 10-digit string that Chrome rejects, killing the whole gradient.
  // Normalize 8-digit hex back to 6-digit before adding the transparent
  // alpha; pass other formats (rgb/rgba/named) straight through.
  function fadeStop(c) {
    if (typeof c !== 'string') return c;
    if (/^#[0-9a-f]{8}$/i.test(c)) return c.slice(0, 7) + '00';
    if (/^#[0-9a-f]{6}$/i.test(c)) return c + '00';
    if (/^#[0-9a-f]{3,4}$/i.test(c)) return c + '0';
    return c;
  }
  function meshBg({ base, blobs }) {
    const stops = blobs.map(([color, x, y, size]) =>
      `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, ${fadeStop(color)} ${size}%)`
    ).join(', ');
    return `${stops}, ${base}`;
  }

  // ───────── Type helpers ─────────
  const fontDisplay = 'Fraunces, serif';
  const fontUI = 'Space Grotesk, sans-serif';
  const fontReader = 'Newsreader, serif';

  // Gradient text — used for the italic "Dalia" / pull-words across pages.
  const gradientText = (extra = {}) => ({
    background: `linear-gradient(110deg, ${C.coral}, ${C.plum} 60%, ${C.teal})`,
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    backgroundClip: 'text', color: 'transparent',
    fontStyle: 'italic', fontWeight: 400,
    ...extra,
  });

  // Warm CTA mesh — replaces the original `meshBg({ base: C.ink, ... coral/plum ... })`
  // gradient that read too dark in context. Sits on a lavender-plum base
  // (much lighter than ink) with coral + peach blobs, so the button stays
  // unmistakably mesh-flavored but feels lifted, not heavy.
  function ctaBg(accent = C.coral) {
    return meshBg({
      base: C.plum,
      blobs: [
        [accent,   0, 100, 80],
        [C.peach, 100,  0, 80],
        [C.butter, 60, 50, 45],
      ],
    });
  }

  // Same family, used for the active page-indicator pill in carousels.
  // Sunrise warm — no purple — so it doesn't read as the same heavy stamp
  // twice on a single tile.
  const indicatorBg = `linear-gradient(90deg, ${C.coral}, ${C.peach} 60%, ${C.butter})`;

  // Navigation
  const NAV = [
    { id: 'home',     label: 'Home',      href: '#home' },
    { id: 'strategy', label: 'Strategy',  href: '#strategy' },
    { id: 'speaker',  label: 'Speaker',   href: '#speaker' },
    { id: 'foryou',   label: 'Field Notes', href: '#foryou' },
    { id: 'quests',   label: 'Side Quests', href: '#quests' },
  ];

  // Sticky top nav with a frosted band + the gradient brand mark.
  // Active link is just visual — every artboard renders one page, so
  // clicking doesn't actually navigate. The current-page prop highlights
  // the right label.
  function PageNav({ current = 'home', onNav }) {
    const [open, setOpen] = React.useState(false);
    // Close menu if the viewport widens past the mobile breakpoint.
    // (Container queries don't trigger React state, so we mirror it.)
    return (
      <nav style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: C.white + 'b8',
        backdropFilter: 'blur(18px) saturate(150%)',
        WebkitBackdropFilter: 'blur(18px) saturate(150%)',
        borderBottom: `1px solid ${C.ink}10`,
        padding: '14px 56px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontFamily: fontUI, flexWrap: 'wrap',
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav?.('home'); }}
           className="mesh-brand"
           style={{
             display: 'flex', alignItems: 'center', gap: 10,
             color: C.ink, textDecoration: 'none',
             fontFamily: fontDisplay, fontWeight: 500, fontSize: 17, letterSpacing: '-0.01em',
           }}>
          <span className="mesh-brand-dot" style={{
            width: 26, height: 26, borderRadius: '50%',
            background: `linear-gradient(135deg, ${C.coral}, ${C.plum} 60%, ${C.teal})`,
            color: C.white,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: fontUI, fontSize: 13, fontWeight: 600,
          }}>DK</span>
          Dalia Katan
        </a>
        <div className="mesh-nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {NAV.map((n) => (
            <a key={n.id} href={n.href}
               className="mesh-nav-link"
               data-current={current === n.id ? 'true' : 'false'}
               onClick={(e) => { e.preventDefault(); onNav?.(n.id); }}
               style={{
                 color: C.ink, textDecoration: 'none', fontSize: 14,
                 opacity: current === n.id ? 1 : 0.65,
                 fontWeight: current === n.id ? 600 : 400,
               }}>
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); onNav?.('contact'); }}
             className="mesh-cta"
             style={{
               padding: '8px 16px', background: C.ink, color: C.paper,
               borderRadius: 999, fontSize: 13, fontWeight: 600,
               textDecoration: 'none',
             }}>Work with me</a>
        </div>

        {/* Mobile menu trigger — hidden on desktop via the responsive shim.
            Two stacked bars + a tiny gradient dot so it reads as a mesh
            object, not a generic hamburger. Rotates to an X when open. */}
        <button
          className="mesh-nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          data-open={open ? 'true' : 'false'}
          style={{
            display: 'none',
            width: 36, height: 36, padding: 0, borderRadius: 8,
            background: 'transparent', color: C.ink,
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}>
          <span aria-hidden style={{
            position: 'absolute', left: 8, right: 8,
            top: open ? 17 : 12, height: 1.5,
            background: C.ink,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform .22s, top .22s',
            transformOrigin: 'center',
          }} />
          <span aria-hidden style={{
            position: 'absolute', left: 8, right: 8,
            top: open ? 17 : 20, height: 1.5,
            background: C.ink,
            transform: open ? 'rotate(-45deg)' : 'none',
            transition: 'transform .22s, top .22s',
            transformOrigin: 'center',
          }} />
        </button>

        {/* Mobile sheet — collapses below the nav. Hidden on desktop; only
            paints when `open` so it doesn't claim layout space when closed. */}
        {open && (
          <div className="mesh-nav-sheet" style={{
            display: 'none',
            width: '100%',
            marginTop: 12,
            padding: '8px 4px 12px',
            borderTop: `1px dashed ${C.ink}18`,
            flexDirection: 'column', gap: 2,
          }}>
            {NAV.map((n) => (
              <a key={n.id} href={n.href}
                 onClick={(e) => { e.preventDefault(); setOpen(false); onNav?.(n.id); }}
                 style={{
                   display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                   padding: '14px 12px',
                   color: C.ink, textDecoration: 'none',
                   fontFamily: fontUI, fontSize: 17,
                   fontWeight: current === n.id ? 600 : 400,
                   opacity: current === n.id ? 1 : 0.78,
                   borderRadius: 12,
                   background: current === n.id ? C.ink + '08' : 'transparent',
                 }}>
                <span>{n.label}</span>
                {current === n.id && (
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: C.coral,
                  }} />
                )}
              </a>
            ))}
            <a href="#contact"
               onClick={(e) => { e.preventDefault(); setOpen(false); onNav?.('contact'); }}
               className="mesh-cta"
               style={{
                 marginTop: 10,
                 display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                 padding: '14px 16px',
                 background: C.ink, color: C.paper, borderRadius: 999,
                 fontFamily: fontUI, fontSize: 15, fontWeight: 600,
                 textDecoration: 'none',
               }}>
              Work with me →
            </a>
          </div>
        )}
      </nav>
    );
  }

  // ───────── Section header ─────────
  function SectionHeader({ n, sub, title, accent }) {
    const ac = accent || C.plum;
    return (
      <div style={{ marginBottom: 36 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '6px 14px', background: C.white, borderRadius: 999,
          fontFamily: fontUI, fontSize: 12, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: ac,
          boxShadow: `0 8px 18px -12px ${C.ink}33`,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: ac }} />
          {n != null && <>{String(n).padStart(2, '0')} · </>}{sub}
        </div>
        <h2 style={{
          fontFamily: fontDisplay, fontWeight: 400, fontSize: 60,
          margin: '14px 0 0', letterSpacing: '-0.03em', color: C.ink,
          textWrap: 'balance',
        }}>{title}</h2>
      </div>
    );
  }

  // ───────── Section wrapper ─────────
  function Section({ id, children, style }) {
    return <section id={id} style={{ scrollMarginTop: 80, ...style }}>{children}</section>;
  }

  // ───────── Company logos (wordmark-style, no copyrighted glyphs) ─────────
  // Each is a stylized wordmark in a recognizable but original treatment.
  // Sits on a soft pill so the row reads as "trusted by" without faking
  // anyone's brand identity.
  const COMPANIES = [
    { name: 'Stripe',     style: { fontFamily: fontUI, fontWeight: 600, letterSpacing: '-0.02em', fontSize: 28 } },
    { name: 'Doblin',     style: { fontFamily: fontDisplay, fontWeight: 500, letterSpacing: '-0.01em', fontSize: 26 } },
    { name: 'Deloitte.',  style: { fontFamily: fontUI, fontWeight: 700, letterSpacing: '-0.02em', fontSize: 26 } },
    { name: 'IBM',        style: { fontFamily: fontUI, fontWeight: 700, letterSpacing: '0.04em', fontSize: 30 } },
    { name: 'UBS',        style: { fontFamily: fontDisplay, fontWeight: 500, fontSize: 28, letterSpacing: '0.04em' } },
    { name: 'Princeton',  style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 24, letterSpacing: '-0.01em' } },
    { name: 'US Congress', style: { fontFamily: fontDisplay, fontWeight: 400, fontSize: 22, letterSpacing: '0.04em', textTransform: 'uppercase' } },
    { name: 'Presently',  style: { fontFamily: fontDisplay, fontWeight: 400, fontSize: 24, letterSpacing: '-0.01em' } },
    { name: 'Thuzio',     style: { fontFamily: fontUI, fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em' } },
    { name: 'Alexandria', style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 24, letterSpacing: '-0.01em' } },
  ];

  // Past consulting clients — wordmark treatments only (no copyrighted glyphs).
  // Used on /strategy under "Past clients include…". Order: deliberately
  // mixed by typographic shape so the row reads as a varied wall, not a list.
  const STRATEGY_CLIENTS = [
    { name: 'Adobe',        style: { fontFamily: fontUI, fontWeight: 700, fontSize: 24, letterSpacing: '-0.01em' } },
    { name: 'slack',        style: { fontFamily: fontUI, fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em' } },
    { name: 'Panasonic',    style: { fontFamily: fontUI, fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em' } },
    { name: 'Estée Lauder', style: { fontFamily: fontDisplay, fontWeight: 400, fontSize: 20, letterSpacing: '0.06em', textTransform: 'uppercase' } },
    { name: 'Mattel',       style: { fontFamily: fontUI, fontWeight: 800, fontSize: 22, letterSpacing: '0.02em' } },
    { name: 'Ford',         style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 500, fontSize: 26, letterSpacing: '-0.01em' } },
    { name: 'Deloitte.',    style: { fontFamily: fontUI, fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' } },
    { name: 'TD Bank',      style: { fontFamily: fontUI, fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em' } },
    { name: 'Erie Insurance', style: { fontFamily: fontDisplay, fontWeight: 500, fontSize: 20, letterSpacing: '-0.01em' } },
    { name: 'Genentech',    style: { fontFamily: fontUI, fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em' } },
    { name: 'qedit',        style: { fontFamily: fontUI, fontWeight: 700, fontSize: 24, letterSpacing: '-0.02em' } },
    { name: 'ZKProof',      style: { fontFamily: fontUI, fontWeight: 800, fontSize: 22, letterSpacing: '0.02em', textTransform: 'uppercase' } },
    { name: 'Crusoe',       style: { fontFamily: fontDisplay, fontWeight: 500, fontSize: 22, letterSpacing: '-0.01em' } },
    { name: 'Molson Coors', style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 22, letterSpacing: '-0.01em' } },
    { name: 'TENT',         style: { fontFamily: fontUI, fontWeight: 500, fontSize: 20, letterSpacing: '0.18em' } },
    { name: 'Zone7',        style: { fontFamily: fontUI, fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em' } },
    { name: '+ more',       style: { fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400, fontSize: 22, letterSpacing: '-0.01em', opacity: 0.6 } },
  ];

  // A horizontal row of subtle wordmarks. Use `variant="inline"` to sit
  // flush at the end of a paragraph section (no separate header). Use
  // `variant="band"` for a standalone strip (used on /strategy).
  function CompanyLogos({ variant = 'inline', label, tint = C.ink, companies }) {
    const items = companies || COMPANIES;
    if (variant === 'band') {
      return (
        <div className="mesh-logos-band" style={{
          marginTop: 24, padding: '22px 28px',
          background: C.white, borderRadius: 22,
          border: `1px solid ${C.ink}10`,
          boxShadow: `0 14px 30px -22px ${C.ink}44`,
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          gap: '20px 38px',
        }}>
          {label && (
            <div style={{
              fontFamily: fontUI, fontSize: 11, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: C.inkSoft, fontWeight: 700,
              borderRight: `1px solid ${C.ink}15`, paddingRight: 24, marginRight: 4,
            }}>{label}</div>
          )}
          {items.map((c) => (
            <span key={c.name} style={{ color: tint, opacity: 0.78, ...c.style }}>{c.name}</span>
          ))}
        </div>
      );
    }
    // Inline variant — for folding into the end of the about section.
    return (
      <div style={{ marginTop: 36 }}>
        {label && (
          <div style={{
            fontFamily: fontUI, fontSize: 11, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: C.inkSoft, fontWeight: 700,
            marginBottom: 18,
          }}>{label}</div>
        )}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          gap: '22px 44px',
        }}>
          {items.map((c) => (
            <span key={c.name} style={{ color: tint, opacity: 0.7, ...c.style }}>{c.name}</span>
          ))}
        </div>
      </div>
    );
  }

  // ───────── Contact form ─────────
  // Honest, well-typed form. Six fields, friendly mesh on the submit button.
  function ContactForm({ accent = C.coral, compact = false }) {
    const [sent, setSent] = React.useState(false);
    const fieldStyle = {
      width: '100%', padding: '14px 16px',
      background: C.white, color: C.ink,
      border: `1px solid ${C.ink}18`, borderRadius: 14,
      fontFamily: fontUI, fontSize: 15, lineHeight: 1.4,
      outline: 'none', resize: 'none',
      transition: 'border-color .15s, box-shadow .15s',
    };
    const labelStyle = {
      display: 'block', marginBottom: 8,
      fontFamily: fontUI, fontSize: 12, fontWeight: 700,
      letterSpacing: '0.1em', textTransform: 'uppercase', color: C.inkSoft,
    };
    const onFocus = (e) => { e.target.style.borderColor = accent; e.target.style.boxShadow = `0 0 0 3px ${accent}33`; };
    const onBlur = (e) => { e.target.style.borderColor = C.ink + '18'; e.target.style.boxShadow = 'none'; };
    const fieldClass = 'mesh-field';

    if (sent) {
      return (
        <div style={{
          padding: '32px 36px', background: C.white, borderRadius: 22,
          border: `1px solid ${C.ink}10`,
          boxShadow: `0 24px 50px -30px ${C.ink}44`,
        }}>
          <div style={{
            fontFamily: fontDisplay, fontStyle: 'italic', fontWeight: 400,
            fontSize: 28, color: C.ink, letterSpacing: '-0.01em', marginBottom: 10,
          }}>Got it — talk soon.</div>
          <div style={{ fontFamily: fontUI, fontSize: 15, color: C.inkSoft, lineHeight: 1.5 }}>
            I read every note personally. You'll hear back from me within a week.
          </div>
        </div>
      );
    }

    return (
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        style={{
          padding: compact ? '28px 30px' : '36px 40px',
          background: C.white, borderRadius: 24,
          border: `1px solid ${C.ink}10`,
          boxShadow: `0 24px 50px -30px ${C.ink}44`,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18,
        }}>
        <div>
          <label style={labelStyle}>Your name</label>
          <input type="text" placeholder="Maya Hernandez" style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" placeholder="maya@studio.com" style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div>
          <label style={labelStyle}>Company or project</label>
          <input type="text" placeholder="What you're building" style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div>
          <label style={labelStyle}>What kind of help?</label>
          <select style={{ ...fieldStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%234a3f6e' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', paddingRight: 36 }} onFocus={onFocus} onBlur={onBlur} defaultValue="">
            <option value="" disabled>Pick one</option>
            <option>Fractional CPO / product leadership</option>
            <option>Strategy sprint or workshop</option>
            <option>Founder advising</option>
            <option>Speaking, writing, or teaching</option>
            <option>Something else</option>
          </select>
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>The messy first draft</label>
          <textarea rows={5} placeholder="What you're trying to figure out, in your own words." style={{ ...fieldStyle, minHeight: 130 }} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div className="mesh-form-actions" style={{
          gridColumn: '1 / -1',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: 4, gap: 16,
        }}>
          <div style={{ fontFamily: fontDisplay, fontStyle: 'italic', fontSize: 15, color: C.inkSoft }}>
            ↳ I take on one new engagement per quarter, and answer every note within a week.
          </div>
          <button type="submit" className="mesh-cta-warm" style={{
            padding: '14px 28px',
            background: ctaBg(accent),
            color: C.white, border: 'none', borderRadius: 999,
            fontFamily: fontUI, fontSize: 14, fontWeight: 700,
            letterSpacing: '0.04em', cursor: 'pointer',
            boxShadow: `0 18px 32px -16px ${C.coral}aa`,
            whiteSpace: 'nowrap',
          }}>Send the note →</button>
        </div>
      </form>
    );
  }

  // ───────── Photo placeholder, larger / squared ─────────
  function PhotoSlab({ size = 360, label = 'photo of dalia', tone = C.peach }) {
    return (
      <div style={{
        width: size, height: size, borderRadius: 24, overflow: 'hidden',
        background: meshBg({
          base: tone,
          blobs: [
            [C.lavender + 'cc', 80, 20, 55],
            [C.butter + 'cc',  20, 80, 55],
            [C.coral + '88',   60, 60, 35],
          ],
        }),
        position: 'relative', border: `1px solid ${C.ink}15`,
        boxShadow: `0 30px 60px -34px ${C.ink}66`,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, ${C.ink}08 14px 15px)`,
        }} />
        <div style={{
          position: 'absolute', left: 18, bottom: 18,
          padding: '6px 12px', background: C.white, borderRadius: 999,
          fontFamily: 'DM Mono, monospace', fontSize: 11,
          color: C.inkSoft, letterSpacing: '0.06em',
          boxShadow: `0 6px 14px -8px ${C.ink}55`,
        }}>↳ {label}</div>
      </div>
    );
  }

  // ───────── Tiles ─────────
  // Used for blog/portfolio posts. Mesh swatch on the left, text on the right.
  function PostTile({ kind, title, blurb, where, year, read, tint = C.plum, onClick }) {
    return (
      <article onClick={onClick} className="mesh-tile" style={{
        background: C.white, borderRadius: 22,
        padding: '24px 24px 22px',
        border: `1px solid ${C.ink}10`,
        boxShadow: `0 14px 28px -20px ${C.ink}44`,
        cursor: 'pointer',
        position: 'relative', overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '88px 1fr', gap: 18, alignItems: 'flex-start',
      }}>
        <div className="mesh-post-tile-thumb" style={{
          width: 88, height: 88, borderRadius: 16,
          background: meshBg({
            base: tint,
            blobs: [
              [C.butter + 'dd', 80, 30, 70],
              [C.white + 'aa', 20, 80, 60],
            ],
          }),
          border: `1px solid ${C.ink}10`,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `repeating-linear-gradient(135deg, transparent 0 9px, ${C.ink}10 9px 10px)`,
          }} />
        </div>
        <div>
          <div style={{
            display: 'flex', gap: 8, alignItems: 'baseline',
            marginBottom: 8, flexWrap: 'wrap',
          }}>
            <span style={{
              padding: '3px 10px', background: tint + '33', color: tint,
              borderRadius: 999, fontFamily: fontUI,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>{kind}</span>
            <span style={{ fontFamily: fontUI, fontSize: 11, color: C.inkSoft, fontWeight: 600 }}>
              {where} · {year}
            </span>
          </div>
          <div style={{
            fontFamily: fontDisplay, fontWeight: 400, fontSize: 20,
            color: C.ink, letterSpacing: '-0.01em', lineHeight: 1.25, marginBottom: 8,
            textWrap: 'balance',
          }}>{title}</div>
          <div style={{
            fontFamily: fontUI, fontSize: 14, color: C.inkSoft,
            lineHeight: 1.5, textWrap: 'pretty',
          }}>{blurb}</div>
          <div style={{
            marginTop: 14, paddingTop: 12,
            borderTop: `1px dashed ${C.ink}15`,
            display: 'flex', justifyContent: 'space-between',
            fontFamily: fontUI, fontSize: 12, color: tint, fontWeight: 600,
          }}>
            <span>{read}</span>
            <span className="mesh-tile-cta">Read →</span>
          </div>
        </div>
      </article>
    );
  }

  // ───────── Footer ─────────
  // Single shared footer for every page. Three rows: a thin contact strip
  // (hi@daliakatan.com + nav links), a fat brand row (gradient DK mark +
  // tagline + social), and a slim copyright. Sits on a dark slab so it
  // signals end-of-page no matter the section background above it.
  function Footer({ tint = C.coral }) {
    return (
      <>
        {/* A quiet visual separator: a paper-toned strip with a soft tint
            blob, hairline above and below. Just enough to read as a seam
            between page content and the footer below — no dark slab. */}
        <div className="mesh-footer-divider" style={{
          height: 1,
          background: `linear-gradient(90deg, transparent, ${C.ink}20, transparent)`,
        }} />
        <footer className="mesh-footer" style={{
          background: meshBg({
            base: C.paper,
            blobs: [
              [tint + '22',         12, 50, 55],
              [C.lavender + '33',   88, 50, 55],
            ],
          }),
          color: C.ink,
          padding: '32px 64px 30px',
          fontFamily: fontUI,
        }}>
          <div className="mesh-footer-row" style={{
            maxWidth: 1180, margin: '0 auto',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 24, flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{
                width: 32, height: 32, borderRadius: '50%',
                background: `linear-gradient(135deg, ${C.coral}, ${C.plum} 60%, ${C.teal})`,
                color: C.white,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: fontUI, fontSize: 12, fontWeight: 700,
                boxShadow: `0 4px 10px -4px ${C.coral}66`,
              }}>DK</span>
              <div>
                <div style={{
                  fontFamily: fontDisplay, fontWeight: 500,
                  fontSize: 17, letterSpacing: '-0.01em',
                  color: C.ink, lineHeight: 1.1,
                }}>Dalia Katan</div>
                <div style={{
                  fontFamily: fontUI, fontSize: 11,
                  color: C.inkSoft,
                  letterSpacing: '0.04em', marginTop: 2,
                }}>Brooklyn, NY</div>
              </div>
            </div>
            <div style={{
              fontFamily: fontUI, fontSize: 12,
              color: C.inkSoft, fontWeight: 500,
              letterSpacing: '0.02em',
            }}>© 2026 Dalia Katan. All rights reserved.</div>
          </div>
        </footer>
      </>
    );
  }

  Object.assign(window, {
    MESH: { C, meshBg, NAV, COMPANIES, STRATEGY_CLIENTS, gradientText, ctaBg, indicatorBg, fontDisplay, fontUI, fontReader },
    MeshFooter: Footer,
    MeshPageNav: PageNav,
    MeshSectionHeader: SectionHeader,
    MeshSection: Section,
    MeshCompanyLogos: CompanyLogos,
    MeshContactForm: ContactForm,
    MeshPhotoSlab: PhotoSlab,
    MeshPostTile: PostTile,
  });
})();
