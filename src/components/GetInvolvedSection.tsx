import React, { useState } from 'react';
import { 
  Users, Heart, BookOpen, Globe, Target, Star, GraduationCap, Shield, Crown, UserCheck, ArrowRight,
  School, Users2, Radio, Cross, Home, Building2, Calendar, MessageCircle, Church, Minus, Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const GetInvolvedSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const missionCategories = [
    { id: 'all', label: 'All Missions', icon: Star },
    { id: 'education', label: 'Education', icon: School },
    { id: 'community', label: 'Community', icon: Heart },
    { id: 'ministry', label: 'Ministry', icon: Church },
    { id: 'media', label: 'Media', icon: Radio },
    { id: 'prayer', label: 'Prayer', icon: MessageCircle }
  ];

  const topInitiatives = [
    {
      id: 1,
      name: "DR. ISA EL-BUBA FOUNDATION (DISEF)",
      vision: "To demonstrate the love of Christ through impactful social outreach, restoring hope to vulnerable communities, transforming lives tangibly, to reflect the mercy of the Kingdom.",
      interventions: [
        "Educational scholarships and infrastructure",
        "Community health outreaches and clinics", 
        "Humanitarian relief and emergency response"
      ],
      image: "/Dr. Isa elbub foundation DISEF.jpeg",
      icon: Heart,
      headerGradient: "linear-gradient(to right, #dc2626, #ec4899)",
      accentColor: "#dc2626"
    },
    {
      id: 2,
      name: "INITIATIVE FOR A BETTER & BRIGHTER NIGERIA (IBBN)",
      vision: "To drive national rebirth through righteous governance and prophetic policy advocacy.",
      activities: [
        "Civic and voter education",
        "Raising Godly political leaders",
        "Legislative engagement and policy think-tanks"
      ],
      impact: "Sends Spirit-filled leaders into governance, transforming public service with righteousness, accountability, and justice.",
      image: "/ibbn.jpeg",
      icon: Shield,
      headerGradient: "linear-gradient(to right, #059669, #0d9488)",
      accentColor: "#059669"
    },
    {
      id: 3,
      name: "KING SOLOMON EMPOWERMENT INITIATIVE",
      vision: "To raise a new generation of Spirit-filled wealth creators through cooperative systems and enterprise development.",
      tools: [
        "Microloans and seed capital for artisans, women, and youth",
        "National Cooperative Society framework",
        "Skills acquisition hubs and enterprise incubation"
      ],
      impact: "Over 10,000 people empowered annually, fostering grassroots prosperity, cooperative dignity, and faith-based entrepreneurship.",
      image: "/King solomon empowerment initiative.jpeg",
      icon: Crown,
      headerGradient: "linear-gradient(to right, #eab308, #ea580c)",
      accentColor: "#eab308"
    },
    {
      id: 4,
      name: "EL BUMEN (MENTORSHIP NETWORK)",
      vision: "To raise, equip and deploy next-generation leaders across spiritual, civic, academic, and business domains to influence and reform the society",
      strategies: [
        "Apostolic bootcamps and leadership summits",
        "One-on-one mentorship",
        "Online training modules and certification"
      ],
      image: "/Ebumen mentorship network.jpeg",
      icon: UserCheck,
      headerGradient: "linear-gradient(to right, #7c3aed, #4f46e5)",
      accentColor: "#7c3aed"
    }
  ];

  const missions = [
    {
      id: 1,
      name: "EBOMI SCHOOLS",
      category: "education",
      scripture: "Proverbs 2:1-2,6 • Ecclesiastes 7:12 • Proverbs 22:6",
      description: "The power of education is undeniable all across the world, both spiritually, socially, economically, politically and personally.",
      vision: "Education is the universal passport to human development and deliverance from satanic limitations and bondage. It is in fact a part of the function of education to help us escape, not from our own time for we are bound by that but from the intellectual and emotional limitations of our time.",
      details: [
        "Established in August 2004 by Prophet Isa El-Buba and Pastor Choice El-Buba",
        "Help children of the less privileged accomplish their dreams with less cost",
        "Address illiteracy, poverty, and oppression through sound education",
        "Special focus on northern Nigeria where there is much illiteracy especially amongst the girl child",
        "Books and pen in the hands of the right people is the strongest and most powerful weapon"
      ],
      impact: "Partner with us to open up new schools and support more schools in rural poor communities",
      image: "/ebomi-schools.jpg",
      icon: School,
      headerGradient: "linear-gradient(to right, #2563eb, #4f46e5)",
      accentColor: "#2563eb"
    },
    {
      id: 2,
      name: "EBOMI RESPONSE CENTER (The Care Unit)",
      category: "community",
      scripture: "Deuteronomy 15:11 • Galatians 6:2,10 • Hebrews 13:16 • Proverbs 19:17 • Romans 12:13-17",
      description: "A care unit that provides and assists the needy and poor, responding to crisis amongst its members and the community.",
      vision: "Trains God's people for grief ministry and deploys crisis trained pastors to provide physical, psychological, emotional and spiritual care to those affected by man made or natural disasters.",
      details: [
        "Intervened in villages attacked by Islamic terrorists and Fulani herdsmen",
        "Partners with EBOMI Nehemiah project to build destroyed schools and houses",
        "Provides food stuffs to affected communities",
        "Offers comprehensive care during natural disasters",
        "Reaches millions hurting in our world today"
      ],
      impact: "Join us reach out to the millions that are hurting in our world today",
      image: "/response-center.jpg",
      icon: Heart,
      headerGradient: "linear-gradient(to right, #dc2626, #ec4899)",
      accentColor: "#dc2626"
    },
    {
      id: 3,
      name: "EBOMI THEOLOGICAL SEMINARY",
      category: "education",
      scripture: "Proverbs 11:14 • 2 Timothy 2:15 • Matthew 28:19",
      description: "School of Evangelism and Intercession established for training and equipping sound Christian evangelists, missionaries, pastors and intercessors.",
      vision: "Creates professionally well-trained and equipped kingdom managers who can translate what God is saying now for the global revival.",
      details: [
        "Spirit-filled institution with spirit-filled teachers trained by Prophet Isa El-Buba",
        "Prophet El-Buba features in classes regularly",
        "Changes minds from civilian to kingdom militarized mindset",
        "Offers practical courses on leadership, intercession, accounting, management",
        "Runs twice yearly with intensive training camps"
      ],
      impact: "Apply today for comprehensive theological training and kingdom leadership development",
      image: "/seminary.jpg",
      icon: GraduationCap,
      headerGradient: "linear-gradient(to right, #7c3aed, #4f46e5)",
      accentColor: "#7c3aed"
    },
    {
      id: 4,
      name: "EBOMI MEDIA/ICT",
      category: "media",
      scripture: "Matthew 24:14 • Psalms 96:3 • Mark 16:15 • Jeremiah 23:29",
      description: "EBOMI Television - a private, nonprofit organization ensuring people have direct access to the gospel of our Lord and Savior Jesus Christ.",
      vision: "Provide programs and services that inform, educate, enlighten and enrich the public with the true undiluted message of the kingdom.",
      details: [
        "Broadcasts kingdom messages over air and online",
        "Voice of prophecy reaches millions globally in daily broadcast",
        "Tackles today's topics and confronts hidden issues",
        "Messages rebuild, refire, reform and restore Christ's glory",
        "Provides solutions to life's toughest questions"
      ],
      impact: "Support the media force and access kingdom messages through EBOMI Resource Centre",
      image: "/media.jpg",
      icon: Radio,
      headerGradient: "linear-gradient(to right, #059669, #0d9488)",
      accentColor: "#059669"
    },
    {
      id: 5,
      name: "EBOMI MISSIONS AND CRUSADES",
      category: "ministry",
      scripture: "Ezekiel 3:18-21 • Proverbs 11:30 • Mark 13:10 • Mark 1:15",
      description: "Based on the Lord's instruction from 1983: 'ARISE, BUILD ME A STRONG ARMY THAT WILL MILITANTLY RESPONSE TO THE THREAT OF THE ENEMY AGAINST THE CHURCH'",
      vision: "Repossess cities and nations by the force of intercessions and kingdom crusades through global travel and soul-winning.",
      details: [
        "Travels round the world sharing the message of the kingdom",
        "Raises and empowers intercessors globally",
        "Strengthens, empowers and energizes churches and believers",
        "Conducts kingdom conferences, revival congresses, and festivals",
        "Millions of souls drawn into the kingdom with signs and wonders"
      ],
      impact: "Join mission outreach to plant prayer centers for global revival",
      image: "/missions.jpg",
      icon: Globe,
      headerGradient: "linear-gradient(to right, #eab308, #ea580c)",
      accentColor: "#eab308"
    },
    {
      id: 6,
      name: "EBOMI PRAYER NETWORK",
      category: "prayer",
      scripture: "Ezekiel 33:6 • Isaiah 62:6 • Proverbs 8:34 • Isaiah 52:8 • Nehemiah 4:9 • Habakkuk 2:1-20",
      description: "International, interdenominational, multicultural and multi-church network of believers who gather daily and weekly to pray and intercede for the nations.",
      vision: "More than 50,000 members intercessors globally, consistently ranked among strongest prayer ministries worldwide.",
      details: [
        "Prayer cells around the world in USA, Canada, Britain, Africa and other nations",
        "Global command headquarters in Jos, Plateau State, Nigeria",
        "11-storey complex built as global temple of prayer",
        "Prayer squads and command centers in different states, cities and nations",
        "Aggressive and intensive daily prayer watch over cities and nations"
      ],
      impact: "Join today to pray and mobilize for prayers - 'HE WHO KNEELS THE MOST, STANDS THE BEST'",
      image: "/prayer.jpg",
      icon: MessageCircle,
      headerGradient: "linear-gradient(to right, #4f46e5, #7c3aed)",
      accentColor: "#4f46e5"
    },
    {
      id: 7,
      name: "EBOMI MINISTERIAL NETWORK",
      category: "ministry",
      scripture: "Matthew 7:12 • Ecclesiastes 4:9-12 • Romans 14:19 • 1 Corinthians 3:9",
      description: "Platform where churches and ministries come together for networking to advance and accelerate the things of the kingdom.",
      vision: "Build relationships across all denominations, mentor church leaders, academicians, business owners and politicians for kingdom expansion.",
      details: [
        "National and global congresses with thousands of church leaders",
        "Mentors thousands of church leaders for effective shepherding",
        "Helps heal broken relationships among pastors and leaders",
        "Delivers churches from rebellious and disorderly members",
        "Networks ministers in the marketplace for nation building"
      ],
      impact: "Join for quality leadership, sound biblical training and equipping for effective kingdom leadership",
      image: "/ministerial.jpg",
      icon: Church,
      headerGradient: "linear-gradient(to right, #059669, #0d9488)",
      accentColor: "#059669"
    },
    {
      id: 8,
      name: "EBOMI NEHEMIAH PROJECT",
      category: "community",
      scripture: "1 Peter 4:10 • James 2:14-17 • Galatians 6:10 • Matthew 25:35 • Luke 14:13-14",
      description: "Sustainable community development initiative focused on building healthy communities as the foundation of strong churches and nations.",
      vision: "Build hospitals and medical centers in most disadvantaged communities, believing that healthy community makes strong church and nation.",
      details: [
        "Builds hospitals and medical centers in disadvantaged communities",
        "Free housing scheme - over 100 houses (mostly 3-bedroom apartments) built and given free",
        "Feeling connected and responsible for what happens around us",
        "Humanity is our ultimate community",
        "The best way to live is to give and not to accumulate"
      ],
      impact: "Partner with us to create sustainable community development initiatives",
      image: "/nehemiah.jpg",
      icon: Building2,
      headerGradient: "linear-gradient(to right, #0891b2, #2563eb)",
      accentColor: "#0891b2"
    },
    {
      id: 9,
      name: "EBOMI MUSLIM CENTER",
      category: "ministry",
      scripture: "Proverbs 11:30 • Isaiah 6:8 • Matthew 5:15-16",
      description: "Center focused on winning Muslim souls with deep passion, overseen by converted Islamic scholars.",
      vision: "Our lamps have been lit with the intention that we would give light to others - when we do good works, we give credence to the gospel.",
      details: [
        "Rehabilitates Muslim converts with deep biblical training",
        "Prayer and deliverance sessions for converts",
        "Accommodation and feeding for minimum 6 months in secret location",
        "Trains believers for Muslim evangelism",
        "Uses Muslim books to teach truth of Jesus Christ and Bible authority"
      ],
      impact: "Partner to publish materials for evangelism and rehabilitation of Muslims",
      image: "/muslim-center.jpg",
      icon: Minus,
      headerGradient: "linear-gradient(to right, #d97706, #ea580c)",
      accentColor: "#d97706"
    },
    {
      id: 10,
      name: "EBOMI YEARLY EVENTS",
      category: "ministry",
      description: "Comprehensive calendar of events throughout the year including conferences, summits, and special gatherings.",
      vision: "Regular events that bring believers together for revival, teaching, business development, and spiritual growth.",
      details: [
        "January: Time with Jesus (1st to 30th)",
        "March: National Ministers and Believers Revival Congress",
        "July: Business Summit",
        "November: Global Revival and Leadership Congress",
        "Monthly: Night of Glory (last Friday), Believers Seminar (last week)",
        "May: Ultimate Women's Conference",
        "September: Ultimate Youths Conference"
      ],
      impact: "Connect through crusade and mission centre for comprehensive partnership",
      image: "/events.jpg",
      icon: Calendar,
      headerGradient: "linear-gradient(to right, #e11d48, #ec4899)",
      accentColor: "#e11d48"
    }
  ];

  const filteredMissions = activeCategory === 'all' 
    ? missions 
    : missions.filter(mission => mission.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 p-4 z-40">
        <h1 className="text-xl font-bold text-gray-900 mb-2">EBOMI Missions & Ministries</h1>
        <p className="text-gray-600 text-sm">Discover the comprehensive work of EBOMI across education, community, ministry, media, and prayer</p>
      </div>

      {/* Hero Section */}
      <div 
        className="text-white p-8"
        style={{ background: 'linear-gradient(to right, #682d0c, #ff3131)' }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <Star className="h-20 w-20 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl font-bold mb-4">Transforming Lives Through Kingdom Initiatives</h2>
          <p className="text-white/90 text-xl leading-relaxed max-w-4xl mx-auto">
            From education to prayer, from community development to global missions - EBOMI's comprehensive ministry touches every aspect of human need with the love and power of Christ.
          </p>
        </div>
      </div>

      {/* Top Initiatives Section */}
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Core Initiatives</h3>
            <p className="text-gray-600">Our flagship programs transforming communities and nations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {topInitiatives.map((initiative) => {
              const Icon = initiative.icon;
              return (
                <div key={initiative.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  {/* Initiative Header */}
                  <div 
                    className="p-6 text-white relative overflow-hidden"
                    style={{ background: initiative.headerGradient }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        {/* Initiative Icon */}
                        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{initiative.name}</h3>
                          <p className="text-white/90 leading-relaxed">{initiative.vision}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Initiative Image */}
                  <div className="relative h-48 overflow-hidden flex items-center justify-center bg-gray-50">
                    <img 
                      src={initiative.image} 
                      alt={initiative.name}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Initiative Content */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {/* Key Activities */}
                      <div>
                        <h4 className="text-lg font-bold mb-3 text-gray-900 flex items-center">
                          <span 
                            className="w-2 h-6 rounded-full mr-3" 
                            style={{ backgroundColor: initiative.accentColor }}
                          ></span>
                          {initiative.interventions ? 'Key Interventions:' : 
                           initiative.activities ? 'Strategic Activities:' :
                           initiative.tools ? 'Key Tools:' :
                           'Core Strategies:'}
                        </h4>
                        <ul className="space-y-2">
                          {(initiative.interventions || initiative.activities || initiative.tools || initiative.strategies)?.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div 
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" 
                                style={{ backgroundColor: initiative.accentColor }}
                              ></div>
                              <span className="text-gray-700 leading-relaxed text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      {initiative.impact && (
                        <div 
                          className="p-4 rounded-xl border-l-4"
                          style={{ 
                            backgroundColor: `${initiative.accentColor}10`,
                            borderLeftColor: initiative.accentColor 
                          }}
                        >
                          <h5 className="font-bold text-gray-900 mb-1">Impact:</h5>
                          <p className="text-gray-700 leading-relaxed text-sm">{initiative.impact}</p>
                        </div>
                      )}

                      {/* Action Button */}
                      <Button 
                        className="w-full py-3 rounded-xl font-semibold transition-all duration-200 group hover:opacity-90"
                        style={{ background: initiative.headerGradient }}
                      >
                        <span>Join This Initiative</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-t border-gray-200 sticky top-20 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-1">All Missions & Ministries</h3>
            <p className="text-gray-600 text-sm">Explore our comprehensive range of programs</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {missionCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-ekklesia-brown text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {filteredMissions.map((mission, index) => {
              const Icon = mission.icon;
              return (
                <div key={mission.id} className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-all duration-500">
                  {/* Mission Header */}
                  <div 
                    className="p-8 text-white relative overflow-hidden"
                    style={{ background: mission.headerGradient }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-6">
                        <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                          <Icon className="h-10 w-10" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold mb-3">{mission.name}</h3>
                          {mission.scripture && (
                            <p className="text-white/80 text-lg mb-3 font-medium">{mission.scripture}</p>
                          )}
                          <p className="text-white/90 text-lg leading-relaxed">{mission.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mission Content */}
                  <div className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Details Section */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-gray-900">Vision & Mission</h4>
                          <p className="text-gray-700 leading-relaxed text-lg">{mission.vision}</p>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold mb-4 text-gray-900">Key Activities</h4>
                          <ul className="space-y-3">
                            {mission.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-3">
                                <div 
                                  className="w-2 h-2 rounded-full mt-3 flex-shrink-0" 
                                  style={{ backgroundColor: mission.accentColor }}
                                ></div>
                                <span className="text-gray-700 leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div 
                          className="p-6 rounded-2xl border-l-4"
                          style={{ 
                            backgroundColor: `${mission.accentColor}10`,
                            borderLeftColor: mission.accentColor 
                          }}
                        >
                          <h5 className="font-bold text-gray-900 mb-2 text-lg">How You Can Participate:</h5>
                          <p className="text-gray-700 leading-relaxed">{mission.impact}</p>
                        </div>
                      </div>

                      {/* Visual Section */}
                      <div className="space-y-6">
                        <div className="bg-gray-100 rounded-2xl p-8 text-center">
                          <Icon className="h-24 w-24 mx-auto mb-4" style={{ color: mission.accentColor }} />
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{mission.category.toUpperCase()} MISSION</h4>
                          <p className="text-gray-600">Join this transformative initiative</p>
                        </div>
                        
                        <Button 
                          className="w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-200 group hover:opacity-90"
                          style={{ background: mission.headerGradient }}
                        >
                          <span>Join This Mission</span>
                          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Call to Action */}
          <div 
            className="rounded-3xl p-10 text-white text-center relative overflow-hidden mt-12"
            style={{ background: 'linear-gradient(to right, #682d0c, #ff3131)' }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Star className="h-20 w-20 mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-6">Be Part of God's Global Mission</h2>
              <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Choose from our comprehensive range of missions and ministries. Whether you're called to education, prayer, community development, media, or ministry - there's a place for you in EBOMI's mission to transform lives and nations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-white text-ekklesia-brown px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Contact Us Today
                </Button>
                <Button className="bg-white/20 text-white px-10 py-4 rounded-2xl font-semibold hover:bg-white/30 transition-colors border border-white/30 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedSection;
