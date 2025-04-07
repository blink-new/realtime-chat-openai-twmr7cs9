
import { create } from 'zustand';
import { ChatState, Message } from '../types/chat';

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  isTyping: false,
  addMessage: (message) => 
    set((state) => ({
      messages: [...state.messages, {
        ...message,
        id: crypto.randomUUID(),
        timestamp: new Date(),
      }],
    })),
  setTyping: (typing) => set({ isTyping: typing }),
}));