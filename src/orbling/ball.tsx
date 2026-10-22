import { Heat } from "./heat";
import type { Palette } from "./moods";

export function Ball({ size, heat, palette }: { size: number; heat: boolean; palette: Palette }) {
  return (
    <span className="orbling-ball">
      {heat ? <Heat size={size} palette={palette} /> : <span className="orbling-heat" />}
      <span className="orbling-gloss" />
      <span className="orbling-eyes">
        <i />
        <i />
      </span>
    </span>
  );
}
