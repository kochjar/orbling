import { Orbling, OrblingStatus } from "../orbling";
import type { Look } from "./look";

export function Showcase({ look }: { look: Look }) {
  return (
    <div className="showcase">
      <div className="showcase-orb">
        <Orbling mood={look.mood} size={168} palette={look.palette} hue={look.hue} />
      </div>
      <div className="showcase-status">
        <OrblingStatus mood={look.mood} palette={look.palette} hue={look.hue} />
      </div>
    </div>
  );
}
