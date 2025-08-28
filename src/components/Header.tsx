import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Bell, X } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

const Header: React.FC = () => {
  const { notifications, removeNotification } = useAppContext();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="w-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* EBOMI Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/Ekklesia.png"
              alt="EBOMI"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-lg sm:text-xl font-bold text-ekklesia-brown">EBOMI</span>
          </div>

          {/* Notification Bell */}
          <div className="relative" ref={notificationRef}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-gray-600 hover:text-ekklesia-brown p-2 relative"
            >
              <Bell className="h-5 w-5" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-ekklesia-brown rounded-full"></span>
              )}
            </Button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      No notifications
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                notification.type === 'live' 
                                  ? 'bg-ekklesia-red/10 text-ekklesia-red'
                                  : notification.type === 'reminder'
                                  ? 'bg-ekklesia-brown/10 text-ekklesia-brown'
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {notification.type.toUpperCase()}
                              </span>
                              <span className="text-xs text-gray-500">{notification.time}</span>
                            </div>
                            <h4 className="text-sm font-medium text-gray-900 mb-1">
                              {notification.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {notification.message}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeNotification(notification.id)}
                            className="text-gray-400 hover:text-gray-600 p-1"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;