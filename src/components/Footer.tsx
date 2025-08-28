import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs sm:text-sm">GM</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">Grace Ministry</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sharing God's word through powerful sermons and building a stronger community of faith.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-green-400 transition-colors p-1.5 sm:p-2 hover:bg-gray-800 rounded-full"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              {['Recent Episodes', 'Sermon Series', 'Live Sessions', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2">
              {['Prayer Requests', 'Bible Study', 'Youth Ministry', 'Community Groups', 'Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">123 Faith Street, Grace City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">hello@graceministrypodcast.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Grace Ministry Podcast. All rights reserved. Made with ❤️ for the Kingdom.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;