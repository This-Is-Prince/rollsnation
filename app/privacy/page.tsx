import type { Metadata } from 'next';
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  PRIMARY_PHONE_HREF,
  PRIMARY_PHONE_LABEL,
} from '@/src/config/site';
import { buildPageMetadata } from '@/src/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/privacy',
    title: 'Privacy Policy | Rolls Nation',
    description: 'Privacy Policy for Rolls Nation India. Learn how we collect, use, and protect your personal information.',
    robots: { index: true, follow: true },
    includeOpenGraph: false,
  });
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-black uppercase mb-2">Privacy Policy</h1>
        <p className="text-zinc-500 text-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p>We collect information you voluntarily provide when filling out our contact form, including your name, phone number, email address, subject, and message. We do not collect any payment information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p>We use your information solely to respond to your franchise inquiries and general queries. We do not sell, rent, or trade your personal information to any third party. Your contact details may be used to follow up on your inquiry about Rolls Nation franchise opportunities.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p>Your data is stored securely on Firebase Firestore (Google Cloud). We implement industry-standard security measures including Firebase App Check to prevent unauthorized access. Data is encrypted in transit and at rest.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies & Analytics</h2>
            <p>We use Google Analytics 4 and Firebase Analytics to understand how visitors interact with our website. This data is anonymized and used only to improve our website experience. Google Analytics uses cookies to track sessions. You can opt out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p>Our website uses the following third-party services:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Google Analytics 4 — website traffic analytics</li>
              <li>Firebase by Google — database and security</li>
              <li>Google reCAPTCHA — spam prevention via Firebase App Check</li>
              <li>Cloudflare — CDN and security proxy</li>
              <li>Vercel — website hosting</li>
            </ul>
            <p className="mt-3">Each of these services has their own privacy policies which govern their use of data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p>You have the right to request deletion of your personal data at any time. Contact us at {CONTACT_EMAIL} with your request and we will process it within 30 days.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p>For any privacy concerns or data deletion requests, contact us at:</p>
            <div className="mt-3 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <p className="font-semibold">Rolls Nation India</p>
              <p>Email: <a href={CONTACT_EMAIL_HREF} data-analytics-source="privacy_email" className="text-yellow-500 hover:underline">{CONTACT_EMAIL}</a></p>
              <p>Phone: <a href={PRIMARY_PHONE_HREF} data-analytics-source="privacy_call" className="text-yellow-500 hover:underline">{PRIMARY_PHONE_LABEL}</a></p>
              <p>Address: S.C.O 35, GF, Celebration Bazar, G.T Road Khanna, Punjab 141401</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
