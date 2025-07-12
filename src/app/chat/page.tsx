"use client"

import { useChat } from "ai/react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Zap, MessageCircle, Trash2, Copy, Check, Sparkles, Brain, Cpu } from "lucide-react"

// Import des composants shadcn/ui
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area" // Pour une meilleure gestion du défilement

export default function ChatbotPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat()
  const [copied, setCopied] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null) // Référence pour le champ de saisie

  // État pour stocker les positions des particules générées une seule fois
  const [particlePositions, setParticlePositions] = useState<Array<{ left: string; top: string }>>([])

  useEffect(() => {
    // Générer les positions des particules une seule fois au montage du composant
    const newPositions = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setParticlePositions(newPositions)
  }, []) // Le tableau de dépendances vide assure que cela ne s'exécute qu'une seule fois

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
    setMessages([]) // Utiliser setMessages pour vider le chat
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
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
        {particlePositions.map(
          (
            pos,
            i, // Utilisation des positions stockées
          ) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: pos.left, // Utilisation de la position pré-calculée
                top: pos.top, // Utilisation de la position pré-calculée
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
          ),
        )}
      </div>

      {/* Header */}
      <div className="relative z-10 bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0">
        <div className="max-w-6xl mx-auto px-6 py-4">
          {" "}
          {/* Réduit le padding vertical */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  {" "}
                  {/* Taille réduite */}
                  <Brain className="w-5 h-5 text-white" /> {/* Taille réduite */}
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white shadow-lg" // Taille réduite
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  {" "}
                  {/* Taille réduite */}
                  Nouvelle Techno Advisory
                </h1>
                <p className="text-xs text-gray-300 flex items-center space-x-1">
                  {" "}
                  {/* Taille réduite */}
                  <Cpu className="w-3 h-3" />
                  <span>Assistant IA Intelligent</span>
                </p>
              </div>
            </div>
            {messages.length > 0 && (
              <Button
                variant="outline" // Utilisation du composant Button de shadcn/ui
                size="sm" // Taille sm
                onClick={clearChat}
                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 border border-white/10 hover:border-red-400/30 bg-transparent"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm">Nouvelle conversation</span>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <Card className="bg-black/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Messages Area */}
          <ScrollArea className="h-[700px] p-8">
            {" "}
            {/* Utilisation de ScrollArea */}
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
                    <Button // Utilisation du composant Button de shadcn/ui
                      key={index}
                      variant="ghost" // Variante ghost pour un look plus subtil
                      onClick={() =>
                        setMessages([{ id: Date.now().toString(), role: "user", content: suggestion.text }])
                      }
                      className="group p-6 text-left bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm h-auto shadow-md hover:shadow-lg" // h-auto pour s'adapter au contenu
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
                    </Button>
                  ))}
                </motion.div>
              </div>
            ) : (
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id} // Utilisation de message.id comme clé
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`} // Ajout de mb-4 pour l'espacement
                  >
                    <div className={`flex max-w-[70%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      {/* Avatar */}
                      <div className={`flex-shrink-0 ${message.role === "user" ? "ml-4" : "mr-4"}`}>
                        <Avatar className="w-10 h-10 border border-white/20">
                          {" "}
                          {/* Utilisation d'Avatar */}
                          <AvatarImage
                            src={
                              message.role === "user"
                                ? "/placeholder.svg?height=40&width=40"
                                : "/placeholder.svg?height=40&width=40"
                            }
                          />{" "}
                          {/* Placeholder pour les images */}
                          <AvatarFallback
                            className={`rounded-2xl ${
                              message.role === "user"
                                ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                                : "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                            } text-white`}
                          >
                            {message.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      {/* Message Content */}
                      <div
                        className={`relative group ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                            : "bg-white/10 text-white border border-white/20"
                        } rounded-3xl px-6 py-4 shadow-2xl backdrop-blur-sm transition-all duration-200`}
                      >
                        <div className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</div>
                        {/* Copy Button */}
                        {message.role === "assistant" && (
                          <Button // Utilisation du composant Button de shadcn/ui
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(message.content, message.id)} // Utilisation de message.id
                            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 hover:bg-white/10 rounded-full text-gray-300 hover:text-white group-hover:scale-105"
                          >
                            {copied === message.id ? ( // Utilisation de message.id
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
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
                className="flex justify-start mb-4" // Ajout de mb-4
              >
                <div className="flex mr-4">
                  <Avatar className="w-10 h-10 border border-white/20">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
                      <Bot className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 shadow-lg">
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
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t border-white/10 p-6 bg-black/20 backdrop-blur-sm">
            <form
              onSubmit={handleSubmit}
              className="flex space-x-4 focus-within:border-cyan-400 focus-within:shadow-lg focus-within:shadow-cyan-500/20 rounded-2xl transition-all duration-300"
            >
              <div className="flex-1 relative">
                <Input // Utilisation du composant Input de shadcn/ui
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Posez votre question à Nouvelle Techno Advisory..."
                  className="w-full px-6 py-4 pr-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus-visible:ring-cyan-400 text-white placeholder:text-gray-400 shadow-xl transition-all duration-200"
                  disabled={isLoading}
                />
                <motion.div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  animate={{
                    y: inputRef.current?.focus ? [-2, 2, -2] : 0,
                    color: inputRef.current?.focus ? "#67e8f9" : "#9ca3af",
                  }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </div>
              <Button // Utilisation du composant Button de shadcn/ui
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-2xl hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-3 font-medium shadow-xl disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer</span>
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}
