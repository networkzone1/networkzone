import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SUPPORT_TO_EMAIL,
      SUPPORT_FROM_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SUPPORT_TO_EMAIL) {
      console.warn("[networkzone] Missing SMTP configuration env vars, skipping contact email.");
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

    const subject = body.subject
      ? `[networkzone contact] ${body.subject}`
      : "New contact message from networkzone";

    const text = `A new contact message was submitted via networkzone:\n\n${JSON.stringify(
      body,
      null,
      2,
    )}`;

    try {
      await transporter.sendMail({
        from: SUPPORT_FROM_EMAIL || SMTP_USER,
        to: SUPPORT_TO_EMAIL,
        subject,
        text,
      });

      return NextResponse.json({ success: true, emailSent: true });
    } catch (sendError) {
      console.error("[networkzone] Failed to send contact email", sendError);
      // حتى لو الإيميل فشل، نرجع نجاح للعميل ونكتفي بتسجيل الخطأ في اللوج
      return NextResponse.json({ success: true, emailSent: false });
    }
  } catch (error) {
    console.error("[networkzone] Failed to handle contact form submission", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
