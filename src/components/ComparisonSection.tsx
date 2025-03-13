
import React from 'react';
import ComparisonTable from '@/components/ComparisonTable';

interface TransportComparison {
  mode: string;
  cost: string;
  convenience: string;
  bestUseCase: string;
}

const ComparisonSection = () => {
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

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Transportation Comparison
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare your options at a glance to find the best transportation method for your needs.
          </p>
        </div>
        <ComparisonTable data={comparisonData} />
      </div>
    </section>
  );
};

export default ComparisonSection;
