import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Clock, Calendar, Bell, Users, CheckCircle, Wifi, Radio } from 'lucide-react';

const LiveSection: React.FC = () => {
  const [isLive, setIsLive] = useState(true);
  const [reminderSet, setReminderSet] = useState(false);
  const [viewerCount, setViewerCount] = useState(1247);

  // Simulate live viewer count updates
  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isLive]);

  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Service",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 22, 2024",
      time: "9:00 AM",
      duration: "2 hours",
      imageUrl: "/Prophet Isa El-buba full.jpeg",
      isLive: true
    },
    {
      id: 2,
      title: "Mid-week Service",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 25, 2024",
      time: "7:00 PM",
      duration: "1 hour",
      imageUrl: "/Prophet Isa Elbuba profile.jpeg"
    },
    {
      id: 3,
      title: "Bible Study",
      speaker: "Prophet Isa El-Buba",
      date: "Dec 28, 2024",
      time: "6:30 PM",
      duration: "45 min",
      imageUrl: "/Slide show image.jpg"
    }
  ];

  const handleSetReminder = () => {
    setReminderSet(true);
    setTimeout(() => setReminderSet(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-700 p-4 z-40">
        <h1 className="text-xl font-bold text-white flex items-center space-x-2">
          <Radio className="h-5 w-5 text-red-500" />
          <span>Live</span>
        </h1>
      </div>

      <div className="p-4 pb-24 space-y-6">
        {/* Grand Live Stream Player */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <div className="relative bg-gradient-to-br from-gray-900 to-black aspect-video">
            {/* Live Background Animation */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-pulse"></div>
            </div>

            {isLive ? (
              <>
                {/* Live Badge with Grand Animation */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="relative">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <span>LIVE</span>
                    </div>
                    {/* Pulsing Ring Effect */}
                    <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Viewer Count with Animation */}
                <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-gray-600">
                  <div className="flex items-center space-x-2">
                    <Wifi className="h-4 w-4 text-green-400 animate-pulse" />
                    <span className="font-semibold">{viewerCount.toLocaleString()}</span>
                    <span className="text-gray-400">watching</span>
                  </div>
                </div>

                {/* Center Play Button with Grand Styling */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group">
                    <Button 
                      size="lg" 
                      className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/50"
                    >
                      <Play className="h-8 w-8 mr-3" />
                      Watch Live Now
                    </Button>
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Live Stream Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-600">
                    <h3 className="text-white font-bold text-lg mb-2">Sunday Service - Live Now</h3>
                    <p className="text-gray-300 mb-3">Prophet Isa El-Buba • Walking in Divine Purpose</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Started 45 minutes ago</span>
                      <span>•</span>
                      <span>1,247 viewers</span>
                      <span>•</span>
                      <span>High Quality</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-gray-600">
                    <Play className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No Live Stream</h3>
                  <p className="text-gray-400">Check back for upcoming live events</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Status Indicator */}
        <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className={`w-4 h-4 rounded-full ${isLive ? 'bg-red-500' : 'bg-gray-500'} animate-pulse`}></div>
                {isLive && (
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-red-500 animate-ping"></div>
                )}
              </div>
              <span className={`text-sm font-bold ${isLive ? 'text-red-500' : 'text-gray-500'}`}>
                Status: {isLive ? 'LIVE NOW' : 'OFFLINE'}
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSetReminder}
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              <Bell className="h-4 w-4 mr-2" />
              Set Reminder
            </Button>
          </div>

          {reminderSet && (
            <div className="mt-4 bg-green-600/20 border border-green-500/30 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-medium">Reminder Set!</span>
              </div>
              <p className="text-green-400/80 text-sm mt-1">You'll be notified 15 minutes before the next live event.</p>
            </div>
          )}
        </div>

        {/* Upcoming Events with Enhanced Styling */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-red-500" />
            <span>Upcoming Live Events</span>
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0 border-2 border-gray-600 group-hover:border-red-500 transition-colors duration-300"
                    />
                    {event.isLive && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                          LIVE
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-red-400 text-sm mb-2 font-medium">{event.speaker}</p>
                    
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time} • {event.duration}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                  >
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Schedule Info with Enhanced Styling */}
        <div className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="font-bold text-red-400 mb-4 flex items-center space-x-2">
            <Radio className="h-5 w-5" />
            <span>Live Schedule</span>
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-gray-700">
              <span className="text-white font-medium">Sunday Service</span>
              <span className="text-gray-300">Every Sunday at 9:00 AM</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-gray-700">
              <span className="text-white font-medium">Mid-week Service</span>
              <span className="text-gray-300">Every Wednesday at 7:00 PM</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-gray-700">
              <span className="text-white font-medium">Bible Study</span>
              <span className="text-gray-300">Every Saturday at 6:30 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSection;