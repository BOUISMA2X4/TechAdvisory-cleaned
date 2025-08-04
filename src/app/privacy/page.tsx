"use client"

import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="relative flex flex-col min-h-[100dvh] overflow-hidden bg-[#1a1a1a] text-white grid-background">
     
      <main className="flex-1 relative z-10 py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-extrabold tracking-tight sm:text-6xl text-white mb-12 text-center"
          >
            Politique de Confidentialité et Conditions Générales
          </motion.h1>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bienvenue sur le site de Votre Entreprise Digitale. Nous nous engageons à protéger votre vie privée et à
              assurer la sécurité de vos informations personnelles. Cette politique de confidentialité et ces conditions
              générales décrivent comment nous collectons, utilisons, traitons et protégeons vos données lorsque vous
              utilisez nos services de conseil en nouvelles technologies. En accédant à notre site web ou en utilisant
              nos services, vous acceptez les termes de cette politique.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nous sommes une entreprise de conseil en nouvelles technologies, spécialisée dans la transformation
              digitale, le développement logiciel, les solutions cloud, l'analyse de données et le design UI/UX.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">2. Collecte des Informations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous collectons différents types d'informations pour fournir et améliorer nos services :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>
                <span className="font-semibold text-white">Informations Personnelles :</span> Nom, adresse e-mail,
                numéro de téléphone, informations professionnelles (entreprise, poste) lorsque vous nous contactez via
                nos formulaires, vous inscrivez à notre newsletter ou interagissez avec nos services.
              </li>
              <li>
                <span className="font-semibold text-white">Données d'Utilisation :</span> Informations sur la manière
                dont vous accédez et utilisez notre site web, y compris votre adresse IP, le type de navigateur, les
                pages visitées, le temps passé sur ces pages, et d'autres statistiques de diagnostic.
              </li>
              <li>
                <span className="font-semibold text-white">Données de Cookies :</span> Nous utilisons des cookies et des
                technologies de suivi similaires pour suivre l'activité sur notre service et conserver certaines
                informations.
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">3. Utilisation des Informations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous utilisons les informations collectées à diverses fins :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>Pour fournir et maintenir nos services.</li>
              <li>Pour vous informer des changements apportés à nos services.</li>
              <li>Pour permettre votre participation aux fonctionnalités interactives de nos services.</li>
              <li>Pour fournir un support client.</li>
              <li>Pour surveiller l'utilisation de nos services.</li>
              <li>Pour détecter, prévenir et résoudre les problèmes techniques.</li>
              <li>
                Pour vous envoyer des newsletters, des offres marketing et d'autres informations susceptibles de vous
                intéresser.
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">4. Partage des Informations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons
              partager vos informations avec :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>
                <span className="font-semibold text-white">Fournisseurs de Services :</span> Des tiers qui nous aident à
                exploiter notre site web, à mener nos activités ou à vous servir, à condition que ces parties acceptent
                de garder ces informations confidentielles.
              </li>
              <li>
                <span className="font-semibold text-white">Exigences Légales :</span> Lorsque la loi l'exige ou en
                réponse à des demandes valides des autorités publiques (par exemple, un tribunal ou une agence
                gouvernementale).
              </li>
              <li>
                <span className="font-semibold text-white">Transferts d'Entreprise :</span> Dans le cadre d'une fusion,
                acquisition ou vente d'actifs, vos informations personnelles peuvent être transférées.
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">5. Sécurité des Données</h2>
            <p className="text-gray-300 leading-relaxed">
              La sécurité de vos données est primordiale pour nous. Nous mettons en œuvre des mesures de sécurité
              techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès
              non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucune méthode de transmission
              sur Internet ou de stockage électronique n'est 100% sécurisée.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">6. Vos Droits</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Conformément aux réglementations en vigueur (comme le RGPD), vous disposez de certains droits concernant
              vos données personnelles :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
              <li>Droit d'accès à vos données.</li>
              <li>Droit de rectification des données inexactes.</li>
              <li>Droit à l'effacement de vos données.</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit à la portabilité des données.</li>
              <li>Droit d'opposition au traitement.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée dans la section "Contact".
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">7. Cookies et Technologies Similaires</h2>
            <p className="text-gray-300 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez configurer votre
              navigateur pour refuser tous les cookies ou pour vous alerter lorsqu'un cookie est envoyé. Cependant, si
              vous n'acceptez pas les cookies, il est possible que vous ne puissiez pas utiliser certaines parties de
              notre service.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">8. Modifications de la Politique</h2>
            <p className="text-gray-300 leading-relaxed">
              Nous pouvons mettre à jour notre politique de confidentialité et nos conditions générales de temps à
              autre. Nous vous informerons de tout changement en publiant la nouvelle politique sur cette page. Il vous
              est conseillé de consulter cette politique périodiquement pour prendre connaissance des modifications.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700"
          >
            <h2 className="text-3xl font-bold text-white mb-6">9. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou nos conditions générales, veuillez
              nous contacter :
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4 mt-4">
              <li>
                Par e-mail :{" "}
                <Link href="mailto:contact@votreentreprise.com" className="text-blue-400 hover:underline">
                  contact@votreentreprise.com
                </Link>
              </li>
              <li>Par téléphone : +33-123-456-789</li>
              <li>Par courrier : [Votre Adresse Complète]</li>
            </ul>
          </motion.section>
        </div>
      </main>
      
    </div>
  )
}
