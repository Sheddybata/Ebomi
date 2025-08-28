import React, { useState } from 'react';
import { Search, Play, Calendar, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SermonsSection: React.FC = () => {
  const [sermonSearchQuery, setSermonSearchQuery] = useState('');
  const [devotionalSearchQuery, setDevotionalSearchQuery] = useState('');

  const sermons = [
    {
      id: 1,
      title: "Walking in Divine Purpose",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 15, 2024",
      duration: "45:32",
      imageUrl: "/Prophet Isa El-buba full.jpeg"
    },
    {
      id: 2,
      title: "Faith Over Fear",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 8, 2024",
      duration: "42:15",
      imageUrl: "/Prophet Isa Elbuba profile.jpeg"
    },
    {
      id: 3,
      title: "The Power of Prayer",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 1, 2024",
      duration: "38:22",
      imageUrl: "/Slide show image.jpg"
    },
    {
      id: 4,
      title: "Grace and Mercy",
      speaker: "Prophet Isa El-Buba",
      date: "Nov 24, 2024",
      duration: "41:33",
      imageUrl: "/Prophet Isa El-Buba Profile.png"
    },
    {
      id: 5,
      title: "Walking in Love",
      speaker: "Prophet Isa El-Buba",
      date: "Nov 17, 2024",
      duration: "39:45",
      imageUrl: "/sideshow 1.jpg"
    },
    {
      id: 6,
      title: "Hope in Hard Times",
      speaker: "Prophet Isa El-Buba",
      date: "Nov 10, 2024",
      duration: "44:12",
      imageUrl: "/Prophet Isa Elbuba profile.jpeg"
    },
    {
      id: 7,
      title: "Forgiveness and Restoration",
      speaker: "Prophet Isa El-Buba",
      date: "Nov 3, 2024",
      duration: "43:28",
      imageUrl: "/Prophet Isa El-buba full.jpeg"
    },
    {
      id: 8,
      title: "The Kingdom of God",
      speaker: "Prophet Isa El-Buba",
      date: "Oct 27, 2024",
      duration: "40:15",
      imageUrl: "/Slide show image.jpg"
    }
  ];

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
    }
  ];

  const filteredSermons = sermons.filter(sermon =>
    sermon.title.toLowerCase().includes(sermonSearchQuery.toLowerCase()) ||
    sermon.speaker.toLowerCase().includes(sermonSearchQuery.toLowerCase())
  );

  const filteredDevotionals = devotionals.filter(devotional =>
    devotional.title.toLowerCase().includes(devotionalSearchQuery.toLowerCase()) ||
    devotional.speaker.toLowerCase().includes(devotionalSearchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 p-4 z-40">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Sermons</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search sermons by title or speaker..."
            value={sermonSearchQuery}
            onChange={(e) => setSermonSearchQuery(e.target.value)}
            className="bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500 pl-10 pr-4 rounded-lg focus:bg-white focus:border-ekklesia-brown"
          />
        </div>
      </div>

      {/* Sermons List */}
      <div className="p-4 pb-24">
        <div className="space-y-3">
          {filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={sermon.imageUrl}
                  alt={sermon.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                    {sermon.title}
                  </h3>
                  <p className="text-ekklesia-brown text-sm mb-2">{sermon.speaker}</p>
                  
                  <div className="flex items-center space-x-4 text-gray-500 text-xs">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{sermon.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{sermon.duration}</span>
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

        {filteredSermons.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No sermons found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          </div>
        )}

        {/* Daily Devotionals Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Daily Devotionals</h2>
          </div>
          
          {/* Devotionals Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search devotionals..."
              value={devotionalSearchQuery}
              onChange={(e) => setDevotionalSearchQuery(e.target.value)}
              className="bg-gray-100 border-gray-200 text-gray-900 placeholder-gray-500 pl-10 pr-4 rounded-lg focus:bg-white focus:border-ekklesia-red"
            />
          </div>

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

                  <button className="flex-shrink-0 w-10 h-10 bg-ekklesia-red hover:bg-ekklesia-red/90 text-white rounded-full flex items-center justify-center transition-colors">
                    <Play className="h-4 w-4 ml-0.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredDevotionals.length === 0 && devotionalSearchQuery && (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                <Search className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No devotionals found</h3>
                <p className="text-gray-500">Try adjusting your search terms</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SermonsSection;
