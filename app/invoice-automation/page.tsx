"use client";

import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Bot,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  FileSearch,
  FolderOpen,
  Info,
  Mail,
  Play,
  RotateCcw,
  Send,
  ShieldCheck,
} from "lucide-react";
import { DemoNav } from "../components/DemoNav";
import {
  automationResults,
  automationVsApp,
  exceptionCards,
  heroBadges,
  incomingItems,
  pipelineStages,
  pilotCards,
  roiMetrics,
  statusIcons,
  statusLabels,
  statusStyles,
  valueCards,
  workflowSteps,
  type AutomationResult,
  type IncomingItem,
} from "@/lib/invoiceAutomationDemoData";

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

type ActionKind =
  | "approval"
  | "sharepoint"
  | "manual"
  | "duplicate"
  | "finance";

const actionMessages: Record<ActionKind, (result: AutomationResult) => string> =
  {
    approval: (result) =>
      result.status === "READY_FOR_APPROVAL"
        ? "Godkjenningsforespørsel sendt til daglig leder."
        : `Godkjenningsflyt simulert for ${result.document}.`,
    sharepoint: (result) =>
      `Dokument lagret til SharePoint / Prosjekter / 2026 / ${result.project} / ${result.destination}.`,
    manual: () => "Dokument sendt til manuell kontroll.",
    duplicate: () => "Duplikat stoppet. Ingen godkjenning opprettet.",
    finance: () => "Kreditnota sendt til økonomi for avstemming.",
  };

