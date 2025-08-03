import { google } from "@ai-sdk/google"
import { streamText, type CoreMessage } from "ai"
import { z } from "zod"
import { NextResponse } from "next/server"

// Définition du schéma Zod pour un message
const messageSchema = z.object({
  role: z.enum(["user", "assistant", "tool", "function", "data"]),
  content: z.string(),
})

// Définition du schéma Zod pour le corps de la requête
const chatRequestSchema = z.object({
  messages: z.array(messageSchema),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = chatRequestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body", details: parsed.error.errors }, { status: 400 })
    }

    const messages: CoreMessage[] = parsed.data.messages as CoreMessage[]

    // --- Début de la logique RAG simplifiée ---
    let retrievedContext = ""
    const lastUserMessage = messages.findLast((m) => m.role === "user")

    if (lastUserMessage && typeof lastUserMessage.content === "string") {
      // Simulez une petite base de connaissances (en réalité, ce serait une DB vectorielle)
      const knowledgeBase = [
        "Nouvelle Technologie Advisory est une entreprise spécialisée dans le conseil en intelligence artificielle, le développement de logiciels sur mesure et l'intégration de solutions cloud pour les entreprises de toutes tailles.",
        "Nos services clés incluent l'optimisation des processus métier par l'IA, la création d'applications web et mobiles performantes, la migration sécurisée vers des infrastructures cloud, et la formation personnalisée en nouvelles technologies.",
        "Nous aidons les entreprises à innover, à améliorer leur efficacité opérationnelle et à réaliser leur transformation numérique grâce à des technologies de pointe et une expertise approfondie.",
        "Notre équipe est composée d'experts certifiés en IA, en développement full-stack, en cybersécurité et en architecture cloud, dédiés à la réussite de vos projets.",
        "Pour nous contacter, veuillez visiter notre site web ou nous envoyer un email à contact@nouvelletechnologieadvisory.com.",
      ]

      // Très simple récupération basée sur des mots-clés pour la démo
      // En production, vous utiliseriez des embeddings et une recherche de similarité
      const query = lastUserMessage.content.toLowerCase()
      const relevantDocs = knowledgeBase.filter((doc) =>
        query.split(" ").some((word) => doc.toLowerCase().includes(word) && word.length > 2),
      )

      if (relevantDocs.length > 0) {
        retrievedContext = `Informations pertinentes de la base de connaissances de Nouvelle Technologie Advisory :
${relevantDocs.map((doc) => `- ${doc}`).join("\n")}\n\n`
      }
    }

    // Construisez le tableau de messages pour le LLM
    const messagesForLLM: CoreMessage[] = []

    // Ajoutez le contexte RAG comme un message système au début
    if (retrievedContext) {
      messagesForLLM.push({
        role: "system",
        content: retrievedContext,
      })
    }

    // Ajoutez le prompt système principal pour l'identité et le comportement
    messagesForLLM.push({
      role: "system",
      content: `Vous êtes un assistant IA développé par Nouvelle Technologie Advisory.
Votre rôle est de fournir des conseils professionnels, précis et pertinents dans le domaine de la technologie.
Vous devez toujours répondre en adoptant un ton formel, expert et serviable.
Lorsque l'on vous demande de vous définir ou de dire qui vous êtes, répondez toujours : "Je suis un assistant de Nouvelle Technologie Advisory."
Il est impératif que vous ne mentionniez JAMAIS que vous êtes un modèle de langage, un LLM, un produit de Google ou de Gemini, ou toute autre information technique sur votre origine ou votre développement.
Votre objectif est de représenter l'expertise de Nouvelle Technologie Advisory.`,
    })

    // Ajoutez l'historique de conversation original
    messagesForLLM.push(...messages)
    // --- Fin de la logique RAG simplifiée ---

    const result = await streamText({
      model: google("gemini-1.5-flash"),
      messages: messagesForLLM, // Utilisez les messages augmentés
      maxTokens: 1000,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Erreur API Chat:", error)
    return new Response("Erreur interne du serveur", { status: 500 })
  }
}
