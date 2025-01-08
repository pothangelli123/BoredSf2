import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo size="medium" className="text-white" />
            <p className="text-gray-400 mt-4">
              Transforming marketing through innovative cloud solutions.
            </p>
            <div className="space-y-2">
              <a href="mailto:contact@boredsf.com" className="flex items-center text-gray-400 hover:text-blue-400">
                <Mail className="w-4 h-4 mr-2" />
                contact@boredsf.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-blue-400">
                <Phone className="w-4 h-4 mr-2" />
                (123) 456-7890
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                San Francisco, CA
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Marketing Cloud</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Analytics Suite</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Automation Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Integration APIs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 BoredSF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 