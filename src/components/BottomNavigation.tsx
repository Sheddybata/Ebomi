import React from 'react';
import { Home, BookOpen, Radio, Users } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const BottomNavigation: React.FC = () => {
  const { currentTab, setCurrentTab } = useAppContext();

  const navigationItems: NavigationItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: Home
    },
    {
      id: 'sermons',
      label: 'Sermons',
      icon: BookOpen
    },
    {
      id: 'live',
      label: 'Live',
      icon: Radio
    },
    {
      id: 'get-involved',
      label: 'Get Involved',
      icon: Users
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40">
      <div className="w-full px-2 py-2">
        <div className="flex items-center justify-around">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all duration-200 min-w-0 flex-1 ${
                  isActive
                    ? 'text-ekklesia-brown bg-ekklesia-brown/10'
                    : 'text-gray-600 hover:text-ekklesia-brown hover:bg-gray-50'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'scale-110' : ''}`} />
                <span className="text-xs font-medium truncate">{item.label}</span>
                {isActive && (
                  <div className="w-1 h-1 bg-ekklesia-brown rounded-full mt-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Safe area for devices with home indicators */}
      <div className="h-0 sm:h-0 bg-transparent" style={{ height: 'env(safe-area-inset-bottom)' }} />
    </nav>
  );
};

export default BottomNavigation;
