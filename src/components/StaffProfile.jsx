import React, { useState } from 'react';
import ActionScreen from './ActionScreen';

export default function StaffProfile({ staff, onBack }) {
  // state can be null, 'contact', or 'tip'
  const [activeAction, setActiveAction] = useState(null);

  if (activeAction) {
    return (
      <ActionScreen 
        staff={staff} 
        mode={activeAction} 
        onClose={() => setActiveAction(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-miko-black text-miko-cream flex flex-col font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden">
      
      {/* Top Navigation */}
      <div className="flex justify-between items-center p-4 absolute top-0 w-full z-10">
        <button 
          onClick={onBack} 
          className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition"
        >
          ←
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition">
          ⋮
        </button>
      </div>

      {/* Hero Image */}
      <div className="h-96 w-full bg-miko-charcoal relative">
        <img 
          src={staff.image.replace('150', '400')} 
          alt={staff.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-miko-black to-transparent"></div>
      </div>

      {/* Profile Details */}
      <div className="px-6 -mt-8 relative z-10">
        <h1 className="text-3xl font-bold tracking-tight">{staff.name}</h1>
        <p className="text-miko-sand text-lg mt-1">{staff.role}</p>
        
        <div className="flex items-center gap-2 mt-3">
          <span className="bg-miko-charcoal border border-gray-700 px-3 py-1 rounded-full text-xs flex items-center gap-1.5 shadow-sm">
             <span className="text-miko-gold text-[10px]">✔</span> Verified Staff
          </span>
        </div>

        {/* Languages */}
        <div className="flex gap-4 mt-5 text-sm text-gray-300">
          {staff.languages.map((lang, idx) => (
            <span key={idx} className="flex items-center gap-1">
              <span className="text-gray-500 text-xs">●</span> {lang}
            </span>
          ))}
        </div>

        {/* Quote */}
        <p className="mt-6 text-gray-400 italic text-sm leading-relaxed border-l-2 border-miko-sand pl-3">
          "{staff.quote}"
        </p>

        {/* Available For section */}
        <div className="mt-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-medium">Available for</p>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-xl opacity-80">🪑</span>
              <span className="text-[10px] text-gray-400">Tables</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-xl opacity-80">📅</span>
              <span className="text-[10px] text-gray-400">Reservations</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-xl opacity-80">🎭</span>
              <span className="text-[10px] text-gray-400">Events</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-xl opacity-80">🛎️</span>
              <span className="text-[10px] text-gray-400">Concierge</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button 
            onClick={() => setActiveAction('contact')}
            className="w-full py-3.5 rounded-xl border border-miko-sand text-miko-sand font-semibold hover:bg-miko-sand hover:text-miko-black transition duration-300 flex justify-center items-center gap-2"
          >
            <span>♡</span> Contact {staff.name}
          </button>
          <button 
            onClick={() => setActiveAction('tip')}
            className="w-full py-3.5 rounded-xl bg-miko-charcoal border border-gray-700 text-miko-cream font-semibold hover:bg-gray-800 transition duration-300 flex justify-center items-center gap-2 shadow-lg"
          >
            <span>♡</span> Leave a tip
          </button>
        </div>

        {/* Social Links Footer */}
        <div className="mt-6 p-4 rounded-xl border border-gray-800 bg-miko-charcoal/30 flex justify-between items-center mb-10 cursor-pointer hover:bg-miko-charcoal/60 transition">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 border border-gray-600 rounded p-1 text-xs">IG</span>
            <span className="text-sm font-medium">Instagram</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="text-xs">🔒</span> Private
            <span className="ml-2 text-lg leading-none">›</span>
          </div>
        </div>

      </div>
    </div>
  );
}