import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Avis clients | Souheil Ecom",
  description: "Retours clients et témoignages sur les projets web Souheil Ecom.",
  openGraph: { title: "Avis clients", description: "Ils parlent de nos résultats." }
};

export default function AvisLayout({ children }: { children: React.ReactNode }) {
  return children;
}
