"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type LeadFormProps = {
  title?: string;
  source?: "contact" | "booking";
};

const fields = [
  ["Navn", "name", "text", true],
  ["Bedrift", "company", "text", true],
  ["E-post", "email", "email", true],
  ["Telefon", "phone", "tel", false],
  ["Rolle", "role", "text", false],
  ["Bransje", "industry", "text", false],
] as const;

export function LeadForm({
  title = "Fortell kort hva dere vil se på",
  source = "contact",
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source }),
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
      setMessage("Takk. Henvendelsen er lagret, og vi følger opp.");
      return;
    }

    setStatus("error");
    setMessage("Noe gikk galt. Send gjerne e-post til system@anai.no.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#dfd0c2] bg-[#fbf6f0] p-6 shadow-[0_18px_50px_rgba(15,45,66,0.08)]"
    >
      <h2 className="font-display text-3xl text-[#0b3048]">{title}</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map(([label, name, type, required]) => (
          <label key={name} className="text-sm font-semibold text-[#173348]">
            {label}
            <input
              name={name}
              type={type}
              required={required}
              autoComplete={name === "email" ? "email" : name}
              className="mt-2 h-12 w-full rounded-md border border-[#d8c7b8] bg-white/70 px-4 text-base font-normal outline-none transition focus:border-[#c95720]"
            />
          </label>
        ))}
      </div>
      <label className="mt-4 block text-sm font-semibold text-[#173348]">
        Kort beskrivelse
        <textarea
          name="description"
          rows={5}
          placeholder="Hvilken arbeidsflyt tar mye tid i dag?"
          className="mt-2 w-full rounded-md border border-[#d8c7b8] bg-white/70 px-4 py-3 text-base font-normal outline-none transition focus:border-[#c95720]"
        />
      </label>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[#c95720] px-8 text-base font-semibold text-white shadow-[0_18px_40px_rgba(201,87,32,0.24)] transition hover:bg-[#b74a18] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Sender..." : "Send forespørsel"}
        <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 text-xs leading-6 text-[#24465a]">
        Opplysningene lagres i Supabase-prosjektet i EU-regionen eu-central-1 og brukes bare
        til å svare på henvendelsen.
      </p>
      {message ? (
        <p
          className={`mt-4 flex items-start gap-2 rounded-md border px-4 py-3 text-sm ${
            status === "success"
              ? "border-[#9fc2a4] bg-[#eef8ef] text-[#275034]"
              : "border-[#e3b6a2] bg-[#fff3ed] text-[#8c3416]"
          }`}
        >
          {status === "success" ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : null}
          {message}
        </p>
      ) : null}
    </form>
  );
}
