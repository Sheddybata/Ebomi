import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    console.log('LoadingScreen mounted');
    
    // Complete loading after video ends or after 3 seconds
    const timer = setTimeout(() => {
      console.log('Loading complete');
      onLoadingComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onLoadingComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <div style={{ marginBottom: '2rem' }}>
        {!videoError ? (
          <video
            autoPlay
            muted
            loop={false}
            playsInline
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
            onEnded={() => {
              console.log('Video ended');
              onLoadingComplete();
            }}
            onError={() => {
              console.log('Video error');
              setVideoError(true);
            }}
          >
            <source src="/Ekklesiavideo.mp4.mp4" type="video/mp4" />
          </video>
        ) : (
          <img 
            src="/Ekklesia.png" 
            alt="EBOMI" 
            style={{ width: '200px', height: '200px', objectFit: 'contain' }}
          />
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #682d0c 0%, #ff3131 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          lineHeight: '1.4',
          textShadow: '0 2px 4px rgba(104, 45, 12, 0.1)',
          letterSpacing: '0.5px'
        }}>
          <div style={{ marginBottom: '0.5rem' }}>
            Evangelical Biblical Outreach
          </div>
          <div>
            Ministries International
          </div>
        </div>
        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #682d0c, #ff3131)',
          margin: '1rem auto 0',
          borderRadius: '2px',
          boxShadow: '0 2px 8px rgba(104, 45, 12, 0.3)'
        }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
