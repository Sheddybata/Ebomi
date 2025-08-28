import React from 'react';
import { Users, Headphones, Clock, Heart } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: "12.5K+",
      label: "Active Listeners",
      color: "text-green-400"
    },
    {
      icon: Headphones,
      value: "250+",
      label: "Episodes",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      value: "180+",
      label: "Hours of Content",
      color: "text-purple-400"
    },
    {
      icon: Heart,
      value: "98%",
      label: "Positive Reviews",
      color: "text-red-400"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gray-800 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;