import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, MoreHorizontal, Clock, Calendar } from 'lucide-react';

interface EpisodeCardProps {
  title: string;
  description: string;
  duration: string;
  date: string;
  imageUrl: string;
  isPlaying?: boolean;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({
  title,
  description,
  duration,
  date,
  imageUrl,
  isPlaying = false
}) => {
  return (
    <div className="group bg-gray-900/50 hover:bg-gray-800/50 rounded-lg p-3 sm:p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start space-x-3 sm:space-x-4">
        {/* Episode Image */}
        <div className="relative flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
            <Button
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-black rounded-full p-1.5 sm:p-2 shadow-lg"
            >
              <Play className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
            </Button>
          </div>
        </div>

        {/* Episode Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-base sm:text-lg mb-1 group-hover:text-green-400 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center text-xs text-gray-500 space-x-3 sm:space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white p-2"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;