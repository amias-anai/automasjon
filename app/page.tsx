import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  GraduationCap,
  Layers3,
  PenLine,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { HomeWorkflowAnimation } from "./components/HomeWorkflowAnimation";
import { SiteFooter, SiteHeader } from "./components/MarketingPage";

const trustChips = [
  { label: "Trygt og GDPR-bevisst", icon: ShieldCheck },
  { label: "Mennesker i kontroll", icon: Users },
  { label: "Bygget for norske SMB-er", icon: Sparkles },
];

const offerPaths = [
  {
    title: "AI-kartlegging",
    body: "For selskaper som vet at AI kan spare tid, men trenger å finne riktig startpunkt først.",
    href: "/ai-kartlegging",
    icon: FileSearch,
    action: "Finn riktig pilot",
  },
  {
    title: "AI-opplæring",
    body: "For team som vil bruke Copilot, ChatGPT og andre AI-verktøy praktisk, trygt og likt i hverdagen.",
    href: "/ai-opplaering",
    icon: GraduationCap,
    action: "Lær trygg bruk",
  },
  {
    title: "AI-arbeidsflyter",
    body: "For bedrifter som vil automatisere konkrete prosesser med klare roller, dataflyt og godkjenning.",
    href: "/ai-automatisering",
    icon: Workflow,
    action: "Bygg kontrollert flyt",
  },
];

const workAreas = [
  {
    title: "Kundeservice",
    body: "Svarutkast, oppsummering og oppfølging.",
    href: "/kundehenvendelser-og-oppfolging",
  },
  {
    title: "Saksbehandling",
    body: "Klassifisering, saksnotat og neste steg.",
    href: "/saksbehandling",
  },
  {
    title: "Administrasjon",
    body: "Notater, referater, rapporter og oppgaver.",
    href: "/administrasjon-og-dokumentasjon",
  },
  {
    title: "Økonomi og regnskap",
    body: "Bilag, avvik, purring og rapportutkast.",
    href: "/okonomi-og-regnskap",
  },
  {
    title: "Salg",
    body: "Tilbud, CRM-notater og oppfølging.",
    href: "/salg-tilbud-og-rapportering",
  },
  {
    title: "Intern kunnskap",
    body: "Søk, kilder, rutiner og maler.",
    href: "/intern-kunnskap",
  },
  {
    title: "AI-automatisering",
    body: "Flyt mellom e-post, skjema, CRM og oppgaver.",
    href: "/ai-automatisering",
  },
  {
    title: "Skreddersydd løsning",
    body: "Når arbeidsflyten trenger en egen assistent.",
    href: "/skreddersydde-ai-losninger",
  },
];

const principles = [
  {
    title: "Praktisk før imponerende",
    body: "AI skal løse faktiske arbeidsoppgaver, ikke bare se avansert ut i en demo.",
    icon: Target,
  },
  {
    title: "Trygt før autonomt",
    body: "Vi starter med kontroll, godkjenning og lav risiko før noe skaleres videre.",
    icon: ShieldCheck,
  },
  {
    title: "Eksisterende systemer først",
    body: "Vi bygger rundt verktøyene dere allerede bruker, ikke unødvendige nye plattformer.",
    icon: Layers3,
  },
  {
    title: "Opplæring er en del av løsningen",
    body: "En AI-løsning fungerer først når teamet forstår når og hvordan den skal brukes.",
    icon: BookOpenCheck,
  },
];

const implementationSteps = [
  "Kartlegg arbeidsflyten",
  "Vurder risiko og data",
  "Velg riktig verktøy",
  "Test én konkret pilot",
  "Tren teamet",
  "Forbedre",
];

const controlPrinciples = [
  "Lavrisiko pilot først",
  "Minst mulig persondata",
  "Menneskelig godkjenning ved viktige handlinger",
  "Leverandører og API-er avklares per prosjekt",
  "Ingen tilfeldig bruk av forbruker-AI med bedriftsdata",
];

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

