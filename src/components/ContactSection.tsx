import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactSection() {
  return (
    <section className="relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-r from-blue-600 to-blue-800" />
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-800">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">123 Market Street, Suite 456<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (415) 555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">contact@boredsf.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Working Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="mt-8 relative overflow-hidden">
                  <div 
                    className="w-full h-[400px] rounded-xl relative bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://staticmap.openstreetmap.de/staticmap.php?center=37.7749,-122.4194&zoom=14&size=800x400&markers=37.7749,-122.4194,red')`
                    }}
                  >
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-blue-600/20"></div>
                    
                    {/* Location marker */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping"></div>
                        <div className="absolute -inset-2 bg-blue-500/40 rounded-full animate-ping animation-delay-500"></div>
                        <div className="relative w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                    </div>
                    
                    {/* Location label */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8 bg-white px-6 py-2 rounded-full shadow-xl border border-gray-100">
                      <p className="text-sm font-semibold text-gray-700">San Francisco Office</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-800">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 h-32"
                      placeholder="Tell us more about your needs..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}