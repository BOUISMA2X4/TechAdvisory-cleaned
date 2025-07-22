import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  // Appliquer le middleware aux routes /api/chat, /api/advanced-contact et /api/rendezvous
  if (
    request.nextUrl.pathname === "/api/chat" ||
    request.nextUrl.pathname === "/api/advanced-contact" ||
    request.nextUrl.pathname === "/api/rendezvous"
  ) {
    const authHeader = request.headers.get("authorization")

    const API_KEY_SECRET = process.env.API_KEY_SECRET

    if (!authHeader || authHeader !== `Bearer ${API_KEY_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  return NextResponse.next()
}

// Définir les chemins pour lesquels le middleware doit s'exécuter
export const config = {
  matcher: ["/api/chat", "/api/advanced-contact", "/api/rendezvous"],
}
