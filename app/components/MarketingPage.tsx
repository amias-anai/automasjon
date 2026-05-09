import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { productList } from "../product-content";
import { LeadForm } from "./LeadForm";
import { ProductDropdown } from "./ProductDropdown";

export const contactEmail = "system@anai.no";
export const contactPhone = "+47 41 40 97 53";
export const bookingUrl = "https://cal.eu/anai-no/30min";

const navLinks = [
  ["Eksempler", "/eksempler-pa-arbeidsflyter"],
  ["Slik fungerer det", "/slik-fungerer-det"],
  ["AI-kartlegging", "/ai-kartlegging"],
  ["Om ANAi", "/om-anai"],
  ["Kontakt", "/kontakt"],
];

const productLinks = productList.map((product) => [product.navTitle, `/${product.slug}`] as const);

const footerGroups = [
  {
    title: "Bruksområder",
    links: productLinks,
  },
  {
    title: "Selskap",
    links: [
      ["Slik fungerer det", "/slik-fungerer-det"],
      ["Om ANAi", "/om-anai"],
      ["AI-kartlegging", "/ai-kartlegging"],
      ["Kontakt", "/kontakt"],
      ["Personvern", "/personvern"],
    ],
  },
];

function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src="/landing/anai-logo.png"
      alt="ANAi"
      width={176}
      height={58}
      className="h-12 w-auto object-contain"
      priority={priority}
    />
  );
}

function NorwegianFlag() {
  return (
    <span className="relative inline-block h-3.5 w-5 overflow-hidden rounded-[2px] bg-[#ef2b2d] shadow-sm ring-1 ring-black/10">
      <span className="absolute inset-y-0 left-[5px] w-[5px] bg-white" />
      <span className="absolute inset-x-0 top-[4px] h-[5px] bg-white" />
      <span className="absolute inset-y-0 left-[6px] w-[3px] bg-[#00205b]" />
      <span className="absolute inset-x-0 top-[5px] h-[3px] bg-[#00205b]" />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-[#dfd0c2] bg-[#f7f1ea]/92 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="ANAi forside">
            <Logo priority />
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#173348] lg:gap-8 md:flex">
            <ProductDropdown links={productLinks} />
            {navLinks.map(([label, href]) => (
              <Link key={label} href={href} className="transition hover:text-[#c95720]">
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="/book-gratis-ai-kartlegging"
            className="hidden h-11 items-center justify-center rounded-md bg-[#c95720] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(201,87,32,0.22)] transition hover:bg-[#b74a18] sm:inline-flex"
          >
            Book kartlegging
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-[#173348] md:hidden">
          <ProductDropdown links={productLinks} />
          {navLinks.map(([label, href]) => (
            <Link key={label} href={href} className="transition hover:text-[#c95720]">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto grid max-w-7xl gap-9 px-6 pb-10 pt-12 text-sm text-[#24465a] lg:grid-cols-[1.5fr_1fr_1fr_1.1fr] lg:px-10">
      <div>
        <Logo />
        <p className="mt-3 max-w-sm">
          Praktiske AI-løsninger for norske bedrifter som vil spare tid,
          forbedre arbeidsflyten og beholde mennesker i kontroll.
        </p>
        <div className="mt-6 flex items-center gap-2 text-xs font-semibold">
          Utviklet i Norge
          <NorwegianFlag />
        </div>
        <p className="mt-3 text-xs">Grunnlegger: Amias Nasser Aspenes</p>
        <p className="mt-1 text-xs">Basert i Bergen, Norge</p>
        <p className="mt-1 text-xs">Org.nr: ikke registrert ennå</p>
        <p className="mt-6 text-xs">© 2026 ANAi. Alle rettigheter reservert.</p>
      </div>
      {footerGroups.map((group) => (
        <div key={group.title}>
          <h3 className="font-bold text-[#0f2d42]">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.links.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="transition hover:text-[#c95720]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h3 className="font-bold text-[#0f2d42]">Kontakt</h3>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4" />
            {contactPhone}
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4" />
            {contactEmail}
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="h-4 w-4" />
            Bergen, Norge
          </li>
        </ul>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image = "/landing/hero-ai-kartlegging-checklist.svg",
  imageAlt = "",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#dfd0c2]">
      <Image src={image} alt={imageAlt} fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,234,0.98),rgba(247,241,234,0.84)_46%,rgba(247,241,234,0.24)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-sm font-bold text-[#c95720]">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] text-[#0b3048] sm:text-6xl sm:leading-[0.98] lg:text-[5.2rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#24465a]">{intro}</p>
      </div>
    </section>
  );
}

export function ContactForm({
  title = "Fortell kort hva dere vil se på",
  source,
}: {
  title?: string;
  source?: "contact" | "booking";
}) {
  return (
    <LeadForm
      title={title}
      source={source ?? (title.toLowerCase().includes("book") ? "booking" : "contact")}
    />
  );
}

export function BookingEmbed() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] shadow-[0_18px_50px_rgba(15,45,66,0.08)]">
      <div className="border-b border-[#dfd0c2] px-6 py-5">
        <p className="text-sm font-bold text-[#c95720]">Direkte booking</p>
        <h2 className="mt-1 font-display text-3xl text-[#0b3048]">Velg tidspunkt i kalenderen</h2>
      </div>
      <iframe
        title="Book gratis AI-kartlegging hos ANAi"
        src={bookingUrl}
        className="h-[720px] w-full bg-white"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="relative overflow-hidden rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-8 shadow-[0_18px_50px_rgba(15,45,66,0.08)] md:p-12">
        <Image src="/landing/frontpage-ai-kartlegging-checklist.png" alt="" fill className="object-cover opacity-70" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,246,240,0.96),rgba(251,246,240,0.82)_48%,rgba(251,246,240,0.18))]" />
        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl text-[#0b3048] md:text-5xl">
              Hvor kan AI spare mest tid hos dere?
            </h2>
            <p className="mt-4 text-base leading-7 text-[#24465a]">
              Book en gratis AI-kartlegging, så finner vi en konkret arbeidsflyt hvor AI kan gi
              praktisk verdi med kontroll, godkjenning og tydelige rammer.
            </p>
          </div>
          <Link
            href={bookingUrl}
            className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.28)] transition hover:bg-[#b74a18]"
          >
            <CalendarDays className="h-5 w-5" />
            Book gratis AI-kartlegging
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MarketingPage({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#0f2d42]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </main>
  );
}

export function SafetyNote() {
  return (
    <div className="rounded-lg border border-[#dfd0c2] bg-[#0f2d42] p-6 text-white">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#e8a05c]">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-bold">Kontrollert og personvernbevisst</h3>
          <p className="mt-2 text-sm leading-7 text-white/76">
            Vi starter med lavrisiko arbeidsflyter, begrenser tilganger til det som trengs og
            legger inn menneskelig godkjenning før kundeutsendelser, tilbud, sletting,
            økonomiske eller juridiske handlinger.
          </p>
        </div>
      </div>
    </div>
  );
}
