"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor } from "lucide-react";
import { useState } from "react";

export default function MaquettePage() {
  const [mobile, setMobile] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 section-pad">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#888]">Démo savoir-faire</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">Maquette interactive</h1>
        </div>
        <button onClick={() => setMobile((v) => !v)} className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] px-4 py-2 text-sm hover:border-[#d4af37]" aria-label="Basculer mobile desktop">
          {mobile ? <><Monitor size={16} /> Desktop</> : <><Smartphone size={16} /> Mobile</>}
        </button>
      </div>

      <motion.div layout transition={{ duration: 0.5 }} className={`mx-auto overflow-hidden rounded-[2rem] border border-[#2a2a2a] bg-[#111] shadow-2xl ${mobile ? "max-w-[390px]" : "max-w-5xl"}`}>
        <div className="border-b border-[#232323] p-3 text-xs text-[#888]">Restaurant Le Gourmet</div>
        <div className="space-y-6 p-6">
          <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 p-6 text-white">
            <h2 className="font-display text-3xl">Cuisine raffinée livrée chez vous</h2>
            <p className="mt-2 text-sm">Hero premium, CTA et conversion optimisée.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Menu Signature", "Panier intelligent", "Checkout rapide"].map((i) => <div key={i} className="rounded-xl border border-[#2a2a2a] bg-[#0d0d0d] p-4 text-sm">{i}</div>)}
          </div>
          <p className="text-xs text-[#888]">Maquette réalisée par Souheil Ecom</p>
        </div>
      </motion.div>
      <p className="mt-6 text-center text-sm text-[#888]">Souheil Ecom</p>
    </section>
  );
}
