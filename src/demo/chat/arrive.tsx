import type { ReactNode } from "react";

export function Arrive({ children }: { children: ReactNode }) {
  return (
    <div className="arrive">
      <div className="arrive-inner">{children}</div>
    </div>
  );
}
