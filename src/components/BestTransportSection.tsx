
import React from 'react';
import { Bus, DollarSign, Clock, Plane, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BestTransportSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

interface TransportOption {
  title: string;
  icon: React.ReactNode;
  description: string;
  best: string;
  points: string[];
  color: string;
}

const BestTransportSection: React.FC<BestTransportSectionProps> = ({ sectionRef }) => {
  const options: TransportOption[] = [
    {
      title: "Cheapest Option",
      icon: <DollarSign className="w-8 h-8" />,
      description: "Metro Bus & Light Rail",
      best: "Students get 50% off with METRO Student Q Card or free with COAST eligibility",
      points: [
        "Perfect if you're on a tight budget",
        "Ideal when you have plenty of time and no hurry",
        "Good for regular commuting on established routes",
        "Environmentally friendly option"
      ],
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Most Convenient",
      icon: <Clock className="w-8 h-8" />,
      description: "Uber & Lyft",
      best: "Available 24/7, door-to-door service with real-time tracking",
      points: [
        "Best for reaching destinations timely",
        "Ideal for small distances where bus/metro doesn't go",
        "Perfect for late night or early morning travel",
        "Great when carrying heavy items or groceries"
      ],
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Long-Distance Travel",
      icon: <Bus className="w-8 h-8" />,
      description: "Intercity Buses",
      best: "FlixBus, Greyhound, and Megabus for affordable travel between cities",
      points: [
        "Best for budget-friendly intercity travel",
        "Good option when traveling to major stations/stops",
        "Perfect for weekend trips to nearby cities",
        "Most buses offer WiFi and power outlets for studying"
      ],
      color: "bg-purple-100 text-purple-700"
    },
    {
      title: "Airport Transfers",
      icon: <Plane className="w-8 h-8" />,
      description: "Shared Shuttle or Uber",
      best: "Fixed pricing with professional drivers familiar with the airport",
      points: [
        "Use Uber/Lyft for flexibility and convenience",
        "Fill out airport shuttle form for even cheaper rides",
        "Book in advance for best rates on shuttle services",
        "Perfect for those with heavy luggage"
      ],
      color: "bg-orange-100 text-orange-700"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      id="best-transport"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center mb-8">
          <Target className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">
            Best Transport Option for You
          </h2>
        </div>
        
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Not sure which option to choose? Here's a quick guide to help you find the best transportation 
          method based on your specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option, index) => (
            <div 
              key={index}
              className={`rounded-lg p-6 transition-transform hover:scale-105 ${option.color} border border-opacity-20`}
            >
              <div className="flex items-center mb-3">
                <div className="bg-white p-2 rounded-full mr-3">{option.icon}</div>
                <h3 className="font-bold text-lg">{option.title}</h3>
              </div>
              <p className="text-lg font-semibold mb-1">{option.description}</p>
              <p className="text-sm opacity-90 mb-3">{option.best}</p>
              
              <ul className="text-sm list-disc pl-5 space-y-1">
                {option.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
            onClick={() => document.getElementById('transport-options')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore All Options
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestTransportSection;
