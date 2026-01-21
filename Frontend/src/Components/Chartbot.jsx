import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = "http://localhost:5000"; // Flask backend URL

/**
 * Smart XML Solutions – Chatbot Widget
 * Connected with Flask Backend APIs
 */
function SmartXMLChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello 👋 Welcome to Smart XML Solutions. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ================= API CALLS ================= */

  // GET SERVICES from Flask
  const fetchServices = async () => {
    try {
      const res = await fetch(`${API_URL}/api/chatbot/get`);
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();

      return `
Our Services:
• XML Conversion: ${data.xml_conversion}%
• Tagging & Structuring: ${data.tagging_structuring}%
• Validation: ${data.validation}%
• Digitization: ${data.digitization}%
• Quality Services: ${data.quality_services}%
      `;
    } catch (error) {
      console.error(error);
      return "Unable to fetch services right now.";
    }
  };

  /* ================= BOT RESPONSE ================= */

  const getBotResponse = async (query) => {
    const q = query.toLowerCase();

    // Keywords to call Flask `/chat` endpoint
    if (
      q.includes("service") ||
      q.includes("what do you") ||
      q.includes("xml") ||
      q.includes("industry") ||
      q.includes("sector") ||
      q.includes("contact") ||
      q.includes("hello") ||
      q.includes("hi")
    ) {
      try {
        const res = await fetch(`${API_URL}/chatbot`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: query }),
        });
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        return data.reply;
      } catch (err) {
        console.error(err);
        return "Sorry, I couldn't reach the server.";
      }
    }

    return "Thanks for reaching out. Please share your requirement and our team will assist you.";
  };

  /* ================= SEND MESSAGE ================= */

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const botReply = await getBotResponse(userMsg.text);

    const botMsg = {
      id: Date.now() + 1,
      sender: "bot",
      text: botReply,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  // Enter key support
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
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Smart XML Assistant</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && <div className="text-sm text-gray-500">Typing…</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 rounded-lg"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center"
      >
        💬
      </motion.button>
    </div>
  );
}

export default SmartXMLChatbot;