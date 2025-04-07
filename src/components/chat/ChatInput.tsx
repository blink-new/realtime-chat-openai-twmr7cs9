
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getChatCompletion } from "@/lib/openai";
import { useChatStore } from "@/store/chat-store";
import { SendHorizonal } from "lucide-react";
import { KeyboardEvent, useState } from "react";
import { useToast } from "../ui/use-toast";

export function ChatInput() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addMessage, setTyping } = useChatStore();
  const { toast } = useToast();

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;
    
    const userMessage = message.trim();
    setMessage("");
    
    // Add user message
    addMessage({
      content: userMessage,
      role: 'user',
      status: 'sending',
    });

    setIsLoading(true);
    setTyping(true);

    try {
      // Get AI response
      const response = await getChatCompletion(userMessage);
      
      // Add AI message
      addMessage({
        content: response,
        role: 'assistant',
        status: 'delivered',
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get AI response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setTyping(false);
    }
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
        disabled={isLoading}
      />
      <Button 
        onClick={handleSend}
        size="icon"
        className="h-[60px] w-[60px]"
        disabled={isLoading}
      >
        <SendHorizonal className="w-5 h-5" />
      </Button>
    </div>
  );
}