import { google } from "@ai-sdk/google"
import { streamText, type CoreMessage } from "ai" // Importez CoreMessage
import { z } from "zod"
import { NextResponse } from "next/server"

// Définition du schéma Zod pour un message
const messageSchema = z.object({
  // Le rôle doit être explicitement 'user' ou 'assistant' pour correspondre à CoreMessage
  role: z.enum(["user", "assistant", "tool", "function", "data"]), // Ajoutez tous les rôles pertinents de CoreMessage
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
      // Si la validation échoue, renvoyer une erreur 400 avec les détails de l'erreur
      return NextResponse.json({ error: "Invalid request body", details: parsed.error.errors }, { status: 400 })
    }

    // Cast explicite vers CoreMessage[] après validation
    const messages: CoreMessage[] = parsed.data.messages as CoreMessage[]

    const result = await streamText({
      model: google("gemini-1.5-flash"),
      messages,
      system: "Tu es un assistant IA utile et bienveillant.",
      maxTokens: 1000,
      temperature: 0.7,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Erreur API Chat:", error)
    return new Response("Erreur interne du serveur", { status: 500 })
  }
}
