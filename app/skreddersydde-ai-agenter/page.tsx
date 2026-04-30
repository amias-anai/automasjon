import type { Metadata } from "next";
import {
  BrainCircuit,
  Cable,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { ProductServicePage } from "../components/ProductServicePage";

export const metadata: Metadata = {
  title: "Skreddersydde AI-agenter | ANAi",
  description:
    "Skreddersydde AI-agenter for norske bedrifter som vil automatisere beslutningsstøtte, research, support og interne arbeidsflyter.",
};

const processSteps = [
  {
    number: "01",
    title: "Definer agentens jobb",
    body: "Vi avklarer hva agenten skal oppnå, hvilke beslutninger den kan ta og når mennesker må godkjenne.",
  },
  {
    number: "02",
    title: "Koble til verktøy og data",
    body: "Agenten får tilgang til relevante systemer, dokumenter, API-er og arbeidsflyter med tydelige grenser.",
  },
  {
    number: "03",
    title: "Bygg kontrollert handling",
    body: "Vi bygger trygg logikk for research, forslag, oppgaver, rapporter og handlinger som kan godkjennes.",
  },
  {
    number: "04",
    title: "Lær av resultatene",
    body: "Agenten måles på kvalitet, tidsbruk, presisjon og verdi slik at den forbedres over tid.",
  },
];

const included = [
  {
    title: "Agentdesign",
    icon: BrainCircuit,
    body: "Vi designer roller, mål, grenser, godkjenningsflyt og verktøybruk slik at agenten får en tydelig jobb.",
  },
  {
    title: "Systemkoblinger",
    icon: Cable,
    body: "Agenten kan kobles til CRM, dokumenter, databaser, e-post, prosjektverktøy og interne API-er.",
  },
  {
    title: "Arbeidsflyter",
    icon: Workflow,
    body: "Fra research og rapporter til kundeoppfølging og interne oppgaver, agenten jobber i etablerte flyter.",
  },
  {
    title: "Sikker styring",
    icon: ShieldCheck,
    body: "Tilganger, logging, datagrenser og menneskelig godkjenning bygges inn fra starten.",
  },
];

const useCases = [
  {
    label: "Research",
    title: "Marked og kundeinnsikt",
    body: "Agenten samler informasjon, strukturerer funn og lager beslutningsgrunnlag før møter eller tilbud.",
  },
  {
    label: "Drift",
    title: "Intern oppgaveagent",
    body: "Finner riktig informasjon, oppretter oppgaver, følger opp frister og varsler teamet når noe stopper opp.",
  },
  {
    label: "Salg",
    title: "Tilbuds- og oppfølgingsagent",
    body: "Lager førsteutkast, finner relevante kundedata og foreslår neste steg basert på historikk og mål.",
  },
];

const faqs = [
  "Hva kan en AI-agent faktisk gjøre?",
  "Hvilke systemer kan agenten kobles til?",
  "Hvordan sikrer vi at agenten ikke gjør feil?",
  "Kan vi starte med én avgrenset agent først?",
];

export default function CustomAiAgentsPage() {
  return (
    <ProductServicePage
      eyebrow="Skreddersydde AI-agenter"
      title="AI-agenter bygget rundt arbeidsflytene deres"
      intro="Vi utvikler AI-agenter som kan hente informasjon, analysere, foreslå neste steg og utføre kontrollerte oppgaver i systemene dere allerede bruker."
      price="Fra 15 000 kr/mnd"
      heroImage="/landing/ai-agents-header-user.png"
      heroAlt="Skreddersydde AI-agenter koblet til arbeidsflyter og systemer"
      stats={[
        ["1-4", "agenter i første pilot"],
        ["30%+", "mer kapasitet i teamet"],
        ["100%", "kontroll og logging"],
      ]}
      challenge="Mange bedrifter har kunnskap spredt i dokumenter, CRM, e-post, prosjektverktøy og hodene til nøkkelpersoner. Det gjør oppfølging tregere og gjør det vanskelig å skalere kvalitet."
      solution="Vi bygger spesialiserte AI-agenter med konkrete roller, tilgang til riktige data og trygge handlingsgrenser. Agentene hjelper teamet med research, beslutningsstøtte, rapportering, oppfølging og repetitive prosesser."
      processSteps={processSteps}
      included={included}
      useCases={useCases}
      darkCard={{
        label: "Orkestrering",
        title: "Flere agenter kan samarbeide mot samme mål",
        body: "Én agent kan hente data, en annen kan analysere, og en tredje kan lage forslag til handling. Alt skjer med logging, godkjenning og tydelige ansvarsgrenser.",
      }}
      faqs={faqs}
      ctaTitle="Bygg deres første AI-agent"
      ctaBody="Vi starter med en konkret arbeidsflyt, bygger en avgrenset pilot og viser hvor agenten kan skape målbar effekt."
    />
  );
}
