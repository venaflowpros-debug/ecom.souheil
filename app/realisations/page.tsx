"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import projectImage1 from "@/image/image 1 .png";
import projectImage2 from "@/image/image 2.png";
import projectImage3 from "@/image/IMAGE3 .png";

const portfolios = [
  {
    id: "rlp1",
    secteur: "E-commerce",
    prestation: "Site web + Tunnel de vente",
    resultat: "Taux de conversion optimisé",
    description: "Refonte complète avec focus conversion"
  },
  {
    id: "rlp2",
    secteur: "Conciergerie / Location saisonnière",
    prestation: "Landing page + Réservations directes",
    resultat: "Augmentation des réservations directes",
    description: "Page optimisée pour capter des réservations sans commission"
  },
  {
    id: "rlp3",
    secteur: "Agent immobilier",
    prestation: "Page de capture + CRM leads",
    resultat: "Génération de mandats qualifiés",
    description: "Tunnel de leads pour agents et agences"
  }
];

const imagesByPortfolio = {
  rlp1: projectImage1,
  rlp2: projectImage2,
  rlp3: projectImage3
};

function PortfolioPreview({ id }: { id: string }) {
  const src = imagesByPortfolio[id as keyof typeof imagesByPortfolio];
  return (
    <div className="relative h-[230px] w-full overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#111]">
      <Image
        src={src}
        alt={`Aperçu du projet ${id}`}
        width={1200}
        height={700}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function RealisationsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 section-pad">
      <p className="text-xs uppercase tracking-[0.2em] text-[#888]">Portfolio</p>
      <h1 className="mt-3 font-display text-5xl md:text-7xl">Nos Réalisations</h1>
      <p className="mt-4 text-[#aaa]">Des projets concrets, des résultats mesurables</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {portfolios.map((portfolio) => (
          <AnimateOnScroll key={portfolio.id}>
            <article className="premium-card card-hover rounded-3xl p-5">
              <PortfolioPreview id={portfolio.id} />
              <div className="mt-4 space-y-2 text-sm text-[#e0e0e0]">
                <p>🏷️ Secteur : {portfolio.secteur}</p>
                <p>📋 Prestation : {portfolio.prestation}</p>
                <p>📈 Résultat : {portfolio.resultat}</p>
              </div>
              <p className="mt-3 text-sm text-[#9a9a9a]">{portfolio.description}</p>
              <button
                type="button"
                className="mt-5 inline-flex rounded-2xl border border-[#d4af37] px-4 py-2 text-sm text-[#f5f5f5] transition hover:bg-[#d4af37] hover:text-black"
              >
                Voir le projet →
              </button>
            </article>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
