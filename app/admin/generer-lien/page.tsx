"use client";

import { useState } from "react";

export default function GenererLienPage() {
  const [clientName, setClientName] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const generate = () => {
    const clean = clientName.trim().toLowerCase().replace(/\s+/g, "-");
    if (!clean) return;
    const token = btoa(`${clean}-${Date.now()}`);
    setGeneratedLink(`http://localhost:3000/avis?token=${encodeURIComponent(token)}`);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 section-pad">
      <p className="text-xs uppercase tracking-[0.2em] text-[#888]">Admin privé</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Générer un lien d&apos;avis</h1>
      <p className="mt-4 text-[#aaa]">
        Générez un lien unique client à envoyer après paiement (WhatsApp ou email).
      </p>

      <div className="mt-8 rounded-3xl border border-[#222] bg-[#111] p-6">
        <label htmlFor="client-name" className="mb-2 block text-sm text-[#ddd]">
          Nom du client
        </label>
        <input
          id="client-name"
          value={clientName}
          onChange={(event) => setClientName(event.target.value)}
          placeholder="Ex: Karim B"
          className="w-full rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3"
        />
        <button
          type="button"
          onClick={generate}
          className="mt-4 min-h-[44px] rounded-2xl bg-[#d4af37] px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
        >
          Générer le lien
        </button>

        {generatedLink && (
          <div className="mt-6 rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-4">
            <p className="text-sm text-[#aaa]">Lien privé à copier :</p>
            <p className="mt-2 break-all text-sm text-[#f5f5f5]">{generatedLink}</p>
          </div>
        )}
      </div>
    </section>
  );
}
