import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ArrowRight, 
  Wand2, 
  Users, 
  BarChart2, 
  Zap, 
  Layout, 
  Target,
  Globe,
  Clock,
  Shield,
  MessageSquare
} from 'lucide-react';

export default function EmailStudio() {
  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Content Builder",
      description: "Create stunning emails with drag-and-drop templates, HTML editing, and dynamic content blocks"
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Journey Builder Integration",
      description: "Design automated customer journeys with triggered emails based on behavior and interactions"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Advanced Personalization",
      description: "Leverage AMPscript and dynamic content for 1:1 personalized email experiences"
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Analytics & Reporting",
      description: "Track engagement metrics, A/B testing results, and campaign performance in real-time"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Sending",
      description: "Send emails across time zones with intelligent delivery optimization and regional compliance"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Send Time Optimization",
      description: "AI-powered send time optimization to maximize engagement rates for each subscriber"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance",
      description: "Built-in tools for GDPR, CCPA compliance, and industry-leading security standards"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Dynamic Content",
      description: "Create personalized content blocks that adapt based on subscriber data and behavior"
    }
  ];

  return (
    <div className="pt-20">
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-indigo-200">
              Email Studio
            </h1>
            <p className="text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Design and deploy sophisticated email campaigns with powerful automation and personalization features
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
                          transform hover:-translate-y-1 cursor-pointer border border-transparent 
                          hover:border-blue-100"
              >
                <div className="text-blue-600 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16">Advanced Email Marketing Capabilities</h2>
            <div className="space-y-12">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-blue-600" />,
                  title: "Subscriber Management",
                  description: "Manage subscriber lists, segmentation, and preferences. Import contacts, create data extensions, and maintain subscriber data quality with built-in tools."
                },
                {
                  icon: <Users className="w-6 h-6 text-blue-600" />,
                  title: "Audience Segmentation",
                  description: "Create targeted segments based on subscriber attributes, behavior, and engagement metrics. Use SQL queries for advanced segmentation and automation triggers."
                },
                {
                  icon: <Mail className="w-6 h-6 text-blue-600" />,
                  title: "Email Templates & Testing",
                  description: "Access pre-built templates, create custom designs, and perform inbox rendering tests across multiple email clients. Validate links and run spam analysis before sending."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-6 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="bg-blue-100 p-3 rounded-lg transform transition-transform duration-300 hover:rotate-12">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 