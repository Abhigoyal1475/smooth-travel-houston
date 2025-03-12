
import React from 'react';
import FaqItem from '@/components/FaqItem';

const FaqSection = () => {
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
  );
};

export default FaqSection;
