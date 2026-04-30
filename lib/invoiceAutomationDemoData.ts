import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  BadgeCheck,
  Banknote,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  FileText,
  FolderOpen,
  Mail,
  MessagesSquare,
  ReceiptText,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

export type DocumentType =
  | "Invoice"
  | "Delivery note"
  | "Payment reminder"
  | "Possible duplicate"
  | "Credit note";

export type ResultStatus =
  | "READY_FOR_APPROVAL"
  | "NEEDS_MANUAL_REVIEW"
  | "SAVED"
  | "PAYMENT_STATUS_CHECK"
  | "FLAGGED_DUPLICATE"
  | "FINANCE_REVIEW";

export type IncomingItem = {
  id: string;
  title: string;
  sender: string;
  supplier: string;
  type: DocumentType;
  beforeState: string;
  projectSignal: string;
  description: string;
  receivedAt: string;
  icon: LucideIcon;
};

export type AutomationResult = {
  id: string;
  document: string;
  type: DocumentType;
  supplier: string;
  amount: string;
  project: string;
  confidence: number;
  destination: string;
  approval: string;
  status: ResultStatus;
  warnings: string[];
  extractedFields: Record<string, string>;
  reasonForMatch: string;
  approvalRule: string;
  suggestedAction: string;
  sourceDocuments: string[];
};

export const heroBadges = [
  "Outlook inbox",
  "SharePoint filing",
  "Approval routing",
  "No new daily-use app",
  "Human review on exceptions",
];

export const valueCards = [
  { value: "7", label: "dokumenter behandlet" },
  { value: "3", label: "avvik flagget" },
  { value: "0", label: "fakturaer bokført automatisk" },
  { value: "100%", label: "menneskelig godkjenning ved risiko" },
];

export const workflowSteps = [
  { label: "Outlook shared inbox", icon: Mail },
  { label: "AI extraction", icon: FileSearch },
  { label: "Project matching", icon: Building2 },
  { label: "Approval routing", icon: BadgeCheck },
  { label: "SharePoint filing", icon: FolderOpen },
  { label: "Log updated", icon: ClipboardCheck },
];

export const pipelineStages = [
  "Leser e-post",
  "Leser vedlegg",
  "Trekker ut fakturadata",
  "Matcher mot prosjektregister",
  "Sjekker godkjenningsregler",
  "Foreslår SharePoint-mappe",
  "Ruter godkjenning",
];

export const incomingItems: IncomingItem[] = [
  {
    id: "incoming-10047",
    title: "Faktura 10047 - SOL-2026-014 Solsiden Barnehage",
    sender: "faktura@elektrogrossisten-eksempel.no",
    supplier: "ElektroGrossisten AS",
    type: "Invoice",
    beforeState: "Unprocessed",
    projectSignal: "Clear project reference",
    description:
      "Faktura med tydelig prosjektreferanse, varelinjer for kabler, armaturer og installasjonsmateriell.",
    receivedAt: "2026-04-08 09:14",
    icon: ReceiptText,
  },
  {
    id: "incoming-33891",
    title: "Faktura 33891",
    sender: "regnskap@ventilasjon-klima-eksempel.no",
    supplier: "Ventilasjon & Klima AS",
    type: "Invoice",
    beforeState: "Needs interpretation",
    projectSignal: "Missing project reference",
    description:
      "Ingen prosjektnummer, men leveringssted og ventilasjonsmateriell peker mot Solsiden Barnehage.",
    receivedAt: "2026-04-10 15:42",
    icon: AlertTriangle,
  },
  {
    id: "incoming-5012",
    title: "Pakkseddel 5012 - Solsiden Barnehage",
    sender: "logistikk@elektrogrossisten-eksempel.no",
    supplier: "ElektroGrossisten AS",
    type: "Delivery note",
    beforeState: "Unfiled",
    projectSignal: "Delivery to project site",
    description:
      "Pakkseddel for kabler, armaturer og koblingsmateriell levert ved teknisk rom inngang B.",
    receivedAt: "2026-04-07 12:05",
    icon: FileCheck2,
  },
  {
    id: "incoming-77210",
    title: "Betalingspåminnelse - faktura 77210",
    sender: "purring@byggpartner-material-eksempel.no",
    supplier: "ByggPartner Material AS",
    type: "Payment reminder",
    beforeState: "Needs finance check",
    projectSignal: "Fjordveien 18 Rehab",
    description:
      "Påminnelse for forfalt faktura knyttet til materialleveranse for Fjordveien 18 Rehab.",
    receivedAt: "2026-04-18 08:31",
    icon: CircleDollarSign,
  },
  {
    id: "incoming-duplicate-10047",
    title: "Kopi av faktura 10047 - SOL-2026-014",
    sender: "faktura@elektrogrossisten-eksempel.no",
    supplier: "ElektroGrossisten AS",
    type: "Possible duplicate",
    beforeState: "Needs duplicate check",
    projectSignal: "Same invoice number and amount",
    description:
      "Samme faktura sendt på nytt etter automatisk returmelding. Bør stoppes før ny godkjenning.",
    receivedAt: "2026-04-11 10:03",
    icon: RotateCcw,
  },
  {
    id: "incoming-credit-4402",
    title: "Kreditnota 4402 - korrigering av faktura 33891",
    sender: "kreditnota@ventilasjon-klima-eksempel.no",
    supplier: "Ventilasjon & Klima AS",
    type: "Credit note",
    beforeState: "Finance review",
    projectSignal: "Linked to invoice 33891",
    description:
      "Korrigerer feil antall filterkassetter på faktura som manglet prosjektreferanse.",
    receivedAt: "2026-04-16 13:19",
    icon: Banknote,
  },
];

