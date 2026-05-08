import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://souheil-ecom.vercel.app";
  return ["", "/services", "/realisations", "/maquette", "/avis", "/contact", "/whatsapp-merci"].map((path) => ({
    url: path ? `${base}${path}/` : base,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
