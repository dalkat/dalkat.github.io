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
 *     (>= 50px horizontal travel commits the swipe, pauses autoplay)
 */
export default function PraiseCarousel({ testimonials, intervalMs = 5400 }: Props) {
  const [i, setI] = useState(0);
  const [pausedByClick, setPausedByClick] = useState(false);
  const [hovering, setHovering] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragLastX = useRef<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const paused = pausedByClick || hovering || dragStartX.current != null;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), intervalMs);
    return () => clearInterval(t);
  }, [paused, intervalMs, testimonials.length]);

  const goto = (idx: number, lock = true) => {
    setI(((idx % testimonials.length) + testimonials.length) % testimonials.length);
    if (lock) setPausedByClick(true);
  };

  const onDragStart = (clientX: number) => {
    dragStartX.current = clientX;
    dragLastX.current = clientX;
    setDragOffset(0);
  };
  const onDragMove = (clientX: number) => {
    if (dragStartX.current == null) return;
    dragLastX.current = clientX;
    setDragOffset(clientX - dragStartX.current);
  };
  const onDragEnd = () => {
    if (dragStartX.current == null) return;
    const delta = (dragLastX.current ?? dragStartX.current) - dragStartX.current;
    dragStartX.current = null;
    dragLastX.current = null;
    setDragOffset(0);
    if (Math.abs(delta) >= 50) {
      // Drag-right → previous, drag-left → next
      goto(delta > 0 ? i - 1 : i + 1);
    }
  };

  const t = testimonials[i];
  if (!t) return null;

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
        cursor: dragStartX.current != null ? 'grabbing' : 'grab',
        transform: `translateX(${dragOffset * 0.35}px)`,
        transition: dragStartX.current != null ? 'none' : 'transform .25s ease-out',
        userSelect: 'none',
        // Lets vertical scroll pass through but the carousel handles
        // horizontal touch gestures itself.
        touchAction: 'pan-y',
      }}
    >
      <div
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
        }}
      >
        {String(i + 1).padStart(2, '0')} of {String(testimonials.length).padStart(2, '0')}
      </div>
      <blockquote
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
      <div
        style={{
          marginTop: 24,
          paddingTop: 18,
          borderTop: `1px solid ${C.ink}10`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
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
        <div style={{ display: 'flex', gap: 8 }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={(e) => {
                // Click events fire after mouseup, so stop the click from
                // propagating into the drag handler that just fired.
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
    </div>
  );
}
