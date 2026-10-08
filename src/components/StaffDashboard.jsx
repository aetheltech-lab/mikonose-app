import React, { useState } from 'react';

export default function StaffDashboard({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile', 'requests', 'rankings'
  
  // Mock Data for the Logged-in Staff Member
  const myProfile = {
    name: "Eleni",
    role: "Host",
    score: 94,
    percentile: "Top 3% Host in Mykonos",
    visits: 291,
    appreciations: 128,
    venues: 5,
    image: "https://i.pravatar.cc/150?u=sofia"
  };

  // Mock Data for Pending Requests
  const [requests, setRequests] = useState([
    { id: 1, guestName: "Marco Rossi", tip: "€20", status: "pending", time: "10 mins ago" },
    { id: 2, guestName: "David", tip: null, status: "pending", time: "1 hour ago" }
  ]);

  // Mock Data for the Leaderboard
  const rankings = [
    { rank: 1, name: "Nikos", role: "Guest Relations", score: 96, img: "https://i.pravatar.cc/150?u=marco" },
    { rank: 2, name: "Eleni", role: "Host", score: 94, img: "https://i.pravatar.cc/150?u=sofia" },
    { rank: 3, name: "Giorgos", role: "Bartender", score: 93, img: "https://i.pravatar.cc/150?u=luca" },
    { rank: 4, name: "Dimitris", role: "Guest Experience", score: 91, img: "https://i.pravatar.cc/150?u=anna" }
  ];

  const handleRequest = (id, action) => {
    setRequests(requests.filter(req => req.id !== id));
    // In production, this updates Firebase and notifies the guest
  };

  return (
    <div className="min-h-screen bg-miko-black text-miko-cream flex flex-col font-sans max-w-md mx-auto relative shadow-2xl">
      
      {/* Top Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-miko-black sticky top-0 z-20">
        <h1 className="font-bold text-xl tracking-wide">Staff Hub</h1>
        <button 
          onClick={() => onNavigate('landing')}
          className="text-xs font-medium text-gray-400 hover:text-miko-cream transition border border-gray-700 px-3 py-1.5 rounded-full"
        >
          Log Out
        </button>
      </div>

      {/* Tabs */}
      <div className="flex p-4 gap-2 bg-miko-black sticky top-[69px] z-10 border-b border-gray-800">
        {['profile', 'requests', 'rankings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold capitalize transition ${
              activeTab === tab 
                ? 'bg-miko-cream text-miko-black' 
                : 'bg-miko-charcoal text-gray-400 border border-gray-700'
            }`}
          >
            {tab}
            {tab === 'requests' && requests.length > 0 && (
              <span className="ml-1.5 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {requests.length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        
        {/* --- PROFILE TAB --- */}
        {activeTab === 'profile' && (
          <div className="p-5 animate-fade-in">
            <div className="flex items-center gap-5 mb-6">
              <div className="relative">
                <img src={myProfile.image} alt={myProfile.name} className="w-24 h-24 rounded-full object-cover border-2 border-miko-gold" />
                <div className="absolute -bottom-2 -right-2 bg-miko-black rounded-full p-1">
                  <div className="bg-miko-gold text-miko-black font-bold w-8 h-8 flex items-center justify-center rounded-full text-sm border-2 border-miko-black">
                    {myProfile.score}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{myProfile.name}</h2>
                <p className="text-miko-sand text-sm">{myProfile.role}</p>
                <div className="mt-2 bg-miko-gold/10 border border-miko-gold text-miko-gold text-xs px-2.5 py-1 rounded-md inline-block font-medium shadow-sm">
                  🏆 {myProfile.percentile}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-miko-charcoal p-3 rounded-xl border border-gray-800 text-center">
                <p className="text-2xl font-bold">{myProfile.visits}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Connections</p>
              </div>
              <div className="bg-miko-charcoal p-3 rounded-xl border border-gray-800 text-center">
                <p className="text-2xl font-bold">{myProfile.appreciations}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Appreciations</p>
              </div>
              <div className="bg-miko-charcoal p-3 rounded-xl border border-gray-800 text-center">
                <p className="text-2xl font-bold">{myProfile.venues}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Venues</p>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-miko-charcoal border border-gray-700 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition flex justify-between px-4">
                Edit Public Profile <span>›</span>
              </button>
              <button className="w-full bg-miko-charcoal border border-gray-700 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition flex justify-between px-4">
                Privacy & Contact Sharing <span>›</span>
              </button>
            </div>
          </div>
        )}

        {/* --- REQUESTS TAB --- */}
        {activeTab === 'requests' && (
          <div className="p-5 animate-fade-in">
            <h2 className="text-lg font-bold mb-4">Pending Connections</h2>
            {requests.length === 0 ? (
              <p className="text-gray-500 text-center mt-10 text-sm">No new requests right now.</p>
            ) : (
              <div className="space-y-4">
                {requests.map(req => (
                  <div key={req.id} className="bg-miko-charcoal border border-gray-800 p-4 rounded-xl">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-miko-cream">{req.guestName}</h3>
                        <p className="text-xs text-gray-500 mt-0.5">{req.time}</p>
                      </div>
                      {req.tip && (
                        <span className="bg-green-500/10 text-green-400 border border-green-500/30 px-2 py-1 rounded text-xs font-bold">
                          Tip: {req.tip}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-300 mb-4">Would like to connect with you.</p>
                    <div className="flex gap-2">
                      <button onClick={() => handleRequest(req.id, 'accept')} className="flex-1 bg-miko-cream text-miko-black font-semibold py-2 rounded-lg text-sm hover:bg-white transition">
                        Accept
                      </button>
                      <button onClick={() => handleRequest(req.id, 'decline')} className="flex-1 bg-transparent border border-gray-600 text-gray-400 font-semibold py-2 rounded-lg text-sm hover:bg-gray-800 transition">
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* --- RANKINGS TAB --- */}
        {activeTab === 'rankings' && (
          <div className="p-5 animate-fade-in">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Mykonos</h2>
                <p className="text-miko-sand text-sm">Top Hospitality Professionals</p>
              </div>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">This Season</span>
            </div>

            <div className="space-y-3">
              {rankings.map((person, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-xl border transition-all ${person.name === myProfile.name ? 'bg-miko-gold/10 border-miko-gold/50 shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'bg-miko-charcoal border-gray-800 hover:border-gray-700'}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-6 text-center font-bold text-gray-500">
                      {person.rank === 1 ? '🥇' : person.rank === 2 ? '🥈' : person.rank === 3 ? '🥉' : person.rank}
                    </div>
                    <img src={person.img} alt={person.name} className="w-12 h-12 rounded-full object-cover border border-gray-700" />
                    <div>
                      <h3 className="font-semibold">{person.name} {person.name === myProfile.name && '(You)'}</h3>
                      <p className="text-xs text-miko-sand opacity-80">{person.role}</p>
                    </div>
                  </div>
                  <div className="text-xl font-bold text-miko-cream pr-2">
                    {person.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}