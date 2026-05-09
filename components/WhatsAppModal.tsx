"use client";

import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import PhoneInput from "react-phone-number-input/input";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { getEmailJsConfig } from "@/lib/emailjsReady";

type Props = {
  open: boolean;
  source: string;
  onClose: () => void;
};

type Lead = {
  prenom: string;
  whatsapp: string;
  typeProjet: string;
  message: string;
};

const initial: Lead = {
  prenom: "",
  whatsapp: "",
  typeProjet: "Site vitrine",
  message: ""
};

export default function WhatsAppModal({ open, source, onClose }: Props) {
  const [form, setForm] = useState<Lead>(initial);
  const [country, setCountry] = useState("FR");
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const sanitizedWhatsapp = useMemo(() => form.whatsapp.replace(/\D/g, ""), [form.whatsapp]);
  const waLink = sanitizedWhatsapp ? `https://wa.me/${sanitizedWhatsapp}` : "";

  const update = <K extends keyof Lead>(key: K, value: Lead[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const finalizeLead = (templateParams: {
    prenom: string;
    whatsapp_number: string;
    type_projet: string;
    message: string;
    date: string;
  }) => {
    if (typeof window !== "undefined") {
      const key = "souheil-ecom-whatsapp-leads";
      const backup = {
        ...templateParams,
        whatsapp_link: waLink,
        source_page: `${source} (${pathname})`
      };
      const raw = localStorage.getItem(key);
      const existing = raw ? (JSON.parse(raw) as typeof backup[]) : [];
      localStorage.setItem(key, JSON.stringify([backup, ...existing]));
    }

    setForm(initial);
    onClose();
    router.push(`/whatsapp-merci?wa=${encodeURIComponent(sanitizedWhatsapp)}`);
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.prenom || !sanitizedWhatsapp) {
      setError("Merci de renseigner le prénom et le numéro WhatsApp.");
      return;
    }

    setLoading(true);
    setError(null);

    const templateParams = {
      prenom: form.prenom.trim(),
      whatsapp_number: form.whatsapp.trim() || sanitizedWhatsapp,
      type_projet: form.typeProjet,
      message: form.message.trim() || "Aucun message",
      date: new Date().toLocaleString("fr-FR")
    };

    const emailConfig = getEmailJsConfig({
      requireTemplate: false,
      templateEnvKey: "NEXT_PUBLIC_EMAILJS_WHATSAPP_TEMPLATE_ID",
      fallbackTemplateId: "template_whatsapp"
    });
    if (!emailConfig) {
      finalizeLead(templateParams);
      setLoading(false);
      return;
    }

    if (emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey) {
      try {
        await emailjs.send(emailConfig.serviceId, emailConfig.templateId, templateParams, emailConfig.publicKey);
      } catch {
        /* EmailJS en échec : on redirige quand même vers WhatsApp */
      }
    }

    finalizeLead(templateParams);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center bg-black/75 p-4">
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-xl rounded-3xl border border-[#d4af37] bg-[#0a0a0a] p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-display text-3xl">Discutons de votre projet sur WhatsApp</h2>
                <p className="mt-1 text-sm text-[#9c9c9c]">Laissez vos coordonnées, je vous recontacte sous 24h</p>
              </div>
              <button
                onClick={onClose}
                type="button"
                aria-label="Fermer"
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#3a3a3a] hover:border-[#d4af37]"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4">
              <input
                required
                value={form.prenom}
                onChange={(event) => update("prenom", event.target.value)}
                placeholder="Prénom"
                className="rounded-2xl border border-[#2a2a2a] bg-[#111] p-3"
              />

              <div className="wa-phone-wrap rounded-2xl border border-[#2a2a2a] bg-[#111] p-3">
                <div className="wa-country-row">
                  <button
                    type="button"
                    className="wa-country-select"
                    onClick={() => setCountryMenuOpen((prev) => !prev)}
                    aria-label="Choisir le pays"
                    aria-expanded={countryMenuOpen}
                  >
                    {country} +{getCountryCallingCode(country as any)}
                  </button>
                  {countryMenuOpen && (
                    <div className="wa-country-list" role="listbox" aria-label="Liste des pays">
                      {getCountries().map((nextCountry) => {
                        const isSelected = nextCountry === country;
                        return (
                          <button
                            key={nextCountry}
                            type="button"
                            className={`wa-country-option ${isSelected ? "is-selected" : ""}`}
                            onClick={() => {
                              setCountry(nextCountry);
                              setCountryMenuOpen(false);
                            }}
                          >
                            <span className="wa-country-name">{nextCountry}</span>
                            <span className="wa-dial-code">+{getCountryCallingCode(nextCountry as any)}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
                <PhoneInput
                  country={country as any}
                  international
                  withCountryCallingCode
                  value={form.whatsapp}
                  onChange={(value) => update("whatsapp", value || "")}
                  className="wa-phone-input text-sm"
                />
              </div>

              <select
                value={form.typeProjet}
                onChange={(event) => update("typeProjet", event.target.value)}
                className="rounded-2xl border border-[#2a2a2a] bg-[#111] p-3"
              >
                <option>Site vitrine</option>
                <option>E-commerce</option>
                <option>Refonte</option>
                <option>Autre</option>
              </select>

              <textarea
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="Message court (optionnel)"
                className="min-h-28 rounded-2xl border border-[#2a2a2a] bg-[#111] p-3"
              />

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                disabled={loading}
                type="submit"
                className="min-h-[44px] rounded-2xl bg-[#d4af37] px-5 py-3 font-semibold text-black transition hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
