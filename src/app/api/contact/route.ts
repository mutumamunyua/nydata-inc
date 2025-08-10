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
    // Set a timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    // ✨ MODIFIED: Added 'company' to receive it from the form
    const { name, email, company, message } = await request.json();

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

    // Add timeout to email sending
    await Promise.race([
      transporter.sendMail({
        from: email,
        to: process.env.CONTACT_EMAIL,
        subject: `New contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
        // ✨ MODIFIED: Added Company to the HTML email body
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

      // Add timeout to Google Sheets operation
      await Promise.race([
        (async () => {
          await doc.loadInfo();
          const sheet = doc.sheetsByIndex[0];
          
          const newRow = {
            Timestamp: new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' }),
            Name: name,
            Email: email,
            Company: company, // ✨ NEW: Added the company field to be saved
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
      // Don't fail the entire request if Google Sheets fails
    } finally {
      clearTimeout(timeoutId);
    }

    return NextResponse.json({ ok: true });

  } catch (error: any) {
    console.error('Main API Error:', error);
    
    // Handle timeout specifically
    if (error.name === 'AbortError' || error.message?.includes('timeout')) {
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

// Add config to handle larger payloads and longer timeouts
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};