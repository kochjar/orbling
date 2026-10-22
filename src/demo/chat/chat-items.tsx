import { ArrowUpRight, Check } from "lucide-react";
import type { Topic } from "./script";
import type { Item } from "./use-demo-chat";

function ResultCard({ topic }: { topic: Topic }) {
  return (
    <div className="chat-result">
      <div className="chat-result-copy">
        <p className="chat-result-title">{topic.title}</p>
        <p className="chat-result-meta">
          Orbling is made by Tables
        </p>
      </div>
      <a className="chat-result-open" href="https://www.tables.so" target="_blank" rel="noreferrer">
        Take a look
        <ArrowUpRight size={14} strokeWidth={2} />
      </a>
    </div>
  );
}

export function ChatItem({ item }: { item: Item }) {
  if (item.kind === "result") return <ResultCard topic={item.topic} />;
  if (item.kind === "user") return <p className="chat-user">{item.text}</p>;
  if (item.kind === "assistant") return <p className="chat-assistant">{item.text}</p>;
  return (
    <p className="chat-step">
      <Check size={14} strokeWidth={2.25} />
      {item.text}
    </p>
  );
}
