
import React from 'react';
import { cn } from "@/lib/utils";

interface TransportCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  description?: string;
  isActive?: boolean;
  imageSrc?: string;
}

const TransportCard = ({ 
  title, 
  icon, 
  onClick, 
  className, 
  style,
  description,
  isActive = false,
  imageSrc
}: TransportCardProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 p-4 rounded-lg transition-all duration-300 cursor-pointer overflow-hidden",
        isActive ? "bg-blue-50 text-blue-700" : "bg-white hover:bg-gray-50",
        className
      )}
      onClick={onClick}
      style={style}
    >
      {imageSrc && (
        <div className="hidden sm:block h-12 w-12 rounded-md overflow-hidden flex-shrink-0 mr-1">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className={cn(
        "text-2xl flex-shrink-0",
        isActive ? "text-blue-500" : "text-gray-400"
      )}>
        {icon}
      </div>
      <div>
        <h3 className={cn(
          "font-medium",
          isActive ? "text-blue-700" : "text-gray-800"
        )}>
          {title}
        </h3>
        {description && (
          <p className={cn(
            "text-sm mt-1",
            isActive ? "text-blue-600" : "text-gray-500"
          )}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default TransportCard;
