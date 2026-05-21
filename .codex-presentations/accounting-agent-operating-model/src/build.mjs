import fs from "node:fs/promises";
import path from "node:path";
import {
  Presentation,
  PresentationFile,
  auto,
  column,
  fill,
  fixed,
  fr,
  grid,
  hug,
  row,
  rule,
  shape,
  text,
  wrap,
} from "@oai/artifact-tool";

const W = 1920;
const H = 1080;
const deck = Presentation.create({ slideSize: { width: W, height: H } });

const C = {
  paper: "#F6F2EA",
  paper2: "#EFE6D8",
  ink: "#1B2A2F",
  muted: "#637074",
  olive: "#6E7F5C",
  green: "#276749",
  mint: "#DCEBDC",
  amber: "#C7792C",
  amberLight: "#F3D7B7",
  blue: "#2B5C77",
  blueLight: "#D7E6EE",
  red: "#9C3D34",
  redLight: "#EACBC7",
  line: "#D1C6B8",
  white: "#FFFFFF",
};

const FONT = {
  display: "Aptos Display",
  body: "Aptos",
  mono: "Aptos Mono",
};

function add(slide, node, frame) {
  slide.compose(node, { frame, baseUnit: 8 });
}

function rect(slide, x, y, w, h, fillColor, lineColor = "none", name = "shape") {
  add(
    slide,
    shape({
      name,
      fill: fillColor,
      line: lineColor === "none" ? { color: fillColor, transparency: 100 } : { color: lineColor, weight: 1.5 },
      width: fill,
      height: fill,
    }),
    { left: x, top: y, width: w, height: h },
  );
}

function label(slide, value, x, y, w, h, opts = {}) {
  add(
    slide,
    text(value, {
      name: opts.name ?? "label",
      width: fill,
      height: hug,
      style: {
        fontFace: opts.font ?? FONT.body,
        fontSize: opts.size ?? 24,
        color: opts.color ?? C.ink,
        bold: opts.bold ?? false,
        italic: opts.italic ?? false,
        alignment: opts.align ?? "left",
        lineSpacing: opts.lineSpacing ?? 1.05,
      },
    }),
    { left: x, top: y, width: w, height: h },
  );
}

function title(slide, value, subtitle) {
  label(slide, value, 108, 72, 1380, 86, {
    name: "slide-title",
    font: FONT.display,
    size: 54,
    bold: true,
    color: C.ink,
  });
  if (subtitle) {
    label(slide, subtitle, 112, 148, 1220, 48, {
      name: "slide-subtitle",
      size: 24,
      color: C.muted,
    });
  }
}

function footer(slide, value = "Prepared for sales discussion | Sources: Datatilsynet, European Commission, EDPB") {
  add(
    slide,
    row({ name: "footer-row", width: fill, height: hug, align: "center", justify: "between" }, [
      text(value, {
        name: "source-rail",
        width: wrap(1280),
        height: hug,
        style: { fontFace: FONT.body, fontSize: 13, color: C.muted },
      }),
      text("Accounting agent operating model", {
        name: "footer-context",
        width: wrap(420),
        height: hug,
        style: { fontFace: FONT.body, fontSize: 13, color: C.muted, alignment: "right" },
      }),
    ]),
    { left: 108, top: 1014, width: 1704, height: 32 },
  );
}

function backdrop(slide) {
  rect(slide, 0, 0, W, H, C.paper, "none", "canvas");
  rect(slide, 0, 0, 44, H, C.olive, "none", "left-binding");
  rect(slide, 44, 0, 20, H, C.amber, "none", "left-accent");
}

function softBox(slide, x, y, w, h, fillColor, lineColor = C.line, name = "box") {
  add(
    slide,
    shape({
      name,
      width: fill,
      height: fill,
      fill: fillColor,
      line: { color: lineColor, weight: 1 },
      geometry: "roundRect",
    }),
    { left: x, top: y, width: w, height: h },
  );
}

function tinyTag(slide, value, x, y, w, color, fillColor) {
  softBox(slide, x, y, w, 38, fillColor, color, `tag-${value}`);
  label(slide, value, x, y + 8, w, 24, {
    size: 15,
    bold: true,
    align: "center",
    color,
    lineSpacing: 1,
  });
}

