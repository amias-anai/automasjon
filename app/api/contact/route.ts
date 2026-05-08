import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const preferredRegion = "fra1";

const requiredEnv = ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"] as const;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

export async function POST(request: Request) {
  const missing = requiredEnv.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    return NextResponse.json(
      { error: `Missing server configuration: ${missing.join(", ")}` },
      { status: 500 },
    );
  }

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

  const response = await fetch(`${process.env.SUPABASE_URL}/rest/v1/lead_submissions`, {
    method: "POST",
    headers: {
      apikey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
      Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Could not save lead" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
