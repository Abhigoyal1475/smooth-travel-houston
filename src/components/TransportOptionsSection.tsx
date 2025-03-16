
import React, { useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileNavMenu from './transport/MobileNavMenu';
import TransportSidebar from './transport/TransportSidebar';
import TransportList from './transport/TransportList';
import { transportOptionsData } from '@/data/transportOptions';

interface TransportOptionsSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const TransportOptionsSection = ({ sectionRef }: TransportOptionsSectionProps) => {
  const [activeTransportId, setActiveTransportId] = useState<number>(0);
  const isMobile = useIsMobile();
  const transportRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTransportClick = (id: number) => {
    setActiveTransportId(id);
    const targetRef = transportRefs.current[id];
    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMobileTransportClick = (id: number) => {
    setActiveTransportId(id);
    // Fixed: Add a slight delay before scrolling to ensure state updates
    setTimeout(() => {
      const element = document.getElementById(`transport-mobile-${id}`);
      if (element) {
        // Make sure we scroll to the title of the section instead of the content
        const parentElement = element.closest('.bg-white');
        if (parentElement) {
          parentElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-6 bg-gradient-to-b from-white to-blue-50"
      id="transport-options"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Transportation Options
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the most convenient ways to get around Houston as a student
        </p>

        {isMobile ? (
          <div className="space-y-4">
            <MobileNavMenu 
              transportOptions={transportOptionsData}
              activeTransportId={activeTransportId}
              onTransportClick={handleMobileTransportClick}
            />
            
            <TransportList 
              transportOptions={transportOptionsData}
              activeTransportId={activeTransportId}
              onMobileTransportClick={handleMobileTransportClick}
              transportRefs={transportRefs}
              isMobile={true}
            />
          </div>
        ) : (
          <div className="flex flex-row space-x-6">
            <TransportSidebar 
              transportOptions={transportOptionsData}
              activeTransportId={activeTransportId}
              onTransportClick={handleTransportClick}
            />
            
            <TransportList 
              transportOptions={transportOptionsData}
              activeTransportId={activeTransportId}
              onMobileTransportClick={handleMobileTransportClick}
              transportRefs={transportRefs}
              isMobile={false}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TransportOptionsSection;
