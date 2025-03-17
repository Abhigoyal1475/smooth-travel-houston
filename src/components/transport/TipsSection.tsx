
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface TipsSectionProps {
  transport: TransportDetails;
}

const TipsSection: React.FC<TipsSectionProps> = ({ transport }) => {
  if (!transport.tips) return null;
  
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Tips</h3>
      <p className="text-sm md:text-base text-gray-600">{transport.tips}</p>
    </div>
  );
};

export default TipsSection;
