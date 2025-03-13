
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="space-y-6 px-4">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-softBlue py-3 px-4 font-medium text-gray-800">
              {item.mode}
            </div>
            <div className="p-4 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-600 font-medium">Cost:</div>
                <div>{item.cost}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-600 font-medium">Convenience:</div>
                <div>{item.convenience}</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-600 font-medium">Best Use Case:</div>
                <div>{item.bestUseCase}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <table className="w-full bg-white overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-500/20 to-purple-500/20">
          <tr>
            <th className="py-3 px-4 text-left font-medium text-gray-800">Transport Mode</th>
            <th className="py-3 px-4 text-left font-medium text-gray-800">Cost</th>
            <th className="py-3 px-4 text-left font-medium text-gray-800">Convenience</th>
            <th className="py-3 px-4 text-left font-medium text-gray-800">Best Use Case</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
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
