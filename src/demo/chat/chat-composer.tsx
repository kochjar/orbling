import { useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp } from "lucide-react";

type ChatComposerProps = { disabled: boolean; onSend: (text: string) => void };

export function ChatComposer({ disabled, onSend }: ChatComposerProps) {
  const [text, setText] = useState("");
  const ready = !disabled && text.trim().length > 0;

  function submit() {
    if (!ready) return;
    onSend(text.trim());
    setText("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    submit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  }

  function handleChange(event: FormEvent<HTMLTextAreaElement>) {
    setText(event.currentTarget.value);
  }

  return (
    <form className="chat-composer" onSubmit={handleSubmit}>
      <textarea
        rows={2}
        value={text}
        placeholder="Ask anything"
        aria-label="Message"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="chat-send" disabled={!ready} aria-label="Send">
        <ArrowUp size={16} strokeWidth={2.25} />
      </button>
    </form>
  );
}
