import React from 'react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 animate-fade-in relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-arcane-800 via-arcane-900 to-black z-0"></div>
      
      <div className="z-10 relative max-w-lg w-full border border-arcane-goldDim/30 p-8 rounded-lg bg-black/40 backdrop-blur-sm shadow-2xl shadow-arcane-gold/10">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-arcane-gold animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold text-arcane-gold mb-2 tracking-wide">
          كشف الإرث الأركاني
        </h1>
        <p className="text-arcane-dust text-sm md:text-base font-serif italic mb-8 border-b border-arcane-goldDim/30 pb-4 inline-block px-4">
          "ما نُسي يمكن كشفه... وما خُفي ينتظر"
        </p>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed font-serif">
          أجب عن الأسئلة، ودع المخطوطة القديمة تكشف لك عن نمط روحك المنسي عبر العصور.
        </p>

        <button 
          onClick={onStart}
          className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-sm transition-all hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 w-full h-full bg-arcane-gold/10 group-hover:bg-arcane-gold/20 transition-all"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-arcane-gold to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-arcane-gold to-transparent"></div>
          <span className="relative text-arcane-gold font-bold text-xl tracking-wider uppercase font-display">
            ابدأ الطقوس
          </span>
        </button>
      </div>
    </div>
  );
};
