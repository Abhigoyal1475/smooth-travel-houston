
import React from 'react';
import { cn } from "@/lib/utils";
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface MobileNavMenuProps {
  transportOptions: TransportDetails[];
  activeTransportId: number;
  onTransportClick: (id: number) => void;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  transportOptions,
  activeTransportId,
  onTransportClick
}) => {
  const handleTransportClick = (id: number) => {
    onTransportClick(id);
    // Close the sheet after selecting an option
    const closeButton = document.querySelector('[data-radix-collection-item]');
    if (closeButton && closeButton instanceof HTMLElement) {
      closeButton.click();
    }
  };

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
    <div className="fixed top-4 left-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 bg-white rounded-full shadow-md">
            <Menu className="h-6 w-6 text-blue-600" />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[260px] sm:w-[300px]">
          <div className="py-6">
            <h3 className="font-medium text-gray-800 mb-4">Quick Navigation</h3>
            <ScrollArea className="h-[calc(100vh-130px)]">
              <div className="space-y-2 pr-4">
                {transportOptions.map((transport) => {
                  const imageSrc = transportImages[transport.title as keyof typeof transportImages];
                  
                  return (
                    <button
                      key={transport.id}
                      className={cn(
                        "flex items-center w-full gap-2 px-3 py-2 rounded-md text-left",
                        activeTransportId === transport.id 
                          ? "bg-blue-100 text-blue-700" 
                          : "text-gray-600 hover:bg-gray-100"
                      )}
                      onClick={() => handleTransportClick(transport.id!)}
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
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavMenu;
