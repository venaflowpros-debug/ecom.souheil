import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Souheil Ecom",
  description: "Décrivez votre projet web et recevez une réponse sous 24h.",
  openGraph: { title: "Contact Souheil Ecom", description: "Parlons de votre projet." }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
