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
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1 MetLife Stadium Dr",
          "addressLocality": "East Rutherford",
          "addressRegion": "NJ",
          "addressCountry": "US"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "StadiumOrArena",
        "name": "SoFi Stadium",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1001 S Stadium Dr",
          "addressLocality": "Inglewood",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "StadiumOrArena",
        "name": "AT&T Stadium",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "One AT&T Way",
          "addressLocality": "Arlington",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "StadiumOrArena",
        "name": "Stadion Azteca",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calzada de Tlalpan 3465",
          "addressLocality": "Santa Úrsula Coapa",
          "postalCode": "04650",
          "addressRegion": "CDMX",
          "addressCountry": "MX"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "StadiumOrArena",
        "name": "BC Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "777 Pacific Boulevard",
          "addressLocality": "Vancouver",
          "addressRegion": "BC",
          "addressCountry": "CA"
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "StadiumOrArena",
        "name": "Mercedes-Benz Stadium",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1 AMB Drive Northwest",
          "addressLocality": "Atlanta",
          "addressRegion": "GA",
          "addressCountry": "US"
        }
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