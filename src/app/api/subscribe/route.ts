import { NextResponse } from 'next/server';

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email: string };

    if (!email?.trim() || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }

    // TODO: Add to email list via Resend / Mailchimp / ConvertKit
    console.info('New subscriber:', email);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
