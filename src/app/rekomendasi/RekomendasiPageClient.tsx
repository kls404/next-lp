'use client';

import React, { useEffect } from 'react';
import RekomendasiSection from '@/components/RekomendasiSection';

// Define the type for the props
interface RekomendasiPageClientProps {
  data: any[]; // Using any for simplicity, could be more specific
}

export default function RekomendasiPageClient({ data }: RekomendasiPageClientProps) {
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
    <div className="container mx-auto px-4 py-20">
      <RekomendasiSection recommendationData={data} />
    </div>
  );
}
