import Link from "next/link";
import { AtSign } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#222] bg-[#0a0a0a] py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-[#f5f5f5]">Souheil Ecom</p>
          <p className="mt-3 text-sm text-[#888]">Pas du template recyclé. Juste des sites qui vendent.</p>
          <div className="mt-5"><WhatsAppButton source="footer" label="Parler sur WhatsApp" /></div>
        </div>
        <div className="space-y-0 text-sm text-[#f5f5f5]">
          <p className="mb-2 font-semibold">Liens rapides</p>
          <Link href="/" className="block min-h-[44px] py-3 leading-none">
            Accueil
          </Link>
          <Link href="/services" className="block min-h-[44px] py-3 leading-none">
            Services
          </Link>
          <Link href="/realisations" className="block min-h-[44px] py-3 leading-none">
            Réalisations
          </Link>
          <Link href="/maquette" className="block min-h-[44px] py-3 leading-none">
            Démo
          </Link>
          <Link href="/avis" className="block min-h-[44px] py-3 leading-none">
            Avis
          </Link>
          <Link href="/contact" className="block min-h-[44px] py-3 leading-none">
            Contact
          </Link>
          <Link href="/mentions-legales" className="block min-h-[44px] py-3 leading-none">
            Mentions légales
          </Link>
        </div>
        <div className="text-sm text-[#f5f5f5]">
          <p className="font-semibold">Contact</p>
          <a
            href="mailto:venaflow.pros@gmail.com"
            className="mt-2 inline-flex min-h-[44px] items-center transition hover:text-[#d4af37]"
          >
            venaflow.pros@gmail.com
          </a>
          <a
            href="https://www.instagram.com/ecom.souheil/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex min-h-[44px] items-center gap-2 transition hover:text-[#d4af37]"
          >
            <AtSign size={16} />
            @ecom.souheil
          </a>
          <p className="mt-6 text-[#888]">© 2025 Souheil Ecom - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}
