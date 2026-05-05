import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Target, Users } from "lucide-react";
import {
  CtaBand,
  MarketingPage,
  PageHero,
} from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Om ANAi | Praktiske AI-løsninger for norske bedrifter",
  description:
    "ANAi hjelper norske små og mellomstore bedrifter med praktiske, trygge og verdifulle AI-arbeidsflyter.",
};

const values = [
  {
    title: "Praktisk før spektakulært",
    body: "Vi prioriterer hverdagsoppgaver som tar tid, ikke løsninger som ser imponerende ut uten å bli brukt.",
    icon: Target,
  },
  {
    title: "Mennesker i kontroll",
    body: "AI lager utkast, forslag og oppsummeringer. Viktige handlinger godkjennes av mennesker.",
    icon: Users,
  },
  {
    title: "Personvernbevisst fra start",
    body: "Vi ser på dataminimering, tilgangsstyring og databehandleravtaler der det er relevant.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <MarketingPage>
      <PageHero
        eyebrow="Om ANAi"
        title="Vi hjelper norske bedrifter å bruke AI på en praktisk og kontrollert måte"
        intro="ANAi er bygget for små og mellomstore bedrifter som vil spare tid i hverdagen uten å gi AI frie tøyler. Vi finner konkrete arbeidsflyter, bygger små piloter og forbedrer dem sammen med teamet."
        image="/landing/hero-fjord.png"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="text-sm font-bold text-[#c95720]">Misjon</p>
          <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">AI som faktisk passer inn i arbeidsdagen</h2>
        </div>
        <div className="space-y-5 text-base leading-8 text-[#24465a]">
          <p>
            Mange bedrifter kjenner potensialet i AI, men mangler et trygt og konkret
            startpunkt. ANAi hjelper dere å gå fra usikkerhet til en arbeidsflyt som kan testes,
            måles og forbedres.
          </p>
          <p>
            Vi unngår løse løfter om full autonomi. Løsningene våre skal lage bedre utkast,
            gi bedre oversikt og spare tid, med klare rammer for data, godkjenning og ansvar.
          </p>
        </div>
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3 lg:px-10">
          {values.map((value) => (
            <article key={value.title} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7">
              <value.icon className="h-10 w-10 text-[#0b3048]" />
              <h2 className="mt-5 text-lg font-bold">{value.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#24465a]">{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-8 md:p-10">
          <h2 className="font-display text-4xl text-[#0b3048] sm:text-5xl">Hva vi ser etter</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Gjentakende kundehenvendelser og oppfølging",
              "Administrasjon, rapportering og dokumentasjon",
              "Kunnskap som ligger spredt i dokumenter og hos nøkkelpersoner",
              "Manuelle steg mellom e-post, CRM, skjemaer og interne verktøy",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#c95720]" />
                <p className="font-semibold text-[#24465a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </MarketingPage>
  );
}
