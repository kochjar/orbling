import { MOOD_NAMES, type Mood } from "../orbling";
import { COPY } from "./copy";

type MoodGridProps = { mood: Mood; onMood: (mood: Mood) => void };

function MoodCell({ mood, active, onMood }: { mood: Mood; active: boolean; onMood: (mood: Mood) => void }) {
  function handleClick() {
    onMood(mood);
  }

  return (
    <button type="button" className="mood-cell" aria-pressed={active} onClick={handleClick}>
      {COPY[mood].title}
    </button>
  );
}

export function MoodGrid({ mood, onMood }: MoodGridProps) {
  return (
    <div className="mood-grid" role="group" aria-label="Mood">
      {MOOD_NAMES.map((name) => (
        <MoodCell key={name} mood={name} active={name === mood} onMood={onMood} />
      ))}
    </div>
  );
}
