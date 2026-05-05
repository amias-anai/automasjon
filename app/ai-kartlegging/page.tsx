import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  FileSearch,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import {
  MarketingPage,
  PageHero,
  SafetyNote,
} from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "AI-kartlegging | ANAi",
  description:
    "ANAi kartlegger arbeidsflyter, tidsbruk og realistiske AI-muligheter for norske SMB-er.",
};

const cards = [
  {
    title: "Kartlegger arbeidsflyter",
    body: "Vi ser på hvordan oppgaver går fra start til slutt, hvilke systemer som brukes og hvor informasjon stopper opp.",
    icon: ClipboardList,
  },
  {
    title: "Finner tidstyver",
    body: "Vi identifiserer repeterende skriving, sortering, oppsummering, rapportering og oppfølging som egner seg for AI-støtte.",
    icon: FileSearch,
  },
  {
    title: "Vurderer risiko og data",
    body: "Vi ser etter lavrisiko startpunkt og vurderer hvilke data løsningen faktisk trenger for å fungere.",
    icon: ShieldCheck,
  },
  {
    title: "Anbefaler første pilot",
    body: "Dere får en konkret anbefaling til første arbeidsflyt, med verdi, avgrensning og forslag til godkjenning.",
    icon: BarChart3,
  },
];

export default function AiMappingPage() {
  return (
    <MarketingPage>
      <PageHero
        eyebrow="AI-kartlegging"
        title="En praktisk gjennomgang av hvor AI kan gi mest verdi først"
        intro="AI-kartleggingen hjelper dere å prioritere. Vi ser på arbeidsflyter, tidstyver, datagrunnlag og risiko før vi anbefaler en realistisk første pilot."
        image="/landing/ai-automation.png"
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {cards.map((card) => (
          <article key={card.title} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_14px_38px_rgba(15,45,66,0.06)]">
            <card.icon className="h-10 w-10 text-[#0b3048]" />
            <h2 className="mt-5 text-lg font-bold">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#24465a]">{card.body}</p>
          </article>
        ))}
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold text-[#c95720]">Resultat</p>
            <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">Dere får et tydelig neste steg</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#24465a]">
            <p>
              Kartleggingen munner ut i en anbefaling til hvilken arbeidsflyt dere bør starte
              med, hvorfor den er egnet, hvilke systemer og data som er relevante, og hvor
              mennesker bør godkjenne før noe brukes videre.
            </p>
            <p>
              Vi hjelper dere å jobbe strukturert med personvern og databehandleravtaler der
              det er relevant, men gir ikke juridiske compliance-garantier.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-10">
        <SafetyNote />
        <div className="rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-8">
          <h2 className="font-display text-4xl text-[#0b3048]">Klar for å se hvor dere bør starte?</h2>
          <p className="mt-4 leading-8 text-[#24465a]">
            Book en gratis kartlegging, så vurderer vi en konkret arbeidsflyt sammen.
          </p>
          <Link
            href="/book-gratis-ai-kartlegging"
            className="mt-6 inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.24)] transition hover:bg-[#b74a18]"
          >
            Book gratis AI-kartlegging
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </MarketingPage>
  );
}
