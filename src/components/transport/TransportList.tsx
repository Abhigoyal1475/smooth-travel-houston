
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
  if (isMobile) {
    return (
      <div className="space-y-4">
        {transportOptions.map((transport) => (
          <div key={transport.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className={cn(
                "p-4 cursor-pointer flex items-center gap-3",
                activeTransportId === transport.id && "bg-blue-50"
              )}
              onClick={() => onMobileTransportClick(transport.id!)}
            >
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
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-8">
      {transportOptions.map((transport, index) => (
        <div 
          key={transport.id}
          ref={el => transportRefs.current[index] = el}
          id={`transport-${transport.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <TransportDetailPanel transport={transport} />
        </div>
      ))}
    </div>
  );
};

export default TransportList;
