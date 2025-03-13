
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606768666853-403c90a981ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6)'
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/80 to-purple-900/80 mix-blend-multiply"
      />
      
      {/* Content container */}
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          Navigate Houston Like a Pro: Your Complete Student Transportation Guide
        </h1>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in drop-shadow-md" style={{ animationDelay: '0.2s' }}>
          Find the best ways to travel—buses, ride-sharing, rentals, and more—all in one place.
        </p>
        <CTAButton 
          onClick={onExploreClick} 
          className="animate-scale-in bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-8 rounded-full shadow-lg"
          style={{ animationDelay: '0.4s' }}
        >
          Explore Your Options <ArrowRight className="ml-2" size={18} />
        </CTAButton>
      </div>
    </section>
  );
};

export default HeroSection;
