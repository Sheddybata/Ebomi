import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Plus, Share } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end bg-gradient-to-b from-green-900/40 to-black/60 bg-cover bg-center"
      style={{
        backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212645_8fd8ac4e.webp')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-green-500 text-black text-xs font-semibold rounded-full uppercase tracking-wide">
              Featured Sermon
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Walking in
            <span className="text-green-400"> Purpose</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Discover God's calling for your life through this powerful message series. 
            Join Pastor Michael as he explores biblical principles for finding your divine purpose.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 sm:px-8 py-3 rounded-full flex items-center space-x-2 transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
              <span>Play Latest</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 px-6 py-3 rounded-full flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Follow</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="text-gray-300 hover:text-white hover:bg-gray-800 p-3 rounded-full w-full sm:w-auto justify-center"
            >
              <Share className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
          
          <div className="text-xs sm:text-sm text-gray-400">
            <span>12,847 followers • </span>
            <span>Updated weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;