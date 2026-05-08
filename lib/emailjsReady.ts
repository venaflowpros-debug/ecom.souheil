export function isEmailJsConfigured(requireTemplate = true): boolean {
  const config = getEmailJsConfig({ requireTemplate });
  if (!config) return false;
  if (requireTemplate && !config.templateId) return false;
  return true;
}

/** Template WhatsApp a une valeur par défaut dans le code ; seuls service + clé publics sont requis. */
export function isEmailJsWhatsAppMinimal(): boolean {
  return Boolean(getEmailJsConfig({ requireTemplate: false }));
}

type EmailJsConfigOptions = {
  requireTemplate?: boolean;
  templateEnvKey?: string;
  fallbackTemplateId?: string;
};

type EmailJsConfig = {
  serviceId: string;
  publicKey: string;
  templateId: string;
};

export function getEmailJsConfig(options: EmailJsConfigOptions = {}): EmailJsConfig | null {
  const { requireTemplate = true, templateEnvKey = "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", fallbackTemplateId = "" } = options;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
  if (!serviceId) return null;

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";
  if (!publicKey) return null;

  const fromEnv = process.env[templateEnvKey]?.trim() ?? "";
  const templateId = fromEnv || fallbackTemplateId;
  if (requireTemplate && !templateId) return null;

  return { serviceId, publicKey, templateId };
}

export const emailJsMissingMessage =
  "Configuration EmailJS absente ou incomplète. Ajoute NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY et NEXT_PUBLIC_EMAILJS_TEMPLATE_ID dans ton fichier .env.local puis redémarre le serveur.";
