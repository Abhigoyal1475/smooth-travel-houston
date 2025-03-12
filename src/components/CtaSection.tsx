
import React from 'react';
import { Star, Info } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

const CtaSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Student Transportation Deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Star className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Get $10 Off Your First Uber/Lyft Ride</h3>
            <p className="text-gray-600 mb-6">Use student code "STUDENT10" when signing up</p>
            <CTAButton variant="secondary" href="#">Apply Code</CTAButton>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Info className="text-blue-400 h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Sign up for Discounted METRO Card</h3>
            <p className="text-gray-600 mb-6">Get 50% off all rides with student verification</p>
            <CTAButton variant="secondary" href="#">Get Card</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
