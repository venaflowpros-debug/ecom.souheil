import type { MetadataRoute } from "next";
import { getSiteBaseUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteBaseUrl().origin;
  return ["", "/services", "/realisations", "/maquette", "/avis", "/contact", "/whatsapp-merci"].map((path) => ({
    url: path ? `${base}${path}` : `${base}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
