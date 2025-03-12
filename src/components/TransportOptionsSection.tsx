
import React from 'react';
import { Bus, Car, Bike, MapPin } from 'lucide-react';
import TransportCard from '@/components/TransportCard';

interface TransportOptionsSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const TransportOptionsSection = ({ sectionRef }: TransportOptionsSectionProps) => {
  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-6"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Transportation Options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TransportCard 
            title="Metro Bus & Light Rail" 
            icon={<Bus />} 
            className="animate-fade-in" 
            style={{ animationDelay: '0.1s' }} 
          />
          <TransportCard 
            title="Uber & Lyft" 
            icon={<Car />} 
            className="animate-fade-in" 
            style={{ animationDelay: '0.2s' }} 
          />
          <TransportCard 
            title="Intercity Buses" 
            icon={<Bus />} 
            className="animate-fade-in" 
            style={{ animationDelay: '0.3s' }} 
          />
          <TransportCard 
            title="Car Rentals" 
            icon={<Car />} 
            className="animate-fade-in" 
            style={{ animationDelay: '0.4s' }} 
          />
          <TransportCard 
            title="Biking & Walking" 
            icon={<Bike />} 
            className="animate-fade-in" 
            style={{ animationDelay: '0.5s' }} 
          />
          <TransportCard 
            title="Airport Pickup Services" 
            icon={<MapPin />} 
            className="animate-fade-in" 
            style={{ animationDelay: '0.6s' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default TransportOptionsSection;
