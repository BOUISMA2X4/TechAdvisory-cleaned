import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function Navigation() {
  return (
    <nav className="flex items-center space-x-6">
      {/* Vos autres liens de navigation */}
      <Link
        href="/chatbot"
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Assistant IA</span>
      </Link>
    </nav>
  )
}
