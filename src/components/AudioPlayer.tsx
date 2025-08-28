import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface AudioPlayerProps {
  title: string;
  pastor: string;
  duration: string;
  currentTime: string;
  imageUrl?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title,
  pastor,
  duration,
  currentTime,
  imageUrl = "/Prophet Isa Elbuba profile.jpeg"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState([50]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    if (value[0] === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 shadow-lg">
      {/* Desktop Player */}
      <div className="hidden sm:flex items-center justify-between p-4">
        <div className="flex items-center space-x-4 flex-1">
          <img
            src={imageUrl}
            alt={title}
            className="w-12 h-12 rounded-lg object-cover"
          />
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
            <p className="text-ekklesia-brown text-sm">{pastor}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={togglePlay}
            className="bg-ekklesia-brown hover:bg-ekklesia-brown/90 text-white rounded-full w-10 h-10 p-0"
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center space-x-4 flex-1 justify-end">
          <span className="text-sm text-gray-500">{currentTime}</span>
          <div className="w-32 bg-gray-200 rounded-full h-1">
            <div className="bg-ekklesia-brown h-1 rounded-full" style={{ width: '35%' }}></div>
          </div>
          <span className="text-sm text-gray-500">{duration}</span>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="text-gray-600 hover:text-ekklesia-brown"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <div className="w-20">
              <Slider
                value={volume}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Player */}
      <div className="sm:hidden flex items-center p-3">
        <img
          src={imageUrl}
          alt={title}
          className="w-10 h-10 rounded-lg object-cover mr-3"
        />
        
        <div className="flex-1 min-w-0 mr-3">
          <h3 className="font-semibold text-gray-900 text-sm truncate">{title}</h3>
          <p className="text-ekklesia-brown text-xs">{pastor}</p>
        </div>

        <Button
          onClick={togglePlay}
          className="bg-ekklesia-brown hover:bg-ekklesia-brown/90 text-white rounded-full w-8 h-8 p-0"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
        </Button>
      </div>

      {/* Mobile Progress Bar */}
      <div className="sm:hidden bg-gray-200 h-1">
        <div className="bg-ekklesia-brown h-1" style={{ width: '35%' }}></div>
      </div>
    </div>
  );
};

export default AudioPlayer;