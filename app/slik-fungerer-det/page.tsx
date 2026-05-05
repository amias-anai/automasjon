import type { Metadata } from "next";
import {
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileSearch,
  LineChart,
  PenLine,
  ShieldCheck,
  Users,
} from "lucide-react";
import {
  CtaBand,
  MarketingPage,
  PageHero,
  SafetyNote,
} from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Slik fungerer det | ANAi",
  description:
    "Slik går ANAi fra kartlegging til en kontrollert AI-løsning med testing, godkjenning, opplæring og forbedring.",
};

const steps = [
  {
    number: "01",
    title: "Kartlegg arbeidsflyten",
    body: "Vi starter med oppgavene som faktisk tar tid: henvendelser, dokumentasjon, rapportering, salgsoppfølging eller intern kunnskap.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Velg riktig startpunkt",
    body: "Sammen prioriterer vi en avgrenset flyt med tydelig verdi, lav risiko og enkle kriterier for hva som er godt nok.",
    icon: PenLine,
  },
  {
    number: "03",
    title: "Bygg en liten løsning",
    body: "Vi lager en praktisk AI-assistent eller automasjon som passer inn i dagens systemer og rutiner.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test med ekte eksempler",
    body: "Løsningen testes på realistiske saker, dokumenter eller henvendelser før den brukes i ordinær drift.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Legg inn godkjenning",
    body: "Mennesker godkjenner før noe sendes til kunder, deles eksternt eller brukes i viktige beslutninger.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Tren teamet",
    body: "Teamet får en enkel forklaring på hva løsningen kan gjøre, når den skal brukes og når den skal stoppes.",
    icon: Users,
  },
  {
    number: "07",
    title: "Mål og forbedre",
    body: "Vi ser på tidsbruk, kvalitet og avvik, justerer flyten og vurderer om neste område bør automatiseres.",
    icon: LineChart,
  },
];

export default function ProcessPage() {
  return (
    <MarketingPage>
      <PageHero
        eyebrow="Slik fungerer det"
        title="Fra manuell arbeidsflyt til kontrollert AI-løsning"
        intro="ANAi jobber trinnvis. Først finner vi et tydelig problem, så bygger vi en liten løsning med rammer, testing og menneskelig godkjenning før den tas i bruk."
        image="/landing/admin-service-hero.png"
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-6 shadow-[0_14px_38px_rgba(15,45,66,0.06)]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-3xl font-semibold text-[#c95720]">{step.number}</span>
                <step.icon className="h-8 w-8 text-[#0b3048]" />
              </div>
              <h2 className="mt-5 text-lg font-bold">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#24465a]">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0f2d42] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:items-center">
          <div>
            <p className="text-sm font-bold text-[#e8a05c]">Prinsipper</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">AI skal støtte arbeidet, ikke overta ansvaret</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Utkast før utsending",
              "Minst mulig datatilgang",
              "Eksternt innhold behandles som utrygt input",
              "Logging der arbeidsflyten er viktig",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-white/12 bg-white/[0.045] p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e8a05c]" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SafetyNote />
      </section>
      <CtaBand />
    </MarketingPage>
  );
}
