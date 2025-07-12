"use client"

import { useChat } from "ai/react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Zap, MessageCircle, Trash2, Copy, Check, Sparkles, Brain, Cpu } from "lucide-react"

export default function ChatbotPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const [copied, setCopied] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const copyToClipboard = async (text: string, messageId: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(messageId)
    setTimeout(() => setCopied(null), 2000)
  }

  const clearChat = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  Nouvelle Techno Advisory
                </h1>
                <p className="text-sm text-gray-300 flex items-center space-x-2">
                  <Cpu className="w-3 h-3" />
                  <span>Assistant IA Intelligent</span>
                </p>
              </div>
            </div>

            {messages.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearChat}
                className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-200 border border-white/10 hover:border-red-400/30"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm">Nouvelle conversation</span>
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
        >
          {/* Messages Area */}
          <div className="h-[700px] overflow-y-auto p-8 space-y-6 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="w-20 h-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl"
                >
                  <MessageCircle className="w-10 h-10 text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  Bienvenue chez Nouvelle Techno Advisory
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 max-w-2xl text-lg leading-relaxed mb-8"
                >
                  Votre assistant IA de nouvelle génération. Posez vos questions sur la technologie, le développement,
                  l'innovation ou tout autre sujet. Je suis là pour vous accompagner dans vos projets.
                </motion.p>

                {/* Suggestions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl"
                >
                  {[
                    { icon: Zap, text: "Expliquez-moi l'IA générative", color: "from-yellow-400 to-orange-500" },
                    { icon: Cpu, text: "Tendances tech 2024", color: "from-blue-400 to-cyan-500" },
                    { icon: Brain, text: "Optimiser mon code React", color: "from-purple-400 to-pink-500" },
                    { icon: Sparkles, text: "Stratégie d'innovation", color: "from-green-400 to-emerald-500" },
                  ].map((suggestion, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleInputChange({ target: { value: suggestion.text } } as any)}
                      className="group p-6 text-left bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${suggestion.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                        >
                          <suggestion.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium group-hover:text-cyan-200 transition-colors">
                            {suggestion.text}
                          </p>
                          <p className="text-gray-400 text-sm mt-1">Cliquez pour commencer</p>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            ) : (
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 ${message.role === "user" ? "ml-4" : "mr-4"}`}>
                        <div
                          className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                              : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                          }`}
                        >
                          {message.role === "user" ? (
                            <User className="w-5 h-5 text-white" />
                          ) : (
                            <Bot className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </div>

                      {/* Message Content */}
                      <div
                        className={`relative group ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                            : "bg-white/10 text-white border border-white/20"
                        } rounded-2xl px-6 py-4 shadow-xl backdrop-blur-sm`}
                      >
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>

                        {/* Copy Button */}
                        {message.role === "assistant" && (
                          <button
                            onClick={() => copyToClipboard(message.content, `${index}`)}
                            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 hover:bg-white/10 rounded-lg"
                          >
                            {copied === `${index}` ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-300 hover:text-white" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex justify-start"
              >
                <div className="flex mr-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center shadow-lg">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                  <div className="flex space-x-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-white/10 p-6 bg-black/20 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex space-x-4">
              <div className="flex-1 relative">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Posez votre question à Nouvelle Techno Advisory..."
                  className="w-full px-6 py-4 pr-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder:text-gray-400 shadow-xl transition-all duration-200"
                  disabled={isLoading}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Sparkles className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-2xl hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-3 font-medium shadow-xl disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
