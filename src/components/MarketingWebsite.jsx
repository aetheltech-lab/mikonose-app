import React from 'react';
import logo from '../assets/mykonose_logo.png';
import bgImage from '../assets/mykonos_bg.jpg';

export default function MarketingWebsite() {
  // Live QR Code Generator pointing to your deployed app
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://aetheltech-lab.github.io/mikonose-app/&bgcolor=FDFBF7&color=121212&margin=10";

  return (
    <div className="min-h-screen bg-miko-black text-miko-cream font-sans overflow-x-hidden selection:bg-miko-gold selection:text-miko-black">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-miko-black/80 backdrop-blur-lg border-b border-gray-800/50 px-10 py-4 flex justify-between items-center">
        <img src={logo} alt="Mikonosé" className="h-10 w-auto" />
        <div className="flex gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-miko-sand transition">Home</a>
          <a href="#features" className="hover:text-miko-sand transition">The Ecosystem</a>
          <a href="#about" className="hover:text-miko-sand transition">About Us</a>
        </div>
        <button className="bg-miko-sand text-miko-black px-6 py-2.5 rounded-full font-bold hover:bg-white transition shadow-[0_0_15px_rgba(230,213,184,0.3)]">
          Partner Venue Portal
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-miko-black via-miko-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 flex items-center justify-between">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold leading-tight mb-6 tracking-tight">
              Meet in real life. <br />
              <span className="text-miko-sand">Stay connected.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed opacity-90">
              The professional identity and relationship network for luxury hospitality. 
              Discover the people behind the experience, leave a gesture of appreciation, and build your digital reputation.
            </p>
            <div className="flex gap-4">
              <div className="border border-gray-700 bg-miko-charcoal/50 backdrop-blur-md px-6 py-3 rounded-xl flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Available on</p>
                  <p className="font-bold">Mobile Web App</p>
                </div>
              </div>
            </div>
          </div>

          {/* The QR Code Scan Station */}
          <div className="bg-miko-charcoal/60 backdrop-blur-xl border border-gray-700 p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center transform hover:scale-105 transition duration-500">
            <h3 className="text-2xl font-bold mb-2">Enter the Experience</h3>
            <p className="text-miko-sand text-sm mb-8">Scan with your smartphone camera</p>
            <div className="bg-miko-cream p-3 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.2)] mb-6">
              <img src={qrCodeUrl} alt="Scan to open Mikonosé" className="w-56 h-56 rounded-xl" />
            </div>
            <p className="text-xs text-gray-400 max-w-[200px]">No app store download required. Instant access.</p>
          </div>
        </div>
      </section>

      {/* Features / Ecosystem Section */}
      <section id="features" className="py-32 bg-miko-black px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">A Three-Sided Ecosystem</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Connecting guests, empowering hospitality professionals, and providing unprecedented analytics for premium venues.</p>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div className="bg-miko-charcoal p-10 rounded-3xl border border-gray-800 hover:border-miko-sand transition duration-300">
              <span className="text-4xl mb-6 block">🥂</span>
              <h3 className="text-2xl font-bold mb-4">For Guests</h3>
              <p className="text-gray-400 leading-relaxed">
                Had a great interaction? Find the host, bartender, or concierge you met. Send a contact request or leave an optional tip to show your appreciation, all without exchanging personal numbers.
              </p>
            </div>
            <div className="bg-miko-charcoal p-10 rounded-3xl border border-gray-800 hover:border-miko-sand transition duration-300">
              <span className="text-4xl mb-6 block">⭐</span>
              <h3 className="text-2xl font-bold mb-4">For Staff</h3>
              <p className="text-gray-400 leading-relaxed">
                Build your professional reputation. Every interaction, tip, and connection adds to your Mikonosé Score. Carry your verified hospitality identity with you, no matter where you work.
              </p>
            </div>
            <div className="bg-miko-charcoal p-10 rounded-3xl border border-gray-800 hover:border-miko-sand transition duration-300">
              <span className="text-4xl mb-6 block">🏛️</span>
              <h3 className="text-2xl font-bold mb-4">For Venues</h3>
              <p className="text-gray-400 leading-relaxed">
                Understand the relationship value created by your team. Access real-time analytics on staff performance, returning guests, and tips generated to elevate your hospitality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us & Socials Footer */}
      <footer id="about" className="bg-miko-charcoal py-16 border-t border-gray-800 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20">
          <div>
            <img src={logo} alt="Mikonosé" className="h-10 w-auto mb-6 opacity-50 grayscale" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-md mb-8">
              Born in Mykonos, designed for the global luxury hospitality industry. We believe that people create experiences, and our mission is to keep them connected.
            </p>
            <div className="flex gap-4">
              {/* Social Media Placeholders */}
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-miko-cream hover:border-miko-sand transition">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-miko-cream hover:border-miko-sand transition">WA</a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-miko-cream hover:border-miko-sand transition">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-miko-cream hover:border-miko-sand transition">TT</a>
            </div>
          </div>
          <div className="flex flex-col justify-end text-right">
            <p className="text-sm text-gray-600 mb-2">Engineered by</p>
            <p className="text-lg font-semibold text-gray-400 tracking-wide">AETHELTECH SOFTWARE</p>
            <p className="text-xs text-gray-600 mt-6">© {new Date().getFullYear()} Mikonosé. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}