
import React from 'react';
import CTAButton from '@/components/CTAButton';

const CougarRideInfo: React.FC = () => {
  return (
    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
      <h3 className="font-semibold text-red-700 mb-2">Important Information</h3>
      <div className="space-y-3">
        <p className="text-sm md:text-base text-red-800">
          Cougar Ride is a transportation service provided exclusively for University of Houston students, faculty, and staff. 
          You must have a valid UH ID to use this service.
        </p>
        <div className="flex flex-col space-y-2">
          <h4 className="font-medium text-red-700">Service Boundaries:</h4>
          <p className="text-sm md:text-base text-red-800">
            North: I-45 (North Freeway); South: Old Spanish Trail; East: I-45 (Gulf Freeway); West: HWY 288 (South Freeway)
          </p>
        </div>
        <div className="mt-3">
          <CTAButton 
            href="https://www.uh.edu/parking/cougar-ride/" 
            variant="primary" 
            className="w-full md:w-auto"
          >
            Visit Official Cougar Ride Website
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default CougarRideInfo;
