import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  ChevronDown,
  Clock3,
  Code2,
  FileSearch,
  Headphones,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  PenLine,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { ReactiveHeroField } from "./components/ReactiveHeroField";

const services = [
  {
    title: "Kundehenvendelser og oppfølging",
    image: "/landing/admin-automation.png",
    icon: MessageCircle,
    href: "/admin-automatisering",
    price: "Raskere svar",
    body: "Sorter henvendelser, lag svarutkast, oppsummer kundedialog og foreslå neste steg — slik at kunder får raskere oppfølging og færre saker faller mellom stolene.",
  },
  {
    title: "Administrasjon og dokumentasjon",
    image: "/landing/customer-service.png",
    icon: FileSearch,
    href: "/automatisert-kundeservice",
    price: "Mindre manuelt arbeid",
    body: "Gjør notater, skjemaer, møtereferater og løse beskjeder om til strukturerte utkast, sjekklister, rapporter og oppgaver.",
  },
  {
    title: "Salg, tilbud og rapportering",
    image: "/landing/ai-agents.png",
    icon: Bot,
    href: "/skreddersydde-ai-agenter",
    price: "Bedre oppfølging",
    body: "Lag bedre salgsoppfølging, tilbudsutkast, CRM-notater, statusoppdateringer og rapporter — med AI som hjelper teamet å holde flyt og oversikt.",
  },
  {
    title: "Intern kunnskap",
    image: "/landing/internal-knowledge.png",
    icon: FileSearch,
    href: "#kontakt",
    price: "Raskere svar internt",
    body: "Gjør dokumenter, rutiner, maler og erfaringer enklere å finne igjen — med AI-assistenter som gir relevante utkast og peker teamet mot riktig kunnskap.",
  },
  {
    title: "AI-automatisering",
    image: "/landing/ai-automation.png",
    icon: Code2,
    href: "#kontakt",
    price: "Mer flyt mellom systemer",
    body: "Koble sammen manuelle steg, varsler, oppgaver og informasjonsflyt slik at mindre tid går til kopiering, sortering og oppfølging på tvers av verktøy.",
  },
  {
    title: "Skreddersydde AI-løsninger",
    image: "/landing/custom-ai-solutions.png",
    icon: Sparkles,
    href: "/skreddersydde-ai-agenter",
    price: "Tilpasset arbeidsflyten",
    body: "Utvikle kontrollerte AI-løsninger rundt deres egne prosesser, data og rutiner — fra første pilot til en trygg løsning teamet faktisk tar i bruk.",
  },
];

