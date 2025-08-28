
import React, { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import LoadingScreen from '@/components/LoadingScreen';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  console.log('App component - isLoading:', isLoading);

  const handleLoadingComplete = () => {
    console.log('handleLoadingComplete called');
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          {isLoading ? (
            <LoadingScreen onLoadingComplete={handleLoadingComplete} />
          ) : (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          )}
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
