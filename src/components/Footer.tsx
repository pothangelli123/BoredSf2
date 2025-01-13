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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left lg:hidden"
      >
        <span className="text-blue-400 font-semibold">{title}</span>
        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 py-3' : 'max-h-0'}`}>
        {children}
      </div>

      {/* Desktop permanent view */}
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
      <div className="container mx-auto px-6 py-8 lg:py-16">
        {/* Logo and Contact - Always visible */}
        <div className="text-center lg:text-left mb-8">
          <Logo size="medium" className="text-white mx-auto lg:mx-0 mb-4" />
          <a href="mailto:contact@boredsf.com" 
             className="flex items-center text-gray-300 hover:text-blue-400 justify-center lg:justify-start">
            <Mail className="w-4 h-4 mr-2" /> contact@boredsf.com
          </a>
        </div>

        {/* Accordion Sections */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <Accordion title="Services">
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 block">Email Studio</a></li>
              <li><a href="#" className="hover:text-blue-400 block">Journey Builder</a></li>
              <li><a href="#" className="hover:text-blue-400 block">Data Cloud</a></li>
            </ul>
          </Accordion>

          <Accordion title="Solutions">
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 block">Implementation</a></li>
              <li><a href="#" className="hover:text-blue-400 block">Integration</a></li>
              <li><a href="#" className="hover:text-blue-400 block">Migration</a></li>
            </ul>
          </Accordion>

          <Accordion title="Company">
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 block">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 block">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 block">Contact</a></li>
            </ul>
          </Accordion>

          <Accordion title="Legal">
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 block">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 block">Cookie Policy</a></li>
            </ul>
          </Accordion>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} BoredSF. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}