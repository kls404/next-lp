import React from 'react';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

const stadiumsData = [
  {
    name: 'MetLife Stadium',
    location: 'East Rutherford, New Jersey, USA',
    capacity: '82,500',
    matches: 'Final, Babak Gugur',
    imageUrl: '/images/MetLife-Stadium.webp',
  },
  {
    name: 'SoFi Stadium',
    location: 'Inglewood, California, USA',
    capacity: '70,240',
    matches: 'Babak Grup, Perempat Final',
    imageUrl: '/images/SoFi-Stadium.webp',
  },
  {
    name: 'AT&T Stadium',
    location: 'Arlington, Texas, USA',
    capacity: '80,000',
    matches: 'Semifinal, Babak Gugur',
    imageUrl: '/images/ATandT-Stadium.webp',
  },
  {
    name: 'Stadion Azteca',
    location: 'Mexico City, Meksiko',
    capacity: '87,523',
    matches: 'Pertandingan Pembuka, Babak Grup',
    imageUrl: '/images/Stadion-Azteca.webp',
  },
  {
    name: 'BC Place',
    location: 'Vancouver, Kanada',
    capacity: '54,500',
    matches: 'Babak Grup, 16 Besar',
    imageUrl: '/images/BC-place.webp',
  },
  {
    name: 'Mercedes-Benz Stadium',
    location: 'Atlanta, Georgia, USA',
    capacity: '71,000',
    matches: 'Babak Grup, Semifinal',
    imageUrl: '/images/Mercedes-Benz-Stadium.webp',
  },
];

const StadiumSection = () => {
  return (
    <section id="stadion" className="py-12 md:py-16">
      <ScrollAnimation className="text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Stadion Piala Dunia 2026</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300">
          Direktori komprehensif stadion-stadion megah yang akan menjadi panggung utama Piala Dunia 2026.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stadiumsData.map((stadium) => (
            <div key={stadium.name} className="glass-container text-left rounded-lg flex flex-col overflow-hidden">
              <div className="relative w-full h-48">
                <Image src={stadium.imageUrl} alt={`Foto ${stadium.name}`} fill style={{objectFit: 'cover'}} />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{stadium.name}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{stadium.location}</p>
                <div className="border-t border-gray-700 pt-4 mt-auto space-y-2 text-sm">
                  <p><strong>Kapasitas:</strong> {stadium.capacity}</p>
                  <p><strong>Pertandingan:</strong> {stadium.matches}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default StadiumSection;
