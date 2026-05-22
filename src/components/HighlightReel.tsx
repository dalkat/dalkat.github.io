import { useEffect, useState } from 'react';
import { C, fontDisplay, fontUI } from '@/lib/mesh';

export interface ReelImage {
  src: string;
  caption: string;
}

interface Props {
  images: ReelImage[];
  /** Tint used for dot active state. Defaults to coral. */
  tint?: string;
  /** Auto-advance interval in ms. 0 disables auto-rotate. */
  intervalMs?: number;
}

/**
 * Carousel for the sabbatical-update highlight reels. Modeled on the
 * design's ImageCarousel (content-pages.jsx) but renders real <img>
 * elements rather than mesh placeholders.
 */
export default function HighlightReel({ images, tint = C.coral, intervalMs = 5200 }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = images.length;

  useEffect(() => {
    if (paused || intervalMs <= 0 || n <= 1) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), intervalMs);
    return () => clearInterval(t);
  }, [paused, intervalMs, n]);

  if (n === 0) return null;
  const img = images[i];

  return (
    <div
      style={{
        margin: '40px 0',
        padding: '24px 24px 22px',
        background: C.paper2,
        borderRadius: 22,
        border: `1px solid ${C.ink}10`,
      }}
    >
      {/* Frame */}
      <div style={{ display: 'grid', placeItems: 'center', minHeight: 340 }}>
        <div
          className="mesh-carousel-frame"
          style={{
            position: 'relative',
            maxWidth: '100%',
            borderRadius: 14,
            overflow: 'hidden',
            background: C.white,
            border: `1px solid ${C.ink}12`,
            boxShadow: `0 18px 36px -22px ${C.ink}66`,
            transition: 'all .4s ease',
          }}
        >
          <img
            src={img.src}
            alt={img.caption}
            loading="lazy"
            style={{
              display: 'block',
              maxWidth: '100%',
              maxHeight: 460,
              objectFit: 'contain',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 14,
              top: 14,
              padding: '4px 10px',
              background: C.white,
              borderRadius: 999,
              fontFamily: '"DM Mono", monospace',
              fontSize: 10,
              color: C.inkSoft,
              letterSpacing: '0.06em',
              boxShadow: `0 4px 10px -6px ${C.ink}55`,
            }}
          >
            {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </div>
        </div>
      </div>
      {/* Caption + controls */}
      <div style={{ marginTop: 18, display: 'grid', gap: 10 }}>
        <div
          style={{
            fontFamily: fontDisplay,
            fontStyle: 'italic',
            fontSize: 16,
            lineHeight: 1.5,
            color: C.ink,
            textWrap: 'pretty',
            minHeight: 48,
          }}
        >
          {img.caption}
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to image ${idx + 1}`}
              onClick={() => {
                setPaused(true);
                setI(idx);
              }}
              style={{
                width: idx === i ? 28 : 8,
                height: 8,
                padding: 0,
                border: 'none',
                background:
                  idx === i
                    ? `linear-gradient(90deg, ${tint}, ${C.plum})`
                    : `${C.ink}20`,
                borderRadius: 4,
                cursor: 'pointer',
                transition: 'width .3s, background .3s',
              }}
            />
          ))}
          <button
            aria-label="Previous"
            onClick={() => {
              setPaused(true);
              setI((x) => (x - 1 + n) % n);
            }}
            style={{
              marginLeft: 'auto',
              width: 30,
              height: 30,
              padding: 0,
              border: 'none',
              background: C.white,
              color: C.ink,
              borderRadius: 999,
              cursor: 'pointer',
              fontFamily: fontUI,
              fontSize: 14,
              fontWeight: 700,
              boxShadow: `0 4px 10px -6px ${C.ink}55`,
            }}
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={() => {
              setPaused(true);
              setI((x) => (x + 1) % n);
            }}
            style={{
              width: 30,
              height: 30,
              padding: 0,
              border: 'none',
              background: C.white,
              color: C.ink,
              borderRadius: 999,
              cursor: 'pointer',
              fontFamily: fontUI,
              fontSize: 14,
              fontWeight: 700,
              boxShadow: `0 4px 10px -6px ${C.ink}55`,
            }}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
