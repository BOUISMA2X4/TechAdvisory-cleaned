"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  SearchIcon,
  Mail,
  Phone,
  HelpCircle,
  CreditCard,
  Settings,
  FileText,
  ArrowRight,
  MessageSquare,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"



// Composant de séparateur réutilisable
function SectionSeparator({ label }: { label: string }) {
  return (
    <div className="relative flex items-center py-5 my-12 md:my-16 lg:my-20">
      <div className="flex-grow border-t border-gray-800" />
      <span className="mx-4 flex-shrink text-lg md:text-xl font-semibold text-gray-400 uppercase tracking-wider">
        {label}
      </span>
      <div className="flex-grow border-t border-gray-800" />
    </div>
  )
}

export default function SupportPage() {
  const categories = [
    {
      icon: HelpCircle,
      title: "Questions Générales",
      description: "Trouvez des réponses aux questions les plus fréquentes sur nos services.",
      link: "#faqs",
    },
    {
      icon: CreditCard,
      title: "Facturation & Abonnements",
      description: "Gérez vos paiements, factures et informations d'abonnement.",
      link: "#contact-form", // Ou un lien vers une page de gestion de facturation
    },
    {
      icon: Settings,
      title: "Gestion de Compte",
      description: "Mettez à jour vos informations de profil, préférences et sécurité.",
      link: "/profile",
    },
    {
      icon: FileText,
      title: "Documentation Technique",
      description: "Accédez à nos guides détaillés et à la documentation API.",
      link: "#", // Lien vers une documentation externe ou interne
    },
  ]

  const faqs = [
    {
      question: "Comment puis-je réinitialiser mon mot de passe ?",
      answer:
        "Vous pouvez réinitialiser votre mot de passe en cliquant sur 'Mot de passe oublié' sur la page de connexion. Un lien de réinitialisation vous sera envoyé par email.",
    },
    {
      question: "Quels sont les modes de paiement acceptés ?",
      answer:
        "Nous acceptons les cartes de crédit (Visa, MasterCard, American Express) et les virements bancaires pour les abonnements annuels.",
    },
    {
      question: "Comment contacter le support technique ?",
      answer:
        "Vous pouvez nous contacter via le formulaire de contact sur cette page, par email à support@techadvisory.com, ou par téléphone pendant les heures de bureau.",
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer:
        "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre espace client. L'annulation prendra effet à la fin de votre période de facturation actuelle.",
    },
    {
      question: "Offrez-vous une période d'essai gratuite ?",
      answer:
        "Oui, nous proposons une période d'essai gratuite de 14 jours pour tous nos plans premium. Aucune carte de crédit n'est requise pour l'essai.",
    },
  ]

  return (
    <div className="relative flex flex-col min-h-[100dvh] overflow-hidden bg-[#1a1a1a] text-white grid-background">
     
      <main className="flex-1 relative z-10 bg-gray-950">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-36 lg:py-48 xl:py-60 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="container px-4 md:px-6 max-w-5xl space-y-10 relative z-10">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tighter drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Comment pouvons-nous vous{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">aider ?</span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Notre équipe de support est là pour vous accompagner. Trouvez des réponses rapides ou contactez-nous
              directement.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full max-w-lg mx-auto"
            >
              <Input
                type="search"
                placeholder="Rechercher dans la base de connaissances..."
                className="flex-1 h-14 text-lg bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-full pl-6 pr-12"
              />
              <Button className="h-14 px-8 text-lg font-semibold bg-white text-black shadow-lg hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-full flex items-center gap-2">
                <SearchIcon className="h-5 w-5" /> Rechercher
              </Button>
            </motion.div>
          </div>
        </section>

        <SectionSeparator label="Catégories de Support" />

        {/* Support Categories Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-7xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <Link href={category.link} className="block h-full">
                    <Card className="h-full p-6 bg-white/5 backdrop-blur-sm shadow-lg border border-gray-800 hover:border-blue-700/50 rounded-xl transform hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col justify-between">
                      <CardHeader className="pb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="relative"
                        >
                          <category.icon className="h-12 w-12 text-blue-400 mb-4" />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold text-white mb-2">{category.title}</CardTitle>
                        <CardDescription className="text-gray-400 text-base leading-relaxed">
                          {category.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 mt-4">
                        <Button
                          variant="ghost"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 group"
                        >
                          Voir plus
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator label="Questions Fréquemment Posées" />

        {/* FAQ Section */}
        <section
          id="faqs"
          className="w-full py-16 md:py-24 lg:py-32 bg-[#1a1a1a]/80 backdrop-blur-sm border-t border-b border-gray-800"
        >
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-bold tracking-tighter text-white"
              >
                Vos Questions, Nos Réponses
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-[900px] text-lg md:text-xl text-gray-300"
              >
                Retrouvez ici les réponses aux questions les plus fréquentes concernant nos services et notre approche.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg border border-gray-800"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                    <AccordionTrigger className="text-lg md:text-xl text-white hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 text-base md:text-lg py-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <SectionSeparator label="Contactez-nous" />

        {/* Contact Section */}
        <section id="contact-form" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-bold tracking-tighter text-white"
              >
                Besoin d'aide supplémentaire ?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-[900px] text-lg md:text-xl text-gray-300"
              >
                Remplissez le formulaire ci-dessous ou utilisez les options de contact direct.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg border border-gray-800 grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Contact Form */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Votre Nom
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Nom Complet"
                      className="h-12 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Votre Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@exemple.com"
                      className="h-12 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Votre Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre problème ou votre question..."
                      rows={5}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-12 px-8 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md hover:shadow-blue-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </div>

              {/* Direct Contact Options */}
              <div className="space-y-6 lg:pl-8 lg:border-l lg:border-gray-700">
                <h3 className="text-2xl font-bold text-white">Autres options</h3>
                <Card className="bg-gray-800 border-gray-700 text-white">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-8 w-8 text-blue-400" />
                      <div>
                        <h4 className="text-xl font-semibold">Email</h4>
                        <p className="text-gray-300">
                          <Link href="mailto:support@techadvisory.com" className="hover:underline text-blue-300">
                            support@techadvisory.com
                          </Link>
                        </p>
                        <p className="text-gray-400 text-sm">Réponse sous 24h</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="h-8 w-8 text-blue-400" />
                      <div>
                        <h4 className="text-xl font-semibold">Téléphone</h4>
                        <p className="text-gray-300">+33 1 23 45 67 89</p>
                        <p className="text-gray-400 text-sm">Lun-Ven, 9h-17h (CET)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <BookOpen className="h-8 w-8 text-blue-400" />
                      <div>
                        <h4 className="text-xl font-semibold">Base de Connaissances</h4>
                        <p className="text-gray-300">
                          <Link href="#" className="hover:underline text-blue-300">
                            Consulter nos articles d'aide
                          </Link>
                        </p>
                        <p className="text-gray-400 text-sm">Guides et tutoriels détaillés</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MessageSquare className="h-8 w-8 text-blue-400" />
                      <div>
                        <h4 className="text-xl font-semibold">Chat en Direct</h4>
                        <p className="text-gray-300">
                          <Link href="#" className="hover:underline text-blue-300">
                            Démarrer une conversation
                          </Link>
                        </p>
                        <p className="text-gray-400 text-sm">Disponible pendant les heures de bureau</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
     
    </div>
  )
}