export const automationResults: AutomationResult[] = [
  {
    id: "invoice-10047",
    document: "invoice 10047",
    type: "Invoice",
    supplier: "ElektroGrossisten AS",
    amount: "58,510 NOK",
    project: "SOL-2026-014 Solsiden Barnehage",
    confidence: 99,
    destination: "Økonomi/Faktura",
    approval: "Daglig leder",
    status: "READY_FOR_APPROVAL",
    warnings: ["Amount above 50,000 NOK"],
    extractedFields: {
      "Fakturanummer": "10047",
      "Fakturadato": "2026-04-08",
      "Forfallsdato": "2026-04-23",
      "Prosjektreferanse": "SOL-2026-014",
      "Sum inkl. mva": "58,510 NOK",
    },
    reasonForMatch:
      "Eksplisitt prosjektreferanse SOL-2026-014 og prosjektnavn Solsiden Barnehage finnes i faktura og e-postemne.",
    approvalRule:
      "Beløp over 50,000 NOK krever daglig leder før godkjenning.",
    suggestedAction:
      "Send godkjenningsforespørsel til daglig leder og legg prosjektleder på kopi.",
    sourceDocuments: [
      "email-01-clear-project-ref.md",
      "invoice-10047-elektrogrossisten.md",
      "projects.json",
      "approval-rules.md",
    ],
  },
  {
    id: "invoice-33891",
    document: "invoice 33891",
    type: "Invoice",
    supplier: "Ventilasjon & Klima AS",
    amount: "71,462.50 NOK",
    project: "SOL-2026-014 Solsiden Barnehage",
    confidence: 76,
    destination: "Til manuell kontroll",
    approval: "Manual review",
    status: "NEEDS_MANUAL_REVIEW",
    warnings: [
      "Missing project reference",
      "Amount above 50,000 NOK",
      "Match based on delivery location and line items",
    ],
    extractedFields: {
      "Fakturanummer": "33891",
      "Fakturadato": "2026-04-10",
      "Forfallsdato": "2026-04-25",
      "Prosjektreferanse": "Ikke oppgitt",
      "Sum inkl. mva": "71,462.50 NOK",
    },
    reasonForMatch:
      "Prosjektreferanse mangler, men leveringsadresse, ordet 'Solsiden barnehagebygg', ventilasjonsmateriell og prosjektregisterets nøkkelord peker mot SOL-2026-014.",
    approvalRule:
      "Beløp over 50,000 NOK krever daglig leder, men manglende prosjektreferanse sender dokumentet først til manuell kontroll.",
    suggestedAction:
      "Be prosjektleder bekrefte prosjekt før faktura sendes til godkjenning.",
    sourceDocuments: [
      "email-02-missing-project-ref.md",
      "invoice-33891-ventilasjon-klima.md",
      "projects.json",
      "approval-rules.md",
    ],
  },
  {
    id: "delivery-5012",
    document: "delivery note 5012",
    type: "Delivery note",
    supplier: "ElektroGrossisten AS",
    amount: "none",
    project: "SOL-2026-014 Solsiden Barnehage",
    confidence: 98,
    destination: "Dokumentasjon/Pakksedler",
    approval: "Project manager / saved",
    status: "SAVED",
    warnings: [],
    extractedFields: {
      "Pakkseddelnummer": "5012",
      "Dato": "2026-04-07",
      "Leveringssted": "Solsiden Barnehage, inngang B",
      "Mottaker": "KJ",
      "Prosjektreferanse": "SOL-2026-014",
    },
    reasonForMatch:
      "Pakkseddelen har både prosjektreferanse, leveringssted og varelinjer som matcher Solsiden Barnehage.",
    approvalRule:
      "Pakksedler lagres i prosjektets dokumentasjonsmappe og krever normalt ikke økonomisk godkjenning.",
    suggestedAction:
      "Lagre pakkseddel på prosjekt og knytt den til forventet faktura fra leverandør.",
    sourceDocuments: [
      "email-03-delivery-note.md",
      "delivery-note-5012.md",
      "projects.json",
    ],
  },
  {
    id: "reminder-77210",
    document: "payment reminder 77210",
    type: "Payment reminder",
    supplier: "ByggPartner Material AS",
    amount: "47,913.75 NOK",
    project: "FJO-2026-022 Fjordveien 18 Rehab",
    confidence: 96,
    destination: "Økonomi/Faktura",
    approval: "Finance",
    status: "PAYMENT_STATUS_CHECK",
    warnings: ["Due date passed", "Check against accounts payable"],
    extractedFields: {
      "Fakturanummer": "77210",
      "Fakturadato": "2026-03-28",
      "Forfallsdato": "2026-04-12",
      "Prosjektreferanse": "FJO-2026-022",
      "Sum inkl. mva": "47,913.75 NOK",
    },
    reasonForMatch:
      "Påminnelsen refererer til faktura 77210 og prosjekt Fjordveien 18 Rehab, som matcher prosjektkode FJO-2026-022.",
    approvalRule:
      "Betalingspåminnelser sjekkes mot økonomi/reskontro før ny handling.",
    suggestedAction:
      "Sjekk om faktura 77210 er registrert og om betaling er stoppet på grunn av manglende godkjenning.",
    sourceDocuments: [
      "email-04-payment-reminder.md",
      "invoice-77210-byggpartner.md",
      "projects.json",
    ],
  },
  {
    id: "duplicate-10047",
    document: "duplicate invoice 10047",
    type: "Possible duplicate",
    supplier: "ElektroGrossisten AS",
    amount: "58,510 NOK",
    project: "SOL-2026-014 Solsiden Barnehage",
    confidence: 99,
    destination: "Existing invoice record",
    approval: "none",
    status: "FLAGGED_DUPLICATE",
    warnings: [
      "Same supplier, invoice number, date and amount already exists",
    ],
    extractedFields: {
      "Fakturanummer": "10047",
      "Fakturadato": "2026-04-08",
      "Forfallsdato": "2026-04-23",
      "Prosjektreferanse": "SOL-2026-014",
      "Sum inkl. mva": "58,510 NOK",
    },
    reasonForMatch:
      "Samme leverandør, fakturanummer, fakturadato, prosjektreferanse og beløp finnes allerede i forrige mottatte dokument.",
    approvalRule:
      "Mulig duplikatfaktura flagges og stoppes før godkjenningsflyt opprettes.",
    suggestedAction:
      "Ikke send til godkjenning. Marker som kopi og koble e-posten til eksisterende faktura 10047.",
    sourceDocuments: [
      "email-05-duplicate-invoice.md",
      "invoice-10047-duplicate.md",
      "automation-run-result.json",
    ],
  },
  {
    id: "credit-4402",
    document: "credit note 4402",
    type: "Credit note",
    supplier: "Ventilasjon & Klima AS",
    amount: "-2,100 NOK",
    project: "SOL-2026-014 Solsiden Barnehage",
    confidence: 72,
    destination: "Økonomi/Kreditnota",
    approval: "Finance",
    status: "FINANCE_REVIEW",
    warnings: [
      "Linked to invoice with missing project reference",
      "Project match should be confirmed",
    ],
    extractedFields: {
      "Kreditnotanummer": "4402",
      "Kreditnotadato": "2026-04-16",
      "Gjelder faktura": "33891",
      "Prosjektreferanse": "Ikke oppgitt",
      "Sum inkl. mva": "-2,100 NOK",
    },
    reasonForMatch:
      "Kreditnotaen refererer til faktura 33891 og Solsiden Barnehage, men opprinnelig faktura manglet prosjektreferanse.",
    approvalRule:
      "Kreditnota sendes til økonomi for avstemming mot opprinnelig faktura.",
    suggestedAction:
      "Send til økonomi for avstemming mot faktura 33891 og bekreft prosjekt før bokføring.",
    sourceDocuments: [
      "email-06-credit-note.md",
      "credit-note-4402.md",
      "invoice-33891-ventilasjon-klima.md",
    ],
  },
  {
    id: "delivery-6118",
    document: "delivery note 6118",
    type: "Delivery note",
    supplier: "Industriforsyning Midt AS",
    amount: "none",
    project: "LAG-2026-031 Lagerbygg Vest",
    confidence: 97,
    destination: "Dokumentasjon/Pakksedler",
    approval: "Anne Lien",
    status: "SAVED",
    warnings: ["Delivery partly placed temporarily by port 3"],
    extractedFields: {
      "Pakkseddelnummer": "6118",
      "Dato": "2026-04-12",
      "Leveringssted": "Lagerbygg Vest, port 3",
      "Mottaker": "AL",
      "Prosjektreferanse": "LAG-2026-031",
    },
    reasonForMatch:
      "Pakkseddelen har prosjektreferanse LAG-2026-031, leveringssted Lagerbygg Vest og varelinjer for lagerinnredning.",
    approvalRule:
      "Pakksedler lagres i prosjektets dokumentasjonsmappe og varsles til prosjektleder ved avvik i leveransekommentar.",
    suggestedAction:
      "Lagre pakkseddel og varsle prosjektleder om midlertidig plassering ved port 3.",
    sourceDocuments: [
      "delivery-note-6118.md",
      "projects.json",
      "suppliers.json",
    ],
  },
];

