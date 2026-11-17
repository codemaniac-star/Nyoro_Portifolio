import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let data: unknown;
  try { data = await request.json(); } catch { return NextResponse.json({ error: "Please send a valid form." }, { status: 400 }); }
  if (!data || typeof data !== "object") return NextResponse.json({ error: "Please send a valid form." }, { status: 400 });
  const body = data as Record<string, unknown>;
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !message || message.length > 5000) return NextResponse.json({ error: "Check the name, email, and message fields and try again." }, { status: 400 });
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "The contact form is ready, but email delivery has not been configured yet. Please write directly to newtnmukuha06@gmail.com." }, { status: 503 });
  const sent = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>", to: [process.env.CONTACT_TO_EMAIL || "newtnmukuha06@gmail.com"], reply_to: email, subject: `Portfolio inquiry from ${name}`, text: `${message}\n\n” ${name} (${email})` }) });
  if (!sent.ok) return NextResponse.json({ error: "Email delivery failed. Please try again or email directly." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
