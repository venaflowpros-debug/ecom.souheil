import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Souheil Ecom",
  description: "Découvrez les packs Starter, Business et Premium de Souheil Ecom.",
  openGraph: { title: "Services Souheil Ecom", description: "Offres claires et premium pour commerçants." }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
