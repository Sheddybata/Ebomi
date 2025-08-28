import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight, Download, BookOpen, ShoppingCart, MessageCircle, Star, Heart } from 'lucide-react';

const HomeSection: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Profile images for header slideshow - only two best ones
  const headerSlideshowImages = [
    "/Prophet Isa Elbuba profile.jpeg",
    "/Prophet Isa El-buba full.jpeg"
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => 
        prevIndex === headerSlideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [headerSlideshowImages.length]);

  // Progress bar animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgressWidth((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 0.5; // Increment by 0.5% every 25ms for 5 seconds total
      });
    }, 25); // Update every 25ms for smooth animation

    return () => clearInterval(progressInterval);
  }, [currentSlideIndex]);

  // Reset progress when slide changes
  useEffect(() => {
    setProgressWidth(0);
  }, [currentSlideIndex]);

  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);



  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex === headerSlideshowImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) => 
      prevIndex === 0 ? headerSlideshowImages.length - 1 : prevIndex - 1
    );
  };

  // Audio playback functions
  const playAudio = (audioUrl: string, clipId: string) => {
    // For demo purposes, simulate audio playback
    setCurrentlyPlaying(clipId);
    
    // Simulate audio duration
    const timeout = setTimeout(() => {
      setCurrentlyPlaying(null);
    }, 5000); // Stop after 5 seconds for demo
    
    // Store timeout ID for cleanup
    return () => clearTimeout(timeout);
  };

  const stopAudio = () => {
    setCurrentlyPlaying(null);
  };

  // Mock live status
  const isLive = false;
  const nextLiveEvent = "1 day, 3h, 45m";

  // Mock data for carousels - using slideshow images for sermon covers
  const recentSermons = [
    {
      id: 1,
      title: "ARISE & WALK - Prophet Isa El-Buba",
      speaker: "Prophet Isa El-Buba",
      imageUrl: "/sideshow 1.jpg",
      duration: "15:30",
      audioUrl: "/arise-and-walk-demo.mp3" // Add audio file path when available
    },
    {
      id: 2,
      title: "Faith Over Fear",
      speaker: "Prophet Isa El-Buba",
      imageUrl: "/Slide show image.jpg",
      duration: "42:15"
    },
    {
      id: 3,
      title: "The Power of Prayer",
      speaker: "Prophet Isa El-Buba",
      imageUrl: "/sideshow 1.jpg",
      duration: "38:22"
    },
    {
      id: 4,
      title: "Grace and Mercy",
      speaker: "Prophet Isa El-Buba",
      imageUrl: "/Slide show image.jpg",
      duration: "41:33"
    },
    {
      id: 5,
      title: "Walking in Love",
      speaker: "Prophet Isa El-Buba",
      imageUrl: "/sideshow 1.jpg",
      duration: "39:45"
    }
  ];



  // Books data with SVG images
  const books = [
    {
      id: 1,
      title: "Burning Mantles: The Call, the Cost, and the Fire of a True Prophet",
      author: "Prophet Isa El-Buba",
      description: "From the 'Cradle of Crisis' to the 'Mantles and End-Time Fire Carriers,' Prophet Isa El-Buba maps the entire lifecycle of a genuine prophetic mantle. Across 25 blazing chapters, the author interweaves riveting personal stories, Scripture, and national-revival insights to show how God forges, tests, and finally deploys His fire-brands.",
      softcopyPrice: "₦7,999",
      hardcopyPrice: "₦11,997",
      imageUrl: "/Burning Mantles.svg",
      features: [
        "25 blazing chapters",
        "7 prophetic prayers per section",
        "7 blessings per section",
        "Part memoir, part manual",
        "Field guide for prophets and intercessors"
      ]
    },
    {
      id: 2,
      title: "Anointing for Wealth Creation and Distribution",
      author: "Prophet Isa El-Buba",
      description: "Unlock the prophetic blueprint for raising Spirit-filled entrepreneurs and kingdom financiers. Prophet El-Buba walks you from covenant foundations of prosperity to the practical ethics, structures, and safeguards that keep wealth from becoming idolatry.",
      softcopyPrice: "₦7,999",
      hardcopyPrice: "₦11,997",
      imageUrl: "/Wealth creation.svg",
      features: [
        "5 comprehensive sections",
        "Kingdom prosperity foundations",
        "Prophetic activations",
        "Financial intelligence",
        "Wealth transfer strategies"
      ]
    },
    {
      id: 3,
      title: "The Call to Genuine Love And Revival",
      author: "Prophet Isa El-Buba",
      description: "Experience the transformative power of genuine love and the fire of revival. This compelling work explores the depths of authentic spiritual awakening and the call to genuine love that leads to lasting revival.",
      softcopyPrice: "₦7,999",
      hardcopyPrice: "₦11,997",
      imageUrl: "/_The Call to Genuine Love And Revival.svg",
      features: [
        "Revival-focused content",
        "Love and spiritual awakening",
        "Practical revival strategies",
        "Authentic spiritual guidance",
        "Transformative teachings"
      ]
    }
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 pb-28 scrollbar-hide">
      {/* Header Slideshow Section */}
      <section className="relative h-80 overflow-hidden">
        {/* Stunning Progress Bar at Top */}
        <div className="absolute top-0 left-0 right-0 z-30">
          <div className="h-1 bg-black/20 backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-ekklesia-brown via-ekklesia-red to-ekklesia-brown shadow-lg transition-all duration-100 ease-out"
              style={{
                width: `${progressWidth}%`,
                boxShadow: '0 0 10px rgba(104, 45, 12, 0.5)'
              }}
            />
          </div>
        </div>

        {/* Slideshow Background */}
        <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
          <img
            src={headerSlideshowImages[currentSlideIndex]}
            alt="Prophet Isa El-Buba"
            className="w-full h-full object-contain bg-gray-900"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-200 z-20 backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-200 z-20 backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentSlideIndex === 0 ? "•" : "·"} {currentSlideIndex === 1 ? "•" : "·"}
          </div>
        </div>

        <div className="relative z-10 h-full flex items-end justify-center pb-8">
          <div className="text-center text-white">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">
              Prophet Isa El-Buba
            </h1>
            
            <p className="text-sm sm:text-base text-gray-200 mb-4 max-w-md mx-auto">
              Ministry of Divine Purpose and Spiritual Transformation
            </p>
            
            <Button
              size="sm"
              className="bg-ekklesia-brown hover:bg-ekklesia-brown/90 text-white px-6 py-2 rounded-full flex items-center space-x-2 text-sm shadow-lg mx-auto"
            >
              <Play className="h-4 w-4" />
              <span>Start Listening</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Live Broadcast Card */}
      <section className="p-4">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
          {isLive ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-ekklesia-red rounded-full animate-pulse"></div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-ekklesia-red font-semibold text-sm">LIVE</span>
                    <span className="text-gray-600 text-sm">Prophet Isa El-Buba is Live Now</span>
                  </div>
                  <p className="text-gray-800 font-medium">Sunday Service</p>
                </div>
              </div>
              <Button className="bg-ekklesia-brown hover:bg-ekklesia-brown/90 text-white px-4 py-2 rounded-lg">
                Join Live
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="text-gray-800 font-semibold">Next Live Service</span>
              </div>
              <div className="text-2xl font-bold text-ekklesia-brown mb-3">
                {nextLiveEvent}
              </div>
              <Button className="bg-ekklesia-brown hover:bg-ekklesia-brown/90 text-white px-6 py-2 rounded-lg">
                Set Reminder
              </Button>
            </div>
          )}
        </div>
      </section>



      {/* Recent Sermons Carousel */}
      <section className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Recent Sermons</h2>
          <Button variant="ghost" className="text-ekklesia-brown hover:text-ekklesia-brown/80 p-0">
            <span className="text-sm">View All</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2 touch-manipulation">
          {recentSermons.map((sermon) => (
            <div 
              key={sermon.id} 
              className="flex-shrink-0 w-40 sm:w-48 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow relative cursor-pointer group"
              onClick={() => {
                if (currentlyPlaying === `sermon-${sermon.id}`) {
                  stopAudio();
                } else {
                  playAudio(sermon.title, `sermon-${sermon.id}`);
                }
              }}
            >
              <div className="relative">
                <img src={sermon.imageUrl} alt={sermon.title} className="w-full h-24 object-cover" />
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {sermon.duration}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                    currentlyPlaying === `sermon-${sermon.id}` 
                      ? 'bg-ekklesia-brown' 
                      : 'bg-white/90'
                  }`}>
                    <Play className={`h-5 w-5 ${
                      currentlyPlaying === `sermon-${sermon.id}` 
                        ? 'text-white' 
                        : 'text-ekklesia-brown'
                    }`} />
                  </div>
                </div>
                {currentlyPlaying === `sermon-${sermon.id}` && (
                  <div className="absolute bottom-2 left-2 bg-ekklesia-red text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                    PLAYING
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">{sermon.title}</h3>
                <p className="text-ekklesia-brown text-xs">{sermon.speaker}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Books Section */}
      <section className="px-4 py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-ekklesia-brown to-ekklesia-red bg-clip-text text-transparent">Prophet's Books</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover transformative teachings and prophetic insights that will revolutionize your spiritual journey</p>
        </div>
        
        <div className="space-y-10">
          {books.map((book, index) => (
            <div key={book.id} className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative">
              {/* Premium Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-gradient-to-r from-ekklesia-brown to-ekklesia-red text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  Premium Book {index + 1}
                </span>
              </div>
              
              <div className="flex flex-col lg:flex-row">
                {/* Book Image */}
                <div className="lg:w-2/5 bg-gradient-to-br from-ekklesia-brown/5 via-ekklesia-red/5 to-ekklesia-brown/10 p-10 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-ekklesia-brown/5 to-ekklesia-red/5 opacity-50"></div>
                  <div className="relative w-56 h-72 z-10">
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="w-full h-full object-contain drop-shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
                    />
                    {/* Enhanced decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-ekklesia-brown rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-ekklesia-red rounded-full opacity-40 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-r from-ekklesia-brown to-ekklesia-red rounded-full opacity-20 animate-pulse delay-500"></div>
                  </div>
                </div>
                
                {/* Book Content */}
                <div className="lg:w-3/5 p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-ekklesia-brown text-lg font-semibold mb-6">{book.author}</p>
                    <p className="text-gray-600 text-base leading-relaxed mb-8">
                      {book.description}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-2 h-6 bg-gradient-to-r from-ekklesia-brown to-ekklesia-red rounded-full mr-3"></span>
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {book.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center bg-gray-50 rounded-lg px-3 py-2">
                          <span className="w-2 h-2 bg-ekklesia-brown rounded-full mr-3 flex-shrink-0"></span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="flex-1 py-3 px-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 border-2 border-ekklesia-brown/30 relative overflow-hidden group cursor-pointer" style={{ background: 'linear-gradient(to right, #682d0c, #682d0c, #682d0c)' }}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <Download className="h-4 w-4 mr-2 flex-shrink-0 z-10" style={{ color: 'white' }} />
                      <div className="text-left min-w-0 z-10 flex items-center">
                        <div>
                          <div className="font-semibold text-xs opacity-90" style={{ color: 'white' }}>Softcopy</div>
                          <div className="text-sm font-bold" style={{ color: 'white' }}>{book.softcopyPrice}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 py-3 px-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 border-2 border-ekklesia-red/30 relative overflow-hidden group cursor-pointer" style={{ background: 'linear-gradient(to right, #ff3131, #ff3131, #ff3131)' }}>
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <BookOpen className="h-4 w-4 mr-2 flex-shrink-0 z-10" style={{ color: 'white' }} />
                      <div className="text-left min-w-0 z-10 flex items-center">
                        <div>
                          <div className="font-semibold text-xs opacity-90" style={{ color: 'white' }}>Hardcopy</div>
                          <div className="text-sm font-bold" style={{ color: 'white' }}>{book.hardcopyPrice}</div>
                          <div className="text-xs italic opacity-75" style={{ color: 'white' }}>excluding delivery fee</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prayer Wall & Testimonies Section */}
      <div className="p-4 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Prayer Wall */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-8">
            <div 
              className="p-8 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(to right, #4f46e5, #7c3aed)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <MessageCircle className="h-10 w-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3">Prayer Wall</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Join our community in lifting each other up in prayer. Submit your prayer requests and stand in agreement with others.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Submit Prayer Request */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Submit Prayer Request</h4>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name (Optional for anonymous requests)</label>
                        <input 
                          type="text" 
                          placeholder="Your name or 'Anonymous'"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Prayer Request</label>
                        <textarea 
                          placeholder="Share your prayer need..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <input type="checkbox" id="anonymous" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                        <label htmlFor="anonymous" className="text-sm text-gray-700">Submit anonymously</label>
                      </div>
                      <Button 
                        className="w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 group hover:opacity-90"
                        style={{ background: 'linear-gradient(to right, #4f46e5, #7c3aed)' }}
                      >
                        <span>Submit Prayer Request</span>
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Prayer Requests Feed */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Recent Prayer Requests</h4>
                    <div className="space-y-4">
                      {/* Sample Prayer Request 1 */}
                      <div className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-sm font-medium text-purple-600">Sarah M.</span>
                          <span className="text-xs text-gray-500">2 hours ago</span>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          Please pray for my brother who is battling cancer. He's going through chemotherapy and needs strength and healing.
                        </p>
                        <div className="flex items-center space-x-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-purple-200 text-purple-600 hover:bg-purple-50"
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            I'm Praying (24)
                          </Button>
                        </div>
                      </div>

                      {/* Sample Prayer Request 2 */}
                      <div className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-sm font-medium text-purple-600">Anonymous</span>
                          <span className="text-xs text-gray-500">5 hours ago</span>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          Need prayer for my job situation. I've been unemployed for 3 months and my family is struggling financially.
                        </p>
                        <div className="flex items-center space-x-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-purple-200 text-purple-600 hover:bg-purple-50"
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            I'm Praying (18)
                          </Button>
                        </div>
                      </div>

                      {/* Sample Prayer Request 3 */}
                      <div className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-sm font-medium text-purple-600">David K.</span>
                          <span className="text-xs text-gray-500">1 day ago</span>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          Pray for my daughter's salvation. She's been away from God for years and I want her to return to the Lord.
                        </p>
                        <div className="flex items-center space-x-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-purple-200 text-purple-600 hover:bg-purple-50"
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            I'm Praying (31)
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonies Section */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div 
              className="p-8 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(to right, #059669, #0d9488)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <Star className="h-10 w-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3">Testimonies</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Share how EBOMI has impacted your life and be encouraged by the stories of others.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Submit Testimony */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Share Your Testimony</h4>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Testimony</label>
                        <textarea 
                          placeholder="Share how EBOMI has impacted your life..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                          <option>Healing</option>
                          <option>Deliverance</option>
                          <option>Financial Breakthrough</option>
                          <option>Family Restoration</option>
                          <option>Ministry Growth</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <Button 
                        className="w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 group hover:opacity-90"
                        style={{ background: 'linear-gradient(to right, #059669, #0d9488)' }}
                      >
                        <span>Submit Testimony</span>
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Testimonies Feed */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-gray-900">Recent Testimonies</h4>
                    <div className="space-y-4">
                      {/* Sample Testimony 1 */}
                      <div className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-sm font-medium text-green-600">Maria Johnson</span>
                            <span className="text-xs text-gray-500 ml-2">• Healing</span>
                          </div>
                          <span className="text-xs text-gray-500">3 days ago</span>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          "After listening to Prophet Isa El-Buba's messages on healing, I was completely delivered from chronic back pain that I had for 10 years. God is faithful!"
                        </p>
                        <div className="flex items-center space-x-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-green-200 text-green-600 hover:bg-green-50"
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            Blessed (42)
                          </Button>
                        </div>
                      </div>

                      {/* Sample Testimony 2 */}
                      <div className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-sm font-medium text-green-600">Michael Chen</span>
                            <span className="text-xs text-gray-500 ml-2">• Financial Breakthrough</span>
                          </div>
                          <span className="text-xs text-gray-500">1 week ago</span>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          "The teachings on wealth creation and distribution changed my mindset. Within 6 months, my business grew 300% and I'm now able to bless others generously."
                        </p>
                        <div className="flex items-center space-x-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-green-200 text-green-600 hover:bg-green-50"
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            Blessed (28)
                          </Button>
                        </div>
                      </div>

                      {/* Sample Testimony 3 */}
                      <div className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <span className="text-sm font-medium text-green-600">Grace Williams</span>
                            <span className="text-xs text-gray-500 ml-2">• Family Restoration</span>
                          </div>
                          <span className="text-xs text-gray-500">2 weeks ago</span>
                        </div>
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          "Through EBOMI's prayer network and teachings, my marriage was restored and my children returned to the faith. We're now serving together as a family."
                        </p>
                        <div className="flex items-center space-x-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-green-200 text-green-600 hover:bg-green-50"
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            Blessed (35)
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSection;
