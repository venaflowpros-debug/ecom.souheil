import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maquette interactive | Souheil Ecom",
  description: "Découvrez la démo mobile/desktop de notre savoir-faire e-commerce.",
  openGraph: { title: "Maquette interactive", description: "Démo premium réalisée par Souheil Ecom." }
};

export default function MaquetteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
