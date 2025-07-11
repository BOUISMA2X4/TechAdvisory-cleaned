import { Code, ShieldCheck, Cloud } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre principal */}
        <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 mb-6 tracking-tight">
          Nos Domaines d’Expertise
        </h2>
        <p className="text-neutral-600 text-base md:text-lg mb-16 max-w-2xl mx-auto">
          Des solutions innovantes pour accompagner votre transformation digitale avec performance, sécurité et agilité.
        </p>

        {/* Grid des services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Code className="w-6 h-6 text-blue-600" />}
            title="Développement Web"
            description="Applications web modernes basées sur React, Next.js, Node.js — avec une approche orientée performance & expérience utilisateur."
          />
          <ServiceCard
            icon={<Cloud className="w-6 h-6 text-blue-600" />}
            title="Cloud & DevOps"
            description="Infrastructure scalable, CI/CD, monitoring et automatisation cloud avec AWS, Azure et outils DevOps modernes."
          />
          <ServiceCard
            icon={<ShieldCheck className="w-6 h-6 text-blue-600" />}
            title="Cybersécurité & Conformité"
            description="Audits, durcissement, gouvernance des risques et conformité RGPD pour sécuriser vos actifs numériques."
          />
        </div>
      </div>
    </section>
  );
}
