'use client';

import { useEffect, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import type { DotLottie } from '@lottiefiles/dotlottie-web';

// Shared hook: observes an element and plays the Lottie once it enters the viewport.
function useLottieReveal(
  targetRef: React.RefObject<Element | null>,
  playerRef: React.RefObject<DotLottie | null>,
) {
  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playerRef.current?.play();
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [targetRef, playerRef]);
}

// ── LottieOverlay ────────────────────────────────────────────────────────────
// Drop inside any `position: relative` container.
// The Lottie fills the container exactly (inset: 0) — no overflow, no overlap.
// Observes its own parentElement for viewport entry.
export function LottieOverlay() {
  const spanRef = useRef<HTMLSpanElement>(null);
  const playerRef = useRef<DotLottie | null>(null);

  // Observe the *parent* element so the animation triggers when the card is in view.
  useEffect(() => {
    const parent = spanRef.current?.parentElement;
    if (!parent) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playerRef.current?.play();
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(parent);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={spanRef}
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <DotLottieReact
        src="/numbersanimation.lottie"
        autoplay={false}
        loop={false}
        dotLottieRefCallback={(r) => { playerRef.current = r; }}
        style={{ width: '100%', height: '100%' }}
      />
    </span>
  );
}

// ── LottieNumber ─────────────────────────────────────────────────────────────
// Inline wrapper for plain-text numbers (no WebkitBackgroundClip).
// Applies style to the *outer* span — safe because children use inherited colour.
export function LottieNumber({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const playerRef = useRef<DotLottie | null>(null);
  useLottieReveal(wrapRef, playerRef);

  return (
    <span
      ref={wrapRef}
      style={{ position: 'relative', display: 'inline-block', ...style }}
    >
      <span
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <DotLottieReact
          src="/numbersanimation.lottie"
          autoplay={false}
          loop={false}
          dotLottieRefCallback={(r) => { playerRef.current = r; }}
          style={{ width: '100%', height: '100%' }}
        />
      </span>
      {/* No extra span — children are direct so WebkitBackgroundClip etc. works */}
      {children}
    </span>
  );
}
