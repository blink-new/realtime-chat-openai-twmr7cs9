
export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  status: 'sending' | 'sent' | 'delivered' | 'error';
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  addMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  setTyping: (typing: boolean) => void;
}