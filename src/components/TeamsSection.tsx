import React from 'react';
import Image from 'next/image';

const teamsData = [
  {
    name: 'Argentina',
    code: 'ar',
    ranking: '1',
    achievement: 'Juara (1978, 1986, 2022)',
    keyPlayers: ['Lionel Messi', 'Lautaro Martínez', 'Julián Álvarez'],
    description: 'Sebagai juara bertahan, Argentina datang dengan skuad solid yang dipimpin oleh generasi baru.'
  },
  {
    name: 'Prancis',
    code: 'fr',
    ranking: '2',
    achievement: 'Juara (1998, 2018)',
    keyPlayers: ['Kylian Mbappé', 'Antoine Griezmann', 'Aurélien Tchouaméni'],
    description: 'Finalis 2022 ini memiliki kedalaman skuad yang luar biasa dan pemain bintang di setiap lini.'
  },
  {
    name: 'Brasil',
    code: 'br',
    ranking: '5',
    achievement: 'Juara (5 kali)',
    keyPlayers: ['Neymar Jr.', 'Vinícius Jr.', 'Rodrygo'],
    description: 'Dengan talenta-talenta muda yang bersinar di Eropa, Brasil selalu menjadi favorit abadi.'
  },
  {
    name: 'Inggris',
    code: 'gb-eng',
    ranking: '3',
    achievement: 'Juara (1966)',
    keyPlayers: ['Harry Kane', 'Jude Bellingham', 'Bukayo Saka'],
    description: 'Generasi emas Inggris berambisi untuk mengakhiri puasa gelar di panggung dunia.'
  },
  {
    name: 'Jerman',
    code: 'de',
    ranking: '16',
    achievement: 'Juara (4 kali)',
    keyPlayers: ['İlkay Gündoğan', 'Jamal Musiala', 'Kai Havertz'],
    description: 'Mesin diesel yang selalu menjadi ancaman di setiap turnamen besar dengan mentalitas juaranya.'
  },
  {
    name: 'Spanyol',
    code: 'es',
    ranking: '8',
    achievement: 'Juara (2010)',
    keyPlayers: ['Rodri', 'Pedri', 'Gavi'],
    description: 'Mengandalkan penguasaan bola dan talenta muda dari La Masia, Spanyol siap kembali berjaya.'
  }
];

const TeamsSection = () => {
  return (
    <section id="teams" className="py-12 md:py-16">
      <div className="text-center text-white animate-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Profil Tim Unggulan</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300">
          Mengenal lebih dekat para raksasa sepak bola yang menjadi kandidat kuat peraih trofi Piala Dunia 2026.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamsData.map((team) => (
            <div key={team.name} className="glass-container p-6 text-left rounded-lg flex flex-col">
              <div className="flex items-center mb-4">
                <Image src={`https://flagcdn.com/w80/${team.code}.png`} alt={`Bendera ${team.name}`} width={60} height={40} className="mr-4" />
                <h3 className="text-2xl font-bold">{team.name}</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4 flex-grow">{team.description}</p>
              <div className="border-t border-gray-700 pt-4 mt-auto space-y-2 text-sm">
                <p><strong>Peringkat FIFA:</strong> {team.ranking}</p>
                <p><strong>Pencapaian Terbaik:</strong> {team.achievement}</p>
                <p><strong>Pemain Kunci:</strong> {team.keyPlayers.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;