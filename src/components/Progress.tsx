import { useEffect, useRef, useState } from 'react';
import { Target, Zap, Activity, Heart, Quote } from 'lucide-react';
import { PROGRESS_METRICS } from '../data/gymData';

const FOCUS_INFO: Record<string, { desc: string; weeklyTarget: string; tip: string }> = {
  Strength: {
    desc: "Compound overload through heavy barbell work, low reps, high tension, and neuromuscular adaptation.",
    weeklyTarget: "3-4 heavy compound sessions",
    tip: "Prioritize 8 hours of sleep and adequate protein for neurological muscle recovery."
  },
  Endurance: {
    desc: "Aerobic mitochondrial density, threshold sprinting, sled pushing, and high-cadence pacing.",
    weeklyTarget: "2-3 cardio interval sessions",
    tip: "Maintain proper nasal breathing and stay hydrated with electrolyte minerals."
  },
  Consistency: {
    desc: "Habit automation, attendance tracking, and eliminating friction between intent and workout execution.",
    weeklyTarget: "4-5 weekly club visits",
    tip: "Never miss twice. Even a 30-minute recovery session maintains momentum."
  },
  Mobility: {
    desc: "Bulletproof hip openers, thoracic extension, ankle dorsiflexion, and joint longevity.",
    weeklyTarget: "15 mins daily mobility",
    tip: "Warm up with dynamic movements and cool down with deep diaphragmatic breathing."
  }
};

export default function Progress() {
  const [inView, setInView] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState('Strength');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#FF2A2A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#FF2A2A] font-bold">
              SUSTAINABLE PERFORMANCE
            </span>
            <span className="w-6 h-[2px] bg-[#FF2A2A]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            YOUR PROGRESS. YOUR PRIDE.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Real fitness is not an overnight trick. It is measured in tangible metric milestones, joint durability, and unwavering habit mastery.
          </p>
        </div>

        {/* Motivational Banner / Quote */}
        <div className="max-w-3xl mx-auto mb-16 p-8 rounded-2xl glass-panel border-l-4 border-l-[#FF2A2A] flex items-center gap-6 relative overflow-hidden">
          <Quote className="w-12 h-12 text-[#FF2A2A]/40 shrink-0 hidden sm:block" />
          <div>
            <blockquote className="font-heading text-xl sm:text-2xl font-bold text-white italic">
              “Progress is built one workout at a time.”
            </blockquote>
            <p className="text-xs uppercase tracking-[0.2em] text-[#A0A0A0] mt-2 font-semibold">
              — Demo Fitness Club Training Philosophy
            </p>
          </div>
        </div>

        {/* Two Columns: Progress Bars & Interactive Focus Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Animated Progress Bars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#FF2A2A]" />
              <span>Core Athletic Transformation Benchmarks</span>
            </h3>

            {PROGRESS_METRICS.map((metric) => {
              const isSelected = selectedFocus === metric.title;
              return (
                <div
                  key={metric.title}
                  onClick={() => setSelectedFocus(metric.title)}
                  className={`p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-900 border border-[#FF2A2A]/60 shadow-[0_5px_20px_rgba(255,42,42,0.15)]'
                      : 'bg-[#101010] border border-neutral-800/80 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-base font-bold text-white flex items-center gap-2">
                      {metric.title}
                      {isSelected && (
                        <span className="text-[10px] uppercase tracking-wider text-[#FF2A2A] font-bold">
                          · Active View
                        </span>
                      )}
                    </span>
                    <span className="font-display text-2xl font-bold text-[#FF2A2A] tabular-nums">
                      {metric.percentage}%
                    </span>
                  </div>

                  {/* Progress Bar Track */}
                  <div className="w-full h-3 rounded-full bg-neutral-800 overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF2A2A] to-[#ff6b6b] transition-all duration-1000 ease-out shadow-[0_0_12px_#FF2A2A]"
                      style={{
                        width: inView ? `${metric.percentage}%` : '0%'
                      }}
                    />
                  </div>

                  <p className="text-xs text-neutral-400">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Tactical Focus Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#0E0E0E] border border-neutral-800 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF2A2A]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF2A2A]/20 text-[#FF2A2A] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#FF2A2A] font-bold block">
                    METHODOLOGY INSIGHT
                  </span>
                  <h4 className="font-heading text-2xl font-bold text-white">
                    {selectedFocus} Protocol
                  </h4>
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {FOCUS_INFO[selectedFocus].desc}
              </p>

              <div className="space-y-4 pt-6 border-t border-neutral-800">
                <div className="flex items-start gap-3">
                  <Zap className="w-4 h-4 text-[#FF2A2A] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wide block">
                      Target Rhythm
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {FOCUS_INFO[selectedFocus].weeklyTarget}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-4 h-4 text-[#FF2A2A] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wide block">
                      Coach Recommendation
                    </span>
                    <span className="text-sm font-semibold text-neutral-300">
                      {FOCUS_INFO[selectedFocus].tip}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800/80">
                <span className="text-[11px] text-neutral-500 block text-center">
                  Click any benchmark on the left to inspect its protocol
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
