
import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import TransportOptionsSection from '@/components/TransportOptionsSection';
import DetailedGuidesSection from '@/components/DetailedGuidesSection';
import ComparisonSection from '@/components/ComparisonSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  const transportOptionsRef = useRef<HTMLDivElement>(null);

  const scrollToTransportOptions = () => {
    transportOptionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection onExploreClick={scrollToTransportOptions} />
      <TransportOptionsSection sectionRef={transportOptionsRef} />
      <DetailedGuidesSection />
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
