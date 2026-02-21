/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
// import { verifyRequestTokens } from '@/src/services/firebase-server';
import { contactsCol } from '@/src/services/utils';

function normalizeHeaderValue(value: string | null) {
  return value?.split(',')[0]?.trim().toLowerCase() ?? null;
}

function normalizeHost(value: string | null) {
  const normalized = normalizeHeaderValue(value);
  if (!normalized) {
    return null;
  }

  if (normalized.startsWith('[')) {
    return normalized;
  }

  return normalized.split(':')[0] ?? null;
}

function normalizeProtocol(value: string | null, host: string | null) {
  const normalized = normalizeHeaderValue(value);

  if (normalized === 'http' || normalized === 'https') {
    return normalized;
  }

  return host === 'localhost' || host === '127.0.0.1' ? 'http' : 'https';
}

export async function POST(request: Request) {
  try {
    // const { appCheckValid } = await verifyRequestTokens(request);

    // if (!appCheckValid) {
    //   return NextResponse.json(
    //     { error: 'Unauthorized request. Security token missing or invalid.' },
    //     { status: 401 }
    //   );
    // }

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
    const { name, phone, email, city, subject, message, trackingContext } = body;
    const normalizedCity =
      typeof city === 'string' ? city.trim() : '';

    if (!name || !phone || !email || !normalizedCity || !message) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const requestHost = normalizeHost(
      request.headers.get('x-forwarded-host') ?? request.headers.get('host')
    );
    const protocol = normalizeProtocol(
      request.headers.get('x-forwarded-proto'),
      requestHost
    );
    const requestOrigin = requestHost ? `${protocol}://${requestHost}` : null;
    const requestReferrer = request.headers.get('referer');
    const userAgent = request.headers.get('user-agent');

    await contactsCol.add({
      name,
      phone,
      email,
      city: normalizedCity,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date(),
      status: 'new',
      source: 'web_contact_form',
      sourceHost: requestHost ?? null,
      sourceOrigin: requestOrigin,
      pagePath:
        typeof trackingContext?.page_path === 'string'
          ? trackingContext.page_path
          : null,
      analytics: {
        client: trackingContext && typeof trackingContext === 'object'
          ? trackingContext
          : null,
        requestReferrer,
        userAgent,
      },
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
