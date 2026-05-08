"use client";

import { useEffect, useState } from "react";
import { getReviews, type Review } from "@/lib/reviews";

const defaultReviews: Review[] = [
  {
    id: "default-1",
    prenom: "Karim",
    metier: "E-commerçant / Dropshipping",
    note: 5,
    temoignage:
      "En 3 semaines mon taux de conversion est passé de 1,2% à 3,8%. Le tunnel de vente est clean, rapide, et ça convertit vraiment. Je recommande sans hésiter.",
    date: "12/05/2025"
  },
  {
    id: "default-2",
    prenom: "Inès",
    metier: "Gérante conciergerie Airbnb",
    note: 5,
    temoignage:
      "J'avais une page basique qui ne convertissait pas. Maintenant j'ai une vraie landing page pro et mes réservations directes ont explosé. Fini les commissions Airbnb à répétition.",
    date: "28/05/2025"
  },
  {
    id: "default-3",
    prenom: "Mehdi",
    metier: "Agent immobilier indépendant",
    note: 5,
    temoignage:
      "Le tunnel de capture de leads qu'ils m'ont fait est top. Je reçois des mandats qualifiés chaque semaine maintenant. ROI atteint en moins d'un mois.",
    date: "03/06/2025"
  }
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(getReviews().slice().reverse());
  }, []);

  const visibleReviews = reviews.length ? reviews : defaultReviews;

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {visibleReviews.map((review) => (
        <article key={review.id} className="premium-card card-hover rounded-2xl p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#f5f5f5]">{review.prenom}</p>
              <p className="text-xs text-[#aaaaaa]">{review.metier}</p>
            </div>
            <p className="text-sm text-[#d4af37]">
              {"★".repeat(review.note)}
              {"☆".repeat(Math.max(0, 5 - review.note))}
            </p>
          </div>
          <p className="mt-4 text-sm italic leading-relaxed text-[#e2e2e2]">
            &quot;{review.temoignage}&quot;
          </p>
          <p className="mt-4 text-xs text-[#8a8a8a]">{review.date}</p>
        </article>
      ))}
    </div>
  );
}
