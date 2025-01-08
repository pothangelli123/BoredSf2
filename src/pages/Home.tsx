import React from 'react';
import { 
  MessageSquare, Mail, Users, BarChart, Cloud, Shield, Zap, Globe,
  Award, Sparkles, Rocket, Target, ArrowRight, CheckCircle, CheckCircle2, Star, Database, Play, Brain, Network, LineChart
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  const trustedBrands = [
    '/logos/amazon.svg',
    '/logos/microsoft.svg',
    '/logos/google.svg',
    '/logos/coca-cola.svg',
    '/logos/nike.svg',
    '/logos/samsung.svg',
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section with Animated Background */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 overflow-hidden min-h-screen">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <div className="inline-block px-4 py-1 bg-blue-500 bg-opacity-30 rounded-full mb-4 backdrop-blur-sm">
              <span className="text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Trusted by Fortune 500 Companies
              </span>
            </div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400 rounded-xl rotate-6 opacity-50"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-xl"></div>
                    <Cloud className="w-10 h-10 text-white" strokeWidth={1.5} />
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
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl">
              Comprehensive marketing automation and customer engagement platform for creating personalized experiences at scale.
            </p>
            <div className="flex gap-4 items-center">
              <Link 
                to="/services" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center group">
                Watch Demo
                <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Stats Preview */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-blue-100">Enterprise Clients</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm text-blue-100">Client Satisfaction</div>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Expert Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave - removed the gradient fade, kept only the wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="relative w-full" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 24C480 74 960 74 1440 24V74H0V24Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* Trusted Brands Section */}
      

      {/* Introduction Section with Card Design */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">
              <span className="inline-block">
                <Sparkles className="inline-block w-8 h-8 text-blue-600 mr-2" />
                Understanding Salesforce Marketing Cloud
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive suite of digital marketing tools designed to create personalized customer experiences at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automation Power</h3>
              <p className="text-gray-600">
                Create sophisticated marketing automation workflows with drag-and-drop simplicity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Personalization at Scale</h3>
              <p className="text-gray-600">
                Deliver tailored content and experiences to each customer across all channels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Make informed decisions with real-time analytics and AI-powered recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section with Enhanced Design */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Core Products
            </span>
            <h2 className="text-4xl font-bold">Marketing Cloud Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Marketing Cloud Engagement</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                  Popular
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Create and automate personalized customer journeys across all channels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Journey Builder
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Email Studio
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Mobile Studio
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Social Studio
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Marketing Cloud Intelligence</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                  Analytics
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Transform your marketing data into actionable insights with advanced analytics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Datorama Integration
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Custom Dashboards
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Performance Analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  ROI Tracking
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Marketing Cloud CDP</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                  Data
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Unify and activate your customer data with our Customer Data Platform.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Identity Resolution
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Audience Segmentation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Data Unification
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Real-time Activation
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Marketing Cloud Personalization</h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                  AI-Powered
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Deliver individualized experiences across all channels in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Einstein AI Integration
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Next-Best-Action
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Web Personalization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  A/B Testing
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
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
            </div>

            {/* Cross-Channel Orchestration */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
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
            </div>

            {/* Advanced Analytics */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
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
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Marketing?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let us help you harness the full potential of Salesforce Marketing Cloud to create exceptional customer experiences.
          </p>
          <div className="flex justify-center gap-6">
            <button className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all flex items-center">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}