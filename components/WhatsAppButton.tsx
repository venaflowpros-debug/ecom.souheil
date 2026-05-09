"use client";

import { MessageCircle } from "lucide-react";
import { useWhatsAppLead } from "@/components/WhatsAppModalProvider";

type Props = {
  source: string;
  label?: string;
  className?: string;
};

export default function WhatsAppButton({ source, label = "WhatsApp", className = "" }: Props) {
  const { openModal } = useWhatsAppLead();

  return (
    <button
      onClick={() => openModal(source)}
      className={`inline-flex min-h-[44px] items-center gap-2 rounded-2xl bg-[#25d366] px-4 py-3 text-sm font-semibold text-black transition hover:scale-105 ${className}`}
      aria-label="Ouvrir WhatsApp"
      type="button"
    >
      <MessageCircle size={16} />
      {label}
    </button>
  );
}
