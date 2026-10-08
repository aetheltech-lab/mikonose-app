import React, { useState } from 'react';
import logo from '../assets/mykonose_logo.png';
import bgImage from '../assets/mykonos_bg.jpg'; // <-- Added background import

export default function AuthZone({ onNavigate }) {
  const [isLogin, setIsLogin] = useState(true);
  const [accountType, setAccountType] = useState('staff'); // 'guest' or 'staff'
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [wantsVerification, setWantsVerification] = useState(false);

  // Updated Language Dictionary with Image Flags
  const availableLanguages = [
    { id: 'en', name: 'English', flagUrl: 'https://flagcdn.com/w20/gb.png' },
    { id: 'el', name: 'Greek', flagUrl: 'https://flagcdn.com/w20/gr.png' },
    { id: 'it', name: 'Italian', flagUrl: 'https://flagcdn.com/w20/it.png' },
    { id: 'es', name: 'Spanish', flagUrl: 'https://flagcdn.com/w20/es.png' },
    { id: 'fr', name: 'French', flagUrl: 'https://flagcdn.com/w20/fr.png' },
  ];

  const toggleLanguage = (langName) => {
    if (selectedLanguages.includes(langName)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== langName));
    } else {
      setSelectedLanguages([...selectedLanguages, langName]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountType === 'staff') {
      onNavigate('staff_dashboard');
    } else {
      onNavigate('guest_profile'); 
    }
  };

  return (
    <div className="min-h-screen bg-miko-black text-miko-cream flex flex-col font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden">
      
      {/* Dynamic Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* The gradient transitions to dark quickly so the form fields remain highly readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-miko-black/40 via-miko-black/90 to-miko-black"></div>
      </div>

      {/* Scrollable Content Wrapper - Keeps the background fixed while the form scrolls */}
      <div className="relative z-10 flex flex-col h-full w-full overflow-y-auto">
        
        {/* Top Bar */}
        <div className="flex items-center p-4 border-b border-gray-800/50 sticky top-0 z-20 backdrop-blur-md">
          <button onClick={() => onNavigate('landing')} className="w-10 h-10 flex items-center justify-center hover:bg-white/10 bg-black/20 rounded-full transition">
            ←
          </button>
          <div className="flex-1 flex justify-center pr-10">
            <img src={logo} alt="Mikonosé" className="h-6 w-auto opacity-90 drop-shadow-lg" />
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          
          {/* Toggle Login / Register */}
          <div className="flex bg-miko-charcoal/80 backdrop-blur-sm rounded-xl p-1 mb-6 border border-gray-800">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${isLogin ? 'bg-gray-700 text-miko-cream shadow' : 'text-gray-400 hover:text-miko-cream'}`}
            >
              Log In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${!isLogin ? 'bg-gray-700 text-miko-cream shadow' : 'text-gray-400 hover:text-miko-cream'}`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 flex-1">
            
            {!isLogin && (
              <>
                {/* Account Type Selector */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium drop-shadow-md">I am a...</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      onClick={() => setAccountType('guest')}
                      className={`py-3 rounded-xl border text-sm font-medium transition backdrop-blur-sm ${accountType === 'guest' ? 'border-miko-sand text-miko-sand bg-miko-sand/10' : 'bg-miko-charcoal/80 border-gray-700 text-gray-400 hover:border-gray-500'}`}
                    >
                      Guest
                    </button>
                    <button 
                      type="button"
                      onClick={() => setAccountType('staff')}
                      className={`py-3 rounded-xl border text-sm font-medium transition backdrop-blur-sm ${accountType === 'staff' ? 'border-miko-sand text-miko-sand bg-miko-sand/10' : 'bg-miko-charcoal/80 border-gray-700 text-gray-400 hover:border-gray-500'}`}
                    >
                      Hospitality Staff
                    </button>
                  </div>
                </div>
                
                <div>
                  <input type="text" placeholder="Full Name" className="w-full bg-miko-charcoal/90 backdrop-blur-sm border border-gray-700 rounded-xl py-3.5 px-4 text-miko-cream placeholder-gray-500 focus:outline-none focus:border-miko-sand transition" required />
                </div>
              </>
            )}

            <div>
              <input type="email" placeholder="Email Address" className="w-full bg-miko-charcoal/90 backdrop-blur-sm border border-gray-700 rounded-xl py-3.5 px-4 text-miko-cream placeholder-gray-500 focus:outline-none focus:border-miko-sand transition" required />
            </div>
            <div>
              <input type="password" placeholder="Password" className="w-full bg-miko-charcoal/90 backdrop-blur-sm border border-gray-700 rounded-xl py-3.5 px-4 text-miko-cream placeholder-gray-500 focus:outline-none focus:border-miko-sand transition" required />
            </div>

            {/* STAFF ONLY REGISTRATION FIELDS */}
            {!isLogin && accountType === 'staff' && (
              <div className="pt-4 border-t border-gray-800 space-y-5 mt-2">
                
                <div>
                  <input type="text" placeholder="Your Role (e.g. Guest Relations, Bartender)" className="w-full bg-miko-charcoal/90 backdrop-blur-sm border border-gray-700 rounded-xl py-3.5 px-4 text-miko-cream placeholder-gray-500 focus:outline-none focus:border-miko-sand transition" required />
                </div>

                {/* Language Selection */}
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium drop-shadow-md">Languages Spoken</p>
                  <div className="flex flex-wrap gap-2">
                    {availableLanguages.map(lang => (
                      <button
                        key={lang.id}
                        type="button"
                        onClick={() => toggleLanguage(lang.name)}
                        className={`px-3 py-1.5 rounded-full border text-sm flex items-center gap-2 transition backdrop-blur-sm ${selectedLanguages.includes(lang.name) ? 'bg-miko-cream text-miko-black border-miko-cream' : 'bg-miko-charcoal/80 text-gray-300 border-gray-700 hover:border-gray-500'}`}
                      >
                        <img src={lang.flagUrl} alt={lang.name} className="w-4 h-auto rounded-sm" /> 
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Point #5: Verified Badge Upsell Placeholder */}
                <div className={`p-4 rounded-xl border-2 transition cursor-pointer backdrop-blur-md ${wantsVerification ? 'border-miko-gold bg-miko-gold/20' : 'border-gray-700 bg-miko-charcoal/80'}`} onClick={() => setWantsVerification(!wantsVerification)}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-miko-gold text-lg">✔</span>
                      <h3 className="font-bold text-miko-cream">Get Verified Staff Badge</h3>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition border-miko-gold">
                      {wantsVerification && <div className="w-2.5 h-2.5 bg-miko-gold rounded-full"></div>}
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed mb-3">
                    Stand out with a verified badge, build your professional reputation, and unlock premium analytics.
                  </p>
                  <p className="text-sm font-semibold text-miko-sand">€9.99 / month (Billed after setup)</p>
                </div>

              </div>
            )}

            <div className="pt-6">
              <button type="submit" className="w-full py-4 rounded-xl bg-miko-cream text-miko-black font-bold text-lg hover:bg-white transition duration-300 shadow-[0_4px_20px_rgba(253,251,247,0.2)]">
                {isLogin ? 'Log In' : 'Create Account'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}