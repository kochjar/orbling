import { mkdir, readFile, writeFile } from "node:fs/promises";

const SITE = "https://orbling.vercel.app";
const FILES = ["index.ts", "orbling.tsx", "status.tsx", "moods.ts", "use-act.ts", "use-gaze.ts", "ball.tsx", "heat.tsx", "effects.tsx", "orbling.css"];

const files = await Promise.all(
  FILES.map(async (name) => ({
    path: `registry/orbling/${name}`,
    type: name.endsWith(".css") ? "registry:file" : "registry:component",
    target: `components/orbling/${name}`,
    content: await readFile(new URL(`../src/orbling/${name}`, import.meta.url), "utf8"),
  })),
);

const item = {
  $schema: "https://ui.shadcn.com/schema/registry-item.json",
  name: "orbling",
  type: "registry:component",
  title: "Orbling",
  description: "An AI orb with a face that shows what an assistant is doing: thinking, reading, typing, working, asking and more.",
  dependencies: ["@paper-design/shaders-react"],
  docs: `Import from "@/components/orbling". <Orbling mood="thinking" /> or <OrblingStatus mood="working" />. Docs: ${SITE}/llms.txt`,
  files,
};

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "orbling",
  homepage: SITE,
  items: [{ ...item, files: files.map(({ content, ...file }) => file) }],
};

await mkdir(new URL("../public/r", import.meta.url), { recursive: true });
await writeFile(new URL("../public/r/orbling.json", import.meta.url), `${JSON.stringify(item, null, 2)}\n`);
await writeFile(new URL("../public/r/registry.json", import.meta.url), `${JSON.stringify(registry, null, 2)}\n`);
