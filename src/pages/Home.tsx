import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, Mail, Users, BarChart, Cloud, Shield, Zap, Globe,
  Award, Sparkles, Rocket, Target, ArrowRight, CheckCircle, Star, 
  Database, Play, Brain, Network, LineChart
} from 'lucide-react';
import Navbar from '../components/Navbar';

import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

// Add these animation variants
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Add these interfaces
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features?: string[];
  color?: string;
}

interface FeatureCard {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

// Update the feature cards type
const featureCards: FeatureCard[] = [
  {
    icon: <Database className="w-6 h-6 text-blue-600" />,
    title: "UAE SFMC Analytics",
    description: "Leverage Salesforce Marketing Cloud analytics tailored for UAE market insights and consumer behavior.",
    color: "blue"
  },
  {
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    title: "Einstein AI for MENA",
    description: "Harness Salesforce Einstein AI to understand and engage with UAE and MENA audiences.",
    color: "purple"
  },
  {
    icon: <Globe className="w-6 h-6 text-green-600" />,
    title: "GCC Journey Builder",
    description: "Create personalized customer journeys optimized for GCC markets using SFMC Journey Builder.",
    color: "green"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
    title: "Bilingual Automation",
    description: "Automate marketing campaigns in Arabic and English using SFMC's powerful automation tools.",
    color: "indigo"
  }
];

// Add the feature card component
const FeatureCard = ({ icon: Icon, title, description, color = "blue" }: ServiceCardProps) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ 
      scale: 1.03,
      y: -8,
      boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)"
    }}
    whileTap={{ scale: 0.98 }}
    className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:border-blue-500 border-2 border-transparent relative overflow-hidden group"
  >
    <div className={`absolute inset-0 bg-gradient-to-br from-${color}-50 to-${color}-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    <motion.div
      animate="animate"
      initial="initial"
      variants={floatingAnimation}
      className={`flex items-center justify-center w-16 h-16 bg-${color}-100 rounded-full mb-6 group-hover:bg-${color}-200 transition-colors duration-300 relative`}
    >
      {Icon}
    </motion.div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 relative">{title}</h3>
    <p className="text-gray-600 relative">{description}</p>
    <motion.div 
      className="mt-4 flex items-center text-blue-600 font-semibold cursor-pointer group/link relative"
      whileHover={{ x: 5 }}
    >
      Learn More
      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
    </motion.div>
  </motion.div>
);

// Add this new animation keyframe to your global CSS or create it using Framer Motion
const pulseAnimation = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: 1.2,
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Add this new animation keyframe near the top of the file, after pulseAnimation
const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// First, add this helper array near the top of the file, after featureCards
const uaeImages = {
  hero: "https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1000&auto=format&fit=crop",
  burjKhalifa: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop",
  dubaiMarina: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
  palmJumeirah: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
  sheikZayedMosque: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1000&auto=format&fit=crop"
};

// Update the header section for better mobile responsiveness
const headerContentStyles = {
  container: "container mx-auto px-4 sm:px-6 relative z-10",
  title: "text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight",
  subtitle: "text-base sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl",
  statsGrid: "mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full sm:max-w-4xl mb-12 sm:mb-0",
  statsCard: "bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all cursor-pointer flex flex-col",
};

// Update the feature cards for better mobile layout
const featureCardStyles = {
  container: "p-4 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden group transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-blue-500",
  iconContainer: "p-2 sm:p-3 rounded-xl transition-colors duration-300 group-hover:bg-blue-100",
  title: "text-lg sm:text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300",
  description: "text-sm sm:text-base text-gray-600",
};

// Update the stats card with enhanced hover effects
const StatsCard = ({ icon: Icon, value, label }: { icon: React.ElementType, value: string, label: string }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ 
      y: -5, 
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20 hover:border-white/40 hover:bg-white/20 transition-all cursor-pointer group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    <div className="flex items-center gap-3 mb-2">
      <motion.div 
        className="p-2 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300"
        animate="animate"
        initial="initial"
        variants={floatingAnimation}
      >
        <Icon className="w-5 h-5 text-blue-200" />
      </motion.div>
      <div className="text-2xl sm:text-3xl font-bold group-hover:text-white transition-colors duration-300">{value}</div>
    </div>
    <div className="text-sm text-blue-100 group-hover:text-white transition-colors duration-300">{label}</div>
  </motion.div>
);

// Update the marketing capabilities card with enhanced hover effects
const CapabilityCard = ({ icon: Icon, title, description, features, color = "blue" }: ServiceCardProps) => (
  <motion.div 
    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-blue-500 relative overflow-hidden"
    whileHover={{ 
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)"
    }}
    variants={itemVariants}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    <div className="relative w-16 h-16 mb-6">
      <div className={`absolute inset-0 bg-${color}-100 rounded-xl rotate-6 group-hover:rotate-12 transition-transform`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-xl flex items-center justify-center`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    {features && (
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-200"
          >
            <CheckCircle className={`w-5 h-5 text-${color}-500 mr-2`} />
            {feature}
          </motion.li>
        ))}
      </ul>
    )}
  </motion.div>
);

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // const trustedBrands = [
  //   '/logos/amazon.svg',
  //   '/logos/microsoft.svg',
  //   '/logos/google.svg',
  //   '/logos/coca-cola.svg',
  //   '/logos/nike.svg',
  //   '/logos/samsung.svg',
  // ];

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

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % featureCards.length;
        return nextIndex;
      });
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      {/* Hero Section with Enhanced Mobile Responsiveness */}
      <header className="relative bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 text-white pt-16 sm:pt-24 overflow-hidden min-h-screen pb-12 sm:pb-16">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          {/* First large circle */}
          <motion.div 
            style={{ y: y1 }}
            initial={pulseAnimation.initial}
            animate={pulseAnimation.animate}
            className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 scale-95" />
          </motion.div>

          {/* Second large circle */}
          <motion.div 
            style={{ y: y2 }}
            initial={pulseAnimation.initial}
            animate={pulseAnimation.animate}
            className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 scale-95" />
          </motion.div>

          {/* Additional floating elements */}
          <motion.div 
            animate={{ 
              y: [-20, 20],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          />

          <motion.div 
            animate={{ 
              y: [20, -20],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          />

          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-blue-950/20" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        </div>

        {/* Updated Content Section */}
        <div className={headerContentStyles.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
            {/* Left side - existing content */}
            <motion.div 
              className="w-full px-4 sm:px-0 sm:max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Updated Badge */}
              <motion.div 
                className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 mt-8 sm:mt-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm sm:text-base font-semibold flex items-center text-white">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Trusted by Fortune 500 Companies
                </span>
              </motion.div>

              {/* Updated Title Section */}
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight mt-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="relative group w-16 sm:w-20">
                    <div className="absolute inset-0 bg-blue-400 rounded-xl rotate-6 opacity-50 group-hover:rotate-12 transition-all"></div>
                    <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                      <Cloud className="w-8 h-8 sm:w-12 sm:h-12 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl sm:text-4xl">BoredSF</span>
                    <span className="text-xs sm:text-sm text-blue-200 font-normal">UAE's Premier SFMC Partner</span>
                  </div>
                </div>
                Transform Your Marketing with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-100 block mt-2">
                  Salesforce Marketing Cloud in UAE
                </span>
              </motion.h1>

              {/* Updated Description */}
              <motion.p 
                className="text-sm sm:text-base md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                UAE's leading Salesforce Marketing Cloud implementation partner, delivering personalized customer experiences at scale.
              </motion.p>

              {/* Updated CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start mb-8 sm:mb-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div className="flex-1 sm:flex-none" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/services" 
                    className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center group"
                  >
                    Explore Services
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 sm:flex-none border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center group"
                >
                  Watch Demo
                  <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Updated Stats Grid with Better Mobile Layout */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 w-full max-w-4xl mx-auto mb-8 sm:mb-0"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { value: '500+', label: 'SFMC Implementations', icon: Users },
                  { value: '98%', label: 'Client Satisfaction', icon: Award },
                  { value: '24/7', label: 'SFMC Support', icon: Shield }
                ].map((stat, index) => (
                  <StatsCard key={index} {...stat} />
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - New UAE Image */}
            <motion.div
              className="relative w-full h-[400px] sm:h-[400px] lg:h-[500px] mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-full">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                
                {/* Main image container */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl h-full">
                  <img
                    src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1000&auto=format&fit=crop"
                    alt="Dubai Skyline"
                    className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                  
                  {/* Optional floating badges */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-blue-600 font-semibold text-sm">Dubai, UAE</span>
                  </motion.div>

                  {/* Additional info badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <span className="text-blue-600 font-semibold text-sm flex items-center">
                      <Cloud className="w-4 h-4 mr-2" />
                      SFMC Solutions Hub
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave - removed the gradient fade, kept only the wave */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg className="relative w-full" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C480 74 960 74 1440 24V74H0V24Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* New Trusted Brands Section */}
      <section className="pt-16 sm:pt-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 mt-2">Join hundreds of companies already leveraging our solutions</p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Floating Features Showcase */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              {/* Feature Cards Stack */}
              <div className="relative h-[400px] w-full perspective-1000">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={currentCardIndex}
                    initial={{ 
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{ 
                      opacity: 0,
                      y: -50,
                      transition: { duration: 0.3 }
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0"
                  >
                    <motion.div 
                      className="relative bg-white p-8 rounded-3xl shadow-lg transform-gpu transition-all duration-300"
                      whileHover={{ 
                        scale: 1.03,
                        y: -5,
                        boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-${featureCards[currentCardIndex].color}-50 to-${featureCards[currentCardIndex].color}-100 rounded-3xl opacity-40`} />
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div 
                            className={`p-3 bg-${featureCards[currentCardIndex].color}-100 rounded-xl group-hover:bg-${featureCards[currentCardIndex].color}-200 transition-colors duration-300`}
                            animate="animate"
                            initial="initial"
                            variants={floatingAnimation}
                          >
                            {featureCards[currentCardIndex].icon}
                          </motion.div>
                          <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                            {featureCards[currentCardIndex].title}
                          </h3>
                        </div>
                        <p className="text-gray-600">
                          {featureCards[currentCardIndex].description}
                        </p>
                        <motion.div 
                          className="mt-4 flex items-center text-blue-600 font-semibold cursor-pointer group"
                          whileHover={{ x: 5 }}
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {featureCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCardIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentCardIndex 
                          ? 'bg-blue-600 w-4' 
                          : 'bg-blue-200 hover:bg-blue-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Transform Your Marketing Strategy</h2>
              <p className="text-xl text-gray-600">
                Our platform combines powerful analytics with AI-driven insights to help you make data-driven decisions and optimize your marketing efforts.
              </p>
              <motion.button 
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

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
                Leading SFMC Partner in UAE
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Expert Salesforce Marketing Cloud implementation and consulting services, tailored for UAE businesses.
            </p>
          </motion.div>

          {/* Add image grid before the features */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 sm:mb-16 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="sm:col-span-2 relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <img 
                src={uaeImages.burjKhalifa} 
                alt="Burj Khalifa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-bold">Dubai Headquarters</h4>
                <p className="text-sm">SFMC Excellence Center</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="relative h-[140px] sm:h-[192px] rounded-lg overflow-hidden">
                <img 
                  src={uaeImages.dubaiMarina} 
                  alt="Dubai Marina"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="relative h-[140px] sm:h-[192px] rounded-lg overflow-hidden">
                <img 
                  src={uaeImages.sheikZayedMosque} 
                  alt="Sheikh Zayed Mosque"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Existing feature cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-bold mb-4">UAE Market Expertise</h3>
              <p className="text-gray-600">
                Create sophisticated marketing campaigns tailored for UAE audiences with local cultural insights.
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
      <section className="py-20 relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src={uaeImages.palmJumeirah}
            alt="Palm Jumeirah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>
        <motion.div 
          className="container mx-auto px-6 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              SFMC Solutions
            </span>
            <h2 className="text-4xl font-bold">Marketing Cloud Solutions for UAE</h2>
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
                Leverage SFMC Interaction Studio to deliver real-time personalization across web, mobile, and digital channels in UAE.
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
              SFMC Features
            </span>
            <h2 className="text-4xl font-bold">Marketing Cloud Capabilities</h2>
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
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Marketing with SFMC in UAE?
          </motion.h2>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
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