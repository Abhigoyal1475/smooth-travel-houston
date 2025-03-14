
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface TransportDetailPanelProps {
  transport: TransportDetails;
}

const TransportDetailPanel: React.FC<TransportDetailPanelProps> = ({ transport }) => {
  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl text-blue-500">
            {transport.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{transport.title}</h1>
            {transport.shortDescription && (
              <p className="text-gray-600 mt-1">{transport.shortDescription}</p>
            )}
          </div>
        </div>
        {transport.referralLink && (
          <Button variant="outline" className="ml-auto" onClick={() => window.open(transport.referralLink, '_blank')}>
            Book Now <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="space-y-8">
        {/* Details Section */}
        {transport.discounts && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-2">Student Discounts</h3>
            <p className="text-blue-800">{transport.discounts}</p>
          </div>
        )}
        
        {transport.tips && (
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Tips</h3>
            <p className="text-gray-600">{transport.tips}</p>
          </div>
        )}
        
        {/* How To Use Section */}
        {transport.howToUse && (
          <div>
            <h3 className="font-semibold text-gray-700 text-lg mb-3">How to Use</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {transport.howToUse.map((step, i) => (
                <li key={i} className="text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        )}
        
        {/* Costs Section */}
        {transport.costs && (
          <div>
            <h3 className="font-semibold text-gray-700 text-lg mb-3">Costs</h3>
            <ul className="list-disc pl-5 space-y-2">
              {transport.costs.map((cost, i) => (
                <li key={i} className="text-gray-700">{cost}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Routes Section */}
        {transport.routes && (
          <div>
            <h3 className="font-semibold text-gray-700 text-lg mb-3">Routes</h3>
            <div className="bg-gray-50 rounded-lg">
              {transport.routes.map((route, i) => (
                <div key={i} className="p-4 border-b last:border-b-0 flex justify-between items-center">
                  <span className="font-medium text-gray-800">{route.name}</span>
                  <div className="text-right">
                    <div className="text-gray-600">{route.duration}</div>
                    <div className="text-blue-600 font-medium">{route.cost}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransportDetailPanel;
