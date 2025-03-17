
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface HowToUseSectionProps {
  transport: TransportDetails;
}

const HowToUseSection: React.FC<HowToUseSectionProps> = ({ transport }) => {
  if (!transport.howToUse) return null;
  
  return (
    <div>
      <h3 className="font-semibold text-gray-700 text-lg mb-3">How to Use</h3>
      <ol className="list-decimal pl-5 space-y-2">
        {transport.howToUse.map((step, i) => (
          <li key={i} className="text-sm md:text-base text-gray-700">{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default HowToUseSection;
