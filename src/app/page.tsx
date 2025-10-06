import type { Metadata } from 'next';
import Script from 'next/script';
import HomePageClient from './HomePageClient'; // Import the new client component

// SEO Metadata for the Homepage
export const metadata: Metadata = {
  title: 'Beranda', // This will become "Beranda | Piala Dunia 2026"
  description: 'Situs informasi utama untuk Piala Dunia 2026. Temukan berita terbaru, hitung mundur, dan informasi penting lainnya mengenai turnamen di Amerika, Meksiko, dan Kanada.',
};

// JSON-LD Schema for the Homepage
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": "Piala Dunia FIFA 2026",
    "description": "Turnamen sepak bola internasional edisi ke-23 yang diselenggarakan oleh FIFA, menampilkan 48 tim dan diselenggarakan bersama oleh 16 kota di tiga negara: Kanada, Meksiko, dan Amerika Serikat.",
    "startDate": "2026-06-11",
    "endDate": "2026-07-19",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": [
      {"@type": "Country", "name": "Amerika Serikat"},
      {"@type": "Country", "name": "Kanada"},
      {"@type": "Country", "name": "Meksiko"}
    ]
  };

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-schema-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePageClient />
    </>
  );
}