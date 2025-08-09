// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'; // <-- NEW IMPORT

// Helper function to format the private key
const formatPrivateKey = (key: string) => {
  return key.replace(/\\n/g, '\n');
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, message } = await request.json();

    // --- 1. Send the email (existing logic) ---
    // This part remains the same
    const transporter = nodemailer.createTransport({ /* ... your transport config ... */ });
    await transporter.sendMail({ /* ... your mail options ... */ });

    // --- 2. Add the data to Google Sheets (updated logic) ---
    try {
      // Configure auth client
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        key: formatPrivateKey(process.env.GOOGLE_PRIVATE_KEY!),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      // Initialize the sheet using the new, two-argument method
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);

      await doc.loadInfo(); // loads document properties and worksheets
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