function slide1() {
  const s = deck.slides.add();
  backdrop(s);
  rect(s, 1170, 0, 750, H, C.ink, "none", "cover-field");
  rect(s, 1170, 0, 34, H, C.amber, "none", "cover-rule");
  label(s, "ACCOUNTING AGENT", 112, 88, 650, 28, {
    size: 17,
    bold: true,
    color: C.olive,
  });
  label(s, "One agent.\nMany surfaces.\nHuman control.", 108, 198, 940, 330, {
    name: "cover-title",
    font: FONT.display,
    size: 78,
    bold: true,
    color: C.ink,
    lineSpacing: 0.94,
  });
  label(
    s,
    "A practical operating model for a Norwegian accounting firm: daily follow-up, chat access, system checks, EØS-first processing, and approval before anything is sent or registered.",
    116,
    620,
    850,
    130,
    { size: 28, color: C.muted, lineSpacing: 1.18 },
  );
  label(s, "Tomorrow's sales call", 116, 900, 420, 32, {
    size: 20,
    bold: true,
    color: C.ink,
  });
  label(s, "Decision to unlock: pilot scope, privacy boundary, and approval workflow.", 116, 932, 760, 46, {
    size: 18,
    color: C.muted,
  });

  label(s, "EØS\nFIRST", 1306, 124, 404, 150, {
    font: FONT.display,
    size: 82,
    bold: true,
    color: C.white,
    align: "center",
    lineSpacing: 0.9,
  });
  label(s, "Raw client/accounting data stays in controlled EØS routes by default.", 1306, 316, 404, 70, {
    size: 24,
    color: "#CFE1D7",
    align: "center",
  });
  const coverTags = [
    ["Email digest", 1264, 486, 172, C.amberLight],
    ["Slack / Teams", 1468, 486, 182, C.blueLight],
    ["Dashboard", 1348, 574, 182, C.mint],
    ["Tripletex / Fiken", 1238, 662, 236, C.amberLight],
    ["Altinn / Visma", 1500, 662, 212, C.blueLight],
  ];
  for (const [v, x, y, w, f] of coverTags) {
    softBox(s, x, y, w, 52, f, "none", `cover-${v}`);
    label(s, v, x, y + 14, w, 26, { size: 18, bold: true, align: "center", color: C.ink });
  }
  footer(s, "Working recommendation, not legal advice | Validate processor, DPA, transfer basis, and client-specific constraints");
}

function slide2() {
  const s = deck.slides.add();
  backdrop(s);
  title(s, "One shared agent, several places to reach it", "The channel changes; the context, permissions, task state, and audit log stay shared.");

  softBox(s, 650, 330, 620, 300, C.ink, "none", "agent-core");
  label(s, "Shared agent core", 700, 370, 520, 46, {
    font: FONT.display,
    size: 42,
    bold: true,
    color: C.white,
    align: "center",
  });
  label(s, "permissions + client context + task state + audit log + approval policy", 730, 448, 460, 100, {
    size: 26,
    color: "#D8E5DE",
    align: "center",
  });

  const nodes = [
    ["Email", "daily digest, draft client follow-ups", 160, 290, C.amberLight],
    ["Slack / Teams", "questions, quick approvals, internal coordination", 1370, 290, C.blueLight],
    ["Dashboard", "queues, risks, missing docs, audit trail", 160, 690, C.mint],
    ["Accounting systems", "Tripletex, Fiken, Visma data/actions", 1370, 690, C.paper2],
    ["Public portals", "Altinn checks and filing status", 690, 742, C.redLight],
  ];
  for (const [head, body, x, y, fillColor] of nodes) {
    softBox(s, x, y, 390, 154, fillColor, "none", `node-${head}`);
    label(s, head, x + 28, y + 24, 330, 34, { size: 30, bold: true, color: C.ink });
    label(s, body, x + 28, y + 72, 330, 54, { size: 20, color: C.muted, lineSpacing: 1.1 });
  }
  rect(s, 555, 365, 94, 6, C.line, "none", "connector-1");
  rect(s, 1270, 365, 100, 6, C.line, "none", "connector-2");
  rect(s, 555, 768, 94, 6, C.line, "none", "connector-3");
  rect(s, 1270, 768, 100, 6, C.line, "none", "connector-4");
  rect(s, 957, 630, 6, 112, C.line, "none", "connector-5");

  label(s, "Telegram / WhatsApp: use as light notifications only, unless the firm has a governed business setup.", 214, 906, 1430, 38, {
    size: 24,
    color: C.ink,
    bold: true,
    align: "center",
  });
  footer(s);
}

