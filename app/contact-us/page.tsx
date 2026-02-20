import { permanentRedirect } from 'next/navigation';

export default function LegacyContactUsPage() {
  permanentRedirect('/contact');
}
