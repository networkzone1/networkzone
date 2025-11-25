import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("[networkzone] New remote session request", body);

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SUPPORT_TO_EMAIL,
      SUPPORT_FROM_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SUPPORT_TO_EMAIL) {
      console.warn("[networkzone] Missing SMTP configuration env vars, skipping email send.");
      return NextResponse.json({ success: true, emailSent: false });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `New remote session request - ${body.company ?? "Unknown company"}`;

    const text = `A new remote session request was submitted via networkzone:\n\n${JSON.stringify(
      body,
      null,
      2,
    )}`;

    await transporter.sendMail({
      from: SUPPORT_FROM_EMAIL || SMTP_USER,
      to: SUPPORT_TO_EMAIL,
      subject,
      text,
    });

    return NextResponse.json({ success: true, emailSent: true });
  } catch (error) {
    console.error("[networkzone] Failed to handle remote session request", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
