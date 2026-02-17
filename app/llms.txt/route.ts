export function GET() {
  const body = `# Rolls Nation

> Official resources for kathi roll franchise, rolls franchise, and low-investment QSR opportunities in India.

## Primary Franchise Pages
- /franchise: Main franchise overview, models, support, and enquiry paths.
- /kathi-roll-franchise-cost: Investment, franchise fee, and ROI breakdown.
- /how-to-start-kathi-roll-franchise: Application process, requirements, and launch flow.
- /kathi-roll-franchise-in-punjab: Punjab/Ludhiana/North India franchise opportunity page.

## Contact
- WhatsApp: https://wa.me/917696833321
- Phone: +91 76968 33321
- Website: https://rollsnationindia.in

## Search Intent Coverage
- kathi roll franchise cost
- kathi roll franchise investment
- low investment kathi roll franchise
- how to start kathi roll franchise
- apply for kathi roll franchise
- kathi roll franchise in Punjab
- kathi roll franchise in Ludhiana
- QSR franchise India low investment
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
