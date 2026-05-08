import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-4 section-pad text-center">
      <h1 className="font-display text-6xl">Page introuvable</h1>
      <p className="mt-4 text-[#999]">La page demandée n&apos;existe pas.</p>
      <Link href="/" className="mt-7 inline-block rounded-2xl bg-[#d4af37] px-5 py-3 font-semibold text-black">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
