
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export interface TransportDetails {
  title: string;
  icon: React.ReactNode;
  howToUse?: string[];
  costs?: string[];
  discounts?: string;
  tips?: string;
  routes?: { name: string; duration: string; cost: string }[];
}

interface TransportDetailsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  transport: TransportDetails | null;
}

const TransportDetailsDialog = ({ 
  isOpen, 
  onClose, 
  transport 
}: TransportDetailsDialogProps) => {
  if (!transport) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="text-3xl text-blue-500">
              {transport.icon}
            </div>
            <DialogTitle className="text-xl">{transport.title}</DialogTitle>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {transport.howToUse && (
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">How to Use:</h4>
              <ol className="list-decimal pl-5 space-y-1.5">
                {transport.howToUse.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          )}
          
          {transport.costs && (
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Costs:</h4>
              <ul className="list-disc pl-5 space-y-1.5">
                {transport.costs.map((cost, i) => (
                  <li key={i}>{cost}</li>
                ))}
              </ul>
            </div>
          )}
          
          {transport.routes && (
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Popular Routes:</h4>
              <div className="bg-gray-50 rounded-lg p-3">
                {transport.routes.map((route, i) => (
                  <div key={i} className="py-2 border-b last:border-b-0 flex justify-between">
                    <span className="font-medium">{route.name}</span>
                    <div className="text-right text-sm">
                      <div>{route.duration}</div>
                      <div className="text-blue-600">{route.cost}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {transport.discounts && (
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Student Discounts:</h4>
              <p>{transport.discounts}</p>
            </div>
          )}
          
          {transport.tips && (
            <div className="space-y-2">
              <h4 className="font-semibold text-lg">Tips:</h4>
              <p>{transport.tips}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TransportDetailsDialog;