const useCases = [
  "Kundehenvendelser",
  "Administrasjon og dokumentasjon",
  "Salg og oppfølging",
  "Intern kunnskap",
  "AI-automatisering",
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

const footerGroups = [
  {
    title: "Bruksområder",
    links: [
      "Kundehenvendelser",
      "Administrasjon",
      "Salg og oppfølging",
      "Intern kunnskap",
      "AI-automatisering",
    ],
  },
  {
    title: "Selskap",
    links: ["Slik fungerer det", "Om ANAi", "AI-kartlegging", "Kontakt"],
  },
  {
    title: "Ressurser",
    links: ["Blogg", "Guider", "Personvern", "Eksempler"],
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
      <section className="relative min-h-[680px] overflow-hidden border-b border-[#d8c7b8] lg:min-h-[760px]">
        <Image
          src="/landing/hero-fjord.png"
          alt="Moderne arbeidsplass ved en norsk fjord"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,242,233,0.94)_0%,rgba(250,242,233,0.78)_35%,rgba(250,242,233,0.18)_64%,rgba(15,45,66,0.10)_100%)]" />
        <div className="absolute inset-x-0 top-0 z-20">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
            <a href="#" className="relative block h-16 w-52 md:h-20 md:w-64" aria-label="ANAi">
              <Image
                src="/landing/anai-logo.png"
                alt="ANAi"
                fill
                priority
                className="object-contain object-left"
                sizes="(min-width: 768px) 256px, 208px"
              />
            </a>
            <div className="hidden items-center gap-10 text-sm font-medium text-[#173348] md:flex">
              <details className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-1.5 transition hover:text-[#c95720]">
                  Bruksområder
                  <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <div className="absolute left-1/2 top-8 w-72 -translate-x-1/2 rounded-lg border border-[#dfd0c2] bg-[#fffaf4]/95 p-2 shadow-[0_18px_45px_rgba(15,45,66,0.16)] backdrop-blur-xl">
                  {useCases.map((useCase) => (
                    <Link
                      key={useCase}
                      href="#tjenester"
                      className="block rounded-md px-4 py-3 transition hover:bg-[#f0e4d8]"
                    >
                      <span className="block font-semibold text-[#0f2d42]">{useCase}</span>
                    </Link>
                  ))}
                </div>
              </details>
              <a href="#prosess" className="transition hover:text-[#c95720]">
                Slik fungerer det
              </a>
              <a href="#kontakt" className="transition hover:text-[#c95720]">
                AI-kartlegging
              </a>
              <a href="#kontakt" className="transition hover:text-[#c95720]">
                Kontakt
              </a>
            </div>
          </nav>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-20 lg:pt-36">
          <div className="relative z-20 max-w-2xl">
            <div className="mb-8 flex items-center gap-3 text-sm font-medium text-[#173348]">
              <NorwegianFlag />
              <span>Praktiske AI-løsninger for norske bedrifter</span>
            </div>
            <h1 className="font-display text-6xl leading-[0.94] tracking-normal text-[#0b3048] sm:text-7xl lg:text-[5.7rem]">
              Få AI til å skape faktisk verdi i bedriften
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#1c3c52]">
              Mange bedrifter vet at AI kan spare tid, men er usikre på hvor de skal starte.
              ANAi hjelper dere å finne, utvikle og ta i bruk konkrete AI-løsninger som
              reduserer manuelt arbeid, forbedrer arbeidsflyten og gir teamet mer tid til
              det som skaper verdi.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.28)] transition hover:bg-[#b74a18]"
              >
                Book gratis AI-kartlegging
                <ArrowRight className="h-4 w-4" />
              </a>
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

          <div className="relative z-10 hidden min-h-[460px] lg:block">
            <ReactiveHeroField />
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
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
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
            src="/landing/cta-coast.png"
            alt=""
            fill
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,246,240,0.96),rgba(251,246,240,0.82)_48%,rgba(251,246,240,0.18))]" />
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
            <a
              href="mailto:styrtarn@anai.no"
              className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.28)] transition hover:bg-[#b74a18]"
            >
              <CalendarDays className="h-5 w-5" />
              Book gratis AI-kartlegging
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto grid max-w-7xl gap-9 px-6 pb-10 pt-8 text-sm text-[#24465a] lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:px-10">
        <div>
          <div className="relative h-14 w-44" aria-label="ANAi">
            <Image
              src="/landing/anai-logo.png"
              alt="ANAi"
              fill
              className="object-contain object-left"
              sizes="176px"
            />
          </div>
          <p className="mt-2">
            ANAi hjelper norske bedrifter med praktiske AI-løsninger, automasjoner og
            AI-assistenter som sparer tid og forbedrer arbeidsflyten.
          </p>
          <div className="mt-5 flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded border border-[#d8c7b8]">in</span>
            <span className="flex h-8 w-8 items-center justify-center rounded border border-[#d8c7b8]">
              <Mail className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-6 text-xs">© 2026 ANAi AS. Alle rettigheter reservert.</p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-bold text-[#0f2d42]">{group.title}</h3>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-[#c95720]">
                    {link}
                  </a>
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
              +47 41 40 97 53
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              styrtarn@anai.no
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              Bergen, Norge
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-2 justify-start lg:justify-end">
            Utviklet i Norge
            <NorwegianFlag />
          </div>
        </div>
      </footer>
    </main>
  );
}
