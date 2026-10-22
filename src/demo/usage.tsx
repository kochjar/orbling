import { CodeBlock } from "@/components/arc/code-block/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/arc/tabs/tabs";
import { STATUS_USAGE, USAGE } from "./copy";

export function Usage() {
  return (
    <Tabs defaultValue="orbling">
      <TabsList>
        <TabsTrigger value="orbling">Orbling</TabsTrigger>
        <TabsTrigger value="status">OrblingStatus</TabsTrigger>
      </TabsList>
      <TabsContent value="orbling">
        <CodeBlock code={USAGE} filename="app.tsx" />
      </TabsContent>
      <TabsContent value="status">
        <CodeBlock code={STATUS_USAGE} filename="status.tsx" />
      </TabsContent>
    </Tabs>
  );
}
