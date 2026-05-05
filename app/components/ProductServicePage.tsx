import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import type { ProductPageContent } from "../product-content";

function Logo() {
  return (
    <Image
      src="/landing/anai-logo.png"
      alt="ANAi"
      width={176}
      height={58}
      className="h-12 w-auto object-contain"
      priority
    />
  );
}

function ProductIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d8c7b8] bg-[#fffaf4] text-[#0f2d42]">
      <Icon className="h-5 w-5" />
    </span>
  );
}

export function ProductServicePage({ product }: { product: ProductPageContent }) {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#0f2d42]">
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
          <Link href="/" aria-label="ANAi forside">
            <Logo />
          </Link>
          <div className="hidden items-center gap-9 text-sm font-medium text-[#173348] md:flex">
            <Link href="/#tjenester" className="transition hover:text-[#c95720]">
              Bruksområder
            </Link>
            <Link href="/slik-fungerer-det" className="transition hover:text-[#c95720]">
              Slik fungerer det
            </Link>
            <Link href="/ai-kartlegging" className="transition hover:text-[#c95720]">
              AI-kartlegging
            </Link>
            <Link href="/kontakt" className="transition hover:text-[#c95720]">
              Kontakt
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-[#dfd0c2]">
        <Image
          src={product.heroImage}
          alt={product.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,234,0.98)_0%,rgba(247,241,234,0.92)_42%,rgba(247,241,234,0.48)_72%,rgba(247,241,234,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,241,234,0.36),rgba(247,241,234,0.88))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pb-28 lg:pt-40">
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
      </section>

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
          <Image src="/landing/cta-coast.png" alt="" fill className="object-cover opacity-45" sizes="100vw" />
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

      <footer className="mx-auto grid max-w-7xl gap-10 px-6 pb-10 pt-8 text-sm text-[#24465a] lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs">Praktiske AI-løsninger for norske bedrifter som vil spare tid og forbedre arbeidsflyten.</p>
        </div>
        <div>
          <h3 className="font-bold text-[#0f2d42]">Kontakt</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4" />
              +47 41 40 97 53
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4" />
              system@anai.no
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4" />
              Bergen, Norge
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#0f2d42]">Trygg AI</h3>
          <div className="mt-4 flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-[#c95720]" />
            <p>Vi starter avgrenset, logger viktige steg og legger inn menneskelig godkjenning der det trengs.</p>
          </div>
          <p className="mt-6 text-xs">© 2026 ANAi AS. Alle rettigheter reservert.</p>
        </div>
      </footer>
    </main>
  );
}
