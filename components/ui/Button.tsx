"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "ghost" };

export default function Button({ href, children, variant = "primary" }: Props) {
  const styles =
    variant === "primary"
      ? "bg-[#d4af37] text-black hover:bg-[#e5c86a]"
      : "border border-[#2a2a2a] bg-transparent text-[#f5f5f5] hover:border-[#d4af37]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition duration-300 hover:scale-[1.03] glow-hover ${styles}`}
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
