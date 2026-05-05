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
    heroImage: "/landing/admin-automation.png",
    heroAlt: "Kundehenvendelser strukturert med AI på et moderne arbeidsbord",
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
  "administrasjon-og-dokumentasjon": {
    slug: "administrasjon-og-dokumentasjon",
    navTitle: "Administrasjon og dokumentasjon",
    eyebrow: "Administrasjon og dokumentasjon",
    title: "Gjør løse notater om til ryddig arbeid",
    intro:
      "Vi bygger AI-flyter som gjør notater, skjemaer, møtereferater og beskjeder om til strukturerte utkast, sjekklister, rapporter og oppgaver.",
    heroImage: "/landing/customer-service.png",
    heroAlt: "Dokumentasjon og administrative utkast strukturert i et digitalt grensesnitt",
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
  "salg-tilbud-og-rapportering": {
    slug: "salg-tilbud-og-rapportering",
    navTitle: "Salg, tilbud og rapportering",
    eyebrow: "Salg, tilbud og rapportering",
    title: "Bedre oppfølging fra første kontakt til rapport",
    intro:
      "ANAi hjelper salgs- og driftsteam med tilbudsutkast, CRM-notater, oppfølginger, statusoppdateringer og rapporter som gir bedre oversikt.",
    heroImage: "/landing/ai-agents.png",
    heroAlt: "AI-assistert salg, tilbud og rapportering visualisert med koblede arbeidsflyter",
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
    heroImage: "/landing/internal-knowledge.png",
    heroAlt: "Intern kunnskap organisert og søkbar med AI",
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
  "ai-automatisering": {
    slug: "ai-automatisering",
    navTitle: "AI-automatisering",
    eyebrow: "AI-automatisering",
    title: "Koble sammen arbeidsflyter som i dag gjøres manuelt",
    intro:
      "Vi bygger kontrollerte automasjoner som flytter informasjon mellom systemer, lager oppgaver, sender varsler og gir teamet bedre flyt i hverdagen.",
    heroImage: "/landing/ai-automation.png",
    heroAlt: "AI-automatisering som kobler sammen systemer og oppgaver",
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
    heroImage: "/landing/custom-ai-solutions.png",
    heroAlt: "Skreddersydde AI-løsninger bygget av kontrollerte arbeidsflytmoduler",
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
