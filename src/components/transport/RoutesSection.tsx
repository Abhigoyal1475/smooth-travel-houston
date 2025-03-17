
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface RoutesSectionProps {
  transport: TransportDetails;
}

const RoutesSection: React.FC<RoutesSectionProps> = ({ transport }) => {
  if (!transport.routes) return null;
  
  return (
    <div>
      <h3 className="font-semibold text-gray-700 text-lg mb-3">Routes</h3>
      <div className="bg-gray-50 rounded-lg">
        {transport.routes.map((route, i) => (
          <div key={i} className="p-3 md:p-4 border-b last:border-b-0 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <span className="font-medium text-gray-800">{route.name}</span>
            <div className="md:text-right">
              <div className="text-gray-600">{route.duration}</div>
              <div className="text-blue-600 font-medium">{route.cost}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoutesSection;
