import { Suspense, useState } from "react";
import { Heatmap } from "@paper-design/shaders-react";
import type { Palette } from "./moods";

const CIRCLE =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><circle cx="200" cy="200" r="150" fill="#000"/></svg>',
  );

const COLORS: Record<Palette, string[]> = {
  sky: ["#c0e4fc", "#a9c8fd", "#7ea8f8", "#7a9eeb"],
  mono: ["#ececee", "#d6d6da", "#b9b9c0", "#a6a6ad"],
  night: ["#c4e4ff", "#9ccaff", "#6aa6f6", "#4a86e4"],
};

const FILL = { position: "absolute", inset: 0, width: "100%", height: "100%" } as const;

function now() {
  return typeof performance === "undefined" ? 0 : performance.now();
}

export function Heat({ size, palette }: { size: number; palette: Palette }) {
  const [frame] = useState(now);

  return (
    <Suspense fallback={<span className="orbling-heat" />}>
      <Heatmap
        suspendWhenProcessingImage
        maxPixelCount={(size * 2) ** 2}
        style={FILL}
        image={CIRCLE}
        colorBack="#00000000"
        colors={COLORS[palette]}
        contour={0.6}
        innerGlow={0.5}
        outerGlow={1}
        noise={0.2}
        scale={1.3}
        speed={0.3}
        frame={frame}
      />
    </Suspense>
  );
}