export default function InvoiceAutomationPage() {
  const [selectedIncomingId, setSelectedIncomingId] = useState(
    incomingItems[0].id,
  );
  const [hasRun, setHasRun] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activePipelineStage, setActivePipelineStage] = useState(-1);
  const [selectedResultId, setSelectedResultId] = useState(
    automationResults[1].id,
  );
  const [statusMessage, setStatusMessage] = useState(
    "Klar til å kjøre demo. Ingen ekte systemer er koblet til.",
  );

  const selectedIncoming = useMemo(
    () =>
      incomingItems.find((item) => item.id === selectedIncomingId) ??
      incomingItems[0],
    [selectedIncomingId],
  );

  const selectedResult = useMemo(
    () =>
      automationResults.find((result) => result.id === selectedResultId) ??
      automationResults[0],
    [selectedResultId],
  );

  const runAutomation = () => {
    if (isRunning) return;

    setHasRun(false);
    setIsRunning(true);
    setActivePipelineStage(0);
    setStatusMessage("Automasjonen leser mock-innboksen.");

    pipelineStages.forEach((_, index) => {
      window.setTimeout(() => {
        setActivePipelineStage(index);
      }, index * 240);
    });

    window.setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
      setActivePipelineStage(pipelineStages.length - 1);
      setSelectedResultId(automationResults[1].id);
      setStatusMessage(
        "Kjøring ferdig: 7 dokumenter behandlet, 3 avvik flagget, 0 ekte handlinger utført.",
      );
    }, 1850);
  };

  const simulateAction = (kind: ActionKind) => {
    setStatusMessage(actionMessages[kind](selectedResult));
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7f4] text-slate-950">
      <DemoNav />

      <section className="relative isolate border-b border-slate-200 bg-[#101820] text-white">
        <div className="absolute inset-0 -z-10 hero-grid opacity-70" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#f5f7f4] to-transparent" />
        <div className="mx-auto grid min-h-[680px] max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-14">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-sm font-semibold text-emerald-100">
              <ShieldCheck className="h-4 w-4" />
              Mock demo med fiktive data
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
              AI Invoice & Project Filing Automation
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              En bakgrunnsautomasjon som sorterer fakturaer, pakksedler og
              prosjektkostnader for bygg- og anleggsbedrifter - uten at teamet
              må åpne alle vedlegg manuelt.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-sm font-medium text-slate-100"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-amber-200/30 bg-amber-200/10 p-4 text-sm leading-6 text-amber-50">
              Mock demo med fiktive data - ingen ekte e-post, SharePoint eller
              filer er koblet til.
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur sm:p-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#f8faf8] p-4 text-slate-950 shadow-xl sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Bakgrunnskjøring
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">
                      Faktura-innboks denne uken
                    </h2>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                    Human approval
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {valueCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <p className="text-3xl font-semibold text-slate-950">
                        {card.value}
                      </p>
                      <p className="mt-2 text-sm leading-5 text-slate-600">
                        {card.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-950 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400 text-slate-950">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        Boring admin work happens in the background
                      </p>
                      <p className="text-sm leading-6 text-slate-300">
                        Teamet jobber videre i Outlook, SharePoint og Teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <SectionIntro
            eyebrow="Ingen ny daglig app"
            title="Ansatte bruker fortsatt verktøyene de kjenner"
            text="I en ekte pilot bruker ansatte fortsatt Outlook, SharePoint og Teams. Denne siden viser bare hva automasjonen gjør i bakgrunnen."
            icon={Info}
          />
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="grid gap-3 md:grid-cols-6">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="relative">
                    <div className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-3 text-sm font-semibold leading-5">
                        {step.label}
                      </p>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-slate-300 md:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionIntro
              eyebrow="Messy input"
              title="Inngående dokumenter før automasjon"
              text="Dette er den rotete hverdagen: ulike avsendere, varierende emnefelt, manglende prosjektreferanser og dokumenter som ikke skal behandles likt."
              icon={Mail}
            />
            <button
              type="button"
              onClick={runAutomation}
              disabled={isRunning}
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Play className={cx("h-4 w-4", isRunning && "animate-pulse")} />
              {isRunning ? "Kjører automasjon" : "Kjør faktura-automasjon"}
            </button>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {incomingItems.map((item) => (
              <IncomingCard
                key={item.id}
                item={item}
                active={item.id === selectedIncomingId}
                onClick={() => setSelectedIncomingId(item.id)}
              />
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-500">
                Valgt innkommende element
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">
                {selectedIncoming.title}
              </h3>
              <dl className="mt-4 grid gap-3 text-sm">
                <MiniFact label="Avsender" value={selectedIncoming.sender} />
                <MiniFact label="Leverandør" value={selectedIncoming.supplier} />
                <MiniFact label="Før-status" value={selectedIncoming.beforeState} />
                <MiniFact label="Prosjektsignal" value={selectedIncoming.projectSignal} />
              </dl>
            </div>

            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-950 p-5 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Pipeline
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">
                    {isRunning
                      ? pipelineStages[activePipelineStage] ?? "Starter"
                      : hasRun
                        ? "Automasjonen er ferdig"
                        : "Klar til kjøring"}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm">
                  1.85 sek demo
                </span>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {pipelineStages.map((stage, index) => (
                  <div
                    key={stage}
                    className={cx(
                      "rounded-2xl border p-3 text-sm transition",
                      activePipelineStage === index && isRunning
                        ? "stage-glow border-emerald-300 bg-emerald-300/15 text-emerald-50"
                        : activePipelineStage >= index
                          ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
                          : "border-white/10 bg-white/[0.06] text-slate-400",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs">
                        {index + 1}
                      </span>
                      <span className="font-medium leading-5">{stage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionIntro
            eyebrow="Resultat"
            title="Dokumenter klassifisert, matchet og rutet"
            text="Klikk en rad for å se hvorfor automasjonen gjorde valget, hvilke regler som slo inn, og hva den foreslår videre."
            icon={FileSearch}
          />
          <StatusBanner message={statusMessage} />
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-[1180px] w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Document</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Supplier</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Matched project</th>
                  <th className="px-4 py-3">Confidence</th>
                  <th className="px-4 py-3">Destination</th>
                  <th className="px-4 py-3">Approval</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Warnings</th>
                </tr>
              </thead>
              <tbody>
                {(hasRun ? automationResults : []).map((result) => (
                  <ResultRow
                    key={result.id}
                    result={result}
                    active={result.id === selectedResultId}
                    onClick={() => setSelectedResultId(result.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {!hasRun && (
            <div className="flex min-h-56 flex-col items-center justify-center p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
                <Bot className={cx("h-6 w-6", isRunning && "animate-pulse")} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-950">
                {isRunning
                  ? "Automasjonen behandler dokumentene"
                  : "Kjør automasjonen for å se resultatene"}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">
                Tabellen viser først data når mock-kjøringen er ferdig. Ingen
                ekte e-post eller filer blir lest.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <DetailPanel
            result={selectedResult}
            showResults={hasRun}
            onAction={simulateAction}
          />
          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
            <SectionIntro
              eyebrow="Avvikshåndtering"
              title="Systemet prosesserer ikke blindt"
              text="Usikkerhet, duplikater og kreditnotaer flagges slik at mennesker fortsatt har kontroll."
              icon={AlertTriangle}
            />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {exceptionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-800 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-semibold text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <SectionIntro
            eyebrow="ROI"
            title="Hva én ukentlig kjøring kan spare"
            text="Dette er ikke ment å erstatte økonomi eller prosjektleder. Det reduserer manuell sortering, åpning av vedlegg, prosjekttolkning og feilarkivering."
            icon={CircleDollarSign}
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {roiMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-3xl font-semibold text-slate-950">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Automation, not app"
            title="Hvorfor dette er en automasjon, ikke en ny app"
            text="Brukeren trenger ikke en ny arbeidsflate. Input kommer fra Outlook. Output går til SharePoint, Teams eller godkjenningsflyt. Demo-siden viser bare hva som skjer bak kulissene."
            icon={ClipboardCheck}
          />
          <div className="grid gap-3 md:grid-cols-3">
            {automationVsApp.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase text-slate-500">
                    {item.label}
                  </span>
                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-emerald-300">
                Pilotforslag
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1.1] sm:text-5xl">
                Start med én delt fakturainnboks
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Første pilot kan begrenses til én delt Outlook-innboks, ett
                prosjektregister og én SharePoint-struktur. Etter 30 dager
                måler vi tid spart, avvik flagget og hvor mange dokumenter som
                ble riktig sortert.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pilotCards.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-4"
                >
                  <p className="text-sm text-slate-400">0{index + 1}</p>
                  <p className="mt-2 font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  text: string;
  icon: LucideIcon;
}) {
  return (
    <div>
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600">
        <Icon className="h-4 w-4 text-emerald-600" />
        {eyebrow}
      </div>
      <h2 className="max-w-3xl text-2xl font-semibold leading-8 text-slate-950 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function IncomingCard({
  item,
  active,
  onClick,
}: {
  item: IncomingItem;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "rounded-[1.25rem] border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500",
        active
          ? "border-slate-950 bg-slate-950 text-white"
          : "border-slate-200 bg-white text-slate-950",
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cx(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
            active ? "bg-white text-slate-950" : "bg-slate-100 text-slate-700",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-5">{item.title}</p>
          <p
            className={cx(
              "mt-1 text-xs leading-5",
              active ? "text-slate-300" : "text-slate-500",
            )}
          >
            {item.sender}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge text={item.type} active={active} />
        <Badge text={item.beforeState} active={active} />
      </div>
      <p
        className={cx(
          "mt-4 text-sm leading-6",
          active ? "text-slate-200" : "text-slate-600",
        )}
      >
        {item.description}
      </p>
      <p
        className={cx(
          "mt-3 text-xs font-semibold",
          active ? "text-emerald-200" : "text-emerald-700",
        )}
      >
        {item.projectSignal}
      </p>
    </button>
  );
}

function Badge({ text, active }: { text: string; active?: boolean }) {
  return (
    <span
      className={cx(
        "rounded-full border px-2.5 py-1 text-xs font-semibold",
        active
          ? "border-white/15 bg-white/10 text-white"
          : "border-slate-200 bg-slate-50 text-slate-600",
      )}
    >
      {text}
    </span>
  );
}

function MiniFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-t border-slate-200 pt-3 sm:grid-cols-[0.38fr_0.62fr]">
      <dt className="text-slate-500">{label}</dt>
      <dd className="font-medium text-slate-900">{value}</dd>
    </div>
  );
}

function ResultRow({
  result,
  active,
  onClick,
}: {
  result: AutomationResult;
  active: boolean;
  onClick: () => void;
}) {
  const StatusIcon = statusIcons[result.status];

  return (
    <tr
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      aria-selected={active}
      className={cx(
        "cursor-pointer border-t border-slate-100 transition hover:bg-slate-50",
        active && "bg-emerald-50/60",
      )}
    >
      <td className="px-4 py-4 font-semibold text-slate-950">
        {result.document}
      </td>
      <td className="px-4 py-4 text-slate-600">{result.type}</td>
      <td className="px-4 py-4 text-slate-600">{result.supplier}</td>
      <td className="px-4 py-4 font-medium text-slate-900">{result.amount}</td>
      <td className="px-4 py-4 text-slate-600">{result.project}</td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-20 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{ width: `${result.confidence}%` }}
            />
          </div>
          <span className="font-semibold text-slate-900">
            {result.confidence}%
          </span>
        </div>
      </td>
      <td className="px-4 py-4 text-slate-600">{result.destination}</td>
      <td className="px-4 py-4 text-slate-600">{result.approval}</td>
      <td className="px-4 py-4">
        <span
          className={cx(
            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold",
            statusStyles[result.status],
          )}
        >
          <StatusIcon className="h-3.5 w-3.5" />
          {statusLabels[result.status]}
        </span>
      </td>
      <td className="px-4 py-4 text-slate-600">
        {result.warnings.length ? result.warnings.join("; ") : "none"}
      </td>
    </tr>
  );
}

function DetailPanel({
  result,
  showResults,
  onAction,
}: {
  result: AutomationResult;
  showResults: boolean;
  onAction: (kind: ActionKind) => void;
}) {
  const StatusIcon = statusIcons[result.status];

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-500">
            Explainable detail panel
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            {showResults ? result.document : "Kjør automasjonen først"}
          </h2>
        </div>
        {showResults && (
          <span
            className={cx(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold",
              statusStyles[result.status],
            )}
          >
            <StatusIcon className="h-4 w-4" />
            {statusLabels[result.status]}
          </span>
        )}
      </div>

      {!showResults ? (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
          Resultatdetaljer, godkjenningsregler og simulerte handlinger vises
          her etter at mock-kjøringen er ferdig.
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <DetailBlock title="Extracted fields">
              <dl className="space-y-2">
                {Object.entries(result.extractedFields).map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[0.45fr_0.55fr] gap-3 text-sm"
                  >
                    <dt className="text-slate-500">{label}</dt>
                    <dd className="font-medium text-slate-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </DetailBlock>

            <DetailBlock title="Matched project">
              <p className="text-sm font-semibold text-slate-950">
                {result.project}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Confidence: {result.confidence}%
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Destination: {result.destination}
              </p>
            </DetailBlock>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <DetailBlock title="Reason for match">
              <p className="text-sm leading-6 text-slate-600">
                {result.reasonForMatch}
              </p>
            </DetailBlock>

            <DetailBlock title="Approval rule used">
              <p className="text-sm leading-6 text-slate-600">
                {result.approvalRule}
              </p>
            </DetailBlock>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <DetailBlock title="Warnings">
              {result.warnings.length ? (
                <ul className="space-y-2">
                  {result.warnings.map((warning) => (
                    <li
                      key={warning}
                      className="flex gap-2 text-sm leading-6 text-slate-600"
                    >
                      <AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-amber-600" />
                      {warning}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-6 text-slate-600">
                  Ingen advarsler.
                </p>
              )}
            </DetailBlock>

            <DetailBlock title="Suggested action">
              <p className="text-sm leading-6 text-slate-600">
                {result.suggestedAction}
              </p>
            </DetailBlock>
          </div>

          <DetailBlock title="Source documents used" className="mt-4">
            <div className="flex flex-wrap gap-2">
              {result.sourceDocuments.map((source) => (
                <span
                  key={source}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {source}
                </span>
              ))}
            </div>
          </DetailBlock>

          <div className="mt-5 flex flex-wrap gap-2">
            <ActionButton
              icon={Send}
              label="Send til godkjenning"
              onClick={() => onAction("approval")}
            />
            <ActionButton
              icon={FolderOpen}
              label="Lagre til SharePoint"
              onClick={() => onAction("sharepoint")}
            />
            <ActionButton
              icon={AlertTriangle}
              label="Send til manuell kontroll"
              onClick={() => onAction("manual")}
            />
            <ActionButton
              icon={RotateCcw}
              label="Marker som duplikat"
              onClick={() => onAction("duplicate")}
            />
            <ActionButton
              icon={BadgeCheck}
              label="Send til økonomi"
              onClick={() => onAction("finance")}
            />
          </div>
        </>
      )}
    </div>
  );
}

function DetailBlock({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("rounded-2xl border border-slate-200 bg-slate-50 p-4", className)}>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function ActionButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}

function StatusBanner({ message }: { message: string }) {
  return (
    <div className="max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">
      <div className="flex gap-3">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
}
