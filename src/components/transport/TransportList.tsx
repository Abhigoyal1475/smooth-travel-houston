
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';
import TransportDetailPanel from '@/components/TransportDetailPanel';
import { cn } from "@/lib/utils";

interface TransportListProps {
  transportOptions: TransportDetails[];
  activeTransportId: number;
  onMobileTransportClick: (id: number) => void;
  transportRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  isMobile: boolean;
}

const TransportList: React.FC<TransportListProps> = ({
  transportOptions,
  activeTransportId,
  onMobileTransportClick,
  transportRefs,
  isMobile
}) => {
  // Add image URLs for each transport option
  const transportImages = {
    "COAST Card (UH Students)": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "Metro Bus & Light Rail": "https://images.unsplash.com/photo-1581262192242-04d3cf1ffd12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "Uber & Lyft": "https://images.unsplash.com/photo-1515348152804-fe1eb1cf4901?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "Intercity Buses": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "Hitch": "https://images.unsplash.com/photo-1464219222984-216ebffaaf85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "Car Rentals": "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "Airport Pickup Services": "https://images.unsplash.com/photo-1575029644286-efb9039cac46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "Cougar Ride": "https://images.unsplash.com/photo-1624204386084-dd8c05e32226?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  };

  if (isMobile) {
    return (
      <div className="space-y-4">
        {transportOptions.map((transport) => {
          const imageSrc = transportImages[transport.title as keyof typeof transportImages];
          
          return (
            <div key={transport.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className={cn(
                  "p-4 cursor-pointer flex items-center gap-3",
                  activeTransportId === transport.id && "bg-blue-50"
                )}
                onClick={() => onMobileTransportClick(transport.id!)}
              >
                {imageSrc && (
                  <img 
                    src={imageSrc} 
                    alt={transport.title}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <div className={cn(
                  "text-xl",
                  activeTransportId === transport.id ? "text-blue-600" : "text-gray-500"
                )}>
                  {transport.icon}
                </div>
                <span className="font-medium">{transport.title}</span>
              </div>
              
              {activeTransportId === transport.id && (
                <div id={`transport-mobile-${transport.id}`}>
                  <TransportDetailPanel transport={transport} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-8">
      {transportOptions.map((transport, index) => {
        const imageSrc = transportImages[transport.title as keyof typeof transportImages];
        
        return (
          <div 
            key={transport.id}
            ref={el => transportRefs.current[index] = el}
            id={`transport-${transport.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4 flex items-center gap-3 border-b border-gray-100">
              {imageSrc && (
                <img 
                  src={imageSrc} 
                  alt={transport.title}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div className="text-xl text-blue-600">
                {transport.icon}
              </div>
              <h3 className="text-xl font-medium">{transport.title}</h3>
            </div>
            <TransportDetailPanel transport={transport} />
          </div>
        );
      })}
    </div>
  );
};

export default TransportList;
