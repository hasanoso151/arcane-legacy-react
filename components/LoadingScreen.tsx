import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [statusText, setStatusText] = useState("يتم الاتصال بالأثير...");
  
  useEffect(() => {
    const messages = [
      "يتم الاتصال بالأثير...",
      "قراءة نقوش الروح...",
      "استدعاء الذاكرة القديمة...",
      "فك رموز المخطوطة...",
      "ترجمة الإرث الأركاني..."
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setStatusText(messages[i]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center p-6">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-arcane-800 rounded-full"></div>
        <div className="absolute inset-0 border-t-4 border-arcane-gold rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-b-4 border-arcane-goldDim rounded-full animate-spin [animation-duration:1.5s]"></div>
        
        {/* Glowing Center */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-2 h-2 bg-arcane-gold rounded-full animate-pulse shadow-[0_0_15px_#c5a059]"></div>
        </div>
      </div>

      <h2 className="text-xl font-display text-arcane-gold tracking-widest animate-pulse">
        {statusText}
      </h2>
      <p className="text-arcane-700 text-sm mt-2 font-serif">
        يرجى الانتظار، العمليات الأركانية تتطلب وقتاً
      </p>
    </div>
  );
};
