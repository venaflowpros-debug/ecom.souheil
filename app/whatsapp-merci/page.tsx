"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const DEFAULT_WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "33600000000";

export default function WhatsAppMerciPage() {
  const [whatsappUrl, setWhatsappUrl] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromLead = params.get("wa");
    const number = fromLead || DEFAULT_WA;
    const text = encodeURIComponent("Bonjour Souheil, j'ai laissé mes coordonnées sur votre site");
    setWhatsappUrl(`https://wa.me/${number}?text=${text}`);
  }, []);

  useEffect(() => {
    if (!whatsappUrl) return;
    const timer = setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1200);
    return () => clearTimeout(timer);
  }, [whatsappUrl]);

  return (
    <section className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-[#0a0a0a] px-4 py-16 text-center">
      <div className="w-full max-w-3xl rounded-3xl border border-[#222] bg-[#111] p-8">
        <p className="font-display text-2xl text-[#f5f5f5]">Souheil Ecom</p>
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-4xl text-white"
        >
          ✓
        </motion.div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl">Message bien reçu ✓</h1>
        <p className="mx-auto mt-4 max-w-xl text-[#aaa]">Souheil va vous recontacter sur WhatsApp dans les prochaines heures.</p>
        <p className="mt-6 text-sm text-[#888]">En attendant, vous pouvez aussi m&apos;écrire directement.</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl || "#"}
            className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-[#d4af37] px-6 py-3 font-semibold text-black transition hover:scale-[1.03]"
          >
            Ouvrir WhatsApp maintenant
          </a>
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-[#2a2a2a] px-6 py-3 text-sm text-[#f5f5f5] transition hover:border-[#d4af37]"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
