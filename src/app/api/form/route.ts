import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma" // Utilisation de l'instance singleton de Prisma
import { z } from "zod"

// Définition du schéma Zod pour la requête de rendez-vous
const rendezvousSchema = z.object({
  fullName: z.string().min(1, "Le nom complet est requis."),
  email: z.string().email("L'adresse email n'est pas valide.").min(1, "L'email est requis."),
  company: z.string().optional().nullable(), // Optionnel
  position: z.string().optional().nullable(), // Optionnel
  statut: z.string().min(1, "Le statut est requis."),
  projectType: z.string().min(1, "Le type de projet est requis."),
  preferredDate: z.string().refine(
    (val) => {
      // Valide que la chaîne peut être convertie en une date valide
      const date = new Date(val)
      return !isNaN(date.getTime())
    },
    {
      message: "Le format de la date préférée est invalide.",
    },
  ),
  preferredTime: z.string().min(1, "L'heure préférée est requise."),
  message: z.string().optional().nullable(), // Optionnel
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = rendezvousSchema.safeParse(body)

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

    const { fullName, email, company, position, statut, projectType, preferredDate, preferredTime, message } =
      parsed.data

    // Conversion de la date validée en objet Date
    const dateObject = new Date(preferredDate)

    const rendezvous = await prisma.rendezVous.create({
      data: {
        fullName,
        email,
        company,
        position,
        statut,
        projectType,
        preferredDate: dateObject,
        preferredTime,
        message,
      },
    })

    return NextResponse.json({ success: true, rendezvous }, { status: 200 })
  } catch (error: any) {
    console.error("[API ERROR] /api/rendezvous:", error)
    return NextResponse.json({ success: false, error: error.message || "Erreur serveur inconnue" }, { status: 500 })
  }
  // Pas besoin de prisma.$disconnect() ici dans un environnement Next.js/serverless
}
