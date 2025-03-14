
import React, { useState, useRef, useEffect } from 'react';
import { Bus, Car, Bike, MapPin, Plane, DollarSign, ArrowRight, Compass } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from '@/components/ui/sidebar';
import TransportCard from '@/components/TransportCard';
import { TransportDetails } from '@/components/TransportDetailsDialog';
import { useIsMobile } from '@/hooks/use-mobile';
import TransportDetailPanel from '@/components/TransportDetailPanel';

interface TransportOptionsSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const TransportOptionsSection = ({ sectionRef }: TransportOptionsSectionProps) => {
  const [selectedTransport, setSelectedTransport] = useState<TransportDetails | null>(null);
  const [activeTransportId, setActiveTransportId] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
      discounts: "Apply for a METRO Student Q-Card online or at the METRO RideStore with your student ID to receive 50% off all rides.",
      referralLink: "https://www.ridemetro.org/Pages/index.aspx",
      shortDescription: "Houston's public transit system offering buses and light rail with affordable fares and student discounts."
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
      discounts: "Use code 'STUDENT10' for $10 off your first Uber ride. Lyft occasionally offers student promotions through campus partnerships.",
      referralLink: "https://www.uber.com/us/en/ride/",
      shortDescription: "On-demand ridesharing services available 24/7 through smartphone apps with flexible pricing."
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
      tips: "Book 2-3 weeks in advance for the best rates. Most buses depart from the Greyhound station downtown or from the Northwest Transit Center.",
      referralLink: "https://www.greyhound.com/",
      shortDescription: "Affordable bus services connecting Houston to major Texas cities and beyond."
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
      tips: "Hitch offers door-to-door ridesharing for intercity travel. They pick you up from your location and drop you at your destination city.",
      discounts: "First-time riders can use promotional codes for discounts, typically available on their website or social media.",
      referralLink: "https://ridehitch.com/",
      shortDescription: "Innovative ridesharing service for intercity travel with door-to-door service at competitive prices."
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
      discounts: "Many rental companies offer student discounts of 10-25% with a valid student ID. USAA and AAA members may receive additional discounts.",
      referralLink: "https://www.enterprise.com/en/home.html",
      shortDescription: "Flexible car rental options for short or long-term use with various vehicle types available."
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
      referralLink: "https://houston.bcycle.com/",
      shortDescription: "Eco-friendly transportation option with growing bike infrastructure and affordable bike-sharing programs."
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
      discounts: "Many universities offer free or discounted airport pickup services for new international students at the beginning of each semester.",
      referralLink: "https://www.supershuttle.com/",
      shortDescription: "Convenient transportation options specifically for airport transfers with university-specific services."
    }
  ];

  useEffect(() => {
    if (transportOptions.length > 0 && !selectedTransport) {
      setSelectedTransport(transportOptions[0]);
    }
  }, [transportOptions]);

  const handleTransportSelect = (transport: TransportDetails) => {
    setSelectedTransport(transport);
    setActiveTransportId(transport.id!);
    
    // Scroll to the content area on mobile
    if (isMobile && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        
        <SidebarProvider defaultOpen={!isMobile}>
          <div className="min-h-full flex w-full bg-white rounded-lg shadow-md overflow-hidden">
            {/* Sidebar with transportation options list */}
            <Sidebar collapsible={isMobile ? "offcanvas" : "none"} variant="inset" className="border-r shadow-sm">
              <SidebarContent>
                <div className="px-3 py-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Quick Navigation
                  </h3>
                </div>
                <SidebarMenu>
                  {transportOptions.map((transport) => (
                    <SidebarMenuItem key={transport.id}>
                      <SidebarMenuButton
                        isActive={activeTransportId === transport.id}
                        className="flex items-center gap-3" 
                        onClick={() => handleTransportSelect(transport)}
                      >
                        <div className={cn(
                          "text-xl",
                          activeTransportId === transport.id ? "text-blue-600" : "text-gray-500"
                        )}>
                          {transport.icon}
                        </div>
                        <span>{transport.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>

            {/* Main content area with transport details */}
            <div 
              ref={contentRef}
              className="flex-1 overflow-hidden bg-white"
            >
              {/* Mobile sidebar trigger */}
              {isMobile && (
                <div className="flex items-center justify-between p-4 border-b">
                  <h3 className="font-medium">Transportation Options</h3>
                  <SidebarTrigger className="text-gray-500" />
                </div>
              )}
              
              {/* Transport detail panel */}
              {selectedTransport && (
                <TransportDetailPanel transport={selectedTransport} />
              )}
            </div>
          </div>
        </SidebarProvider>
      </div>
    </section>
  );
};

export default TransportOptionsSection;
