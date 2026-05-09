export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 section-pad">
      <h1 className="font-display text-5xl md:text-7xl">Mentions légales</h1>
      <div className="mt-8 space-y-4 rounded-3xl border border-[#222] bg-[#111] p-6 text-[#e5e5e5]">
        <p>
          Éditeur du site : <strong>Souheil Ecom</strong>
        </p>
        <p>
          Email :{" "}
          <a
            href="mailto:venaflow.pros@gmail.com"
            className="inline-flex min-h-[44px] items-center text-[#d4af37] hover:text-[#ffd700]"
          >
            venaflow.pros@gmail.com
          </a>
        </p>
        <p>
          Instagram :{" "}
          <a
            href="https://www.instagram.com/ecom.souheil/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center text-[#d4af37] hover:text-[#ffd700]"
          >
            @ecom.souheil
          </a>
        </p>
        <p>Hébergement : OVHcloud (à confirmer selon ton offre active).</p>
      </div>
    </section>
  );
}
