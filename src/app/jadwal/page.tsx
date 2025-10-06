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
      "location": { "@type": "Place", "name": "Stadion Azteca, Mexico City" },
      "competitor": [
        { "@type": "SportsTeam", "name": "Meksiko" },
        { "@type": "SportsTeam", "name": "Kanada" }
      ]
    },
    {
      "@type": "SportsEvent",
      "name": "USA vs Bolivia",
      "startDate": "2026-06-11T22:00:00+07:00",
      "location": { "@type": "Place", "name": "MetLife Stadium, New Jersey" },
      "competitor": [
        { "@type": "SportsTeam", "name": "USA" },
        { "@type": "SportsTeam", "name": "Bolivia" }
      ]
    },
    {
      "@type": "SportsEvent",
      "name": "Argentina vs Chile",
      "startDate": "2026-06-12T19:00:00+07:00",
      "location": { "@type": "Place", "name": "SoFi Stadium, Los Angeles" },
      "competitor": [
        { "@type": "SportsTeam", "name": "Argentina" },
        { "@type": "SportsTeam", "name": "Chile" }
      ]
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
