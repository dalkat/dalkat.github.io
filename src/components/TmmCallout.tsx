import { useState, type CSSProperties, type FocusEvent, type FormEvent } from 'react';
import { C, fontDisplay, fontUI, meshBg } from '@/lib/mesh';

/**
 * Small inline callout at the bottom of /notes/trailmix — a name +
 * email gate for the Trail Mix Method worksheet PDF.
 *
 * Same Formspree endpoint as the main /#contact form
 * (/f/mgoqrvoj); the _subject header tags inbound submissions so
 * Dalia can filter "TMM Worksheet Request" notes from regular
 * contact ones. On success the form swaps for a quiet
 * "I'll email it to you" line.
 *
 * The PDF itself lives at /TMM-Worksheet-v1.pdf in public/ — Dalia
 * sends it manually from her inbox once a request comes through.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgoqrvoj';

interface Props {
  /** Tint pulled from the article's post-tint (defaults to plum
   *  which is what tool/essay tints land on). */
  tint?: string;
}

export default function TmmCallout({ tint = C.coral }: Props) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fieldStyle: CSSProperties = {
    width: '100%',
    padding: '12px 14px',
    background: C.white,
    color: C.ink,
    border: `1px solid ${C.ink}18`,
    borderRadius: 12,
    fontFamily: fontUI,
    fontSize: 14,
    lineHeight: 1.4,
    outline: 'none',
    transition: 'border-color .15s, box-shadow .15s',
  };
  const labelStyle: CSSProperties = {
    display: 'block',
    marginBottom: 6,
    fontFamily: fontUI,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: C.inkSoft,
  };
  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = tint;
    e.target.style.boxShadow = `0 0 0 3px ${tint}33`;
  };
  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = `${C.ink}18`;
    e.target.style.boxShadow = 'none';
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    for (const field of ['name', 'email']) {
      const v = String(formData.get(field) ?? '').trim();
      if (!v) {
        setError(`Please add your ${field}.`);
        const el = form.elements.namedItem(field) as HTMLElement | null;
        el?.focus();
        return;
      }
    }

    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (sent) {
    return (
      <aside
        style={{
          margin: '48px 0 0',
          padding: '24px 28px',
          background: meshBg({
            base: C.white,
            blobs: [[`${tint}33`, 10, 50, 60], [`${C.butter}88`, 90, 50, 50]],
          }),
          border: `1px solid ${C.ink}10`,
          borderRadius: 18,
          boxShadow: `0 14px 28px -22px ${C.ink}55`,
        }}
      >
        <div
          style={{
            fontFamily: fontDisplay,
            fontStyle: 'italic',
            fontSize: 22,
            color: C.ink,
            letterSpacing: '-0.01em',
            marginBottom: 6,
          }}
        >Got it — I'll email it to you.</div>
        <div style={{ fontFamily: fontUI, fontSize: 14, color: C.inkSoft }}>
          Usually within a few days.
        </div>
      </aside>
    );
  }

  return (
    <aside
      style={{
        margin: '48px 0 0',
        padding: '28px 32px',
        background: meshBg({
          base: C.white,
          blobs: [[`${tint}22`, 10, 100, 70], [`${C.butter}66`, 100, 0, 60]],
        }),
        border: `1px solid ${C.ink}10`,
        borderRadius: 18,
        boxShadow: `0 14px 28px -22px ${C.ink}55`,
      }}
    >
      <div
        style={{
          fontFamily: fontUI,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: tint,
          marginBottom: 8,
        }}
      >Worksheet · PDF</div>
      <div
        style={{
          fontFamily: fontDisplay,
          fontWeight: 400,
          fontSize: 24,
          color: C.ink,
          letterSpacing: '-0.02em',
          marginBottom: 6,
          textWrap: 'balance',
        }}
      >Want the PDF template I use?</div>
      <p
        style={{
          margin: '0 0 18px',
          fontFamily: fontUI,
          fontSize: 14,
          lineHeight: 1.55,
          color: C.inkSoft,
          textWrap: 'pretty',
        }}
      >
        Drop your name + email below and I'll send over a digital version
        of my Trail Mix Bag — categories, weekly intentions, and a
        blank template you can fill in.
      </p>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
      >
        <input
          type="text"
          name="_subject"
          value="Trail Mix Method · Worksheet Request"
          readOnly
          hidden
        />
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
        />
        <div>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            style={fieldStyle}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@somewhere.com"
            required
            style={fieldStyle}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        <div
          style={{
            gridColumn: '1 / -1',
            marginTop: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 14,
            flexWrap: 'wrap',
          }}
        >
          {error ? (
            <div
              role="alert"
              style={{
                fontFamily: fontUI,
                fontSize: 13,
                color: '#a8552a',
                maxWidth: 280,
              }}
            >{error}</div>
          ) : (
            <span />
          )}
          <button
            type="submit"
            disabled={submitting}
            style={{
              padding: '12px 22px',
              background: meshBg({
                base: C.ink,
                blobs: [[tint, 0, 100, 70], [C.plum, 100, 0, 70]],
              }),
              color: C.paper,
              border: 'none',
              borderRadius: 999,
              fontFamily: fontUI,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '0.04em',
              cursor: submitting ? 'wait' : 'pointer',
              boxShadow: `0 14px 26px -14px ${C.ink}88`,
              whiteSpace: 'nowrap',
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? 'Sending…' : 'Send me the PDF →'}
          </button>
        </div>
      </form>
    </aside>
  );
}
