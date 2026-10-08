import React from 'react';
import logo from '../assets/mykonose_logo.png';
import bgImage from '../assets/mykonos_bg.jpg';

export default function LandingPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-miko-black text-miko-cream flex flex-col font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden">
      
      {/* Dynamic Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }} 
      >
        <div className="absolute inset-0 bg-gradient-to-b from-miko-black/40 via-miko-black/80 to-miko-black"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full p-6 pb-12 flex-1">
        
        {/* Header / Logo Area */}
        <div className="mt-12 mb-auto flex flex-col items-center text-center">
          <img 
            src={logo} 
            alt="Mikonosé" 
            className="w-48 h-auto mb-4 drop-shadow-lg" 
          />
          <p className="text-miko-sand tracking-wide text-sm opacity-90 uppercase">
            Meet in real life. Stay connected.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 w-full mt-auto">
          
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">Met someone you'd like to see again?</h2>
            <p className="text-sm text-gray-300">Scan the QR code at the venue or search below.</p>
          </div>

          {/* Guest Access Button */}
          <button 
            onClick={() => onNavigate('venue_view')}
            className="w-full py-4 rounded-xl bg-miko-cream text-miko-black font-bold text-lg hover:bg-white transition duration-300 shadow-[0_4px_20px_rgba(253,251,247,0.3)]"
          >
            Enter a Venue
          </button>

          {/* Login / Auth Zone Button */}
          <button 
            onClick={() => onNavigate('login')}
            className="w-full py-3.5 rounded-xl border-2 border-miko-sand text-miko-sand font-semibold hover:bg-miko-sand hover:text-miko-black transition duration-300"
          >
            Log In / Create Account
          </button>
          
          {/* Venue Portal Link */}
          <button 
            onClick={() => onNavigate('venue_dashboard')}
            className="w-full py-2 text-sm text-gray-400 hover:text-miko-cream transition duration-300 mt-2"
          >
            Are you a Venue? Enter Dashboard
          </button>

        </div>
      </div>

    </div>
  );
}