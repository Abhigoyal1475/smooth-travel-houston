
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Bus, MessageCircleQuestion, BarChartHorizontal, CreditCard } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from '@/hooks/use-mobile';

interface TopNavbarProps {
  transportOptionsRef: React.RefObject<HTMLDivElement>;
  guidesRef: React.RefObject<HTMLDivElement>;
  comparisonRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>;
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  transportOptionsRef,
  guidesRef,
  comparisonRef,
  faqRef
}) => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const handleNavClick = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  const navItems = [
    { 
      name: 'Transport Options', 
      icon: <Bus className="h-4 w-4" />, 
      onClick: () => handleNavClick(transportOptionsRef) 
    },
    { 
      name: 'UH COAST Program', 
      icon: <CreditCard className="h-4 w-4" />, 
      onClick: () => {
        handleNavClick(transportOptionsRef);
        // After scrolling to transport options, find the COAST card section and scroll to it
        setTimeout(() => {
          const coastSection = document.getElementById('transport-0');
          coastSection?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    },
    { 
      name: 'Detailed Guides', 
      icon: <Bus className="h-4 w-4" />, 
      onClick: () => handleNavClick(guidesRef) 
    },
    { 
      name: 'Comparison', 
      icon: <BarChartHorizontal className="h-4 w-4" />, 
      onClick: () => handleNavClick(comparisonRef) 
    },
    { 
      name: 'FAQ', 
      icon: <MessageCircleQuestion className="h-4 w-4" />, 
      onClick: () => handleNavClick(faqRef) 
    }
  ];

  if (isMobile) {
    return (
      <div className="fixed top-0 right-0 z-50 p-4">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <button className="p-2 bg-white rounded-full shadow-md">
              <Menu className="h-6 w-6 text-blue-600" />
            </button>
          </DrawerTrigger>
          <DrawerContent className="h-[70vh]">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium">Navigation</h3>
                <button 
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="space-y-2">
                {navItems.map((item, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-blue-50 text-left"
                    onClick={item.onClick}
                  >
                    <span className="text-blue-600">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto py-3 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <span className="text-blue-600 font-bold text-lg">UH</span>
            <span className="text-gray-700 font-bold text-lg">Transport</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <button
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-blue-50 text-sm font-medium"
                onClick={item.onClick}
              >
                <span className="text-blue-600">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
