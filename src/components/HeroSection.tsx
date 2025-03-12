
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-softBlue to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
          Navigate Houston Like a Pro: Your Complete Student Transportation Guide
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Find the best ways to travel—buses, ride-sharing, rentals, and more—all in one place.
        </p>
        <CTAButton 
          onClick={onExploreClick} 
          className="animate-scale-in"
          style={{ animationDelay: '0.4s' }}
        >
          Explore Your Options <ArrowRight className="ml-2" size={18} />
        </CTAButton>
      </div>
    </section>
  );
};

export default HeroSection;
