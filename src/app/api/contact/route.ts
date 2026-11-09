import { createHmac, randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

const MAX_BODY_BYTES = 16_384;
const SERVICE_OPTIONS = [
  "Nerdvana Technologies",
  "Figures by Nerdvana",
  "Technology",
  "Branding",
  "UI/UX",
  "Web",
  "AI",
  "Marketing",
  "SEO",
  "Other",
  "Not sure",
];
const BUDGET_OPTIONS = [
  "Under $10,000",
  "$10,000 to $25,000",
  "$25,000 to $50,000",
  "$50,000+",
];
const TIMEFRAME_OPTIONS = [
  "Immediately / ASAP",
  "Within 1 month",
  "1 to 3 months",
  "Flexible / Exploring",
];

type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  country: string;
  services: string[];
  description: string;
  budget: string;
  timeframe: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 && trimmed.length <= maxLength ? trimmed : null;
}

function isOneOf(value: string | null, options: string[]): value is string {
  return value !== null && options.includes(value);
}

function parseSubmission(body: unknown): ContactSubmission | null {
  if (!isRecord(body)) return null;

  const name = readText(body.name, 120);
  const email = readText(body.email, 254)?.toLowerCase() ?? null;
  const company = readText(body.company, 160);
  const country = readText(body.country, 100);
  const description = readText(body.description, 5_000);
  const budget = readText(body.budget, 40);
  const timeframe = readText(body.timeframe, 40);

  if (
    !name ||
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !company ||
    !country ||
    !description ||
    !isOneOf(budget, BUDGET_OPTIONS) ||
    !isOneOf(timeframe, TIMEFRAME_OPTIONS) ||
    !Array.isArray(body.services) ||
    body.services.length === 0 ||
    body.services.length > SERVICE_OPTIONS.length ||
    !body.services.every(
      (service): service is string =>
        typeof service === "string" && SERVICE_OPTIONS.includes(service),
    ) ||
    new Set(body.services).size !== body.services.length
  ) {
    return null;
  }

  return {
    name,
    email,
    company,
    country,
    services: body.services,
    description,
    budget,
    timeframe,
  };
}

function serviceHeaders(serviceKey: string) {
  return {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
    "Content-Type": "application/json",
  };
}

function getClientAddress(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  return (
    req.headers.get("x-real-ip")?.trim() ||
    forwardedFor?.split(",")[0]?.trim() ||
    "unknown"
  );
}

async function sendNotification(
  submission: ContactSubmission,
  submissionId: string,
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    console.warn(
      "Contact notification not sent: configure RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_NOTIFICATION_EMAIL.",
    );
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: submission.email,
      subject: `New project inquiry from ${submission.name}`,
      text: [
        `Submission ID: ${submissionId}`,
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Company: ${submission.company}`,
        `Country: ${submission.country}`,
        `Services: ${submission.services.join(", ")}`,
        `Budget: ${submission.budget}`,
        `Timeframe: ${submission.timeframe}`,
        "",
        "Project description:",
        submission.description,
      ].join("\n"),
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    console.error(
      `Contact notification failed for submission ${submissionId} (Resend status ${response.status}).`,
    );
    return false;
  }

  return true;
}

export async function POST(req: NextRequest) {
  if (req.headers.get("content-type")?.split(";")[0] !== "application/json") {
    return NextResponse.json(
      { error: "Please submit the form as JSON." },
      { status: 415 },
    );
  }

  const contentLength = Number(req.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Submission is too large." },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    const rawBody = await req.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: "Submission is too large." },
        { status: 413 },
      );
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json(
      { error: "Please submit valid JSON." },
      { status: 400 },
    );
  }

  if (
    isRecord(body) &&
    typeof body.honeypot === "string" &&
    body.honeypot.trim()
  ) {
    return NextResponse.json({
      success: true,
      message: "Inquiry processed.",
    });
  }

  const submission = parseSubmission(body);
  if (!submission) {
    return NextResponse.json(
      { error: "Please check the required fields and try again." },
      { status: 400 },
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.error("Contact API is missing its Supabase server configuration.");
    return NextResponse.json(
      { error: "The form is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const baseUrl = supabaseUrl.replace(/\/+$/, "");
    const ipHash = createHmac("sha256", serviceKey)
      .update(getClientAddress(req))
      .digest("hex");
    const rateLimitResponse = await fetch(
      `${baseUrl}/rest/v1/rpc/consume_contact_rate_limit`,
      {
        method: "POST",
        headers: serviceHeaders(serviceKey),
        body: JSON.stringify({
          p_ip_hash: ipHash,
          p_limit: 5,
          p_window_seconds: 3600,
        }),
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!rateLimitResponse.ok) {
      console.error(
        `Contact rate limit check failed (Supabase status ${rateLimitResponse.status}).`,
      );
      return NextResponse.json(
        { error: "The form is temporarily unavailable. Please try again later." },
        { status: 503 },
      );
    }

    const allowed: unknown = await rateLimitResponse.json();
    if (allowed !== true) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 },
      );
    }

    const id = randomUUID();
    const insertResponse = await fetch(
      `${baseUrl}/rest/v1/contact_submissions`,
      {
        method: "POST",
        headers: serviceHeaders(serviceKey),
        body: JSON.stringify({
          id,
          name: submission.name,
          email: submission.email,
          company: submission.company,
          country: submission.country,
          services: submission.services,
          description: submission.description,
          budget: submission.budget,
          timeframe: submission.timeframe,
        }),
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!insertResponse.ok) {
      console.error(
        `Contact submission could not be saved (Supabase status ${insertResponse.status}).`,
      );
      return NextResponse.json(
        { error: "We could not save your brief. Please try again later." },
        { status: 503 },
      );
    }

    const notificationSent = await sendNotification(submission, id).catch(
      (error: unknown) => {
        console.error(
          `Contact notification failed for submission ${id}:`,
          error,
        );
        return false;
      },
    );

    return NextResponse.json({
      success: true,
      message: notificationSent
        ? "Thank you. Our team has received your brief and will reply within 24 hours."
        : "Your brief was saved, but we could not notify our team by email. For urgent inquiries, email hello@nerdvana.global.",
      notificationSent,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "The form is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }
}
