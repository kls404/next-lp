import React from 'react';

import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';

import Faq from '@/components/Faq';
import NewsletterSection from '@/components/Newsletter';

export default function HomePageClient() {
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
