export type Mood =
  | "idle"
  | "thinking"
  | "reading"
  | "typing"
  | "working"
  | "asking"
  | "waiting"
  | "watching"
  | "surprised"
  | "sleepy"
  | "error";

export type Palette = "sky" | "mono" | "night";

export type Act =
  | "idle"
  | "spin"
  | "ponder"
  | "read"
  | "dots"
  | "gear"
  | "wonder"
  | "stamp"
  | "down"
  | "watch"
  | "surprise"
  | "sleep"
  | "shake";

type MoodSpec = { label: string; loop: Act[]; intro?: Act };

export const MOODS: Record<Mood, MoodSpec> = {
  idle: { label: "Idle", loop: ["idle"] },
  thinking: { label: "Thinking…", intro: "spin", loop: ["ponder"] },
  reading: { label: "Reading…", loop: ["read"] },
  typing: { label: "Typing…", loop: ["dots"] },
  working: { label: "Working…", loop: ["gear"] },
  asking: { label: "Asking…", loop: ["wonder", "stamp"] },
  waiting: { label: "Waiting…", loop: ["down"] },
  watching: { label: "Watching", loop: ["watch"] },
  surprised: { label: "Surprised", loop: ["surprise"] },
  sleepy: { label: "Sleepy", loop: ["sleep"] },
  error: { label: "Error", loop: ["shake"] },
};

export const MOOD_NAMES = Object.keys(MOODS) as Mood[];

export const PALETTES: Palette[] = ["sky", "mono", "night"];
