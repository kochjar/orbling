import { useEffect, useState } from "react";
import { FINDING, SCRIPT, topicFor, WAITING, type Phase, type Topic } from "./script";

export type Item =
  | { id: number; kind: "user" | "step" | "assistant"; text: string }
  | { id: number; kind: "result"; topic: Topic };

type Stage =
  | { kind: "idle" }
  | { kind: "script"; index: number; prompt: string }
  | { kind: "waiting"; prompt: string }
  | { kind: "finding"; prompt: string };

let lastId = 0;

function nextId() {
  lastId += 1;
  return lastId;
}

function statusOf(stage: Stage): Phase | null {
  if (stage.kind === "script") return SCRIPT[stage.index];
  if (stage.kind === "waiting") return WAITING;
  if (stage.kind === "finding") return FINDING;
  return null;
}

export function useDemoChat() {
  const [items, setItems] = useState<Item[]>([]);
  const [stage, setStage] = useState<Stage>({ kind: "idle" });

  function add(...next: Item[]) {
    setItems((current) => [...current, ...next]);
  }

  useEffect(() => {
    if (stage.kind === "script") {
      const phase = SCRIPT[stage.index];
      const timer = setTimeout(() => {
        if (phase.done) add({ id: nextId(), kind: "step", text: phase.done });
        const next = stage.index + 1;
        setStage(next < SCRIPT.length ? { ...stage, index: next } : { kind: "waiting", prompt: stage.prompt });
      }, phase.ms);
      return () => clearTimeout(timer);
    }
    if (stage.kind === "finding") {
      const topic = topicFor(stage.prompt);
      const timer = setTimeout(() => {
        add({ id: nextId(), kind: "assistant", text: topic.reply }, { id: nextId(), kind: "result", topic });
        setStage({ kind: "idle" });
      }, FINDING.ms);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  function send(text: string) {
    add({ id: nextId(), kind: "user", text });
    setStage({ kind: "script", index: 0, prompt: text });
  }

  function answer(choice: string) {
    if (stage.kind !== "waiting") return;
    add({ id: nextId(), kind: "user", text: choice });
    setStage({ kind: "finding", prompt: stage.prompt });
  }

  function reset() {
    setItems([]);
    setStage({ kind: "idle" });
  }

  return {
    items,
    status: statusOf(stage),
    question: stage.kind === "waiting" ? topicFor(stage.prompt) : null,
    busy: stage.kind !== "idle",
    send,
    answer,
    reset,
  };
}
