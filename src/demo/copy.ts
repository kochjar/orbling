import type { Mood } from "../orbling";

type MoodCopy = { title: string; line: string };

export const COPY: Record<Mood, MoodCopy> = {
  idle: { title: "Idle", line: "Breathes, blinks and glances around." },
  thinking: { title: "Thinking", line: "Spins up, then tilts its head and looks up one way, then the other, and nods." },
  reading: { title: "Reading", line: "Reads line by line, left to right." },
  typing: { title: "Typing", line: "Turns into three dots that ride a wave." },
  working: { title: "Working", line: "Becomes a turning gear." },
  asking: { title: "Asking", line: "Wonders with a question mark, then has one land on its head." },
  waiting: { title: "Waiting", line: "Looks down at the question and waits for an answer." },
  watching: { title: "Watching", line: "Its eyes follow your pointer around the page." },
  surprised: { title: "Surprised", line: "Jumps with wide eyes." },
  sleepy: { title: "Sleepy", line: "Nods off while z's drift up, then wakes with a blink." },
  error: { title: "Error", line: "Shakes its head and looks down." },
};

export const PROPS = [
  { name: "mood", type: "Mood", line: "What it's doing. Defaults to idle." },
  { name: "size", type: "number", line: "Diameter in px. Everything scales with it. Defaults to 72." },
  { name: "palette", type: "\"sky\" | \"mono\" | \"night\"", line: "The colours. Sky is the blue, mono is greys, night is a brighter blue for dark backgrounds. Defaults to sky." },
  { name: "hue", type: "number", line: "Turns the orb's colours round the colour wheel, in degrees. Defaults to 0, the blue." },
  { name: "heat", type: "boolean", line: "The WebGL heat. Turn it off where many orbs show at once; a CSS stand-in takes its place." },
  { name: "label", type: "string", line: "Accessible name. Without it the orb is decoration and screen readers skip it." },
];

export const INSTALL_AI = "Add orbling to this project using https://orbling.vercel.app/llms.txt";

export const INSTALL_CLI = "npx shadcn@latest add https://orbling.vercel.app/r/orbling.json";

export const USAGE = `import { Orbling } from "@/components/orbling";

<Orbling mood="thinking" size={72} />`;

export const STATUS_USAGE = `import { OrblingStatus } from "@/components/orbling";

<OrblingStatus mood="working" />`;
