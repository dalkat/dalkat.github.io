import { useState } from 'react';
import { C, fontDisplay, fontReader, fontUI, meshBg } from '@/lib/mesh';

interface Props {
  prompts: string[];
}

/**
 * /do-now card – "Deal me a card → " pulls a random activity prompt from the
 * passed list. Tracks a small history of recent pulls below the card.
 * No AI, no tracking – just a button and a list, per the original generator.
 */
export default function DoNowCard({ prompts }: Props) {
  const [current, setCurrent] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  function pull() {
    if (prompts.length === 0) return;
    const pool = prompts.filter((p) => p !== current && !history.includes(p));
    const choices = pool.length > 0 ? pool : prompts;
    const next = choices[Math.floor(Math.random() * choices.length)];
    if (current) setHistory((h) => [current, ...h].slice(0, 5));
    setCurrent(next);
  }

  return (
    <div
      className="mesh-donow-shell"
      style={{ maxWidth: 920, margin: '0 auto', padding: '0 64px' }}
    >
      <div
        className="mesh-donow-card"
        style={{
          position: 'relative',
          // Bumped top padding now that the corner "card · NN" counter
          // is gone – keeps the card balanced top-to-bottom.
          padding: '64px 48px 40px',
          background: C.white,
          borderRadius: 28,
          border: `1px solid ${C.ink}10`,
          boxShadow: `0 30px 60px -28px ${C.ink}66, 0 0 0 1px ${C.ink}08`,
          minHeight: 280,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative' }}>
          {!current && (
            <div
              className="mesh-donow-prompt-empty"
              style={{
                fontFamily: fontReader,
                fontStyle: 'italic',
                fontSize: 20,
                lineHeight: 1.5,
                color: C.inkSoft,
                maxWidth: 600,
                marginTop: 8,
                textWrap: 'pretty',
              }}
            >
              Press the button. I'll pick one specific, slightly weird thing
              for you to do right now to get unstuck.
            </div>
          )}
          {current && (
            <div
              key={current}
              className="mesh-donow-prompt"
              style={{
                fontFamily: fontDisplay,
                fontWeight: 400,
                fontSize: 26,
                lineHeight: 1.3,
                color: C.ink,
                letterSpacing: '-0.02em',
                maxWidth: 760,
                textWrap: 'balance',
                animation: 'mesh-fade-in .5s ease-out',
              }}
            >
              <span
                style={{
                  fontFamily: fontDisplay,
                  fontStyle: 'italic',
                  fontSize: 26,
                  color: C.coral,
                  marginRight: 8,
                }}
              >
                →
              </span>
              <span dangerouslySetInnerHTML={{ __html: current }} />
            </div>
          )}
        </div>

        <div
          style={{
            marginTop: 36,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={pull}
            style={{
              padding: '16px 30px',
              background: meshBg({
                base: C.ink,
                blobs: [[C.coral, 0, 100, 70], [C.plum, 100, 0, 70]],
              }),
              color: C.paper,
              border: 'none',
              borderRadius: 999,
              fontFamily: fontUI,
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              boxShadow: `0 18px 32px -16px ${C.ink}88`,
            }}
          >
            {current ? 'Pull another card →' : 'Deal me a card →'}
          </button>
        </div>
      </div>

      {history.length > 0 && (
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontFamily: fontUI,
              fontSize: 11,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.plum,
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            Earlier pulls
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            {history.map((h, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 18px',
                  background: C.white,
                  borderRadius: 14,
                  border: `1px solid ${C.ink}10`,
                  fontFamily: fontReader,
                  fontStyle: 'italic',
                  fontSize: 16,
                  color: C.inkSoft,
                  lineHeight: 1.5,
                  display: 'grid',
                  gridTemplateColumns: '36px 1fr',
                  gap: 12,
                  alignItems: 'baseline',
                }}
              >
                <span
                  style={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: 12,
                    color: `${C.inkSoft}99`,
                    letterSpacing: '0.06em',
                  }}
                >
                  ·{String(history.length - i).padStart(2, '0')}
                </span>
                <span dangerouslySetInnerHTML={{ __html: h }} />
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes mesh-fade-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
