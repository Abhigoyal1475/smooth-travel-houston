
import React, { useState, useRef } from 'react';
import { Bus, Car, Bike, Plane, Compass } from 'lucide-react';
import { cn } from "@/lib/utils";
import TransportDetailPanel from '@/components/TransportDetailPanel';
import { TransportDetails } from '@/components/TransportDetailsDialog';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";

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
      discounts: "Use my referral code 'RIDE4FREE' when signing up to get $15 off your first Uber ride. Lyft occasionally offers student promotions through campus partnerships - check their app regularly for deals!",
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
      tips: "Book 2-3 weeks in advance for the best rates. Most buses offer free WiFi and power outlets, making them perfect for getting some studying done while traveling. Use my referral code 'BUSBUDDY' on FlixBus for 10% off your first trip!",
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
      tips: "Hitch offers a more personalized experience than traditional buses. Drivers are friendly and often fellow students! Use referral code 'HITCHFRIEND' for 20% off your first ride and we both get travel credit.",
      discounts: "First-time riders can use my promotional code 'HITCHFRIEND' for a $10 discount, and I'll receive travel credit too - it's a win-win!",
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
      discounts: "Many rental companies offer student discounts of 10-25% with a valid student ID. USAA and AAA members may receive additional discounts. Use my referral link 'RENTALCASH' when booking through Enterprise for a $20 rebate on your first rental!",
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
      tips: "Houston's bike trails are expanding, with over 345 miles of interconnected bikeways. The Brays Bayou Greenway and Buffalo Bayou Park offer scenic rides separated from traffic. For a free month of B-Cycle membership, use my referral code 'CYCLEBUDDY' when you sign up!",
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
      discounts: "Many universities offer free or discounted airport pickup services for new international students at the beginning of each semester. If you're booking a private shuttle, use my referral code 'AIRPORTBUDDY' for 15% off your first ride with SuperShuttle!",
      referralLink: "https://www.supershuttle.com/",
      shortDescription: "Just landed in Houston? Airport pickup services take the stress out of navigating a new city when you first arrive. They're especially useful for international students or anyone with lots of luggage."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-6 bg-gradient-to-b from-white to-blue-50"
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
                  onClick={() => {
                    setActiveTransportId(transport.id!);
                    // Use setTimeout to ensure the state updates before scrolling
                    setTimeout(() => {
                      const element = document.getElementById(`transport-mobile-${transport.id}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 10);
                  }}
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
          <div className="flex">
            <div className="w-64 bg-white rounded-lg shadow-md p-4 mr-6 h-fit">
              <h3 className="font-medium text-gray-700 mb-4">Navigation</h3>
              <ul className="space-y-2">
                {transportOptions.map((transport) => (
                  <li key={transport.id}>
                    <button
                      className={cn(
                        "flex items-center gap-2 w-full p-2 rounded-md text-left",
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
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 space-y-8">
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
