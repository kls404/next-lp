'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);
  const navSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
    if (navSliderRef.current) {
      const { offsetLeft, offsetWidth } = e.currentTarget;
      navSliderRef.current.style.opacity = '1';
      navSliderRef.current.style.left = `${offsetLeft}px`;
      navSliderRef.current.style.width = `${offsetWidth}px`;
    }
  };

  const handleMouseLeave = () => {
    if (navSliderRef.current) {
      navSliderRef.current.style.opacity = '0';
    }
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/jadwal', label: 'Jadwal' },
    { href: '/tim', label: 'Tim' },
    { href: '/stadion', label: 'Stadion' },
    { href: '/berita', label: 'Berita' },
    { href: '/rekomendasi', label: 'Rekomendasi' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4">
      {/* Main Navbar / Island */}
      <div className={`container mx-auto flex justify-between items-center px-3 py-2 transition-all duration-300 ease-in-out ${isScrolled || isMobileMenuOpen ? 'glass-container rounded-2xl' : 'bg-transparent'}`}>
        <Link href="/">
          <Image src="/images/logo.webp" alt="Logo Sport Jaya" width={120} height={40} className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center relative" onMouseLeave={handleMouseLeave}>
          <div ref={navSliderRef} className="nav-slider z-0"></div>
          <ul
            ref={navListRef}
            className="flex items-center space-x-1"
          >
            {navItems.map((item) => (
              <li key={item.href} onMouseEnter={handleMouseEnter}>
                <Link href={item.href} className="relative z-10 hover:text-gray-200 transition duration-300 px-3 py-2 text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Burger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2">
          <ul className="glass-container rounded-lg p-4 flex flex-col items-center gap-2">
            {navItems.map((item) => (
              <li key={item.href} className="w-full text-center">
                <Link href={item.href} className="block py-2 hover:bg-white/10 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;