"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";
import { saveReview } from "@/lib/reviews";
import { emailJsMissingMessage, getEmailJsConfig } from "@/lib/emailjsReady";

type ReviewForm = {
  firstname: string;
  sector: string;
  rating: number;
  message: string;
};

const initial: ReviewForm = {
  firstname: "",
  sector: "",
  rating: 0,
  message: ""
};

function AvisPageContent() {
  const params = useSearchParams();
  const token = params.get("token");
  const isTokenValid = useMemo(() => Boolean(token && token.trim().length > 0), [token]);
  const [form, setForm] = useState<ReviewForm>(initial);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentName, setSentName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof ReviewForm>(key: K, value: ReviewForm[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.firstname || !form.sector || !form.rating || !form.message) {
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }
    if (form.message.length > 300) {
      setError("Le témoignage doit contenir 300 caractères maximum.");
      return;
    }

    const emailConfig = getEmailJsConfig({ requireTemplate: true });
    if (!emailConfig) {
      setError(emailJsMissingMessage);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          to_email: "venaflow.pros@gmail.com",
          from_name: form.firstname,
          from_email: "avis-client@souheilecom.local",
          message: `Nouvel avis de ${form.firstname} - ${form.rating}/5 : ${form.message}\nMétier/Secteur: ${form.sector}\nToken: ${token}`
        },
        emailConfig.publicKey
      );
      saveReview({
        prenom: form.firstname,
        metier: form.sector,
        note: form.rating,
        temoignage: form.message
      });
      setSentName(form.firstname);
      setSent(true);
      setForm(initial);
    } catch {
      setError("Impossible d'envoyer l'avis pour le moment. Réessaie plus tard.");
    } finally {
      setLoading(false);
    }
  };

  if (!isTokenValid) {
    return (
      <section className="mx-auto max-w-3xl px-4 section-pad text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#888]">Avis client</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">Lien invalide ou expiré</h1>
        <p className="mt-4 text-[#bbb]">
          Ce formulaire d&apos;avis est privé. Merci d&apos;utiliser le lien unique reçu après votre paiement.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-[#d4af37] px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
        >
          Retour à l&apos;accueil
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-4xl px-4 section-pad">
      <p className="text-xs uppercase tracking-[0.2em] text-[#888]">Avis client privé</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Laisser votre témoignage</h1>
      <p className="mt-4 text-[#aaa]">Merci pour votre confiance. Votre avis aide à améliorer le service.</p>

      {sent && (
        <p className="mt-6 rounded-2xl border border-[#2f5f3f] bg-[#112418] p-4 text-[#9be4af]">
          Merci {sentName} ! Votre avis est en ligne.
        </p>
      )}
      {error && <p className="mt-6 rounded-2xl border border-red-500/30 bg-red-900/20 p-4 text-red-300">{error}</p>}

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-3xl border border-[#222] bg-[#111] p-6">
        <input
          required
          placeholder="Prénom"
          value={form.firstname}
          onChange={(event) => update("firstname", event.target.value)}
          className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3"
        />
        <input
          required
          placeholder="Métier / Secteur"
          value={form.sector}
          onChange={(event) => update("sector", event.target.value)}
          className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3"
        />
        <div>
          <p className="mb-2 text-sm text-[#ddd]">Note *</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => update("rating", star)}
                className={`text-2xl transition ${form.rating >= star ? "text-[#d4af37]" : "text-[#555]"}`}
                aria-label={`Attribuer la note ${star}`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
        <textarea
          required
          maxLength={300}
          placeholder="Votre témoignage (300 caractères max)"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="min-h-36 rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3"
        />
        <button
          disabled={loading}
          className="rounded-2xl bg-[#d4af37] px-6 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-50"
        >
          {loading ? "Envoi..." : "Envoyer mon avis"}
        </button>
      </form>
    </section>
  );
}

export default function AvisPage() {
  return (
    <Suspense fallback={<section className="mx-auto max-w-4xl px-4 section-pad text-center">Chargement...</section>}>
      <AvisPageContent />
    </Suspense>
  );
}
