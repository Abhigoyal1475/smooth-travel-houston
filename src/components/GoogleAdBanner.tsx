
import React from 'react';
import { cn } from "@/lib/utils";

interface GoogleAdBannerProps {
  className?: string;
}

const GoogleAdBanner = ({ className }: GoogleAdBannerProps) => {
  return (
    <div className={cn("w-full flex justify-center items-center", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-lg p-2 text-center">
          <div className="bg-gray-100 h-16 sm:h-24 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Google Advertisement</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">Ad</div>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdBanner;
