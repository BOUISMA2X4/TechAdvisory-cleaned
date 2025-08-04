"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Brain,
  ShieldCheck,
  Settings,
  ArrowRight,
  Lightbulb,
  Handshake,
  Award,
  Quote,
  Users,
  Zap,
  Code,
  BarChart,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"



// Custom Separator component for a modern look
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

export default function ServicesPage() {
  const serviceData = [
    {
      icon: Brain,
      title: "Intelligence Artificielle & Data",
      description:
        "Nous vous accompagnons dans la conception et le déploiement de solutions d’IA sur mesure pour améliorer vos performances, optimiser vos processus métier et exploiter la puissance de vos données.",
      details: [
        "Stratégie et feuille de route IA",
        "Développement de modèles de Machine Learning",
        "Analyse prédictive et prescriptive",
        "Intégration de solutions d'IA générative",
        "Gouvernance des données et Big Data",
      ],
      image: "/images/ai-consulting.webp",
      alt: "AI Consulting",
    },
    {
      icon: ShieldCheck,
      title: "Cybersécurité & Résilience",
      description:
        "Protégez vos actifs numériques avec des stratégies robustes : audit de sécurité, plan de réponse aux incidents, mise en conformité réglementaire (RGPD, NIS2).",
      details: [
        "Audits de sécurité et tests d'intrusion",
        "Mise en conformité (RGPD, NIS2, ISO 27001)",
        "Gestion des risques et des incidents",
        "Sensibilisation et formation des équipes",
        "Protection des infrastructures critiques",
      ],
      image: "/images/cyber.webp",
      alt: "Cybersecurity",
    },
    {
      icon: Settings,
      title: "DevOps & Cloud Advisory",
      description:
        "De la stratégie Cloud à l’implémentation DevOps, nous assurons la scalabilité, l’automatisation et la fiabilité de vos plateformes numériques.",
      details: [
        "Migration et optimisation Cloud (AWS, Azure, GCP)",
        "Mise en place de pipelines CI/CD",
        "Automatisation de l'infrastructure (IaC)",
        "Conteneurisation (Docker, Kubernetes)",
        "Surveillance et optimisation des performances",
      ],
      image: "/images/devops.png",
      alt: "DevOps",
    },
    {
      icon: Code,
      title: "Développement Logiciel Sur Mesure",
      description:
        "Conception et développement d'applications web et mobiles performantes, sécurisées et adaptées à vos besoins spécifiques.",
      details: [
        "Applications Web (React, Next.js, Angular, Vue)",
        "Applications Mobiles (iOS, Android, React Native)",
        "Développement Backend (Node.js, Python, Go)",
        "Microservices et API",
        "Refonte et modernisation de systèmes existants",
      ],
      image: "/placeholder.svg?height=400&width=700",
      alt: "Custom Software Development",
    },
    {
      icon: Palette,
      title: "Design UI/UX & Expérience Utilisateur",
      description:
        "Création d'interfaces intuitives et d'expériences utilisateur mémorables qui captivent votre audience et optimisent l'engagement.",
      details: [
        "Recherche utilisateur et personas",
        "Wireframing et prototypage interactif",
        "Design d'interface (UI) et systèmes de design",
        "Tests utilisateurs et optimisation",
        "Accessibilité numérique (WCAG)",
      ],
      image: "/placeholder.svg?height=400&width=700",
      alt: "UI/UX Design",
    },
    {
      icon: BarChart,
      title: "Stratégie Digitale & Transformation",
      description:
        "Définissez et exécutez votre vision numérique avec une stratégie claire, de l'audit à la mise en œuvre du changement.",
      details: [
        "Audit et diagnostic digital",
        "Définition de la stratégie numérique",
        "Gestion du changement et accompagnement",
        "Optimisation des processus métier",
        "Veille technologique et innovation",
      ],
      image: "/placeholder.svg?height=400&width=700",
      alt: "Digital Strategy",
    },
  ]

  const testimonials = [
    {
      quote:
        "Leur expertise en IA a transformé notre approche des données. Des résultats concrets et une équipe très réactive !",
      author: "Jean Dupont",
      title: "CEO, TechInnov",
    },
    {
      quote:
        "Grâce à leur audit de cybersécurité, nous avons renforcé nos défenses et sommes désormais sereins face aux menaces.",
      author: "Marie Curie",
      title: "CTO, SecureCorp",
    },
    {
      quote:
        "L'implémentation DevOps a révolutionné nos déploiements. Plus rapides, plus fiables, un vrai gain de temps !",
      author: "Pierre Martin",
      title: "Directeur IT, CloudSolutions",
    },
  ]

  const faqs = [
    {
      question: "Comment débute un projet de conseil avec vous ?",
      answer:
        "Nous commençons par une consultation initiale gratuite pour comprendre vos besoins et défis. Ensuite, nous proposons une approche personnalisée et un devis détaillé.",
    },
    {
      question: "Quels sont vos délais de livraison typiques ?",
      answer:
        "Les délais varient en fonction de la complexité et de l'étendue du projet. Nous établissons un calendrier réaliste et transparent dès le début de notre collaboration.",
    },
    {
      question: "Offrez-vous un support après la livraison du projet ?",
      answer:
        "Oui, nous proposons des contrats de support et de maintenance adaptés à vos besoins pour assurer la pérennité et l'évolution de nos solutions.",
    },
    {
      question: "Comment assurez-vous la confidentialité de nos données ?",
      answer:
        "La sécurité et la confidentialité de vos données sont notre priorité absolue. Nous appliquons des protocoles stricts, des accords de non-divulgation et respectons les réglementations en vigueur comme le RGPD.",
    },
  ]

  return (
    <div className="relative flex flex-col min-h-[100dvh] overflow-hidden text-white">
     
      <main className="flex-1 relative z-10 bg-gray-950">
        {" "}
        {/* Changed background to match contact page */}
        {/* Hero Section */}
        <section className="w-full py-24 md:py-36 lg:py-48 xl:py-60 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="container px-4 md:px-6 max-w-5xl space-y-10 relative z-10">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 leading-tight tracking-tighter drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Notre Expertise en{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Conseil Digital
              </span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Chez <strong className="font-bold text-blue-400">Nouvelle Technologie Advisory</strong>, nous guidons nos
              clients vers une transformation digitale performante et durable. Notre approche personnalisée repose sur
              l’analyse stratégique, la technologie de pointe et une expertise sectorielle éprouvée.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            >
              <Link href="#contact">
                <Button className="h-12 px-8 text-lg font-semibold bg-white text-black shadow-lg hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-full flex items-center gap-2">
                  Commencer Maintenant <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#services-list">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-lg font-semibold border-2 border-gray-700 bg-transparent text-white shadow-md hover:shadow-gray-500/30 transition-all duration-300 hover:bg-gray-800 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 rounded-full"
                >
                  Découvrir Nos Services
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        <SectionSeparator label="Nos Domaines de Conseil" />
        {/* Services List Section */}
        <section id="services-list" className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-7xl items-start gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {serviceData.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 bg-white/5 backdrop-blur-sm shadow-lg border border-gray-800 hover:border-blue-700/50 rounded-xl transform hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col">
                    <CardHeader className="pb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative"
                      >
                        <service.icon className="h-12 w-12 text-blue-400 mb-6" />
                      </motion.div>
                      <CardTitle className="text-3xl font-bold text-white mb-3">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow text-gray-300 text-lg leading-relaxed">
                      <p className="mb-4">{service.description}</p>
                      <ul className="list-disc list-inside text-gray-400 space-y-2 text-base">
                        {service.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="mt-6">
                      <Link href="#contact">
                        <Button
                          variant="ghost"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 group"
                        >
                          En savoir plus
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <SectionSeparator label="Pourquoi nous choisir ?" />
        {/* Why Choose Us Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-[#1a1a1a]/80 backdrop-blur-sm border-t border-b border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/images/2020-it-consulting-group-picture.jpg"
                  width={750}
                  height={450}
                  alt="Why Choose Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-2xl border border-gray-700"
                />
              </motion.div>
              <div className="flex flex-col justify-center space-y-8">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl sm:text-5xl font-bold tracking-tighter text-white"
                >
                  Notre Engagement : Votre Succès
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="max-w-[800px] text-lg md:text-xl text-gray-300 leading-relaxed"
                >
                  Nous nous distinguons par notre approche centrée sur le client, notre expertise technique de pointe et
                  notre engagement envers l'innovation. Chaque projet est une opportunité de créer de la valeur durable.
                </motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  {[
                    { icon: Lightbulb, text: "Innovation Constante" },
                    { icon: Handshake, text: "Partenariat Stratégique" },
                    { icon: Award, text: "Excellence Technique" },
                    { icon: Users, text: "Approche Collaborative" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <item.icon className="h-6 w-6 text-blue-400 flex-shrink-0" />
                      <span className="text-lg text-gray-200 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionSeparator label="Notre Processus de Collaboration" />
        {/* Our Process Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-bold tracking-tighter text-white"
              >
                De l'Idée à la Réalisation
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-[900px] text-lg md:text-xl text-gray-300"
              >
                Notre processus structuré garantit une collaboration fluide et des résultats optimaux, de la conception
                initiale à la livraison finale et au-delà.
              </motion.p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
              {/* Connector lines for larger screens */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-gray-800 z-0"></div>
              <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 -translate-y-1/2 h-1 bg-gray-800 z-0"></div>
              <div className="hidden lg:block absolute top-1/2 left-2/4 right-2/4 -translate-y-1/2 h-1 bg-gray-800 z-0"></div>

              {[
                {
                  step: 1,
                  title: "Découverte & Stratégie",
                  description: "Analyse approfondie de vos besoins, objectifs et environnement marché.",
                  icon: Lightbulb,
                },
                {
                  step: 2,
                  title: "Conception & Planification",
                  description: "Élaboration de la solution, architecture technique et feuille de route détaillée.",
                  icon: Brain,
                },
                {
                  step: 3,
                  title: "Développement & Implémentation",
                  description: "Développement agile, tests rigoureux et intégration continue.",
                  icon: Code,
                },
                {
                  step: 4,
                  title: "Déploiement & Optimisation",
                  description: "Mise en production, formation et support continu pour l'évolution.",
                  icon: Zap,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 hover:border-blue-700/50 transition-all duration-300 ease-in-out"
                >
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold mb-4 shadow-md">
                    {item.step}
                  </div>
                  <item.icon className="h-10 w-10 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 w-full max-w-[1000px] px-4 md:px-6 relative z-10 mx-auto"
            >
              <Image
                src="/images/1b42bd3e70dc-consultant-informatique.jpg"
                width={1000}
                height={500}
                alt="Our Process Illustration"
                className="mx-auto rounded-xl shadow-2xl border border-gray-800 object-cover object-center"
              />
            </motion.div>
          </div>
        </section>
        <SectionSeparator label="Ce que nos clients disent" />
        {/* Testimonials Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-[#1a1a1a]/80 backdrop-blur-sm border-t border-b border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="text-4xl sm:text-5xl font-bold tracking-tighter text-white"
              >
                Témoignages Clients
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-[900px] text-lg md:text-xl text-gray-300"
              >
                Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs et à transformer leur
                entreprise.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <Card className="h-full p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-800 flex flex-col justify-between hover:border-blue-700/50 transition-all duration-300 ease-in-out">
                    <CardContent className="p-0">
                      <Quote className="h-8 w-8 text-blue-500 mb-4" />
                      <p className="text-lg text-gray-200 italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                      <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <SectionSeparator label="Questions Fréquemment Posées" />
        {/* FAQ Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
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
        <SectionSeparator label="Prêt à Démarrer Votre Projet ?" />
        {/* Call to Action Section */}
        <section
          id="contact"
          className="w-full py-20 md:py-32 lg:py-40 bg-[#1a1a1a]/80 backdrop-blur-sm border-t border-b border-gray-800"
        >
          <div className="container grid items-center justify-center gap-10 px-4 text-center md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <h2 className="text-5xl font-bold tracking-tighter md:text-6xl/tight text-white">
                Prêt à Démarrer Votre Projet ?
              </h2>
              <p className="mx-auto max-w-[800px] text-xl text-gray-300">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider
                à atteindre vos objectifs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto w-full max-w-xl space-y-6 p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-700"
            >
            
              <p className="text-sm text-gray-400">
                Nous respectons votre vie privée. Lisez nos{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Conditions Générales
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    
    </div>
  )
}
