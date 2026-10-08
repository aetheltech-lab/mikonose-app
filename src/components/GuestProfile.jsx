import React, { useState } from 'react';

export default function GuestProfile({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('preferences'); // 'preferences' or 'activity'

  // Mock Data for the Logged-in Guest
  const guestProfile = {
    name: "Marco Rossi",
    status: "Verified Guest",
    visits: 12,
    connections: 8,
    venues: 5,
    image: "https://i.pravatar.cc/150?u=marcorossi",
    preferences: [
      { icon: "📍", label: "Favorite table", value: "Sunset area" },
      { icon: "🍸", label: "Favorite drinks", value: "Gin & Tonic" },
      { icon: "🎵", label: "Music preference", value: "Chill / House" },
      { icon: "🍽️", label: "Dietary notes", value: "No shellfish" },
      { icon: "🎉", label: "Occasion", value: "Birthday — July 18" },
      { icon: "🗣️", label: "Language", value: "Italian / English" }
    ]
  };

  return (
    <div className="min-h-screen bg-miko-black text-miko-cream flex flex-col font-sans max-w-md mx-auto relative shadow-2xl">
      
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800 sticky top-0 bg-miko-black z-20">
        <button 
          onClick={() => onNavigate('landing')} 
          className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition"
        >
          ←
        </button>
        <h1 className="font-semibold text-lg">Guest Profile</h1>
        <button className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition">
          ⚙️
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Guest Header */}
        <div className="flex flex-col items-center pt-8 pb-6 px-6">
          <img 
            src={guestProfile.image} 
            alt={guestProfile.name} 
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-700 mb-4"
          />
          <h2 className="text-2xl font-bold">{guestProfile.name}</h2>
          <div className="flex items-center gap-1.5 mt-2 bg-miko-charcoal border border-gray-700 px-3 py-1 rounded-full text-xs shadow-sm">
             <span className="text-miko-gold text-[10px]">✔</span> {guestProfile.status}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-0 border-y border-gray-800 bg-miko-charcoal">
          <div className="text-center py-4 border-r border-gray-800">
            <p className="text-xl font-bold">{guestProfile.visits}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Visits</p>
          </div>
          <div className="text-center py-4 border-r border-gray-800">
            <p className="text-xl font-bold">{guestProfile.connections}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Connections</p>
          </div>
          <div className="text-center py-4">
            <p className="text-xl font-bold">{guestProfile.venues}</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Venues</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-800">
          <button 
            onClick={() => setActiveTab('preferences')}
            className={`flex-1 py-4 text-sm font-semibold transition border-b-2 ${activeTab === 'preferences' ? 'border-miko-sand text-miko-cream' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
          >
            Preferences
          </button>
          <button 
            onClick={() => setActiveTab('activity')}
            className={`flex-1 py-4 text-sm font-semibold transition border-b-2 ${activeTab === 'activity' ? 'border-miko-sand text-miko-cream' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
          >
            Activity
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'preferences' && (
            <div className="animate-fade-in space-y-4">
              <p className="text-sm text-gray-400 mb-6">
                Save your preferences for a better experience at all partner venues.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {guestProfile.preferences.map((pref, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-miko-charcoal p-3.5 rounded-xl border border-gray-800">
                    <span className="text-xl opacity-80">{pref.icon}</span>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider">{pref.label}</p>
                      <p className="text-sm font-medium mt-0.5">{pref.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3.5 rounded-xl border border-gray-600 text-miko-cream font-medium hover:bg-gray-800 transition duration-300">
                Edit Preferences
              </button>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="animate-fade-in flex flex-col items-center justify-center text-center py-10 opacity-70">
              <span className="text-4xl mb-4">🥂</span>
              <h3 className="font-semibold text-lg mb-2">No recent activity</h3>
              <p className="text-sm text-gray-400">Scan a venue QR code to start building your connections.</p>
              
              <button 
                onClick={() => onNavigate('venue_view')}
                className="mt-8 px-6 py-2.5 rounded-full bg-miko-cream text-miko-black font-semibold hover:bg-white transition"
              >
                Scan a Venue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}