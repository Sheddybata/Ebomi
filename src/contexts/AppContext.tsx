import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  notifications: NotificationItem[];
  addNotification: (notification: NotificationItem) => void;
  removeNotification: (id: string) => void;
}

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'reminder' | 'live' | 'general';
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('home');
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      title: 'Mid-week Service',
      message: 'Starts in 2 hours',
      time: '2h ago',
      type: 'reminder'
    },
    {
      id: '2',
      title: 'Sunday Service',
      message: 'Live now with Prophet Isa El-Buba',
      time: '5m ago',
      type: 'live'
    }
  ]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const addNotification = (notification: NotificationItem) => {
    setNotifications(prev => [notification, ...prev]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        currentTab,
        setCurrentTab,
        notifications,
        addNotification,
        removeNotification,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