export const exceptionCards = [
  {
    title: "Missing project reference",
    text: "Faktura mangler prosjektnummer. AI foreslår prosjekt, men sender til manuell kontroll.",
    icon: AlertTriangle,
  },
  {
    title: "Duplicate invoice",
    text: "Samme leverandør, fakturanummer, dato og beløp finnes allerede. Automasjonen stopper godkjenningsflyt.",
    icon: RotateCcw,
  },
  {
    title: "Credit note",
    text: "Kreditnota sendes til økonomi for avstemming mot opprinnelig faktura.",
    icon: Banknote,
  },
  {
    title: "High amount",
    text: "Beløp over 50,000 NOK rutes til daglig leder før godkjenning.",
    icon: ShieldCheck,
  },
];

export const roiMetrics = [
  { value: "7", label: "documents processed in one run" },
  { value: "4.5 h", label: "manual admin avoided this week" },
  { value: "3", label: "exceptions found before payment/filing" },
  { value: "2", label: "invoices routed to correct approval" },
  { value: "2", label: "delivery notes filed automatically" },
  { value: "1", label: "duplicate stopped" },
];

export const automationVsApp = [
  {
    label: "Input",
    title: "Shared invoice inbox",
    text: "Fakturaer, pakksedler, purringer og kreditnotaer kommer inn slik de gjør i dag.",
    icon: Mail,
  },
  {
    label: "Logic",
    title: "Extraction + matching + approval rules",
    text: "Automasjonen tolker dokumenter, matcher mot prosjektregister og bruker godkjenningsregler.",
    icon: FileText,
  },
  {
    label: "Output",
    title: "SharePoint, approval messages, finance review",
    text: "Resultatet går tilbake til bedriftens eksisterende arbeidsflyt, ikke til en ny daglig app.",
    icon: MessagesSquare,
  },
];

