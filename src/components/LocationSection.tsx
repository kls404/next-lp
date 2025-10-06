import React from 'react';

const LocationSection = () => {
  return (
    <section id="lokasi" className="py-12 md:py-16">
      <div className="glass-container p-8 md:p-12 text-center text-white animate-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Peta SoFi Stadium</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          Lihat lokasi detail SoFi Stadium, salah satu venue utama.
        </p>
        <div className="w-full h-96 glass-container overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.82823023249!2d-118.3392370847844!3d33.95353528063346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b740e5c9b19f%3A0x6b1c3e38734e5652!2sSoFi%20Stadium!5e0!3m2!1sen!2sid!4v1692135061483!5m2!1sen!2sid" 
            className="w-full h-full rounded-lg" 
            style={{ border:0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
