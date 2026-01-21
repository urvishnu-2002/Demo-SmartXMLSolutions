import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Backend URL - matched to your sample's expected routes
const API_URL = "http://localhost:5000/api";

/**
 * Smart XML Solutions – Chatbot Widget
 * Integrated Logic from Sample (Suggestions + Direct /chat)
 */
function SmartXMLChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! How can I help with your XML today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatbotRef = useRef(null);

  /* Detect scroll to show/hide chatbot (sync with Accessibility Widget) */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Detect clicks outside to close */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ================= SUGGESTION LOGIC (From Sample) ================= */
  useEffect(() => {
    const fetchSuggestions = async () => {
      // Sample logic: only search if length >= 2
      if (input.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(`${API_URL}/chatbot/suggest?q=${input}`);
        if (res.ok) {
          const data = await res.json();
          setSuggestions(data); // Expecting array of strings
        }
      } catch (err) {
        console.error("Suggestions fetch failed", err);
      }
    };

    // Debounce to prevent hitting API on every single keystroke
    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions();
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  /* ================= SEND MESSAGE LOGIC (From Sample) ================= */
  const sendMessage = async (specificText = null) => {
    const textToSend = specificText || input;
    if (!textToSend.trim()) return;

    // Add user message to UI
    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSuggestions([]); // Clear suggestions after sending
    setIsTyping(true);

    try {
      // Following sample route: /chat
      const res = await fetch(`${API_URL}/chatbot`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: data.reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: "I'm sorry, I'm having trouble reaching the server.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        ref={chatbotRef}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"}`}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-96 bg-white dark:bg-[#111827] rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10 flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Smart XML Assistant</h3>
                  <p className="text-xs opacity-80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online
                  </p>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:opacity-70 text-xl">✕</button>
              </div>

              {/* Messages Area */}
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#030617]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-sm transition-all shadow-sm ${msg.sender === "user"
                        ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-blue-500/10"
                        : "bg-white dark:bg-[#2d3748] text-gray-800 dark:text-white border border-gray-100 dark:border-white/10 rounded-tl-none"
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-2 items-center text-xs text-gray-500 dark:text-gray-400 italic">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    Assistant is typing...
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input & Suggestion Section */}
              <div className="p-4 border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 relative">

                {/* Suggestion Box */}
                {suggestions.length > 0 && (
                  <div className="absolute bottom-full left-4 right-4 bg-white dark:bg-[#1f2937] border border-gray-200 dark:border-white/10 rounded-t-xl shadow-lg max-h-32 overflow-y-auto z-10">
                    {suggestions.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => sendMessage(item)}
                        className="p-2 text-xs cursor-pointer border-b border-gray-100 dark:border-white/5 last:border-none hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 transition-colors"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-200 dark:border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#1f2937] text-black dark:text-white transition-all"
                  />
                  <button
                    onClick={() => sendMessage()}
                    className="bg-blue-600 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition-transform active:scale-95"
                  >
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center text-2xl transition-all"
        >
          {isOpen ? "✕" : "💬"}
        </motion.button>
      </div>
    </div>
  );
}

export default SmartXMLChatbot;