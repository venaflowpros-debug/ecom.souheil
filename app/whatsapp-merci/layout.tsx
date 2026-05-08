import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci WhatsApp | Souheil Ecom",
  description: "Votre demande WhatsApp a bien été reçue."
};

export default function WhatsAppMerciLayout({ children }: { children: React.ReactNode }) {
  return children;
}
