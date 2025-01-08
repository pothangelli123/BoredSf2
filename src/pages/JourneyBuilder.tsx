import React from 'react';
import { motion } from 'framer-motion';
import { 
  Route, GitBranch, Zap, Users, Settings, Clock, 
  CheckCircle, ArrowRight, Play, Database, Brain, BarChart,
  MessageSquare, Mail, Bell, Phone, Instagram, Facebook,
  Globe, MessageCircle
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function JourneyBuilder() {
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
      
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white pt-24 overflow-hidden min-h-[80vh]">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-8 left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-3xl mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="flex items-center gap-4 mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-purple-400 rounded-xl rotate-6 opacity-50 group-hover:rotate-12 transition-all"></div>
                <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
                  <Route className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold">Journey Builder</h1>
            </motion.div>

            <motion.p 
              className="text-xl mb-8 text-purple-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Create sophisticated, personalized customer journeys with our powerful drag-and-drop interface. Automate customer interactions across all channels with precision and intelligence.
            </motion.p>

            <motion.div 
              className="flex gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-white to-purple-50 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:from-purple-50 hover:to-purple-100 transition-all shadow-lg flex items-center group"
              >
                Start Building
                <Zap className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all flex items-center group"
              >
                Watch Tutorial
                <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C480 74 960 74 1440 24V74H0V24Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              Key Features
            </span>
            <h2 className="text-4xl font-bold">Build Powerful Customer Journeys</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <GitBranch className="w-6 h-6 text-purple-600" />,
                title: "Visual Journey Canvas",
                description: "Drag-and-drop interface for building complex customer journeys with ease."
              },
              {
                icon: <Users className="w-6 h-6 text-purple-600" />,
                title: "Audience Segmentation",
                description: "Target specific customer segments with personalized journey paths."
              },
              {
                icon: <Brain className="w-6 h-6 text-purple-600" />,
                title: "AI-Powered Decisions",
                description: "Leverage Einstein AI to optimize journey paths and timing."
              },
              {
                icon: <Clock className="w-6 h-6 text-purple-600" />,
                title: "Real-time Automation",
                description: "Trigger journeys based on customer behavior and events."
              },
              {
                icon: <BarChart className="w-6 h-6 text-purple-600" />,
                title: "Journey Analytics",
                description: "Track performance metrics and optimize journey effectiveness."
              },
              {
                icon: <Database className="w-6 h-6 text-purple-600" />,
                title: "Data Integration",
                description: "Connect with any data source for personalized experiences."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-100"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  background: "linear-gradient(to bottom right, white, rgb(243, 232, 255))"
                }}
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Channel Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              Channel Integration
            </span>
            <h2 className="text-4xl font-bold">Connect Across All Channels</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <MessageSquare />, name: "SMS" },
              { icon: <Mail />, name: "Email" },
              { icon: <Bell />, name: "Push Notifications" },
              { icon: <Phone />, name: "Mobile" },
              { icon: <Instagram />, name: "Social Media" },
              { icon: <Facebook />, name: "Facebook" },
              { icon: <Globe />, name: "Web" },
              { icon: <MessageCircle />, name: "WhatsApp" }
            ].map((channel, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all border border-purple-100"
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  background: "linear-gradient(to bottom right, white, rgb(243, 232, 255))"
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(channel.icon, { className: "w-6 h-6 text-purple-600" })}
                </div>
                <h3 className="font-semibold text-purple-900">{channel.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              Related Products
            </span>
            <h2 className="text-4xl font-bold">Explore Our Suite of Tools</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
                title: "Social Studio",
                description: "Manage all your social media campaigns and engagement from a single dashboard.",
                link: "/social-studio"
              },
              {
                icon: <BarChart className="w-8 h-8 text-purple-600" />,
                title: "Analytics Builder",
                description: "Build custom reports and dashboards to track your marketing performance.",
                link: "/analytics-builder"
              },
              {
                icon: <Mail className="w-8 h-8 text-purple-600" />,
                title: "Email Studio",
                description: "Create and automate personalized email campaigns that convert.",
                link: "/email-studio"
              }
            ].map((product, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-100"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  background: "linear-gradient(to bottom right, white, rgb(243, 232, 255))"
                }}
                variants={itemVariants}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6">
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-900">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <Link 
                  to={product.link}
                  className="inline-flex items-center group text-purple-600 font-semibold hover:text-purple-700"
                >
                  Learn More 
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-800 via-purple-900 to-purple-950 text-white py-24">
        <motion.div 
          className="container mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">Start Building Your Customer Journeys Today</h2>
          <motion.div 
            className="flex justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-white to-purple-50 text-purple-900 px-8 py-4 rounded-lg font-semibold hover:from-purple-50 hover:to-purple-100 transition-all shadow-lg"
            >
              Get Started Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-white hover:to-purple-50 hover:text-purple-900 transition-all"
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

   
    </div>
  );
} 