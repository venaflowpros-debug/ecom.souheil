export function isEmailJsConfigured(requireTemplate = true): boolean {
  const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
  const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();
  const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
  if (!service || !key) return false;
  if (requireTemplate && !template) return false;
  return true;
}

/** Template WhatsApp a une valeur par défaut dans le code ; seuls service + clé publics sont requis. */
export function isEmailJsWhatsAppMinimal(): boolean {
  const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim();
  const key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();
  return Boolean(service && key);
}

export const emailJsMissingMessage =
  "Configuration EmailJS absente ou incomplète. Ajoute NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY et NEXT_PUBLIC_EMAILJS_TEMPLATE_ID dans ton fichier .env.local puis redémarre le serveur.";
