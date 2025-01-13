import React, { useState } from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ChevronRight } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 last:border-b-0 lg:border-none">
      {/* Mobile accordion header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left lg:hidden"
      >
        <span className="text-blue-400 font-semibold">{title}</span>
        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-3' : 'max-h-0'}`}>
        {children}
      </div>

      {/* Desktop permanent view - your original content */}
      <div className="hidden lg:block">
        <h3 className="text-lg font-semibold mb-6 text-blue-400">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info - 2 columns */}
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Logo size="medium" className="text-white" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We specialize in Salesforce Marketing Cloud & Data Cloud solutions,
              helping businesses transform their digital marketing through innovative
              cloud-based technologies.
            </p>

            <div className="space-y-3">
              <a href="mailto:contact@boredsf.com" 
                 className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 justify-center lg:justify-start">
                <Mail className="w-4 h-4 mr-3" />
                contact@boredsf.com
              </a>
              <a href="tel:+1234567890" 
                 className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 justify-center lg:justify-start">
                <Phone className="w-4 h-4 mr-3" />
                (123) 456-7890
              </a>
              <div className="flex items-center text-gray-300 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 mr-3" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Wrap each section in Accordion for mobile view while preserving desktop layout */}
          <Accordion title="Services">
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Email Studio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Journey Builder</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Mobile Studio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Advertising Studio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Data Cloud</a></li>
            </ul>
          </Accordion>

          <Accordion title="Solutions">
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Implementation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Migration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Training</a></li>
            </ul>
          </Accordion>

          <Accordion title="Company">
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </Accordion>

          <Accordion title="Stay Updated">
            <div>
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
          </Accordion>
        </div>

        {/* Social Media & Certification Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          {/* Your original social media and certification badges section */}
          {/* ... rest of your original footer code ... */}
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
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