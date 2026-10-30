import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, number>();

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    // Limit to 1 submission every 4 seconds per IP
    if (lastRequest && now - lastRequest < 4000) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a moment." },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    const body = await req.json();
    const { name, email, company, country, intent, budget, timeframe, honeypot } = body;

    // Honeypot spam trap
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry processed." });
    }

    if (!name || !email || !company || !intent) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log("=== NEW NERDVANA PROJECT BRIEF ===");
    console.log({
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      country: country || "Not specified",
      intent,
      budget: budget || "Not specified",
      timeline: timeframe || "Not specified",
      ip,
    });

    if (process.env.RESEND_API_KEY) {
      // Optional Resend email dispatch integration
    }

    return NextResponse.json({
      success: true,
      message: "Thank you. Our principals will review your brief and reply within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
