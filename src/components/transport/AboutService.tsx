
import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { TransportDetails } from '@/components/TransportDetailsDialog';

interface AboutServiceProps {
  transport: TransportDetails;
}

const AboutService: React.FC<AboutServiceProps> = ({ transport }) => {
  if (!transport.shortDescription) return null;
  
  return (
    <div className="mb-6 bg-blue-50 p-4 rounded-lg">
      <h3 className="font-semibold text-blue-700 mb-2">About this service</h3>
      <p className="text-sm md:text-base text-blue-800 mb-2">{transport.shortDescription}</p>
      
      {/* Render appropriate key points based on transport type */}
      {transport.title === "COAST Card (UH Students)" && <CoastEligibility />}
      {transport.title === "Metro Bus & Light Rail" && <MetroBusKeyPoints />}
      {transport.title === "Uber & Lyft" && <RideshareKeyPoints />}
      {transport.title === "Intercity Buses" && <IntercityBusKeyPoints />}
      {transport.title === "Cougar Ride" && <CougarRideKeyPoints />}
      {transport.title === "Hitch" && <HitchKeyPoints />}
      {transport.title === "Car Rentals" && <CarRentalKeyPoints />}
      {transport.title === "Airport Pickup Services" && <AirportPickupKeyPoints />}
    </div>
  );
};

// Component for COAST eligibility requirements
const CoastEligibility = () => (
  <div className="mt-3">
    <h4 className="font-semibold text-blue-700 mb-2">Eligibility Requirements:</h4>
    <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
      <li>Must be enrolled in at least 9 hours of Face-to-Face or Hyflex classes</li>
      <li>For carpools, every member of the group must be taking at least 9 hours</li>
      <li>Cannot be a residential student living on campus</li>
      <li>Must live outside the COAST boundaries: North of I-610, East of Hardy Toll Road, South of Brays Bayou, and West of I-45</li>
    </ul>
  </div>
);

// Component for Metro Bus & Light Rail key points
const MetroBusKeyPoints = () => (
  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
    <li>Extensive network covering all major areas in Houston</li>
    <li>University of Houston students who meet COAST eligibility receive a free METRO Q Card</li>
    <li>All other UH students can get a METRO Student Q Card for 50% off regular fares</li>
    <li>Eco-friendly transportation option</li>
    <li><a href="https://www.ridemetro.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Visit ridemetro.org for more information</a></li>
    <li><a href="/blog/uoh-metro-card" className="text-blue-600 underline">University of Houston students can get their METRO card for free - Read our guide</a></li>
  </ul>
);

// Component for Uber & Lyft key points
const RideshareKeyPoints = () => (
  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
    <li>On-demand rides available 24/7</li>
    <li>Multiple vehicle options to fit your budget</li>
    <li>Cashless payment through the app</li>
    <li>Door-to-door service with real-time tracking</li>
  </ul>
);

// Component for Intercity Buses key points
const IntercityBusKeyPoints = () => (
  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
    <li>Affordable way to travel between major Texas cities</li>
    <li>Free WiFi and power outlets on most buses</li>
    <li>Available services include: FlixBus, Greyhound, and Megabus</li>
    <li>Book in advance for the best deals</li>
  </ul>
);

// Component for Cougar Ride key points
const CougarRideKeyPoints = () => (
  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
    <li>Free evening transportation service for UH students, faculty, and staff</li>
    <li>Available Sunday-Wednesday: 7:00 PM to 1:00 AM</li>
    <li>Extended hours Thursday-Saturday: 7:00 PM to 3:00 AM</li>
    <li>Covers the UH campus and surrounding areas</li>
    <li>
      <div className="flex items-center mt-2 gap-2">
        <Phone className="h-4 w-4 text-blue-700" />
        <span>For immediate assistance: (713) 743-3333</span>
      </div>
    </li>
    <li>
      <div className="flex items-center mt-2 gap-2">
        <MapPin className="h-4 w-4 text-blue-700" />
        <span>Parking & Transportation Services Office: Stadium Parking Garage, 3874 Holman St, Suite 102</span>
      </div>
    </li>
  </ul>
);

// Component for Hitch key points
const HitchKeyPoints = () => (
  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
    <li>Door-to-door intercity rideshare service</li>
    <li>More comfortable than standard buses</li>
    <li>Convenient pickup and drop-off locations</li>
    <li>Use my code for extra benefits and I'll earn a small commission too!</li>
  </ul>
);

// Component for Car Rentals key points
const CarRentalKeyPoints = () => (
  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
    <li>Complete freedom to explore at your own pace</li>
    <li>Various vehicle types to suit your needs</li>
    <li>Compare prices across major rental companies</li>
    <li>More economical than rideshare for longer trips</li>
  </ul>
);

// Component for Airport Pickup Services key points
const AirportPickupKeyPoints = () => (
  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
    <li>Stress-free arrival experience</li>
    <li>Fixed pricing with no surprises</li>
    <li>Professional drivers familiar with the airport</li>
    <li>Book in advance for peace of mind</li>
  </ul>
);

export default AboutService;
