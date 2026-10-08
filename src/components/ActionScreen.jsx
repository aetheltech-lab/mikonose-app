import React, { useState } from 'react';

export default function ActionScreen({ staff, mode, onClose }) {
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTip, setCustomTip] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const predefinedTips = [5, 10, 20];
  const isContactMode = mode === 'contact';

  const handleSubmit = () => {
    // In the future, this triggers the Stripe payment sheet or Firebase push
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-miko-black text-miko-cream flex flex-col items-center justify-center p-6 font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden text-center">
        <div className="w-16 h-16 rounded-full border-2 border-miko-gold flex items-center justify-center mb-6">
          <span className="text-miko-gold text-2xl">✓</span>
        </div>
        <h2 className="text-2xl font-bold mb-3 tracking-tight">
          {isContactMode ? 'Contact request sent!' : 'Tip sent successfully!'}
        </h2>
        <p className="text-miko-sand opacity-80 mb-8 text-sm leading-relaxed">
          {isContactMode 
            ? `${staff.name} will be notified and can accept or decline your request. You'll be notified once they respond.` 
            : `Thank you for your generosity. ${staff.name} will receive your appreciation.`}
        </p>
        
        <div className="flex items-center gap-4 bg-miko-charcoal p-4 rounded-xl border border-gray-800 w-full mb-8">
          <img src={staff.image} alt={staff.name} className="w-12 h-12 rounded-full object-cover border border-gray-700" />
          <div className="text-left">
            <h3 className="font-semibold">{staff.name}</h3>
            <p className="text-xs text-miko-sand opacity-70">{staff.role}</p>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="w-full py-3.5 rounded-xl border border-gray-600 text-miko-cream font-medium hover:bg-gray-800 transition duration-300"
        >
          Back to profile
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-miko-black text-miko-cream flex flex-col font-sans max-w-md mx-auto relative shadow-2xl overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-800">
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-gray-800 rounded-full transition">
          ←
        </button>
        <h1 className="flex-1 text-center font-semibold text-lg pr-10">
          {isContactMode ? 'Request contact' : 'Leave a tip'}
        </h1>
      </div>

      <div className="p-6 flex flex-col items-center">
        {/* Staff Mini-Profile */}
        <img src={staff.image} alt={staff.name} className="w-20 h-20 rounded-full object-cover border-2 border-gray-700 mb-3" />
        <h2 className="text-xl font-bold">{staff.name}</h2>
        <p className="text-sm text-miko-sand opacity-80 mb-2">{staff.role}</p>
        <span className="bg-miko-charcoal border border-gray-700 px-3 py-1 rounded-full text-xs flex items-center gap-1.5 shadow-sm mb-8">
          <span className="text-miko-gold text-[10px]">✔</span> Verified Staff
        </span>

        {/* Context Text */}
        <div className="text-center mb-8 w-full">
          {isContactMode ? (
            <p className="text-sm text-gray-300">
              {staff.name} can accept or decline your contact request. You can also leave an optional tip to show your appreciation.
            </p>
          ) : (
            <>
              <h3 className="font-semibold mb-2">A small gesture makes a big difference.</h3>
              <p className="text-sm text-gray-400">Leave a tip to show your appreciation for the great experience.</p>
            </>
          )}
        </div>

        {/* Tip Selector */}
        <div className="w-full mb-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-medium">Select a tip amount</p>
          <div className="grid grid-cols-3 gap-3 mb-3">
            {predefinedTips.map(amount => (
              <button
                key={amount}
                onClick={() => setSelectedTip(amount)}
                className={`py-3 rounded-xl border text-lg font-medium transition ${
                  selectedTip === amount 
                    ? 'bg-miko-cream text-miko-black border-miko-cream' 
                    : 'bg-miko-charcoal border-gray-700 hover:border-miko-sand text-miko-cream'
                }`}
              >
                €{amount}
              </button>
            ))}
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">€</span>
            <input 
              type="number"
              placeholder="Custom amount"
              value={customTip}
              onChange={(e) => {
                setCustomTip(e.target.value);
                setSelectedTip('custom');
              }}
              className="w-full bg-miko-charcoal border border-gray-700 rounded-xl py-3 pl-8 pr-4 text-miko-cream placeholder-gray-500 focus:outline-none focus:border-miko-sand transition"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="w-full space-y-3 mt-auto pt-6">
          <button 
            onClick={handleSubmit}
            className="w-full py-3.5 rounded-xl bg-miko-cream text-miko-black font-semibold hover:bg-white transition duration-300"
          >
            {isContactMode ? 'Send request' : 'Continue'}
          </button>
          <button 
            onClick={onClose}
            className="w-full py-3.5 rounded-xl border border-gray-700 text-gray-400 font-medium hover:bg-gray-800 transition duration-300"
          >
            Cancel
          </button>
        </div>

        <p className="text-[10px] text-gray-500 mt-6 flex items-center justify-center gap-1.5">
          <span>♡</span> Tips are voluntary and go directly to the staff member.
        </p>
      </div>
    </div>
  );
}