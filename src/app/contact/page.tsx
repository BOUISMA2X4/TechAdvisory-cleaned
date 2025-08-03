"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { AnimatedGradientBackground } from "@/components/animated-gradient-background" // Supprimé pour un fond uniforme

export default function ContactSupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    description: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const categories = ["Intelligence Artificielle", "Développement Logiciel", "Cybersécurité", "DevOps", "Autre"]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string, // string for Select
    name?: string, // name for Select
  ) => {
    if (typeof e === "string" && name) {
      setFormData({ ...formData, [name]: e })
    } else if (typeof e === "object" && "target" in e) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", category: "", description: "" })
      } else {
        throw new Error("Échec de l'envoi du message.")
      }
    } catch (error) {
      console.error("Erreur de soumission :", error)
      setStatus("error")
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
      {/* Le fond est maintenant géré par la classe bg-gray-950 sur le main */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contactez-nous :{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Support Expert
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Décrivez votre besoin ou problème. Notre équipe d'experts est prête à vous aider efficacement.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-gray-800 shadow-xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <Label htmlFor="name" className="text-gray-300">
              Nom complet
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Votre nom et prénom"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-800/70 border-gray-700 text-white placeholder-gray-400 focus-visible:border-blue-500 focus-visible:ring-blue-500/50"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-300">
              Email professionnel
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="votre.email@entreprise.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-800/70 border-gray-700 text-white placeholder-gray-400 focus-visible:border-blue-500 focus-visible:ring-blue-500/50"
            />
          </div>
          <div>
            <Label htmlFor="category" className="text-gray-300">
              Sujet de la demande
            </Label>
            <Select
              name="category"
              value={formData.category}
              onValueChange={(value) => handleChange(value, "category")}
              required
            >
              <SelectTrigger className="w-full bg-gray-800/70 border-gray-700 text-white placeholder-gray-400 focus-visible:border-blue-500 focus-visible:ring-blue-500/50">
                <SelectValue placeholder="Choisissez le sujet de votre demande" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-gray-200">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat} className="hover:bg-gray-700 hover:text-white">
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="description" className="text-gray-300">
              Détails de votre demande
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Décrivez votre demande aussi précisément que possible. Par ex. : les étapes, les erreurs, les résultats attendus..."
              rows={6}
              value={formData.description}
              onChange={handleChange}
              required
              className="bg-gray-800/70 border-gray-700 text-white placeholder-gray-400 focus-visible:border-blue-500 focus-visible:ring-blue-500/50"
            />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-600/30"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Envoi en cours..." : "Soumettre la demande"}
            </Button>
          </motion.div>
          {status === "success" && (
            <motion.p
              className="text-green-400 text-center font-medium mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Demande envoyée avec succès. Nous vous contacterons bientôt.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-400 text-center font-medium mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❌ Une erreur est survenue. Veuillez réessayer.
            </motion.p>
          )}
        </motion.form>
      </div>
    </main>
  )
}