import { useEffect, useRef } from "react";
import { RotateCcw } from "lucide-react";
import { OrblingStatus, type Palette } from "../../orbling";
import { Arrive } from "./arrive";
import { ChatComposer } from "./chat-composer";
import { ChatEmpty } from "./chat-empty";
import { ChatItem } from "./chat-items";
import { ChatQuestion } from "./chat-question";
import { useDemoChat } from "./use-demo-chat";

export function Chat({ palette, hue }: { palette: Palette; hue: number }) {
  const chat = useDemoChat();
  const scroller = useRef<HTMLDivElement>(null);
  const thread = useRef<HTMLDivElement>(null);
  const empty = chat.items.length === 0;

  useEffect(() => {
    const element = scroller.current;
    const content = thread.current;
    if (!element || !content) return;
    const observer = new ResizeObserver(() => {
      element.scrollTop = element.scrollHeight;
    });
    observer.observe(content);
    return () => observer.disconnect();
  }, [empty]);

  return (
    <section className="chat" aria-label="Example chat">
      <header className="chat-header">
        <span>Ask AI</span>
        <button type="button" className="chat-reset" onClick={chat.reset} disabled={empty} aria-label="New chat">
          <RotateCcw size={14} strokeWidth={2} />
        </button>
      </header>
      <div ref={scroller} className="chat-scroll">
        {empty ? (
          <ChatEmpty palette={palette} hue={hue} onPick={chat.send} />
        ) : (
          <div ref={thread} className="chat-thread">
            {chat.items.map((item) => (
              <Arrive key={item.id}>
                <ChatItem item={item} />
              </Arrive>
            ))}
            {chat.status && (
              <Arrive>
                <div className="chat-status">
                  <OrblingStatus
                    key={chat.status.mood}
                    mood={chat.status.mood}
                    label={chat.status.label}
                    palette={palette}
                    hue={hue}
                    heat
                  />
                </div>
              </Arrive>
            )}
            {chat.question && (
              <Arrive>
                <ChatQuestion topic={chat.question} onAnswer={chat.answer} />
              </Arrive>
            )}
          </div>
        )}
      </div>
      <ChatComposer disabled={chat.busy} onSend={chat.send} />
    </section>
  );
}
