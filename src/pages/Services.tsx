import React from 'react';
import { MessageSquare, Mail, Users, BarChart, Zap, Target, Brain, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  // Add container animation variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Add item animation variant
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-20">
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }}></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-indigo-200">
              Our Services
            </h1>
            <p className="text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Comprehensive Salesforce Marketing Cloud solutions tailored to transform your business and drive exceptional results
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
          >
            <div className="relative w-16 h-16 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              Journey Builder
            </h2>
            <p className="text-gray-600 mb-6">
              Create sophisticated customer journeys that respond to real-time behavior and deliver personalized experiences at scale.
            </p>
            <ul className="space-y-4">
              {[
                'Multi-channel journey orchestration',
                'Behavior-triggered automation',
                'Dynamic content personalization',
                'A/B testing capabilities',
                'Journey analytics and optimization'
              ].map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <Link 
              to="/journey-builder" 
              className="mt-8 flex items-center text-blue-600 font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-blue-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <Mail className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold mb-4">Email Studio</h2>
            <p className="text-gray-600 mb-4">Design and deploy sophisticated email campaigns with powerful automation and personalization features.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Drag-and-drop email builder</li>
              <li>• Dynamic content blocks</li>
              <li>• Template management</li>
              <li>• Advanced segmentation</li>
              <li>• Deliverability optimization</li>
            </ul>
            <Link 
              to="/services/email-studio" 
              className="mt-8 flex items-center text-blue-600 font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-blue-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <Users className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold mb-4">Social Studio</h2>
            <p className="text-gray-600 mb-4">
              Manage your social media presence and engage with customers across all social platforms effectively.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Social media monitoring</li>
              <li>• Content scheduling & publishing</li>
              <li>• Engagement management</li>
              <li>• Social listening & analytics</li>
              <li>• Team collaboration tools</li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <BarChart className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold mb-4">Analytics Builder</h2>
            <p className="text-gray-600 mb-4">Get deep insights into your marketing performance with advanced analytics and reporting tools.</p>
            <ul className="space-y-2 text-gray-600">
              <li>• Custom dashboard creation</li>
              <li>• Real-time reporting</li>
              <li>• Multi-channel attribution</li>
              <li>• ROI tracking</li>
              <li>• Predictive analytics</li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Additional Services
            </span>
            <h2 className="text-4xl font-bold">Comprehensive Solutions</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Implementation Services</h3>
              <p className="text-gray-600">
                Expert setup and configuration of your Marketing Cloud instance with best practices and industry standards.
              </p>
              <button className="mt-6 flex items-center text-blue-600 font-semibold group">
                Explore 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <Target className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Strategy Consulting</h3>
              <p className="text-gray-600">Strategic guidance to maximize your marketing ROI</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <Brain className="w-10 h-10 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Training & Support</h3>
              <p className="text-gray-600">Comprehensive training and ongoing support for your team</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-sm font-semibold mb-4 shadow-sm">
            Marketing Cloud Suite
          </span>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Specialized Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100"
          >
            <div className="relative w-14 h-14 mb-6">
              <div className="absolute inset-0 bg-green-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Mobile Studio</h3>
            <p className="text-gray-600 mb-4">
              Create and manage mobile messaging campaigns across SMS, MMS, and push notifications.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                SMS Campaign Management
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Push Notification Services
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Mobile App Messaging
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100"
          >
            <div className="relative w-14 h-14 mb-6">
              <div className="absolute inset-0 bg-purple-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Advertising Studio</h3>
            <p className="text-gray-600 mb-4">
              Create and manage targeted advertising campaigns across multiple platforms.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Social Media Advertising
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Lead Generation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                Campaign Optimization
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100"
          >
            <div className="relative w-14 h-14 mb-6">
              <div className="absolute inset-0 bg-orange-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Interaction Studio</h3>
            <p className="text-gray-600 mb-4">
              Real-time personalization and interaction management across all channels.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Real-time Personalization
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Behavioral Tracking
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                Machine Learning Models
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100"
          >
            <div className="relative w-14 h-14 mb-6">
              <div className="absolute inset-0 bg-teal-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Clock className="w-7 h-7 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Content Builder</h3>
            <p className="text-gray-600 mb-4">
              Create and manage compelling content for all your marketing channels in one place.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                Drag-and-drop interface
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                Reusable content blocks
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                Dynamic content creation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                Asset management
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}