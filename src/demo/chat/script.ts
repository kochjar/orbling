import type { Mood } from "../../orbling";

export type Phase = { mood: Mood; label: string; ms: number; done?: string };

export type Topic = {
  question: string;
  options: string[];
  title: string;
  reply: string;
};

export const SCRIPT: Phase[] = [
  { mood: "thinking", label: "Thinking…", ms: 2600, done: "Thought for 3s" },
  { mood: "reading", label: "Searching the web…", ms: 3000, done: "Searched the web" },
  { mood: "working", label: "Setting up filters…", ms: 2800, done: "Set up 4 filters" },
  { mood: "asking", label: "Asking a question…", ms: 2200 },
];

export const WAITING: Phase = { mood: "waiting", label: "Waiting for your answer…", ms: 0 };

export const FINDING: Phase = { mood: "working", label: "Finding matches…", ms: 2600 };

const TOPICS: Record<string, Topic> = {
  "Find SaaS founders in Copenhagen": {
    question: "Which company size should I focus on?",
    options: ["1 to 50 people", "50 to 500 people", "Any size"],
    title: "SaaS founders in Copenhagen",
    reply: "Done. I looked into SaaS founders at companies in Copenhagen and found 480 people that might be relevant.",
  },
  "Sales leaders at fintechs in London": {
    question: "How senior should they be?",
    options: ["Heads of sales", "VPs and above", "Both"],
    title: "Sales leaders at London fintechs",
    reply: "Done. I found 212 sales leaders at fintech companies in London.",
  },
  "Marketing agencies in Berlin": {
    question: "How big should the agencies be?",
    options: ["Under 10 people", "10 to 50 people", "Any size"],
    title: "Marketing agencies in Berlin",
    reply: "Done. I found 340 marketing agencies in Berlin that match.",
  },
};

export const SUGGESTIONS = Object.keys(TOPICS);

export function topicFor(prompt: string): Topic {
  return (
    TOPICS[prompt] ?? {
      question: "Which company size should I focus on?",
      options: ["1 to 50 people", "50 to 500 people", "Any size"],
      title: prompt,
      reply: "Done. I found 150 people that might be relevant.",
    }
  );
}
