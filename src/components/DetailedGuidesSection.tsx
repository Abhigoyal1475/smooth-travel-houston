
import React from 'react';
import { Bus, Car } from 'lucide-react';
import TransportSection from '@/components/TransportSection';

const DetailedGuidesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
        
        <TransportSection title="Uber & Lyft" icon={<Car />} className="mt-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">How to Use:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Download the Uber or Lyft app</li>
              <li>Create an account with your .edu email for student benefits</li>
              <li>Enter your destination and choose a ride type</li>
              <li>Pay through the app (add a payment method first)</li>
            </ol>
            
            <h4 className="font-semibold text-lg mt-6">Costs:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Base fare: $1-2</li>
              <li>Per minute: $0.15-0.20</li>
              <li>Per mile: $0.90-1.30</li>
              <li>Average ride within Houston: $10-25</li>
            </ul>
            
            <h4 className="font-semibold text-lg mt-6">Student Discounts:</h4>
            <p>Use code "STUDENT10" for $10 off your first Uber ride. Lyft occasionally offers student promotions through campus partnerships.</p>
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