const tasks = [
  ["Missing documents", "Dashboard + system check + email digest", "Rules + EU fast", "EØS raw data"],
  ["Deadlines", "Email digest + dashboard + calendar", "Rules", "EØS raw data"],
  ["Slow clients", "Draft email + chat approval", "EU fast", "EØS; approve before send"],
  ["Repeated questions", "Slack/Teams chatbot + knowledge base", "EU fast/medium", "EØS; cite source"],
  ["Status updates", "Daily email + dashboard summary", "EU medium/strong", "EØS; reviewer tagged"],
  ["Internal tasks", "Slack/Teams + task system", "EU medium", "EØS; log task change"],
  ["Check portals/systems", "Altinn/Visma/Tripletex connectors", "Rules + EU medium", "EØS; no auto-submit"],
  ["Small messages", "Email/chat draft composer", "EU fast", "EØS; human approval"],
  ["Client meetings", "Meeting pack + dashboard", "EU strong", "EØS; frontier only redacted"],
  ["Nothing slips", "Dashboard queue + alert digest", "Rules + EU medium", "EØS; full audit log"],
];

function slide3() {
  const s = deck.slides.add();
  backdrop(s);
  title(s, "Task routing: interface, model, privacy", "The point is not one chatbot everywhere. Each task should land in the surface where the accountant naturally acts.");

  const x = 106;
  const y = 226;
  const widths = [390, 590, 300, 410];
  const rowH = 68;
  const headers = ["Task", "Best interface", "Model tier", "Data route"];
  let cursor = x;
  rect(s, x, y, widths.reduce((a, b) => a + b, 0), 54, C.ink, "none", "table-header-bg");
  headers.forEach((h, i) => {
    label(s, h, cursor + 20, y + 16, widths[i] - 34, 24, {
      size: 17,
      bold: true,
      color: C.white,
    });
    cursor += widths[i];
  });

  tasks.forEach((task, idx) => {
    const ry = y + 54 + idx * rowH;
    const fillColor = idx % 2 === 0 ? "#FBF8F1" : C.paper2;
    rect(s, x, ry, widths.reduce((a, b) => a + b, 0), rowH, fillColor, "none", `row-${idx}`);
    rect(s, x, ry + rowH - 1, widths.reduce((a, b) => a + b, 0), 1, C.line, "none", `row-line-${idx}`);
    let cx = x;
    task.forEach((v, i) => {
      label(s, v, cx + 20, ry + 18, widths[i] - 34, 34, {
        size: i === 0 ? 19 : 17,
        bold: i === 0,
        color: i === 3 && v.includes("frontier") ? C.red : C.ink,
      });
      cx += widths[i];
    });
  });

  label(s, "EU fast = cheaper routine model. EU strong = better reasoning inside EØS. Frontier = only for redacted or legally cleared cases.", 112, 968, 1570, 34, {
    size: 20,
    color: C.muted,
  });
  footer(s, "Task recommendations are implementation guidance; final privacy route depends on vendor, DPA, hosting, and transfer mechanism.");
}

function slide4() {
  const s = deck.slides.add();
  backdrop(s);
  title(s, "Model routing should follow risk, not convenience", "Use the strongest model only when the value justifies the privacy and governance cost.");

  const lanes = [
    {
      label: "Green",
      title: "EØS default",
      body: "Raw client data, ledgers, payroll context, deadlines, Altinn status, and internal task state.",
      model: "Rules + EU fast/strong models",
      fill: C.mint,
      color: C.green,
      x: 120,
    },
    {
      label: "Amber",
      title: "Controlled transfer",
      body: "Only when the recipient and transfer basis are cleared: adequacy-covered provider or SCCs/BCR plus assessment and safeguards.",
      model: "US/global model with guardrails",
      fill: C.amberLight,
      color: C.amber,
      x: 650,
    },
    {
      label: "Red",
      title: "Do not send",
      body: "Full ledgers, identifiable payroll, special-category data, BankID/session secrets, portal credentials, or client files without approval.",
      model: "Redact, summarize, or keep in EØS",
      fill: C.redLight,
      color: C.red,
      x: 1180,
    },
  ];

  lanes.forEach((lane) => {
    softBox(s, lane.x, 252, 470, 538, lane.fill, "none", `privacy-${lane.label}`);
    label(s, lane.label.toUpperCase(), lane.x + 38, 292, 160, 28, {
      size: 18,
      bold: true,
      color: lane.color,
    });
    label(s, lane.title, lane.x + 38, 336, 380, 44, {
      font: FONT.display,
      size: 40,
      bold: true,
      color: C.ink,
    });
    label(s, lane.body, lane.x + 38, 424, 382, 150, {
      size: 24,
      color: C.ink,
      lineSpacing: 1.12,
    });
    rect(s, lane.x + 38, 624, 170, 4, lane.color, "none", `privacy-rule-${lane.label}`);
    label(s, lane.model, lane.x + 38, 662, 370, 72, {
      size: 24,
      bold: true,
      color: lane.color,
      lineSpacing: 1.1,
    });
  });

  label(s, "Recommended policy", 130, 850, 340, 34, { size: 23, bold: true, color: C.ink });
  label(
    s,
    "Start with EØS-only processing for the pilot. Add frontier/US routing later as an explicit exception path with redaction, DPA, transfer assessment, and customer sign-off.",
    130,
    886,
    1520,
    56,
    { size: 25, color: C.ink, lineSpacing: 1.12 },
  );
  footer(
    s,
    "Sources: Datatilsynet guidance on transfers outside EØS; European Commission adequacy and EU-US Data Privacy Framework guidance; EDPB transfer guidance.",
  );
}

