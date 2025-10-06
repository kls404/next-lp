import React from 'react';
import Image from 'next/image';

const InfoSection = () => {
  return (
    <section id="info" className="py-8 md:py-12">
      <div className="glass-container p-8 md:p-12 animate-scroll">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image on the left */}
          <div
            className="md:w-1/3 w-full animate-scroll"
            style={{ animationDelay: '100ms' }}
          >
            <Image
              src="/images/info-fifa.webp"
              alt="Trofi Piala Dunia 2026"
              className="rounded-lg w-full h-auto object-cover shadow-2xl"
              width={600}
              height={400}
            />
          </div>
          {/* Article on the right */}
          <div className="md:w-2/3 w-full text-left animate-scroll" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sebuah Era Baru Sepak Bola</h2>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Piala Dunia 2026 menandai babak baru dalam sejarah turnamen, menjadi yang pertama diselenggarakan oleh tiga negara dan menampilkan 48 tim. Ekspansi ini membuka pintu bagi lebih banyak negara untuk bersinar di panggung global, menjanjikan persaingan yang lebih ketat dan beragam.
            </p>
            <p className="text-gray-200 leading-relaxed">
              SoFi Stadium, sebagai salah satu venue utama, berdiri sebagai simbol kemegahan dan inovasi. Dengan arsitektur futuristik dan fasilitas canggih, stadion ini tidak hanya menjadi tempat pertandingan, tetapi juga destinasi yang akan memberikan pengalaman tak terlupakan bagi para penggemar dari seluruh penjuru dunia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