function HeroWorkflowVisual() {
  return (
    <div className="pointer-events-none relative hidden min-h-[560px] lg:block">
      <div className="absolute right-0 top-8 h-[470px] w-[620px] overflow-hidden rounded-[8px] border border-white/55 bg-[#fffaf4]/70 shadow-[0_34px_90px_rgba(15,45,66,0.18)] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-[#dfd0c2]/70 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#c95720]" />
            <span className="h-3 w-3 rounded-full bg-[#e8a05c]" />
            <span className="h-3 w-3 rounded-full bg-[#0f2d42]" />
          </div>
          <span className="rounded-full bg-[#0f2d42]/8 px-3 py-1 text-xs font-bold text-[#0f2d42]">
            Arbeidsflyt
          </span>
        </div>
        <div className="grid h-full grid-cols-[0.72fr_1fr]">
          <div className="border-r border-[#dfd0c2]/80 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c95720]">Innboks</p>
            <div className="mt-5 space-y-3">
              {["Ny kundehenvendelse", "Vedlegg mottatt", "Mangler kontekst", "Oppfølging"].map((item, index) => (
                <div
                  key={item}
                  className="rounded-md border border-[#dfd0c2] bg-white/70 p-3 shadow-[0_10px_24px_rgba(15,45,66,0.05)]"
                  style={{ transform: `translateX(${index === 1 ? 16 : 0}px)` }}
                >
                  <div className="h-2 w-16 rounded-full bg-[#c95720]/35" />
                  <div className="mt-3 h-2 w-full rounded-full bg-[#0f2d42]/14" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-[#0f2d42]/10" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-6">
            <div className="absolute inset-x-6 top-28 h-px bg-[#d8c7b8]" />
            <div className="relative grid grid-cols-3 gap-4">
              {[
                ["Klassifiser", BrainCircuit],
                ["Svarutkast", PenLine],
                ["Godkjenn", ClipboardCheck],
              ].map(([label, Icon], index) => (
                <div key={label as string} className="text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#dfd0c2] bg-[#0f2d42] text-white shadow-[0_12px_26px_rgba(15,45,66,0.20)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-bold text-[#24465a]">{label as string}</p>
                  {index < 2 ? (
                    <span className="absolute top-6 h-px w-[72px] translate-x-10 bg-[#c95720]/55" />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-lg border border-[#dfd0c2] bg-white/70 p-5 shadow-[0_18px_44px_rgba(15,45,66,0.08)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c95720]">
                    AI-forslag
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#0b3048]">Svarutkast klart</h3>
                </div>
                <span className="rounded-full border border-[#dfd0c2] bg-[#fffaf4] px-3 py-1 text-xs font-bold text-[#24465a]">
                  Må godkjennes
                </span>
              </div>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-full rounded-full bg-[#0f2d42]/14" />
                <div className="h-2 w-11/12 rounded-full bg-[#0f2d42]/12" />
                <div className="h-2 w-8/12 rounded-full bg-[#0f2d42]/10" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-md border border-[#dfd0c2] bg-[#fffaf4]/76 p-4 text-sm font-bold text-[#0f2d42]">
                CRM-forslag
              </div>
              <div className="rounded-md border border-[#dfd0c2] bg-[#fffaf4]/76 p-4 text-sm font-bold text-[#0f2d42]">
                Oppfølging
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[500px] top-[395px] rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] px-5 py-4 shadow-[0_18px_44px_rgba(15,45,66,0.14)]">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c95720]">Prinsipp</p>
        <p className="mt-1 font-semibold text-[#0f2d42]">Menneske godkjenner</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#0f2d42]">
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-[#d8c7b8] bg-[#f7f1ea]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(201,87,32,0.14),transparent_30%),radial-gradient(circle_at_18%_72%,rgba(15,45,66,0.08),transparent_34%),linear-gradient(180deg,rgba(255,250,244,0.84),rgba(247,241,234,0.96))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(247,241,234,0.98))]" />

        <div className="relative z-10 mx-auto grid min-h-[700px] max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-20">
          <div className="relative z-20 max-w-3xl self-center">
            <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-[#173348]">
              <NorwegianFlag />
              <span>Praktisk AI-innføring for norske bedrifter</span>
            </div>
            <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-normal text-[#0b3048] sm:text-6xl sm:leading-[0.94] lg:text-[4.55rem]">
              AI som fungerer i arbeidsflytene dere allerede har
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#1c3c52]">
              ANAi hjelper norske SMB-er med å kartlegge, lære opp ansatte og
              implementere AI-støttede arbeidsflyter på toppen av systemene de
              allerede bruker, trygt, praktisk og med mennesker i kontroll.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-gratis-ai-kartlegging"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.28)] transition hover:bg-[#b74a18]"
              >
                Book gratis AI-kartlegging
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#arbeidsflyt"
                className="inline-flex h-14 items-center justify-center rounded-md border border-[#0f2d42]/45 bg-[#f7f1ea]/72 px-8 text-base font-semibold text-[#0f2d42] backdrop-blur transition hover:border-[#c95720] hover:text-[#c95720]"
              >
                Se arbeidsflyt
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl gap-3 text-sm font-semibold text-[#24465a] sm:grid-cols-3">
              {trustChips.map((chip) => (
                <div key={chip.label} className="flex items-center gap-2 rounded-full border border-[#dfd0c2] bg-[#fbf6f0]/74 px-4 py-3 shadow-[0_12px_28px_rgba(15,45,66,0.06)] backdrop-blur">
                  <chip.icon className="h-4 w-4 text-[#c95720]" />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          <HeroWorkflowVisual />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="text-sm font-bold text-[#c95720]">Utfordringen</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] text-[#0b3048] sm:text-5xl">
              AI-verktøyene finnes allerede. Utfordringen er å bruke dem riktig.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#24465a]">
            Mange selskaper har Copilot, ChatGPT, Microsoft 365, Google Workspace,
            CRM, regneark og interne rutiner. Likevel stopper verdien ofte i uklare
            startpunkter, personvernsusikkerhet, lite opplæring og manuelle steg
            som fortsatt ligger mellom systemene.
          </p>
        </div>
      </section>

      <section className="bg-[#0f2d42] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold text-[#e8a05c]">Ikke enda en plattform</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] sm:text-5xl">
              Vi bygger ikke enda en plattform dere må bytte til
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
              Vi hjelper dere å bruke AI sammen med systemene dere allerede har:
              e-post, dokumenter, CRM, Microsoft 365, Copilot, ChatGPT, Google
              Workspace, regneark og interne verktøy.
            </p>
          </div>
          <div className="rounded-[8px] border border-white/12 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
            <p className="text-xl font-semibold leading-8">
              Noen ganger er riktig løsning opplæring. Andre ganger er det en
              automasjon, en Copilot-flyt, en API-integrasjon eller en
              skreddersydd AI-assistent.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Opplæring", "Automasjon", "AI-assistent", "Integrasjon"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.05] p-4 text-sm font-semibold text-white/78">
                  <CheckCircle2 className="h-4 w-4 text-[#e8a05c]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tjenester" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[#c95720]">Tre måter vi hjelper på</p>
          <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">
            Fra usikker start til AI som faktisk brukes
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {offerPaths.map((offer) => (
            <Link
              key={offer.title}
              href={offer.href}
              className="group flex min-h-[290px] flex-col justify-between rounded-[8px] border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_18px_50px_rgba(15,45,66,0.06)] transition hover:-translate-y-1 hover:border-[#c95720]/55 hover:shadow-[0_24px_70px_rgba(15,45,66,0.11)]"
            >
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c7b8] bg-white/70 text-[#0f2d42]">
                  <offer.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-7 font-display text-3xl text-[#0b3048]">{offer.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#24465a]">{offer.body}</p>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#c95720]">
                {offer.action}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div id="arbeidsflyt">
        <HomeWorkflowAnimation />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold text-[#c95720]">Hva vi hjelper med</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.05] text-[#0b3048] sm:text-5xl">
              Arbeidsområdene vi ofte starter med
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#24465a]">
              Finn riktig inngang basert på hvor tiden forsvinner, hvilke systemer
              dere bruker og hvor kontrollpunktene bør ligge.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {workAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group rounded-[8px] border border-[#dfd0c2] bg-[#fbf6f0] p-5 transition hover:border-[#c95720]/55 hover:bg-white/58"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-[#0b3048]">{area.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#24465a]">{area.body}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#c95720] transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#c95720]">Hva vi står for</p>
            <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">
              AI-innføring med tydelige prinsipper
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article key={principle.title} className="rounded-[8px] border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_14px_38px_rgba(15,45,66,0.05)]">
                <principle.icon className="h-9 w-9 text-[#0b3048]" />
                <h3 className="mt-6 text-lg font-bold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#24465a]">{principle.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-[#c95720]">Slik innfører vi AI</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] text-[#0b3048] sm:text-5xl">
              Uten å gjøre det unødvendig komplisert
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#24465a]">
              Vi starter i én arbeidsflyt, vurderer data og risiko, velger riktig
              verktøy og tester med teamet før løsningen forbedres eller skaleres.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {implementationSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-[8px] border border-[#dfd0c2] bg-[#fbf6f0] p-5 shadow-[0_12px_34px_rgba(15,45,66,0.05)]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f2d42] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-[#0b3048]">{step}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#24465a]">
                    {[
                      "Vi finner hvor tid faktisk forsvinner.",
                      "Vi ser på personvern, systemtilganger og hvor AI passer inn.",
                      "Copilot, ChatGPT, Azure, Gemini, automasjon, lokal modell eller noe annet.",
                      "Vi starter lite, måler verdi og holder mennesker i kontroll.",
                      "Ansatte må forstå løsningen, ikke bare få et nytt verktøy.",
                      "Vi justerer kvalitet, rutiner og neste mulige arbeidsflyt.",
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f2d42] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-bold text-[#e8a05c]">Personvern og kontroll</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] sm:text-5xl">
              Trygg AI-innføring, ikke fri autonomi
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/74">
              Vi vurderer datatyper, tilganger, leverandører, lagring og menneskelig
              kontroll før en løsning settes i drift. Målet er arbeidsflyter ansatte
              kan forstå, bruke og kontrollere.
            </p>
          </div>
          <div className="rounded-[8px] border border-white/12 bg-white/[0.045] p-6">
            <div className="grid gap-3">
              {controlPrinciples.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.045] p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a05c]" />
                  <p className="font-semibold text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="relative overflow-hidden rounded-[8px] border border-[#dfd0c2] bg-[#fbf6f0] p-8 shadow-[0_18px_50px_rgba(15,45,66,0.08)] md:p-12">
          <Image
            src="/landing/frontpage-ai-kartlegging-checklist.png"
            alt=""
            fill
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,246,240,0.98),rgba(251,246,240,0.88)_52%,rgba(251,246,240,0.30))]" />
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-2xl gap-8">
              <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#0f2d42]/50 md:flex">
                <Rocket className="h-11 w-11" />
              </div>
              <div>
                <h2 className="font-display text-4xl text-[#0b3048] md:text-5xl">
                  Start med én arbeidsflyt
                </h2>
                <p className="mt-4 text-base leading-7 text-[#24465a]">
                  Vi kartlegger hvor AI kan spare tid, hvilke data og risikoer som
                  må vurderes, og hvilken løsning som passer best for systemene dere
                  allerede bruker.
                </p>
              </div>
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

      <SiteFooter />
    </main>
  );
}
