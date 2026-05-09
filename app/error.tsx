"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Keep silent in production while providing recovery action.
    void error;
  }, [error]);

  return (
    <div className="mx-auto my-24 max-w-3xl rounded-3xl border border-[#2a2a2a] bg-[#111] p-8 text-center">
      <h2 className="font-display text-4xl">Une erreur est survenue</h2>
      <p className="mt-3 text-[#9c9c9c]">Pas de panique. Vous pouvez réessayer immédiatement.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 min-h-[44px] rounded-2xl bg-[#d4af37] px-5 py-3 font-semibold text-black"
      >
        Réessayer
      </button>
    </div>
  );
}
