import React, { useState, useEffect, useRef } from 'react';
import { VisualHeader } from './components/VisualHeader';
import { CHAPTERS, SAMPLE_QUESTIONS, Message } from './types';
import { sendMessageToGemini } from './services/geminiService';

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Namaste! I am your Inspired Volunteer companion. How can I assist you on your journey of service today? 🌸",
      timestamp: Date.now()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await sendMessageToGemini(text, history);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: response.text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleChapterSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chapter = CHAPTERS.find(c => c.id === parseInt(e.target.value));
    if (chapter) {
      handleSend(`Tell me about the chapter: ${chapter.title}`);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto bg-white shadow-2xl rounded-none md:rounded-xl overflow-hidden border border-stone-200">
      <VisualHeader />

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar (Desktop) / Top Helper (Mobile) */}
        <div className="hidden md:flex flex-col w-64 bg-stone-50 border-r border-stone-200 p-4 overflow-y-auto shrink-0">
          <div className="mb-6">
            <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Jump to Chapter</label>
            <select 
              className="w-full p-2 bg-white border border-stone-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer hover:bg-stone-50 transition-colors"
              onChange={handleChapterSelect}
              value=""
            >
              <option value="" disabled>Select a Chapter...</option>
              {CHAPTERS.map(c => (
                <option key={c.id} value={c.id}>{c.id}. {c.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase mb-2">Sample Questions</label>
            <div className="space-y-2">
              {SAMPLE_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="w-full text-left text-xs p-2 bg-white border border-stone-200 rounded hover:bg-green-50 hover:text-green-800 transition-colors duration-200 text-stone-700"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-white min-w-0">
          <div className="flex-1 overflow-y-auto p-4 space-y-6 min-h-0">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[95%] md:max-w-[80%] rounded-2xl p-4 shadow-sm break-words ${
                    msg.role === 'user'
                      ? 'bg-green-600 text-white rounded-br-none'
                      : 'bg-[#fffaf0] text-stone-800 border border-stone-100 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap font-serif text-sm md:text-base leading-relaxed">
                    {msg.text}
                  </p>
                  
                  <div className={`text-[10px] mt-2 opacity-70 text-right ${msg.role === 'user' ? 'text-green-100' : 'text-stone-400'}`}>
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-stone-100 rounded-2xl rounded-bl-none p-4 shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 md:p-4 bg-white border-t border-stone-100 shrink-0">
            {/* Mobile Question Chips */}
            <div className="md:hidden flex space-x-2 overflow-x-auto pb-3 scrollbar-hide w-full">
               <select 
                  className="flex-shrink-0 p-2 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-700 max-w-[140px]"
                  onChange={handleChapterSelect}
                  value=""
                >
                  <option value="" disabled>📖 Select Chapter</option>
                  {CHAPTERS.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
               {SAMPLE_QUESTIONS.slice(0, 4).map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="flex-shrink-0 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-600 whitespace-nowrap active:bg-green-100"
                >
                  {q.length > 25 ? q.slice(0, 25) + '...' : q}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 max-w-3xl mx-auto relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Ask about being a volunteer..."
                className="flex-1 p-3 pl-4 pr-12 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-stone-50 shadow-inner text-sm md:text-base"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend(input)}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
            <div className="text-center mt-2">
               <span className="text-[10px] text-stone-400">Powered by Gemini • Based on "Responsible and Inspired Volunteer"</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;