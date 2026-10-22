import { MOODS } from "./moods";
import { Orbling, type OrblingProps } from "./orbling";

export function OrblingStatus({ mood = "idle", label, size = 16, heat = false, className = "", ...orb }: OrblingProps) {
  return (
    <span className={`orbling-status ${className}`.trim()} role="status">
      <Orbling {...orb} mood={mood} size={size} heat={heat} />
      <span className="orbling-label">{label ?? MOODS[mood].label}</span>
    </span>
  );
}
