import React from 'react';
import Image from 'next/image';

const scheduleData = {
  "Babak Penyisihan Grup": [
    {
      group: "Grup A",
      matches: [
        { team1: { name: "Meksiko", code: "mx" }, team2: { name: "Kanada", code: "ca" }, date: "11 Juni 2026", time: "19:00 WIB", stadium: "Stadion Azteca, Mexico City" },
        { team1: { name: "USA", code: "us" }, team2: { name: "Bolivia", code: "bo" }, date: "11 Juni 2026", time: "22:00 WIB", stadium: "MetLife Stadium, New Jersey" },
      ]
    },
    {
      group: "Grup B",
      matches: [
        { team1: { name: "Argentina", code: "ar" }, team2: { name: "Chile", code: "cl" }, date: "12 Juni 2026", time: "19:00 WIB", stadium: "SoFi Stadium, Los Angeles" },
        { team1: { name: "Peru", code: "pe" }, team2: { name: "Paraguay", code: "py" }, date: "12 Juni 2026", time: "22:00 WIB", stadium: "BC Place, Vancouver" },
      ]
    },
    {
      group: "Grup C",
      matches: [
        { team1: { name: "Prancis", code: "fr" }, team2: { name: "Denmark", code: "dk" }, date: "13 Juni 2026", time: "16:00 WIB", stadium: "AT&T Stadium, Dallas" },
        { team1: { name: "Australia", code: "au" }, team2: { name: "Tunisia", code: "tn" }, date: "13 Juni 2026", time: "19:00 WIB", stadium: "Estadio Akron, Guadalajara" },
        { team1: { name: "Prancis", code: "fr" }, team2: { name: "Australia", code: "au" }, date: "17 Juni 2026", time: "22:00 WIB", stadium: "BMO Field, Toronto" },
      ]
    },
    {
      group: "Grup D",
      matches: [
        { team1: { name: "Brasil", code: "br" }, team2: { name: "Serbia", code: "rs" }, date: "14 Juni 2026", time: "19:00 WIB", stadium: "SoFi Stadium, Los Angeles" },
        { team1: { name: "Swiss", code: "ch" }, team2: { name: "Kamerun", code: "cm" }, date: "14 Juni 2026", time: "22:00 WIB", stadium: "Mercedes-Benz Stadium, Atlanta" },
      ]
    }
  ]
};

const ScheduleSection = () => {
  return (
    <section id="jadwal" className="py-12 md:py-16">
      <div className="text-center text-white animate-scroll">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Jadwal Pertandingan</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300">
          Jelajahi jadwal lengkap pertandingan dari babak penyisihan grup Piala Dunia 2026.
        </p>
        
        <div className="space-y-12">
          {Object.entries(scheduleData).map(([stage, groups]) => (
            <div key={stage}>
              <h3 className="text-3xl font-bold mb-8 border-b-2 border-gray-700 pb-2">{stage}</h3>
              <div className="space-y-8">
                {groups.map((groupInfo) => (
                  <div key={groupInfo.group}>
                    <h4 className="text-2xl font-semibold mb-4 text-left">{groupInfo.group}</h4>
                    <div className="space-y-4">
                      {groupInfo.matches.map((match, matchIndex) => (
                        <div key={matchIndex} className="glass-container p-4 md:p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 text-left">
                          <div className="w-full md:w-1/3 flex items-center justify-center gap-4">
                            <div className="flex items-center gap-2 w-1/2 justify-end">
                              <span className="hidden sm:inline font-semibold">{match.team1.name}</span>
                              <Image src={`https://flagcdn.com/w40/${match.team1.code}.png`} alt={`Bendera ${match.team1.name}`} width={40} height={30} />
                            </div>
                            <span className="text-xl font-bold">vs</span>
                            <div className="flex items-center gap-2 w-1/2">
                              <Image src={`https://flagcdn.com/w40/${match.team2.code}.png`} alt={`Bendera ${match.team2.name}`} width={40} height={30} />
                              <span className="hidden sm:inline font-semibold">{match.team2.name}</span>
                            </div>
                          </div>
                          <div className="w-full md:w-1/3 text-center">
                            <p className="font-semibold">{match.date}</p>
                            <p className="text-sm text-gray-300">{match.time}</p>
                          </div>
                          <div className="w-full md:w-1/3 text-center md:text-right">
                            <p className="text-sm text-gray-300">{match.stadium}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;