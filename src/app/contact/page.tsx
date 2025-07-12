"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"

export default function ContactSupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    description: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const categories = ["IA", "Développement logiciel", "Cybersécurité", "DevOps", "Autre"]

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
        throw new Error("Erreur lors de l'envoi du message.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setStatus("error")
    }
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background SaaS motion */}
      <AnimatedGradientBackground />

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Assistance Technique <span className="text-blue-600">Avancée</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Décrivez votre problème avec précision. Plus vous êtes clair, plus notre équipe peut vous aider
            efficacement.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-lg rounded-xl p-8 md:p-10 border border-blue-100 shadow-2xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <Label htmlFor="name">Votre nom complet</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Adresse email professionnelle</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="votre.email@entreprise.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="category">Type de problème</Label>
            <Select
              name="category"
              value={formData.category}
              onValueChange={(value) => handleChange(value, "category")}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choisissez le type de problème" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="description">Description du problème</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Décrivez le problème aussi précisément que possible. Par ex. : les étapes, les erreurs, les résultats attendus..."
              rows={6}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <Button type="submit" className="w-full py-3 text-lg font-semibold" disabled={status === "loading"}>
              {status === "loading" ? "Envoi en cours..." : "Soumettre la demande"}
            </Button>
          </motion.div>

          {status === "success" && (
            <motion.p
              className="text-green-600 text-center font-medium mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message envoyé avec succès. Nous vous contacterons bientôt.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-600 text-center font-medium mt-4"
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