function slide5() {
  const s = deck.slides.add();
  backdrop(s);
  title(s, "The agent suggests. The accountant decides.", "Every external action should be approved, sourced, risk-rated, and logged.");

  const flow = [
    ["Detect", "missing docs,\ndeadlines,\nportal changes"],
    ["Explain", "short reason\n+ source link"],
    ["Suggest", "next action\n+ risk level"],
    ["Draft", "client message\nor internal task"],
    ["Approve", "Pahr reviewer\nconfirms"],
    ["Act + log", "send/register\nwith audit trail"],
  ];
  const startX = 120;
  const top = 294;
  const boxW = 244;
  const gap = 38;
  flow.forEach(([head, body], i) => {
    const x = startX + i * (boxW + gap);
    if (i > 0) rect(s, x - gap + 8, top + 66, gap - 16, 5, C.line, "none", `flow-line-${i}`);
    softBox(s, x, top, boxW, 170, i === 4 ? C.amberLight : i === 5 ? C.mint : C.white, C.line, `flow-${head}`);
    label(s, head, x + 20, top + 26, boxW - 40, 32, {
      size: 27,
      bold: true,
      color: i === 4 ? C.amber : C.ink,
      align: "center",
    });
    label(s, body, x + 22, top + 76, boxW - 44, 68, {
      size: 19,
      color: C.muted,
      align: "center",
      lineSpacing: 1.08,
    });
  });

  label(s, "Suggestion package", 126, 556, 620, 42, {
    font: FONT.display,
    size: 38,
    bold: true,
    color: C.ink,
  });
  const outputs = [
    "short explanation",
    "sources / references",
    "suggested next action",
    "draft customer message",
    "suggested internal task",
    "risk / priority level",
    "who at Pahr should review",
    "full activity log",
  ];
  outputs.forEach((o, i) => {
    const col = i < 4 ? 0 : 1;
    const rowIdx = i % 4;
    const x = 128 + col * 430;
    const y = 636 + rowIdx * 62;
    rect(s, x, y + 14, 18, 18, i < 6 ? C.olive : C.amber, "none", `dot-${i}`);
    label(s, o, x + 34, y, 360, 38, { size: 24, color: C.ink });
  });

  softBox(s, 1116, 586, 594, 278, C.ink, "none", "pilot-ask");
  label(s, "Pilot deal framing", 1164, 630, 480, 42, {
    font: FONT.display,
    size: 40,
    bold: true,
    color: C.white,
  });
  label(
    s,
    "Start with read-only system checks, daily digest, Slack/Teams Q&A, and draft follow-ups. Add write/register actions only after audit logs and approvals are proven.",
    1166,
    704,
    466,
    102,
    { size: 25, color: "#D8E5DE", lineSpacing: 1.13 },
  );
  footer(s, "Human approval before external messages, registration, filing, or client-visible changes.");
}

slide1();
slide2();
slide3();
slide4();
slide5();

const outDir = path.resolve("output");
const scratchDir = path.resolve("scratch");
await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(path.join(scratchDir, "previews"), { recursive: true });

for (let i = 0; i < deck.slides.count; i += 1) {
  const slide = deck.slides.getItem(i);
  const png = await slide.export({ format: "png" });
  await fs.writeFile(path.join(scratchDir, "previews", `slide-${String(i + 1).padStart(2, "0")}.png`), Buffer.from(await png.arrayBuffer()));
  const layout = await slide.export({ format: "layout" });
  await fs.writeFile(path.join(scratchDir, "previews", `slide-${String(i + 1).padStart(2, "0")}.layout.json`), JSON.stringify(layout, null, 2));
}

const pptx = await PresentationFile.exportPptx(deck);
await pptx.save(path.join(outDir, "output.pptx"));

console.log(path.join(outDir, "output.pptx"));
