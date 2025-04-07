
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChatStore } from "@/store/chat-store";
import { SendHorizonal } from "lucide-react";
import { KeyboardEvent, useState } from "react";

export function ChatInput() {
  const [message, setMessage] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSend = () => {
    if (!message.trim()) return;
    
    addMessage({
      content: message.trim(),
      role: 'user',
      status: 'sending',
    });
    
    setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-2 p-4 border-t bg-background">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        className="min-h-[60px] max-h-[120px]"
      />
      <Button 
        onClick={handleSend}
        size="icon"
        className="h-[60px] w-[60px]"
      >
        <SendHorizonal className="w-5 h-5" />
      </Button>
    </div>
  );
}