import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { sendMessageToDevMonixAI, initializeDevMonixAI } from '../services/devmonixAIService';
import { ChatMessage } from '../types';

const RecruiterChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hi! I\'m DevBot, your AI assistant for DevMonix Technologies. Ask me anything about our company, services, culture, or career opportunities!' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    initializeDevMonixAI();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    const responseId = (Date.now() + 1).toString();
    
    // Add placeholder for streaming
    setMessages(prev => [...prev, { id: responseId, role: 'model', text: '', isThinking: true }]);

    const stream = sendMessageToDevMonixAI(userMsg.text);

    try {
      // Add thinking delay before starting to stream
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      for await (const chunk of stream) {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === responseId 
              ? { ...msg, text: chunk || "", isThinking: false } 
              : msg
          )
        );
      }
    } catch (e) {
      console.error(e);
      setMessages(prev => 
        prev.map(msg => 
          msg.id === responseId 
            ? { ...msg, text: 'Sorry, I encountered an error. Please try again.', isThinking: false } 
            : msg
        )
      );
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`bg-white border border-slate-200 w-[90vw] sm:w-[400px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto ${
          isOpen ? 'scale-100 opacity-100 mb-4' : 'scale-75 opacity-0 h-0 mb-0'
        }`}
      >
        {/* Header */}
        <div className="bg-slate-900 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-sm border border-white/10">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">DevMonix AI Assistant</h3>
              <p className="text-slate-300 text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                AI Recruiter
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-slate-50/50 scrollbar-hide">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                }`}
              >
                {msg.isThinking && !msg.text ? (
                   <div className="flex items-center gap-2 py-2">
                     <div className="flex gap-1">
                       <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                       <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></span>
                       <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></span>
                     </div>
                     <span className="text-xs text-slate-500 italic">AI is thinking...</span>
                   </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100">
          {isTyping && (
            <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-75"></span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse delay-150"></span>
              </div>
              <span>DevMonix AI is responding...</span>
            </div>
          )}
          <div className="relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isTyping ? "AI is thinking..." : "Ask about DevMonix - services, culture, careers..."}
              disabled={isTyping}
              className={`w-full rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 transition-all border ${
                isTyping 
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200' 
                  : 'bg-slate-50 text-slate-900 focus:ring-blue-600 focus:bg-white placeholder-slate-400 border-slate-200'
              }`}
            />
            <button 
              onClick={handleSend}
              disabled={!inputText.trim() || isTyping}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-colors ${
                !inputText.trim() || isTyping
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center pointer-events-auto transition-all duration-300 shadow-xl shadow-blue-900/10 ${
          isOpen ? 'w-12 h-12 rounded-full bg-slate-200 hover:bg-slate-300' : 'w-auto h-14 rounded-full bg-slate-900 hover:bg-slate-800 px-6'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-slate-600" />
        ) : (
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default RecruiterChat;