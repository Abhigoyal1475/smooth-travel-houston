
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';
import CTAButton from '@/components/CTAButton';

interface DiscountsSectionProps {
  transport: TransportDetails;
}

const DiscountsSection: React.FC<DiscountsSectionProps> = ({ transport }) => {
  if (!transport.discounts) return null;
  
  return (
    <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">Student Discounts & Referrals</h3>
      <p className="text-sm md:text-base text-blue-800">{transport.discounts}</p>
      
      {/* Special CTAs for specific services */}
      {transport.title === "Car Rentals" && (
        <div className="mt-3">
          <CTAButton 
            href="/car-rental-deals" 
            variant="primary" 
            className="w-full md:w-auto"
          >
            Book cheaper than Uber/Lyft
          </CTAButton>
        </div>
      )}
      
      {transport.title === "Airport Pickup Services" && (
        <div className="mt-3">
          <CTAButton 
            href="/airport-pickup" 
            variant="primary" 
            className="w-full md:w-auto"
          >
            Book an airport ride
          </CTAButton>
        </div>
      )}
    </div>
  );
};

export default DiscountsSection;
