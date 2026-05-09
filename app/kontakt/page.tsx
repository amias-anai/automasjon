import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import {
  ContactForm,
  MarketingPage,
  PageHero,
  contactEmail,
  contactPhone,
} from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Kontakt | ANAi",
  description: "Kontakt ANAi for praktiske AI-løsninger, automasjon og AI-kartlegging.",
};

export default function ContactPage() {
  return (
    <MarketingPage>
      <PageHero
        eyebrow="Kontakt"
        title="Ta kontakt om en konkret arbeidsflyt"
        intro="Skriv kort hva som tar tid i hverdagen, så svarer vi med et forslag til neste steg eller en gratis AI-kartlegging."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div>
          <h2 className="font-display text-4xl text-[#0b3048]">Kontaktinformasjon</h2>
          <ul className="mt-6 space-y-4 text-[#24465a]">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#c95720]" />
              {contactPhone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#c95720]" />
              {contactEmail}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#c95720]" />
              Bergen, Norge
            </li>
          </ul>
          <Link
            href="/book-gratis-ai-kartlegging"
            className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-md border border-[#0f2d42]/45 px-8 text-base font-semibold text-[#0f2d42] transition hover:border-[#c95720] hover:text-[#c95720]"
          >
            Book AI-kartlegging
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ContactForm />
      </section>
    </MarketingPage>
  );
}
