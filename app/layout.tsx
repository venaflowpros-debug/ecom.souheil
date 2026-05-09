import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WhatsAppModalProvider } from "@/components/WhatsAppModalProvider";
import { getSiteBaseUrl } from "@/lib/site-url";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const metadataBase = getSiteBaseUrl();
const siteOrigin = metadataBase.origin;

export const metadata: Metadata = {
  title: "Souheil Ecom | Création de sites premium",
  description: "Souheil Ecom crée des sites sophistiqués avec SEO optimisé pour les commerçants.",
  metadataBase,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Souheil Ecom",
    description: "Sites premium, SEO optimisé, conversion réelle.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Souheil Ecom",
    description: "Sites premium, SEO optimisé, conversion réelle."
  },
  verification: {
    google: "nGgfugJUSfvrOyj6fieBq3gYGffZXj2V3s6v51E67K4"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <WhatsAppModalProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Souheil Ecom",
                email: "venaflow.pros@gmail.com",
                sameAs: ["https://www.instagram.com/ecom.souheil/"],
                url: siteOrigin
              })
            }}
          />
          <ScrollProgress />
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </WhatsAppModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
