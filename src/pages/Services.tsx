import React, { useEffect } from 'react';
import { 
  MessageSquare, Mail, Users, BarChart, Zap, Target, 
  Brain, Clock, Cloud, Globe, Shield, Phone, 
  MessageCircle, Share2, Database, Settings
} from 'lucide-react';

import { motion, useScroll, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

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

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

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

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

interface AdditionalServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ 
      scale: 1.03,
      boxShadow: "0 25px 35px -5px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)",
      y: -5
    }}
    whileTap={{ scale: 0.98 }}
    className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:border-blue-500 border-2 border-transparent relative overflow-hidden group"
  >
    <motion.div
      animate="animate"
      initial="initial"
      variants={floatingAnimation}
      className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300"
    >
      <Icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700" />
    </motion.div>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <motion.div 
            className="w-2 h-2 bg-blue-500 rounded-full mr-3"
            whileHover={{ scale: 1.5 }}
          />
          {feature}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const AdditionalServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ 
      scale: 1.05,
      y: -8,
      boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)"
    }}
    whileTap={{ scale: 0.95 }}
    className="bg-white p-6 rounded-xl shadow-lg hover:bg-blue-50 transition-all duration-300 relative overflow-hidden group"
  >
    <motion.div
      animate="animate"
      initial="initial"
      variants={floatingAnimation}
      className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300"
    >
      <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
    </motion.div>
    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </motion.div>
);

export default function Services() {
  const mainServices = [
    {
      icon: MessageSquare,
      title: "Journey Builder",
      description: "Create sophisticated customer journeys that respond to real-time behavior and deliver personalized experiences at scale.",
      features: [
        "Multi-channel journey orchestration",
        "Behavior-triggered automation",
        "Dynamic content personalization",
        "A/B testing capabilities",
        "Journey analytics and optimization",
        "Real-time customer interaction tracking"
      ]
    },
    {
      icon: Mail,
      title: "Email Studio",
      description: "Design and deploy sophisticated email campaigns with powerful automation and personalization features.",
      features: [
        "Drag-and-drop email builder",
        "Dynamic content blocks",
        "Template management",
        "Advanced segmentation",
        "Deliverability optimization",
        "Automated A/B testing"
      ]
    },
    {
      icon: MessageCircle,
      title: "Mobile Studio",
      description: "Engage customers through mobile channels with personalized messaging and real-time interactions.",
      features: [
        "SMS campaign management",
        "Push notification services",
        "Mobile app messaging",
        "Location-based marketing",
        "Mobile analytics",
        "Cross-channel coordination"
      ]
    },
    {
      icon: Users,
      title: "Audience Studio",
      description: "Unify and activate your customer data across all channels with powerful segmentation and targeting capabilities.",
      features: [
        "Customer data unification",
        "Advanced segmentation",
        "Lookalike modeling",
        "Cross-channel activation",
        "Privacy compliance tools",
        "Real-time audience insights"
      ]
    },
    {
      icon: Cloud,
      title: "Interaction Studio",
      description: "Deliver real-time personalization across web, mobile, and customer-facing applications.",
      features: [
        "Real-time personalization",
        "Web behavior tracking",
        "Next-best-action recommendations",
        "Customer journey mapping",
        "Machine learning optimization",
        "Cross-channel experience delivery"
      ]
    },
    {
      icon: BarChart,
      title: "Analytics Builder",
      description: "Get deep insights into your marketing performance with advanced analytics and reporting tools.",
      features: [
        "Custom dashboard creation",
        "Real-time reporting",
        "Multi-channel attribution",
        "ROI tracking",
        "Predictive analytics",
        "AI-powered insights"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "Implementation Services",
      description: "Expert setup and configuration of your Marketing Cloud instance, ensuring optimal performance and integration with your existing systems."
    },
    {
      icon: Target,
      title: "Strategy Consulting",
      description: "Strategic guidance to maximize your marketing ROI through data-driven insights and industry best practices."
    },
    {
      icon: Brain,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing support to ensure your team masters the Marketing Cloud platform."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Expert assistance in data architecture, integration, and maintenance to ensure clean, actionable customer data."
    },
    {
      icon: Share2,
      title: "Integration Services",
      description: "Seamless integration with your CRM, e-commerce platforms, and other business systems for unified operations."
    },
    {
      icon: Settings,
      title: "Custom Development",
      description: "Tailored solutions and custom applications built on the Salesforce Marketing Cloud platform to meet your unique needs."
    }
  ];

  const platformBenefits = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-20 bg-blue-50 py-16 px-6 rounded-xl"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Platform Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Enterprise-Grade Security</h3>
          <p className="text-gray-600">Industry-leading security standards and compliance measures to protect your data</p>
        </div>
        <div className="text-center">
          <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Global Scale</h3>
          <p className="text-gray-600">Worldwide infrastructure to support your marketing operations across regions</p>
        </div>
        <div className="text-center">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Round-the-clock expert support to ensure your marketing operations run smoothly</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/20 to-transparent z-20" />
          
          <div className="relative min-h-[800px] flex items-center justify-center overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800"
              animate={{
                background: [
                  'linear-gradient(to bottom right, #2563eb, #4f46e5, #7e22ce)',
                  'linear-gradient(to bottom right, #1d4ed8, #3730a3, #6b21a8)',
                  'linear-gradient(to bottom right, #2563eb, #4f46e5, #7e22ce)',
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />

            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * 100 - 50],
                    x: [0, Math.random() * 100 - 50],
                    scale: [1, Math.random() + 0.5, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white space-y-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm font-medium"
                  >
                    Salesforce Marketing Cloud Services
                  </motion.div>

                  <motion.h1
                    className="text-5xl md:text-7xl font-bold leading-tight"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Transform Your
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                      Digital Marketing
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-xl text-blue-100 max-w-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Comprehensive solutions tailored to elevate your business through powerful marketing automation and personalization
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                      Get Started
                    </button>
                    <button className="px-8 py-4 bg-blue-600/20 backdrop-blur-lg border-2 border-white/30 text-white rounded-full font-semibold hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="hidden md:block relative h-[600px]"
                >
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl"
                    animate={{
                      y: [-20, 20],
                      rotate: [0, 5],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 mb-4" />
                    <div className="h-4 w-3/4 bg-white/20 rounded-full mb-3" />
                    <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl"
                    animate={{
                      y: [20, -20],
                      rotate: [-5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 mb-4" />
                    <div className="h-3 w-2/3 bg-white/20 rounded-full mb-3" />
                    <div className="h-3 w-1/2 bg-white/20 rounded-full" />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0">
              <svg
                className="w-full h-24 fill-current text-gray-50"
                viewBox="0 0 1440 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  animate={{
                    d: [
                      "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                      "M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,122.7C672,128,768,96,864,80C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <AdditionalServiceCard key={index} {...service} />
              ))}
            </div>
          </motion.div>

          {platformBenefits}
        </div>
      </motion.div>
    </div>
  );
}