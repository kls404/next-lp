import type { Metadata } from 'next';
import Script from 'next/script';
import JadwalPageClient from './JadwalPageClient';

export const metadata: Metadata = {
  title: 'Jadwal Pertandingan',
  description: 'Lihat jadwal lengkap pertandingan Piala Dunia 2026 dari babak penyisihan grup hingga final.',
  alternates: {
    canonical: '/jadwal',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventSeries",
  "name": "Jadwal Pertandingan Piala Dunia 2026",
  "description": "Jadwal pertandingan untuk babak penyisihan grup Piala Dunia 2026.",
  "event": [
    {
      "@type": "SportsEvent",
      "name": "Meksiko vs Kanada",
      "startDate": "2026-06-11T19:00:00+07:00",
      "location": {
        "@type": "Place",
        "name": "Stadion Azteca",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calzada de Tlalpan 3465",
          "addressLocality": "Santa Úrsula Coapa",
          "postalCode": "04650",
          "addressRegion": "CDMX",
          "addressCountry": "MX"
        }
      },
      "competitor": [
        { "@type": "SportsTeam", "name": "Meksiko" },
        { "@type": "SportsTeam", "name": "Kanada" }
      ],
      "performer": [
        { "@type": "SportsTeam", "name": "Meksiko" },
        { "@type": "SportsTeam", "name": "Kanada" }
      ],
      "image": "/images/Stadion-Azteca.webp",
      "organizer": {
        "@type": "Organization",
        "name": "FIFA",
        "url": "https://www.fifa.com"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.fifa.com/tickets",
        "price": "100",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "SportsEvent",
      "name": "USA vs Bolivia",
      "startDate": "2026-06-11T22:00:00+07:00",
      "location": {
        "@type": "Place",
        "name": "MetLife Stadium",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1 MetLife Stadium Dr",
          "addressLocality": "East Rutherford",
          "postalCode": "07073",
          "addressRegion": "NJ",
          "addressCountry": "US"
        }
      },
      "competitor": [
        { "@type": "SportsTeam", "name": "USA" },
        { "@type": "SportsTeam", "name": "Bolivia" }
      ],
      "performer": [
        { "@type": "SportsTeam", "name": "USA" },
        { "@type": "SportsTeam", "name": "Bolivia" }
      ],
      "image": "/images/MetLife-Stadium.webp",
      "organizer": {
        "@type": "Organization",
        "name": "FIFA",
        "url": "https://www.fifa.com"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.fifa.com/tickets",
        "price": "100",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "SportsEvent",
      "name": "Argentina vs Chile",
      "startDate": "2026-06-12T19:00:00+07:00",
      "location": {
        "@type": "Place",
        "name": "SoFi Stadium",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1001 S Stadium Dr",
          "addressLocality": "Inglewood",
          "postalCode": "90301",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      "competitor": [
        { "@type": "SportsTeam", "name": "Argentina" },
        { "@type": "SportsTeam", "name": "Chile" }
      ],
      "performer": [
        { "@type": "SportsTeam", "name": "Argentina" },
        { "@type": "SportsTeam", "name": "Chile" }
      ],
      "image": "/images/SoFi-Stadium.webp",
      "organizer": {
        "@type": "Organization",
        "name": "FIFA",
        "url": "https://www.fifa.com"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://www.fifa.com/tickets",
        "price": "100",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  ]
};

export default function JadwalPage() {
  return (
    <>
      <Script
        id="json-ld-schema-jadwal"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JadwalPageClient />
    </>
  );
}
