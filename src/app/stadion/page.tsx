import type { Metadata } from 'next';
import Script from 'next/script';
import StadionPageClient from './StadionPageClient';

export const metadata: Metadata = {
  title: 'Kota & Stadion Tuan Rumah',
  description: 'Jelajahi kota-kota ikonik dan stadion megah yang akan menjadi panggung utama Piala Dunia 2026.',
  alternates: {
    canonical: '/stadion',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Stadion Piala Dunia 2026",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "StadiumOrArena",
        "name": "MetLife Stadium",
        "address": "East Rutherford, New Jersey, USA"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "StadiumOrArena",
        "name": "SoFi Stadium",
        "address": "Inglewood, California, USA"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "StadiumOrArena",
        "name": "AT&T Stadium",
        "address": "Arlington, Texas, USA"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "StadiumOrArena",
        "name": "Stadion Azteca",
        "address": "Mexico City, Meksiko"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "StadiumOrArena",
        "name": "BC Place",
        "address": "Vancouver, Kanada"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "StadiumOrArena",
        "name": "Mercedes-Benz Stadium",
        "address": "Atlanta, Georgia, USA"
      }
    }
  ]
};

export default function StadionPage() {
  return (
    <>
      <Script
        id="json-ld-schema-stadion"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StadionPageClient />
    </>
  );
}