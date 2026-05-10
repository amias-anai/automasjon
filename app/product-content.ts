import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  Cable,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  DatabaseZap,
  FileSearch,
  FolderSearch,
  LineChart,
  MailCheck,
  MessageCircle,
  Network,
  PenLine,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

type Metric = {
  value: string;
  label: string;
};

type IconCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

type Example = {
  label: string;
  title: string;
  body: string;
};

type MiniExample = {
  title: string;
  input: string;
  output: string;
  control: string;
};

type ConcreteExample = {
  eyebrow: string;
  title: string;
  scenario: string;
  steps: {
    label: string;
    body: string;
  }[];
  note: string;
};

type Faq = {
  question: string;
  answer: string;
};

export type ProductPageContent = {
  slug: string;
  navTitle: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  heroIcon: LucideIcon;
  metrics: Metric[];
  controlNote: string;
  challenge: string;
  solution: string;
  valueCards: IconCard[];
  process: ProcessStep[];
  miniExample: MiniExample;
  concreteExample: ConcreteExample;
  examples: Example[];
  safety: string;
  flow: string[];
  faqs: Faq[];
  ctaTitle: string;
  ctaBody: string;
  metadata: {
    title: string;
    description: string;
  };
};

const standardProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Kartlegg arbeidsflyten",
    body: "Vi ser på dagens rutiner, systemer, datakilder og beslutninger før vi anbefaler hva AI bør hjelpe med.",
  },
  {
    number: "02",
    title: "Velg trygg start",
    body: "Vi prioriterer én avgrenset arbeidsflyt med tydelig verdi, lav risiko og klare regler for godkjenning.",
  },
  {
    number: "03",
    title: "Bygg og test",
    body: "Løsningen utvikles med ekte eksempler, testes med teamet og justeres før den tas i bruk.",
  },
  {
    number: "04",
    title: "Mål og forbedre",
    body: "Vi følger opp kvalitet, tidsbruk og bruksmønster slik at løsningen blir bedre over tid.",
  },
];

const standardFaqs: Faq[] = [
  {
    question: "Hvor raskt kan vi starte?",
    answer: "Vanligvis starter vi med en kort kartlegging og en avgrenset pilot. Målet er å finne én konkret arbeidsflyt som kan testes uten store systemendringer.",
  },
  {
    question: "Må vi bytte systemer?",
    answer: "Som regel ikke. Vi bygger rundt verktøyene dere allerede bruker, og kobler til e-post, CRM, dokumenter eller andre systemer der det gir mening.",
  },
  {
    question: "Kan mennesker godkjenne før noe sendes?",
    answer: "Ja. For kundedialog, viktige beslutninger og sensitive prosesser legger vi opp til menneskelig godkjenning før noe sendes eller brukes videre.",
  },
  {
    question: "Hvordan håndterer dere personvern?",
    answer: "Vi starter med dataminimering, begrensede tilganger og tydelige rammer. Personvern og GDPR vurderes som en del av løsningen, ikke som en ettertanke.",
  },
];

