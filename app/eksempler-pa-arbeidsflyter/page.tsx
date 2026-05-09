import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MessageCircle,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import {
  CtaBand,
  MarketingPage,
  PageHero,
  SafetyNote,
} from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Eksempler på arbeidsflyter | ANAi",
  description:
    "Illustrative eksempler på kontrollerte AI-arbeidsflyter for norske små og mellomstore bedrifter.",
};

const workflows = [
  {
    title: "Befaring → tilbudsutkast",
    intro:
      "For bedrifter som samler behov i befaringer, skjemaer eller telefonnotater, kan AI hjelpe med å gjøre råmaterialet om til et ryddig førsteutkast.",
    input: "Notater fra befaring, skjemasvar, bilder med beskrivelser, kundens behov og interne maler.",
    output:
      "Et strukturert sammendrag, forslag til oppgaver og et tilbudsutkast med tydelig omfang, forbehold og punkter som må kontrolleres.",
    control:
      "En fagperson kontrollerer fakta, pris, omfang og formuleringer før tilbudet sendes. AI-en skal ikke love leveranse eller pris på egen hånd.",
    why:
      "Tidsbruken kan reduseres fordi teamet starter med et ryddig utkast i stedet for blank side, samtidig som faglig vurdering beholdes.",
    icon: PenLine,
  },
  {
    title: "Kundehenvendelse → svarutkast",
    intro:
      "Når mange henvendelser ligner på hverandre, kan AI hjelpe med sortering, oppsummering og første svarforslag uten å ta over kundedialogen.",
    input: "E-post, kontaktskjema, chatutdrag eller telefonnotat med kundens spørsmål og relevant historikk.",
    output:
      "Kort sakssammendrag, foreslått kategori, svarutkast og oppfølgingsspørsmål hvis informasjon mangler.",
    control:
      "Ansvarlig medarbeider sjekker innhold, tone og kundeforhold før svaret sendes eller saken eskaleres.",
    why:
      "Teamet slipper å lese og skrive alt fra bunnen hver gang, og færre saker blir liggende uten tydelig neste steg.",
    icon: MessageCircle,
  },
  {
    title: "Møtenotater → oppgaver og kundeoppdatering",
    intro:
      "Møter skaper ofte gode avklaringer, men oppfølgingen blir fort liggende i uferdige notater. AI kan strukturere dette raskere.",
    input: "Møtenotater, prosjektnotater, stikkord, beslutninger, frister og navn på ansvarlige.",
    output:
      "Oppgaveliste, ansvarsfordeling, kort internt referat og et utkast til kundeoppdatering der det passer.",
    control:
      "Møteeier eller prosjektansvarlig godkjenner oppgaver, frister og kundetekst før noe deles eller registreres.",
    why:
      "Verdien ligger i mindre etterarbeid og tydeligere oppfølging, ikke i at AI tar beslutninger på vegne av teamet.",
    icon: ClipboardCheck,
  },
];

const detailRows = [
  ["Typisk input", "input", FileText],
  ["AI-assistert utkast", "output", CheckCircle2],
  ["Menneskelig kontroll", "control", ShieldCheck],
  ["Hvorfor det kan spare tid", "why", ArrowRight],
] as const;

export default function WorkflowExamplesPage() {
  return (
    <MarketingPage>
      <PageHero
        eyebrow="Eksempler på arbeidsflyter"
        title="Praktiske AI-eksempler uten frie tøyler"
        intro="Dette er illustrasjoner av arbeidsflyter ANAi kan bygge eller tilpasse. De er ikke kundecaser, referanser eller dokumenterte resultater, men viser hvordan kontrollert AI kan støtte vanlige oppgaver i norske SMB-er."
        image="/landing/hero-workflow-examples.svg"
        imageAlt="Eksempler på AI-arbeidsflyter fra input til kontrollert utkast"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[#c95720]">Arbeidsflyter</p>
          <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">
            Tre steder AI ofte kan hjelpe
          </h2>
          <p className="mt-4 text-base leading-8 text-[#24465a]">
            Felles for eksemplene er at AI lager forslag, struktur og utkast. Mennesker
            godkjenner viktige eller kundevendte utkast før de brukes.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {workflows.map((workflow) => (
            <article
              key={workflow.title}
              className="rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_18px_50px_rgba(15,45,66,0.08)] md:p-9"
            >
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#d8c7b8] bg-white/70 text-[#0f2d42]">
                    <workflow.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-3xl text-[#0b3048]">{workflow.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#24465a]">{workflow.intro}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {detailRows.map(([label, key, Icon]) => (
                    <div key={label} className="rounded-lg border border-[#dfd0c2] bg-white/55 p-5">
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-[#c95720]" />
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#24465a]">
                          {label}
                        </p>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#24465a]">{workflow[key]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold text-[#c95720]">Rammeverk</p>
            <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">
              Eksempler først, pilot etterpå
            </h2>
            <p className="mt-5 leading-8 text-[#24465a]">
              En god start er å velge én konkret arbeidsflyt, teste med realistiske eksempler
              og definere hva AI kan foreslå, hva den ikke skal gjøre og hvor mennesker må
              godkjenne.
            </p>
            <Link
              href="/book-gratis-ai-kartlegging"
              className="mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-md bg-[#c95720] px-5 text-sm font-semibold text-white transition hover:bg-[#b74a18]"
            >
              Book gratis AI-kartlegging
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <SafetyNote />
        </div>
      </section>

      <CtaBand />
    </MarketingPage>
  );
}
