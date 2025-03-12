
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TransportSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const TransportSection = ({ title, icon, children, className }: TransportSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden mb-6", className)}>
      <div 
        className="flex items-center justify-between p-4 cursor-pointer bg-softBlue hover:bg-blue-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="text-blue-500 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        </div>
        <div className="text-gray-500">
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
      
      <div 
        className={cn(
          "transition-all duration-300 overflow-hidden", 
          isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="p-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TransportSection;
