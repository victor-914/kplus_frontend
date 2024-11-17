import React from 'react';
import { Shield, Home, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted by Thousands',
    description: 'With over 15 years of experience and 10,000+ successful deals, we\'ve earned the trust of homeowners nationwide.'
  },
  {
    icon: Home,
    title: 'Wide Range of Properties',
    description: 'Access to exclusive listings and a diverse portfolio of properties to match every lifestyle and budget.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Our dedicated team is always available to assist you with any questions or concerns throughout your journey.'
  },
  {
    icon: Award,
    title: 'Expert Guidance',
    description: 'Our licensed professionals provide personalized advice to help you make informed real estate decisions.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-[#ba9b0e] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 text-center rounded-xl transition-all duration-300 hover:bg-[#ba9b0e] hover:shadow-xl cursor-pointer"
            >
              <div className="inline-block p-4 rounded-full bg-yellow-50 group-hover:bg-white/10 mb-6">
                <feature.icon className="w-8 h-8 text-yellow-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}