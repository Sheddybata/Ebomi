import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import HomeSection from './HomeSection';
import SermonsSection from './SermonsSection';
import LiveSection from './LiveSection';
import GetInvolvedSection from './GetInvolvedSection';
import AudioPlayer from './AudioPlayer';
import BottomNavigation from './BottomNavigation';

const AppLayout: React.FC = () => {
  const { currentTab } = useAppContext();

  const renderMainContent = () => {
    switch (currentTab) {
      case 'home':
        return <HomeSection />;
      case 'sermons':
        return <SermonsSection />;
      case 'live':
        return <LiveSection />;
      case 'get-involved':
        return <GetInvolvedSection />;
      default:
        return <HomeSection />;
    }
  };

  const showHeader = currentTab === 'home';

  return (
    <div className="min-h-screen bg-gray-50">
      {showHeader && <Header />}
      {renderMainContent()}
      
      {/* Audio Player positioned above bottom navigation */}
      <div className="fixed bottom-16 left-0 right-0 z-30">
        <AudioPlayer
          title="Walking in Divine Purpose"
          pastor="Prophet Isa El-Buba"
          duration="45:32"
          currentTime="12:45"
        />
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default AppLayout;