export const productPages: Record<string, ProductPageContent> = {
  "kundehenvendelser-og-oppfolging": {
    slug: "kundehenvendelser-og-oppfolging",
    navTitle: "Kundehenvendelser og oppfølging",
    eyebrow: "Kundehenvendelser og oppfølging",
    title: "Raskere svar uten at kvaliteten glipper",
    intro:
      "ANAi hjelper dere å sortere henvendelser, lage svarutkast, oppsummere kundedialog og foreslå neste steg, slik at teamet følger opp raskere og mer konsistent.",
    heroImage: "/landing/hero-customer-inquiries-workflow.svg",
    heroAlt: "Kundehenvendelse gjort om til sammendrag, svarutkast og godkjenning",
    heroIcon: MessageCircle,
    metrics: [
      { value: "Raskere", label: "førsteutkast til svar" },
      { value: "Færre", label: "saker som faller mellom stolene" },
      { value: "Kontroll", label: "mennesker godkjenner før sending" },
    ],
    controlNote:
      "AI-en kan foreslå svar og neste steg, men teamet bestemmer hva som sendes til kunder og samarbeidspartnere.",
    challenge:
      "Kundehenvendelser kommer ofte inn via e-post, skjema, telefonnotater og chat. Det gjør det lett å miste kontekst, svare ulikt eller bruke tid på å skrive samme type svar på nytt.",
    solution:
      "Vi lager en kontrollert AI-flyt som sorterer, oppsummerer og lager forslag basert på deres tone, rutiner og tilgjengelig informasjon. Mennesker beholder ansvar for vurdering og utsending.",
    valueCards: [
      { title: "Svarutkast", body: "Lag gode førsteutkast basert på kundens behov, historikk og deres foretrukne tone.", icon: PenLine },
      { title: "Prioritering", body: "Henvendelser kan sorteres etter type, verdi, hastegrad eller hvem som bør følge opp.", icon: Target },
      { title: "Oppsummering", body: "Lange tråder blir til korte sammendrag med behov, avtaler og neste steg.", icon: FileSearch },
      { title: "Sporbarhet", body: "Viktige forslag og beslutninger kan logges slik at teamet vet hva som er gjort.", icon: ClipboardCheck },
    ],
    process: standardProcess,
    miniExample: {
      title: "Henvendelse → svarutkast + oppfølgingsspørsmål",
      input: "En kunde sender en e-post eller et skjema med behov, spørsmål og litt ustrukturert kontekst.",
      output: "AI foreslår et kort sammendrag, et svarutkast i deres tone og relevante spørsmål før saken følges opp.",
      control: "Teamet redigerer, vurderer fakta og godkjenner før svaret sendes til kunden.",
    },
    concreteExample: {
      eyebrow: "Eksempel på kundedialog",
      title: "Fra rotete henvendelse til klart svarutkast",
      scenario:
        "En kunde spør om dere kan levere før fredag, om produktet passer et bestemt behov og om dokumentasjon kan sendes sammen med tilbudet.",
      steps: [
        { label: "AI-sammendrag", body: "Kunden trenger rask levering, teknisk avklaring og dokumentasjon før de kan ta beslutning." },
        { label: "Foreslått neste steg", body: "Sjekk lager/kapasitet, bekreft egnethet med fagansvarlig og legg ved relevant PDF." },
        { label: "Svarutkast", body: "Takk for henvendelsen. Vi sjekker levering før fredag nå, og sender dokumentasjon sammen med en anbefaling." },
      ],
      note: "Teamet kvalitetssikrer fakta, justerer tonen og sender først når svaret er godkjent.",
    },
    examples: [
      { label: "E-post", title: "Svarutkast på vanlige spørsmål", body: "AI foreslår svar på pris, levering, booking, status eller dokumentasjon." },
      { label: "Salg", title: "Leads som trenger oppfølging", body: "Nye henvendelser kan oppsummeres og sendes til riktig person med anbefalt neste steg." },
      { label: "Support", title: "Ryddig eskalering", body: "Usikre saker sendes videre med historikk, kundebehov og relevant intern informasjon." },
    ],
    safety:
      "Løsningen settes opp med tydelige grenser for hva AI kan foreslå, hvilke data den får bruke og når et menneske må godkjenne. AI-en skal hjelpe teamet å svare bedre, ikke overta ansvaret for kundedialogen.",
    flow: ["Henvendelse kommer inn", "AI sorterer og oppsummerer", "Svarutkast og neste steg foreslås", "Menneske godkjenner"],
    faqs: standardFaqs,
    ctaTitle: "Vil dere følge opp kunder raskere?",
    ctaBody:
      "Book en gratis AI-kartlegging, så finner vi hvilke henvendelser og oppfølgingsrutiner som kan forbedres først.",
    metadata: {
      title: "Kundehenvendelser og oppfølging | ANAi",
      description:
        "ANAi hjelper norske bedrifter med AI-assistert kundedialog, svarutkast, oppsummering og trygg oppfølging.",
    },
  },
  "saksbehandling": {
    slug: "saksbehandling",
    navTitle: "Saksbehandling",
    eyebrow: "Saksbehandling",
    title: "Ryddigere saker fra første henvendelse til neste steg",
    intro:
      "ANAi hjelper team med å klassifisere saker, hente frem relevant kontekst, lage saksnotater og foreslå oppfølging med tydelig menneskelig kontroll.",
    heroImage: "/landing/hero-customer-inquiries-workflow.svg",
    heroAlt: "Kundehenvendelse klassifisert til sak, svarutkast, CRM-forslag og godkjenning",
    heroIcon: ClipboardCheck,
    metrics: [
      { value: "Raskere", label: "første vurdering av saken" },
      { value: "Bedre", label: "struktur i saksnotater" },
      { value: "Trygt", label: "ansvarlig person godkjenner" },
    ],
    controlNote:
      "AI-en kan sortere, oppsummere og foreslå neste steg, men ansvarlig person vurderer saken før det tas beslutninger eller sendes svar.",
    challenge:
      "Saker starter ofte som e-post, skjema, telefonnotat eller intern beskjed. Informasjon må tolkes, sjekkes mot rutiner og følges opp i riktig system, noe som lett blir ujevnt og tidkrevende.",
    solution:
      "Vi lager en kontrollert saksflyt som klassifiserer innholdet, trekker ut nøkkelinfo, finner relevante kilder og lager et første saksnotat eller svarutkast. Mennesker beholder ansvar for vurdering og godkjenning.",
    valueCards: [
      { title: "Klassifisering", body: "Henvendelser kan sorteres etter type, hastegrad, risiko eller ansvarlig team.", icon: SearchCheck },
      { title: "Saksnotat", body: "AI kan oppsummere historikk, behov, manglende informasjon og foreslått neste steg.", icon: ClipboardCheck },
      { title: "Kontekst", body: "Relevante rutiner, tidligere saker eller dokumenter kan hentes frem som beslutningsstøtte.", icon: FolderSearch },
      { title: "Godkjenning", body: "Viktige steg stoppes for manuell vurdering før svar, oppdatering eller eskalering.", icon: ShieldCheck },
    ],
    process: standardProcess,
    miniExample: {
      title: "Henvendelse → saksnotat + neste steg",
      input: "En innkommende e-post eller et skjema med behov, spørsmål, vedlegg og ustrukturert kontekst.",
      output: "AI foreslår sakstype, sammendrag, manglende informasjon, relevante kilder og et første svarutkast.",
      control: "Saksbehandler vurderer fakta, justerer teksten og godkjenner neste steg før kunden eller systemet oppdateres.",
    },
    concreteExample: {
      eyebrow: "Eksempel på saksflyt",
      title: "Fra innkommende henvendelse til ryddig saksgrunnlag",
      scenario:
        "En kunde sender en henvendelse med et problem, tidligere dialog og et vedlegg. Teamet må forstå saken, finne riktig rutine og svare uten å miste oppfølging.",
      steps: [
        { label: "Klassifiser", body: "AI foreslår sakstype, hastegrad og hvilket team som bør eie oppfølgingen." },
        { label: "Saksgrunnlag", body: "Relevant kontekst, tidligere dialog og manglende informasjon samles i et kort notat." },
        { label: "Neste steg", body: "Svarutkast, CRM-oppdatering og oppfølging foreslås for menneskelig godkjenning." },
      ],
      note: "Saksbehandleren beholder ansvaret og kan stoppe, endre eller sende saken videre når noe er uklart.",
    },
    examples: [
      { label: "Kunde", title: "Henvendelse til sak", body: "E-post og skjema kan bli til strukturert saksgrunnlag med foreslått oppfølging." },
      { label: "Internt", title: "Ruting til riktig person", body: "Saker kan sorteres og sendes videre med kontekst i stedet for bare videresendt tekst." },
      { label: "Kvalitet", title: "Færre glemte steg", body: "Oppgaver, frister og oppfølging kan foreslås før saken lukkes." },
    ],
    safety:
      "Saksbehandling kan inneholde persondata og vurderinger som krever kontroll. Vi starter med avgrensede sakstyper, dataminimering og tydelige godkjenningspunkter.",
    flow: ["Sak kommer inn", "AI klassifiserer og oppsummerer", "Kilder og neste steg foreslås", "Saksbehandler godkjenner"],
    faqs: standardFaqs,
    ctaTitle: "Vil dere behandle saker mer strukturert?",
    ctaBody:
      "Book en kartlegging, så finner vi hvilke sakstyper som egner seg best for en trygg første AI-støttet flyt.",
    metadata: {
      title: "Saksbehandling | ANAi",
      description:
        "AI-støttet saksbehandling for norske bedrifter med klassifisering, saksnotater, svarutkast og menneskelig godkjenning.",
    },
  },
  "administrasjon-og-dokumentasjon": {
    slug: "administrasjon-og-dokumentasjon",
    navTitle: "Administrasjon og dokumentasjon",
    eyebrow: "Administrasjon og dokumentasjon",
    title: "Gjør løse notater om til ryddig arbeid",
    intro:
      "Vi bygger AI-flyter som gjør notater, skjemaer, møtereferater og beskjeder om til strukturerte utkast, sjekklister, rapporter og oppgaver.",
    heroImage: "/landing/hero-admin-documentation-workflow.svg",
    heroAlt: "Notater og skjemaer strukturert til rapport, sjekkliste og oppgaver",
    heroIcon: FileSearch,
    metrics: [
      { value: "Mindre", label: "manuelt skrivearbeid" },
      { value: "Bedre", label: "struktur i dokumentasjon" },
      { value: "Trygt", label: "forslag før godkjenning" },
    ],
    controlNote:
      "AI-en lager utkast og strukturerer informasjon. Mennesker kvalitetssikrer før dokumentasjon brukes eller deles.",
    challenge:
      "Mye administrativt arbeid består av små, gjentakende oppgaver: renskriving, oppsummering, utfylling, rapportering og oppgavefordeling. Det tar tid og skaper variasjon i kvalitet.",
    solution:
      "Vi bygger arbeidsflyter som tar råmaterialet dere allerede har og gjør det om til nyttige utkast. Løsningen følger deres maler, begreper og godkjenningsrutiner.",
    valueCards: [
      { title: "Referater", body: "Møtenotater og lydnære notater kan bli til korte referater og oppfølgingspunkter.", icon: ClipboardCheck },
      { title: "Rapporter", body: "Ustrukturert informasjon kan samles i faste rapportmaler med tydelig språk.", icon: LineChart },
      { title: "Sjekklister", body: "Rutineoppgaver kan gjøres om til sjekklister og interne oppgaver.", icon: CheckCircle2 },
      { title: "Dokumentflyt", body: "Dokumenter kan klassifiseres, oppsummeres og rutes til riktig person.", icon: Route },
    ],
    process: standardProcess,
    miniExample: {
      title: "Møtenotater/prosjektnotater → oppgaver + kundeoppdatering",
      input: "Løse notater fra et internt møte, prosjektmøte eller kundemøte.",
      output: "AI strukturerer beslutninger, ansvarlige, frister og et kort utkast til kundeoppdatering.",
      control: "Ansvarlig person kontrollerer innholdet, justerer formuleringer og avgjør hva som deles.",
    },
    concreteExample: {
      eyebrow: "Eksempel på administrasjon",
      title: "Fra møtenotater til oppgaver og kort rapport",
      scenario:
        "Et prosjektmøte ender med korte notater: leverandør må purres, kunden skal få status, og intern frist flyttes til tirsdag.",
      steps: [
        { label: "Oppgaveliste", body: "Purre leverandør, oppdatere kunde, flytte intern frist og registrere hvem som eier hvert punkt." },
        { label: "Rapportutkast", body: "Prosjektet er i rute, men avventer leverandøravklaring. Neste oppdatering sendes etter intern frist tirsdag." },
        { label: "Kontrollpunkt", body: "Prosjektansvarlig bekrefter frister, ansvarlige og hvilke formuleringer som kan deles med kunden." },
      ],
      note: "Eksempelet viser strukturering av lavrisiko notater, ikke automatisk beslutningstaking.",
    },
    examples: [
      { label: "Møter", title: "Fra notat til oppgaveliste", body: "AI trekker ut beslutninger, frister og ansvarlige fra uferdige notater." },
      { label: "Skjema", title: "Standardiserte utkast", body: "Skjemasvar og løse beskrivelser blir til ryddige interne dokumenter." },
      { label: "Ledelse", title: "Statusrapportering", body: "Ukentlige statuspunkter samles til rapporter som er klare for gjennomgang." },
    ],
    safety:
      "Administrative AI-flyter bør starte med ikke-sensitive eller lavrisiko dokumenter. Der innholdet påvirker kunder, økonomi eller ansatte, legger vi inn godkjenning og tydelige revisjonsspor.",
    flow: ["Notater eller dokumenter samles", "AI strukturerer innholdet", "Utkast lages i riktig format", "Teamet kontrollerer og bruker"],
    faqs: standardFaqs,
    ctaTitle: "Vil dere bruke mindre tid på dokumentasjon?",
    ctaBody:
      "Vi kan kartlegge hvilke notater, skjemaer og rapporter som egner seg best for en trygg første AI-flyt.",
    metadata: {
      title: "Administrasjon og dokumentasjon | ANAi",
      description:
        "Praktiske AI-løsninger for administrasjon, dokumentasjon, møtereferater, sjekklister og rapporter.",
    },
  },
  "okonomi-og-regnskap": {
    slug: "okonomi-og-regnskap",
    navTitle: "Økonomi og regnskap",
    eyebrow: "Økonomi og regnskap",
    title: "Mindre manuelt arbeid rundt bilag, avvik og rapportering",
    intro:
      "ANAi hjelper økonomi- og administrasjonsteam med å strukturere bilag, oppsummere avvik, forberede purringer og lage rapportutkast med kontroll før noe sendes eller bokføres.",
    heroImage: "/landing/hero-admin-documentation-workflow.svg",
    heroAlt: "Økonomidokumenter strukturert til avvik, sjekkliste, rapport og godkjenning",
    heroIcon: LineChart,
    metrics: [
      { value: "Mindre", label: "kopiering mellom systemer" },
      { value: "Bedre", label: "oversikt over avvik" },
      { value: "Kontroll", label: "før utsending og bokføring" },
    ],
    controlNote:
      "AI kan foreslå struktur, tekst og neste steg, men økonomiske handlinger, bokføring og utsendinger skal godkjennes av mennesker.",
    challenge:
      "Økonomiarbeid inneholder mange små manuelle steg: hente informasjon fra e-post og vedlegg, sjekke avvik, skrive purringer, oppdatere regneark og lage statusrapporter.",
    solution:
      "Vi bygger AI-støttede arbeidsflyter som leser og strukturerer informasjon, flagger mangler og lager utkast til oppfølging eller rapportering. Flyten tilpasses økonomisystemer, rutiner og kontrollpunkter.",
    valueCards: [
      { title: "Bilagsflyt", body: "Vedlegg og e-post kan sorteres, oppsummeres og sendes til riktig kontrollpunkt.", icon: FileSearch },
      { title: "Avvik", body: "Manglende informasjon, uvanlige beløp eller uklare referanser kan flagges for manuell vurdering.", icon: SearchCheck },
      { title: "Purringer", body: "AI kan lage høflige utkast til oppfølging basert på status, historikk og tone.", icon: MailCheck },
      { title: "Rapportutkast", body: "Uke- eller månedsstatus kan samles til et tydelig utkast før ledelsen bruker det.", icon: LineChart },
    ],
    process: standardProcess,
    miniExample: {
      title: "Bilag/e-post → avvik + oppfølgingsutkast",
      input: "En e-post med fakturavedlegg, manglende referanse eller spørsmål fra kunde/leverandør.",
      output: "AI trekker ut nøkkelinfo, foreslår kategori, flagger mangler og lager utkast til oppfølging.",
      control: "Økonomiansvarlig kontrollerer beløp, referanser, mottaker og formulering før noe sendes eller føres.",
    },
    concreteExample: {
      eyebrow: "Eksempel på økonomiflyt",
      title: "Fra fakturae-post til kontrollert oppfølging",
      scenario:
        "En leverandør sender faktura med vedlegg, men referansen mangler og beløpet må sjekkes mot avtalt ordre.",
      steps: [
        { label: "Trekk ut", body: "AI finner leverandør, beløp, dato, vedlegg og hvilke felt som mangler." },
        { label: "Flagg avvik", body: "Manglende referanse og behov for ordresjekk markeres for ansvarlig person." },
        { label: "Utkast", body: "Et kort oppfølgingsutkast lages, men sendes først etter manuell godkjenning." },
      ],
      note: "Flyten er ment som støtte rundt struktur og oppfølging, ikke som automatisk økonomisk beslutning.",
    },
    examples: [
      { label: "Bilag", title: "Sortering av vedlegg", body: "E-post og dokumenter kan klassifiseres før de sendes til riktig kontroll." },
      { label: "Avvik", title: "Mangler flagges tidlig", body: "AI kan foreslå hva som mangler før noen bruker tid på å lete manuelt." },
      { label: "Rapport", title: "Status til ledelse", body: "Tall og kommentarer kan samles i rapportutkast som kvalitetssikres." },
    ],
    safety:
      "Økonomi krever ekstra tydelige rammer. Vi legger opp til lavrisiko piloter, begrenset datatilgang og menneskelig godkjenning før utsending, bokføring eller beslutninger.",
    flow: ["Dokument eller e-post kommer inn", "AI trekker ut nøkkelinfo", "Avvik og neste steg foreslås", "Økonomiansvarlig godkjenner"],
    faqs: standardFaqs,
    ctaTitle: "Vil dere redusere manuelt økonomiarbeid?",
    ctaBody:
      "Book en kartlegging, så finner vi en lavrisiko økonomiflyt der AI kan spare tid uten å gi fra seg kontroll.",
    metadata: {
      title: "Økonomi og regnskap | ANAi",
      description:
        "AI-støttede arbeidsflyter for bilag, avvik, purring og økonomirapportering med menneskelig kontroll.",
    },
  },
  "salg-tilbud-og-rapportering": {
    slug: "salg-tilbud-og-rapportering",
    navTitle: "Salg, tilbud og rapportering",
    eyebrow: "Salg, tilbud og rapportering",
    title: "Bedre oppfølging fra første kontakt til rapport",
    intro:
      "ANAi hjelper salgs- og driftsteam med tilbudsutkast, CRM-notater, oppfølginger, statusoppdateringer og rapporter som gir bedre oversikt.",
    heroImage: "/landing/hero-sales-offers-reporting-workflow.svg",
    heroAlt: "Befaringsnotater gjort om til tilbudsutkast, CRM-notat og oppfølging",
    heroIcon: Bot,
    metrics: [
      { value: "Bedre", label: "oppfølging av kunder" },
      { value: "Mer", label: "struktur i CRM og rapporter" },
      { value: "Kortere", label: "vei fra møte til neste steg" },
    ],
    controlNote:
      "AI kan foreslå formuleringer, prioriteringer og rapporttekst, men kommersielle vurderinger og kundeutsendinger godkjennes av teamet.",
    challenge:
      "Salg og rapportering stopper ofte opp fordi informasjon ligger spredt i møter, e-post, CRM og notater. Teamet mister tid på oppsummering og risikerer ujevn oppfølging.",
    solution:
      "Vi setter opp AI-flyter som samler kontekst, lager førsteutkast og foreslår neste steg. Løsningen støtter salgsteamet uten å fjerne den menneskelige vurderingen.",
    valueCards: [
      { title: "Tilbudsutkast", body: "Lag førsteutkast basert på kundebehov, tidligere maler og avtalt omfang.", icon: PenLine },
      { title: "CRM-notater", body: "Møter og dialog blir til ryddige notater, status og neste aktivitet.", icon: DatabaseZap },
      { title: "Oppfølging", body: "AI foreslår hvem som bør følges opp, hva som bør sies og når det bør skje.", icon: MailCheck },
      { title: "Rapporter", body: "Salgs- og aktivitetsdata kan bli til korte rapporter for ledelsen.", icon: LineChart },
    ],
    process: standardProcess,
    miniExample: {
      title: "Lead/kundemøte → oppfølgingsutkast + CRM-notat",
      input: "Et nytt lead, møtepunkt eller en oppsummering fra kundedialog.",
      output: "AI lager forslag til oppfølgingsmelding, neste steg og et strukturert CRM-notat.",
      control: "Salgsansvarlig kvalitetssikrer behov, pris, løfter og timing før noe sendes eller registreres.",
    },
    concreteExample: {
      eyebrow: "Eksempel på salgsflyt",
      title: "Fra kundemøte til CRM-notat og oppfølging",
      scenario:
        "Et salgsmøte gir flere løse punkter: kunden ønsker pilot, må avklare budsjett internt og vil ha forslag før neste ledermøte.",
      steps: [
        { label: "CRM-notat", body: "Behov: pilot på dokumentflyt. Hindring: budsjettavklaring. Neste steg: sende kort forslag innen torsdag." },
        { label: "Oppfølgingsutkast", body: "Hyggelig å snakke med dere. Her er et kort forslag til pilot, avgrensning og hva vi trenger for å starte." },
        { label: "Salgsaktivitet", body: "Opprett oppgave: følg opp to dager etter ledermøtet hvis kunden ikke har svart." },
      ],
      note: "Priser, løfter og kommersielle vurderinger kontrolleres av salgsansvarlig før noe sendes.",
    },
    examples: [
      { label: "Tilbud", title: "Førsteutkast med riktig struktur", body: "Teamet får et utkast de kan redigere, kvalitetssikre og sende." },
      { label: "CRM", title: "Mindre friksjon etter møter", body: "Notater, neste steg og oppgaver kan opprettes raskere etter kundemøter." },
      { label: "Ledelse", title: "Status med mindre manuelt arbeid", body: "Ukentlig salgsstatus kan hentes fra eksisterende systemer og gjøres lesbar." },
    ],
    safety:
      "Vi designer løsningen slik at den gir beslutningsstøtte og utkast, ikke automatiske løfter til kunder. Viktige tilbud, priser og eksterne meldinger bør alltid kontrolleres.",
    flow: ["Møte, e-post eller CRM-data", "AI oppsummerer behov", "Utkast og neste steg foreslås", "Ansvarlig person godkjenner"],
    faqs: standardFaqs,
    ctaTitle: "Vil dere få bedre flyt i salg og rapportering?",
    ctaBody:
      "Book en kartlegging, så finner vi de salgs- og rapporteringsoppgavene hvor AI kan gi raskest praktisk nytte.",
    metadata: {
      title: "Salg, tilbud og rapportering | ANAi",
      description:
        "AI-assisterte arbeidsflyter for salg, tilbud, CRM-notater, oppfølging og rapportering.",
    },
  },
  "intern-kunnskap": {
    slug: "intern-kunnskap",
    navTitle: "Intern kunnskap",
    eyebrow: "Intern kunnskap",
    title: "Gjør kunnskapen i bedriften enklere å bruke",
    intro:
      "Vi bygger AI-assistenter som hjelper ansatte å finne rutiner, maler, svar, dokumenter og erfaringer uten å avbryte nøkkelpersoner.",
    heroImage: "/landing/hero-internal-knowledge-workflow.svg",
    heroAlt: "Intern kunnskapssøk med svar og synlige kilder fra rutiner og dokumenter",
    heroIcon: FolderSearch,
    metrics: [
      { value: "Raskere", label: "svar på interne spørsmål" },
      { value: "Mindre", label: "avhengighet av nøkkelpersoner" },
      { value: "Bedre", label: "gjenbruk av dokumenter og rutiner" },
    ],
    controlNote:
      "Assistenten viser kilder og forslag, slik at ansatte kan kontrollere svaret før de bruker informasjonen videre.",
    challenge:
      "Intern kunnskap ligger ofte spredt i dokumenter, e-post, mapper, chat og hos erfarne ansatte. Det gjør onboarding tregere og fører til at samme spørsmål stilles om igjen.",
    solution:
      "Vi lager en intern AI-assistent som finner relevant informasjon, oppsummerer den og peker til kildene. Den bygges rundt deres dokumenter, rutiner og tilgangsnivåer.",
    valueCards: [
      { title: "Kunnskapssøk", body: "Finn riktige dokumenter, maler og rutiner raskere med naturlige spørsmål.", icon: SearchCheck },
      { title: "Kildevisning", body: "Svar kan vise hvor informasjonen kommer fra, slik at ansatte kan kontrollere grunnlaget.", icon: FileSearch },
      { title: "Onboarding", body: "Nye ansatte kan få svar på vanlige spørsmål uten å belaste nøkkelpersoner.", icon: Users },
      { title: "Rutiner", body: "Interne prosesser kan forklares i klare steg basert på oppdatert dokumentasjon.", icon: Workflow },
    ],
    process: standardProcess,
    miniExample: {
      title: "Rutiner/FAQ/dokumenter → intern kunnskapsassistent med kilder",
      input: "Interne rutiner, FAQ-er, maler og dokumenter som ansatte ofte leter etter.",
      output: "AI svarer på interne spørsmål med henvisning til relevante kilder og dokumenter.",
      control: "Ansatte ser kildene, vurderer om svaret passer situasjonen og bruker etablerte rutiner ved tvil.",
    },
    concreteExample: {
      eyebrow: "Eksempel på intern kunnskap",
      title: "Fra ansattspørsmål til svar med kilde",
      scenario:
        "En ny ansatt spør: Hvordan skal reiseregning leveres, og hvilken mal brukes når kunden ber om prosjektstatus?",
      steps: [
        { label: "Svar", body: "Reiseregning leveres innen den 5. hver måned. Prosjektstatus skal bruke malen for kundeoppdatering." },
        { label: "Kilder", body: "Personalhåndbok kapittel 4.2 og dokumentet Kundeoppdatering mal v3." },
        { label: "Usikkerhet", body: "Hvis reisen gjelder utland eller prosjektet har egen rapportmal, bør nærmeste leder bekrefte." },
      ],
      note: "Assistenten viser grunnlaget, slik at ansatte kan kontrollere svaret før de bruker det.",
    },
    examples: [
      { label: "HR", title: "Svar på rutiner og policy", body: "Ansatte kan spørre om ferie, reiseregninger, onboarding eller interne regler." },
      { label: "Drift", title: "Finn riktig prosess", body: "Teamet kan få steg-for-steg hjelp basert på egne prosedyrer og maler." },
      { label: "Ledelse", title: "Mindre kunnskapstap", body: "Viktig informasjon blir enklere å finne selv når folk bytter rolle." },
    ],
    safety:
      "Tilganger er ekstra viktige for intern kunnskap. Vi avgrenser hvilke dokumenter assistenten kan bruke, og legger opp til kildevisning og tydelig usikkerhet når svaret ikke er sikkert.",
    flow: ["Dokumenter og rutiner samles", "Tilganger og kilder avklares", "Assistenten svarer med kilde", "Ansatt vurderer og bruker svaret"],
    faqs: standardFaqs,
    ctaTitle: "Vil dere gjøre intern kunnskap mer tilgjengelig?",
    ctaBody:
      "Vi kan starte med én dokumentgruppe eller én avdeling og vise hvordan en trygg intern AI-assistent kan fungere.",
    metadata: {
      title: "Intern kunnskap | ANAi",
      description:
        "AI-assistenter for intern kunnskap, rutiner, dokumenter, onboarding og bedre informasjonsflyt.",
    },
  },
  "ai-opplaering": {
    slug: "ai-opplaering",
    navTitle: "AI-opplæring",
    eyebrow: "AI-opplæring",
    title: "Gjør teamet tryggere på praktisk AI-bruk",
    intro:
      "ANAi lærer ansatte å bruke Copilot, ChatGPT og andre AI-verktøy på en måte som passer arbeidsoppgavene, dataene og kontrollbehovet i bedriften.",
    heroImage: "/landing/hero-how-it-works.svg",
    heroAlt: "Opplæringsflyt for trygg bruk av AI i eksisterende arbeidsprosesser",
    heroIcon: Users,
    metrics: [
      { value: "Tryggere", label: "bruk av AI-verktøy" },
      { value: "Likere", label: "praksis på tvers av team" },
      { value: "Mer", label: "nytte i hverdagsoppgaver" },
    ],
    controlNote:
      "Opplæringen handler ikke bare om prompts. Teamet lærer hvilke data som kan brukes, når AI bør stoppes og hvordan forslag kvalitetssikres.",
    challenge:
      "Mange ansatte prøver AI på egen hånd, men uten felles rammer blir bruken ujevn. Noen deler for mye data, noen får lite verdi, og mange vet ikke når AI-resultater må kontrolleres.",
    solution:
      "Vi lager praktisk opplæring rundt deres faktiske arbeidsoppgaver. Teamet får eksempler, retningslinjer og en enkel måte å vurdere risiko, kvalitet og riktig verktøyvalg på.",
    valueCards: [
      { title: "Praktiske øvelser", body: "Opplæringen tar utgangspunkt i reelle oppgaver, ikke generelle AI-foredrag.", icon: PenLine },
      { title: "Verktøyvalg", body: "Teamet lærer når Copilot, ChatGPT, Gemini, automasjon eller en intern løsning passer best.", icon: BrainCircuit },
      { title: "Databevissthet", body: "Ansatte får tydelige rammer for persondata, bedriftsdata og kildekritikk.", icon: ShieldCheck },
      { title: "Felles praksis", body: "Vi hjelper dere å lage enkle regler for hvordan AI skal brukes i hverdagen.", icon: ClipboardCheck },
    ],
    process: standardProcess,
    miniExample: {
      title: "Arbeidsoppgave → trygg AI-praksis",
      input: "En konkret oppgave teamet gjør ofte: skrive svar, oppsummere dokumenter, lage rapport eller forberede møte.",
      output: "Ansatte lærer en trygg arbeidsmåte med riktig prompt, kildekontroll, datagrense og godkjenning.",
      control: "Teamet får sjekklister for når AI-resultater kan brukes, må endres eller må stoppes.",
    },
    concreteExample: {
      eyebrow: "Eksempel på opplæring",
      title: "Fra tilfeldig AI-bruk til felles arbeidsmåte",
      scenario:
        "Et team bruker Copilot og ChatGPT ulikt. Noen får gode resultater, andre stoler for mye på svarene, og ingen har en felles grense for bedriftsdata.",
      steps: [
        { label: "Kartlegg", body: "Vi finner oppgavene teamet faktisk vil bruke AI til og hvilke data som inngår." },
        { label: "Tren", body: "Teamet jobber med praktiske eksempler, kvalitetssjekk og trygg promptstruktur." },
        { label: "Rammer", body: "Dere får en enkel praksis for verktøyvalg, databruk, kontroll og videre forbedring." },
      ],
      note: "Målet er ikke at alle skal bli AI-eksperter, men at teamet bruker AI bedre og tryggere i hverdagen.",
    },
    examples: [
      { label: "Kontorarbeid", title: "Skrive og oppsummere bedre", body: "Praktisk bruk av AI til e-post, referater, rapporter og dokumentutkast." },
      { label: "Kundeservice", title: "Svarutkast med kontroll", body: "Hvordan ansatte kan få hjelp uten at AI bestemmer hva kunden får." },
      { label: "Ledelse", title: "Felles retningslinjer", body: "Enkle rammer for databruk, kvalitetssikring og ansvar." },
    ],
    safety:
      "God opplæring reduserer risiko. Vi gjør personvern, dataminimering, kildekritikk og menneskelig kontroll til en praktisk del av hverdagsbruken.",
    flow: ["Oppgaver kartlegges", "Trygge eksempler trenes", "Felles regler etableres", "Teamet forbedrer praksis"],
    faqs: standardFaqs,
    ctaTitle: "Vil dere bruke AI tryggere i teamet?",
    ctaBody:
      "Book en kartlegging, så finner vi hvilke team, verktøy og arbeidsoppgaver som bør prioriteres i opplæringen.",
    metadata: {
      title: "AI-opplæring | ANAi",
      description:
        "Praktisk AI-opplæring for norske bedrifter som vil bruke Copilot, ChatGPT og andre AI-verktøy trygt og nyttig.",
    },
  },
  "ai-automatisering": {
    slug: "ai-automatisering",
    navTitle: "AI-automatisering",
    eyebrow: "AI-automatisering",
    title: "Koble sammen arbeidsflyter som i dag gjøres manuelt",
    intro:
      "Vi bygger kontrollerte automasjoner som flytter informasjon mellom systemer, lager oppgaver, sender varsler og gir teamet bedre flyt i hverdagen.",
    heroImage: "/landing/hero-ai-automation-workflow.svg",
    heroAlt: "Automatisert flyt mellom skjema, CRM, oppgave, varsel og dokumenter",
    heroIcon: Code2,
    metrics: [
      { value: "Timer", label: "spart på repeterende steg" },
      { value: "Færre", label: "manuelle overføringer" },
      { value: "Mer", label: "sporbar flyt mellom systemer" },
    ],
    controlNote:
      "Automasjoner kan begrenses til trygge handlinger, med varsler og godkjenning før kritiske steg gjennomføres.",
    challenge:
      "Mange bedrifter bruker tid på å kopiere informasjon mellom e-post, regneark, CRM, økonomisystemer og prosjektverktøy. Det skaper feil, ventetid og lite oversikt.",
    solution:
      "Vi designer automasjoner som kobler systemer og rutiner sammen. AI brukes der det trengs tolkning, oppsummering eller forslag, mens regler og godkjenninger holder flyten kontrollert.",
    valueCards: [
      { title: "Systemkoblinger", body: "Flytt informasjon mellom verktøy uten at ansatte må kopiere og lime.", icon: Cable },
      { title: "Varsler", body: "Riktig person får beskjed når noe må vurderes, godkjennes eller følges opp.", icon: MailCheck },
      { title: "Datarydding", body: "AI kan lese, strukturere og foreslå klassifisering av innkommende informasjon.", icon: DatabaseZap },
      { title: "Feilhåndtering", body: "Avvik kan stoppes, flagges og sendes til manuell kontroll.", icon: ShieldCheck },
    ],
    process: standardProcess,
    miniExample: {
      title: "Befaring/notater/skjema → strukturert oppgave, varsel eller tilbudsutkast",
      input: "Notater, bilder eller skjemasvar fra befaring, oppdrag eller innkommende forespørsel.",
      output: "AI strukturerer behov, lager oppgave eller varsel og kan foreslå et første tilbudsutkast.",
      control: "Riktig person kontrollerer fakta, omfang og pris før oppgaven lukkes eller tilbud sendes.",
    },
    concreteExample: {
      eyebrow: "Eksempel på automasjon",
      title: "Fra skjema til CRM, oppgave og varsel",
      scenario:
        "Et nettskjema kommer inn med kontaktinfo, behov, ønsket oppstart og vedlegg. I dag kopieres dette manuelt mellom flere systemer.",
      steps: [
        { label: "CRM", body: "Opprett lead med kontaktinfo, behovstype, ønsket frist og kort AI-sammendrag." },
        { label: "Oppgave", body: "Lag oppgave til riktig ansvarlig med frist og lenke til original henvendelse." },
        { label: "Varsel", body: "Send internt varsel når henvendelsen matcher høy prioritet eller mangler viktig informasjon." },
      ],
      note: "Automasjonen kan stoppe ved avvik, manglende samtykke eller uklart innhold.",
    },
    examples: [
      { label: "Salg", title: "Kontaktskjema til CRM", body: "Nye leads registreres, oppsummeres og varsles til riktig person." },
      { label: "Admin", title: "Dokumenter til riktig mappe", body: "Vedlegg kan klassifiseres, navngis og sendes til kontroll før arkivering." },
      { label: "Rapport", title: "Ukentlig status", body: "Data fra flere kilder kan samles til et rapportutkast for ledelsen." },
    ],
    safety:
      "Vi starter med lavrisiko flyter og tydelige stoppunkter. Når en automasjon møter usikkerhet, avvik eller sensitiv informasjon, skal den flagge saken i stedet for å gjette.",
    flow: ["Trigger i et kjent system", "AI tolker eller strukturerer", "Regler avgjør neste steg", "Varsel eller godkjenning"],
    faqs: standardFaqs,
    ctaTitle: "Hvilke manuelle steg kan automatiseres hos dere?",
    ctaBody:
      "Book en AI-kartlegging, så ser vi på systemene og rutinene deres og velger én trygg arbeidsflyt å starte med.",
    metadata: {
      title: "AI-automatisering | ANAi",
      description:
        "Kontrollerte AI-automatiseringer som kobler systemer, oppgaver, varsler og dokumentflyt for norske bedrifter.",
    },
  },
  "skreddersydde-ai-losninger": {
    slug: "skreddersydde-ai-losninger",
    navTitle: "Skreddersydde AI-løsninger",
    eyebrow: "Skreddersydde AI-løsninger",
    title: "AI-løsninger bygget rundt måten dere faktisk jobber på",
    intro:
      "Når standardverktøy ikke passer, utvikler vi praktiske AI-assistenter, automasjoner og kontrollerte agentflyter tilpasset deres prosesser.",
    heroImage: "/landing/hero-custom-ai-workflow.svg",
    heroAlt: "Skreddersydd AI-arbeidsflyt kartlagt fra prosess til kontrollert pilot",
    heroIcon: Sparkles,
    metrics: [
      { value: "Tilpasset", label: "deres rutiner og systemer" },
      { value: "Pilot", label: "før stor utrulling" },
      { value: "Kontroll", label: "tydelige rammer og logging" },
    ],
    controlNote:
      "Vi bygger løsninger med avgrenset tilgang, testdata der det passer og menneskelig godkjenning før viktige handlinger.",
    challenge:
      "Bedrifter har ofte arbeidsflyter som ikke passer inn i generiske AI-verktøy. Prosessene er spesifikke, dataene ligger flere steder, og teamet trenger løsninger som passer hverdagen.",
    solution:
      "Vi designer og utvikler AI-løsninger rundt deres faktiske prosesser. Det kan være assistenter, automasjoner, beslutningsstøtte eller agentflyter med klare grenser.",
    valueCards: [
      { title: "Behovsanalyse", body: "Vi finner hvor AI faktisk kan skape nytte, ikke bare hvor teknologien er spennende.", icon: BrainCircuit },
      { title: "Prototyping", body: "En konkret pilot gjør det mulig å teste verdi før større investeringer.", icon: Bot },
      { title: "Integrasjon", body: "Løsningen kan kobles mot dokumenter, CRM, e-post, skjemaer eller interne verktøy.", icon: Network },
      { title: "Adopsjon", body: "Vi hjelper teamet å forstå, bruke og forbedre løsningen over tid.", icon: Users },
    ],
    process: standardProcess,
    miniExample: {
      title: "Kartlegging → prototype → godkjenningsflyt",
      input: "Én valgt arbeidsflyt med dagens steg, eksempler på input og tydelige regler for hva AI ikke skal gjøre.",
      output: "En liten prototype som tolker input, lager forslag og sender viktige steg til godkjenning.",
      control: "Piloten testes med teamet, justeres på reelle eksempler og utvides først når kontrollpunktene fungerer.",
    },
    concreteExample: {
      eyebrow: "Eksempel på skreddersøm",
      title: "En tilpasset flyt fra behov til kontrollert pilot",
      scenario:
        "Teamet har en særskilt prosess der e-post, regneark og dokumenter må vurderes sammen før en anbefaling lages.",
      steps: [
        { label: "1. Innhent", body: "Samle relevant e-post, dokument og felt fra regneark med begrenset tilgang." },
        { label: "2. Foreslå", body: "AI lager et forslag med begrunnelse, usikkerhet og hvilke kilder som ble brukt." },
        { label: "3. Godkjenn", body: "Ansvarlig person velger godkjenn, send tilbake eller be om mer informasjon." },
      ],
      note: "Flyten bygges først som pilot og utvides bare hvis teamet opplever at kontrollpunktene fungerer.",
    },
    examples: [
      { label: "Drift", title: "AI-assistent for en intern prosess", body: "En assistent kan veilede ansatte gjennom rutiner, dokumentasjon og beslutninger." },
      { label: "Ledelse", title: "Beslutningsstøtte", body: "AI kan samle grunnlag og lage oversikt før mennesker tar beslutningen." },
      { label: "Team", title: "Kontrollerte agentflyter", body: "Flere steg kan koordineres med klare rammer, logging og godkjenning." },
    ],
    safety:
      "Skreddersøm betyr ikke at AI får frie tøyler. Vi definerer oppgaver, verktøy, datatilgang, stoppunkter og ansvar slik at løsningen blir praktisk og trygg.",
    flow: ["Forretningsbehov avklares", "Pilot bygges og testes", "Teamet gir tilbakemelding", "Løsningen forbedres og skaleres"],
    faqs: standardFaqs,
    ctaTitle: "Har dere en arbeidsflyt som trenger en egen løsning?",
    ctaBody:
      "Book en kartlegging, så vurderer vi om en skreddersydd AI-løsning er riktig vei, eller om en enklere automasjon gir mer verdi først.",
    metadata: {
      title: "Skreddersydde AI-løsninger | ANAi",
      description:
        "Skreddersydde AI-assistenter, automasjoner og kontrollerte agentflyter for norske bedrifter.",
    },
  },
};

export const productList = Object.values(productPages);
