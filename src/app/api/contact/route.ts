import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { z } from "zod"
import { Resend } from "resend" // Importez Resend

// Initialisez Resend avec votre clé API
const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Sauvegarder en base de données
    const contact = await prisma.supportRequest.create({
      data: {
        name,
        email,
        category,
        description,
      },
    })

    let emailSent = false
    let emailMessage = ""

    // Envoyer l'email de confirmation
    try {
      const { data, error } = await resend.emails.send({
        from: "https://tech-advisory-cleaned.vercel.app/", // REMPLACEZ par votre domaine vérifié dans Resend
        to: [email],
        subject: "Confirmation de réception - Votre demande de support",
        html: `
          <!DOCTYPE html>
          <html lang="fr">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmation de réception</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
              
              <!-- Header -->
              <div style="background-color: #2563eb; padding: 30px 20px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">
                  Confirmation de réception
                </h1>
              </div>

              <!-- Content -->
              <div style="padding: 30px 20px;">
                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Bonjour <strong>${name}</strong>,
                </p>

                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                  Nous avons bien reçu votre demande de support. Voici un récapitulatif de votre demande :
                </p>

                <!-- Request Details Card -->
                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; margin: 25px 0;">
                  <h3 style="color: #111827; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                    Détails de votre demande
                  </h3>
                  
                  <div style="margin-bottom: 12px;">
                    <span style="color: #6b7280; font-weight: 600;">Numéro de demande :</span>
                    <span style="color: #111827; margin-left: 8px;">#${contact.id}</span>
                  </div>
                  
                  <div style="margin-bottom: 12px;">
                    <span style="color: #6b7280; font-weight: 600;">Catégorie :</span>
                    <span style="color: #111827; margin-left: 8px;">${category}</span>
                  </div>
                  
                  <div style="margin-bottom: 0;">
                    <span style="color: #6b7280; font-weight: 600;">Description :</span>
                  </div>
                  <div style="background-color: #ffffff; border: 1px solid #d1d5db; border-radius: 6px; padding: 15px; margin-top: 8px;">
                    <p style="color: #374151; margin: 0; line-height: 1.5;">${description}</p>
                  </div>
                </div>

                <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 25px 0;">
                  Notre équipe examinera votre demande et vous contactera dans les plus brefs délais.
                </p>

                <!-- Info Box -->
                <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0;">
                  <p style="margin: 0; color: #1e40af; font-size: 14px; line-height: 1.5;">
                    <strong>Besoin d'aide supplémentaire ?</strong><br>
                    N'hésitez pas à nous contacter à <a href="mailto:support@votre-domaine.com" style="color: #1e40af; text-decoration: none;">support@votre-domaine.com</a>
                  </p>
                </div>
              </div>

              <!-- Footer -->
              <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
                  Cordialement,<br>
                  <strong>L'équipe Support</strong>
                </p>
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                  Cet email a été envoyé automatiquement, merci de ne pas y répondre.
                </p>
              </div>

            </div>
          </body>
          </html>
        `,
      })

      if (error) {
        console.error("Erreur lors de l'envoi de l'email:", error)
        emailSent = false
        emailMessage = "Votre demande a été enregistrée mais l'email de confirmation n'a pas pu être envoyé."
      } else {
        console.log(`Email de confirmation envoyé à ${email}`, data)
        emailSent = true
        emailMessage = "Votre demande a été enregistrée avec succès. Un email de confirmation vous a été envoyé."
      }
    } catch (emailError) {
      // Log l'erreur mais ne fait pas échouer la requête principale
      console.error("Erreur inattendue lors de l'envoi de l'email:", emailError)
      emailSent = false
      emailMessage =
        "Votre demande a été enregistrée mais l'email de confirmation n'a pas pu être envoyé en raison d'une erreur serveur."
    }

    return NextResponse.json({
      success: true,
      contact,
      emailSent,
      message: emailMessage,
    })
  } catch (error) {
    console.error("[API ERROR] advanced-contact:", error)
    return NextResponse.json({ success: false, error: "Erreur serveur interne" }, { status: 500 })
  }
}
