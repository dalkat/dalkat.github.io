import { useMemo, useState, type CSSProperties } from 'react';
import { C, fontDisplay, fontUI } from '@/lib/mesh';

export interface ArchiveItem {
  title: string;
  /** Display label, e.g. "Tool" / "Field guide" / "Essay". */
  type: string;
  /** Display label, e.g. "Strategy" / "Self". */
  theme: string;
  source: string;
  year: number;
  read_time: number | null;
  blurb: string;
  href: string;
}

interface Props {
  articles: ArchiveItem[];
}

const THEMES = [
  'All',
  'Entrepreneurship & Product',
  'Teambuilding',
  'Productivity',
  'Personal Essays',
  'Food',
] as const;

type Theme = (typeof THEMES)[number];

/* Adjacent themes must not share a tint. Sequence: coral, teal, coral,
 * plum, coral — no two neighbors repeat. Productivity is coral
 * (matches the energetic/actionable mood of tools like Do Now and
 * Trail Mix); Personal Essays stays plum (introspective). */
const themeTints: Record<string, string> = {
  'Entrepreneurship & Product': C.coral,
  Teambuilding: C.teal,
  Productivity: C.coral,
  'Personal Essays': C.plum,
  Food: C.coral,
};

export default function FieldNotesArchive({ articles }: Props) {
  const [theme, setTheme] = useState<Theme>('All');

  const filtered = useMemo(
    () => (theme === 'All' ? articles : articles.filter((a) => a.theme === theme)),
    [articles, theme]
  );

  const groups = useMemo(() => {
    if (theme === 'All') {
      // Show every non-empty theme, in canonical order.
      return THEMES.filter((t) => t !== 'All')
        .map((t) => ({ theme: t, items: articles.filter((a) => a.theme === t) }))
        .filter((g) => g.items.length > 0);
    }
    return [{ theme, items: filtered }];
  }, [articles, filtered, theme]);

  const readLabel = (rt: number | null) => (rt == null ? 'Toy' : `${rt} min`);

  return (
    <>
      {/* Sticky filter bar */}
      <div
        style={{
          position: 'sticky',
          top: 70,
          zIndex: 2,
          margin: '-12px -16px 32px',
          padding: '16px',
          background: `${C.paper}ee`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${C.ink}10`,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: fontUI,
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: C.plum,
            fontWeight: 700,
            marginRight: 4,
          }}
        >
          Filter ↓
        </span>
        {THEMES.map((t) => {
          const active = t === theme;
          const style: CSSProperties = {
            padding: '8px 16px',
            borderRadius: 999,
            border: 'none',
            background: active
              ? `linear-gradient(110deg, ${C.coral}, ${C.plum})`
              : C.white,
            color: active ? C.white : C.ink,
            fontFamily: fontUI,
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: active
              ? `0 8px 18px -8px ${C.plum}88`
              : `0 4px 12px -8px ${C.ink}33`,
          };
          return (
            <button key={t} onClick={() => setTheme(t)} style={style}>
              {t}
            </button>
          );
        })}
        <span
          style={{
            marginLeft: 'auto',
            fontFamily: fontDisplay,
            fontStyle: 'italic',
            fontSize: 15,
            color: C.inkSoft,
          }}
        >
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </span>
      </div>

      {/* Theme-grouped grid */}
      {groups.map((g) => {
        const tint = themeTints[g.theme] || C.plum;
        return (
          <div key={g.theme} style={{ marginBottom: 48 }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 18,
                alignItems: 'center',
                marginBottom: 22,
              }}
            >
              <div
                style={{
                  padding: '8px 18px',
                  background: C.white,
                  borderRadius: 999,
                  border: `1px solid ${C.ink}10`,
                  boxShadow: `0 10px 22px -14px ${C.ink}44`,
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: tint,
                  }}
                />
                <span
                  style={{
                    fontFamily: fontDisplay,
                    fontWeight: 400,
                    fontSize: 24,
                    color: C.ink,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {g.theme}
                </span>
                <span
                  style={{
                    fontFamily: fontUI,
                    fontSize: 12,
                    color: C.inkSoft,
                    fontWeight: 600,
                  }}
                >
                  {g.items.length}
                </span>
              </div>
              <div style={{ height: 1, background: `${C.ink}15` }} />
            </div>

            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
              }}
            >
              {g.items.map((a) => (
                <li key={a.title}>
                  <a
                    href={a.href}
                    target={a.href.startsWith('http') ? '_blank' : undefined}
                    rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'block',
                      background: C.white,
                      borderRadius: 20,
                      padding: '20px 22px',
                      border: `1px solid ${C.ink}10`,
                      boxShadow: `0 12px 24px -18px ${C.ink}44`,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      color: C.ink,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: 8,
                      }}
                    >
                      <span
                        style={{
                          padding: '3px 10px',
                          background: `${tint}33`,
                          color: tint,
                          borderRadius: 999,
                          fontFamily: fontUI,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {a.type}
                      </span>
                      <span
                        style={{
                          fontFamily: fontUI,
                          fontSize: 11,
                          color: C.inkSoft,
                          fontWeight: 600,
                          letterSpacing: '0.06em',
                        }}
                      >
                        {a.source} · {a.year}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: fontDisplay,
                        fontWeight: 400,
                        fontSize: 20,
                        color: C.ink,
                        letterSpacing: '-0.01em',
                        lineHeight: 1.25,
                        marginBottom: 8,
                      }}
                    >
                      {a.title}
                    </div>
                    <div
                      style={{
                        fontFamily: fontUI,
                        fontSize: 14,
                        color: C.inkSoft,
                        lineHeight: 1.5,
                        textWrap: 'pretty',
                      }}
                    >
                      {a.blurb}
                    </div>
                    <div
                      style={{
                        marginTop: 14,
                        paddingTop: 12,
                        borderTop: `1px dashed ${C.ink}15`,
                        fontFamily: fontUI,
                        fontSize: 12,
                        color: tint,
                        fontWeight: 600,
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>{readLabel(a.read_time)}</span>
                      <span>{a.type === 'Video' ? 'Watch →' : 'Read →'}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
