import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Réalisations | Souheil Ecom",
  description: "Portfolio Souheil Ecom pour e-commerce, immobilier et conciergerie.",
  openGraph: { title: "Réalisations Souheil Ecom", description: "Cas clients orientés résultats." }
};

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
