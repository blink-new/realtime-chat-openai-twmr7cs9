
import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";
import { format } from "date-fns";
import { CheckCheck, Clock } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={cn(
      "flex w-full gap-2 my-2",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "relative max-w-[80%] rounded-lg px-4 py-2",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted",
        "transition-all duration-200 ease-in-out",
        "hover:scale-[1.02]"
      )}>
        <p className="text-sm">{message.content}</p>
        <div className={cn(
          "flex items-center gap-1 text-xs mt-1",
          isUser ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          <span>{format(message.timestamp, 'HH:mm')}</span>
          {isUser && (
            <span className="ml-1">
              {message.status === 'delivered' && <CheckCheck className="w-4 h-4" />}
              {message.status === 'sending' && <Clock className="w-4 h-4 animate-pulse" />}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}