
import React, { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import TransportOptionsSection from '@/components/TransportOptionsSection';
import DetailedGuidesSection from '@/components/DetailedGuidesSection';
import ComparisonSection from '@/components/ComparisonSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import FooterSection from '@/components/FooterSection';
import GoogleAdBanner from '@/components/GoogleAdBanner';

const Index = () => {
  const transportOptionsRef = useRef<HTMLDivElement>(null);

  const scrollToTransportOptions = () => {
    transportOptionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection onExploreClick={scrollToTransportOptions} />
      
      {/* Ad banner after hero section */}
      <GoogleAdBanner className="py-4" />
      
      <TransportOptionsSection sectionRef={transportOptionsRef} />
      <DetailedGuidesSection />
      
      {/* Ad banner between content sections */}
      <GoogleAdBanner className="py-4 bg-gray-100" />
      
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
      
      {/* Ad banner before footer */}
      <GoogleAdBanner className="py-4" />
      
      <FooterSection />
    </div>
  );
};

export default Index;
