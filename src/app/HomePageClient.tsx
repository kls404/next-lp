'use client';

import React, { useEffect } from 'react';

import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';

import Faq from '@/components/Faq';
import NewsletterSection from '@/components/Newsletter';

export default function HomePageClient() {

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scroll-visible');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <HeroSection />
      <div className="container mx-auto px-4 py-20">
        <InfoSection />
        
        <Faq />
        <NewsletterSection />
      </div>
    </>
  );
}
