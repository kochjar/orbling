import type { Mood } from "../orbling";
import { Chat } from "./chat/chat";
import { Install } from "./install";
import type { Look } from "./look";
import { MoodList } from "./mood-list";
import { PropList } from "./prop-list";
import { Usage } from "./usage";

export const HEADLINE = "An orb for AI chat.";

export const LEDE =
  "An open-source React component that shows what your assistant is doing, from thinking to asking a question. Added with one prompt.";

export function ChatSection({ look }: { look: Look }) {
  return (
    <section className="section">
      <h2>In a chat</h2>
      <Chat palette={look.palette} hue={look.hue} />
    </section>
  );
}

export function InstallSection() {
  return (
    <section className="section" id="install">
      <h2>Install</h2>
      <Install />
    </section>
  );
}

export function UsageSection() {
  return (
    <section className="section">
      <h2>Usage</h2>
      <Usage />
    </section>
  );
}

export function MoodsSection({ look, onPick }: { look: Look; onPick: (mood: Mood) => void }) {
  return (
    <section className="section" id="moods">
      <h2>Moods</h2>
      <MoodList mood={look.mood} palette={look.palette} hue={look.hue} onPick={onPick} />
    </section>
  );
}

export function PropsSection() {
  return (
    <section className="section">
      <h2>Props</h2>
      <PropList />
    </section>
  );
}

export function Footer() {
  return <footer className="footer">MIT licensed.</footer>;
}
