import type { Metadata } from 'next';
import Script from 'next/script';
import BeritaPageClient from './BeritaPageClient';

export const metadata: Metadata = {
  title: 'Berita Terbaru',
  description: 'Ikuti berita dan pengumuman terbaru seputar persiapan Piala Dunia 2026, penjualan tiket, dan analisis tim.',
  alternates: {
    canonical: '/berita',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Berita & Sorotan Piala Dunia 2026",
  "blogPost": [
    {
      "@type": "BlogPosting",
      "headline": "Analisis Mendalam: Bagaimana Format 48 Tim Akan Mengubah Wajah Piala Dunia?",
      "datePublished": "2025-10-05",
      "author": {"@type": "Organization", "name": "SDRT"},
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccer_field_-_empty.svg/1200px-Soccer_field_-_empty.svg.png"
    },
    {
      "@type": "BlogPosting",
      "headline": "Sejarah Trofi Piala Dunia: Dari Jules Rimet hingga Sekarang",
      "datePublished": "2025-10-04",
      "author": {"@type": "Organization", "name": "SDRT"},
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Jules_Rimet_Trophy_1974.jpg/800px-Jules_Rimet_Trophy_1974.jpg"
    },
    {
      "@type": "BlogPosting",
      "headline": "Melihat Kembali Momen Ikonik di Sejarah Piala Dunia",
      "datePublished": "2025-10-03",
      "author": {"@type": "Organization", "name": "SDRT"},
      "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Maradona_v_England_1986.jpg"
    }
  ]
};

export default function BeritaPage() {
  return (
    <>
      <Script
        id="json-ld-schema-berita"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BeritaPageClient />
    </>
  );
}
