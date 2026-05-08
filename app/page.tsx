import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  Clock3,
  Code2,
  FileSearch,
  Headphones,
  LineChart,
  MessageCircle,
  PenLine,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/MarketingPage";

const services = [
  {
    title: "Kundehenvendelser og oppfølging",
    image: "/landing/service-customer-inquiries.png",
    imageAlt: "Innboks og AI-assistert svarutkast for kundehenvendelser",
    icon: MessageCircle,
    href: "/kundehenvendelser-og-oppfolging",
    price: "Raskere svar",
    body: "Sorter henvendelser, lag svarutkast, oppsummer kundedialog og foreslå neste steg — slik at kunder får raskere oppfølging og færre saker faller mellom stolene.",
    visual: {
      label: "Innboks",
      title: "Svarutkast klart",
      body: "Oppsummering, neste steg og forslag til svar.",
    },
  },
  {
    title: "Administrasjon og dokumentasjon",
    image: "/landing/service-admin-documentation.png",
    imageAlt: "Notater og skjemaer strukturert til rapport og sjekkliste",
    icon: FileSearch,
    href: "/administrasjon-og-dokumentasjon",
    price: "Mindre manuelt arbeid",
    body: "Gjør notater, skjemaer, møtereferater og løse beskjeder om til strukturerte utkast, sjekklister, rapporter og oppgaver.",
    visual: {
      label: "Notater",
      title: "Rapport + sjekkliste",
      body: "Løse punkter blir ansvar, frister og struktur.",
    },
  },
  {
    title: "Salg, tilbud og rapportering",
    image: "/landing/service-sales-crm.png",
    imageAlt: "Befaringsnotater gjort om til tilbudsutkast og CRM-notat",
    icon: Bot,
    href: "/salg-tilbud-og-rapportering",
    price: "Bedre oppfølging",
    body: "Lag bedre salgsoppfølging, tilbudsutkast, CRM-notater, statusoppdateringer og rapporter — med AI som hjelper teamet å holde flyt og oversikt.",
    visual: {
      label: "Befaring",
      title: "Tilbud + CRM-notat",
      body: "Behov, omfang og oppfølging samles raskere.",
    },
  },
  {
    title: "Intern kunnskap",
    image: "/landing/service-internal-knowledge.png",
    imageAlt: "Intern kunnskapssøk med svar fra rutiner og kilder",
    icon: FileSearch,
    href: "/intern-kunnskap",
    price: "Raskere svar internt",
    body: "Gjør dokumenter, rutiner, maler og erfaringer enklere å finne igjen — med AI-assistenter som gir relevante utkast og peker teamet mot riktig kunnskap.",
    visual: {
      label: "Spørsmål",
      title: "Hvordan gjør vi dette?",
      body: "Svar fra rutiner, maler og dokumenter.",
    },
  },
  {
    title: "AI-automatisering",
    image: "/landing/service-ai-automation-flow.png",
    imageAlt: "Enkel flyt mellom e-post, CRM, oppgaver og dokumenter",
    icon: Code2,
    href: "/ai-automatisering",
    price: "Mer flyt mellom systemer",
    body: "Koble sammen manuelle steg, varsler, oppgaver og informasjonsflyt slik at mindre tid går til kopiering, sortering og oppfølging på tvers av verktøy.",
    visual: {
      label: "Flyt",
      title: "E-post → CRM → Oppgave",
      body: "Dokumenter og varsler følger riktig prosess.",
    },
  },
  {
    title: "Skreddersydde AI-løsninger",
    image: "/landing/service-custom-workflow-map.png",
    imageAlt: "Whiteboard med arbeidsflytkart og prosessdiagram",
    icon: Sparkles,
    href: "/skreddersydde-ai-losninger",
    price: "Tilpasset arbeidsflyten",
    body: "Utvikle kontrollerte AI-løsninger rundt deres egne prosesser, data og rutiner — fra første pilot til en trygg løsning teamet faktisk tar i bruk.",
    visual: {
      label: "Skreddersøm",
      title: "Kartlegg → Pilot → Godkjenn",
      body: "En løsning rundt måten teamet faktisk jobber.",
    },
  },
];

