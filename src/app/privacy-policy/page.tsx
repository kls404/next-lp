import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Info World Cup 2026',
  description: 'Pahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat Anda mengunjungi situs informasi Piala Dunia 2026 kami.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true, // As requested by user
    follow: true,
  },
};

const sections = [
  { id: 'introduction', title: 'Pendahuluan' },
  { id: 'information-we-collect', title: 'Informasi yang Kami Kumpulkan' },
  { id: 'use-of-your-information', title: 'Penggunaan Informasi Anda' },
  { id: 'contact-us', title: 'Hubungi Kami' },
];

const PrivacyPolicyPage = () => {
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
        id="json-ld-schema-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalPageLayout title="Kebijakan Privasi" sections={sections}>
        <p className="text-gray-400 text-sm">Terakhir diperbarui: 26 Oktober 2025</p>

        <h2 id="introduction">Pendahuluan</h2>
        <p>
          Selamat datang di situs kami. Kami berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkap, dan menjaga informasi Anda saat Anda mengunjungi situs web kami.
        </p>

        <h2 id="information-we-collect">Informasi yang Kami Kumpulkan</h2>
        <p>
          Kami dapat mengumpulkan informasi tentang Anda dalam berbagai cara. Informasi yang dapat kami kumpulkan di Situs meliputi:
        </p>
        <ul>
          <li>
            <strong>Data Pribadi:</strong> Informasi yang dapat diidentifikasi secara pribadi, seperti nama, alamat email, dan nomor telepon Anda, serta informasi demografis, seperti usia, jenis kelamin, dan minat Anda, yang Anda berikan secara sukarela kepada kami saat Anda mendaftar ke Situs atau saat Anda memilih untuk berpartisipasi dalam berbagai aktivitas yang terkait dengan Situs.
          </li>
          <li>
            <strong>Data Turunan:</strong> Informasi yang dikumpulkan server kami secara otomatis saat Anda mengakses Situs, seperti alamat IP, jenis browser, sistem operasi, waktu akses, dan halaman yang telah Anda lihat secara langsung sebelum dan sesudah mengakses Situs.
          </li>
        </ul>

        <h2 id="use-of-your-information">Penggunaan Informasi Anda</h2>
        <p>
          Memiliki informasi yang akurat tentang Anda memungkinkan kami untuk memberi Anda pengalaman yang lancar, efisien, dan disesuaikan. Secara khusus, kami dapat menggunakan informasi yang dikumpulkan tentang Anda melalui Situs untuk:
        </p>
        <ul>
          <li>Membuat dan mengelola akun Anda.</li>
          <li>Mengirim email kepada Anda mengenai akun atau pesanan Anda.</li>
          <li>Memenuhi dan mengelola pembelian, pesanan, pembayaran, dan transaksi lain yang terkait dengan Situs.</li>
          <li>Meningkatkan efisiensi dan pengoperasian Situs.</li>
        </ul>

        <h2 id="contact-us">Hubungi Kami</h2>
        <p>
          Jika Anda memiliki pertanyaan atau komentar tentang Kebijakan Privasi ini, silakan hubungi kami di: contact@example.com
        </p>
      </LegalPageLayout>
    </>
  );
};

export default PrivacyPolicyPage;