import type { MetadataRoute } from "next";

const BASE_URL = "https://ecom-souheil.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/realisations", "/maquette", "/avis", "/contact"].map((path) => ({
    url: path ? `${BASE_URL}${path}` : `${BASE_URL}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
