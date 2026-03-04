import React, { useState, useEffect } from 'react';
import StatusBar from './components/StatusBar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeroShowcase from './components/HeroShowcase';
import QuickActionGrid from './components/QuickActionGrid';
import VehicleStatus from './components/VehicleStatus';
import RecentActivity from './components/RecentActivity';
import BottomNav from './components/BottomNav';
import Vehicles from './pages/Vehicles';
import FindDealer from './pages/FindDealer';
import Clubhouse from './pages/Clubhouse';
import Login from './pages/Login';
import AIIcon from './assets/svg/ai-icon.svg';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

function App() {
  const [isSplashing, setIsSplashing] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();
  const currentTab = location.pathname;

  useEffect(() => {
    // Premium Splash sequence
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsSplashing(false), 600); // Match CSS transition
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[100dvh] md:w-[393px] md:h-[852px] bg-app-main relative overflow-hidden md:rounded-[48px] md:shadow-[0_0_0_3px_#ffffff,0_0_0_4px_#eee,0_30px_60px_rgba(0,0,0,0.15)] shrink-0 transition-transform duration-200 ease-in-out md:[@media(max-height:900px)]:scale-90 md:[@media(max-height:800px)]:scale-80 md:[@media(max-height:700px)]:scale-70 md:[@media(max-height:600px)]:scale-60">
      {isSplashing && (
        <div className={`absolute inset-0 bg-white flex justify-center items-center z-[9999] transition-opacity duration-600 ease-out ${fadeOut ? 'opacity-0 pointer-events-none' : ''}`}>
          <img src="/logo-crest.png" alt="Cadillac" className="w-[120px] animate-logo-splash" />
        </div>
      )}

      <div className={`w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide bg-[#F1F2F4] ${currentTab === '/' ? 'pb-0' : 'pb-[100px]'}`}>
        <StatusBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <>
              <Header />
              <HeroShowcase />
              <div className="w-full px-5 mt-2 mb-6 box-border">
                <SearchBar className="w-full h-[58px]" />
              </div>
              <QuickActionGrid />
              <VehicleStatus />
              <RecentActivity />
            </>
          } />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/find-dealer" element={<FindDealer />} />
          <Route path="/digital-id" element={<div className="flex w-full h-full items-center justify-center text-gray-400 font-urbanist text-lg">Digital ID Area</div>} />
          <Route path="/club" element={<Clubhouse />} />
          <Route path="/profile" element={<div className="flex w-full h-full items-center justify-center text-gray-400 font-urbanist text-lg">Profile Area</div>} />
        </Routes>
      </div>

      {/* SVG-Matched Square FAB */}
      {currentTab === '/home' && (
        <button className="absolute bottom-[100px] right-6 w-[48px] h-[48px] bg-brand-black rounded-[16px] flex justify-center items-center border-none shadow-[0_8px_24px_rgba(0,0,0,0.2),0_4px_10px_rgba(0,0,0,0.1)] z-[500] cursor-pointer transition-all duration-300 active:scale-95">
          <img src={AIIcon} alt="AI Assistant" className="w-6 h-6" />
        </button>
      )}

      {/* Replaced old Nav with parsed SVG Layout Bottom Nav */}
      {currentTab !== '/' && <BottomNav />}
    </div>
  );
}

export default App;
