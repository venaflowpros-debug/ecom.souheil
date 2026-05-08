"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { emailJsMissingMessage, isEmailJsConfigured } from "@/lib/emailjsReady";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  pages: string;
  features: string[];
  meetingDate: string;
  budget: string;
  message: string;
  rgpd: boolean;
};

const featureOptions = ["Réservation", "E-commerce", "Codes promo", "Espace client", "Autre"];

const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "Pack Starter",
  pages: "1-3",
  features: [],
  meetingDate: "",
  budget: "300-500€",
  message: "",
  rgpd: false
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
  };

  const toggleFeature = (feature: string) => {
    const exists = form.features.includes(feature);
    update("features", exists ? form.features.filter((value) => value !== feature) : [...form.features, feature]);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.rgpd) return;

    if (!isEmailJsConfigured(true)) {
      setError(emailJsMissingMessage);
      setSent(false);
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    setLoading(true);
    setError(null);
    setSent(false);

    const messageWithDetails = [
      form.message.trim(),
      "",
      "--- Détail projet (formulaire Souheil Ecom) ---",
      `Type / pack : ${form.projectType}`,
      `Nombre de pages : ${form.pages}`,
      `Fonctionnalités : ${form.features.join(", ") || "Aucune"}`,
      `Budget : ${form.budget}`,
      `RDV souhaité : ${form.meetingDate || "—"}`,
      `Reçu le : ${new Date().toLocaleString("fr-FR")}`
    ].join("\n");

    const templateParams = {
      name: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || "—",
      company: form.company.trim() || "—",
      message: messageWithDetails
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSent(true);
      setForm(initial);
    } catch {
      setError("Impossible d'envoyer le formulaire pour le moment. Merci de réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-4 section-pad">
      <p className="text-xs uppercase tracking-[0.2em] text-[#888]">Parlons concret</p>
      <h1 className="mt-3 font-display text-5xl md:text-7xl">Décrivons ton projet ensemble</h1>
      <p className="mt-4 text-[#9c9c9c]">Réponse sous 24h. Sans engagement. Sans pression.</p>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
        <a href="mailto:venaflow.pros@gmail.com" className="text-[#f5f5f5] hover:text-[#d4af37]">
          venaflow.pros@gmail.com
        </a>
        <a
          href="https://www.instagram.com/ecom.souheil/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f5f5f5] hover:text-[#d4af37]"
        >
          Instagram @ecom.souheil
        </a>
      </div>

      {sent && <p className="mt-6 rounded-2xl border border-[#2f5f3f] bg-[#112418] p-4 text-[#9be4af]">✅ Nous vous répondons sous 24h.</p>}
      {error && <p className="mt-6 rounded-2xl border border-red-500/30 bg-red-900/20 p-4 text-red-300">{error}</p>}

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-3xl border border-[#222] bg-[#111] p-6 md:grid-cols-2">
        <input required placeholder="Nom" value={form.fullName} onChange={(event) => update("fullName", event.target.value)} className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3" />
        <input required type="email" placeholder="Email" value={form.email} onChange={(event) => update("email", event.target.value)} className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3" />
        <input placeholder="Téléphone" value={form.phone} onChange={(event) => update("phone", event.target.value)} className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3" />
        <input placeholder="Entreprise" value={form.company} onChange={(event) => update("company", event.target.value)} className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3" />
        <select value={form.projectType} onChange={(event) => update("projectType", event.target.value)} className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3"><option>Pack Starter</option><option>Pack Business</option><option>Pack Premium</option><option>Sur-mesure</option><option>Pas encore décidé</option></select>
        <select value={form.pages} onChange={(event) => update("pages", event.target.value)} className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3"><option>1-3</option><option>4-6</option><option>7-10</option><option>10+</option></select>
        <div className="md:col-span-2"><p className="mb-2 text-sm text-[#aaa]">Fonctionnalités souhaitées</p><div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">{featureOptions.map((feature) => (<label key={feature} className="flex items-center gap-2 rounded-xl border border-[#2a2a2a] bg-[#0d0d0d] p-3 text-sm"><input type="checkbox" checked={form.features.includes(feature)} onChange={() => toggleFeature(feature)} />{feature}</label>))}</div></div>
        <input type="date" value={form.meetingDate} onChange={(event) => update("meetingDate", event.target.value)} className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3" />
        <select value={form.budget} onChange={(event) => update("budget", event.target.value)} className="rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3"><option>&lt;300€</option><option>300-500€</option><option>500€+</option></select>
        <textarea required value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Message" className="min-h-36 rounded-2xl border border-[#2a2a2a] bg-[#0d0d0d] p-3 md:col-span-2" />
        <label className="flex items-center gap-2 text-sm text-[#bbb] md:col-span-2"><input type="checkbox" checked={form.rgpd} onChange={(event) => update("rgpd", event.target.checked)} />J&apos;accepte le traitement de mes données (RGPD)</label>
        <button disabled={loading} className="rounded-2xl bg-[#d4af37] px-6 py-3 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-50 md:col-span-2">{loading ? "Envoi..." : "Démarrer mon projet"}</button>
      </form>
    </section>
  );
}
