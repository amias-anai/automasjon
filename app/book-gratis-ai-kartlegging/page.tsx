import type { Metadata } from "next";
import {
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";
import {
  ContactForm,
  MarketingPage,
  PageHero,
  SafetyNote,
} from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Book gratis AI-kartlegging | ANAi",
  description:
    "Book en gratis AI-kartlegging med ANAi og finn konkrete arbeidsflyter hvor AI kan spare tid med kontroll og menneskelig godkjenning.",
};

const sessionItems = [
  {
    title: "Hvem det passer for",
    body: "Daglig leder, eier, driftsansvarlig, administrasjon, salg eller kundeservice som ser at manuelle oppgaver tar for mye tid.",
    icon: CalendarDays,
  },
  {
    title: "Hva vi går gjennom",
    body: "Dagens arbeidsflyt, systemer, flaskehalser, datagrunnlag, risiko og hvilke steg som bør ha menneskelig godkjenning.",
    icon: FileSearch,
  },
  {
    title: "Hva dere får etterpå",
    body: "En kort anbefaling til første AI-pilot, hva den bør gjøre, hva den ikke bør gjøre, og hvordan den kan testes trygt.",
    icon: ClipboardCheck,
  },
];

export default function BookingPage() {
  return (
    <MarketingPage>
      <PageHero
        eyebrow="Gratis AI-kartlegging"
        title="Finn én konkret AI-mulighet som er verdt å starte med"
        intro="I en kort kartlegging ser vi på hvor manuelt arbeid, oppfølging eller dokumentasjon tar tid i dag, og vurderer hva som kan forbedres med en kontrollert AI-arbeidsflyt."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <p className="text-sm font-bold text-[#c95720]">Uforpliktende og praktisk</p>
          <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">Hva skjer i kartleggingen?</h2>
          <p className="mt-5 max-w-xl leading-8 text-[#24465a]">
            Målet er ikke å selge en stor AI-transformasjon. Målet er å finne et realistisk
            startpunkt der AI kan lage utkast, sortere informasjon eller foreslå neste steg,
            mens mennesker beholder kontrollen.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Vi ser etter lavrisiko arbeidsflyter først.",
              "Vi vurderer hvilke data og systemer som faktisk trengs.",
              "Vi avklarer hvor godkjenning, logging og stoppunkter bør ligge.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c95720]" />
                <p className="leading-7 text-[#24465a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm title="Book gratis AI-kartlegging" />
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 lg:px-10">
          {sessionItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7">
              <item.icon className="h-10 w-10 text-[#0b3048]" />
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#24465a]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p className="text-sm font-bold text-[#c95720]">Trygg avgrensning</p>
          <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">Vi definerer også hva AI ikke skal gjøre</h2>
          <p className="mt-5 leading-8 text-[#24465a]">
            Gode AI-løsninger handler like mye om rammer som teknologi. Kundeutsendelser,
            tilbud, sletting, juridiske vurderinger og økonomiske handlinger bør ha tydelig
            menneskelig godkjenning før de gjennomføres.
          </p>
        </div>
        <SafetyNote />
      </section>
    </MarketingPage>
  );
}
