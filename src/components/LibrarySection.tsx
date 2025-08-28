import React from 'react';
import { Bookmark, Heart, Clock, Play, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LibrarySection: React.FC = () => {
  const playlists = [
    {
      title: "Favorites",
      count: 24,
      icon: Heart,
      color: "bg-red-500"
    },
    {
      title: "Recently Played",
      count: 12,
      icon: Clock,
      color: "bg-blue-500"
    },
    {
      title: "Saved for Later",
      count: 8,
      icon: Bookmark,
      color: "bg-yellow-500"
    }
  ];

  const savedEpisodes = [
    {
      title: "Walking in Purpose - Part 2",
      series: "Walking in Purpose",
      duration: "38:45",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212646_c1b8f2a7.webp"
    },
    {
      title: "Faith Over Fear",
      series: "Faith Series",
      duration: "42:15",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212646_e3d9c4b6.webp"
    },
    {
      title: "The Power of Prayer",
      series: "Prayer & Worship",
      duration: "45:18",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212647_f5a1d8e9.webp"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {/* Library Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-md border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Library</h1>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Playlists */}
        <div>
          <h3 className="text-white font-semibold mb-3">Your Collections</h3>
          <div className="space-y-3">
            {playlists.map((playlist, index) => {
              const Icon = playlist.icon;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg ${playlist.color} flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{playlist.title}</h4>
                      <p className="text-gray-400 text-sm">{playlist.count} episodes</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Saved Episodes */}
        <div>
          <h3 className="text-white font-semibold mb-3">Saved Episodes</h3>
          <div className="space-y-3">
            {savedEpisodes.map((episode, index) => (
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
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full mb-1 inline-block">
                      {episode.series}
                    </span>
                    <h4 className="text-white font-medium text-sm mb-1 truncate">
                      {episode.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{episode.duration}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white flex-shrink-0">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;
