import { google } from "@ai-sdk/google" // ← Import de l'API Gemini
import { streamText } from "ai"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    // ← ICI : Utilisation directe de l'API Gemini
    const result = await streamText({
      model: google("gemini-1.5-flash"), // ← API Gemini appelée ici
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
