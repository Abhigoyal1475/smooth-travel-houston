
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
                {transportOptions.map((transport) => (
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
                    <span className="text-lg">{transport.icon}</span>
                    <span className="text-sm font-medium truncate">{transport.title}</span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavMenu;
