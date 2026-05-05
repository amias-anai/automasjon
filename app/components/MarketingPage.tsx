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

export const contactEmail = "system@anai.no";
export const contactPhone = "+47 41 40 97 53";

const navLinks = [
  ["Bruksområder", "/#tjenester"],
  ["Slik fungerer det", "/slik-fungerer-det"],
  ["AI-kartlegging", "/ai-kartlegging"],
  ["Om ANAi", "/om-anai"],
  ["Kontakt", "/kontakt"],
];

const footerGroups = [
  {
    title: "Bruksområder",
    links: [
      ["Kundehenvendelser", "/kundehenvendelser-og-oppfolging"],
      ["Administrasjon", "/administrasjon-og-dokumentasjon"],
      ["Salg og oppfølging", "/salg-tilbud-og-rapportering"],
      ["Intern kunnskap", "/intern-kunnskap"],
      ["AI-automatisering", "/ai-automatisering"],
    ],
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
    <header className="border-b border-[#dfd0c2] bg-[#f7f1ea]/92 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" aria-label="ANAi forside">
          <Logo priority />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-[#173348] md:flex">
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
        <p className="mt-6 text-xs">© 2026 ANAi AS. Alle rettigheter reservert.</p>
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
  image = "/landing/cta-coast.png",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#dfd0c2]">
      <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,234,0.98),rgba(247,241,234,0.9)_46%,rgba(247,241,234,0.42)_100%)]" />
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

export function ContactForm({ title = "Fortell kort hva dere vil se på" }: { title?: string }) {
  return (
    <form
      action={`mailto:${contactEmail}`}
      method="post"
      encType="text/plain"
      className="rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-6 shadow-[0_18px_50px_rgba(15,45,66,0.08)]"
    >
      <h2 className="font-display text-3xl text-[#0b3048]">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {[
          ["Navn", "name", "text"],
          ["Bedrift", "company", "text"],
          ["E-post", "email", "email"],
          ["Telefon", "phone", "tel"],
          ["Rolle", "role", "text"],
          ["Bransje", "industry", "text"],
        ].map(([label, name, type]) => (
          <label key={name} className="text-sm font-semibold text-[#173348]">
            {label}
            <input
              name={name}
              type={type}
              required={["name", "company", "email"].includes(name)}
              className="mt-2 h-12 w-full rounded-md border border-[#d8c7b8] bg-white/70 px-4 text-base font-normal outline-none transition focus:border-[#c95720]"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block text-sm font-semibold text-[#173348]">
        Kort beskrivelse
        <textarea
          name="description"
          rows={5}
          placeholder="Hvilken arbeidsflyt tar mye tid i dag?"
          className="mt-2 w-full rounded-md border border-[#d8c7b8] bg-white/70 px-4 py-3 text-base font-normal outline-none transition focus:border-[#c95720]"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.24)] transition hover:bg-[#b74a18]"
      >
        Send forespørsel
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs leading-6 text-[#24465a]">
        Opplysningene brukes bare til å svare på henvendelsen og avtale eventuell kartlegging.
      </p>
    </form>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="relative overflow-hidden rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-8 shadow-[0_18px_50px_rgba(15,45,66,0.08)] md:p-12">
        <Image src="/landing/cta-coast.png" alt="" fill className="object-cover opacity-45" sizes="100vw" />
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
            href="/book-gratis-ai-kartlegging"
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
