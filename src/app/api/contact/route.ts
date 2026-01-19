import nodemailer from "nodemailer";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Configure SMTP transporter (example: Gmail)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // e.g., your Gmail
        pass: process.env.SMTP_PASS, // Gmail app password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender
      to: "sacheeghimire@gmail.com", // your inbox
      subject: `New message from ${name}`,
      text: `You have a new contact message from ${name} (${email}):\n\n${message}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #fd00f8ff;">New Contact Form Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
      <p style="white-space: pre-wrap;">${message}</p>
      <p style="margin-top: 30px; font-size: 12px; color: #999;">
        This email was sent from your website contact form.
      </p>
    </div>
  `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
