
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface CostsSectionProps {
  transport: TransportDetails;
}

const CostsSection: React.FC<CostsSectionProps> = ({ transport }) => {
  if (!transport.costs) return null;
  
  return (
    <div>
      <h3 className="font-semibold text-gray-700 text-lg mb-3">Costs</h3>
      <ul className="list-disc pl-5 space-y-2">
        {transport.costs.map((cost, i) => (
          <li key={i} className="text-sm md:text-base text-gray-700">{cost}</li>
        ))}
      </ul>
    </div>
  );
};

export default CostsSection;
