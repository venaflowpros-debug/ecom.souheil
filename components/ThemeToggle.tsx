"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = localStorage.getItem("theme") === "dark" || prefers;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      type="button"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2a2a2a] text-[#f5f5f5] hover:border-[#d4af37]"
      aria-label="Basculer le mode sombre"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
