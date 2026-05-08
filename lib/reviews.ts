export type Review = {
  id: string;
  prenom: string;
  metier: string;
  note: number;
  temoignage: string;
  date: string;
};

const STORAGE_KEY = "venaflow_reviews";

// Sauvegarde un avis
export function saveReview(review: Omit<Review, "id" | "date">): Review {
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    date: new Date().toLocaleDateString("fr-FR")
  };
  const existing = getReviews();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, newReview]));
  return newReview;
}

// Récupère tous les avis
export function getReviews(): Review[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as Review[];
  } catch {
    return [];
  }
}
