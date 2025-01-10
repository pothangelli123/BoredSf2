import React from 'react';
import { Award, Users, Globe, Briefcase, BookOpen, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const statsAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative h-[60vh] bg-blue-600 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10"
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
            transition: { 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              About BoredSF
            </motion.h1>
            <motion.p 
              className="text-2xl text-blue-100"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Digital Marketing Through Innovation
            </motion.p>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-16">
        {/* Company Overview */}
        <motion.div 
          className="max-w-4xl mx-auto mb-24 text-center"
          {...fadeIn}
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Founded in 2010, BoredSF has evolved from a visionary startup to a global leader in Salesforce Marketing Cloud solutions. Our journey has been marked by innovation, excellence, and an unwavering commitment to our clients' success.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            With over a decade of experience and hundreds of successful implementations, we've developed deep expertise in marketing automation, customer engagement, and digital transformation. Our team of certified professionals combines technical excellence with strategic insight to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Stats with Counter Animation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '50+', label: 'Expert Consultants' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '20+', label: 'Countries Served' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-4xl font-bold text-blue-600 mb-3"
                {...floatingAnimation}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Core Values with Hover Effects */}
        <motion.div className="mb-24" {...fadeIn}>
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Excellence', description: 'We strive for excellence in everything we do, delivering the highest quality solutions and service to our clients.' },
              { icon: Users, title: 'Collaboration', description: 'We believe in working closely with our clients, fostering strong partnerships and shared success.' },
              { icon: Globe, title: 'Innovation', description: 'We embrace new technologies and approaches to deliver cutting-edge solutions for our clients.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div {...floatingAnimation}>
                  <value.icon className="w-16 h-16 text-blue-600 mb-6 group-hover:text-purple-600 transition-colors duration-300" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us with Interactive Cards */}
        <motion.div {...fadeIn}>
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Why Choose BoredSF
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Briefcase, 
                title: "Industry Expertise", 
                description: "Deep understanding of various industries and their unique marketing challenges."
              },
              { 
                icon: BookOpen, 
                title: "Certified Team", 
                description: "Team of certified Salesforce Marketing Cloud experts with extensive experience."
              },
              { 
                icon: Shield, 
                title: "Proven Track Record", 
                description: "Consistent delivery of successful projects and measurable results."
              },
              { 
                icon: Users, 
                title: "Customer-Centric", 
                description: "Dedicated to understanding and meeting our clients unique needs."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 p-6 rounded-xl hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    
    </div>
  );
}