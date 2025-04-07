
import { Card } from "../ui/card";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export function ChatContainer() {
  return (
    <Card className="flex flex-col h-[600px] max-w-2xl mx-auto my-8">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Chat with AI</h2>
      </div>
      <ChatMessages />
      <ChatInput />
    </Card>
  );
}