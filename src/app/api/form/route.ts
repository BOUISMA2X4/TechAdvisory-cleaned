import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (
      !body.fullName ||
      !body.email ||
      !body.statut ||
      !body.projectType ||
      !body.preferredDate ||
      !body.preferredTime
    ) {
      return NextResponse.json({ message: "Champs requis manquants" }, { status: 400 })
    }

    // Vérification et conversion de la date pour s'assurer qu'elle est valide
    const preferredDate = new Date(body.preferredDate)
    if (isNaN(preferredDate.getTime())) {
      return NextResponse.json({ message: "Format de date invalide" }, { status: 400 })
    }

    const rendezvous = await prisma.rendezVous.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        company: body.company || null,
        position: body.position || null,
        statut: body.statut,
        projectType: body.projectType,
        preferredDate: preferredDate, // Utilisation de l'objet Date converti
        preferredTime: body.preferredTime,
        message: body.message || null,
      },
    })

    return NextResponse.json({ success: true, rendezvous }, { status: 200 }) // Ajout explicite du statut 200
  } catch (error: any) {
    // Spécifier le type 'any' pour accéder à 'message'
    console.error("[API ERROR] /api/rendezvous:", error)
    // Pour le débogage, renvoyez le message d'erreur détaillé
    return NextResponse.json({ success: false, error: error.message || "Erreur serveur inconnue" }, { status: 500 })
  } finally {
    // Déconnexion de Prisma. En environnement serverless, cela peut être géré différemment
    // pour optimiser les connexions, mais pour le débogage, c'est bien.
    await prisma.$disconnect()
  }
}
