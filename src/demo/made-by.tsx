import { ArrowRight } from "lucide-react";
import { Orbling } from "../orbling";
import type { Look } from "./look";

export function MadeBy({ look }: { look: Look }) {
  return (
    <a className="made-by" href="https://www.tables.so">
      <span className="made-by-copy">
        <span className="made-by-title">Made by Tables</span>
        <span className="made-by-text">Want more sales from cold calling? Tables puts you in touch with the right people, not just a big list.</span>
        <span className="made-by-link">
          Try Tables
          <ArrowRight size={14} strokeWidth={2} />
        </span>
      </span>
      <span className="made-by-orb">
        <Orbling size={420} palette={look.palette} />
      </span>
    </a>
  );
}
