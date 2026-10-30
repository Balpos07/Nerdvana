import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting map: ip -> last request timestamp
const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    // Limit to 1 request every 5 seconds per IP
    if (lastRequest && now - lastRequest < 5000) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before resubmitting." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await req.json();
    const { name, company, intent, budget, timeframe, email, phone, honeypot } = body;

    // Honeypot spam trap
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry processed." });
    }

    // Required fields validation
    if (!name || !email || !intent || !budget || !timeframe) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Log inquiry for server records / CMS storage
    console.log("=== NEW INCOMING AGENCY INQUIRY ===");
    console.log({
      timestamp: new Date().toISOString(),
      name,
      company: company || "N/A",
      intent,
      budget,
      timeframe,
      email,
      phone: phone || "N/A",
      ip,
    });

    // If Resend API key is provided, we can dispatch via Resend SDK
    if (process.env.RESEND_API_KEY) {
      try {
        // e.g. await resend.emails.send({...})
      } catch (err) {
        console.error("Resend delivery notice:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Our principals will review your brief and reply within 24 hours.",
    });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

