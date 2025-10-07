import type { Metadata } from "next";
import Script from 'next/script';
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SnowflakeCursor from '@/components/SnowflakeCursor';
import GlobalBackground from '@/components/GlobalBackground';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  applicationName: 'Info World Cup 2026',
  title: {
    default: 'Info World Cup 2026 | Piala Dunia 2026',
    template: '%s | Info World Cup 2026',
  },
  description: "Info World Cup 2026: Situs informasi lengkap jadwal, tim, stadion, dan berita terbaru Piala Dunia 2026.",
  keywords: ['info world cup', 'piala dunia 2026', 'jadwal piala dunia', 'world cup 2026'],
  metadataBase: new URL('https://infoworldcup.wiki'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png', // Anda perlu membuat & menaruh file ini di folder public
  },
  appleWebApp: {
    title: 'Info World Cup 2026',
    statusBarStyle: 'default',
  },
  openGraph: {
    type: 'website',
    url: 'https://infoworldcup.wiki',
    title: 'Info World Cup 2026 | Piala Dunia 2026',
    description: 'Info World Cup 2026: Situs informasi lengkap jadwal, tim, stadion, dan berita terbaru Piala Dunia 2026.',
    siteName: 'Info World Cup 2026',
    images: [{
      url: 'https://infoworldcup.wiki/images/info-fifa.webp', // Anda perlu membuat & menaruh file ini di folder public
      width: 1200,
      height: 630,
      alt: 'Info World Cup 2026 Banner',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Info World Cup 2026 | Piala Dunia 2026',
    description: 'Info World Cup 2026: Situs informasi lengkap jadwal, tim, stadion, dan berita terbaru Piala Dunia 2026.',
    images: ['https://infoworldcup.wiki/images/info-fifa.webp'], // Gunakan gambar yang sama
  },
  other: {
    'mobile-web-app-capable': 'yes',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Info World Cup 2026',
    url: 'https://infoworldcup.wiki',
    publisher: {
      '@type': 'Organization',
      name: 'infoworldcup',
      logo: {
        '@type': 'ImageObject',
        url: 'https://infoworldcup.wiki/images/logo.png',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://infoworldcup.wiki/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="id">
      <body className={`${poppins.className} text-white flex flex-col min-h-screen`}>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GlobalBackground />
        <SnowflakeCursor />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
