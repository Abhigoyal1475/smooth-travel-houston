
import React from 'react';

interface TransportComparison {
  mode: string;
  cost: string;
  convenience: string;
  bestUseCase: string;
}

interface ComparisonTableProps {
  data: TransportComparison[];
}

const ComparisonTable = ({ data }: ComparisonTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-softBlue">
          <tr>
            <th className="py-3 px-4 text-left font-medium text-gray-800">Transport Mode</th>
            <th className="py-3 px-4 text-left font-medium text-gray-800">Cost</th>
            <th className="py-3 px-4 text-left font-medium text-gray-800">Convenience</th>
            <th className="py-3 px-4 text-left font-medium text-gray-800">Best Use Case</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-3 px-4 font-medium">{item.mode}</td>
              <td className="py-3 px-4">{item.cost}</td>
              <td className="py-3 px-4">{item.convenience}</td>
              <td className="py-3 px-4">{item.bestUseCase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
