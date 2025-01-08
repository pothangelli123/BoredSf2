import { CheckCircle } from 'lucide-react';

interface PricingCardProps {
  tier: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ tier, price, features, isPopular }: PricingCardProps) {
  return (
    <div className={`border rounded-lg p-8 ${isPopular ? 'border-blue-600 shadow-lg' : ''}`}>
      {isPopular && (
        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
      )}
      <h3 className="text-2xl font-bold mb-4">{tier}</h3>
      <p className="text-4xl font-bold mb-6">
        ${price}<span className="text-lg text-gray-600">/month</span>
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
} 