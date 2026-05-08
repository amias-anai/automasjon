"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type ProductDropdownProps = {
  links: readonly (readonly [string, string])[];
  className?: string;
};

export function ProductDropdown({ links, className = "" }: ProductDropdownProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (menuRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={menuRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        className="flex cursor-pointer items-center gap-1.5 transition hover:text-[#c95720]"
        onClick={() => setOpen((value) => !value)}
      >
        Bruksområder
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div
          id={menuId}
          className="absolute left-0 top-full z-[80] mt-3 w-[min(20rem,calc(100vw-3rem))] rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-2 text-[#173348] shadow-[0_22px_60px_rgba(15,45,66,0.16)] md:left-1/2 md:mt-4 md:-translate-x-1/2"
        >
          <Link
            href="/#tjenester"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#c95720] transition hover:bg-white/70"
          >
            Alle bruksområder
          </Link>
          <div className="my-1 h-px bg-[#dfd0c2]" />
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-semibold transition hover:bg-white/70 hover:text-[#c95720]"
            >
              {label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
