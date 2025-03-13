
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from 'lucide-react';

interface TransportCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  description?: string;
}

const TransportCard = ({ 
  title, 
  icon, 
  onClick, 
  className, 
  style,
  description 
}: TransportCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1",
        className
      )}
      onClick={onClick}
      style={style}
    >
      <div className="text-3xl text-blue-500 mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 text-center">{description}</p>
      )}
      <div className="mt-4 flex items-center text-blue-500 text-sm font-medium">
        <span>View details</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </div>
  );
};

export default TransportCard;
