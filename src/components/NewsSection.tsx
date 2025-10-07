import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';

const featuredArticle = {
  title: 'Analisis Mendalam: Bagaimana Format 48 Tim Akan Mengubah Wajah Piala Dunia?',
  excerpt: 'Ekspansi jumlah peserta dari 32 menjadi 48 tim bukan hanya soal angka. Ini adalah perubahan fundamental yang akan mempengaruhi strategi, meningkatkan persaingan, dan membuka pintu bagi negara-negara non-tradisional untuk unjuk gigi di panggung terbesar.',
  imageUrl: '/images/Analisis.jpg',
  date: '5 Oktober 2025',
};

const secondaryArticles = [
  {
    title: 'Sejarah Trofi Piala Dunia: Dari Jules Rimet hingga Sekarang',
    imageUrl: '/images/Sejarah-Trofi-Piala-Dunia.jpg',
    date: '4 Oktober 2025',
    excerpt: 'Menelusuri evolusi desain dan cerita di balik trofi paling ikonik di dunia olahraga.',
  },
  {
    title: 'Melihat Kembali Momen Ikonik di Sejarah Piala Dunia',
    imageUrl: '/images/Momen_Ikonik.jpg',
    date: '3 Oktober 2025',
    excerpt: 'Dari "Tangan Tuhan" Maradona hingga sundulan Zidane, ini adalah momen yang tak terlupakan.',
  },
  {
    title: 'Teknologi di Balik Piala Dunia: Dari VAR hingga AI',
    imageUrl: '/images/teknologi.jpg',
    date: '2 Oktober 2025',
    excerpt: 'Bagaimana teknologi canggih akan berperan dalam memastikan keadilan di setiap pertandingan.',
  },
  {
    title: 'Profil Tuan Rumah: Mengenal Budaya Sepak Bola di Tiga Negara',
    imageUrl: '/images/Profil_Tuan_Rumah.jpg',
    date: '1 Oktober 2025',
    excerpt: 'Melihat lebih dekat gairah dan budaya sepak bola di Amerika Serikat, Meksiko, dan Kanada.',
  },
];

const NewsSection = () => {
  return (
    <section id="berita" className="py-12 md:py-16">
      <ScrollAnimation className="text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Berita & Sorotan</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300">
          Analisis mendalam, fitur, dan berita terbaru seputar dunia sepak bola dan Piala Dunia 2026.
        </p>
        
        <div className="space-y-12">
          {/* Featured Article */}
          <div className="glass-container rounded-lg overflow-hidden text-left md:flex md:gap-8 p-6 items-center">
            <div className="md:w-1/2 relative h-64 md:h-80 mb-6 md:mb-0">
              <Image src={featuredArticle.imageUrl} alt={featuredArticle.title} fill style={{objectFit: 'cover'}} className="rounded-md" />
            </div>
            <div className="md:w-1/2">
              <p className="text-sm text-gray-400 mb-2">{featuredArticle.date}</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 hover:text-blue-400 transition-colors">
                <Link href="#">{featuredArticle.title}</Link>
              </h3>
              <p className="text-gray-300 leading-relaxed">{featuredArticle.excerpt}</p>
            </div>
          </div>

          {/* Secondary Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryArticles.map((article) => (
              <div key={article.title} className="glass-container rounded-lg overflow-hidden text-left flex flex-col">
                <div className="relative w-full h-48">
                  <Image src={article.imageUrl} alt={article.title} fill style={{objectFit: 'cover'}} />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs text-gray-400 mb-2">{article.date}</p>
                  <h4 className="text-xl font-bold mb-2 hover:text-blue-400 transition-colors">
                    <Link href="#">{article.title}</Link>
                  </h4>
                  <p className="text-sm text-gray-300 flex-grow">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default NewsSection;
