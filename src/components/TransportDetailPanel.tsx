
import React from 'react';
import { TransportDetails } from '@/components/TransportDetailsDialog';
import { useIsMobile } from '@/hooks/use-mobile';
import CTAButton from '@/components/CTAButton';
import { MapPin, Phone } from 'lucide-react';

interface TransportDetailPanelProps {
  transport: TransportDetails;
}

const TransportDetailPanel: React.FC<TransportDetailPanelProps> = ({ transport }) => {
  const isMobile = useIsMobile();

  return (
    <div className="p-4 md:p-6 h-full">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="text-3xl md:text-4xl text-blue-500">
            {transport.icon}
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">{transport.title}</h1>
          </div>
        </div>
      </div>

      {/* Description with key points */}
      {transport.shortDescription && (
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-700 mb-2">About this service</h3>
          <p className="text-sm md:text-base text-blue-800 mb-2">{transport.shortDescription}</p>
          
          {/* COAST eligibility section */}
          {transport.title === "COAST Card (UH Students)" && (
            <div className="mt-3">
              <h4 className="font-semibold text-blue-700 mb-2">Eligibility Requirements:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
                <li>Must be enrolled in at least 9 hours of Face-to-Face or Hyflex classes</li>
                <li>For carpools, every member of the group must be taking at least 9 hours</li>
                <li>Cannot be a residential student living on campus</li>
                <li>Must live outside the COAST boundaries: North of I-610, East of Hardy Toll Road, South of Brays Bayou, and West of I-45</li>
              </ul>
            </div>
          )}
          
          {/* Additional key points for specific services */}
          {transport.title === "Metro Bus & Light Rail" && (
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
              <li>Extensive network covering all major areas in Houston</li>
              <li>Student-friendly with special discounts</li>
              <li>Eco-friendly transportation option</li>
              <li><a href="/blog/uoh-metro-card" className="text-blue-600 underline">University of Houston students can get their METRO card for free - Read our guide</a></li>
            </ul>
          )}
          
          {transport.title === "Uber & Lyft" && (
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
              <li>On-demand rides available 24/7</li>
              <li>Multiple vehicle options to fit your budget</li>
              <li>Cashless payment through the app</li>
              <li>Door-to-door service with real-time tracking</li>
            </ul>
          )}
          
          {transport.title === "Intercity Buses" && (
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
              <li>Affordable way to travel between major Texas cities</li>
              <li>Free WiFi and power outlets on most buses</li>
              <li>Available services include: FlixBus, Greyhound, and Megabus</li>
              <li>Book in advance for the best deals</li>
            </ul>
          )}
          
          {transport.title === "Cougar Ride" && (
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
          )}
          
          {transport.title === "Hitch" && (
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
              <li>Door-to-door intercity rideshare service</li>
              <li>More comfortable than standard buses</li>
              <li>Convenient pickup and drop-off locations</li>
              <li>Use my code for extra benefits and I'll earn a small commission too!</li>
            </ul>
          )}
          
          {transport.title === "Car Rentals" && (
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
              <li>Complete freedom to explore at your own pace</li>
              <li>Various vehicle types to suit your needs</li>
              <li>Compare prices across major rental companies</li>
              <li>More economical than rideshare for longer trips</li>
            </ul>
          )}
          
          {transport.title === "Biking & Walking" && (
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
              <li>Healthiest transportation option</li>
              <li>Zero cost (walking) or low cost (bike sharing)</li>
              <li>Houston has over 345 miles of bike trails</li>
              <li>Great for short trips around campus</li>
            </ul>
          )}
          
          {transport.title === "Airport Pickup Services" && (
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-blue-800">
              <li>Stress-free arrival experience</li>
              <li>Fixed pricing with no surprises</li>
              <li>Professional drivers familiar with the airport</li>
              <li>Book in advance for peace of mind</li>
            </ul>
          )}
        </div>
      )}

      <div className="space-y-6 md:space-y-8">
        {/* Special Cougar Ride Section */}
        {transport.title === "Cougar Ride" && (
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h3 className="font-semibold text-red-700 mb-2">Important Information</h3>
            <div className="space-y-3">
              <p className="text-sm md:text-base text-red-800">
                Cougar Ride is a transportation service provided exclusively for University of Houston students, faculty, and staff. 
                You must have a valid UH ID to use this service.
              </p>
              <div className="flex flex-col space-y-2">
                <h4 className="font-medium text-red-700">Service Boundaries:</h4>
                <p className="text-sm md:text-base text-red-800">
                  North: I-45 (North Freeway); South: Old Spanish Trail; East: I-45 (Gulf Freeway); West: HWY 288 (South Freeway)
                </p>
              </div>
              <div className="mt-3">
                <CTAButton 
                  href="https://www.uh.edu/parking/cougar-ride/" 
                  variant="primary" 
                  className="w-full md:w-auto"
                >
                  Visit Official Cougar Ride Website
                </CTAButton>
              </div>
            </div>
          </div>
        )}
        
        {/* Discounts Section with Personal Referral */}
        {transport.discounts && (
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700 mb-2">Student Discounts & Referrals</h3>
            <p className="text-sm md:text-base text-blue-800">{transport.discounts}</p>
            
            {/* Special CTAs for specific services */}
            {transport.title === "Car Rentals" && (
              <div className="mt-3">
                <CTAButton 
                  href="/car-rental-deals" 
                  variant="primary" 
                  className="w-full md:w-auto"
                >
                  Book cheaper than Uber/Lyft
                </CTAButton>
              </div>
            )}
            
            {transport.title === "Airport Pickup Services" && (
              <div className="mt-3">
                <CTAButton 
                  href="/airport-pickup" 
                  variant="primary" 
                  className="w-full md:w-auto"
                >
                  Book an airport ride
                </CTAButton>
              </div>
            )}
          </div>
        )}
        
        {/* Tips Section */}
        {transport.tips && (
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Tips</h3>
            <p className="text-sm md:text-base text-gray-600">{transport.tips}</p>
          </div>
        )}
        
        {/* How To Use Section */}
        {transport.howToUse && (
          <div>
            <h3 className="font-semibold text-gray-700 text-lg mb-3">How to Use</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {transport.howToUse.map((step, i) => (
                <li key={i} className="text-sm md:text-base text-gray-700">{step}</li>
              ))}
            </ol>
          </div>
        )}
        
        {/* Costs Section */}
        {transport.costs && (
          <div>
            <h3 className="font-semibold text-gray-700 text-lg mb-3">Costs</h3>
            <ul className="list-disc pl-5 space-y-2">
              {transport.costs.map((cost, i) => (
                <li key={i} className="text-sm md:text-base text-gray-700">{cost}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Routes Section */}
        {transport.routes && (
          <div>
            <h3 className="font-semibold text-gray-700 text-lg mb-3">Routes</h3>
            <div className="bg-gray-50 rounded-lg">
              {transport.routes.map((route, i) => (
                <div key={i} className="p-3 md:p-4 border-b last:border-b-0 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <span className="font-medium text-gray-800">{route.name}</span>
                  <div className="md:text-right">
                    <div className="text-gray-600">{route.duration}</div>
                    <div className="text-blue-600 font-medium">{route.cost}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransportDetailPanel;
