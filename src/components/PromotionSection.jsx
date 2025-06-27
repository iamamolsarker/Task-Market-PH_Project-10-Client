import React from 'react';
import { Star, Clock, Users, Zap } from 'lucide-react';

const PromotionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <span className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                Limited Time
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Boost Your Freelance Career
            </h2>
            
            <p className="text-xl text-purple-100 mb-8">
              Join our Premium membership and get access to exclusive high-paying projects, 
              priority support, and advanced portfolio features.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-purple-100">Premium Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-yellow-400" />
                <span className="text-purple-100">Priority Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-yellow-400" />
                <span className="text-purple-100">Client Network</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-purple-100">Fast Payments</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                Upgrade Now - 50% Off
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&auto=format"
              alt="Premium Freelancer Success"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">2,500+ Projects</p>
                  <p className="text-gray-600 text-sm">Completed This Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;