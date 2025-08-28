import React from 'react';
import EpisodeCard from './EpisodeCard';

const EpisodesGrid: React.FC = () => {
  const episodes = [
    {
      title: "Faith Over Fear",
      description: "Learning to trust God's plan even when we can't see the path ahead. A powerful message about overcoming anxiety through faith.",
      duration: "42:15",
      date: "3 days ago",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212646_c1b8f2a7.webp"
    },
    {
      title: "The Power of Prayer",
      description: "Discovering the transformative impact of consistent prayer in our daily lives and relationship with God.",
      duration: "38:22",
      date: "1 week ago", 
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212646_e3d9c4b6.webp"
    },
    {
      title: "Love Your Neighbor",
      description: "Exploring what it truly means to love others as ourselves and building stronger community connections.",
      duration: "45:18",
      date: "2 weeks ago",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212647_f5a1d8e9.webp"
    },
    {
      title: "Finding Peace",
      description: "Biblical principles for finding inner peace and rest in God's presence during life's storms.",
      duration: "41:33",
      date: "3 weeks ago",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212647_a7b2c5f8.webp"
    },
    {
      title: "Grace Abounds",
      description: "Understanding the depth of God's grace and how it transforms our lives and relationships.",
      duration: "39:45",
      date: "1 month ago",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212647_d4e7b9c2.webp"
    },
    {
      title: "Hope in Hard Times",
      description: "Finding hope and strength through difficult seasons with biblical wisdom and encouragement.",
      duration: "44:12",
      date: "1 month ago",
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212648_b6c3f1a5.webp"
    }
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Recent Episodes</h2>
          <button className="text-gray-400 hover:text-white text-sm font-medium">
            Show all
          </button>
        </div>
        
        <div className="space-y-3 sm:space-y-2">
          {episodes.map((episode, index) => (
            <EpisodeCard
              key={index}
              {...episode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesGrid;