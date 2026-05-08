import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { WhatsAppModalProvider } from "@/components/WhatsAppModalProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Souheil Ecom | Création de sites premium",
  description: "Souheil Ecom crée des sites sophistiqués avec SEO optimisé pour les commerçants.",
  metadataBase: new URL("http://localhost:3000"),
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
                url: "http://localhost:3000"
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
      </body>
    </html>
  );
}
