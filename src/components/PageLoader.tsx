import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100000] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Demo Fitness Club"
    >
      <div className="relative flex flex-col items-center">
        {/* Glow behind logo */}
        <div className="absolute w-32 h-32 bg-[#FF2A2A]/25 rounded-full blur-2xl animate-pulse-slow" />
        
        {/* Logo Monogram */}
        <div className="relative z-10 flex items-center gap-1.5 mb-3">
          <div className="w-12 h-12 bg-[#FF2A2A] rounded-lg flex items-center justify-center font-display text-3xl font-bold tracking-wider text-white shadow-[0_0_25px_rgba(255,42,42,0.6)]">
            DFC
          </div>
        </div>

        <h1 className="font-display text-2xl tracking-[0.25em] text-white font-bold uppercase mb-1">
          DEMO FITNESS CLUB
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-[#FF2A2A] font-semibold">
          BUILD YOUR BODY. BUILD YOUR MIND.
        </p>

        {/* Loading line bar */}
        <div className="w-48 h-[2px] bg-neutral-800 rounded-full mt-6 overflow-hidden">
          <div className="w-full h-full bg-[#FF2A2A] animate-[pulse_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
