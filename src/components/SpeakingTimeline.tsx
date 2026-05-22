import { useMemo, useState } from 'react';
import { C, fontDisplay, fontReader, fontUI } from '@/lib/mesh';
import type { SpeakerTopic, Talk } from '@/data/speaker';

interface Props {
  topics: SpeakerTopic[];
  talks: Talk[];
}

export default function SpeakingTimeline({ topics, talks }: Props) {
  const [topic, setTopic] = useState<string>('all');

  const filtered = useMemo(
    () => (topic === 'all' ? talks : talks.filter((t) => t.topics.includes(topic))),
    [talks, topic]
  );

  const byYear = useMemo(() => {
    const map: Record<string, Talk[]> = {};
    filtered.forEach((t) => {
      (map[t.year] ||= []).push(t);
    });
    return map;
  }, [filtered]);

  const years = useMemo(
    () => Object.keys(byYear).sort((a, b) => Number(b) - Number(a)),
    [byYear]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    topics.forEach((t) => {
      c[t.id] = t.id === 'all' ? talks.length : talks.filter((x) => x.topics.includes(t.id)).length;
    });
    return c;
  }, [topics, talks]);

  const primaryTint = (t: Talk) => {
    const id = t.topics[0];
    return topics.find((x) => x.id === id)?.tint ?? C.ink;
  };

  return (
    <>
      {/* Filter chips */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
          marginTop: 24,
          marginBottom: 28,
        }}
      >
        {topics.map((t) => {
          const active = topic === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTopic(t.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 14px',
                borderRadius: 999,
                background: active ? C.ink : C.white,
                color: active ? C.paper : C.ink,
                border: `1px solid ${active ? C.ink : `${C.ink}20`}`,
                fontFamily: fontUI,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: active ? `0 10px 22px -14px ${C.ink}88` : 'none',
                transition: 'all .15s',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: t.tint,
                  opacity: active ? 1 : 0.75,
                }}
              />
              {t.label}
              <span
                style={{
                  fontFamily: fontUI,
                  fontSize: 11,
                  fontWeight: 600,
                  opacity: active ? 0.7 : 0.55,
                }}
              >
                {counts[t.id]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Year-grouped list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {years.map((y) => (
          <div
            key={y}
            style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr',
              gap: 32,
              alignItems: 'baseline',
            }}
          >
            <div
              style={{
                fontFamily: fontDisplay,
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 56,
                color: C.coral,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                position: 'sticky',
                top: 80,
              }}
            >
              {y}
            </div>
            <div
              style={{
                background: C.white,
                borderRadius: 22,
                border: `1px solid ${C.ink}10`,
                boxShadow: `0 18px 36px -28px ${C.ink}44`,
                overflow: 'hidden',
              }}
            >
              {byYear[y].map((t, i) => {
                const tint = primaryTint(t);
                return (
                  <div
                    key={t.title}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: 24,
                      alignItems: 'start',
                      padding: '20px 28px',
                      borderTop: i === 0 ? 'none' : `1px dashed ${C.ink}18`,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: fontDisplay,
                          fontWeight: 400,
                          fontSize: 21,
                          lineHeight: 1.3,
                          color: C.ink,
                          letterSpacing: '-0.01em',
                          textWrap: 'balance',
                        }}
                      >
                        {t.title}
                      </div>
                      <div
                        style={{
                          marginTop: 6,
                          fontFamily: fontReader,
                          fontSize: 15,
                          color: C.inkSoft,
                        }}
                      >
                        <em style={{ fontStyle: 'italic' }}>{t.role}</em>
                        <span style={{ opacity: 0.5, margin: '0 8px' }}>·</span>
                        {t.where}
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '4px 10px',
                        borderRadius: 999,
                        background: `${tint}1a`,
                        color: tint,
                        fontFamily: fontUI,
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        alignSelf: 'center',
                      }}
                    >
                      {t.kind}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
