import { permanentRedirect } from 'next/navigation';

export default function LegacyOurOutletsPage() {
  permanentRedirect('/testimony');
}
