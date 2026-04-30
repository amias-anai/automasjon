"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, FileText, ReceiptText, SearchCheck } from "lucide-react";

const navItems = [
  { href: "/", label: "Project Admin Worker", icon: Bot, available: true },
  {
    href: "/invoice-automation",
    label: "Invoice Automation",
    icon: ReceiptText,
    available: true,
  },
  {
    href: "/tender-agent",
    label: "Tender Watch Agent",
    icon: SearchCheck,
    available: false,
  },
];

export function DemoNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm">
            <FileText className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold leading-5 text-slate-950">
              ANAi demo suite
            </span>
            <span className="block truncate text-xs leading-5 text-slate-500">
              Fiktive salgsdemoer for bygg og anlegg
            </span>
          </span>
        </Link>

        <nav className="flex gap-2 overflow-x-auto pb-1 lg:pb-0" aria-label="Demo navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (!item.available) {
              return (
                <span
                  key={item.href}
                  className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-slate-400"
                  aria-disabled="true"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                  <span className="text-xs font-medium">senere</span>
                </span>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-slate-950 bg-slate-950 px-4 text-sm font-semibold text-white shadow-sm"
                    : "inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                }
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

