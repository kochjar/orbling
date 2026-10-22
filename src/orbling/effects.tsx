import { useId, type CSSProperties } from "react";

const ZS = [0, 1, 2];

function QuestionMark() {
  const gradient = useId();

  return (
    <svg className="orbling-q" viewBox="0 0 100 140">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--blue)" />
          <stop offset="1" stopColor="var(--blue-deep)" />
        </linearGradient>
      </defs>
      <path
        className="orbling-q-hook"
        pathLength={1}
        stroke={`url(#${gradient})`}
        d="M24 40 C24 18 40 6 58 6 C78 6 92 20 92 38 C92 56 78 64 68 72 C61 78 58 84 58 96"
      />
      <circle className="orbling-q-dot" cx="58" cy="122" r="10" />
    </svg>
  );
}

function Bang() {
  return (
    <svg className="orbling-bang" viewBox="0 0 40 100">
      <path d="M20 4 C27 4 31 9 30 16 L26 62 C25.5 67 23 69 20 69 C17 69 14.5 67 14 62 L10 16 C9 9 13 4 20 4 Z" />
      <circle cx="20" cy="87" r="9" />
    </svg>
  );
}

export function Effects() {
  return (
    <span className="orbling-fx">
      <span className="orbling-dot" data-side="l" />
      <span className="orbling-dot" data-side="r" />
      {ZS.map((i) => (
        <span key={i} className="orbling-z" style={{ "--i": i } as CSSProperties}>
          z
        </span>
      ))}
      <QuestionMark />
      <Bang />
    </span>
  );
}