export const pilotCards = [
  "One shared invoice inbox",
  "One project register",
  "One SharePoint folder structure",
  "Human approval",
  "30 days",
  "Before/after measurement",
];

export const statusLabels: Record<ResultStatus, string> = {
  READY_FOR_APPROVAL: "Ready for approval",
  NEEDS_MANUAL_REVIEW: "Needs manual review",
  SAVED: "Saved",
  PAYMENT_STATUS_CHECK: "Payment status check",
  FLAGGED_DUPLICATE: "Flagged duplicate",
  FINANCE_REVIEW: "Finance review",
};

export const statusStyles: Record<ResultStatus, string> = {
  READY_FOR_APPROVAL: "border-blue-200 bg-blue-50 text-blue-700",
  NEEDS_MANUAL_REVIEW: "border-amber-200 bg-amber-50 text-amber-800",
  SAVED: "border-emerald-200 bg-emerald-50 text-emerald-700",
  PAYMENT_STATUS_CHECK: "border-violet-200 bg-violet-50 text-violet-700",
  FLAGGED_DUPLICATE: "border-red-200 bg-red-50 text-red-700",
  FINANCE_REVIEW: "border-cyan-200 bg-cyan-50 text-cyan-800",
};

export const statusIcons: Record<ResultStatus, LucideIcon> = {
  READY_FOR_APPROVAL: BadgeCheck,
  NEEDS_MANUAL_REVIEW: AlertTriangle,
  SAVED: CheckCircle2,
  PAYMENT_STATUS_CHECK: CircleDollarSign,
  FLAGGED_DUPLICATE: RotateCcw,
  FINANCE_REVIEW: Banknote,
};

