
import React from 'react';
import { cn } from "@/lib/utils";

interface TransportCardProps {
  title: string;
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const TransportCard = ({ title, icon, onClick, className }: TransportCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1",
        className
      )}
      onClick={onClick}
    >
      <div className="text-3xl text-blue-500 mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
    </div>
  );
};

export default TransportCard;
