import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Mail,
  MessageCircle,
  Search,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export type WorkflowVisualVariant =
  | "customer"
  | "admin"
  | "sales"
  | "knowledge"
  | "automation"
  | "custom"
  | "mapping"
  | "bottleneck";

type VisualSpec = {
  eyebrow: string;
  title: string;
  icon: typeof MessageCircle;
  panels: {
    label: string;
    title: string;
    body: string;
  }[];
  chips: string[];
};

const visualSpecs: Record<WorkflowVisualVariant, VisualSpec> = {
  customer: {
    eyebrow: "Innboks",
    title: "Henvendelse til godkjent svar",
    icon: MessageCircle,
    panels: [
      { label: "Innboks", title: "Kunde spør om levering", body: "Flere spørsmål i én melding" },
      { label: "AI-sammendrag", title: "Behov + hastegrad", body: "Kort kontekst og mangler" },
      { label: "Svarutkast", title: "Forslag klart", body: "Godkjenn før sending" },
    ],
    chips: ["AI-sammendrag", "Svarutkast", "Godkjenn før sending"],
  },
  admin: {
    eyebrow: "Notater",
    title: "Rotete input til struktur",
    icon: ClipboardCheck,
    panels: [
      { label: "Notater", title: "Løse møtepunkter", body: "Frister, ansvar og avklaringer" },
      { label: "Sjekkliste", title: "Oppgaver sortert", body: "Hvem gjør hva og når" },
      { label: "Kort rapport", title: "Utkast til status", body: "Klar for kontroll" },
    ],
    chips: ["Sjekkliste", "Oppgaver", "Kort rapport"],
  },
  sales: {
    eyebrow: "Befaring",
    title: "Fra møte til oppfølging",
    icon: FileText,
    panels: [
      { label: "Befaring", title: "Behov og omfang", body: "Stikkord fra kundemøte" },
      { label: "Tilbudsutkast", title: "Strukturert forslag", body: "Pris og vilkår kontrolleres" },
      { label: "CRM-notat", title: "Neste oppfølging", body: "Aktivitet og frist" },
    ],
    chips: ["Tilbudsutkast", "CRM-notat", "Neste oppfølging"],
  },
  knowledge: {
    eyebrow: "Intern kunnskap",
    title: "Spørsmål med synlige kilder",
    icon: Search,
    panels: [
      { label: "Hvordan gjør vi dette?", title: "Ansatt spør", body: "Naturlig språk" },
      { label: "Svar med kilder", title: "Rutine funnet", body: "Mal, FAQ og dokument" },
      { label: "Kontroll", title: "Kilde sjekkes", body: "Eier vurderer kritiske svar" },
    ],
    chips: ["Rutine", "Mal", "FAQ"],
  },
  automation: {
    eyebrow: "Systemflyt",
    title: "Trigger til oppgave",
    icon: Workflow,
    panels: [
      { label: "Kontaktskjema", title: "Ny sak", body: "Input kommer inn" },
      { label: "CRM", title: "Lead opprettes", body: "Data struktureres" },
      { label: "Oppgave", title: "Varsel + dokument", body: "Riktig person følger opp" },
    ],
    chips: ["CRM", "Oppgave", "Varsel", "Dokument"],
  },
  custom: {
    eyebrow: "Kartlegg",
    title: "Skreddersydd pilot",
    icon: ShieldCheck,
    panels: [
      { label: "Kartlegg", title: "Prosesskart", body: "Mennesker, systemer og data" },
      { label: "Pilot", title: "Test med teamet", body: "Avgrenset og målbart" },
      { label: "Godkjenn", title: "Forbedre", body: "Utvid når det fungerer" },
    ],
    chips: ["Kartlegg", "Pilot", "Godkjenn", "Forbedre"],
  },
  mapping: {
    eyebrow: "AI-kartlegging",
    title: "Hva dere får ut",
    icon: ClipboardCheck,
    panels: [
      { label: "Tidstyv", title: "Hvor tiden forsvinner", body: "Manuelle steg og venting" },
      { label: "Første pilot", title: "Anbefalt start", body: "Lav risiko, tydelig verdi" },
      { label: "Kontroll", title: "Godkjenningspunkt", body: "Data, risiko og neste steg" },
    ],
    chips: ["Anbefalt første pilot", "Risiko", "Avgrensning", "Neste steg"],
  },
  bottleneck: {
    eyebrow: "Tidstyv",
    title: "Flaskehals til flyt",
    icon: Mail,
    panels: [
      { label: "Input", title: "E-post, skjema, notat", body: "Ulikt format hver gang" },
      { label: "AI-utkast", title: "Struktur og forslag", body: "Klart for vurdering" },
      { label: "Kontroll", title: "Menneske godkjenner", body: "Sendes eller forbedres" },
    ],
    chips: ["Input", "AI-assistert utkast", "Menneskelig kontroll"],
  },
};

export function WorkflowVisual({
  variant,
  compact = false,
}: {
  variant: WorkflowVisualVariant;
  compact?: boolean;
}) {
  const spec = visualSpecs[variant];
  const Icon = spec.icon;

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] text-[#0f2d42] shadow-[0_18px_50px_rgba(15,45,66,0.08)] ${
        compact ? "p-4" : "p-5 sm:p-6"
      }`}
      aria-label={spec.title}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(201,87,32,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(239,232,223,0.38))]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 border-b border-[#dfd0c2] pb-4">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#c95720]">
              {spec.eyebrow}
            </p>
            <h3 className={`${compact ? "text-base" : "text-xl"} mt-1 font-bold text-[#0b3048]`}>
              {spec.title}
            </h3>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0f2d42] text-white">
            <Icon className="h-5 w-5" />
          </span>
        </div>

        <div className={`${compact ? "mt-4 gap-3" : "mt-5 gap-4"} grid`}>
          {spec.panels.map((panel, index) => (
            <div
              key={panel.label}
              className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-md border border-[#dfd0c2] bg-white/62 p-3"
            >
              <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#0f2d42] text-xs font-bold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[#c95720]">
                  {panel.label}
                </p>
                <p className="mt-1 text-sm font-bold leading-5 text-[#0b3048]">{panel.title}</p>
                <p className="mt-1 text-xs leading-5 text-[#24465a]">{panel.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {spec.chips.map((chip, index) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1 rounded-full border border-[#d8c7b8] bg-[#fffaf4]/80 px-3 py-1 text-[0.68rem] font-bold text-[#24465a]"
            >
              {index === spec.chips.length - 1 ? (
                <CheckCircle2 className="h-3 w-3 text-[#c95720]" />
              ) : null}
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ThreeStepProof({
  input,
  output,
  control,
}: {
  input: string;
  output: string;
  control: string;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
      {[
        ["Input", input],
        ["AI-assistert utkast", output],
        ["Menneskelig kontroll", control],
      ].map(([label, body], index) => (
        <div key={label} className="contents">
          <div className="rounded-lg border border-[#dfd0c2] bg-white/58 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#c95720]">{label}</p>
            <p className="mt-2 text-sm leading-6 text-[#24465a]">{body}</p>
          </div>
          {index < 2 ? (
            <div className="hidden items-center px-1 text-[#c95720] md:flex">
              <ArrowRight className="h-5 w-5" />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
