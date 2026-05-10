import { NextResponse } from "next/server";

const BASE_URL = "https://ecom-souheil.vercel.app";

const ENTRIES: { path: string; priority: string }[] = [
  { path: "", priority: "1" },
  { path: "/services", priority: "0.8" },
  { path: "/realisations", priority: "0.8" },
  { path: "/maquette", priority: "0.8" },
  { path: "/avis", priority: "0.8" },
  { path: "/contact", priority: "0.8" }
];

function xmlEscape(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function GET(): NextResponse {
  const lastmod = new Date().toISOString();
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...ENTRIES.map(({ path, priority }) => {
      const loc = path ? `${BASE_URL}${path}` : `${BASE_URL}/`;
      return [
        "  <url>",
        `    <loc>${xmlEscape(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>"
      ].join("\n");
    }),
    "</urlset>"
  ].join("\n");

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}
