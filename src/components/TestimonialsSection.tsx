import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Member",
      content: "These sermons have transformed my daily walk with God. Pastor Michael's teachings are both profound and practical.",
      rating: 5,
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212651_c5d2e9f6.webp"
    },
    {
      name: "David Chen",
      role: "Youth Leader",
      content: "The biblical wisdom shared here has helped me grow in my faith and better serve our youth ministry.",
      rating: 5,
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212651_g3h7i4j1.webp"
    },
    {
      name: "Maria Rodriguez",
      role: "Small Group Leader",
      content: "I share these messages with my small group regularly. They spark meaningful discussions and spiritual growth.",
      rating: 5,
      imageUrl: "https://d64gsuwffb70l.cloudfront.net/68adffe5957381e049f3f4c7_1756234212652_k8l5m2n9.webp"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">What Our Community Says</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 text-green-500/30" />
                <p className="text-gray-300 leading-relaxed pl-4">
                  {testimonial.content}
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;