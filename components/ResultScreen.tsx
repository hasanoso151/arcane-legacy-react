import React, { useRef, useState, useEffect } from 'react';
import { AnalysisResult } from '../types';
import html2canvas from 'html2canvas';

interface ResultScreenProps {
  result: AnalysisResult;
  onRetry: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRetry }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const [showToast, setShowToast] = useState(false);

  // Send copy request on mount (Result Generation)
  useEffect(() => {
    // Optional: Keep sending on mount if previously intended, or just setup listener. 
    // User asked for listener specifically:
    const handler = (event: MessageEvent) => {
      if (event.data === "qc-copy-success") {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  // Simple copy text function as a robust sharing method
  const handleCopyText = () => {
    const textToCopy = `أنالقب الأركاني هو: ${result.archetype.name} - ${result.archetype.title}\n\n${result.generatedText}\n\nاكتشف إرثك الآن في #كشف_الإرث_الأركاني`;
    // Attempt standard copy, might fail in iframe but keeping as fallback
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }).catch(() => {
      // Fallback or silence
    });
  };

  // Canvas Generation for "Share Image"
  const handleShare = async () => {
    if (!cardRef.current) return;

    // 0. Hide controls temporarily
    const controls = document.getElementById("qc-controls");
    if (controls) controls.style.opacity = "0";

    await new Promise(resolve => setTimeout(resolve, 150));

    // 2. Take snapshot (Strictly per request: scale 2, bg null)
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
      useCORS: true
    });

    // 3. Save Image
    const link = document.createElement("a");
    link.download = `arcane-legacy-${result.archetype.id}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    // 4. Show controls again
    if (controls) controls.style.opacity = "1";

    // 5. Post Message
    window.parent.postMessage("qc-copy-link", "*");
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-4 animate-fade-in relative">

      {showToast && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.75)",
          padding: "12px 20px",
          borderRadius: "12px",
          color: "white",
          fontSize: "14px",
          zIndex: 9999,
          backdropFilter: "blur(4px)"
        }}>
          تم نسخ رابط الموقع إلى حافظتك… شارك الصورة مع الرابط ليجربها أصدقاؤك!
        </div>
      )}

      {/* Stone Tablet Card */}
      <div
        ref={cardRef}
        className="w-full max-w-lg bg-stone-900 border-2 border-arcane-700 rounded-lg p-8 shadow-2xl relative overflow-hidden"
        style={{
          boxShadow: '0 0 40px rgba(0,0,0,0.8), inset 0 0 100px rgba(0,0,0,0.5)',
        }}
      >
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-stone-texture opacity-20 pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 border border-arcane-gold/20 m-2 pointer-events-none rounded-sm"></div>

        <div className="relative z-10 text-center">
          <div className="mb-2 text-arcane-goldDim font-display tracking-widest text-sm uppercase">تم كشف الرمز</div>
          <h1 className="text-3xl md:text-4xl font-bold text-arcane-gold mb-2 font-serif drop-shadow-md">
            {result.archetype.name}
          </h1>
          <h2 className="text-xl text-arcane-dust mb-6 font-serif italic border-b border-arcane-700 pb-4 inline-block">
            {result.archetype.title}
          </h2>

          <div className="text-gray-200 font-serif leading-loose text-lg text-justify opacity-90 mb-8 whitespace-pre-wrap">
            {result.generatedText}
          </div>

          <div id="qc-controls" className="flex flex-col gap-3 mt-8 transition-opacity duration-200">
            <button
              onClick={handleShare}
              className="w-full py-3 bg-arcane-gold text-black font-bold font-display uppercase tracking-wider hover:bg-white transition-colors rounded-sm flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              حفظ اللوح الحجري (صورة)
            </button>

            <button
              onClick={handleCopyText}
              className="w-full py-3 border border-arcane-gold text-arcane-gold font-bold font-display uppercase tracking-wider hover:bg-arcane-gold/10 transition-colors rounded-sm flex items-center justify-center gap-2"
            >
              {copyStatus === 'copied' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  تم النسخ
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                  نسخ النص
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={onRetry}
        className="mt-8 text-arcane-dust underline hover:text-arcane-gold transition-colors font-serif text-sm opacity-60 hover:opacity-100"
      >
        البدء من جديد (محو الذاكرة)
      </button>
    </div>
  );
};
