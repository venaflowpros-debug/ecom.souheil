"use client";

import dynamic from "next/dynamic";
import { createContext, useContext, useMemo, useState } from "react";

/** Chargé uniquement à l’ouverture du modal : framer-motion, téléphone, EmailJS hors du bundle initial et sans hooks tant que fermé. */
const WhatsAppModal = dynamic(() => import("@/components/WhatsAppModal"), { ssr: false });

type Ctx = {
  openModal: (source: string) => void;
};

const WhatsAppLeadContext = createContext<Ctx | null>(null);

export function WhatsAppModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("site");

  const value = useMemo<Ctx>(() => ({
    openModal: (nextSource: string) => {
      setSource(nextSource);
      setOpen(true);
    }
  }), []);

  return (
    <WhatsAppLeadContext.Provider value={value}>
      {children}
      {open && <WhatsAppModal open={open} source={source} onClose={() => setOpen(false)} />}
    </WhatsAppLeadContext.Provider>
  );
}

export function useWhatsAppLead() {
  const ctx = useContext(WhatsAppLeadContext);
  if (!ctx) {
    throw new Error("useWhatsAppLead must be used within WhatsAppModalProvider");
  }
  return ctx;
}
