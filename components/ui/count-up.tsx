'use client';

import { useEffect, useRef, useState } from 'react';

// Parse "+127%", "−15h", "5+", "100 %" etc. into parts.
function parse(value: string) {
  const m = value.match(/^([^0-9]*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m) return null;
  const num = parseFloat(m[2].replace(',', '.'));
  if (num === 0) return null; // 0 → skip animation
  return { prefix: m[1], num, suffix: m[3], isInt: Number.isInteger(num) };
}

export function CountUp({
  value,
  duration = 1600,
  style,
}: {
  value: string;
  duration?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value);

  const [text, setText] = useState(() =>
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed) { setText(value); return; }
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();

        const start = performance.now();
        const { prefix, num, suffix, isInt } = parsed;

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - t) ** 3; // ease-out cubic
          const cur = eased * num;
          setText(`${prefix}${isInt ? Math.round(cur) : cur.toFixed(1)}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span
      ref={ref}
      // These two props make the count-up work inside gradient-text parents
      // (WebkitBackgroundClip:text + WebkitTextFillColor:transparent).
      // They are harmless when the parent doesn't use gradient text.
      style={{ WebkitBackgroundClip: 'text', background: 'inherit', ...style }}
    >
      {text}
    </span>
  );
}
