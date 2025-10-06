import type { Metadata } from 'next';
import NewsletterPageClient from './NewsletterPageClient';

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'Berlangganan newsletter kami untuk mendapatkan berita eksklusif, informasi penjualan tiket, dan pembaruan penting lainnya seputar Piala Dunia 2026.',
};

export default function NewsletterPage() {
  return <NewsletterPageClient />;
}