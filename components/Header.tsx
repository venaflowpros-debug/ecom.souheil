import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Button";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const items = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/maquette", label: "Démo" },
    { href: "/avis", label: "Avis" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#222] bg-[#0a0a0a]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-display text-2xl font-bold text-[#f5f5f5]">
          Souheil Ecom
        </Link>
        <nav className="hidden gap-5 md:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#f5f5f5] transition hover:text-[#d4af37]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden xl:block"><WhatsAppButton source="header" label="WhatsApp" /></div>
          <div className="hidden lg:block"><Button href="/contact">Démarrer mon projet</Button></div>
        </div>
      </div>
    </header>
  );
}
