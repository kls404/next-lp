import type { Metadata } from 'next';
import Script from 'next/script';
import TimPageClient from './TimPageClient';

export const metadata: Metadata = {
  title: 'Profil Tim Unggulan',
  description: 'Mengenal lebih dekat para raksasa sepak bola yang menjadi kandidat kuat peraih trofi Piala Dunia 2026, termasuk Argentina, Brasil, dan Prancis.',
  alternates: {
    canonical: '/tim',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Tim Unggulan Piala Dunia 2026",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": { "@type": "SportsTeam", "name": "Argentina" }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": { "@type": "SportsTeam", "name": "Prancis" }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": { "@type": "SportsTeam", "name": "Brasil" }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": { "@type": "SportsTeam", "name": "Inggris" }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": { "@type": "SportsTeam", "name": "Jerman" }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": { "@type": "SportsTeam", "name": "Spanyol" }
    }
  ]
};

export default function TimPage() {
  return (
    <>
      <Script
        id="json-ld-schema-tim"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TimPageClient />
    </>
  );
}
