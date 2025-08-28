import React from 'react';
import { Settings, Bell, Download, Wifi, Moon, HelpCircle, LogOut, User, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProfileSection: React.FC = () => {
  const menuItems = [
    {
      icon: User,
      title: "Account Settings",
      subtitle: "Manage your profile and account",
      badge: null
    },
    {
      icon: Bell,
      title: "Notifications",
      subtitle: "Control notification preferences",
      badge: "3"
    },
    {
      icon: Download,
      title: "Downloads",
      subtitle: "Manage downloaded episodes",
      badge: "5 episodes"
    },
    {
      icon: Wifi,
      title: "Data Usage",
      subtitle: "Control streaming quality",
      badge: "High Quality"
    },
    {
      icon: Crown,
      title: "Premium",
      subtitle: "Upgrade to Premium",
      badge: "Upgrade"
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      subtitle: "Get help and contact support",
      badge: null
    },
    {
      icon: Settings,
      title: "Settings",
      subtitle: "App preferences and settings",
      badge: null
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {/* Profile Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-md border-b border-gray-800 p-4">
        <h1 className="text-xl font-bold text-white">Profile</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* User Profile Card */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-black" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg">John Doe</h3>
              <p className="text-gray-400 text-sm">john.doe@example.com</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                  Free Plan
                </span>
                <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300 p-1">
                  <Crown className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {item.badge && (
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.badge === "Upgrade" 
                        ? "bg-green-500/20 text-green-400"
                        : item.badge === "High Quality"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-gray-700 text-gray-300"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  <Icon className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Logout Button */}
        <div className="pt-4">
          <Button
            variant="outline"
            className="w-full border-gray-700 text-red-400 hover:bg-red-500/10 hover:border-red-500"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        {/* App Version */}
        <div className="text-center pt-4">
          <p className="text-gray-500 text-xs">Grace Ministry v1.0.0</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
