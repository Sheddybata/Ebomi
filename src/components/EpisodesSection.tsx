import React from 'react';
import { Filter, SortAsc, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EpisodesSection: React.FC = () => {
  const episodes = [
    {
      title: "Walking in Purpose - Part 1",
      description: "Discovering your divine calling and walking in God's purpose for your life.",
      duration: "42:15",
      date: "Latest",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212646_c1b8f2a7.webp",
      series: "Walking in Purpose"
    },
    {
      title: "Faith Over Fear",
      description: "Learning to trust God's plan even when we can't see the path ahead.",
      duration: "38:22",
      date: "1 week ago",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212646_e3d9c4b6.webp",
      series: "Faith Series"
    },
    {
      title: "The Power of Prayer",
      description: "Understanding the transformative impact of consistent prayer.",
      duration: "45:18",
      date: "2 weeks ago",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212647_f5a1d8e9.webp",
      series: "Prayer & Worship"
    },
    {
      title: "Love Your Neighbor",
      description: "Exploring what it truly means to love others as ourselves.",
      duration: "41:33",
      date: "3 weeks ago",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212647_a7b2c5f8.webp",
      series: "Love in Action"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {/* Episodes Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-md border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Episodes</h1>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
              <Filter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
              <SortAsc className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
              <Grid className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <div className="flex items-start space-x-3">
                <img
                  src={episode.imageUrl}
                  alt={episode.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      {episode.series}
                    </span>
                    <span className="text-xs text-gray-400">{episode.date}</span>
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1 truncate">
                    {episode.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                    {episode.description}
                  </p>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-gray-500">{episode.duration}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">Listen</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EpisodesSection;
