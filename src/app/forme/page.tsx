"use client"

import React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background" // Assurez-vous que ce fichier existe

export default function RendezVousPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    position: "",
    statut: "",
    projectType: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const statuts = ["Ingénieur", "Étudiant", "Manager", "Entrepreneur", "Autre"]
  const projectTypes = ["IA", "Développement Logiciel", "Cybersécurité", "DevOps & Cloud", "Autre"]

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
      const res = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({
          fullName: "",
          email: "",
          company: "",
          position: "",
          statut: "",
          projectType: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        })
      } else {
        throw new Error("Erreur lors de l'envoi du message.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setStatus("error")
    }
  }

  // Reset status message after 5 seconds
  React.useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <main className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Background SaaS motion */}
      <AnimatedGradientBackground className="from-gray-950 via-gray-800 to-gray-950" />

      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Demande de <span className="text-blue-400">Rendez-vous</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Remplissez ce formulaire pour organiser un échange avec nos experts. Nous traitons votre demande avec soin.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-gray-700 shadow-2xl space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div>
            <Label htmlFor="fullName">Nom complet</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Votre nom complet"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500"
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
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="company">Nom de l'entreprise (optionnel)</Label>
              <Input
                id="company"
                name="company"
                placeholder="Nom de l'entreprise"
                value={formData.company}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="position">Poste occupé (optionnel)</Label>
              <Input
                id="position"
                name="position"
                placeholder="Votre poste"
                value={formData.position}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="statut">Statut</Label>
              <Select
                name="statut"
                value={formData.statut}
                onValueChange={(value) => handleChange(value, "statut")}
                required
              >
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:ring-blue-500">
                  <SelectValue placeholder="Choisissez votre statut" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  {statuts.map((s) => (
                    <SelectItem key={s} value={s} className="focus:bg-gray-700">
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="projectType">Type de projet</Label>
              <Select
                name="projectType"
                value={formData.projectType}
                onValueChange={(value) => handleChange(value, "projectType")}
                required
              >
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white focus:ring-blue-500">
                  <SelectValue placeholder="Choisissez le type de projet" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  {projectTypes.map((pt) => (
                    <SelectItem key={pt} value={pt} className="focus:bg-gray-700">
                      {pt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="preferredDate">Date préférée</Label>
              <Input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <Label htmlFor="preferredTime">Heure préférée</Label>
              <Input
                id="preferredTime"
                name="preferredTime"
                type="time"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="message">Dites-nous plus sur votre besoin</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décrivez votre besoin, vos objectifs, et toute information pertinente pour notre échange."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 resize-y focus:ring-blue-500"
            />
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Envoi en cours..." : "Prendre rendez-vous"}
            </Button>
          </motion.div>

          {status === "success" && (
            <motion.p
              className="text-green-400 text-center font-medium mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Votre demande a été envoyée avec succès. Nous vous contacterons sous peu.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-red-500 text-center font-medium mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❌ Une erreur est survenue lors de l'envoi. Veuillez réessayer.
            </motion.p>
          )}
        </motion.form>
      </div>
    </main>
  )
}
