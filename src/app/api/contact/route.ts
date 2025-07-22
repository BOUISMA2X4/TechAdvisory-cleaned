import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"

// Définition du schéma Zod pour la requête de contact
const supportRequestSchema = z.object({
  name: z.string().min(1, "Le nom est requis."),
  email: z.string().email("L'email n'est pas valide.").min(1, "L'email est requis."),
  category: z.string().min(1, "La catégorie est requise."),
  description: z.string().min(1, "La description est requise.").max(1000, "La description est trop longue."),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = supportRequestSchema.safeParse(body)

    if (!parsed.success) {
      // Si la validation échoue, renvoyer une erreur 400 avec les détails de l'erreur
      return NextResponse.json(
        {
          success: false,
          error: "Données de requête invalides",
          details: parsed.error.errors,
        },
        { status: 400 },
      )
    }

    const { name, email, category, description } = parsed.data

    const contact = await prisma.supportRequest.create({
      data: {
        name,
        email,
        category,
        description,
      },
    })

    return NextResponse.json({ success: true, contact })
  } catch (error) {
    console.error("[API ERROR] advanced-contact:", error)
    return NextResponse.json({ success: false, error: "Erreur serveur interne" }, { status: 500 })
  }
}
