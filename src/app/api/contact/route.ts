// File: src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const formatPrivateKey = (key: string) => {
  return key.replace(/\\n/g, '\n');
};

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    // MODIFICATION START: Destructure 'fax' for the honeypot check.
    const { name, email, company, message, fax } = await request.json();

    // Check the honeypot field. If it's filled, it's a bot.
    if (fax) {
      console.log('Honeypot triggered. Likely a bot submission.');
      // Return a success response to the bot so it thinks it succeeded.
      return NextResponse.json({ message: 'Submission successful!' });
    }
    // MODIFICATION END

    // --- 1. Send the email ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });

    await Promise.race([
      transporter.sendMail({
        from: email,
        to: process.env.CONTACT_EMAIL,
        subject: `New contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Company:</strong> ${company || 'Not provided'}</p>
               <hr>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      }),
      new Promise((_, reject) => {
        controller.signal.addEventListener('abort', () => {
          reject(new Error('Email sending timeout'));
        });
      })
    ]);

    // --- 2. Add the data to Google Sheets ---
    try {
      const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        key: formatPrivateKey(process.env.GOOGLE_PRIVATE_KEY!),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);

      await Promise.race([
        (async () => {
          await doc.loadInfo();
          const sheet = doc.sheetsByIndex[0];
          
          const newRow = {
            Timestamp: new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }),
            Name: name,
            Email: email,
            Company: company,
            Message: message,
          };

          await sheet.addRow(newRow);
        })(),
        new Promise((_, reject) => {
          controller.signal.addEventListener('abort', () => {
            reject(new Error('Google Sheets timeout'));
          });
        })
      ]);

    } catch (sheetError) {
      console.error('Google Sheets Error:', sheetError);
    } finally {
      clearTimeout(timeoutId);
    }

    return NextResponse.json({ ok: true });

  } catch (error: unknown) {
    console.error('Main API Error:', error);
    
    if (error instanceof Error && (error.name === 'AbortError' || error.message?.includes('timeout'))) {
      return NextResponse.json(
        { error: 'Request timeout - please try again' },
        { status: 408 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// MODIFICATION: Removed the 'config' export.
// In the App Router, route segment configuration is handled differently
// and this object is ignored. The default body size limits are sufficient.