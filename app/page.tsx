"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ReviewsSection from "@/components/ReviewsSection";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/SafeImage";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.floor(end / 30));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setValue(end);
        clearInterval(timer);
        return;
      }
      setValue(current);
    }, 35);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function Home() {
  const packs = useMemo(
    () => [
      { name: "Starter", price: "199€", desc: "3 pages. Rapide. Pro." },
      { name: "Business", price: "349€", desc: "Le pack qui convertit." },
      { name: "Premium", price: "499€", desc: "Tout inclus. Zéro limite." }
    ],
    []
  );
  const features = useMemo(
    () => [
      "Système de réservation",
      "Commandes en ligne",
      "Bons d'achat & codes promo",
      "Programme fidélité",
      "Paiement en ligne",
      "Newsletter automatisée"
    ],
    []
  );
  const personas = useMemo(
    () => [
      "Restaurants & food",
      "Commerçants locaux",
      "Artisans",
      "Services (coiffure, beauté, sport)",
      "TPE/PME"
    ],
    []
  );

  return (
    <div className="noise-bg">
      <section className="mx-auto grid max-w-7xl items-end gap-10 px-4 section-pad lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="inline-block rounded-full border border-[#2a2a2a] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#9b9b9b]">
            Ton partenaire web qui transforme tes visiteurs en clients
          </p>
          <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl xl:text-8xl">
            Des sites web qui font <span className="text-[#d4af37]">vendre</span>. Pas juste{" "}
            <span className="text-[#d4af37]">exister</span>.
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-[#b0b0b0]">
            Pas une agence anonyme. Pas du template recyclé. Souheil Ecom : sites sur-mesure, SEO
            optimisé, +20% de CA pour nos clients.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services">Voir les offres</Button>
            <Button href="/contact" variant="ghost">
              Démarrer mon projet
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#888]">
            <span>Boulangerie Artisanale</span>
            <span>•</span>
            <span>Garage Auto Pro</span>
            <span>•</span>
            <span>agences immo</span>
            <span>•</span>
            <span>conciergeries</span>
            <span>•</span>
            <span>locations saisonnières</span>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-[#222]"
        >
          <SafeImage
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop"
            alt="Vitrine premium commerçant"
            width={1600}
            height={1200}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="h-[460px] w-full object-cover"
            priority={true}
          />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="premium-card card-hover rounded-2xl p-6">
            <p className="text-sm text-[#888]">Sites livrés</p>
            <p className="mt-2 text-3xl font-semibold">
              <Counter end={50} suffix="+" />
            </p>
          </div>
          <div className="premium-card card-hover rounded-2xl p-6">
            <p className="text-sm text-[#888]">CA moyen</p>
            <p className="mt-2 text-3xl font-semibold">
              <Counter end={20} suffix="%" />
            </p>
          </div>
          <div className="premium-card card-hover rounded-2xl p-6">
            <p className="text-sm text-[#888]">Satisfaction</p>
            <p className="mt-2 text-3xl font-semibold">
              <Counter end={100} suffix="%" />
            </p>
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <h2 className="font-display text-4xl md:text-6xl">
            Pourquoi 80% des commerçants n&apos;ont aucun client via leur site
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Site moche = perte de confiance",
              "Pas de SEO = invisible sur Google",
              "Pas de conversion = visiteurs qui partent"
            ].map((item) => (
              <div key={item} className="premium-card card-hover rounded-2xl p-6 text-[#ddd]">
                {item}
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="font-display text-4xl md:text-6xl">La solution : Souheil Ecom</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Design premium", "sites qui inspirent confiance"],
            ["SEO optimisé", "visible sur Google"],
            ["Conversion", "pensé pour vendre"],
            ["Tout inclus", "hébergement, domaine, support"]
          ].map(([title, text]) => (
            <div key={title} className="premium-card card-hover rounded-2xl p-6">
              <p className="text-lg font-semibold text-[#f5f5f5]">{title}</p>
              <p className="mt-2 text-sm text-[#9a9a9a]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <AnimateOnScroll>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <h2 className="font-display text-4xl md:text-6xl">Pour qui on travaille</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {personas.map((item) => (
              <span key={item} className="rounded-full border border-[#2a2a2a] px-4 py-2 text-sm text-[#ddd]">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="premium-card card-hover rounded-2xl p-6">
              <p className="text-2xl">🏠</p>
              <h3 className="mt-3 text-xl font-semibold text-[#f5f5f5]">Agents & Agences Immobilières</h3>
              <p className="mt-3 text-sm text-[#ddd]">
                Vous générez des leads mais votre taux de conversion stagne ? On optimise vos pages
                et tunnels pour transformer plus de visiteurs en mandats signés.
              </p>
            </article>
            <article className="premium-card card-hover rounded-2xl p-6">
              <p className="text-2xl">🗝️</p>
              <h3 className="mt-3 text-xl font-semibold text-[#f5f5f5]">
                Conciergeries & Locations Saisonnières
              </h3>
              <p className="mt-3 text-sm text-[#ddd]">
                Airbnb, locations courte durée, gestion locative : on booste votre visibilité et vos
                réservations directes grâce à des pages qui convertissent vraiment.
              </p>
            </article>
          </div>
        </section>
      </AnimateOnScroll>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-4xl md:text-6xl">Réalisations</h2>
          <Link
            href="/realisations"
            className="inline-flex min-h-[44px] items-center text-sm text-[#d4af37]"
          >
            Voir toutes les réalisations
          </Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-3xl border border-[#222]">
            <SafeImage
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1800&auto=format&fit=crop"
              alt="Projet e-commerce premium"
              width={1800}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 65vw"
              loading="lazy"
              className="h-[380px] w-full object-cover"
            />
            <div className="p-5">
              <p className="text-2xl font-semibold">Projet E-commerce Premium</p>
              <p className="text-sm text-[#9d9d9d]">Cas client phare orienté conversion locale.</p>
            </div>
          </div>
          <div className="grid gap-4">
            {["Boulangerie Artisanale", "Garage Auto Pro", "Institut beauté"].map((item) => (
              <div key={item} className="premium-card card-hover rounded-2xl p-5">
                <p className="font-semibold">{item}</p>
                <p className="mt-1 text-xs text-[#8f8f8f]">Refonte premium + SEO</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-4xl md:text-6xl">Avis clients</h2>
            <Link
              href="/avis?token=test123"
              className="inline-flex min-h-[44px] items-center text-sm text-[#d4af37]"
            >
              Laisser un avis (lien privé)
            </Link>
          </div>
          <ReviewsSection />
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <h2 className="font-display text-4xl md:text-6xl">Offres</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {packs.map((pack) => (
              <div key={pack.name} className="premium-card card-hover rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.12em] text-[#888]">{pack.name}</p>
                <p className="mt-2 font-display text-4xl">{pack.price}</p>
                <p className="mt-2 text-sm text-[#aaa]">{pack.desc}</p>
                <div className="mt-5">
                  <Button href="/contact">Choisir cette offre</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateOnScroll>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="font-display text-4xl md:text-6xl">On peut tout intégrer</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <div key={item} className="premium-card card-hover rounded-2xl p-5 text-sm text-[#ddd]">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/contact">Une idée ? On la code.</Button>
        </div>
      </section>

      <AnimateOnScroll>
        <section className="mx-auto max-w-7xl px-4 pb-24 text-center">
          <h2 className="font-display text-5xl md:text-7xl">Prêt à passer à l&apos;échelle ?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#a6a6a6]">
            Un site qui attire. Un site qui convertit. Un site qui te ressemble.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Démarrer mon projet</Button>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}
