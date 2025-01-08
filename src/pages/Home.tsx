import React from 'react';
import { 
  MessageSquare, Mail, Users, BarChart, Cloud, Shield, Zap, Globe,
  Award, Sparkles, Rocket, Target, ArrowRight, CheckCircle, CheckCircle2, Star, Database, Play, Brain, Network, LineChart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const trustedBrands = [
    '/logos/amazon.svg',
    '/logos/microsoft.svg',
    '/logos/google.svg',
    '/logos/coca-cola.svg',
    '/logos/nike.svg',
    '/logos/samsung.svg',
  ];

  // Add container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section with Enhanced Animations */}
      <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white pt-24 overflow-hidden min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-1000"></div>
          <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-1 bg-blue-500 bg-opacity-30 rounded-full mb-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Trusted by Fortune 500 Companies
              </span>
            </motion.div>

            <motion.h1 
              className="text-6xl font-bold mb-6 leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-center gap-4 mb-4 transform hover:scale-105 transition-transform">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-400 rounded-xl rotate-6 opacity-50 group-hover:rotate-12 transition-all"></div>
                  <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-xl group-hover:opacity-20 transition-opacity"></div>
                    <Cloud className="w-12 h-12 text-white transform group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl">BoredSF</span>
                  <span className="text-sm text-blue-200 font-normal">Marketing Cloud Solutions</span>
                </div>
              </div>
              Transform Your Marketing with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100 block mt-2">
                Salesforce Marketing Cloud
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl mb-8 text-blue-100 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Comprehensive marketing automation and customer engagement platform for creating personalized experiences at scale.
            </motion.p>

            <motion.div 
              className="flex gap-4 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/services" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center group"
              >
                Watch Demo
                <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats Preview with Animations */}
            <motion.div 
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {['500+', '98%', '24/7'].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl font-bold">{stat}</div>
                  <div className="text-sm text-blue-100">
                    {index === 0 ? 'Enterprise Clients' : index === 1 ? 'Client Satisfaction' : 'Expert Support'}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave - removed the gradient fade, kept only the wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="relative w-full" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C480 74 960 74 1440 24V74H0V24Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* Trusted Brands Section */}
      

      {/* Introduction Section with Enhanced Animations */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              <span className="inline-block">
                <Sparkles className="inline-block w-8 h-8 text-blue-600 mr-2" />
                Understanding Salesforce Marketing Cloud
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive suite of digital marketing tools designed to create personalized customer experiences at scale.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automation Power</h3>
              <p className="text-gray-600">
                Create sophisticated marketing automation workflows with drag-and-drop simplicity.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalization at Scale</h3>
              <p className="text-gray-600">
                Deliver tailored content and experiences to each customer across all channels.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Make informed decisions with real-time analytics and AI-powered recommendations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Products Section with Enhanced Animations */}
      <section className="py-20">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Core Products
            </span>
            <h2 className="text-4xl font-bold">Marketing Cloud Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              variants={itemVariants}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Marketing Cloud Interaction Studio</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                  Real-time
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Deliver real-time personalization across web, mobile, and other digital channels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Real-time Personalization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Behavioral Tracking
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Dynamic Content
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Cross-channel Optimization
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              variants={itemVariants}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Marketing Cloud Advertising</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                  Digital Ads
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Create and manage targeted digital advertising campaigns across multiple channels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Audience Building
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Ad Campaign Management
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Cross-channel Advertising
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Performance Analytics
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Advanced Features Section with Interactive Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Advanced Features
            </span>
            <h2 className="text-4xl font-bold">Advanced Capabilities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Einstein AI Integration */}
            <motion.div 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              variants={itemVariants}
            >
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Einstein AI Integration</h3>
              <p className="text-gray-600 mb-6">Advanced AI capabilities that power intelligent decision-making across your marketing activities.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                  Predictive Analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                  Smart Audience Segmentation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                  Content Optimization
                </li>
              </ul>
            </motion.div>

            {/* Cross-Channel Orchestration */}
            <motion.div 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              variants={itemVariants}
            >
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-purple-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Network className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Cross-Channel Orchestration</h3>
              <p className="text-gray-600 mb-6">Seamlessly coordinate customer experiences across all marketing channels.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                  Unified Customer View
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                  Real-time Interaction Management
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                  Journey Orchestration
                </li>
              </ul>
            </motion.div>

            {/* Advanced Analytics */}
            <motion.div 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
              }}
              variants={itemVariants}
            >
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-green-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <LineChart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 mb-6">Deep insights and reporting capabilities to measure and optimize marketing performance.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Multi-touch Attribution
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Custom Dashboards
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  ROI Tracking
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <motion.div 
          className="container mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Marketing?
          </motion.h2>
          
          <motion.div 
            className="flex justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact"
                className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <Link 
              to="/journey-builder"
              className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      
    </div>
  );
}