'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import ScrollAnimation from './ScrollAnimation';

// Define the type for a single FAQ item
interface FaqDataItem {
  question: string;
  answer: string;
  delay: string;
}

const faqData: FaqDataItem[] = [
  {
    question: 'Di mana Piala Dunia 2026 akan diadakan?',
    answer: 'Piala Dunia FIFA 2026 akan diselenggarakan di tiga negara tuan rumah: Amerika Serikat, Kanada, dan Meksiko.',
    delay: '100ms',
  },
  {
    question: 'Berapa banyak tim yang akan berpartisipasi?',
    answer: 'Untuk pertama kalinya, turnamen ini akan menampilkan 48 tim, meningkat dari 32 tim di turnamen sebelumnya.',
    delay: '200ms',
  },
  {
    question: 'Kapan dan di mana final akan diadakan?',
    answer: 'Pertandingan final direncanakan akan diadakan pada 19 Juli 2026 di MetLife Stadium, New Jersey, Amerika Serikat.',
    delay: '300ms',
  },
  {
    question: 'Bagaimana format baru dengan 48 tim bekerja?',
    answer: 'Tim akan dibagi menjadi 12 grup yang masing-masing berisi empat tim. Dua tim teratas dari setiap grup, ditambah delapan tim peringkat ketiga terbaik, akan maju ke babak knockout baru yaitu Babak 32.',
    delay: '400ms',
  },
  {
    question: 'Bagaimana cara mendapatkan tiket Piala Dunia 2026?',
    answer: 'Informasi tiket akan tersedia di situs web resmi FIFA. Penggemar dapat mendaftar untuk mendapatkan pembaruan tentang penjualan tiket. Penjualan kemungkinan akan menggunakan sistem undian atau beberapa fase.',
    delay: '500ms',
  },
  {
    question: 'Tim mana saja yang sudah otomatis lolos?',
    answer: 'Sebagai negara tuan rumah, Kanada, Meksiko, dan Amerika Serikat secara otomatis lolos ke turnamen. Tim lainnya akan lolos melalui kualifikasi konfederasi.',
    delay: '600ms',
  },
];

// Define the props for the FaqItem component
interface FaqItemProps {
  item: FaqDataItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ item, index, isOpen, onToggle }) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <ScrollAnimation 
      animationDelay={item.delay}
      className="glass-container rounded-lg p-4 cursor-pointer faq-item transition-all duration-300 hover:scale-[1.01]"
      onClick={onToggle}
    >
      <div className="flex justify-between items-center faq-question">
        <h3 className="text-lg md:text-xl font-semibold">{item.question}</h3>
        <svg 
          className={`w-6 h-6 transform transition-transform duration-300 text-gray-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
      <div 
        ref={contentRef} 
        className="faq-answer overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <p className="mt-4 text-gray-200">{item.answer}</p>
      </div>
    </ScrollAnimation>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-8 md:py-12">
      <Script
        id="json-ld-schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollAnimation className="glass-container p-8 md:p-12 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Tanya Jawab (FAQ)</h2>
        <div className="space-y-4 text-left max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index} 
              item={item} 
              index={index} 
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default Faq;
