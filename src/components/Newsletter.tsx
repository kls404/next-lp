import React from 'react';

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="py-8 md:py-12">
      <div className="glass-container p-8 md:p-12 text-center text-white animate-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Dapatkan Berita Terbaru</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
          Berlangganan untuk info eksklusif, penjualan tiket, dan pembaruan penting.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Masukkan email Anda" 
            className="w-full md:w-2/3 p-4 rounded-full glass-container text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 bg-transparent"
          />
          <button className="w-full md:w-1/3 bg-white text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition duration-300">
            Berlangganan
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
