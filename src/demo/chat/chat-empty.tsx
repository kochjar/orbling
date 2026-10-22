import { ArrowUpRight } from "lucide-react";
import { Orbling, type Palette } from "../../orbling";
import { SUGGESTIONS } from "./script";

function Suggestion({ text, onPick }: { text: string; onPick: (text: string) => void }) {
  function handleClick() {
    onPick(text);
  }

  return (
    <button type="button" className="chat-suggestion" onClick={handleClick}>
      {text}
      <ArrowUpRight size={14} strokeWidth={2} />
    </button>
  );
}

type ChatEmptyProps = { palette: Palette; hue: number; onPick: (text: string) => void };

export function ChatEmpty({ palette, hue, onPick }: ChatEmptyProps) {
  return (
    <div className="chat-empty">
      <Orbling size={52} palette={palette} hue={hue} />
      <p>What can I help with?</p>
      <div className="chat-suggestions">
        {SUGGESTIONS.map((text) => (
          <Suggestion key={text} text={text} onPick={onPick} />
        ))}
      </div>
    </div>
  );
}
