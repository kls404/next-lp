'use client';

import React, { useState, useEffect } from 'react';

interface Section {
  id: string;
  title: string;
}

interface LegalPageLayoutProps {
  title: string;
  sections: Section[];
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, sections, children }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' } // Highlights when section is in the top 20% of the viewport
    );

    const elements = sections.map(sec => document.getElementById(sec.id)).filter(el => el);
    elements.forEach(el => observer.observe(el!));

    return () => {
      elements.forEach(el => observer.unobserve(el!));
    };
  }, [sections]);

  return (
    <div className="text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar */}
          <aside className="lg:w-1/4 lg:sticky top-24 self-start">
            <div className="glass-container p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Daftar Isi</h3>
              <ul className="space-y-2">
                {sections.map(section => (
                  <li key={section.id}>
                    <a 
                      href={`#${section.id}`}
                      className={`block text-sm transition-colors duration-200 ${activeSection === section.id ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="glass-container p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
