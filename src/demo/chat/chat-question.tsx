import type { Topic } from "./script";

function Option({ text, onPick }: { text: string; onPick: (text: string) => void }) {
  function handleClick() {
    onPick(text);
  }

  return (
    <button type="button" className="chat-option" onClick={handleClick}>
      {text}
    </button>
  );
}

export function ChatQuestion({ topic, onAnswer }: { topic: Topic; onAnswer: (text: string) => void }) {
  return (
    <div className="chat-question">
      <p className="chat-question-title">{topic.question}</p>
      <div className="chat-options">
        {topic.options.map((option) => (
          <Option key={option} text={option} onPick={onAnswer} />
        ))}
      </div>
    </div>
  );
}
