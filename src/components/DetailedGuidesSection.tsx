
import React from 'react';
import { Bus, Car } from 'lucide-react';
import TransportSection from '@/components/TransportSection';

interface DetailedGuidesSectionProps {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

const DetailedGuidesSection = ({ sectionRef }: DetailedGuidesSectionProps) => {
  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-16"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Detailed Transportation Guides
        </h2>
        
        <TransportSection title="Metro Bus & Light Rail" icon={<Bus />}>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">How to Use:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Download the METRO Q Mobile Ticketing app</li>
              <li>Purchase a ticket or use your student Q-Card</li>
              <li>Check schedules using the METRO Trip app or Google Maps</li>
              <li>Board through the front door and tap your card or show your mobile ticket</li>
            </ol>
            
            <h4 className="font-semibold text-lg mt-6">Costs:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Regular fare: $1.25 per ride</li>
              <li>Day pass: $3.00</li>
              <li>Student discount: 50% off with verified student status</li>
            </ul>
            
            <h4 className="font-semibold text-lg mt-6">Student Discounts:</h4>
            <p>Apply for a METRO Student Q-Card online or at the METRO RideStore with your student ID to receive 50% off all rides.</p>
          </div>
        </TransportSection>
        
        <TransportSection title="UH COAST Program" icon={<Car />} className="mt-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">How to Use:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Check eligibility on the UH Parking website</li>
              <li>Apply through AccessUH under the COAST tab</li>
              <li>Receive your COAST Q Card at the beginning of the semester</li>
              <li>Use your card for unlimited rides on all METRO services</li>
            </ol>
            
            <h4 className="font-semibold text-lg mt-6">Eligibility:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Must be enrolled in classes at UH main campus</li>
              <li>Must live off-campus outside the COAST boundaries</li>
              <li>North of I-610, East of Hardy Toll Road, South of Brays Bayou, West of I-45</li>
            </ul>
            
            <h4 className="font-semibold text-lg mt-6">Benefits:</h4>
            <p>Receive $27 per month in transit funds, which covers most commuting needs for the semester. Valid on all METRO services including bus, rail, and Park & Ride.</p>
          </div>
        </TransportSection>
        
        <TransportSection title="Intercity Buses" icon={<Bus />} className="mt-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Available Services:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>FlixBus:</strong> Budget-friendly option with WiFi and power outlets</li>
              <li><strong>Greyhound:</strong> Extensive network with more frequent departures</li>
              <li><strong>Megabus:</strong> Often has $1 fares when booked far in advance</li>
            </ul>
            
            <h4 className="font-semibold text-lg mt-6">Popular Routes:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Houston to Austin: 3 hours, $15-30</li>
              <li>Houston to Dallas: 4 hours, $20-35</li>
              <li>Houston to San Antonio: 3.5 hours, $15-30</li>
            </ul>
            
            <h4 className="font-semibold text-lg mt-6">Tips:</h4>
            <p>Book 2-3 weeks in advance for the best rates. Most buses depart from the Greyhound station downtown or from the Northwest Transit Center.</p>
          </div>
        </TransportSection>
      </div>
    </section>
  );
};

export default DetailedGuidesSection;
