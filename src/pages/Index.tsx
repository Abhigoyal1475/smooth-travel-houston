
import React, { useRef } from 'react';
import { ArrowRight, Bus, Car, Train, Bike, MapPin, Navigation, Users, Star, Info, Mail, Globe, Phone } from 'lucide-react';
import TransportCard from '@/components/TransportCard';
import TransportSection from '@/components/TransportSection';
import FaqItem from '@/components/FaqItem';
import ComparisonTable from '@/components/ComparisonTable';
import CTAButton from '@/components/CTAButton';

const Index = () => {
  const transportOptionsRef = useRef<HTMLDivElement>(null);

  const scrollToTransportOptions = () => {
    transportOptionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const comparisonData = [
    {
      mode: 'Metro Bus & Light Rail',
      cost: '$1.25 per ride (with student discount)',
      convenience: '⭐⭐⭐',
      bestUseCase: 'Daily commute to campus or downtown',
    },
    {
      mode: 'Uber & Lyft',
      cost: '$10-25 per ride',
      convenience: '⭐⭐⭐⭐⭐',
      bestUseCase: 'Night travel, group trips, rainy days',
    },
    {
      mode: 'Intercity Buses',
      cost: '$15-45 per trip',
      convenience: '⭐⭐⭐',
      bestUseCase: 'Weekend trips to Austin, San Antonio, etc.',
    },
    {
      mode: 'Car Rentals',
      cost: '$30-60 per day',
      convenience: '⭐⭐⭐⭐',
      bestUseCase: 'Weekend excursions, grocery shopping',
    },
    {
      mode: 'Biking & Walking',
      cost: 'Free (after bike purchase)',
      convenience: '⭐⭐',
      bestUseCase: 'Short distances, nice weather',
    },
  ];

  const faqData = [
    {
      question: 'How do I get a Student Metro Card?',
      answer: 'Visit the METRO office with your student ID and a valid government ID. You can also apply online at ridemetro.org/student. The process takes about 1-2 weeks, and you\'ll receive a 50% discount on all rides.',
    },
    {
      question: 'Is Uber or Lyft cheaper in Houston?',
      answer: 'Prices fluctuate based on demand, but generally, Lyft tends to be slightly cheaper than Uber in Houston. We recommend installing both apps and comparing prices before booking a ride.',
    },
    {
      question: 'How do I travel from the airport to my campus?',
      answer: 'The most convenient options are: 1) Airport shuttle services (SuperShuttle), 2) Metro Bus 102 to downtown, then transfer, 3) Uber/Lyft (approximately $25-40), or 4) Coordinate with your university\'s international student services for potential pickup arrangements.',
    },
    {
      question: 'Is it safe to use public transportation at night?',
      answer: 'While the main routes are generally safe, we recommend using ride-sharing services for late-night travel, especially if you\'re unfamiliar with the area. Travel in groups when possible and always stay aware of your surroundings.',
    },
    {
      question: 'Do I need a car as a student in Houston?',
      answer: 'Not necessarily. Houston is car-centric, but many students manage well with public transit and ride-sharing. Consider your specific needs based on where you live, your campus location, and your typical activities.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-softBlue to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in">
            Navigate Houston Like a Pro: Your Complete Student Transportation Guide
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Find the best ways to travel—buses, ride-sharing, rentals, and more—all in one place.
          </p>
          <CTAButton 
            onClick={scrollToTransportOptions} 
            className="animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            Explore Your Options <ArrowRight className="ml-2" size={18} />
          </CTAButton>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section 
        ref={transportOptionsRef} 
        className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-6"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Transportation Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TransportCard 
              title="Metro Bus & Light Rail" 
              icon={<Bus />} 
              className="animate-fade-in" 
              style={{ animationDelay: '0.1s' }} 
            />
            <TransportCard 
              title="Uber & Lyft" 
              icon={<Car />} 
              className="animate-fade-in" 
              style={{ animationDelay: '0.2s' }} 
            />
            <TransportCard 
              title="Intercity Buses" 
              icon={<Bus />} 
              className="animate-fade-in" 
              style={{ animationDelay: '0.3s' }} 
            />
            <TransportCard 
              title="Car Rentals" 
              icon={<Car />} 
              className="animate-fade-in" 
              style={{ animationDelay: '0.4s' }} 
            />
            <TransportCard 
              title="Biking & Walking" 
              icon={<Bike />} 
              className="animate-fade-in" 
              style={{ animationDelay: '0.5s' }} 
            />
            <TransportCard 
              title="Airport Pickup Services" 
              icon={<MapPin />} 
              className="animate-fade-in" 
              style={{ animationDelay: '0.6s' }} 
            />
          </div>
        </div>
      </section>

      {/* Expandable Information Sections */}
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

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Transportation Comparison
          </h2>
          <ComparisonTable data={comparisonData} />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-softBlue">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Student Transportation Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Star className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Get $10 Off Your First Uber/Lyft Ride</h3>
              <p className="text-gray-600 mb-6">Use student code "STUDENT10" when signing up</p>
              <CTAButton variant="secondary" href="#">Apply Code</CTAButton>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Info className="text-blue-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Sign up for Discounted METRO Card</h3>
              <p className="text-gray-600 mb-6">Get 50% off all rides with student verification</p>
              <CTAButton variant="secondary" href="#">Get Card</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Student Groups</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <a href="#" className="hover:text-blue-300 transition-colors">Houston Students WhatsApp</a>
                </li>
                <li className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <a href="#" className="hover:text-blue-300 transition-colors">UH Ridesharing Group</a>
                </li>
                <li className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <a href="#" className="hover:text-blue-300 transition-colors">Rice Airport Pickup Group</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Official Resources</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  <a href="https://www.ridemetro.org" className="hover:text-blue-300 transition-colors">METRO Houston</a>
                </li>
                <li className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  <a href="https://www.uber.com" className="hover:text-blue-300 transition-colors">Uber</a>
                </li>
                <li className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  <a href="https://www.lyft.com" className="hover:text-blue-300 transition-colors">Lyft</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  <a href="mailto:student.transport@university.edu" className="hover:text-blue-300 transition-colors">student.transport@university.edu</a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <a href="tel:+17131234567" className="hover:text-blue-300 transition-colors">(713) 123-4567</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2023 Houston Student Transportation Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
