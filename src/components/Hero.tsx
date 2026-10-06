import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { BUSINESS_CONFIG, HERO_STATS, IMAGES } from '../data/gymData';

interface HeroProps {
  onOpenJoin: () => void;
  onExplorePrograms: () => void;
}

export default function Hero({ onOpenJoin, onExplorePrograms }: HeroProps) {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const [counts, setCounts] = useState(HERO_STATS.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;

    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounts(
        HERO_STATS.map((stat) => Math.floor(stat.value * easedProgress))
      );

      if (frame >= totalFrames) {
        setCounts(HERO_STATS.map((stat) => stat.value));
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [statsVisible]);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#050505]">
      {/* Background Image with Slow Parallax/Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Demo Fitness Club Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-[pulseSlow_12s_ease-in-out_infinite] opacity-40 mix-blend-luminosity filter contrast-125"
        />
        {/* Layered cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
        
        {/* Atmospheric Neon Red Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF2A2A]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-[#FF2A2A]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle Tagline / Trust marker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-700/60 backdrop-blur-md mb-6 animate-[fadeIn_0.8s_ease-out]">
            <Flame className="w-4 h-4 text-[#FF2A2A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
              {BUSINESS_CONFIG.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-6 drop-shadow-2xl">
            UNLEASH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#FF2A2A]">
              INNER STRENGTH
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-10">
            {BUSINESS_CONFIG.heroSubheading} Experience elite conditioning, world-class equipment, and precision coaching crafted for real breakthroughs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            {/* Primary Button */}
            <button
              onClick={onOpenJoin}
              className="group relative px-8 py-4 rounded-xl bg-[#FF2A2A] hover:bg-[#ff3b3b] text-white font-heading font-extrabold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(255,42,42,0.45)] hover:shadow-[0_0_45px_rgba(255,42,42,0.7)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3"
            >
              <span>JOIN THE CLUB</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={onExplorePrograms}
              className="group relative px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 text-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase border border-neutral-700 hover:border-[#FF2A2A] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>EXPLORE PROGRAMS</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex items-center gap-6 mt-10 pt-6 border-t border-neutral-800/60 text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF2A2A]" />
              <span>Certified Strength Coaches</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open 7 Days a Week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Statistics Section */}
      <div ref={statsRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden">
          {/* Subtle Top Red Hairline */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF2A2A] to-transparent opacity-60" />

          {HERO_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight tabular-nums">
                  {counts[idx].toLocaleString()}
                </span>
                <span className="font-display text-3xl sm:text-4xl text-[#FF2A2A] font-bold">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-sm sm:text-base font-bold text-neutral-200 mt-1 uppercase tracking-wide">
                {stat.label}
              </span>
              <span className="text-xs text-neutral-400 mt-0.5 hidden sm:block">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-400 group-hover:text-[#FF2A2A]">
              SCROLL DOWN
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-neutral-700 group-hover:border-[#FF2A2A] flex justify-center p-1.5 transition-colors">
              <div className="w-1.5 h-2.5 bg-[#FF2A2A] rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
