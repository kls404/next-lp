import type { Metadata } from 'next';
import RekomendasiPageClient from './RekomendasiPageClient';
import fs from 'fs/promises';
import path from 'path';

// SEO-optimized metadata for the recommendation page
export const metadata: Metadata = {
  title: 'Rekomendasi Situs Betting World Cup ft. NYALABET, KOINVEGAS, & lainnya',
  description: 'Dapatkan info rekomendasi situs betting terpercaya untuk piala dunia 2026. Temukan review untuk NYALABET, KOINVEGAS, DEWAHUB, dan brand lainnya.',
  alternates: {
    canonical: '/rekomendasi',
  },
};

interface RekomendasiItem {
  name: string;
  logoUrl: string;
  minDeposit: string;
  rating: number;
  pros: string[];
  siteUrl: string;
}

async function getRecommendationData(): Promise<RekomendasiItem[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'rekomendasi.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Could not read the recommendation data file:", error);
    return [];
  }
}

export default async function RekomendasiPage() {
  const data = await getRecommendationData();

  // Dynamically generate JSON-LD Schema Markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Rekomendasi Situs Betting Piala Dunia 2026',
    itemListElement: data.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service', // Using 'Service' as it is more fitting for betting sites
        name: `Review ${item.name}`,
        description: `Analisis dan review ${item.name}, situs betting untuk World Cup 2026.`,
        provider: {
          '@type': 'Organization',
          name: item.name,
          url: item.siteUrl,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: item.rating,
          bestRating: '5',
          ratingCount: '1', // Using a placeholder count as it's not in the data
        },
        url: item.siteUrl,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RekomendasiPageClient data={data} />
    </>
  );
}