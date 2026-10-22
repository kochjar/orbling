import SegmentedControl from "@/components/arc/segmented-control/segmented-control";
import { Slider } from "@/components/arc/slider/slider";
import { MOOD_NAMES, PALETTES, type Mood, type Palette } from "../orbling";
import { COPY } from "./copy";
import type { LookProps } from "./look";
import { MoodGrid } from "./mood-grid";

const MOOD_OPTIONS = MOOD_NAMES.map((mood) => ({ value: mood, label: COPY[mood].title }));

const PALETTE_OPTIONS = PALETTES.map((palette) => ({ value: palette, label: palette[0].toUpperCase() + palette.slice(1) }));

function degrees(value: number) {
  return `${value}°`;
}

export function Controls({ look, onLook }: LookProps) {
  function handleMood(mood: string) {
    onLook({ mood: mood as Mood });
  }

  function handlePalette(palette: string) {
    onLook({ palette: palette as Palette });
  }

  function handleHue(hue: number) {
    onLook({ hue });
  }

  return (
    <div className="controls">
      <div className="mood-wide">
        <SegmentedControl label="Mood" options={MOOD_OPTIONS} value={look.mood} onValueChange={handleMood} />
      </div>
      <MoodGrid mood={look.mood} onMood={handleMood} />
      <div className="controls-style">
        <SegmentedControl label="Palette" options={PALETTE_OPTIONS} value={look.palette} onValueChange={handlePalette} />
        <Slider className="controls-hue" label="Hue" min={0} max={359} value={look.hue} onValueChange={handleHue} format={degrees} />
      </div>
    </div>
  );
}
