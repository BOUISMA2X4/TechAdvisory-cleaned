import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css" // Assuming this path is correct for your globals.css
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar" // Assuming Navbar is still used
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import AuthProvider from "@/components/auth-provider" // Import the new AuthProvider

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TechAdvisory",
  description: "Site institutionnel de la société Nouvelle Technologie Advisory",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        {" "}
        {/* Apply font class here */}
        <AuthProvider>
          {" "}
          {/* Wrap everything inside AuthProvider */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
