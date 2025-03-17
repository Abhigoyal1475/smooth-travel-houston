
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface TransportHeaderProps {
  transport: TransportDetails;
}

const TransportHeader: React.FC<TransportHeaderProps> = ({ transport }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="text-3xl md:text-4xl text-blue-500">
          {transport.icon}
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">{transport.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default TransportHeader;
