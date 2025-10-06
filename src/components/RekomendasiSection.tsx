import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the type for a single recommendation item
interface RekomendasiItem {
  name: string;
  logoUrl: string;
  minDeposit: string;
  rating: number;
  pros: string[];
  siteUrl: string;
}

// Helper component for star ratings
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0v15z"/></svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-600 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
      ))}
      <span className="text-gray-400 text-xs ml-2">{rating.toFixed(1)}</span>
    </div>
  );
};

// The component now accepts data as a prop
const RekomendasiSection = ({ recommendationData }: { recommendationData: RekomendasiItem[] }) => {
  return (
    <section id="rekomendasi" className="py-12 md:py-16">
      <div className="text-center text-white animate-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Rekomendasi Situs Betting</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300">
          Daftar situs terpercaya untuk meramaikan pengalaman Piala Dunia 2026 Anda.
        </p>

        {/* Recommendation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendationData.map((site) => (
            <div key={site.name} className="glass-container p-6 text-left rounded-lg flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Image src={site.logoUrl} alt={`Logo ${site.name}`} width={150} height={150} className="mr-4 rounded-md  p-1" />
                  <div>
                    <h3 className="text-2xl font-bold">{site.name}</h3>
                    <StarRating rating={site.rating} />
                  </div>
                </div>
              </div>
              <div className="border-y border-gray-700 py-4 my-4 space-y-2 text-sm">
                <p><strong>Minimal Deposit:</strong> {site.minDeposit}</p>
                <div>
                  <strong>Kelebihan:</strong>
                  <ul className="list-disc list-inside pl-2 mt-1">
                    {site.pros.map(pro => <li key={pro}>{pro}</li>)}
                  </ul>
                </div>
              </div>
              <Link href={site.siteUrl} target="_blank" rel="noopener noreferrer" className="mt-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Kunjungi Situs
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 text-center text-gray-500 text-sm border-t border-gray-800 pt-8 max-w-4xl mx-auto">
          <h4 className="font-bold text-gray-400 mb-2 text-base">PERINGATAN</h4>
          <p>Konten ini ditujukan untuk audiens berusia 18 tahun ke atas. Perjudian dalam bentuk apapun dapat menyebabkan kecanduan dan kerugian finansial. Harap bermain dengan bijak dan bertanggung jawab. Jangan pernah berjudi dengan uang yang tidak bisa Anda relakan kehilangannya.</p>
        </div>
      </div>
    </section>
  );
};

export default RekomendasiSection;