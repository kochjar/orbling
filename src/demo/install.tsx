import { CodeBlock } from "@/components/arc/code-block/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/arc/tabs/tabs";
import { INSTALL_AI, INSTALL_CLI } from "./copy";

export function Install() {
  return (
    <Tabs defaultValue="ai">
      <TabsList>
        <TabsTrigger value="ai">With AI</TabsTrigger>
        <TabsTrigger value="cli">shadcn</TabsTrigger>
      </TabsList>
      <TabsContent value="ai">
        <CodeBlock code={INSTALL_AI} language="text" filename="Prompt" />
      </TabsContent>
      <TabsContent value="cli">
        <CodeBlock code={INSTALL_CLI} language="bash" filename="Terminal" />
      </TabsContent>
    </Tabs>
  );
}
