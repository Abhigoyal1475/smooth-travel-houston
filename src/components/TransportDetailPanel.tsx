
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';
import { useIsMobile } from '@/hooks/use-mobile';
import { MapPin, Phone } from 'lucide-react';

// Import the new smaller components
import TransportHeader from '@/components/transport/TransportHeader';
import AboutService from '@/components/transport/AboutService';
import CougarRideInfo from '@/components/transport/CougarRideInfo';
import DiscountsSection from '@/components/transport/DiscountsSection';
import TipsSection from '@/components/transport/TipsSection';
import HowToUseSection from '@/components/transport/HowToUseSection';
import CostsSection from '@/components/transport/CostsSection';
import RoutesSection from '@/components/transport/RoutesSection';

interface TransportDetailPanelProps {
  transport: TransportDetails;
}

const TransportDetailPanel: React.FC<TransportDetailPanelProps> = ({ transport }) => {
  const isMobile = useIsMobile();

  return (
    <div className="p-4 md:p-6 h-full">
      <TransportHeader transport={transport} />
      <AboutService transport={transport} />

      <div className="space-y-6 md:space-y-8">
        {/* Special Cougar Ride Section */}
        {transport.title === "Cougar Ride" && <CougarRideInfo />}
        
        {/* Discounts Section with Personal Referral */}
        <DiscountsSection transport={transport} />
        
        {/* Tips Section */}
        <TipsSection transport={transport} />
        
        {/* How To Use Section */}
        <HowToUseSection transport={transport} />
        
        {/* Costs Section */}
        <CostsSection transport={transport} />
        
        {/* Routes Section */}
        <RoutesSection transport={transport} />
      </div>
    </div>
  );
};

export default TransportDetailPanel;
