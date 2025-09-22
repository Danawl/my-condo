import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';



export async function POST(request) {
  try {
    const { sender, message } = await request.json();
    if (!sender || !message) {
      return NextResponse.json({ message: 'Sender and message are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: sender,
      subject: 'Thank You for Your Interest in Our Condo',
        text: `Hello,

        Thank you for reaching out regarding our condo. We appreciate your interest!

        Our team will contact you soon with more details and answer any questions you may have. If you need immediate assistance, feel free to reply to this email.

        Best regards,
        Daniel`,
    });

    return NextResponse.json({ message: 'Reply sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message || 'Failed to send email' }, { status: 500 });
  }
}