
import React from 'react';
import { cn } from "@/lib/utils";
import { useIsMobile } from '@/hooks/use-mobile';

interface GoogleAdBannerProps {
  className?: string;
}

const GoogleAdBanner = ({ className }: GoogleAdBannerProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn("w-full flex justify-center items-center py-6", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div className={cn(
            "bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center",
            isMobile ? "h-20" : "h-28"
          )}>
            <span className="text-gray-500 text-sm font-medium">Google Advertisement</span>
          </div>
          <div className="text-xs text-gray-400 py-1 px-2 bg-white text-right">Ad</div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdBanner;
