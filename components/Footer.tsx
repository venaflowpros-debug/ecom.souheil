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
        <div className="space-y-2 text-sm text-[#f5f5f5]">
          <p className="font-semibold">Liens rapides</p>
          <Link href="/">Accueil</Link><br />
          <Link href="/services">Services</Link><br />
          <Link href="/realisations">Réalisations</Link><br />
          <Link href="/maquette">Démo</Link><br />
          <Link href="/avis">Avis</Link><br />
          <Link href="/contact">Contact</Link><br />
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>
        <div className="text-sm text-[#f5f5f5]">
          <p className="font-semibold">Contact</p>
          <a href="mailto:venaflow.pros@gmail.com" className="mt-2 inline-block transition hover:text-[#d4af37]">
            venaflow.pros@gmail.com
          </a>
          <a
            href="https://www.instagram.com/ecom.souheil/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 transition hover:text-[#d4af37]"
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
