import { auth } from "@/lib/auth" // Assurez-vous que c'est bien "@/app/auth"
import { redirect } from "next/navigation"
import { unstable_noStore } from "next/cache" // Importez unstable_noStore
import ProfileContent from "@/components/profile-content"

export default async function ProfilePage() {
  unstable_noStore() // Force le rendu dynamique

  const session = await auth()
  console.log("Session dans page.tsx :", session) // Vérifiez ce log dans vos logs serveur

  if (!session || !session.user) {
    console.log("Session ou session.user est manquant, redirection vers signin.")
    redirect("/api/auth/signin")
  }

  return (
    // Le Header et le Footer sont fournis par app/layout.tsx, ne les incluez pas ici.
    <div className="relative flex flex-col min-h-[100dvh] overflow-hidden bg-gray-950 text-white">
      <main className="flex-1 relative z-10 py-20 md:py-32 lg:py-40 flex items-center justify-center">
        <ProfileContent session={session} />
      </main>
    </div>
  )
}
