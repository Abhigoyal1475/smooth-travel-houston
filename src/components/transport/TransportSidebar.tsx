
import React from 'react';
import { cn } from "@/lib/utils";
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface TransportSidebarProps {
  transportOptions: TransportDetails[];
  activeTransportId: number;
  onTransportClick: (id: number) => void;
}

const TransportSidebar: React.FC<TransportSidebarProps> = ({
  transportOptions,
  activeTransportId,
  onTransportClick
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

  return (
    <div className="w-64 sticky top-4 self-start bg-white rounded-lg shadow-md p-4 h-fit">
      <h3 className="font-medium text-gray-700 mb-4">Quick Navigation</h3>
      <div className="flex flex-col space-y-2">
        {transportOptions.map((transport) => {
          const imageSrc = transportImages[transport.title as keyof typeof transportImages];
          
          return (
            <button
              key={transport.id}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md text-left",
                activeTransportId === transport.id 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
              onClick={() => onTransportClick(transport.id!)}
            >
              {imageSrc && (
                <img 
                  src={imageSrc} 
                  alt={transport.title}
                  className="w-6 h-6 rounded-full object-cover"
                />
              )}
              <span className="text-lg">{transport.icon}</span>
              <span className="text-sm font-medium truncate">{transport.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TransportSidebar;
