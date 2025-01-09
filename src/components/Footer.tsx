import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="medium" className="text-white" />
            <p className="text-gray-300 text-sm leading-relaxed">
              We specialize in Salesforce Marketing Cloud & Data Cloud solutions, 
              helping businesses transform their digital marketing through innovative 
              cloud-based technologies.
            </p>
            {/* Certification Badge */}
            
            <div className="space-y-3">
              <a href="mailto:contact@boredsf.com" 
                 className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-3" />
                contact@boredsf.com
              </a>
              <a href="tel:+1234567890" 
                 className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <Phone className="w-4 h-4 mr-3" />
                (123) 456-7890
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Marketing Cloud Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Email Studio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Journey Builder</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Mobile Studio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Advertising Studio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Data Cloud</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Implementation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Migration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Training</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Stay Updated</h3>
            <p className="text-sm text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-blue-400 text-sm"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media & Certification Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <img 
                src="https://cdn.prod.website-files.com/613e4731d83966a77c092578/620674c2ab35e3481a9a06bb_Salesforce_Partner_Badge-p-500.png" 
                alt="Salesforce Partner" 
                className="h-16 md:h-20 hover:opacity-90 transition-opacity duration-300"
              />
             <div className="mt-4">
              <img 
                src="https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Marketing-Cloud-Email-Specialist.png"
                alt="Salesforce Marketing Cloud Email Specialist Certification"
                className="h-24 w-auto"
              />
            </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} BoredSF. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 