// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Helper function to format the private key
const formatPrivateKey = (key: string) => {
  return key.replace(/\\n/g, '\n');
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message } = await request.json();

    // --- 1. Send the email (Complete and Correct Logic) ---
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

    // --- 2. Add the data to Google Sheets (Working Logic) ---
    try {
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        key: formatPrivateKey(process.env.GOOGLE_PRIVATE_KEY!),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
      
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      
      const newRow = {
        Timestamp: new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }),
        Name: name,
        Email: email,
        Message: message,
      };

      await sheet.addRow(newRow);

    } catch (sheetError) {
      console.error('Google Sheets Error:', sheetError);
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