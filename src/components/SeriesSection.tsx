import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Plus } from 'lucide-react';

const SeriesSection: React.FC = () => {
  const series = [
    {
      title: "Walking in Purpose",
      episodes: 8,
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212649_h8i5j2k6.webp",
      description: "Discover God's calling for your life"
    },
    {
      title: "Faith Foundations",
      episodes: 12,
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212649_m9n6o3p7.webp",
      description: "Building strong spiritual foundations"
    },
    {
      title: "Love in Action",
      episodes: 6,
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212650_q4r1s8t5.webp",
      description: "Practical ways to show God's love"
    },
    {
      title: "Prayer & Worship",
      episodes: 10,
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212650_u2v9w6x3.webp",
      description: "Deepening your relationship with God"
    },
    {
      title: "Biblical Wisdom",
      episodes: 15,
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212650_y7z4a1b8.webp",
      description: "Timeless wisdom for modern life"
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Sermon Series</h2>
          <button className="text-gray-400 hover:text-white text-sm font-medium">
            Show all
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {series.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative mb-3 sm:mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full aspect-square object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-black rounded-full p-2 sm:p-3 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200"
                  >
                    <Play className="h-4 w-4 sm:h-6 sm:w-6 fill-current" />
                  </Button>
                </div>
              </div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-green-400 transition-colors text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-1">{item.description}</p>
              <p className="text-gray-500 text-xs">{item.episodes} episodes</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeriesSection;