"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileText,
  Mail,
  SearchCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

const beforeSteps = [
  "Kunde sender e-post eller skjema",
  "Ansatt tolker innholdet manuelt",
  "Informasjon letes frem i e-post, CRM og dokumenter",
  "Svar og oppfølging skrives for hånd",
];

const afterSteps = [
  "AI klassifiserer henvendelsen",
  "Nøkkelinfo og relevant kontekst hentes ut",
  "Svarutkast og CRM-oppdatering forberedes",
  "Menneske godkjenner og oppfølging logges",
];

const nodes = [
  { label: "Innboks", icon: Mail },
  { label: "ANAi", icon: Sparkles },
  { label: "Ansatt", icon: UserCheck },
  { label: "CRM", icon: Database },
];

const manualFlowItems = [
  { label: "Leser e-post", icon: Mail },
  { label: "Leter etter kontekst", icon: SearchCheck },
  { label: "Skriver svar manuelt", icon: FileText },
  { label: "Husker oppfølging", icon: ClipboardCheck },
];

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function HomeWorkflowAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    function updateProgress() {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const start = viewport * 0.72;
      const end = -rect.height * 0.28;
      const nextProgress = clamp((start - rect.top) / (start - end));

      setProgress((current) => (Math.abs(current - nextProgress) > 0.006 ? nextProgress : current));
    }

    function requestUpdate() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    }

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const packetOffset = `${progress * 78}%`;
  const manualOpacity = 1 - clamp(progress * 1.8);
  const supportedOpacity = clamp((progress - 0.28) * 1.8);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0f2d42] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(232,160,92,0.20),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.07),transparent_35%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-28">
        <div className="relative z-10">
          <p className="text-sm font-bold text-[#e8a05c]">Arbeidsflyt i praksis</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-[1.03] sm:text-5xl">
            Fra kundehenvendelse til klart svarutkast
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/74">
            Poenget er ikke at AI overtar kundedialogen. Poenget er at teamet får
            ferdig struktur, relevant kontekst og et godt utkast før en ansvarlig
            person vurderer og godkjenner.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-lg border border-white/12 bg-white/[0.045] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/46">
                Før ANAi
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/68">
                {beforeSteps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/38" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-[#e8a05c]/35 bg-[#e8a05c]/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e8a05c]">
                Med ANAi
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/78">
                {afterSteps.map((step) => (
                  <li key={step} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#e8a05c]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10 lg:sticky lg:top-24 lg:self-start">
          <div className="relative min-h-[620px] overflow-hidden rounded-[8px] border border-white/12 bg-[#102f44]/78 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e8a05c]">
                  Kundehenvendelse
                </p>
                <h3 className="mt-1 text-lg font-bold">Svar, godkjenning og oppfølging</h3>
              </div>
              <span className="rounded-full border border-[#e8a05c]/35 bg-[#e8a05c]/10 px-3 py-1 text-xs font-bold text-[#ffd2a5]">
                Kontrollert flyt
              </span>
            </div>

            <div className="relative mt-8 hidden h-[250px] lg:block">
              <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-white/16" />
              <div
                className="absolute left-[8%] top-1/2 h-px bg-[#e8a05c]"
                style={{ width: packetOffset }}
              />
              <div className="relative grid h-full grid-cols-4 items-center gap-4">
                {nodes.map((node, index) => (
                  <div key={node.label} className="flex flex-col items-center gap-3">
                    <span
                      className="flex h-16 w-16 items-center justify-center rounded-full border bg-[#0f2d42] shadow-[0_18px_44px_rgba(0,0,0,0.25)] transition"
                      style={{
                        borderColor: progress >= index / 3 - 0.06 ? "#e8a05c" : "rgba(255,255,255,0.16)",
                        color: progress >= index / 3 - 0.06 ? "#ffd2a5" : "rgba(255,255,255,0.72)",
                      }}
                    >
                      <node.icon className="h-6 w-6" />
                    </span>
                    <p className="text-sm font-bold text-white/78">{node.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <div
                className="rounded-lg border border-white/12 bg-white/[0.045] p-5 transition lg:min-h-[252px]"
                style={{
                  opacity: Math.max(0.34, manualOpacity),
                  transform: `translateY(${progress * 18}px)`,
                }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/42">Manuell flyt</p>
                <div className="mt-4 space-y-3">
                  {manualFlowItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 rounded-md border border-white/8 bg-[#0b2638]/64 p-3 text-sm text-white/66">
                      <item.icon className="h-4 w-4 shrink-0 text-white/44" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-lg border border-[#e8a05c]/35 bg-[#fbf6f0] p-5 text-[#0f2d42] shadow-[0_24px_70px_rgba(232,160,92,0.15)] transition lg:min-h-[252px]"
                style={{
                  opacity: Math.max(0.52, supportedOpacity),
                  transform: `translateY(${(1 - progress) * 18}px)`,
                }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c95720]">AI-støttet flyt</p>
                <div className="mt-4 rounded-lg border border-[#dfd0c2] bg-white/65 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f2d42] text-white">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <div>
                      <h4 className="font-bold">Svarutkast klart</h4>
                      <p className="text-xs font-semibold text-[#c95720]">Må godkjennes</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#24465a]">
                    Henvendelsen er klassifisert, relevante kilder er funnet, og
                    et svarutkast med neste steg ligger klart.
                  </p>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-xs font-bold text-[#24465a]">
                  <span className="rounded-md border border-[#dfd0c2] bg-white/55 px-3 py-2">CRM-forslag</span>
                  <span className="rounded-md border border-[#dfd0c2] bg-white/55 px-3 py-2">Oppfølging logget</span>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-lg border border-white/12 bg-white/[0.055] p-4">
              <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-white/76">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#e8a05c]" />
                  Utkast
                </span>
                <span className="h-px w-6 bg-white/18" />
                <span className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-[#e8a05c]" />
                  Menneskelig godkjenning
                </span>
                <span className="h-px w-6 bg-white/18" />
                <span className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-[#e8a05c]" />
                  Oppfølging
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
