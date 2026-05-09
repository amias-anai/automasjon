import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import type { ProductPageContent } from "../product-content";
import { SiteFooter, SiteHeader } from "./MarketingPage";

function ProductIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d8c7b8] bg-[#fffaf4] text-[#0f2d42]">
      <Icon className="h-5 w-5" />
    </span>
  );
}

function ConcreteExampleMockup({ product }: { product: ProductPageContent }) {
  return (
    <section id="konkret-eksempel" className="bg-[#efe8df]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:items-center">
        <div>
          <p className="text-sm font-bold text-[#c95720]">{product.concreteExample.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">
            {product.concreteExample.title}
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-[#24465a]">
            {product.concreteExample.scenario}
          </p>
          <p className="mt-5 max-w-xl rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] px-5 py-4 text-sm leading-7 text-[#24465a]">
            {product.concreteExample.note}
          </p>
        </div>
        <div className="rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-5 shadow-[0_18px_50px_rgba(15,45,66,0.08)]">
          <div className="flex items-center justify-between border-b border-[#dfd0c2] pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c95720]">Demo</p>
              <h3 className="mt-1 text-lg font-bold text-[#0b3048]">Kontrollert AI-forslag</h3>
            </div>
            <span className="rounded-full border border-[#d8c7b8] bg-white/65 px-3 py-1 text-xs font-bold text-[#24465a]">
              Utkast
            </span>
          </div>
          <div className="mt-5 space-y-4">
            {product.concreteExample.steps.map((step, index) => (
              <div key={step.label} className="grid gap-4 rounded-lg border border-[#dfd0c2] bg-white/60 p-4 sm:grid-cols-[7rem_1fr]">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f2d42] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#c95720]">
                    {step.label}
                  </p>
                </div>
                <p className="text-sm leading-7 text-[#24465a]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductServicePage({ product }: { product: ProductPageContent }) {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#0f2d42]">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[#dfd0c2]">
        <Image
          src={product.heroImage}
          alt={product.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,234,0.98)_0%,rgba(247,241,234,0.84)_42%,rgba(247,241,234,0.28)_72%,rgba(247,241,234,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,241,234,0.22),rgba(247,241,234,0.72))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-28">
          <div>
            <Link
              href="/"
              className="mb-9 inline-flex items-center gap-2 text-sm font-bold text-[#24465a] transition hover:text-[#c95720]"
            >
              <ArrowLeft className="h-4 w-4" />
              Tilbake til forsiden
            </Link>
            <p className="text-sm font-bold text-[#c95720]">{product.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.02] text-[#0b3048] sm:text-6xl sm:leading-[0.98] lg:text-[5.5rem]">
              {product.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#24465a]">{product.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-gratis-ai-kartlegging"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.28)] transition hover:bg-[#b74a18]"
              >
                Book gratis AI-kartlegging
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#eksempler"
                className="inline-flex h-14 items-center justify-center rounded-md border border-[#0f2d42]/45 bg-[#f7f1ea]/70 px-8 text-base font-semibold text-[#0f2d42] backdrop-blur transition hover:border-[#c95720] hover:text-[#c95720]"
              >
                Se konkrete eksempler
              </a>
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-xl border border-white/60 bg-[#fffaf4]/74 p-5 shadow-[0_22px_60px_rgba(15,45,66,0.14)] backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-3">
                {product.metrics.map((metric) => (
                  <div key={metric.value} className="rounded-lg border border-[#dfd0c2] bg-white/55 p-5">
                    <div className="text-3xl font-semibold text-[#0b3048]">{metric.value}</div>
                    <p className="mt-2 text-sm font-medium leading-6 text-[#24465a]">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-[#dfd0c2] bg-[#0f2d42] p-5 text-white">
                <div className="flex items-start gap-4">
                  <ProductIcon icon={product.heroIcon} />
                  <div>
                    <p className="text-sm font-semibold text-[#e8a05c]">Kontrollert AI i praksis</p>
                    <p className="mt-2 text-sm leading-7 text-white/78">{product.controlNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <h2 className="font-display text-4xl text-[#0b3048]">Hva er utfordringen?</h2>
            <p className="mt-5 max-w-xl leading-8 text-[#24465a]">{product.challenge}</p>
          </div>
          <div>
            <h2 className="font-display text-4xl text-[#0b3048]">Hvordan løser vi det?</h2>
            <p className="mt-5 max-w-xl leading-8 text-[#24465a]">{product.solution}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[#c95720]">Verdi for teamet</p>
          <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">Hva løsningen hjelper dere med</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {product.valueCards.map((item) => (
            <article key={item.title} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_14px_38px_rgba(15,45,66,0.06)]">
              <ProductIcon icon={item.icon} />
              <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#24465a]">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_14px_38px_rgba(15,45,66,0.06)] md:flex md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-[#0b3048]">Se hvordan dette kan se ut i praksis</h3>
            <p className="mt-3 text-sm leading-7 text-[#24465a]">
              Neste seksjon viser et konkret, fiktivt eksempel på input, AI-forslag og hvor menneskelig kontroll ligger.
            </p>
          </div>
          <a
            href="#konkret-eksempel"
            className="mt-5 inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-[#c95720] px-6 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(201,87,32,0.22)] transition hover:bg-[#b74a18] md:mt-0"
          >
            Gå til eksempel
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <ConcreteExampleMockup product={product} />

      <section className="bg-[#0f2d42] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#e8a05c]">Fra behov til drift</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Slik bygger vi løsningen</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {product.process.map((step) => (
              <article key={step.number} className="rounded-lg border border-white/12 bg-white/[0.045] p-7">
                <div className="text-3xl font-semibold text-[#e8a05c]">{step.number}</div>
                <h3 className="mt-5 font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="eksempler" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-[#c95720]">Eksempler</p>
          <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">Typiske bruksområder</h2>
          <p className="mt-4 text-base leading-7 text-[#24465a]">
            Eksemplene viser mulige arbeidsflyter, ikke kundecaser eller garanterte resultater.
          </p>
        </div>
        <div className="mt-10 rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_18px_50px_rgba(15,45,66,0.08)] md:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c95720]">Mini-eksempel</p>
              <h3 className="mt-4 font-display text-3xl text-[#0b3048]">{product.miniExample.title}</h3>
              <Link
                href="/eksempler-pa-arbeidsflyter"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#c95720] transition hover:text-[#b74a18]"
              >
                Se flere arbeidsflyteksempler
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Typisk input", product.miniExample.input],
                ["AI-assistert utkast", product.miniExample.output],
                ["Menneskelig kontroll", product.miniExample.control],
              ].map(([label, body]) => (
                <div key={label} className="rounded-lg border border-[#dfd0c2] bg-white/55 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#24465a]">{label}</p>
                  <p className="mt-3 text-sm leading-7 text-[#24465a]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {product.examples.map((item) => (
            <article key={item.title} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7 shadow-[0_14px_38px_rgba(15,45,66,0.06)]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#c95720]">{item.label}</p>
              <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#24465a]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#efe8df]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:items-center">
          <div>
            <p className="text-sm font-bold text-[#c95720]">Trygg innføring</p>
            <h2 className="mt-3 font-display text-4xl text-[#0b3048] sm:text-5xl">Mennesker beholder kontrollen</h2>
            <p className="mt-5 leading-8 text-[#24465a]">{product.safety}</p>
          </div>
          <div className="rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-6 shadow-[0_18px_50px_rgba(15,45,66,0.06)]">
            {product.flow.map((item, index) => (
              <div key={item} className="flex items-center gap-4 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0f2d42] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="font-semibold text-[#0f2d42]">{item}</p>
                {index < product.flow.length - 1 ? (
                  <ChevronRight className="ml-auto hidden h-5 w-5 text-[#c95720] sm:block" />
                ) : (
                  <CheckCircle2 className="ml-auto h-5 w-5 text-[#c95720]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="font-display text-4xl text-[#0b3048] sm:text-5xl">Ofte stilte spørsmål</h2>
        <div className="mt-10 grid gap-x-12 gap-y-2 md:grid-cols-2">
          {product.faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-[#d8c7b8] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                {faq.question}
                <span className="text-xl text-[#c95720] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#24465a]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="relative overflow-hidden rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-8 shadow-[0_18px_50px_rgba(15,45,66,0.08)] md:p-12">
          <Image src="/landing/hero-ai-kartlegging-checklist.svg" alt="" fill className="object-cover opacity-45" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,246,240,0.96),rgba(251,246,240,0.82)_48%,rgba(251,246,240,0.18))]" />
          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl text-[#0b3048] md:text-5xl">{product.ctaTitle}</h2>
              <p className="mt-4 text-base leading-7 text-[#24465a]">{product.ctaBody}</p>
            </div>
            <Link
              href="/book-gratis-ai-kartlegging"
              className="inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.28)] transition hover:bg-[#b74a18]"
            >
              <CalendarDays className="h-5 w-5" />
              Book gratis AI-kartlegging
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
