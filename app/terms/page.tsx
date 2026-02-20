import type { Metadata } from 'next';

export const revalidate = 86400;
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Terms of Service | Rolls Nation',
  description: 'Terms of Service for Rolls Nation India. Read our terms for using the website and franchise information.',
  alternates: { canonical: 'https://rollsnationindia.in/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-20 text-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl font-black uppercase mb-2">Terms of Service</h1>
        <p className="text-zinc-500 text-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
            <p>By accessing and using rollsnationindia.in, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Use of Website</h2>
            <p>This website is intended for informational purposes regarding Rolls Nation franchise opportunities, products, and brand information. The content on this site is subject to change without notice. Rolls Nation reserves the right to modify or discontinue any part of the website at any time.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Franchise Information Disclaimer</h2>
            <p>Investment figures, ROI projections, and payback period estimates mentioned on this website are approximate and based on historical data and estimates. Actual results may vary significantly based on location, management quality, market conditions, competition, and other factors.</p>
            <p className="mt-3">Visiting this website or submitting an inquiry does not constitute a franchise agreement or any binding obligation on either party. A formal franchise agreement is required before any franchise relationship is established.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p>All content on this website including but not limited to the Rolls Nation brand name, logo, images, text, menu items, and design elements are the property of Rolls Nation India and are protected by applicable intellectual property laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p>Rolls Nation shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website or its content. The information provided is on an &quot;as is&quot; basis without warranties of any kind.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">External Links</h2>
            <p>This website may contain links to external websites (WhatsApp, social media platforms, Google Maps). Rolls Nation is not responsible for the content, privacy policies, or practices of any third-party websites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the jurisdiction of courts in Ludhiana, Punjab, India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p>For any questions regarding these terms, contact us at:</p>
            <div className="mt-3 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <p className="font-semibold">Rolls Nation India</p>
              <p>Email: <a href="mailto:info@rollsnation.in" className="text-yellow-500 hover:underline">info@rollsnation.in</a></p>
              <p>Phone: <a href="tel:+917696833321" className="text-yellow-500 hover:underline">+91 76968-33321</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
