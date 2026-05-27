import { useState, type CSSProperties, type FocusEvent, type FormEvent } from 'react';
import { C, fontDisplay, fontUI, meshBg } from '@/lib/mesh';

interface Props {
  accent?: string;
  compact?: boolean;
}

/**
 * Mesh contact form. Six fields, mesh-tinted submit button. Success state
 * swaps the form for a card saying "Got it — talk soon."
 *
 * Submit POSTs directly to Formspree at the endpoint below. The endpoint
 * is just a public URL routed to Dalia's email — no secret, no env var
 * required. Swap the email below if the destination ever changes.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgoqrvoj';

export default function ContactForm({ accent = C.coral, compact = false }: Props) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fieldStyle: CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    background: C.white,
    color: C.ink,
    border: `1px solid ${C.ink}18`,
    borderRadius: 14,
    fontFamily: fontUI,
    fontSize: 15,
    lineHeight: 1.4,
    outline: 'none',
    resize: 'none',
    transition: 'border-color .15s, box-shadow .15s',
  };
  const labelStyle: CSSProperties = {
    display: 'block',
    marginBottom: 8,
    fontFamily: fontUI,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: C.inkSoft,
  };
  const onFocus = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = accent;
    e.target.style.boxShadow = `0 0 0 3px ${accent}33`;
  };
  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = `${C.ink}18`;
    e.target.style.boxShadow = 'none';
  };

  if (sent) {
    return (
      <div
        style={{
          padding: '32px 36px',
          background: C.white,
          borderRadius: 22,
          border: `1px solid ${C.ink}10`,
          boxShadow: `0 24px 50px -30px ${C.ink}44`,
        }}
      >
        <div
          style={{
            fontFamily: fontDisplay,
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 28,
            color: C.ink,
            letterSpacing: '-0.01em',
            marginBottom: 10,
          }}
        >
          Got it — talk soon.
        </div>
        <div style={{ fontFamily: fontUI, fontSize: 15, color: C.inkSoft, lineHeight: 1.5 }}>
          I read every note personally. You'll hear back from me within a week.
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

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
        const data = await res.json().catch(() => ({}));
        const msg = data?.errors?.[0]?.message || data?.error || 'Something went wrong.';
        setError(`${msg} Please try again or email Dalia directly.`);
      }
    } catch {
      setError('Network error. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: compact ? '28px 30px' : '36px 40px',
        background: C.white,
        borderRadius: 24,
        border: `1px solid ${C.ink}10`,
        boxShadow: `0 24px 50px -30px ${C.ink}44`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18,
      }}
    >
      <div>
        <label style={labelStyle}>Your name</label>
        <input type="text" name="name" placeholder="Hi, I'm…" required style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input type="email" name="email" placeholder="you@somewhere.com" required style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div>
        <label style={labelStyle}>Company or project</label>
        <input type="text" name="company" placeholder="Where you spend your time" required style={fieldStyle} onFocus={onFocus} onBlur={onBlur} />
      </div>
      <div>
        <label style={labelStyle}>Topic</label>
        <select
          name="kind"
          defaultValue=""
          required
          onFocus={onFocus}
          onBlur={onBlur}
          style={{
            ...fieldStyle,
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%234a3f6e' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center',
            paddingRight: 36,
          }}
        >
          <option value="" disabled>Pick one</option>
          <option>Fractional CPO / product leadership</option>
          <option>Founder advising</option>
          <option>Speaking, writing, or teaching</option>
          <option>Something else</option>
        </select>
      </div>
      <div style={{ gridColumn: '1 / -1' }}>
        <label style={labelStyle}>Your note</label>
        <textarea
          rows={5}
          name="message"
          placeholder="Anything you want to share — half-formed is fine."
          required
          style={{ ...fieldStyle, minHeight: 130 }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      <div
        className="mesh-form-actions"
        style={{
          gridColumn: '1 / -1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 4,
          gap: 16,
        }}
      >
        {/* Left slot: inline error message when the Formspree POST
            fails. Otherwise empty so the submit stays right-aligned
            via the parent's justify-content: space-between.
            (The "↳ engagement per quarter" copy that used to live
            here is hidden for now — see TODO.md.) */}
        {error ? (
          <div
            role="alert"
            style={{
              fontFamily: fontUI,
              fontSize: 13,
              color: '#a8552a',
              maxWidth: 360,
              lineHeight: 1.4,
            }}
          >{error}</div>
        ) : (
          <span />
        )}
        <button
          type="submit"
          disabled={submitting}
          style={{
            padding: '14px 28px',
            background: meshBg({
              base: C.ink,
              blobs: [[accent, 0, 100, 70], [C.plum, 100, 0, 70]],
            }),
            color: C.paper,
            border: 'none',
            borderRadius: 999,
            fontFamily: fontUI,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.04em',
            cursor: submitting ? 'wait' : 'pointer',
            boxShadow: `0 18px 32px -16px ${C.ink}88`,
            whiteSpace: 'nowrap',
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? 'Sending…' : 'Send the note →'}
        </button>
      </div>
    </form>
  );
}
