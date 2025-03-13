
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
      className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-6 bg-gradient-to-b from-white to-softBlue/20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Transportation Options
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the most convenient ways to get around Houston as a student
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TransportCard 
            title="Metro Bus & Light Rail" 
            icon={<Bus />} 
            className="animate-fade-in bg-white hover:bg-blue-50 border-t-4 border-blue-500" 
            style={{ animationDelay: '0.1s' }} 
          />
          <TransportCard 
            title="Uber & Lyft" 
            icon={<Car />} 
            className="animate-fade-in bg-white hover:bg-blue-50 border-t-4 border-purple-500" 
            style={{ animationDelay: '0.2s' }} 
          />
          <TransportCard 
            title="Intercity Buses" 
            icon={<Bus />} 
            className="animate-fade-in bg-white hover:bg-blue-50 border-t-4 border-green-500" 
            style={{ animationDelay: '0.3s' }} 
          />
          <TransportCard 
            title="Car Rentals" 
            icon={<Car />} 
            className="animate-fade-in bg-white hover:bg-blue-50 border-t-4 border-orange-500" 
            style={{ animationDelay: '0.4s' }} 
          />
          <TransportCard 
            title="Biking & Walking" 
            icon={<Bike />} 
            className="animate-fade-in bg-white hover:bg-blue-50 border-t-4 border-teal-500" 
            style={{ animationDelay: '0.5s' }} 
          />
          <TransportCard 
            title="Airport Pickup Services" 
            icon={<MapPin />} 
            className="animate-fade-in bg-white hover:bg-blue-50 border-t-4 border-red-500" 
            style={{ animationDelay: '0.6s' }} 
          />
        </div>
      </div>
    </section>
  );
};

export default TransportOptionsSection;
