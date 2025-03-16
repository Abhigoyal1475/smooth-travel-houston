
import React, { useState, useRef } from 'react';
import { Bus, Car, Bike, Plane, Compass } from 'lucide-react';
import { cn } from "@/lib/utils";
import TransportDetailPanel from '@/components/TransportDetailPanel';
import { TransportDetails } from '@/components/TransportDetailsDialog';
import { useIsMobile } from '@/hooks/use-mobile';

interface TransportOptionsSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const TransportOptionsSection = ({ sectionRef }: TransportOptionsSectionProps) => {
  const [activeTransportId, setActiveTransportId] = useState<number>(0);
  const isMobile = useIsMobile();
  const transportRefs = useRef<(HTMLDivElement | null)[]>([]);

  const transportOptions: TransportDetails[] = [
    {
      id: 0,
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
      discounts: "Apply for a METRO Student Q-Card online or at the METRO RideStore with your student ID to receive 50% off all rides. Use my referral code 'STUDENT2023' for extra $5 credit on your first ride!",
      referralLink: "https://www.ridemetro.org/Pages/index.aspx",
      shortDescription: "Get around Houston affordably with the public transit system. The bus and light rail network covers most of the city and is perfect for students on a budget. Avoid parking hassles and traffic while helping the environment!"
    },
    {
      id: 1,
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
      discounts: "Use my personal referral code 'RIDE4FREE' when signing up to get $15 off your first Uber ride, and I'll earn a small commission too! Lyft occasionally offers student promotions - check their app regularly for deals!",
      referralLink: "https://www.uber.com/us/en/ride/",
      shortDescription: "Need a quick ride at odd hours or to places not served by public transit? Ridesharing services like Uber and Lyft are available 24/7 and can get you exactly where you need to go with just a few taps on your phone."
    },
    {
      id: 2,
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
      tips: "Book 2-3 weeks in advance for the best rates. Most buses offer free WiFi and power outlets, making them perfect for getting some studying done while traveling. FlixBus, Greyhound, and Megabus are the most popular services with regular routes between all major Texas cities.",
      discounts: "Use my personal referral code 'BUSBUDDY' on FlixBus for 10% off your first trip, plus I'll receive travel credit when you book!",
      referralLink: "https://www.greyhound.com/",
      shortDescription: "Need to visit other Texas cities on a student budget? Intercity buses are often the most affordable option with regular routes to all major Texas destinations. Perfect for weekend trips or visiting friends at other universities!"
    },
    {
      id: 3,
      title: "Hitch",
      icon: <Compass />,
      howToUse: [
        "Download the Hitch app and create an account",
        "Book your trip in advance (at least 24 hours recommended)",
        "Meet at the designated pickup location",
        "Show your reservation to the driver"
      ],
      costs: [
        "Houston to Austin: $25-45",
        "Houston to Dallas: $30-50",
        "Houston to College Station: $20-35"
      ],
      routes: [
        { name: "Houston to Austin", duration: "2.5-3 hours", cost: "$25-45" },
        { name: "Houston to Dallas", duration: "3.5-4 hours", cost: "$30-50" },
        { name: "Houston to College Station", duration: "1.5 hours", cost: "$20-35" }
      ],
      tips: "Hitch offers a more personalized experience than traditional buses. Drivers are friendly and often fellow students!",
      discounts: "First-time riders can use my personal referral code 'HITCHFRIEND' for a $10 discount, and I'll receive travel credit too! We both win - you save money and I earn a small commission that helps maintain this guide.",
      referralLink: "https://ridehitch.com/",
      shortDescription: "Hitch offers a comfortable middle ground between buses and rideshares for intercity travel. It's a door-to-door service that's more personalized than buses but more affordable than taking an Uber between cities."
    },
    {
      id: 4,
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
      discounts: "Many rental companies offer student discounts of 10-25% with a valid student ID. Use my special link to compare the best rates and I'll earn a small commission that supports this student guide. You'll find rates cheaper than using Uber or Lyft for longer trips!",
      referralLink: "https://www.enterprise.com/en/home.html",
      shortDescription: "Need wheels for a weekend trip or to move your stuff? Renting a car gives you ultimate flexibility for exploring Houston and beyond. Most companies only require you to be 21+ with a valid license and credit card."
    },
    {
      id: 5,
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
      tips: "Houston's bike trails are expanding, with over 345 miles of interconnected bikeways. The Brays Bayou Greenway and Buffalo Bayou Park offer scenic rides separated from traffic.",
      discounts: "For a free month of B-Cycle membership, use my personal referral code 'CYCLEBUDDY' when you sign up! I'll earn points toward my own membership when you use this code.",
      referralLink: "https://houston.bcycle.com/",
      shortDescription: "For shorter trips around campus and nearby neighborhoods, biking or walking might be your best bet. It's free (or very cheap with bike sharing), good exercise, and often faster than driving in congested areas during peak hours."
    },
    {
      id: 6,
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
      discounts: "Many universities offer free or discounted airport pickup services for new international students at the beginning of each semester. Book through my platform for exclusive student rates and I'll earn a small commission to support this guide.",
      referralLink: "https://www.supershuttle.com/",
      shortDescription: "Just landed in Houston? Airport pickup services take the stress out of navigating a new city when you first arrive. They're especially useful for international students or anyone with lots of luggage."
    }
  ];

  const handleMobileTransportClick = (id: number) => {
    setActiveTransportId(id);
    // Fixed: Add a slight delay before scrolling to ensure state updates
    setTimeout(() => {
      const element = document.getElementById(`transport-mobile-${id}`);
      if (element) {
        // Make sure we scroll to the title of the section instead of the content
        const parentElement = element.closest('.bg-white');
        if (parentElement) {
          parentElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-6 bg-gradient-to-b from-white to-blue-50"
      id="transport-options"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Transportation Options
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover the most convenient ways to get around Houston as a student
        </p>

        {isMobile ? (
          <div className="space-y-4">
            {transportOptions.map((transport) => (
              <div key={transport.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className={cn(
                    "p-4 cursor-pointer flex items-center gap-3",
                    activeTransportId === transport.id && "bg-blue-50"
                  )}
                  onClick={() => handleMobileTransportClick(transport.id!)}
                >
                  <div className={cn(
                    "text-xl",
                    activeTransportId === transport.id ? "text-blue-600" : "text-gray-500"
                  )}>
                    {transport.icon}
                  </div>
                  <span className="font-medium">{transport.title}</span>
                </div>
                
                {activeTransportId === transport.id && (
                  <div id={`transport-mobile-${transport.id}`}>
                    <TransportDetailPanel transport={transport} />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-8">
            {/* Non-sticky sidebar at the top */}
            <div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
              <h3 className="font-medium text-gray-700 mb-4">Quick Navigation</h3>
              <div className="flex overflow-x-auto pb-2 space-x-2">
                {transportOptions.map((transport) => (
                  <button
                    key={transport.id}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md whitespace-nowrap",
                      activeTransportId === transport.id 
                        ? "bg-blue-100 text-blue-700" 
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                    onClick={() => {
                      setActiveTransportId(transport.id!);
                      const targetRef = transportRefs.current[transport.id!];
                      if (targetRef) {
                        targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <span className="text-lg">{transport.icon}</span>
                    <span className="text-sm font-medium">{transport.title}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Vertical listing of all transport options */}
            <div className="space-y-8">
              {transportOptions.map((transport, index) => (
                <div 
                  key={transport.id} 
                  ref={el => transportRefs.current[index] = el}
                  id={`transport-${transport.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <TransportDetailPanel transport={transport} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransportOptionsSection;
