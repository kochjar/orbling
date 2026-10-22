import { MOOD_NAMES, Orbling, type Mood, type Palette } from "../orbling";
import { COPY } from "./copy";

type Style = { palette: Palette; hue: number };

type MoodListProps = Style & { mood: Mood; onPick: (mood: Mood) => void };

type MoodRowProps = Style & { mood: Mood; active: boolean; onPick: (mood: Mood) => void };

function MoodRow({ mood, palette, hue, active, onPick }: MoodRowProps) {
  function handleClick() {
    onPick(mood);
  }

  return (
    <li>
      <button type="button" className="row" aria-pressed={active} onClick={handleClick}>
        <Orbling mood={mood} size={24} palette={palette} hue={hue} heat={false} />
        <span className="row-name">{mood}</span>
        <span className="row-line">{COPY[mood].line}</span>
      </button>
    </li>
  );
}

export function MoodList({ mood, palette, hue, onPick }: MoodListProps) {
  return (
    <ul className="rows">
      {MOOD_NAMES.map((name) => (
        <MoodRow key={name} mood={name} palette={palette} hue={hue} active={name === mood} onPick={onPick} />
      ))}
    </ul>
  );
}
