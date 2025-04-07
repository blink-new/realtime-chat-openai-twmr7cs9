
import { useChatStore } from "@/store/chat-store";
import { useEffect, useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { ScrollArea } from "../ui/scroll-area";

export function ChatMessages() {
  const messages = useChatStore((state) => state.messages);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  );
}