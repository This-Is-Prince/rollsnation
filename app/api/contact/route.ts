/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { verifyRequestTokens } from '@/src/services/firebase-server';
import { contactsCol } from '@/src/services/utils';

export async function POST(request: Request) {
  try {
    const { appCheckValid } = await verifyRequestTokens(request);

    if (!appCheckValid) {
      return NextResponse.json(
        { error: 'Unauthorized request. Security token missing or invalid.' },
        { status: 401 }
      );
    }

    let body: any;
    try {
      body = await request.json();
    } catch (error) {
      console.error('Invalid JSON body:', error);
      return NextResponse.json(
        { error: 'Please fill the form correctly.' },
        { status: 400 }
      );
    }
    const { name, phone, email, subject, message } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    await contactsCol.add({
      name,
      phone,
      email,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date(),
      status: 'new',
      source: 'web_contact_form'
    });

    return NextResponse.json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}