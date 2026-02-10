"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";
import styles from "./ChatBot.module.css";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I'm Anshul's AI assistant. Ask me anything about his experience, skills, or projects!" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.details || errorData.error || `Server responded with ${response.status}`);
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.content }]);
    } catch (error) {
      console.error("Chat Error Details:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: `Connection error: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatWrapper}>
      {/* Chat Button */}
      <motion.button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        data-hover="bot"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <div className={styles.avatar}>AC</div>
                <div className={styles.headerName}>
                  <h3>Anshul-Bot</h3>
                  <span>Online</span>
                </div>
              </div>
              <X className={styles.closeButton} size={20} onClick={() => setIsOpen(false)} />
            </div>

            {/* Messages Area */}
            <div className={styles.messages} ref={scrollRef}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`${styles.message} ${
                    msg.role === "user" ? styles.userMessage : styles.botMessage
                  }`}
                  initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.content}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  className={`${styles.message} ${styles.botMessage} ${styles.typing}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thinking...
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <form className={styles.inputArea} onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Ask something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button type="submit" className={styles.sendButton} disabled={isLoading || !input.trim()}>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
