import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Gift } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-800/50">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-green-500/20 rounded-full">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Stay Connected with Grace Ministry
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get notified about new episodes, live sessions, and special events. 
            Plus, receive our exclusive weekly devotional straight to your inbox.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-green-400 mb-4 sm:mb-6">
            <Gift className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm font-medium">Free welcome gift included</span>
          </div>
          
          <div className="w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500 text-base"
              />
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2.5">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-400 text-xs mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;