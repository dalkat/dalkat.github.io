import { useEffect, useRef, useState } from 'react';
import { C, fontDisplay, fontUI, meshBg } from '@/lib/mesh';
import type { Testimonial } from '@/data/home';

interface Props {
  testimonials: Testimonial[];
  intervalMs?: number;
}

/**
 * Auto-rotating testimonial card with three navigation modes:
 *   - click a page indicator to jump to that quote (pauses autoplay)
 *   - hover anywhere on the card to pause autoplay (resumes on leave)
 *   - drag horizontally (mouse or touch) to swipe between quotes
 *     (>= 40px horizontal travel commits the swipe, pauses autoplay)
 *
 * Drag tracking is split between refs (instant, no re-render lag – used
 * by the move/end checks) and state (drives the visual transform so
 * each pointermove paints the card following the cursor/finger).
 */
export default function PraiseCarousel({ testimonials, intervalMs = 5400 }: Props) {
  const [i, setI] = useState(0);
  const [pausedByClick, setPausedByClick] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [phase, setPhase] = useState<'in' | 'out'>('in');
  const [direction, setDirection] = useState(1);
  const startXRef = useRef<number | null>(null);
  const lastOffsetRef = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);

  const paused = pausedByClick || hovering || dragging || phase === 'out';

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      goto(i + 1, false);
    }, intervalMs);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, intervalMs, testimonials.length, i]);

  const goto = (idx: number, lock = true) => {
    const targetIdx = ((idx % testimonials.length) + testimonials.length) % testimonials.length;
    if (targetIdx === i) return;
    const forwardDist = (targetIdx - i + testimonials.length) % testimonials.length;
    const backwardDist = (i - targetIdx + testimonials.length) % testimonials.length;
    setDirection(forwardDist <= backwardDist ? 1 : -1);
    setPhase('out');
    if (lock) setPausedByClick(true);
    window.setTimeout(() => {
      setI(targetIdx);
      setPhase('in');
    }, 180);
  };

  const onDragStart = (clientX: number) => {
    startXRef.current = clientX;
    lastOffsetRef.current = 0;
    setDragOffset(0);
    setDragging(true);
  };
  const onDragMove = (clientX: number) => {
    if (startXRef.current === null) return;
    const off = clientX - startXRef.current;
    lastOffsetRef.current = off;
    setDragOffset(off);
  };
  const onDragEnd = () => {
    if (startXRef.current === null) return;
    const delta = lastOffsetRef.current;
    startXRef.current = null;
    lastOffsetRef.current = 0;
    setDragOffset(0);
    setDragging(false);
    if (Math.abs(delta) >= 40) {
      goto(delta > 0 ? i - 1 : i + 1);
    }
  };

  const t = testimonials[i];
  if (!t) return null;

  // While dragging, follow the cursor; otherwise translate based on phase.
  // 'out' phase shifts the content slightly in the travel direction; 'in'
  // sits at 0. Combined with opacity, this makes the swap visible.
  const phaseShift = phase === 'out' ? direction * -18 : 0;
  const contentTransform = dragging
    ? `translateX(${dragOffset * 0.35}px)`
    : `translateX(${phaseShift}px)`;

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        onDragEnd();
      }}
      onMouseDown={(e) => onDragStart(e.clientX)}
      onMouseMove={(e) => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onTouchStart={(e) => onDragStart(e.touches[0]?.clientX ?? 0)}
      onTouchMove={(e) => onDragMove(e.touches[0]?.clientX ?? 0)}
      onTouchEnd={onDragEnd}
      style={{
        background: C.white,
        borderRadius: 28,
        padding: '48px 52px',
        position: 'relative',
        boxShadow: `0 30px 60px -30px ${C.ink}44, 0 0 0 1px ${C.ink}08`,
        cursor: dragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        // Lets vertical scroll pass through but the carousel handles
        // horizontal touch gestures itself.
        touchAction: 'pan-y',
      }}
    >
      <div
        // Block drag/hover handling on the page counter pill – it's a
        // visual label, not a swipe surface. stopPropagation prevents
        // the counter from initiating a drag or pausing the carousel.
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onMouseEnter={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          top: -22,
          left: 32,
          padding: '8px 14px',
          background: meshBg({ base: C.coral, blobs: [[C.butter, 50, 50, 70]] }),
          color: C.ink,
          borderRadius: 999,
          fontFamily: fontUI,
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 700,
          boxShadow: `0 12px 22px -10px ${C.coral}aa`,
          cursor: 'default',
        }}
      >
        {String(i + 1).padStart(2, '0')} of {String(testimonials.length).padStart(2, '0')}
      </div>

      {/* Sliding/fading content block – wraps the quote + author so they
          animate together. Drag offset + phase-driven translate apply
          here. The page-indicator dots sit OUTSIDE this block (below)
          so they stay static during drag – readers track progress
          against the fixed indicator while the quote scrolls. */}
      <div
        style={{
          opacity: phase === 'out' ? 0 : 1,
          transform: contentTransform,
          transition: dragging
            ? 'none'
            : 'opacity .18s ease-out, transform .22s ease-out',
        }}
      >
        <blockquote
          className="mesh-praise-quote"
          style={{
            margin: 0,
            fontFamily: fontDisplay,
            fontWeight: 300,
            fontSize: 24,
            lineHeight: 1.4,
            color: C.ink,
            textWrap: 'pretty',
            minHeight: 200,
          }}
        >
          "{t.quote}"
        </blockquote>
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: `1px solid ${C.ink}10` }}>
          <div
            style={{
              fontFamily: fontDisplay,
              fontStyle: 'italic',
              fontSize: 18,
              color: C.plum,
            }}
          >
            {t.author}
          </div>
          <div style={{ fontSize: 13, color: C.inkSoft, fontFamily: fontUI }}>{t.role}</div>
        </div>
      </div>

      {/* Static page indicator – outside the drag-transform block so it
          doesn't slide with the quote. Desktop: bottom-right corner.
          Mobile: reflows below the author info, centered (the mobile
          shim in global.css handles the override). */}
      <div
        className="mesh-praise-dots"
        style={{
          position: 'absolute',
          right: 52,
          bottom: 40,
          display: 'flex',
          gap: 8,
        }}
      >
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to testimonial ${idx + 1}`}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              goto(idx);
            }}
            style={{
              width: idx === i ? 32 : 10,
              height: 10,
              padding: 0,
              border: 'none',
              background:
                idx === i
                  ? `linear-gradient(90deg, ${C.coral}, ${C.plum})`
                  : `${C.ink}22`,
              borderRadius: 5,
              cursor: 'pointer',
              transition: 'width .3s, background .3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
