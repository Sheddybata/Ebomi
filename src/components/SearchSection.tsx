import React, { useState } from 'react';
import { Search, Filter, Mic } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All', 'Sermons', 'Series', 'Topics', 'Speakers', 'Scripture'
  ];

  const recentSearches = [
    'Faith over fear',
    'Prayer and worship',
    'Grace and mercy',
    'Love your neighbor',
    'Finding peace'
  ];

  const popularTopics = [
    { name: 'Faith', count: 156 },
    { name: 'Prayer', count: 89 },
    { name: 'Love', count: 134 },
    { name: 'Grace', count: 67 },
    { name: 'Hope', count: 98 },
    { name: 'Forgiveness', count: 73 }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {/* Search Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-md border-b border-gray-800 p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search sermons, topics, speakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 pl-10 pr-4 rounded-full"
            />
          </div>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
            <Mic className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Recent Searches */}
        <div>
          <h3 className="text-white font-semibold mb-3">Recent Searches</h3>
          <div className="space-y-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="flex items-center space-x-3 w-full p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors text-left"
              >
                <Search className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300">{search}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Topics */}
        <div>
          <h3 className="text-white font-semibold mb-3">Popular Topics</h3>
          <div className="grid grid-cols-2 gap-3">
            {popularTopics.map((topic) => (
              <button
                key={topic.name}
                className="flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors text-left"
              >
                <span className="text-white font-medium">{topic.name}</span>
                <span className="text-gray-400 text-sm">{topic.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