const process = [
  {
    title: "Kartlegg arbeidsflyten",
    icon: FileSearch,
    body: "Vi starter med å forstå hvor tiden forsvinner: manuelle oppgaver, gjentakende spørsmål, dokumentasjon, rapportering, oppfølging eller koordinering.",
  },
  {
    title: "Velg riktig startpunkt",
    icon: PenLine,
    body: "Sammen velger vi én konkret arbeidsflyt med tydelig verdi og lav risiko. Målet er å skape nytte raskt — ikke å gjøre alt på én gang.",
  },
  {
    title: "Utvikle og test løsningen",
    icon: Code2,
    body: "Vi utvikler en praktisk AI-assistent eller automasjon som passer inn i dagens rutiner, med menneskelig kontroll og tydelige rammer.",
  },
  {
    title: "Forbedre og utvid",
    icon: LineChart,
    body: "Når løsningen fungerer i praksis, måler vi effekt, justerer arbeidsflyten og vurderer neste område hvor AI kan skape verdi.",
  },
];

const workflowExamples = [
  {
    title: "Befaring → tilbudsutkast",
    body: "Notater, bilder eller skjema fra befaring struktureres til et første tilbudsutkast som teamet kvalitetssikrer før kunden får noe.",
    icon: PenLine,
  },
  {
    title: "Kundehenvendelse → svarutkast",
    body: "En innkommende e-post eller skjemasak oppsummeres, får forslag til svar og relevante oppfølgingsspørsmål før menneskelig godkjenning.",
    icon: MessageCircle,
  },
  {
    title: "Møtenotater → oppgaver og kundeoppdatering",
    body: "Løse møtenotater blir til oppgaver, ansvarlige og et kort kundeutkast som kan redigeres og sendes av ansvarlig person.",
    icon: FileSearch,
  },
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#0f2d42]">
      <SiteHeader />
      <section className="relative min-h-[680px] overflow-hidden border-b border-[#d8c7b8] lg:min-h-[760px]">
        <Image
          src="/landing/frontpage-human-workflow-hero-v2.png"
          alt="Norsk bedriftsleder som går gjennom arbeidsflyter med laptop og notater"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,242,233,0.97)_0%,rgba(250,242,233,0.86)_38%,rgba(250,242,233,0.38)_68%,rgba(15,45,66,0.08)_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="relative z-20 max-w-2xl">
            <div className="mb-8 flex items-center gap-3 text-sm font-medium text-[#173348]">
              <NorwegianFlag />
              <span>Praktiske AI-løsninger for norske bedrifter</span>
            </div>
            <h1 className="font-display text-5xl leading-[0.98] tracking-normal text-[#0b3048] sm:text-7xl sm:leading-[0.94] lg:text-[5.7rem]">
              Få AI til å skape faktisk verdi i bedriften
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#1c3c52]">
              Mange bedrifter vet at AI kan spare tid, men er usikre på hvor de skal starte.
              ANAi hjelper dere å finne, utvikle og ta i bruk konkrete AI-løsninger som
              reduserer manuelt arbeid, forbedrer arbeidsflyten og gir teamet mer tid til
              det som skaper verdi.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-gratis-ai-kartlegging"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.28)] transition hover:bg-[#b74a18]"
              >
                Book gratis AI-kartlegging
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#tjenester"
                className="inline-flex h-14 items-center justify-center rounded-md border border-[#0f2d42]/45 bg-[#f7f1ea]/70 px-8 text-base font-semibold text-[#0f2d42] backdrop-blur transition hover:border-[#c95720] hover:text-[#c95720]"
              >
                Se hva vi kan automatisere
              </a>
            </div>
            <div className="mt-14 grid max-w-2xl gap-4 text-xs font-medium text-[#24465a] sm:grid-cols-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Trygt og GDPR-bevisst
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Mennesker i kontroll
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Laget for norske SMB-er
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tjenester" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <h2 className="text-center font-display text-4xl text-[#0b3048] sm:text-5xl">
          AI-løsninger for arbeidsflytene som tar mest tid
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-[#24465a]">
          Vi lager praktiske AI-assistenter og automasjoner rundt oppgavene som allerede finnes
          i bedriften — fra kundeoppfølging og dokumentasjon til salg, rapportering og intern
          kunnskap.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="overflow-hidden rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] shadow-[0_18px_50px_rgba(15,45,66,0.08)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/65 bg-[#fffaf4]/88 p-4 text-[#0f2d42] shadow-[0_16px_34px_rgba(15,45,66,0.16)] backdrop-blur-md">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.13em] text-[#c95720]">
                    {service.visual.label}
                  </p>
                  <p className="mt-1 text-sm font-bold leading-5">{service.visual.title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#24465a]">{service.visual.body}</p>
                </div>
                <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-[#0f2d42] text-white shadow-lg">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl text-[#0b3048]">{service.title}</h3>
                <p className="mt-3 min-h-[88px] text-sm leading-7 text-[#24465a]">{service.body}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#c95720]">
                    Les mer
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-[#24465a]">{service.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#c95720]">Arbeidsflyter</p>
            <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">
              Eksempler på AI-arbeidsflyter
            </h2>
            <p className="mt-4 text-base leading-7 text-[#24465a]">
              Dette er illustrative eksempler på hvordan ANAi kan støtte eksisterende rutiner.
              De er ikke kundecaser eller dokumenterte resultater.
            </p>
          </div>
          <Link
            href="/eksempler-pa-arbeidsflyter"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-md border border-[#0f2d42]/35 px-5 text-sm font-semibold text-[#0f2d42] transition hover:border-[#c95720] hover:text-[#c95720]"
          >
            Se flere detaljer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {workflowExamples.map((example) => (
            <article
              key={example.title}
              className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_14px_38px_rgba(15,45,66,0.06)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c7b8] bg-white/60 text-[#0f2d42]">
                <example.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-[#0b3048]">{example.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#24465a]">{example.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="losninger" className="mx-auto max-w-7xl px-6 pb-6 lg:px-10">
        <div className="grid overflow-hidden rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] shadow-[0_18px_50px_rgba(15,45,66,0.06)] lg:grid-cols-[1fr_2.35fr]">
          <div className="relative min-h-56">
            <Image
              src="/landing/cta-coast.png"
              alt="Norsk kyst og moderne arbeidsplass"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </div>
          <div className="grid gap-6 p-8 md:grid-cols-3">
            {[
              ["Timer spart", "mindre manuelt arbeid", Clock3, "Reduser tid brukt på repeterende oppgaver som skriving, sortering, oppsummering, dokumentasjon og oppfølging."],
              ["Trygt i bruk", "menneskelig kontroll", Headphones, "AI-en lager forslag og utkast. Mennesker godkjenner før noe sendes, deles eller brukes i viktige beslutninger."],
              ["Tilpasset dere", "deres rutiner og systemer", Target, "Løsningene tilpasses deres faktiske rutiner, systemer og arbeidsflyter — ikke som en generisk chatbot."],
            ].map(([value, label, Icon, body]) => (
              <div key={value as string} className="border-[#dfd0c2] md:border-l md:pl-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#d8c7b8] bg-white/60">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="text-3xl font-medium">{value as string}</div>
                    <div className="text-sm font-bold text-[#24465a]">{label as string}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#24465a]">{body as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prosess" className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <h2 className="text-center font-display text-4xl text-[#0b3048]">
          Fra idé til fungerende AI-løsning
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <article key={step.title} className="relative rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-6">
              <span className="absolute left-16 top-[-12px] flex h-7 w-7 items-center justify-center rounded-full bg-[#c95720] text-sm font-bold text-white">
                {index + 1}
              </span>
              <step.icon className="h-10 w-10 text-[#0b3048]" />
              <h3 className="mt-5 text-base font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#24465a]">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="relative overflow-hidden rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-8 shadow-[0_18px_50px_rgba(15,45,66,0.08)] md:p-12">
          <Image
            src="/landing/frontpage-ai-kartlegging-checklist.png"
            alt="Person som går gjennom sjekkliste for AI-kartlegging"
            fill
            className="object-cover opacity-70"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,246,240,0.98),rgba(251,246,240,0.88)_50%,rgba(251,246,240,0.24))]" />
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-2xl gap-8">
              <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-full border border-[#0f2d42]/50 md:flex">
                <Rocket className="h-11 w-11" />
              </div>
              <div>
                <h2 className="font-display text-4xl text-[#0b3048] md:text-5xl">
                  Hvor kan AI spare mest tid hos dere?
                </h2>
                <p className="mt-4 text-base leading-7 text-[#24465a]">
                  Book en gratis AI-kartlegging, så finner vi konkrete arbeidsflyter hvor AI kan
                  redusere manuelt arbeid, forbedre oppfølgingen eller gi bedre oversikt — uten
                  at dere trenger å lage alt på nytt.
                </p>
                <p className="mt-3 text-sm font-semibold text-[#c95720]">
                  Vi starter med én konkret arbeidsflyt og viser hva som er mulig.
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
