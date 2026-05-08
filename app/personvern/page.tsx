import type { Metadata } from "next";
import Link from "next/link";
import {
  MarketingPage,
  PageHero,
  contactEmail,
} from "../components/MarketingPage";

export const metadata: Metadata = {
  title: "Personvern | ANAi",
  description:
    "Personvernerklæring for ANAi, med informasjon om behandlingsansvar, data vi samler inn, formål, rettslig grunnlag, lagring, deling og rettigheter.",
};

const sections = [
  {
    title: "1. Personopplysninger",
    body: [
      "Personopplysninger er opplysninger som kan knyttes til en identifisert eller identifiserbar person. På anai.no ber vi bare om opplysninger som er nødvendige for å svare på henvendelser, avtale møter og levere B2B-tjenester.",
      "Vi ber normalt ikke om sensitive personopplysninger i kontaktskjemaer eller bookinghenvendelser. Ikke send helseopplysninger, fødselsnummer, kundedata eller annen sensitiv informasjon via nettsiden.",
    ],
  },
  {
    title: "2. Innsamling",
    body: [
      "Når du kontakter oss eller booker en AI-kartlegging, kan vi samle inn navn, bedrift, rolle, bransje, e-postadresse, telefonnummer og en kort beskrivelse av behovet.",
      "Kontaktskjema lagres i Supabase-prosjektet vårt i EU-regionen eu-central-1. Kalenderbooking skjer via Cal.eu. Nettsiden hostes hos Vercel, som kan registrere tekniske drifts- og sikkerhetslogger som IP-adresse, nettleser, tidspunkt og forespurt side.",
    ],
  },
  {
    title: "3. Formål",
    body: [
      "Vi bruker opplysningene til å svare på henvendelser, avtale møter, gjennomføre AI-kartlegging, følge opp mulige kundeforhold og levere avtalte tjenester.",
      "Dersom dere blir kunde, brukes relevante kontakt- og prosjektopplysninger til administrasjon, leveranse, fakturering, support og nødvendig dokumentasjon.",
    ],
  },
  {
    title: "4. Behandling",
    body: [
      "ANAi bygger praktiske AI-arbeidsflyter for bedrifter. I leveranser starter vi normalt med lavrisiko arbeidsflyter og minst mulig persondata. Vi behandler bare data som er relevant for den konkrete arbeidsflyten.",
      "Eksternt innhold som e-poster, PDF-er, nettsider og kundemeldinger skal behandles som utrygt input. Viktige arbeidsflyter bør ha logging eller sporbarhet for hvilke data som ble brukt, hva som ble generert og hva som ble godkjent.",
    ],
  },
  {
    title: "5. Rettslig grunnlag",
    body: [
      "Behandlingsgrunnlaget vil normalt være berettiget interesse når vi svarer på B2B-henvendelser og følger opp relevante forretningskontakter, eller avtale når behandling er nødvendig for å inngå eller oppfylle en avtale.",
      "For enkelte behandlinger kan vi bygge på samtykke, for eksempel ikke-nødvendige informasjonskapsler eller nyhetsbrev dersom slike funksjoner tas i bruk. Lovpålagte oppgaver, som regnskapsføring, behandles der det er nødvendig for å oppfylle rettslige forpliktelser.",
    ],
  },
  {
    title: "6. Behandlingsansvarlig",
    body: [
      `ANAi er behandlingsansvarlig for personopplysninger som samles inn via anai.no, kontaktskjemaer, booking og direkte henvendelser. ANAi er under etablering og har foreløpig ikke organisasjonsnummer. Kontakt oss på ${contactEmail} for spørsmål om behandlingen.`,
      "I kundeprosjekter kan ANAi også opptre som databehandler når vi behandler personopplysninger på vegne av en kunde. Dette reguleres da i egen avtale eller databehandleravtale der det er relevant.",
    ],
  },
  {
    title: "7. Dine rettigheter",
    body: [
      "Du kan be om innsyn, retting, sletting, begrensning og dataportabilitet der vilkårene er oppfylt. Du kan også protestere mot behandling som bygger på berettiget interesse.",
      "Dersom behandling bygger på samtykke, kan samtykket trekkes tilbake. Du har også rett til å klage til Datatilsynet dersom du mener at behandlingen er i strid med personvernregelverket.",
    ],
  },
  {
    title: "8. Lagring",
    body: [
      "Henvendelser lagres så lenge det er nødvendig for å følge opp dialogen og et eventuelt kundeforhold. Opplysninger som ikke lenger er nødvendige, slettes eller anonymiseres.",
      "Booking- og kontakthenvendelser gjennom nettsiden lagres i europeiske systemer. Regnskaps- og avtaledokumentasjon lagres i den perioden vi er pålagt etter lov eller trenger for å dokumentere avtaleforholdet.",
    ],
  },
  {
    title: "9. Tredjeparter",
    body: [
      "Vi bruker Vercel til hosting av nettsiden, Supabase EU til lagring av kontaktskjema, Cal.eu til booking og Google Workspace til e-post. Vi bruker ikke analyseleverandør eller markedsføringssporing på nettsiden per i dag.",
      "Nettsiden har ikke egen AI-infrastruktur. I kundeprosjekter velges AI-leverandører etter behov, risiko og kundens preferanser, og aktuelle leverandører, databehandleravtaler og eventuelle overføringer avklares før løsningen tas i bruk.",
      "Vi selger ikke personopplysninger. Opplysninger deles ikke med andre med mindre det er nødvendig for å levere tjenesten, følge opp en avtale eller oppfylle lovpålagte krav.",
    ],
  },
  {
    title: "10. Informasjonskapsler og analyse",
    body: [
      "Vi bruker ikke analyse- eller markedsføringscookies på anai.no per i dag. Derfor viser vi heller ikke cookiebanner.",
      "Nødvendige tekniske mekanismer kan likevel brukes av underliggende tjenester for sikkerhet, drift eller kalenderbooking. Dersom vi senere tar i bruk analyse, markedsføring eller andre ikke-nødvendige cookies, skal denne siden oppdateres og samtykke håndteres der det kreves.",
    ],
  },
  {
    title: "11. Sikkerhet",
    body: [
      "Vi jobber med tilgangsstyring, dataminimering og hensiktsmessige tekniske og organisatoriske tiltak. For AI-arbeidsflyter vurderer vi minst mulig tilgang, menneskelig godkjenning og logging der det er viktig.",
      "Ingen digital løsning kan garantere full sikkerhet, men vi forsøker å redusere risiko gjennom tydelige rammer, begrensede tilganger og kontrollpunkter.",
    ],
  },
  {
    title: "12. Internasjonale overføringer",
    body: [
      "Noen leverandører kan behandle data utenfor Norge eller EU/EØS. Der dette skjer, skal det foreligge et gyldig overføringsgrunnlag og relevante sikkerhetstiltak.",
      "Nettsidehenvendelser og booking er satt opp med europeiske leverandører og EU-region der dette er tilgjengelig. Dersom en leverandør eller underleverandør i et kundeprosjekt behandler data utenfor EU/EØS, skal dette opplyses og vurderes som del av løsningen.",
    ],
  },
  {
    title: "13. Endringer",
    body: [
      "Vi kan oppdatere denne personvernerklæringen når tjenester, leverandører eller regelverk endres. Vesentlige endringer bør kommuniseres tydelig til berørte personer der det er relevant.",
      "Sist oppdatert: 8. mai 2026.",
    ],
  },
  {
    title: "14. Kontakt og klage",
    body: [
      `Spørsmål om personvern kan sendes til ${contactEmail}. Vi vil forsøke å svare kort og forståelig.`,
      "Du kan også kontakte Datatilsynet dersom du ønsker å klage eller få veiledning om rettighetene dine.",
    ],
  },
  {
    title: "15. Tredjeparts databehandlere",
    body: [
      "For nettsiden er aktuelle databehandlere Vercel for hosting, Supabase EU for kontaktskjema, Cal.eu for booking og Google Workspace for e-post. Det brukes ikke analyseleverandør eller AI-leverandør direkte på nettsiden per i dag.",
      "I kundeprosjekter avklarer vi hvilke leverandører som brukes, hvilke data som behandles og om databehandleravtale er nødvendig.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <MarketingPage>
      <PageHero
        eyebrow="Personvern"
        title="Personvernerklæring for ANAi"
        intro="Denne siden forklarer hvordan ANAi behandler personopplysninger i forbindelse med nettsiden, henvendelser, booking og B2B-leveranser."
        image="/landing/hero-fjord.png"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-6">
            <h2 className="font-display text-3xl text-[#0b3048]">Kort fortalt</h2>
            <p className="mt-4 text-sm leading-7 text-[#24465a]">
              Vi samler inn minst mulig informasjon, bruker den til å svare på henvendelser og
              levere B2B-tjenester, og hjelper kunder å jobbe strukturert med personvern og
              databehandleravtaler der det er relevant.
            </p>
            <div className="mt-5 space-y-2 border-t border-[#dfd0c2] pt-5 text-sm leading-6 text-[#24465a]">
              <p className="font-bold text-[#0b3048]">ANAi</p>
              <p>Bergen, Norge</p>
              <p>Org.nr: ikke registrert ennå</p>
              <p>Kontakt: {contactEmail}</p>
            </div>
            <Link href="/kontakt" className="mt-5 inline-flex font-bold text-[#c95720]">
              Kontakt oss om personvern
            </Link>
          </div>
        </aside>
        <div className="space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-[#dfd0c2] bg-[#fbf6f0] p-7">
              <h2 className="font-display text-3xl text-[#0b3048]">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[#24465a]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </MarketingPage>
  );
}
