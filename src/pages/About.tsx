import React from 'react';
import { Award, Users, Globe, Briefcase, BookOpen, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About BoredSF</h1>
          <p className="text-xl">Your trusted partner in Salesforce Marketing Cloud excellence</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Company Overview */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2010, BoredSF has grown from a small consulting firm to a leading Salesforce Marketing Cloud partner, serving clients across the globe. Our journey has been driven by a singular mission: to help businesses harness the full potential of digital marketing through innovative solutions and expert guidance.
          </p>
          <p className="text-gray-600">
            With over a decade of experience and hundreds of successful implementations, we've developed deep expertise in marketing automation, customer engagement, and digital transformation. Our team of certified professionals combines technical excellence with strategic insight to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Consultants</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, delivering the highest quality solutions and service to our clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">We believe in working closely with our clients, fostering strong partnerships and shared success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace new technologies and approaches to deliver cutting-edge solutions for our clients.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose BoredSF</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Briefcase className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Deep understanding of various industries and their unique marketing challenges.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Certified Team</h3>
                <p className="text-gray-600">Team of certified Salesforce Marketing Cloud experts with extensive experience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">Consistent delivery of successful projects and measurable results.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Customer-Centric</h3>
                <p className="text-gray-600">Dedicated to understanding and meeting our clients' unique needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}