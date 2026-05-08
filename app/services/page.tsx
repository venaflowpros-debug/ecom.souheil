import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function ServicesPage() {
  const packs = [
    {
      name: "PACK STARTER",
      price: "199€",
      subtitle: "Site vitrine essentiel",
      quote: "Pour démarrer en ligne avec une présence pro.",
      items: [
        "Site 3 pages (Accueil, Services, Contact)",
        "Design responsive premium",
        "Formulaire de contact",
        "Hébergement 1 an INCLUS",
        "Nom de domaine 1 an INCLUS",
        "Livraison 5 jours"
      ]
    },
    {
      name: "PACK BUSINESS",
      price: "349€",
      subtitle: "Site optimisé conversion",
      quote: "Pour les commerçants qui veulent +20% de CA.",
      popular: true,
      items: [
        "Site jusqu'à 6 pages",
        "Design sur-mesure premium",
        "SEO optimisé (Google)",
        "Galerie photos / Portfolio",
        "Formulaire avancé + Google Maps",
        "Hébergement 1 an INCLUS",
        "Nom de domaine 1 an INCLUS",
        "Livraison 7 jours",
        "1 mois de support"
      ]
    },
    {
      name: "PACK PREMIUM",
      price: "499€",
      subtitle: "Site sophistiqué tout inclus",
      quote: "Pour les marques qui visent l'excellence.",
      items: [
        "Site illimité en pages",
        "Design 100% sur-mesure",
        "SEO avancé + Google My Business",
        "Animations premium",
        "Multi-langues possible",
        "Hébergement 1 an INCLUS",
        "Nom de domaine 1 an INCLUS",
        "Livraison 10 jours",
        "3 mois de support",
        "Modifications illimitées 1er mois"
      ]
    }
  ];

  const addons = [
    "Système de réservation",
    "Module e-commerce / commande",
    "Bons d'achat & codes promo",
    "Programme fidélité",
    "Espace client",
    "Multi-boutiques"
  ];

  return (
    <div className="noise-bg">
      <section className="mx-auto max-w-7xl px-4 section-pad">
        <p className="text-xs uppercase tracking-[0.24em] text-[#888]">Offres claires. Résultats concrets.</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl md:text-7xl">Choisis ton pack. Lance ton site. Vends plus.</h1>
        <p className="mt-6 max-w-3xl text-[#aaa]">Pas de blabla. Pas de coûts cachés. Juste des offres premium calibrées pour commerçants, agents immobiliers, conciergeries et pros de la location saisonnière qui veulent plus de leads qualifiés et plus de conversions.</p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 lg:grid-cols-3">
        {packs.map((pack) => (
          <article key={pack.name} className={`premium-card card-hover rounded-3xl p-7 ${pack.popular ? "ring-1 ring-[#d4af37]" : ""}`}>
            {pack.popular && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]">Le plus populaire</p>}
            <p className="text-xs uppercase tracking-[0.14em] text-[#888]">{pack.name}</p>
            <h2 className="mt-2 font-display text-4xl">{pack.price}</h2>
            <p className="mt-2 text-sm text-[#bbb]">{pack.subtitle}</p>
            <ul className="mt-6 space-y-2 text-sm text-[#ddd]">
              {pack.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-[#d4af37]">{pack.quote}</p>
            <div className="mt-7">
              <Button href="/contact">Choisir cette offre</Button>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="premium-card card-hover rounded-3xl p-7">
          <h3 className="font-display text-3xl">Add-ons sur devis</h3>
          <p className="mt-3 text-[#aaa]">Besoin de plus ? On construit exactement ce qu&apos;il te faut.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {addons.map((addon) => (
              <div key={addon} className="card-hover rounded-2xl border border-[#2a2a2a] bg-[#0c0c0c] p-4 text-sm text-[#ddd]">
                {addon}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Demander un devis</Button>
            <Link href="/maquette" className="rounded-2xl border border-[#2a2a2a] px-5 py-3 text-sm transition hover:border-[#d4af37]">
              Voir la démo interactive
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="overflow-hidden rounded-3xl border border-[#222]">
          <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop" alt="Projet premium restaurant" width={1800} height={900} className="h-[260px] w-full object-cover md:h-[360px]" />
        </div>
      </section>
    </div>
  );
}
