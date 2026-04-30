import type { Metadata } from "next";
import {
  ClipboardCheck,
  MessageCircle,
  Route,
  ShieldCheck,
} from "lucide-react";
import { ProductServicePage } from "../components/ProductServicePage";

export const metadata: Metadata = {
  title: "Automatisert kundeservice | ANAi",
  description:
    "AI-chat og supportflyter for norske bedrifter som vil svare raskere, redusere supporttrykk og eskalere riktig.",
};

const processSteps = [
  {
    number: "01",
    title: "Kartlegg henvendelser",
    body: "Vi analyserer spørsmål, e-post, chat og tickets for å finne hva AI trygt kan svare på.",
  },
  {
    number: "02",
    title: "Trening og tone",
    body: "Chatboten trenes på kunnskapsbasen deres, språk, merkevare og regler for når mennesker skal kobles inn.",
  },
  {
    number: "03",
    title: "Integrasjon",
    body: "Vi kobler løsningen til nettside, CRM, helpdesk, e-post og kalender slik at den kan gjøre mer enn å svare.",
  },
  {
    number: "04",
    title: "Måling og forbedring",
    body: "Vi følger med på svar, eskaleringer, kundetilfredshet og salgsmuligheter, og forbedrer løpende.",
  },
];

const included = [
  {
    title: "Selvbetjening med kontroll",
    icon: MessageCircle,
    body: "Chatboten løser vanlige saker selv, men bruker trygg fallback og godkjenning når spørsmålet krever menneske.",
  },
  {
    title: "Integrasjoner",
    icon: Route,
    body: "Kobles til CRM, helpdesk, kalender, skjemaer og interne systemer slik at samtaler blir til handling.",
  },
  {
    title: "Kvalitet og innsikt",
    icon: ClipboardCheck,
    body: "Logging, innsiktspanel og løpende forbedring gjør det lett å måle responstid, løsningsgrad og kvalitet.",
  },
  {
    title: "Sikkerhet",
    icon: ShieldCheck,
    body: "Tilgang, datagrenser og sporbarhet bygges inn slik at kundedata behandles ryddig og kontrollert.",
  },
];

const useCases = [
  {
    label: "Kundeservice",
    title: "Førstelinje-support",
    body: "Håndterer status, endringer, retur, booking og vanlige spørsmål automatisk, med ryddig eskalering.",
  },
  {
    label: "Salg",
    title: "Lead-kvalifisering",
    body: "Svar på produktspørsmål, samle behov, kvalifiser leads og send varme muligheter videre til riktig person.",
  },
  {
    label: "Internt",
    title: "Intern support",
    body: "Ansatte får svar på rutiner, policy, onboarding og systemspørsmål uten å avbryte nøkkelpersoner.",
  },
];

const faqs = [
  "Hvilke kanaler støtter chatboten?",
  "Hva skjer når chatboten ikke kan svare?",
  "Hvordan trenes chatboten på våre data?",
  "Kan den kobles til CRM og helpdesk?",
];

export default function AutomatedCustomerServicePage() {
  return (
    <ProductServicePage
      eyebrow="Automatisert kundeservice"
      title="Kundeservice som svarer raskt, presist og hele døgnet"
      intro="Vi bygger AI-chat og supportflyter som håndterer vanlige henvendelser, finner riktig informasjon i systemene deres og eskalerer når mennesker bør overta."
      price="Fra 7 500 kr/mnd"
      heroImage="/landing/customer-service-header-user.png"
      heroAlt="Automatisert kundeservice med AI-chat og supportdashboard"
      stats={[
        ["24/7", "svar uten ventetid"],
        ["60%+", "vanlige saker håndtert"],
        ["1,2 min", "typisk responstid"],
      ]}
      challenge="Kundeserviceteam bruker mye tid på repetitive spørsmål om status, endringer, bestilling og dokumentasjon. Resultatet er lengre svartid, ujevn kvalitet og færre timer til sakene som faktisk krever mennesker."
      solution="Vi bygger en AI-assistent som er trent på deres data, tone og regler. Den svarer på nettside og chat, finner informasjon i systemene deres, oppretter saker, kvalifiserer leads og sender komplekse saker videre med full kontekst."
      processSteps={processSteps}
      included={included}
      useCases={useCases}
      darkCard={{
        label: "Kvalitet",
        title: "Alltid med sporbarhet og menneskelig kontroll",
        body: "Svar kan logges, måles og forbedres. Når saken er usikker, sender AI-en den videre med sammendrag, historikk og anbefalt neste steg.",
      }}
      faqs={faqs}
      ctaTitle="Se en chatbot på deres data"
      ctaBody="Vi setter opp en begrenset pilot basert på kunnskapsbasen, FAQ-en og utvalgte systemer fra bedriften deres."
    />
  );
}
