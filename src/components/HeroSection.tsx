'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

const HeroSection = () => {
  // Refs for mousemove effects
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // State and logic from Countdown component
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Mousemove effect logic
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !contentRef.current || !imageRef.current) return;
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = heroRef.current;
      const xPos = (clientX / offsetWidth - 0.5) * 2;
      const yPos = (clientY / offsetHeight - 0.5) * 2;
      const tiltX = yPos * -8;
      const tiltY = xPos * 8;
      contentRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      const parallaxX = xPos * -20;
      const parallaxY = yPos * -20;
      imageRef.current.style.transform = `translateX(${parallaxX}px) translateY(${parallaxY}px) scale(0.9)`;
    };
    const heroElement = heroRef.current;
    heroElement?.addEventListener('mousemove', handleMouseMove);

    // Countdown effect logic
    const eventDate = new Date("Jun 11, 2026 00:00:00").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      if (distance < 0) {
        setIsFinished(true);
        clearInterval(countdownInterval); // Clear interval when finished
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };
    updateCountdown(); // Initial call
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Cleanup function for both effects
    return () => {
      heroElement?.removeEventListener('mousemove', handleMouseMove);
      clearInterval(countdownInterval);
    };
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const stats = [
    { value: '3', label: 'Negara Tuan Rumah' },
    { value: '48', label: 'Tim Peserta' },
    { value: '16', label: 'Kota Ikonik' },
  ];

  return (
    <header
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden px-4 pt-24 pb-12"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 z-0 transition-transform duration-300 ease-out opacity-10">
        <Image src="/images/wc2026.webp" alt="Latar Belakang" fill style={{ objectFit: 'contain' }} priority />
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="relative z-10 p-6 max-w-4xl mx-auto transition-transform duration-300 ease-out">
        <ScrollAnimation animationDelay="100ms">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Piala Dunia 2026: Bersatu dalam Selebrasi Sepak Bola Terbesar
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animationDelay="200ms">
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Saksikan format revolusioner, stadion termegah, dan talenta terbaik dunia bersatu dalam turnamen yang akan menulis ulang sejarah.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animationDelay="300ms">
          <Link href="/#info" className="bg-white text-gray-900 py-3 px-8 rounded-full font-bold hover:bg-gray-200 transition duration-300">
            Lihat Detail Turnamen
          </Link>
        </ScrollAnimation>
      </div>

      {/* Stats Section */}
      <ScrollAnimation animationDelay="400ms" className="relative z-10 grid grid-cols-3 gap-8 md:gap-16 mt-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
            <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
          </div>
        ))}
      </ScrollAnimation>

      {/* Countdown Timer - Integrated */}
      <ScrollAnimation animationDelay="500ms" className="relative z-10 w-full max-w-2xl mt-12">
        {!isFinished ? (
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="glass-container p-4 rounded-lg">
              <p className="text-3xl md:text-4xl font-bold">{timeLeft.days}</p>
              <p className="text-sm text-gray-300">Hari</p>
            </div>
            <div className="glass-container p-4 rounded-lg">
              <p className="text-3xl md:text-4xl font-bold">{formatTime(timeLeft.hours)}</p>
              <p className="text-sm text-gray-300">Jam</p>
            </div>
            <div className="glass-container p-4 rounded-lg">
              <p className="text-3xl md:text-4xl font-bold">{formatTime(timeLeft.minutes)}</p>
              <p className="text-sm text-gray-300">Menit</p>
            </div>
            <div className="glass-container p-4 rounded-lg">
              <p className="text-3xl md:text-4xl font-bold">{formatTime(timeLeft.seconds)}</p>
              <p className="text-sm text-gray-300">Detik</p>
            </div>
          </div>
        ) : (
          <div className="text-2xl font-bold p-4 glass-container rounded-lg">Pertandingan Telah Dimulai!</div>
        )}
      </ScrollAnimation>
    </header>
  );
};

export default HeroSection;
