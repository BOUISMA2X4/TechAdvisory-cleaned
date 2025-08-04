import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID, // Correctement lié à la variable d'environnement
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // Correctement lié à la variable d'environnement
    }),
  ],
  pages: {
    signIn: "/api/auth/signin", // Page de connexion par défaut de NextAuth.js
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Correctement lié à la variable d'environnement
})
