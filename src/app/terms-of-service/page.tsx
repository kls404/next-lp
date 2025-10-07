import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Ketentuan Layanan | Info World Cup 2026',
  description: 'Baca ketentuan layanan kami untuk memahami aturan dan pedoman penggunaan situs informasi Piala Dunia 2026 kami.',
  alternates: {
    canonical: '/terms-of-service',
  },
  robots: {
    index: true, // As requested by user
    follow: true,
  },
};

const sections = [
  { id: 'agreement-to-terms', title: 'Persetujuan Ketentuan' },
  { id: 'use-of-website', title: 'Penggunaan Situs Web' },
  { id: 'intellectual-property', title: 'Hak Kekayaan Intelektual' },
  { id: 'governing-law', title: 'Hukum yang Mengatur' },
  { id: 'contact-us', title: 'Hubungi Kami' },
];

const TermsOfServicePage = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: metadata.title as string,
    url: `https://infoworldcup.wiki${metadata.alternates?.canonical}`,
    description: metadata.description as string,
  };

  return (
    <>
      <Script
        id="json-ld-schema-terms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPageLayout title="Ketentuan Layanan" sections={sections}>
        <p className="text-gray-400 text-sm">Terakhir diperbarui: 26 Oktober 2025</p>

        <h2 id="agreement-to-terms">1. Persetujuan Ketentuan</h2>
        <p>
          Dengan menggunakan situs web kami, Anda setuju untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak menyetujui Ketentuan ini, jangan gunakan situs web ini. Kami dapat merevisi Ketentuan dari waktu ke waktu, dan versi terbaru akan selalu diposting di situs web kami.
        </p>

        <h2 id="use-of-website">2. Penggunaan Situs Web</h2>
        <p>
          Anda dapat menggunakan situs web hanya untuk tujuan yang sah dan sesuai dengan Ketentuan ini. Anda setuju untuk tidak menggunakan situs web:
        </p>
        <ul>
          <li>Dengan cara apa pun yang melanggar hukum atau peraturan federal, negara bagian, lokal, atau internasional yang berlaku.</li>
          <li>Untuk terlibat dalam perilaku lain apa pun yang membatasi atau menghalangi penggunaan atau kenikmatan siapa pun atas situs web.</li>
        </ul>

        <h2 id="intellectual-property">3. Hak Kekayaan Intelektual</h2>
        <p>
          Situs web dan seluruh konten, fitur, dan fungsionalitasnya (termasuk namun tidak terbatas pada semua informasi, perangkat lunak, teks, tampilan, gambar, video, dan audio, serta desain, pemilihan, dan pengaturannya) dimiliki oleh Perusahaan, pemberi lisensinya, atau penyedia materi tersebut lainnya dan dilindungi oleh hak cipta internasional, merek dagang, paten, rahasia dagang, dan undang-undang kekayaan intelektual atau hak kepemilikan lainnya.
        </p>

        <h2 id="governing-law">4. Hukum yang Mengatur</h2>
        <p>
          Semua hal yang berkaitan dengan situs web dan Ketentuan ini, dan setiap perselisihan atau klaim yang timbul darinya atau terkait dengannya, akan diatur oleh dan ditafsirkan sesuai dengan hukum internal yurisdiksi tanpa memberikan efek pada pilihan atau pertentangan ketentuan atau aturan hukum.
        </p>

        <h2 id="contact-us">5. Hubungi Kami</h2>
        <p>
          Jika Anda memiliki pertanyaan tentang Ketentuan Layanan ini, silakan hubungi kami di: contact@example.com
        </p>
      </LegalPageLayout>
    </>
  );
};

export default TermsOfServicePage;