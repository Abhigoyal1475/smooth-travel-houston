
import React from 'react';
import { Star, Info } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

const CtaSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Student Transportation Deals
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Exclusive discounts and offers for students traveling in Houston
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="rounded-full bg-yellow-100 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Star className="text-yellow-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Get $10 Off Your First Uber/Lyft Ride</h3>
            <p className="text-gray-600 text-center mb-6">Use student code "STUDENT10" when signing up</p>
            <div className="text-center">
              <CTAButton variant="secondary" href="#">Apply Code</CTAButton>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Info className="text-blue-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Sign up for Discounted METRO Card</h3>
            <p className="text-gray-600 text-center mb-6">Get 50% off all rides with student verification</p>
            <div className="text-center">
              <CTAButton variant="secondary" href="#">Get Card</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
