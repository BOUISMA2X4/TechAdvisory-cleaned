import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Vérification des champs obligatoires
    if (
      !body.fullName ||
      !body.email ||
      !body.statut ||
      !body.projectType ||
      !body.preferredDate ||
      !body.preferredTime
    ) {
      return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 });
    }

    const rendezvous = await prisma.rendezvous.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        company: body.company || null,
        position: body.position || null,
        statut: body.statut,
        projectType: body.projectType,
        preferredDate: new Date(body.preferredDate),
        preferredTime: body.preferredTime,
        message: body.message || null,
      },
    });

    return NextResponse.json({ success: true, rendezvous });
  } catch (error) {
    console.error('[API ERROR] /api/rendezvous:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
