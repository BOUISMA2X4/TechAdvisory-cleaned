import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const contact = await prisma.supportRequest.create({
      data: {
        name: body.name,
        email: body.email,
        category: body.category,
        description: body.description,
      },
    });

    return NextResponse.json({ success: true, contact });
  } catch (error) {
    console.error('[API ERROR] advanced-contact:', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}
