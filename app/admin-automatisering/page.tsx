import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  ClipboardCheck,
  DatabaseZap,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Phone,
  TimerReset,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Prosesskartlegging",
    body: "Vi identifiserer tidstyvene, manuelle flyter og systemene som bør snakke sammen før vi bygger.",
  },
  {
    number: "02",
    title: "Design og utvikling",
    body: "Arbeidsflyten designes med riktige triggere, godkjenninger, feilhåndtering og tydelig menneskelig kontroll.",
  },
  {
    number: "03",
    title: "Testing og lansering",
    body: "Vi tester med reelle data, justerer regler og sørger for at teamet trygt kan bruke automasjonen.",
  },
  {
    number: "04",
    title: "Måling og forbedring",
    body: "Systemet måler tid spart, feil redusert og saker behandlet, slik at vi kan forbedre løpende.",
  },
];

const included = [
  {
    title: "Spar tid",
    icon: TimerReset,
    body: "Mennesker bør bruke tid på verdiskaping, ikke klipp-og-lim mellom systemer. Vi automatiserer rutinearbeidet.",
  },
  {
    title: "Reduser feil",
    icon: ClipboardCheck,
    body: "Data registreres konsekvent og riktig hver gang, uten at noen må huske alle steg manuelt.",
  },
  {
    title: "Skalerbart",
    icon: DatabaseZap,
    body: "Når volumet øker, trenger dere ikke ansette flere til administrasjon. Flytene håndterer veksten.",
  },
  {
    title: "Sikker kontroll",
    icon: LockKeyhole,
    body: "Godkjenninger, tilgangsstyring, sporbarhet og varsler bygges inn slik at automasjonen er trygg å bruke.",
  },
];

const useCases = [
  {
    label: "Salg",
    title: "Lead-håndtering",
    body: "Kontaktskjema til CRM, Slack-varsling og oppfølging på e-post. Alt på under ett minutt, uten manuelt arbeid.",
  },
  {
    label: "Admin",
    title: "Fakturering",
    body: "AI leser inngående fakturaer, matcher dem mot prosjektnummer og legger dem til godkjenning.",
  },
  {
    label: "Rapport",
    title: "Automatisert innsikt",
    body: "Systemet henter tall fra alle kanaler hver fredag og genererer en ferdig rapport til ledelsen.",
  },
];

const faqs = [
  "Hvilke systemer kan kobles sammen?",
  "Hvor lang tid tar det å bygge en automasjon?",
  "Hva skjer hvis noe feiler?",
  "Kan vi godkjenne før noe sendes videre?",
];

function Logo() {
  return (
    <Image
      src="/landing/anai-logo.png"
      alt="ANAi"
      width={168}
      height={56}
      className="h-12 w-auto object-contain"
      priority
    />
  );
}

