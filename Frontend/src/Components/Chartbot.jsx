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
  const messagesEndRef = useRef(null);

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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
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
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2 items-center text-xs text-gray-500 italic">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  Assistant is typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input & Suggestion Section */}
            <div className="p-4 border-t bg-white relative">
              
              {/* Suggestion Box (Logic from Sample) */}
              {suggestions.length > 0 && (
                <div className="absolute bottom-full left-4 right-4 bg-white border border-gray-200 rounded-t-xl shadow-lg max-h-32 overflow-y-auto z-10">
                  {suggestions.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => sendMessage(item)}
                      className="p-2 text-xs cursor-pointer border-b last:border-none hover:bg-blue-50 text-gray-700 transition-colors"
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
                  className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button
                  onClick={() => sendMessage()}
                  className="bg-blue-600 text-white p-2 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
                >
                  <span className="material-symbols-outlined">send</span>
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
  );
}

export default SmartXMLChatbot;