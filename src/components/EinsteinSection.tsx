import React from 'react';
import { Brain, Target, Clock } from 'lucide-react';

export default function EinsteinSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Einstein Features</h2>
          <p className="text-gray-600">Harness the power of AI to transform your marketing strategy</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Brain className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
            <p className="text-gray-600">Forecast customer behavior and optimize engagement strategies using AI-powered insights.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Segmentation</h3>
            <p className="text-gray-600">Automatically identify and target high-value customer segments based on behavior patterns.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Clock className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Send Time Optimization</h3>
            <p className="text-gray-600">Deliver messages at the perfect moment using AI-predicted engagement times.</p>
          </div>
        </div>
      </div>
    </section>
  );
}