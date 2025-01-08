import React from 'react';
import { MessageSquare, Mail, Users, BarChart, Zap, Target, Brain, Clock } from 'lucide-react';

export default function Services() {
  return (
    <div className="pt-20">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive Salesforce Marketing Cloud solutions for your business</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Journey Builder */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Journey Builder</h2>
            <p className="text-gray-600 mb-4">Create sophisticated customer journeys that respond to real-time behavior and deliver personalized experiences at scale.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Multi-channel journey orchestration</li>
              <li>• Behavior-triggered automation</li>
              <li>• Dynamic content personalization</li>
              <li>• A/B testing capabilities</li>
              <li>• Journey analytics and optimization</li>
            </ul>
          </div>

          {/* Email Studio */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Mail className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Email Studio</h2>
            <p className="text-gray-600 mb-4">Design and deploy sophisticated email campaigns with powerful automation and personalization features.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Drag-and-drop email builder</li>
              <li>• Dynamic content blocks</li>
              <li>• Template management</li>
              <li>• Advanced segmentation</li>
              <li>• Deliverability optimization</li>
            </ul>
          </div>

          {/* Audience Studio */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Audience Studio</h2>
            <p className="text-gray-600 mb-4">Unify and activate your customer data across all channels with powerful segmentation and targeting capabilities.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Customer data unification</li>
              <li>• Advanced segmentation</li>
              <li>• Lookalike modeling</li>
              <li>• Cross-channel activation</li>
              <li>• Privacy compliance tools</li>
            </ul>
          </div>

          {/* Analytics Builder */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <BarChart className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Analytics Builder</h2>
            <p className="text-gray-600 mb-4">Get deep insights into your marketing performance with advanced analytics and reporting tools.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Custom dashboard creation</li>
              <li>• Real-time reporting</li>
              <li>• Multi-channel attribution</li>
              <li>• ROI tracking</li>
              <li>• Predictive analytics</li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Implementation Services</h3>
              <p className="text-gray-600">Expert setup and configuration of your Marketing Cloud instance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Strategy Consulting</h3>
              <p className="text-gray-600">Strategic guidance to maximize your marketing ROI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Brain className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training and ongoing support for your team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}