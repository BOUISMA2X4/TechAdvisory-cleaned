"use client"

import { useChat } from "ai/react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Zap, MessageCircle, Trash2, Copy, Check, Sparkles, Brain, Cpu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ChatbotPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat()
  const [copied, setCopied] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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
    setMessages([])
  }

  return (
    <div className="relative flex flex-col flex-1 overflow-hidden">
      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 py-6">
        <Card className="flex flex-col flex-1 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          {/* Clear Chat Button (moved here for better context) */}
          {messages.length > 0 && (
            <div className="flex justify-end p-4 border-b border-gray-200 dark:border-gray-800">
              <Button
                variant="outline"
                size="sm"
                onClick={clearChat}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 bg-transparent"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm">Nouvelle conversation</span>
              </Button>
            </div>
          )}

          {/* Messages Area */}
          <ScrollArea className="flex-1 p-6">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl"
                >
                  <MessageCircle className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-3"
                >
                  Bienvenue chez Nouvelle Techno Advisory
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 dark:text-gray-400 max-w-xl text-base leading-relaxed mb-8"
                >
                  Votre assistant IA de nouvelle génération. Posez vos questions sur la technologie, le développement,
                  l'innovation ou tout autre sujet. Je suis là pour vous accompagner dans vos projets.
                </motion.p>
                {/* Suggestions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl"
                >
                  {[
                    { icon: Zap, text: "Expliquez-moi l'IA générative" },
                    { icon: Cpu, text: "Tendances tech 2024" },
                    { icon: Brain, text: "Optimiser mon code React" },
                    { icon: Sparkles, text: "Stratégie d'innovation" },
                  ].map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      onClick={() =>
                        setMessages([{ id: Date.now().toString(), role: "user", content: suggestion.text }])
                      }
                      className="group p-4 text-left bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 border border-gray-200 dark:border-gray-700 h-auto shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                          <suggestion.icon className="w-4 h-4" />
                        </div>
                        <p className="text-gray-800 dark:text-gray-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                          {suggestion.text}
                        </p>
                      </div>
                    </Button>
                  ))}
                </motion.div>
              </div>
            ) : (
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-6`}
                  >
                    <div
                      className={`flex max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"} items-start`}
                    >
                      {/* Avatar */}
                      <div className={`flex-shrink-0 ${message.role === "user" ? "ml-3" : "mr-3"}`}>
                        <Avatar className="w-8 h-8 border border-gray-200 dark:border-gray-700">
                          <AvatarImage
                            src={
                              message.role === "user"
                                ? "/placeholder.svg?height=32&width=32&query=user"
                                : "/placeholder.svg?height=32&width=32&query=AI-bot"
                            }
                            alt={message.role === "user" ? "User Avatar" : "AI Avatar"}
                          />
                          <AvatarFallback
                            className={`rounded-md ${
                              message.role === "user" ? "bg-blue-500" : "bg-purple-500"
                            } text-white`}
                          >
                            {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      {/* Message Content */}
                      <div
                        className={`relative group ${
                          message.role === "user"
                            ? "bg-blue-500 text-white rounded-bl-xl rounded-tl-xl rounded-tr-xl"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50 rounded-br-xl rounded-tr-xl rounded-tl-xl"
                        } px-4 py-3 shadow-sm transition-all duration-200 text-sm`}
                      >
                        <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                        {/* Copy Button */}
                        {message.role === "assistant" && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(message.content, message.id)}
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-all duration-200 p-1 h-auto w-auto text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                          >
                            {copied === message.id ? (
                              <Check className="w-3 h-3 text-green-500" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </Button>
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
                className="flex justify-start mb-6"
              >
                <div className="flex mr-3">
                  <Avatar className="w-8 h-8 border border-gray-200 dark:border-gray-700">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI Avatar" />
                    <AvatarFallback className="rounded-md bg-purple-500 text-white">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-br-xl rounded-tr-xl rounded-tl-xl px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
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
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="flex space-x-3">
              <div className="flex-1 relative">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Posez votre question à Nouvelle Techno Advisory..."
                  className="w-full px-4 py-2.5 pr-10 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus-visible:ring-blue-500 focus-visible:ring-offset-0 text-gray-900 dark:text-gray-50 placeholder:text-gray-500 dark:placeholder:text-gray-400 shadow-sm"
                  disabled={isLoading}
                />
                <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2 font-medium shadow-md disabled:hover:scale-100"
              >
                <Send className="w-4 h-4" />
                <span>Envoyer</span>
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}
