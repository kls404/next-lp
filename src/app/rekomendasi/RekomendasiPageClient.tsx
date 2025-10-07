import React from 'react';
import RekomendasiSection from '@/components/RekomendasiSection';

// Define the type for the props
interface RekomendasiPageClientProps {
  data: any[]; // Using any for simplicity, could be more specific
}

export default function RekomendasiPageClient({ data }: RekomendasiPageClientProps) {
  return (
    <div className="container mx-auto px-4 py-20">
      <RekomendasiSection recommendationData={data} />
    </div>
  );
}
