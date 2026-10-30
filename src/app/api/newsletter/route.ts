import { NextRequest, NextResponse } from "next/server";

const newsletterSubscribers = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const normalized = email.trim().toLowerCase();
    newsletterSubscribers.add(normalized);

    console.log(`[Newsletter] Subscribed: ${normalized} (Total: ${newsletterSubscribers.size})`);

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully to Studio Dispatch.",
    });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Failed to process newsletter subscription." },
      { status: 500 }
    );
  }
}

