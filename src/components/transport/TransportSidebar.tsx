
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
  return (
    <div className="w-64 sticky top-4 self-start bg-white rounded-lg shadow-md p-4 h-fit">
      <h3 className="font-medium text-gray-700 mb-4">Quick Navigation</h3>
      <div className="flex flex-col space-y-2">
        {transportOptions.map((transport) => (
          <button
            key={transport.id}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md",
              activeTransportId === transport.id 
                ? "bg-blue-100 text-blue-700" 
                : "text-gray-600 hover:bg-gray-100"
            )}
            onClick={() => onTransportClick(transport.id!)}
          >
            <span className="text-lg">{transport.icon}</span>
            <span className="text-sm font-medium">{transport.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransportSidebar;