export default function AdminAutomationPage() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#0f2d42]">
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto mt-4 flex h-16 max-w-4xl items-center justify-between rounded-xl border border-white/55 bg-[#fffaf4]/78 px-5 shadow-[0_16px_40px_rgba(15,45,66,0.10)] backdrop-blur-xl">
          <Link href="/" aria-label="Til forsiden" className="flex h-10 w-10 items-center justify-center rounded-md border border-[#dfd0c2] bg-white/45">
            <Menu className="h-5 w-5" />
          </Link>
          <Link href="/" aria-label="ANAi forside">
            <Logo />
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-bold uppercase tracking-[0.18em] md:inline">NO</span>
            <a
              href="mailto:system@anai.no"
              className="inline-flex h-10 items-center rounded-md bg-[#c95720] px-4 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(201,87,32,0.26)] transition hover:bg-[#b74a18]"
            >
              Book intro
            </a>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-[#dfd0c2]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,234,0.98)_0%,rgba(247,241,234,0.92)_42%,rgba(247,241,234,0.36)_70%,rgba(247,241,234,0.12)_100%)]" />
        <Image
          src="/landing/admin-header-user.png"
          alt="Automatiserte administrative arbeidsflyter"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,241,234,0.45),rgba(247,241,234,0.88))]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-36 lg:px-10 lg:pb-36 lg:pt-44">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#24465a] transition hover:text-[#c95720]">
            <ArrowLeft className="h-4 w-4" />
            Tilbake til forsiden
          </Link>
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#c95720]">Admin-automatisering</p>
            <h1 className="mt-4 font-display text-6xl leading-[0.95] text-[#0b3048] sm:text-7xl lg:text-[5.8rem]">
              AI-automatisering for norske bedrifter
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#24465a]">
              Vi kobler sammen systemene deres slik at data flyter automatisk. Spar hundrevis
              av timer ved å la teknologien ta seg av rutineoppgavene.
            </p>
            <p className="mt-5 text-base font-bold text-[#c95720]">Fra 5 000 kr/mnd</p>
          </div>
          <div className="mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              ["40-70%", "mindre manuell registrering"],
              ["24/7", "flyter som jobber videre"],
              ["100%", "sporbarhet og kontroll"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-lg border border-white/60 bg-[#fffaf4]/70 p-5 shadow-[0_16px_35px_rgba(15,45,66,0.09)] backdrop-blur">
                <div className="text-3xl font-semibold">{value}</div>
                <div className="mt-1 text-sm font-medium text-[#24465a]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="font-display text-4xl text-[#0b3048]">Hva er utfordringen?</h2>
            <p className="mt-5 max-w-xl leading-8 text-[#24465a]">
              Manuelle prosesser fører til feil, dobbeltarbeid og tapte muligheter. Ansatte
              bruker tid på klipp-og-lim mellom systemer i stedet for verdiskaping.
            </p>
          </div>
          <div>
            <h2 className="font-display text-4xl text-[#0b3048]">Hvordan løser vi det?</h2>
            <p className="mt-5 max-w-xl leading-8 text-[#24465a]">
              Vi bygger sømløse arbeidsflyter som kobler systemene sammen. Data flyter
              automatisk mellom CRM, e-post, fakturering og andre verktøy, mens AI analyserer
              der det gir merverdi.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="font-display text-5xl text-[#0b3048]">Hvordan fungerer prosessen?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article key={step.number} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_14px_38px_rgba(15,45,66,0.06)]">
              <div className="text-3xl font-semibold text-[#e09a53]">{step.number}</div>
              <h3 className="mt-5 font-bold text-[#c95720]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#24465a]">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="font-display text-5xl text-[#0b3048]">Hva er inkludert?</h2>
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <article key={item.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8c7b8] bg-[#fffaf4]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#24465a]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="font-display text-5xl text-[#0b3048]">Hvem passer dette for?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {useCases.map((item) => (
            <article key={item.title} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c95720]">{item.label}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#24465a]">{item.body}</p>
            </article>
          ))}
          <article className="relative overflow-hidden rounded-lg border border-[#dfd0c2] bg-[#0f2d42] p-7 text-white">
            <div className="absolute right-5 top-5 opacity-25">
              <Workflow className="h-24 w-24" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e8a05c]">Drift</p>
            <h3 className="mt-4 text-xl font-bold">Oppgaver som alltid gjentar seg</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/78">
              Alt som følger regler, bruker data fra flere steder eller må sendes videre til riktig person,
              er en god kandidat for automatisering.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h2 className="font-display text-5xl text-[#0b3048]">Ofte stilte spørsmål</h2>
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-[#d8c7b8]">
            {faqs.map((question) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                  {question}
                  <span className="text-xl text-[#c95720] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#24465a]">
                  Vi avklarer dette i kartleggingen og bygger løsningen med tydelige regler,
                  logging og varsler der mennesker må ta beslutningen.
                </p>
              </details>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h2 className="font-display text-5xl text-[#0b3048]">Hva er din tidstyv?</h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#24465a]">
              Fortell oss om de manuelle prosessene som tar mest tid, så viser vi hva som kan automatiseres.
            </p>
            <a
              href="mailto:system@anai.no"
              className="mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[#c95720] px-7 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_35px_rgba(201,87,32,0.28)] transition hover:bg-[#b74a18]"
            >
              Ta kontakt
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto grid max-w-7xl gap-10 px-6 py-14 text-sm text-[#24465a] lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs">AI-selskap for norske bedrifter</p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              Bergen, Norge
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4" />
              +47 41 40 97 53
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              system@anai.no
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#0f2d42]">Sider</h3>
          <ul className="mt-5 space-y-3">
            {["Tjenester", "Verktøy", "Prosjekter", "Blogg", "Om oss", "Kontakt"].map((item) => (
              <li key={item}>
                <Link href="/" className="transition hover:text-[#c95720]">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#0f2d42]">Følg oss</h3>
          <div className="mt-5 flex gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded border border-[#d8c7b8]">in</span>
            <span className="flex h-8 w-8 items-center justify-center rounded border border-[#d8c7b8]">
              <BarChart3 className="h-4 w-4" />
            </span>
          </div>
          <div className="mt-8 border-t border-[#dfd0c2] pt-6 text-xs">
            © 2026 ANAi AS. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </main>
  );
}
