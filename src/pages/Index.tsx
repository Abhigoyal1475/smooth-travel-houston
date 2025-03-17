
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
  const guidesRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToTransportOptions = () => {
    transportOptionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection onExploreClick={scrollToTransportOptions} />
      
      {/* Ad banner after hero section */}
      <GoogleAdBanner />
      
      <div id="content" className="relative z-10">
        <TransportOptionsSection sectionRef={transportOptionsRef} />
        <DetailedGuidesSection sectionRef={guidesRef} />
        
        {/* Ad banner between content sections */}
        <GoogleAdBanner className="bg-blue-50" />
        
        <ComparisonSection sectionRef={comparisonRef} />
        <FaqSection sectionRef={faqRef} />
        <CtaSection />
        
        {/* Ad banner before footer */}
        <GoogleAdBanner />
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Index;
