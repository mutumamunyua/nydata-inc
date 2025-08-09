// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Helper function to format the private key
const formatPrivateKey = (key: string) => {
  return key.replace(/\\n/g, '\n');
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message } = await request.json();

    // --- 1. Send the email (existing logic) ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New contact from ${name}`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    // --- 2. Add the data to Google Sheets (new logic) ---
    try {
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!);
      
      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        private_key: formatPrivateKey(process.env.GOOGLE_PRIVATE_KEY!),
      });

      await doc.loadInfo(); // loads document properties and worksheets
      const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
      
      const newRow = {
        Timestamp: new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }),
        Name: name,
        Email: email,
        Message: message,
      };

      await sheet.addRow(newRow);

    } catch (sheetError) {
      console.error('Google Sheets Error:', sheetError);
      // We don't want to fail the whole request if only the sheet writing fails
      // The user will still get a success message because the email sent successfully
    }

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error('Main API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
