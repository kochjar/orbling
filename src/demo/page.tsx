import type { Mood } from "../orbling";
import { Controls } from "./controls";
import { MadeBy } from "./made-by";
import type { LookProps } from "./look";
import { Nav } from "./nav";
import { ChatSection, Footer, HEADLINE, InstallSection, LEDE, MoodsSection, PropsSection, UsageSection } from "./sections";
import { Showcase } from "./showcase";

export function Page({ look, onLook }: LookProps) {
  function pick(mood: Mood) {
    onLook({ mood });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="page">
      <Nav look={look} />
      <header className="centered-head">
        <h1>{HEADLINE}</h1>
        <p>{LEDE}</p>
      </header>
      <Showcase look={look} />
      <Controls look={look} onLook={onLook} />
      <main className="doc">
        <ChatSection look={look} />
        <InstallSection />
        <UsageSection />
        <MoodsSection look={look} onPick={pick} />
        <PropsSection />
        <MadeBy look={look} />
        <Footer />
      </main>
    </div>
  );
}
