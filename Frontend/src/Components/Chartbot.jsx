import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Smart XML Solutions – Chatbot Widget
 * Floating assistant with predefined professional responses
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

  /* Auto-scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ================= BOT RESPONSE LOGIC ================= */
  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes("service") || q.includes("what do you")) {
      return "We specialize in XML Conversion, XML Tagging, DTD/XSD Validation, Content Digitization, and Data Quality Services. Would you like details about a specific service?";
    }

    if (q.includes("xml")) {
      return "Smart XML Solutions helps organizations structure, validate, and manage XML data efficiently across publishing, healthcare, finance, and enterprise systems.";
    }

    if (q.includes("industry") || q.includes("sector")) {
      return "We serve industries including Banking & Finance, Healthcare, Publishing, Education, and E-Commerce.";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return "You can contact us at info@smartxmlsolutions.com or use the Contact page to send us your project details.";
    }

    if (q.includes("quote") || q.includes("pricing") || q.includes("cost")) {
      return "Pricing depends on project scope and volume. Please request a quote through our Contact page for a tailored estimate.";
    }

    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! 👋 I'm here to help you with Smart XML Solutions services.";
    }

    if (q.includes("thank")) {
      return "You're welcome! Let me know if you need anything else 😊";
    }

    return "Thanks for reaching out. For detailed assistance, please share your requirements through our Contact page and our team will get back to you shortly.";
  };

  /* ================= SEND MESSAGE ================= */
  const sendMessage = () => {
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

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: getBotResponse(userMsg.text),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  /* Enter key support */
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
            {/* ================= HEADER ================= */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Smart XML Assistant</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
              <button onClick={() => setIsOpen(false)}>✕</button>
            </div>

            {/* ================= MESSAGES ================= */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
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
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-white text-gray-700 shadow rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow text-sm">
                    Typing…
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ================= INPUT ================= */}
            <div className="p-4 border-t bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="bg-blue-600 text-white px-4 rounded-lg disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FLOATING BUTTON ================= */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg flex items-center justify-center"
      >
        💬
      </motion.button>
    </div>
  );
}

export default SmartXMLChatbot;