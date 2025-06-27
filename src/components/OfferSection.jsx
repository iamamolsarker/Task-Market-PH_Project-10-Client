import React from 'react';
import { Gift, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const OfferSection = () => {
  const offers = [
    {
      id: 1,
      title: "New Freelancer Bonus",
      description: "Get $50 bonus on your first completed project",
      discount: "$50 Bonus",
      validity: "Valid for 30 days",
      color: "bg-green-500",
      features: ["First project bonus", "Welcome guide", "Priority onboarding"]
    },
    {
      id: 2,
      title: "Client Referral Program",
      description: "Earn $25 for every client you refer to our platform",
      discount: "$25 Per Referral",
      validity: "Ongoing offer",
      color: "bg-blue-500",
      features: ["Unlimited referrals", "Instant payouts", "Referral tracking"]
    },
    {
      id: 3,
      title: "Bulk Project Discount",
      description: "Save 20% when posting 5+ projects at once",
      discount: "20% Off",
      validity: "Limited time",
      color: "bg-purple-500",
      features: ["Bulk posting", "Project management", "Dedicated support"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">Special Offers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Deals Just for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take advantage of our limited-time offers and maximize your earning potential on TaskMarket.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className={`${offer.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-20 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white opacity-20 rounded-full -ml-8 -mb-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <Gift className="w-8 h-8" />
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{offer.validity}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-lg font-semibold bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block text-black">
                    {offer.discount}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{offer.description}</p>
                
                <div className="space-y-3 mb-6">
                  {offer.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                  <span>Claim Offer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
          <p className="text-lg mb-6 opacity-90">
            These exclusive offers won't last forever. Join thousands of satisfied users today.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            View All Offers
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
