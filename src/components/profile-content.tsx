"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProfileContent({ session }: { session: any }) {
  console.log("Session received by ProfileContent (Client Component):", session)
  console.log("ProfileContent is rendering.")

  const userName = session?.user?.name || "Utilisateur Inconnu"
  const userEmail = session?.user?.email || "Email non disponible"
  const userImage = session?.user?.image || "/placeholder.svg?height=96&width=96"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-md mx-auto p-6 md:p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 text-white flex flex-col items-center text-center"
    >
      <Card className="w-full bg-gray-800 border-gray-700 text-white">
        <CardHeader className="flex flex-col items-center text-center space-y-4 pb-6">
          <img
            src={userImage || "/placeholder.svg"}
            alt="Photo de profil"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
          <CardTitle className="text-3xl font-bold">{userName}</CardTitle>
          <CardDescription className="text-gray-400 text-lg">{userEmail}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-4 text-center">
          <p className="text-gray-300 text-base leading-relaxed">
            Bienvenue sur votre espace client. Ici, vous pouvez consulter les informations essentielles de votre compte.
            Pour toute modification ou question, veuillez contacter notre support.
          </p>
          <Link href="/support">
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white">Contacter le Support</Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}
