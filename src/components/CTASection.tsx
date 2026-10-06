import { ArrowRight, Flame } from 'lucide-react';
import { IMAGES } from '../data/gymData';

interface CTASectionProps {
  onOpenJoin: () => void;
}

export default function CTASection({ onOpenJoin }: CTASectionProps) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#050505] overflow-hidden">
      {/* Background with Dark Atmospheric Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.workoutAction}
          alt="Gym Barbell Performance"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Central Neon Glow Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF2A2A]/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Monogram tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-[#FF2A2A]/40 mb-6 backdrop-blur-md">
          <Flame className="w-4 h-4 text-[#FF2A2A]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-200">
            TRANSFORMATION BEGINS NOW
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-6 leading-none">
          READY TO GET <span className="text-[#FF2A2A]">STRONGER?</span>
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-2xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Your fitness journey starts with one decision. Take the first step today. Claim your introductory assessment or lock in your membership.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenJoin}
            className="group px-10 py-5 rounded-2xl bg-[#FF2A2A] hover:bg-[#ff3b3b] text-white font-heading font-black text-base sm:text-lg tracking-wider uppercase transition-all duration-300 shadow-[0_0_35px_rgba(255,42,42,0.5)] hover:shadow-[0_0_55px_rgba(255,42,42,0.8)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3"
          >
            <span>JOIN DEMO FITNESS CLUB</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Reassurance */}
        <p className="text-xs text-neutral-500 mt-6 tracking-wide">
          No mandatory contracts · Complimentary locker & initial physical evaluation included
        </p>
      </div>
    </section>
  );
}
