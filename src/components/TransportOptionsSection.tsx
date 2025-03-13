
import React, { useState } from 'react';
import { Bus, Car, Bike, MapPin, Plane, DollarSign } from 'lucide-react';
import TransportCard from '@/components/TransportCard';
import TransportDetailsDialog, { TransportDetails } from '@/components/TransportDetailsDialog';

interface TransportOptionsSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const TransportOptionsSection = ({ sectionRef }: TransportOptionsSectionProps) => {
  const [selectedTransport, setSelectedTransport] = useState<TransportDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const transportOptions: TransportDetails[] = [
    {
      title: "Metro Bus & Light Rail",
      icon: <Bus />,
      howToUse: [
        "Download the METRO Q Mobile Ticketing app",
        "Purchase a ticket or use your student Q-Card",
        "Check schedules using the METRO Trip app or Google Maps",
        "Board through the front door and tap your card or show your mobile ticket"
      ],
      costs: [
        "Regular fare: $1.25 per ride",
        "Day pass: $3.00",
        "Student discount: 50% off with verified student status"
      ],
      discounts: "Apply for a METRO Student Q-Card online or at the METRO RideStore with your student ID to receive 50% off all rides."
    },
    {
      title: "Uber & Lyft",
      icon: <Car />,
      howToUse: [
        "Download the Uber or Lyft app",
        "Create an account with your .edu email for student benefits",
        "Enter your destination and choose a ride type",
        "Pay through the app (add a payment method first)"
      ],
      costs: [
        "Base fare: $1-2",
        "Per minute: $0.15-0.20",
        "Per mile: $0.90-1.30",
        "Average ride within Houston: $10-25"
      ],
      discounts: "Use code 'STUDENT10' for $10 off your first Uber ride. Lyft occasionally offers student promotions through campus partnerships."
    },
    {
      title: "Intercity Buses",
      icon: <Bus />,
      howToUse: [
        "Book tickets online through FlixBus, Greyhound, or Megabus",
        "Show your e-ticket or printed ticket when boarding",
        "Arrive 30 minutes before departure time"
      ],
      costs: [
        "Typical fare: $15-45 depending on distance and timing",
        "Booking early can save up to 50%"
      ],
      routes: [
        { name: "Houston to Austin", duration: "3 hours", cost: "$15-30" },
        { name: "Houston to Dallas", duration: "4 hours", cost: "$20-35" },
        { name: "Houston to San Antonio", duration: "3.5 hours", cost: "$15-30" }
      ],
      tips: "Book 2-3 weeks in advance for the best rates. Most buses depart from the Greyhound station downtown or from the Northwest Transit Center."
    },
    {
      title: "Car Rentals",
      icon: <Car />,
      howToUse: [
        "Compare prices on sites like Kayak or Expedia",
        "Book online or through a rental company's app",
        "Present your driver's license and credit card at pickup",
        "Inspect the car before driving off"
      ],
      costs: [
        "Economy cars: $30-45 per day",
        "SUVs: $45-60 per day",
        "Additional insurance: $10-25 per day"
      ],
      discounts: "Many rental companies offer student discounts of 10-25% with a valid student ID. USAA and AAA members may receive additional discounts."
    },
    {
      title: "Biking & Walking",
      icon: <Bike />,
      howToUse: [
        "Use Houston B-Cycle bike sharing program",
        "Download bike-friendly route apps like Google Maps or Strava",
        "Consider weather and distance before planning your trip"
      ],
      costs: [
        "B-Cycle: $3 for 30 minutes, $5 for 60 minutes",
        "Monthly pass: $13",
        "Student annual pass: $60"
      ],
      tips: "Houston's bike trails are expanding, with over 345 miles of interconnected bikeways. The Brays Bayou Greenway and Buffalo Bayou Park offer scenic rides separated from traffic."
    },
    {
      title: "Airport Pickup Services",
      icon: <Plane />,
      howToUse: [
        "Book in advance through university transportation services",
        "Provide flight details when booking",
        "Look for your driver holding a sign with your name at arrivals"
      ],
      costs: [
        "University shuttle: $15-25 one-way",
        "Private shuttle services: $25-40 one-way"
      ],
      discounts: "Many universities offer free or discounted airport pickup services for new international students at the beginning of each semester."
    }
  ];

  const handleOpenDetails = (transport: TransportDetails) => {
    setSelectedTransport(transport);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

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
          {transportOptions.map((transport, index) => (
            <TransportCard 
              key={index}
              title={transport.title} 
              icon={transport.icon}
              description={index === 2 ? "Perfect for weekend trips to nearby cities" : 
                          index === 1 ? "Convenient ridesharing apps available 24/7" : undefined}
              className={`animate-fade-in bg-white hover:bg-blue-50 border-t-4 ${
                index === 0 ? "border-blue-500" :
                index === 1 ? "border-purple-500" :
                index === 2 ? "border-green-500" :
                index === 3 ? "border-orange-500" :
                index === 4 ? "border-teal-500" :
                "border-red-500"
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              onClick={() => handleOpenDetails(transport)}
            />
          ))}
        </div>
      </div>

      <TransportDetailsDialog 
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        transport={selectedTransport}
      />
    </section>
  );
};

export default TransportOptionsSection;
