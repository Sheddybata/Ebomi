import React, { useState } from 'react';
import { Search, Play, Calendar, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';

const DevotionalsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const devotionals = [
    {
      id: 1,
      title: "Morning Prayer - December 15",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 15, 2024",
      duration: "5:32",
      imageUrl: "/Prophet Isa Elbuba profile.jpeg"
    },
    {
      id: 2,
      title: "Daily Wisdom - December 14",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 14, 2024",
      duration: "8:15",
      imageUrl: "/Prophet Isa El-buba full.jpeg"
    },
    {
      id: 3,
      title: "Evening Reflection - December 13",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 13, 2024",
      duration: "6:42",
      imageUrl: "/Slide show image.jpg"
    },
    {
      id: 4,
      title: "Night Prayer - December 12",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 12, 2024",
      duration: "7:18",
      imageUrl: "/sideshow 1.jpg"
    },
    {
      id: 5,
      title: "Morning Prayer - December 11",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 11, 2024",
      duration: "6:25",
      imageUrl: "/Prophet Isa El-Buba Profile.png"
    },
    {
      id: 6,
      title: "Daily Wisdom - December 10",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 10, 2024",
      duration: "9:03",
      imageUrl: "/Prophet Isa Elbuba profile.jpeg"
    },
    {
      id: 7,
      title: "Evening Reflection - December 9",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 9, 2024",
      duration: "5:47",
      imageUrl: "/Prophet Isa El-buba full.jpeg"
    },
    {
      id: 8,
      title: "Night Prayer - December 8",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 8, 2024",
      duration: "8:32",
      imageUrl: "/Slide show image.jpg"
    }
  ];

  const filteredDevotionals = devotionals.filter(devotional =>
    devotional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    devotional.speaker.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 p-4 z-40">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Daily Devotionals</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search devotionals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500 pl-10 pr-4 rounded-lg focus:bg-white focus:border-ekklesia-brown"
          />
        </div>
      </div>

      {/* Devotionals List */}
      <div className="p-4 pb-24">
        <div className="space-y-3">
          {filteredDevotionals.map((devotional) => (
            <div
              key={devotional.id}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={devotional.imageUrl}
                  alt={devotional.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                    {devotional.title}
                  </h3>
                  <p className="text-ekklesia-brown text-sm mb-2">{devotional.speaker}</p>
                  
                  <div className="flex items-center space-x-4 text-gray-500 text-xs">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{devotional.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{devotional.duration}</span>
                    </div>
                  </div>
                </div>

                <button className="flex-shrink-0 w-10 h-10 bg-ekklesia-brown hover:bg-ekklesia-brown/90 text-white rounded-full flex items-center justify-center transition-colors">
                  <Play className="h-4 w-4 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDevotionals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No devotionals found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevotionalsSection;
