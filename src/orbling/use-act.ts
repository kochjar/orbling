import { useState } from "react";
import { MOODS, type Act, type Mood } from "./moods";

function actAt(mood: Mood, step: number): Act {
  const { intro, loop } = MOODS[mood];
  if (intro && step === 0) return intro;
  return loop[(intro ? step - 1 : step) % loop.length];
}

export function useAct(mood: Mood) {
  const [play, setPlay] = useState({ mood, step: 0 });

  if (play.mood !== mood) setPlay({ mood, step: 0 });

  function advance() {
    setPlay((current) => ({ ...current, step: current.step + 1 }));
  }

  return [actAt(mood, play.step), advance] as const;
}
