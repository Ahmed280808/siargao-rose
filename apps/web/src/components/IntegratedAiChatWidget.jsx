
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import IntegratedAiChat from '@/components/integrated-ai-chat.jsx';
import { Button } from '@/components/ui/button.jsx';

export default function IntegratedAiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground z-50"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-md h-[600px] bg-background border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b bg-secondary text-secondary-foreground">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">Siargao Rose Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-secondary-foreground/10 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <IntegratedAiChat />
          </div>
        </div>
      )}
    </>
  );
}
