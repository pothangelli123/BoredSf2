import React from 'react';
import {
  Layers,
  MessageCircle,
  Share2,
  Smartphone,
  Database,
  Globe,
  TrendingUp,
  Award
} from 'lucide-react';

export default function SFMCSolutions() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Comprehensive SFMC Solutions</h1>
            <p className="text-xl mb-8">Discover our full suite of Salesforce Marketing Cloud solutions designed to maximize your marketing potential.</p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Explore Solutions
            </button>
          </div>
        </div>
      </header>

      {/* Core Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Core SFMC Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Layers className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Marketing Cloud Engagement</h3>
              <p className="text-gray-600 mb-4">Create and automate personalized customer journeys across email, mobile, advertising, and more.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Journey Builder</li>
                <li>• Email Studio</li>
                <li>• Mobile Studio</li>
                <li>• Advertising Studio</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Marketing Cloud Intelligence</h3>
              <p className="text-gray-600 mb-4">Transform your marketing data into actionable insights with advanced analytics.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Datorama</li>
                <li>• Analytics Builder</li>
                <li>• Custom Reporting</li>
                <li>• Performance Metrics</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Marketing Cloud CDP</h3>
              <p className="text-gray-600 mb-4">Unify and activate your customer data with our Customer Data Platform.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Data Unification</li>
                <li>• Identity Resolution</li>
                <li>• Audience Segmentation</li>
                <li>• Real-time Activation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Implementation Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-600">Understanding your business needs and marketing objectives</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-gray-600">Developing a tailored SFMC implementation plan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-600">Executing the solution with best practices</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Optimization</h3>
              <p className="text-gray-600">Continuous improvement and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Retail Giant</h3>
              <p className="text-gray-600">Achieved 200% increase in email engagement through personalized journeys</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
              <p className="text-gray-600">Reduced campaign deployment time by 60% with automation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Share2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Healthcare Provider</h3>
              <p className="text-gray-600">Improved patient engagement rates by 150% using Marketing Cloud</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our SFMC solutions can help you achieve your marketing goals.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Download Solutions Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 