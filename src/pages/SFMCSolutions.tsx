import React from 'react';
import {
  Layers,
  MessageCircle,
  Share2,
  Smartphone,
  Database,
  Globe,
  TrendingUp,
  Award,
  Target,
  Users,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function SFMCSolutions() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Enhanced */}
      <header className="bg-gradient-to-r from-blue-700 via-indigo-600 to-indigo-800 text-white pt-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'url("/grid-pattern.svg")',
          }}
        />
        <div className="container mx-auto px-6 py-24">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Transform Your Marketing with SFMC Solutions
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Elevate your customer engagement strategy with our comprehensive Salesforce Marketing Cloud solutions. 
              Deliver personalized experiences that drive results across every touchpoint.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* New Feature Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our SFMC Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert team delivers cutting-edge SFMC implementations that drive real business results.
              With years of experience and proven methodologies, we ensure your success in digital marketing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Targeting",
                description: "Leverage advanced segmentation and AI-powered insights to reach the right audience at the right time."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer-Centric Approach",
                description: "Build meaningful relationships with personalized communication strategies across all channels."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Rapid Implementation",
                description: "Get up and running quickly with our streamlined implementation process and best practices."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Section - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core SFMC Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Layers className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Marketing Cloud Engagement</h3>
              <p className="text-gray-600 mb-4">Create and automate personalized customer journeys across email, mobile, advertising, and more.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Journey Builder</li>
                <li>• Email Studio</li>
                <li>• Mobile Studio</li>
                <li>• Advertising Studio</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <MessageCircle className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Personalization & Automation</h3>
              <p className="text-gray-600 mb-4">Deliver highly personalized content and automate customer interactions at scale.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• Content Builder</li>
                <li>• Dynamic Content</li>
                <li>• Automation Studio</li>
                <li>• Template Management</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Mobile & Omnichannel</h3>
              <p className="text-gray-600 mb-4">Engage customers seamlessly across mobile and other digital channels.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• SMS Marketing</li>
                <li>• Push Notifications</li>
                <li>• Mobile Apps</li>
                <li>• Cross-Channel Coordination</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Client Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Retail Brand",
                metric: "3.5x ROI",
                description: "Implemented personalized email campaigns resulting in 250% increase in customer engagement and 3.5x return on marketing investment within 6 months.",
                category: "Retail & E-commerce"
              },
              {
                title: "Leading Healthcare Provider",
                metric: "89% Satisfaction",
                description: "Developed automated patient communication journeys that improved appointment attendance rates by 45% and patient satisfaction scores to 89%.",
                category: "Healthcare"
              }
            ].map((case_study, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-blue-600 font-semibold mb-2">{case_study.category}</div>
                <h3 className="text-2xl font-bold mb-2">{case_study.title}</h3>
                <div className="text-3xl text-blue-600 font-bold mb-4">{case_study.metric}</div>
                <p className="text-gray-600">{case_study.description}</p>
              </motion.div>
            ))}
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

      {/* Enhanced Contact Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Marketing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of successful businesses that have revolutionized their marketing with our SFMC solutions.
              Schedule a consultation today and discover how we can help you achieve your marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Download Solutions Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 