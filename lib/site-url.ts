/** URL de base du site (canonical, Open Graph, sitemap). Tolère les erreurs de config en prod. */
export function getSiteBaseUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    try {
      return new URL(withProtocol);
    } catch {
      // continue
    }
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    try {
      return new URL(`https://${vercel}`);
    } catch {
      // continue
    }
  }
  return new URL("http://localhost:3000");
}
