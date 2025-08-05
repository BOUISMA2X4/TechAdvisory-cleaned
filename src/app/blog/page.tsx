"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  CalendarDays,
  Tag,
  User,
  Zap,
  Shield,
  Brain,
  Clock,
  FlaskConical,
  Factory,
  Atom,
  Cpu,
  Cloud,
  Code,
  Lightbulb,
} from "lucide-react"

function SectionSeparator({ label }: { label: string }) {
  return (
    <div className="relative flex items-center py-5 my-12 md:my-16 lg:my-20">
      <div className="flex-grow border-t border-gray-800" />
      <span className="mx-4 flex-shrink text-lg md:text-xl font-semibold text-gray-400 uppercase tracking-wider font-mono">
        {label}
      </span>
      <div className="flex-grow border-t border-gray-800" />
    </div>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "IA Quantique : L'Aube de la Conscience Numérique",
    date: "22 Septembre 2080",
    category: "Intelligence Artificielle",
    excerpt:
      "Exploration des avancées en IA quantique et de ses implications pour la simulation de la conscience et la résolution de problèmes complexes.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/quantum-ai-dawn",
    author: "Dr. Anya Sharma",
    readTime: "12 min",
  },
  {
    id: 2,
    title: "Cybersécurité Neuronale : Défendre les Réseaux du Futur",
    date: "18 Septembre 2080",
    category: "Cybersécurité",
    excerpt:
      "Nouvelles approches de défense contre les menaces cybernétiques basées sur des architectures neuronales auto-apprenantes.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/neural-cybersecurity",
    author: "Prof. Kael Thorne",
    readTime: "9 min",
  },
  {
    id: 3,
    title: "Infrastructure Cloud 7D : Au-delà de la Virtualisation",
    date: "10 Septembre 2080",
    category: "Cloud Computing",
    excerpt:
      "Découvrez les concepts de l'infrastructure cloud multi-dimensionnelle et son impact sur la scalabilité et la résilience des systèmes.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/cloud-7d-infrastructure",
    author: "Ing. Lena Petrova",
    readTime: "15 min",
  },
  {
    id: 4,
    title: "Bio-Informatique : Coder le Vivant pour l'Innovation",
    date: "05 Septembre 2080",
    category: "Bio-Informatique",
    excerpt:
      "Comment la bio-informatique fusionne la biologie et l'IT pour créer des solutions révolutionnaires en médecine et en ingénierie génétique.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/bio-informatics-coding-life",
    author: "Dr. Samuel Chen",
    readTime: "11 min",
  },
  {
    id: 5,
    title: "Interfaces Cerveau-Machine : La Nouvelle Ère de l'Interaction",
    date: "28 Août 2080",
    category: "Interfaces Homme-Machine",
    excerpt:
      "Les dernières avancées en BCI (Brain-Computer Interfaces) et leur potentiel pour transformer l'interaction humaine avec la technologie.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/bci-new-era",
    author: "Neuro-Ing. Chloe Dubois",
    readTime: "10 min",
  },
  {
    id: 6,
    title: "Robotique Autonome : L'Intelligence en Mouvement",
    date: "20 Août 2080",
    category: "Robotique",
    excerpt:
      "Analyse des systèmes robotiques autonomes de nouvelle génération et de leur rôle dans l'exploration, la production et les services.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/autonomous-robotics",
    author: "Roboticien Marc Lefevre",
    readTime: "8 min",
  },
  {
    id: 7,
    title: "Énergie de Fusion : Alimenter la Civilisation du Futur",
    date: "15 Août 2080",
    category: "Énergie & Durabilité",
    excerpt:
      "Les percées dans la technologie de fusion nucléaire et son potentiel pour fournir une énergie propre et illimitée.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/fusion-energy-future",
    author: "Physicien Dr. Elias Vance",
    readTime: "14 min",
  },
  {
    id: 8,
    title: "Villes Intelligentes : L'Urbanisme Connecté de Demain",
    date: "08 Août 2080",
    category: "Smart Cities",
    excerpt:
      "Comment les technologies IT transforment les villes en écosystèmes intelligents, optimisant les ressources et améliorant la qualité de vie.",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/smart-cities-connected-urbanism",
    author: "Urbaniste Sofia Khan",
    readTime: "9 min",
  },
]

const featuredPost = blogPosts[0]

