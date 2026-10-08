import React, { useState, useEffect } from 'react';
import { mockVenue, mockStaff } from './data/mockDatabase';
import StaffProfile from './components/StaffProfile';
import LandingPage from './components/LandingPage';
import AuthZone from './components/AuthZone';
import StaffDashboard from './components/StaffDashboard';
import GuestProfile from './components/GuestProfile';
import VenueDashboard from './components/VenueDashboard';
import MarketingWebsite from './components/MarketingWebsite';

function App() {
  // Screen size detection for presentation mode
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentView, setCurrentView] = useState('landing');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedStaff, setSelectedStaff] = useState(null);

  const filters = ['All', 'Hosts', 'Guest Relations', 'Concierge', 'PR'];
  const filteredStaff = activeFilter === 'All' 
    ? mockStaff 
    : mockStaff.filter(staff => staff.role === activeFilter);

  // --- RESPONSIVE ROUTER INTERCEPT ---
  // If viewing on a large laptop/monitor, show the Website with the QR code.
  if (isDesktop) {
    return <MarketingWebsite />;
  }

  // --- MOBILE APP ROUTER LOGIC ---
  
  if (currentView === 'landing') {
    return <LandingPage onNavigate={setCurrentView} />;
  }

  // 2. Add the Auth route mapping here:
  if (currentView === 'login') {
    return <AuthZone onNavigate={setCurrentView} />;
  }

  if (currentView === 'staff_dashboard') {
    return <StaffDashboard onNavigate={setCurrentView} />;
  }

  if (currentView === 'guest_profile') {
    return <GuestProfile onNavigate={setCurrentView} />;
  }

  if (currentView === 'venue_dashboard') {
    return <VenueDashboard onNavigate={setCurrentView} />;
  }

  if (currentView === 'venue_view') {
    
    // EXACT EXISTING LOGIC PRESERVED
    if (selectedStaff) {
      return (
        <StaffProfile 
          staff={selectedStaff} 
          onBack={() => setSelectedStaff(null)} 
        />
      );
    }

    return (
      <div className="min-h-screen bg-miko-black text-miko-cream p-5 pb-20 font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden">
        
        <header className="mb-8 pt-2 relative">
          {/* Back button added just for prototyping navigation */}
          <button 
            onClick={() => setCurrentView('landing')} 
            className="absolute -top-1 -left-2 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-miko-cream transition"
          >
            ←
          </button>
          <h1 className="text-xl font-semibold tracking-wide flex items-center gap-2 mt-4">
            {mockVenue.name}
            {mockVenue.isVerified && (
              <span className="text-miko-gold text-sm">✔</span>
            )}
          </h1>
          <p className="text-miko-sand text-sm opacity-80 flex items-center gap-1 mt-1">
             📍 {mockVenue.location}
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">Who's here tonight?</h2>
          <p className="text-sm text-miko-sand opacity-80">
            Meet the people who make your experience unforgettable.
          </p>
        </section>

        <div className="flex gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-miko-cream text-miko-black border-miko-cream shadow-[0_0_10px_rgba(253,251,247,0.2)]' 
                  : 'bg-transparent text-miko-sand border-gray-700 hover:border-miko-sand'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredStaff.map(staff => (
            <div 
              key={staff.id} 
              onClick={() => setSelectedStaff(staff)}
              className="flex items-center justify-between p-3.5 bg-miko-charcoal rounded-2xl cursor-pointer hover:bg-gray-800 border border-transparent hover:border-gray-700 transition duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <img 
                  src={staff.image} 
                  alt={staff.name} 
                  className="w-14 h-14 rounded-full object-cover border border-gray-700"
                />
                <div>
                  <h3 className="font-semibold text-lg">{staff.name}</h3>
                  <p className="text-xs text-miko-sand opacity-70">{staff.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                {staff.isOnline && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Online</span>
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
                  </div>
                )}
                <div className="text-gray-500 text-xl">›</div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    );
  }

  // Fallback for routes we haven't built yet
  return (
    <div className="min-h-screen bg-miko-black text-miko-cream flex items-center justify-center font-sans max-w-md mx-auto">
      <p>Building this zone next...</p>
      <button onClick={() => setCurrentView('landing')} className="ml-4 text-miko-sand underline">Back</button>
    </div>
  );
}

export default App;