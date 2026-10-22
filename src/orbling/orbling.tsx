import { useRef, type CSSProperties } from "react";
import { Ball } from "./ball";
import { Effects } from "./effects";
import type { Mood, Palette } from "./moods";
import { useAct } from "./use-act";
import { useGaze } from "./use-gaze";
import "./orbling.css";

export type OrblingProps = {
  mood?: Mood;
  size?: number;
  palette?: Palette;
  hue?: number;
  heat?: boolean;
  label?: string;
  className?: string;
};

export function Orbling({
  mood = "idle",
  size = 72,
  palette = "sky",
  hue = 0,
  heat = true,
  label,
  className = "",
}: OrblingProps) {
  const root = useRef<HTMLSpanElement>(null);
  const [act, advance] = useAct(mood);
  const style = { fontSize: size, "--hue": `${hue}deg` } as CSSProperties;

  useGaze(root, act === "watch");

  return (
    <span
      ref={root}
      className={`orbling ${className}`.trim()}
      data-act={act}
      data-palette={palette}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={!label}
    >
      <span key={act} className="orbling-clock" onAnimationIteration={advance} />
      <Effects />
      <span className="orbling-body">
        <span className="orbling-mask">
          <Ball size={size} heat={heat} palette={palette} />
          <span className="orbling-shade" />
        </span>
        <span className="orbling-tint" />
      </span>
    </span>
  );
}
