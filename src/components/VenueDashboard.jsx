import React from 'react';

export default function VenueDashboard({ onNavigate }) {
  // Mock data mapping perfectly to Sara's conceptual dashboard
  const venueStats = {
    name: "Club XYZ",
    location: "Mykonos, Greece",
    staffOnline: "42",
    staffTotal: "48",
    profileViews: "1,248",
    profileViewsTrend: "+12%",
    contactRequests: "326",
    contactRequestsTrend: "+18%",
    tipsReceived: "€4,820",
    tipsTrend: "+24%"
  };

  const topProfiles = [
    { rank: 1, name: "Marco", role: "Guest Relations", interactions: 184, img: "https://i.pravatar.cc/150?u=marco" },
    { rank: 2, name: "Sofia", role: "Host", interactions: 161, img: "https://i.pravatar.cc/150?u=sofia" },
    { rank: 3, name: "Luca", role: "Concierge", interactions: 137, img: "https://i.pravatar.cc/150?u=luca" },
    { rank: 4, name: "Anna", role: "PR", interactions: 98, img: "https://i.pravatar.cc/150?u=anna" }
  ];

  return (
    <div className="min-h-screen bg-miko-black text-miko-cream flex flex-col font-sans max-w-md mx-auto relative shadow-2xl overflow-y-auto">
      
      {/* Top Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-miko-black sticky top-0 z-20">
        <div>
          <h1 className="font-bold text-xl tracking-wide flex items-center gap-2">
            {venueStats.name}
            <span className="text-miko-gold text-sm">✔</span>
          </h1>
          <p className="text-xs text-miko-sand">{venueStats.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/150?u=manager" alt="Manager" className="w-8 h-8 rounded-full border border-gray-600" />
          <button 
            onClick={() => onNavigate('landing')}
            className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded-full hover:bg-gray-800 transition"
          >
            ⚙️
          </button>
        </div>
      </div>

      <div className="p-5 space-y-6">
        
        {/* Date Selector Placeholder */}
        <div className="flex justify-between items-center text-sm">
          <h2 className="font-semibold text-lg text-white">Overview</h2>
          <span className="text-gray-400 bg-miko-charcoal px-3 py-1 rounded-md border border-gray-800">
            Today, {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </div>

        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-miko-charcoal p-4 rounded-xl border border-gray-800">
            <div className="flex items-center gap-2 mb-2 text-gray-400">
              <span className="text-xs">👥</span>
              <span className="text-[10px] uppercase tracking-wider">Staff online</span>
            </div>
            <p className="text-2xl font-bold">
              {venueStats.staffOnline} <span className="text-sm text-gray-500 font-normal">/ {venueStats.staffTotal}</span>
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
              <span className="text-[10px] text-gray-400">Online</span>
            </div>
          </div>

          <div className="bg-miko-charcoal p-4 rounded-xl border border-gray-800">
            <div className="flex items-center gap-2 mb-2 text-gray-400">
              <span className="text-xs">👁️</span>
              <span className="text-[10px] uppercase tracking-wider">Profile views</span>
            </div>
            <p className="text-2xl font-bold">{venueStats.profileViews}</p>
            <p className="text-[10px] text-green-400 mt-2 font-medium">{venueStats.profileViewsTrend} vs. yesterday</p>
          </div>

          <div className="bg-miko-charcoal p-4 rounded-xl border border-gray-800">
            <div className="flex items-center gap-2 mb-2 text-gray-400">
              <span className="text-xs">✉️</span>
              <span className="text-[10px] uppercase tracking-wider">Contact requests</span>
            </div>
            <p className="text-2xl font-bold">{venueStats.contactRequests}</p>
            <p className="text-[10px] text-green-400 mt-2 font-medium">{venueStats.contactRequestsTrend} vs. yesterday</p>
          </div>

          <div className="bg-miko-charcoal p-4 rounded-xl border border-miko-gold/30 bg-gradient-to-br from-miko-charcoal to-miko-gold/5">
            <div className="flex items-center gap-2 mb-2 text-miko-gold">
              <span className="text-xs">♡</span>
              <span className="text-[10px] uppercase tracking-wider">Tips generated</span>
            </div>
            <p className="text-2xl font-bold text-white">{venueStats.tipsReceived}</p>
            <p className="text-[10px] text-green-400 mt-2 font-medium">{venueStats.tipsTrend} vs. yesterday</p>
          </div>
        </div>

        {/* Top Profiles Section */}
        <div className="bg-miko-charcoal rounded-xl border border-gray-800 p-5 mt-4">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-bold">Top profiles</h3>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">Interactions</span>
          </div>
          
          <div className="space-y-4">
            {topProfiles.map((profile) => (
              <div key={profile.rank} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-500 w-3">{profile.rank}</span>
                  <img src={profile.img} alt={profile.name} className="w-10 h-10 rounded-full object-cover border border-gray-700" />
                  <div>
                    <h4 className="font-semibold text-sm">{profile.name}</h4>
                    <p className="text-[10px] text-miko-sand opacity-70">{profile.interactions} interactions</p>
                  </div>
                </div>
                
                {/* Visual Bar representation */}
                <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-miko-sand rounded-full" 
                    style={{ width: `${(profile.interactions / 200) * 100}%` }}
                  ></div>
                </div>
                <span className="text-gray-500">›</span>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-6 py-3 rounded-lg border border-gray-700 text-sm font-medium hover:bg-gray-800 transition">
            View All Staff
          </button>
        </div>

      </div>
    </div>
  );
}