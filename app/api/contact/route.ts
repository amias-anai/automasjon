import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const preferredRegion = "fra1";

const contactEmail = process.env.CONTACT_TO_EMAIL || "system@anai.no";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

function buildLeadEmail(payload: {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  industry: string;
  description: string;
  source: string;
}) {
  return [
    `Ny henvendelse fra ${payload.name}`,
    "",
    `Kilde: ${payload.source}`,
    `Navn: ${payload.name}`,
    `Bedrift: ${payload.company}`,
    `E-post: ${payload.email}`,
    `Telefon: ${payload.phone || "-"}`,
    `Rolle: ${payload.role || "-"}`,
    `Bransje: ${payload.industry || "-"}`,
    "",
    "Beskrivelse:",
    payload.description,
  ].join("\n");
}

function buildMailtoHref(subject: string, body: string) {
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

async function saveToSupabase(payload: Record<string, string>) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey || serviceRoleKey.startsWith("replace-with-")) {
    return false;
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/lead_submissions`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  return response.ok;
}

async function sendWithResend(payload: { email: string; name: string }, subject: string, body: string) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return false;
  }

  const from = process.env.CONTACT_FROM_EMAIL || "ANAi <system@anai.no>";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [contactEmail],
      reply_to: payload.email,
      subject,
      text: body,
    }),
  });

  return response.ok;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const payload = {
    name: clean(body.name),
    company: clean(body.company),
    email: clean(body.email).toLowerCase(),
    phone: clean(body.phone),
    role: clean(body.role),
    industry: clean(body.industry),
    description: clean(body.description),
    source: clean(body.source) || "contact",
  };

  if (!payload.name || !payload.company || !payload.email || !payload.description) {
    return NextResponse.json(
      { error: "Name, company, email and description are required" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const subject = `Ny ANAi-henvendelse fra ${payload.company}`;
  const emailBody = buildLeadEmail(payload);
  const delivery: string[] = [];

  const [saved, emailed] = await Promise.all([
    saveToSupabase(payload).catch(() => false),
    sendWithResend(payload, subject, emailBody).catch(() => false),
  ]);

  if (saved) delivery.push("supabase");
  if (emailed) delivery.push("email");

  if (delivery.length > 0) {
    return NextResponse.json({ ok: true, delivery });
  }

  return NextResponse.json({
    ok: true,
    delivery: ["email-fallback"],
    mailtoHref: buildMailtoHref(subject, emailBody),
  });
}
