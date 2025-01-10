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
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03, 
    y: -8,
    transition: { type: "spring", stiffness: 400, damping: 17 }
  }
};

const iconSpin = {
  initial: { rotate: 0 },
  animate: { rotate: 360 }
};

export default function SFMCSolutions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white pt-24 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        <div className="container mx-auto px-6 py-16 relative z-10">
          <motion.div 
            className="max-w-3xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive SFMC Solutions
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              Discover our full suite of Salesforce Marketing Cloud solutions designed to maximize your marketing potential.
            </motion.p>
            <motion.button 
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#EBF5FF',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Explore Solutions
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* Core Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Core SFMC Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Marketing Cloud Engagement",
                description: "Create and automate personalized customer journeys across email, mobile, advertising, and more.",
                features: ["Journey Builder", "Email Studio", "Mobile Studio", "Advertising Studio"]
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Personalization & Automation",
                description: "Deliver highly personalized content and automate customer interactions at scale.",
                features: ["Content Builder", "Dynamic Content", "Automation Studio", "Template Management"]
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile & Omnichannel",
                description: "Engage customers seamlessly across mobile and other digital channels.",
                features: ["SMS Marketing", "Push Notifications", "Mobile Apps", "Cross-Channel Coordination"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 }
                }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="text-blue-600 mb-4 relative z-10"
                  variants={iconSpin}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {solution.icon}
                </motion.div>

                <h3 className="text-2xl font-semibold mb-4 relative z-10">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 relative z-10">
                  {solution.description}
                </p>
                <ul className="text-gray-600 space-y-2 relative z-10">
                  {solution.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section className="bg-gray-50 py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

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

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Retail Success</h3>
              <p className="text-gray-600">Increased customer engagement by 85% through personalized campaigns</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">E-commerce Growth</h3>
              <p className="text-gray-600">200% ROI increase through automated marketing workflows</p>
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
    </motion.div>
  );
} 