import Link from "next/link";

export default function FourZeroFourPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 section-pad text-center">
      <p className="font-display text-7xl text-[#d4af37]">404</p>
      <h1 className="mt-4 font-display text-5xl md:text-6xl">Page introuvable</h1>
      <p className="mt-4 text-[#cfcfcf]">La page demandée n&apos;existe pas ou a été déplacée.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-2xl bg-[#d4af37] px-5 py-3 font-semibold text-black transition hover:scale-[1.02]"
      >
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
