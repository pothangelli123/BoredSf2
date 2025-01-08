import React from 'react';
import { MessageSquare, Mail, Users, BarChart, Target, Cloud, Shield, Zap } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import EinsteinSection from '../components/EinsteinSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Transform Your Marketing with Salesforce Marketing Cloud</h1>
            <p className="text-xl mb-8">Elevate your customer engagement with powerful automation, personalization, and analytics tools.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Services Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Marketing Cloud Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<MessageSquare className="w-8 h-8" />}
              title="Journey Builder"
              description="Create personalized customer journeys across all channels"
            />
            <ServiceCard
              icon={<Mail className="w-8 h-8" />}
              title="Email Studio"
              description="Design and automate powerful email campaigns"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Audience Studio"
              description="Segment and target your audience effectively"
            />
            <ServiceCard
              icon={<BarChart className="w-8 h-8" />}
              title="Analytics Builder"
              description="Track and optimize campaign performance"
            />
          </div>
        </div>
      </section>

      <EinsteinSection />

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Marketing Cloud?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Precision Targeting</h3>
              <p className="text-gray-600">Reach the right audience at the right time with AI-powered segmentation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Cloud className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cloud-Native</h3>
              <p className="text-gray-600">Scale your marketing efforts seamlessly with cloud infrastructure</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-gray-600">Enterprise-grade security and compliance for your customer data</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-time Engagement</h3>
              <p className="text-gray-600">Respond to customer actions instantly with automated triggers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150%</div>
              <p className="text-gray-600">Average ROI Improvement</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3.2M+</div>
              <p className="text-gray-600">Emails Sent Daily</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Marketing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses using Salesforce Marketing Cloud to drive growth and engagement.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Request Demo
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}