const categories = [
  { name: "Intelligence Artificielle", icon: Brain, count: 5, description: "L'esprit des machines." },
  { name: "Cybersécurité", icon: Shield, count: 4, description: "Fortifier les frontières numériques." },
  { name: "Cloud Computing", icon: Cloud, count: 6, description: "L'infrastructure de l'infini." },
  { name: "Bio-Informatique", icon: FlaskConical, count: 3, description: "Quand le code rencontre le vivant." },
  { name: "Interfaces Homme-Machine", icon: Cpu, count: 4, description: "Fusionner l'esprit et la machine." },
  { name: "Robotique", icon: Zap, count: 5, description: "L'autonomie en mouvement." },
  { name: "Énergie & Durabilité", icon: Atom, count: 2, description: "Alimenter le futur, préserver la Terre." },
  { name: "Smart Cities", icon: Factory, count: 3, description: "Les écosystèmes urbains intelligents." },
  { name: "Développement Logiciel", icon: Code, count: 7, description: "Construire les fondations du numérique." },
  { name: "Innovation & Recherche", icon: Lightbulb, count: 8, description: "Les percées de demain." },
]

export default function BlogPage() {
  return (
    <div className="relative flex flex-col min-h-[100dvh] overflow-hidden bg-gray-950 text-white font-sans">
      <main className="flex-1 relative z-10 bg-gray-950">
        {/* Hero Section: Scientific IT Universe */}
        <section
          className="w-full py-24 md:py-36 lg:py-48 xl:py-60 flex flex-col items-center justify-center text-center relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url('/placeholder.svg?height=1080&width=1920')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-gray-950/70 to-blue-900/80 backdrop-blur-sm" />
          <div className="container px-4 md:px-6 max-w-6xl space-y-10 relative z-10">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-6 leading-tight tracking-tighter drop-shadow-lg font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Bienvenue dans l'{" "}
              <span className="bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
                Univers IT Scientifique
              </span>
            </motion.h1>
            <motion.p
              className="mx-auto max-w-[900px] text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            >
              Explorez les frontières de l'innovation technologique. Plongez dans nos recherches, analyses et
              découvertes qui façonnent le futur de l'informatique.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            >
              <Link href="#latest-discoveries">
                <Button className="h-14 px-12 text-xl font-semibold bg-yellow-500 text-gray-950 shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 rounded-full flex items-center gap-2">
                  Accéder aux Découvertes <ArrowRight className="h-5 w-5 text-gray-950" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <SectionSeparator label="Dernières Découvertes" />

        {/* Latest Discoveries Section (Dynamic Content Layout) */}
        <section
          id="latest-discoveries"
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-900 border-t border-b border-gray-800"
        >
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Featured Card */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2"
              >
                <Card className="h-full p-0 bg-gray-950 border border-blue-700 rounded-3xl shadow-2xl flex flex-col overflow-hidden transform hover:scale-[1.005] transition-transform duration-500 ease-in-out group">
                  <div className="relative h-80 md:h-96">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      layout="fill"
                      objectFit="cover"
                      alt={featuredPost.title}
                      className="rounded-t-3xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <span className="inline-flex items-center rounded-full bg-yellow-500 px-4 py-1.5 text-sm font-medium text-gray-950 uppercase tracking-wide">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight font-mono">
                        <Link href={featuredPost.link} className="hover:text-yellow-400 transition-colors duration-200">
                          {featuredPost.title}
                        </Link>
                      </CardTitle>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">{featuredPost.excerpt}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-gray-400 text-sm font-mono">
                        <span className="flex items-center">
                          <CalendarDays className="w-4 h-4 mr-1 text-blue-400" /> {featuredPost.date}
                        </span>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1 text-blue-400" /> {featuredPost.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-blue-400" /> {featuredPost.readTime}
                        </span>
                      </div>
                      <Link href={featuredPost.link}>
                        <Button
                          variant="ghost"
                          className="text-blue-400 hover:text-blue-300 flex items-center gap-2 group text-lg font-semibold"
                        >
                          Lire le Briefing Complet
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 text-blue-400" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Smaller Latest Articles */}
              <div className="lg:col-span-1 grid grid-cols-1 gap-8">
                {blogPosts.slice(1, 3).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="h-full p-0 bg-gray-950 border border-gray-800 hover:border-blue-700/50 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col overflow-hidden group">
                      <Link href={post.link} className="block">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          width={600}
                          height={200}
                          alt={post.title}
                          className="w-full h-40 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                        />
                      </Link>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-xl font-bold text-white mb-1 leading-tight font-mono">
                          <Link href={post.link} className="hover:text-yellow-400 transition-colors duration-200">
                            {post.title}
                          </Link>
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-gray-400 text-xs font-mono">
                          <span className="flex items-center">
                            <CalendarDays className="w-3 h-3 mr-1 text-blue-400" /> {post.date}
                          </span>
                          <span className="flex items-center">
                            <Tag className="w-3 h-3 mr-1 text-blue-400" /> {post.category}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow p-4 pt-0 text-gray-300 text-sm leading-relaxed">
                        <p className="mb-3 font-light line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-400 text-xs font-mono">
                            <User className="w-3 h-3 mr-1 text-blue-400" /> {post.author}
                            <span className="mx-1 text-blue-400">•</span>
                            <Clock className="w-3 h-3 mr-1 text-blue-400" /> {post.readTime}
                          </div>
                          <Link href={post.link}>
                            <Button
                              variant="ghost"
                              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 group text-sm font-semibold"
                            >
                              Lire
                              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 text-blue-400" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionSeparator label="Domaines de Recherche" />

        {/* Category/Intel Filters Section */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <Link href={`/blog?category=${category.name.toLowerCase().replace(/\s/g, "-")}`}>
                    <Card className="bg-gray-900 border border-blue-800 rounded-xl shadow-lg hover:border-yellow-700/50 hover:shadow-blue-900/20 transition-all duration-300 ease-in-out flex flex-col items-center justify-center p-6 text-center h-full group">
                      <CardContent className="p-0 flex flex-col items-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className="relative mb-4"
                        >
                          <category.icon className="h-12 w-12 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-200" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white mb-2 font-mono">{category.name}</h3>
                        <p className="text-gray-400 text-sm font-light">{category.count} entrées</p>
                        <p className="text-gray-500 text-xs mt-1 font-light">{category.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator label="Archives de Connaissances" />

        {/* All Articles Grid */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-900 border-t border-b border-gray-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-7xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(3).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <Card className="h-full p-0 bg-gray-950 border border-gray-800 hover:border-blue-700/50 rounded-2xl transform hover:scale-[1.02] transition-transform duration-300 ease-in-out flex flex-col overflow-hidden group">
                    <Link href={post.link} className="block">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        width={600}
                        height={400}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </Link>
                    <CardHeader className="p-6 pb-4">
                      <CardTitle className="text-2xl font-bold text-white mb-2 leading-tight font-mono">
                        <Link href={post.link} className="hover:text-yellow-400 transition-colors duration-200">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm font-mono">
                        <span className="flex items-center">
                          <CalendarDays className="w-4 h-4 mr-1 text-blue-400" /> {post.date}
                        </span>
                        <span className="flex items-center">
                          <Tag className="w-4 h-4 mr-1 text-blue-400" /> {post.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow p-6 pt-0 text-gray-300 text-base leading-relaxed">
                      <p className="mb-4 font-light">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-sm font-mono">
                          <User className="w-4 h-4 mr-1 text-blue-400" /> {post.author}
                          <span className="mx-2 text-blue-400">•</span>
                          <Clock className="w-4 h-4 mr-1 text-blue-400" /> {post.readTime}
                        </div>
                        <Link href={post.link}>
                          <Button
                            variant="ghost"
                            className="text-blue-400 hover:text-blue-300 flex items-center gap-2 group text-lg font-semibold"
                          >
                            Lire la suite
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-blue-400" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <SectionSeparator label="Rejoignez Notre Réseau" />

        {/* Call to Action / Newsletter Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-[#1a1a1a]/80 backdrop-blur-sm border-t border-b border-gray-800">
          <div className="container grid items-center justify-center gap-10 px-4 text-center md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <h2 className="text-5xl font-bold tracking-tighter md:text-6xl/tight text-white font-mono">
                Restez Connecté aux Dernières Innovations
              </h2>
              <p className="mx-auto max-w-[800px] text-xl text-gray-300 font-light">
                Abonnez-vous à notre flux de données pour recevoir des briefings exclusifs, des analyses approfondies et
                des invitations à nos conférences technologiques.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto w-full max-w-xl space-y-6 p-8 bg-gray-900 rounded-xl shadow-2xl border border-blue-700"
            >
              <form className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Votre identifiant neural (email)"
                  className="flex-1 h-14 text-lg bg-gray-800 border-blue-700 text-white placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500 rounded-lg font-mono"
                />
                <Button
                  type="submit"
                  className="h-14 px-8 text-lg bg-yellow-500 hover:bg-yellow-600 text-gray-950 font-semibold shadow-md hover:shadow-yellow-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 rounded-lg"
                >
                  S'abonner au Flux de Données
                </Button>
              </form>
              <p className="text-sm text-gray-400 font-light">
                Vos données sont sécurisées. Lisez notre{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Protocole de Confidentialité
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
