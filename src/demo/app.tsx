import { useEffect, useState } from "react";
import type { Look } from "./look";
import { Page } from "./page";

export function App() {
  const [look, setLook] = useState<Look>({ mood: "thinking", palette: "sky", hue: 0 });

  useEffect(() => {
    document.documentElement.dataset.theme = look.palette === "night" ? "dark" : "light";
  }, [look.palette]);

  function changeLook(patch: Partial<Look>) {
    setLook((current) => ({ ...current, ...patch }));
  }

  return <Page look={look} onLook={changeLook} />;
}
